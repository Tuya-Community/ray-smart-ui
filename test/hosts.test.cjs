const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { checkSmartUIHosts } = require('../config.cjs');

function fixture(run) {
  const dist = fs.mkdtempSync(path.join(os.tmpdir(), 'smart-ui-hosts-'));
  const write = (file, value) => {
    const target = path.join(dist, file);
    fs.mkdirSync(path.dirname(target), { recursive: true });
    fs.writeFileSync(target, JSON.stringify(value));
  };
  const components = native =>
    Object.fromEntries(
      ['dialog', 'toast'].map(name => {
        const entry = `/_npm/smart-ui/${native ? 'lynx/' : ''}dist/${name}/index`;
        write(`${entry.slice(1)}.json`, { component: true });
        return [`${name}-index`, entry];
      })
    );
  write('app.json', {
    pages: ['pages/home/index'],
    subPackages: [{ root: 'pet', pages: ['fence/index'] }],
  });
  const home = { renderer: 'native', usingComponents: components(true) };
  const other = { usingComponents: components(false) };
  write('pages/home/index.json', home);
  write('pet/fence/index.json', other);
  try {
    run({ dist, home, other, write });
  } finally {
    fs.rmSync(dist, { recursive: true, force: true });
  }
}

test('validates native home and retained WebView subpackage host registrations', () => {
  fixture(({ dist }) => assert.equal(checkSmartUIHosts(dist), 2));
});

test('rejects a host mounted by the page wrapper but absent from page registration', () => {
  fixture(({ dist, home, write }) => {
    const usingComponents = { ...home.usingComponents };
    delete usingComponents['toast-index'];
    write('pages/home/index.json', { ...home, usingComponents });
    assert.throws(() => checkSmartUIHosts(dist), /pages\/home\/index: missing Lynx toast/);
  });
});

test('rejects a WebView subpage that only registered the native host', () => {
  fixture(({ dist, home, other, write }) => {
    write('pet/fence/index.json', { ...other, usingComponents: home.usingComponents });
    assert.throws(() => checkSmartUIHosts(dist), /pet\/fence\/index: missing WebView dialog/);
  });
});

test('rejects a registered host whose component artifact was not emitted', () => {
  fixture(({ dist, home }) => {
    fs.rmSync(path.join(dist, home.usingComponents['dialog-index'].slice(1) + '.json'));
    assert.throws(() => checkSmartUIHosts(dist), /dialog component file is missing/);
  });
});

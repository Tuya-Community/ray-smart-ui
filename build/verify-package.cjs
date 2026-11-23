const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
function verifyPackage() {
  for (const name of ['config.cjs', 'config.d.ts', 'components.json', 'page-hosts.json', 'README-LYNX.md']) {
    assert.ok(fs.existsSync(path.join(root, name)), `Missing published entry: ${name}; run yarn build`);
  }
  const groups = require('../components.json');
  assert.ok(groups.length > 50, 'Incomplete public component inventory');
  for (const format of ['es', 'lib']) {
    for (const group of groups) {
      for (const extension of ['js', 'd.ts']) {
        assert.ok(fs.existsSync(path.join(root, format, group.dir, `index.${extension}`)), `${format}/${group.dir}/index.${extension} is missing`);
      }
      if (['renderer', 'smart-ui-page'].includes(group.dir)) continue;
      for (const renderer of ['webview', 'lynx']) {
        assert.ok(fs.existsSync(path.join(root, renderer, format, group.dir, 'index.js')), `${renderer}/${format}/${group.dir} is missing`);
      }
    }
  }
  const sdk = path.dirname(require.resolve('@tuya/miniapp-smart-ui/package.json'));
  const pkg = require('../package.json');
  assert.equal(require(path.join(sdk, 'package.json')).version, pkg.dependencies['@tuya/miniapp-smart-ui']);
  assert.equal(require('@ray-js/components-ty-slider/package.json').version, pkg.dependencies['@ray-js/components-ty-slider']);
  assert.ok(fs.existsSync(path.join(sdk, 'lynx/dist/switch/index.wxml')), 'Installed SDK has no Lynx tree');
  assert.deepEqual(require('../page-hosts.json'), ['dialog', 'toast']);
  console.log(`Smart UI package verified: ${groups.length} entry groups, both renderer trees, hosts, config and pinned dependencies`);
}
module.exports = { verifyPackage };
if (require.main === module) verifyPackage();

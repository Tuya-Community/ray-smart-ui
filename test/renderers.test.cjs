const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const os = require('node:os');
const ts = require('typescript');
const React = require('react');
const { renderToStaticMarkup } = require('react-dom/server');
const esbuild = require('esbuild');
const root = path.resolve(__dirname, '..');
function runtime() {
  let pages = [];
  const modules = {};
  const load = (name, relative) => {
    const text = fs.readFileSync(path.join(root, relative), 'utf8');
    const js = ts.transpileModule(text, { compilerOptions: { module: ts.ModuleKind.CommonJS, esModuleInterop: true, target: ts.ScriptTarget.ES2018, jsx: ts.JsxEmit.React } }).outputText;
    const output = { exports: {} };
    new Function('require', 'module', 'exports', js)(request => {
      if (request === '@ray-js/ray') return { getCurrentPages: () => pages };
      if (request === './index' || request === '../renderer') return modules.context;
      if (request === '../dialog') return { Dialog: () => null };
      if (request === '../toast') return { Toast: () => null };
      return require(request);
    }, output, output.exports);
    modules[name] = output.exports;
    return output.exports;
  };
  const context = load('context', 'src/renderer/index.ts');
  const select = load('select', 'src/renderer/select.tsx');
  const page = load('page', 'src/smart-ui-page/index.tsx');
  return { ...context, ...select, ...page, pages: value => { pages = value; } };
}
test('component context is per page and a nested WebView boundary does not inherit native', () => {
  const r = runtime();
  const C = r.selectComponent(() => React.createElement('i', null, 'web'), () => React.createElement('i', null, 'native'), 'Probe');
  const html = renderToStaticMarkup(React.createElement(React.Fragment, null,
    React.createElement(C),
    React.createElement(r.SmartUIPage, { renderer: 'native', route: 'pages/home/index' },
      React.createElement(C),
      React.createElement(r.SmartUIRendererContext.Provider, { value: 'webview' }, React.createElement(C))),
    React.createElement(C)));
  assert.equal(html, '<i>web</i><i>native</i><i>web</i><i>web</i>');
});
test('native slot metadata preserves named children and event/style identity', () => {
  const r = runtime(); let props;
  const C = r.selectComponent(() => null, value => { props = value; return null; }, 'Picker');
  const onChange = () => {}; const customStyle = { height: 100 };
  renderToStaticMarkup(React.createElement(r.SmartUIPage, { renderer: 'native' }, React.createElement(C, { onChange, customStyle, slot: { topBar: React.createElement('i') } }, React.createElement('i', { slot: 'footer' }), React.createElement('i'))));
  assert.equal(props.onChange, onChange); assert.equal(props.customStyle, customStyle);
  assert.deepEqual(props.lynxSlotNames, ['top-bar', 'footer']); assert.equal(props.lynxHasDefaultSlot, true);
});
test('Slider and RangeSlider inherit the page, with radius fallback only on native Slider', () => {
  const r = runtime(); let props;
  const host = value => { props = value; return null; }; host.RangeSlider = host;
  const C = r.selectComponent(host, host, 'Slider');
  renderToStaticMarkup(React.createElement(r.SmartUIPage, { renderer: 'native' }, React.createElement(C, { min: -10, value: 0, trackStyle: { borderRadius: 7 } })));
  assert.equal(props.renderMode, 'lynx'); assert.equal(props.minTrackRadius, 7); assert.equal(props.value, 0);
  renderToStaticMarkup(React.createElement(r.SmartUIPage, { renderer: 'native' }, React.createElement(C.RangeSlider, { value: [1, 2] })));
  assert.deepEqual(props.value, [1, 2]); assert.equal(props.lynxHasDefaultSlot, false);
  renderToStaticMarkup(React.createElement(C, { minTrackRadius: 'inherit' }));
  assert.deepEqual(props, { minTrackRadius: 'inherit' });
});
test('instances choose the page or explicit context and register before child mount work', () => {
  const r = runtime(); const calls = [];
  const web = Object.assign(function(...args) { calls.push(['web', ...args]); return 'web'; }, { confirm() { return this; } });
  const native = Object.assign(function(...args) { calls.push(['native', ...args]); return 'native'; }, { confirm() { return this; } });
  const instance = r.selectInstance(web, native);
  const home = { route: 'pages/home/index', selectComponent() {} };
  const other = { route: 'pages/other/index', selectComponent() {} };
  r.pages([home]);
  function Child() { assert.equal(instance('hello'), 'native'); return null; }
  renderToStaticMarkup(React.createElement(r.SmartUIPage, { renderer: 'native' }, React.createElement(Child)));
  assert.equal(calls[0][1].context, home);
  r.pages([home, other]); assert.equal(instance.confirm({ message: 'other' }), web);
  let count = 0; assert.equal(instance.confirm({ context: () => { count++; return home; } }), native); assert.equal(count, 1);
});
test('page registration cleanup removes only its owner, including repeated routes', () => {
  const r = runtime(); const page = { route: 'pages/same/index' }; r.pages([page]);
  const cleanA = r.registerPageBoundary({}, { page, renderer: 'native' });
  const cleanB = r.registerPageBoundary({}, { page, renderer: 'webview' });
  assert.equal(r.resolveInstanceRenderer(page), 'webview'); cleanA();
  assert.equal(r.resolveInstanceRenderer(page), 'webview'); cleanB();
  assert.equal(r.resolveInstanceRenderer(page), 'webview');
});
test('clear and default options are applied to both renderer queues', () => {
  const r = runtime(); const calls = [];
  const endpoint = name => Object.assign(() => null, { clear: () => calls.push(name), setDefaultOptions: value => calls.push(value) });
  const i = r.selectInstance(endpoint('web'), endpoint('native')); i.clear(); i.setDefaultOptions(3);
  assert.deepEqual(calls, ['web', 'native', 3, 3]);
});
test('configuration composes hooks without dropping aliases, define, or plugins', () => {
  const { withSmartUI } = require('../config.cjs');
  const previous = { name: 'existing' };
  const c = withSmartUI({ resolveAlias: { keep: '/keep' }, importTransformer: [{ libraryName: 'other' }], esbuildConfig: opts => ({ ...opts, define: { SOME: '1' }, plugins: [previous] }) });
  const b = c.esbuildConfig({});
  assert.equal(c.resolveAlias.keep, '/keep'); assert.equal(c.importTransformer.length, 2);
  assert.equal(b.define.SOME, '1'); assert.ok(b.plugins.includes(previous));
  const d = withSmartUI(c); assert.equal(d.importTransformer.length, 2); assert.equal(d.esbuildConfig({}).plugins.filter(p => p.name === 'smart-ui-named-imports').length, 1);
  assert.throws(() => withSmartUI({}, { renderer: 'unsupported' }));
});
test('configuration preserves an asynchronous existing hook', async () => {
  const { withSmartUI } = require('../config.cjs');
  const result = await withSmartUI({ esbuildConfig: async opts => ({ ...opts, define: { ASYNC: '1' } }) }).esbuildConfig({});
  assert.equal(result.define.ASYNC, '1'); assert.equal(result.plugins[0].name, 'smart-ui-named-imports');
});
test('real esbuild keeps named imports narrow and WebView output excludes native wrappers', async () => {
  const { withSmartUI } = require('../config.cjs');
  const temp = fs.mkdtempSync(path.join(os.tmpdir(), 'ray-smart-ui-imports-'));
  try {
    const entry = path.join(temp, 'entry.js'); fs.writeFileSync(entry, "import { Switch, Picker as Choose } from '@ray-js/smart-ui'; export { Switch, Choose };");
    for (const renderer of ['mixed', 'webview']) {
      const c = withSmartUI({}, { renderer });
      const opts = c.esbuildConfig({});
      const result = await esbuild.build({ ...opts, alias: c.resolveAlias, entryPoints: [entry], bundle: true, write: false, format: 'esm', metafile: true, external: ['react', 'react/*', 'lodash-es', '@ray-js/ray', '@ray-js/components-ty-slider', '@tuya/miniapp-smart-ui/*', path.dirname(require.resolve('@tuya/miniapp-smart-ui/package.json')) + '/*'] });
      const inputs = Object.keys(result.metafile.inputs).map(value => '/' + value).join('\n');
      assert.match(inputs, /smart-ui-imports:Picker,Switch/);
      assert.ok(!inputs.includes('/calendar/'));
      assert.equal(inputs.includes('/lynx/es/switch/'), renderer === 'mixed');
    }
  } finally { fs.rmSync(temp, { recursive: true, force: true }); }
});
test('public entry inventory and auto-import aliases are complete in ESM and CommonJS', () => {
  const groups = require('../components.json');
  for (const kind of ['es', 'lib']) for (const group of groups) {
    assert.ok(fs.existsSync(path.join(root, kind, group.dir, 'index.js')));
    assert.ok(fs.existsSync(path.join(root, kind, group.dir, 'index.d.ts')));
  }
  const transform = require('../lib/auto-import').default;
  for (const name of ['NotifyInstance', 'ToastInstance', 'DialogInstance', 'SmartUIPage', 'useSmartUIRenderer', 'DateTimePicker']) {
    const request = transform.format(name, name).match(/from "([^"]+)"/)[1];
    assert.ok(fs.existsSync(path.join(root, request.replace('@ray-js/smart-ui/', ''), 'index.js')), request);
  }
  assert.match(fs.readFileSync(path.join(root, 'lynx/es/switch/Switch.js'), 'utf8'), /miniapp-smart-ui\/lynx\/dist\/switch\/index/);
  assert.doesNotMatch(fs.readFileSync(path.join(root, 'webview/es/switch/Switch.js'), 'utf8'), /miniapp-smart-ui\/lynx\//);
});

const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('fs');
const vm = require('vm');
const ts = require('typescript');
const React = require('react');
const { renderToStaticMarkup } = require('react-dom/server');
const exportsObject = {};
const nativeInstance = {}, webInstance = {};
const requireMock = name => {
  if (name === 'react') return React;
  if (name === './NativePopup') return { NativePopup: props => React.createElement('div', null, props.children), NativeActionSheet: props => React.createElement('div', null, props.children) };
  if (name === './NativeCalendar') return { Calendar: props => React.createElement('div', null, props.children) };
  if (name === './NativeSlider') return { NativeSlider: props => React.createElement('div', null, props.children), NativeSliderCore: props => React.createElement('div', null, props.children) };
  if (name === './common/withReactProps') return { withReactProps: value => value };
  if (name.endsWith('/toast/toast')) return nativeInstance;
  const native = name.startsWith('@tuya/miniapp-smart-ui-lynx');
  const slug = name.split('/')[native ? 3 : 3];
  const key = slug.split('-').map(p => p[0].toUpperCase() + p.slice(1)).join('');
  const component = props => React.createElement('div', { 'data-renderer': native ? 'lynx' : 'webview', 'data-component': key, 'data-leaked': String('renderMode' in props) }, props.children);
  if (key === 'Slider') component.RangeSlider = component;
  return native ? component : { [key]: component, ToastInstance: webInstance };
};
const code = ts.transpileModule(fs.readFileSync(__dirname + '/src/index.tsx', 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, esModuleInterop: true } }).outputText;
vm.runInNewContext(code, { exports: exportsObject, require: requireMock });
test('default dispatch stays WebView and does not leak renderMode to component props', () => {
  const html = renderToStaticMarkup(React.createElement(exportsObject.Icon));
  assert.match(html, /data-renderer="webview"/); assert.match(html, /data-leaked="false"/);
});
test('nested components inherit Lynx mode while an explicit WebView child can override', () => {
  const html = renderToStaticMarkup(React.createElement(exportsObject.Grid, { renderMode: 'lynx' }, [
    React.createElement(exportsObject.GridItem, { key: 'native' }),
    React.createElement(exportsObject.GridItem, { key: 'web', renderMode: 'webview' }),
  ]));
  assert.equal((html.match(/data-renderer="lynx"/g) || []).length, 2);
  assert.equal((html.match(/data-renderer="webview"/g) || []).length, 1);
});
test('Toast instance selection is explicit and defaults to the original implementation', () => {
  assert.equal(exportsObject.getToastInstance(), webInstance);
  assert.equal(exportsObject.getToastInstance('lynx'), nativeInstance);
});

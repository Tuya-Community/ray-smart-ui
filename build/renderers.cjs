// Generate both renderer trees from this package's own compiled source.
const fs = require('node:fs');
const path = require('node:path');
const ts = require('typescript');
const root = path.resolve(__dirname, '..');
const walk = directory => fs.readdirSync(directory, { withFileTypes: true }).flatMap(entry => {
  const file = path.join(directory, entry.name);
  return entry.isDirectory() ? walk(file) : [file];
});
const write = (file, value) => {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, value);
};
const relative = (from, to) => {
  const value = path.relative(path.dirname(from), to).replace(/\\/g, '/');
  return value.startsWith('.') ? value : './' + value;
};
const kebab = name => name.replace(/[A-Z]/g, c => '-' + c.toLowerCase()).replace(/^-/, '');
const ast = ts.createSourceFile('index.js', fs.readFileSync(path.join(root, 'es/index.js'), 'utf8'), ts.ScriptTarget.Latest, true);
const groups = ast.statements.filter(ts.isExportDeclaration).filter(node => node.moduleSpecifier && node.exportClause && ts.isNamedExports(node.exportClause)).map(node => ({
  dir: node.moduleSpecifier.text.replace(/^\.\//, ''),
  names: node.exportClause.elements.map(item => item.name.text),
}));
for (const format of ['es', 'lib']) {
  const original = path.join(root, format);
  for (const branch of ['webview', 'lynx']) {
    const output = path.join(root, branch, format);
    for (const file of walk(original)) {
      const rel = path.relative(original, file);
      if (rel.startsWith('renderer' + path.sep)) continue;
      const target = path.join(output, rel);
      let bytes = fs.readFileSync(file);
      if (/\.(?:js|ts)$/.test(file)) {
        bytes = bytes.toString().replace(/(['"])([^'"\r\n]+)\1/g, (match, quote, request) => {
          if (branch === 'lynx' && /^@tuya\/miniapp-smart-ui\/(dist|lib)\//.test(request)) {
            return quote + request.replace('@tuya/miniapp-smart-ui/', '@tuya/miniapp-smart-ui/lynx/') + quote;
          }
          if (request.startsWith('.')) {
            const resolved = path.resolve(path.dirname(file), request);
            const shared = path.join(original, 'renderer');
            if (resolved === shared || resolved.startsWith(shared + path.sep)) {
              return quote + relative(target, resolved) + quote;
            }
          }
          return match;
        });
      }
      write(target, bytes);
    }
  }
  for (const group of groups) {
    if (['renderer', 'smart-ui-page'].includes(group.dir)) continue;
    const web = `../../webview/${format}/${group.dir}`;
    const native = `../../lynx/${format}/${group.dir}`;
    const definitions = group.names.map(name => {
      if (name.endsWith('Instance')) return `export const ${name} = /* @__PURE__ */ selectInstance(Web.${name}, Native.${name});`;
      if (!/^[A-Z]/.test(name)) return `export const ${name} = Web.${name};`;
      return `export const ${name} = /* @__PURE__ */ selectComponent(Web.${name}, Native.${name}, ${JSON.stringify(name)});`;
    });
    let code = `import * as Web from '${web}';\nimport * as Native from '${native}';\nimport { selectComponent, selectInstance } from '../renderer/select';\n${definitions.join('\n')}\n`;
    if (format === 'lib') code = ts.transpileModule(code, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2018 } }).outputText;
    write(path.join(original, group.dir, 'index.js'), code);
    for (const name of group.names) {
      const alias = kebab(name);
      if (alias === group.dir || groups.some(value => value.dir === alias)) continue;
      const source = `export { ${name} } from '../${group.dir}';\n`;
      write(path.join(original, alias, 'index.js'), format === 'es' ? source : ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText);
      write(path.join(original, alias, 'index.d.ts'), source);
      for (const branch of ['webview', 'lynx']) {
        write(path.join(root, branch, format, alias, 'index.js'), format === 'es' ? source : ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText);
        write(path.join(root, branch, format, alias, 'index.d.ts'), source);
      }
    }
  }
}
for (const branch of ['webview', 'lynx']) {
  write(path.join(root, branch, 'package.json'), JSON.stringify({ main: 'lib/index.js', module: 'es/index.js', types: 'es/index.d.ts', sideEffects: false }));
}
write(path.join(root, 'components.json'), JSON.stringify(groups, null, 2) + '\n');
console.log(`Smart UI: generated ${groups.length} public entry groups, shared page context, and isolated WebView/Lynx trees`);

const pageSource = ts.createSourceFile('page.tsx', fs.readFileSync(path.join(root, 'src/smart-ui-page/index.tsx'), 'utf8'), ts.ScriptTarget.Latest, true);
const hosts = new Set();
const visit = node => {
  if (ts.isJsxSelfClosingElement(node) && ['Dialog', 'Toast', 'Notify'].includes(node.tagName.getText(pageSource))) hosts.add(node.tagName.getText(pageSource).toLowerCase());
  ts.forEachChild(node, visit);
};
visit(pageSource);
write(path.join(root, 'page-hosts.json'), JSON.stringify(Array.from(hosts), null, 2) + '\n');

// Bundle the native React wrappers once, sharing generated helpers across entry
// points. Component assets stay external and keep portable npm specifiers.
require('esbuild').build({
  entryPoints: groups.filter(group => !['renderer', 'smart-ui-page'].includes(group.dir)).map(group => path.join(root, 'lynx/es', group.dir, 'index.js')),
  outdir: path.join(root, 'lynx/es'),
  outbase: path.join(root, 'lynx/es'),
  bundle: true,
  splitting: true,
  format: 'esm',
  platform: 'neutral',
  target: 'es2018',
  allowOverwrite: true,
  external: ['react', 'react/*', 'lodash-es', '@ray-js/*', '@ray-core/*', '@tuya/miniapp-smart-ui/*'],
}).then(() => console.log('Smart UI: native wrapper helpers shared across entry points')).catch(error => { console.error(error); process.exitCode = 1; });

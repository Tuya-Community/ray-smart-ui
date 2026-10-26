const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { execFileSync } = require('node:child_process');
const ts = require('typescript');

const root = path.resolve(__dirname, '..');
const manifest = require('../package.json');
const pack = JSON.parse(execFileSync('npm', ['pack', '--dry-run', '--json', '--ignore-scripts'], {
  cwd: root, encoding: 'utf8', stdio: ['ignore', 'pipe', 'inherit'],
}))[0];
const files = new Set(pack.files.map(file => file.path));
assert.equal(manifest.private, undefined, 'release package must be public');
assert.equal(manifest.publishConfig.tag, 'beta');
assert.equal(manifest.dependencies['@tuya/miniapp-smart-ui-lynx'], '0.1.0-beta.0');
for (const file of ['README.md', 'LICENSE', 'es/index.js', 'es/native.js', 'lib/index.js', 'lib/native.js', 'es/native.d.ts', 'lib/native.d.ts']) {
  assert(files.has(file), `missing packed file: ${file}`);
}
assert(![...files].some(file => /^(src|node_modules|tools|example)\//.test(file)), 'publish only compiled package files');

const declared = { ...manifest.dependencies, ...manifest.peerDependencies };
const visited = new Set();
const external = new Set();
function imports(file) {
  const source = ts.createSourceFile(file, fs.readFileSync(path.join(root, file), 'utf8'), ts.ScriptTarget.Latest, true);
  const result = [];
  function visit(node) {
    if ((ts.isImportDeclaration(node) || ts.isExportDeclaration(node)) && node.moduleSpecifier && ts.isStringLiteral(node.moduleSpecifier)) result.push(node.moduleSpecifier.text);
    if (ts.isCallExpression(node) && node.expression.getText(source) === 'require' && node.arguments.length === 1 && ts.isStringLiteral(node.arguments[0])) result.push(node.arguments[0].text);
    ts.forEachChild(node, visit);
  }
  visit(source);
  return result;
}
function walk(file, nativeRuntime = false) {
  const key = `${nativeRuntime}:${file}`;
  if (visited.has(key)) return;
  visited.add(key);
  assert(files.has(file), `dependency missing from tarball: ${file}`);
  for (const specifier of imports(file)) {
    if (specifier.startsWith('.')) {
      const base = path.posix.normalize(path.posix.join(path.posix.dirname(file), specifier));
      const candidates = file.endsWith('.d.ts') ? [base, `${base}.d.ts`, `${base}/index.d.ts`] : [base, `${base}.js`, `${base}/index.js`];
      const resolved = candidates.find(candidate => files.has(candidate));
      assert(resolved, `unresolved packed import ${file} -> ${specifier}`);
      walk(resolved, nativeRuntime);
    } else {
      const packageName = specifier.startsWith('@') ? specifier.split('/').slice(0, 2).join('/') : specifier.split('/')[0];
      assert(declared[packageName], `undeclared dependency ${file} -> ${specifier}`);
      // Resolve files without executing MiniApp modules (which require the Ray compiler/runtime).
      assert(require.resolve(specifier, { paths: [root] }), `missing installed dependency: ${specifier}`);
      if (nativeRuntime) {
        assert(!['@ray-js/smart-ui', '@ray-js/components-ty-slider'].includes(packageName), `Native runtime imports WebView/RJS package: ${specifier}`);
        assert(!/\/rjs(?:\/|$)/i.test(specifier), `Native runtime imports RJS: ${specifier}`);
      }
      external.add(packageName);
    }
  }
}
for (const directory of ['es', 'lib']) {
  walk(`${directory}/index.js`);
  walk(`${directory}/index.d.ts`);
  walk(`${directory}/native.js`, true);
  walk(`${directory}/native.d.ts`);
}
console.log(JSON.stringify({ status: 'PASS', package: `${manifest.name}@${manifest.version}`, files: files.size, nativeRuntime: 'no WebView or Slider RJS imports', dependencies: [...external].sort() }, null, 2));

const fs = require('node:fs');
const path = require('node:path');
const ts = require('typescript');
const assert = require('node:assert/strict');
const SmartUIAutoImport = require('./lib/auto-import').default;

function namedImportsPlugin(entryRoot) {
  const groups = require('./components.json');
  const entries = new Map(groups.flatMap(group => group.names.map(name => [name, group.dir])));
  const escaped = entryRoot.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const rootImport = /^@ray-js\/smart-ui(?:\/(?:es|lib)(?:\/index(?:\.js)?)?)?$/;
  return {
    name: 'smart-ui-named-imports',
    setup(build) {
      build.onResolve({ filter: new RegExp(`^(?:@ray-js/smart-ui(?:/(?:es|lib)(?:/index(?:\\.js)?)?)?|${escaped}(?:/(?:es|lib)/index(?:\\.js)?)?)$`) }, args => {
        if (args.kind !== 'import-statement' || !fs.existsSync(args.importer)) return undefined;
        const ast = ts.createSourceFile(args.importer, fs.readFileSync(args.importer, 'utf8'), ts.ScriptTarget.Latest, true);
        const names = new Set();
        for (const node of ast.statements) {
          if (!ts.isImportDeclaration(node) || !rootImport.test(node.moduleSpecifier.text)) continue;
          const clause = node.importClause;
          if (!clause || clause.name || !clause.namedBindings || !ts.isNamedImports(clause.namedBindings)) return undefined;
          for (const item of clause.namedBindings.elements) names.add((item.propertyName || item.name).text);
        }
        if (!names.size || [...names].some(name => !entries.has(name))) return undefined;
        return { path: [...names].sort().join(','), namespace: 'smart-ui-imports', sideEffects: false };
      });
      build.onLoad({ filter: /.*/, namespace: 'smart-ui-imports' }, args => ({
        loader: 'js', resolveDir: entryRoot,
        contents: args.path.split(',').map(name => `export { ${name} } from ${JSON.stringify(path.join(entryRoot, 'es', entries.get(name), 'index.js'))};`).join('\n'),
      }));
    },
  };
}

/** Preserve the consumer's config and hooks; do not generate or patch sources. */
function withSmartUI(config = {}, options = {}) {
  const mode = options.renderer || 'mixed';
  if (!['mixed', 'webview'].includes(mode)) throw new Error(`Unsupported Smart UI build renderer: ${mode}`);
  const entryRoot = mode === 'webview' ? path.join(__dirname, 'webview') : __dirname;
  const sdkRoot = path.dirname(require.resolve('@tuya/miniapp-smart-ui/package.json'));
  const previous = config.esbuildConfig;
  return {
    ...config,
    importTransformer: [...(config.importTransformer || []).filter(value => value.libraryName !== '@ray-js/smart-ui'), SmartUIAutoImport],
    resolveAlias: {
      ...(config.resolveAlias || {}),
      '@ray-js/smart-ui': entryRoot,
      '@tuya/miniapp-smart-ui': sdkRoot,
      // Older SDK consumers still use this name; both names resolve one SDK.
      '@tuya-miniapp/smart-ui': sdkRoot,
    },
    esbuildConfig(opts) {
      const existing = typeof previous === 'function' ? previous(opts) : { ...opts, ...(previous || {}) };
      const append = value => ({ ...value, plugins: [namedImportsPlugin(entryRoot), ...(value.plugins || []).filter(plugin => plugin.name !== 'smart-ui-named-imports')] });
      return existing && typeof existing.then === 'function' ? existing.then(append) : append(existing);
    },
  };
}
function checkSmartUIHosts(dist) {
  const app = JSON.parse(fs.readFileSync(path.join(dist, 'app.json'), 'utf8'));
  const pages = [
    ...(app.pages || []),
    ...(app.subPackages || []).flatMap(pkg => pkg.pages.map(page => `${pkg.root}/${page}`)),
  ];
  assert.ok(pages.length, 'No built pages found');
  const hosts = require('./page-hosts.json');
  for (const route of pages) {
    const config = JSON.parse(fs.readFileSync(path.join(dist, `${route}.json`), 'utf8'));
    const native = config.renderer === 'native';
    const components = Object.values(config.usingComponents || {});
    for (const host of hosts) {
      const entry = components.find(
        value => value.endsWith(`/dist/${host}/index`) && value.includes('/lynx/') === native
      );
      assert.ok(
        entry,
        `${route}: missing ${native ? 'Lynx' : 'WebView'} ${host} host registration`
      );
      assert.ok(
        fs.existsSync(path.join(dist, entry.replace(/^\//, '') + '.json')),
        `${route}: ${host} component file is missing: ${entry}`
      );
    }
  }
  return pages.length;
}

module.exports = { withSmartUI, namedImportsPlugin, checkSmartUIHosts };

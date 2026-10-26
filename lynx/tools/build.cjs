const fs = require('node:fs');
const path = require('node:path');
const { execFileSync } = require('node:child_process');

const root = path.resolve(__dirname, '..');
const compiler = require.resolve('typescript/bin/tsc', { paths: [root] });
// Both directories contain generated files only. Clean them to avoid publishing stale exports.
for (const directory of ['es', 'lib']) fs.rmSync(path.join(root, directory), { recursive: true, force: true });
for (const config of ['tsconfig.json', 'tsconfig.cjs.json']) {
  execFileSync(process.execPath, [compiler, '-p', config], { cwd: root, stdio: 'inherit' });
}
// Public props use WechatMiniprogram event types even when consumers restrict compilerOptions.types.
for (const directory of ['es', 'lib']) {
  for (const entry of ['index.d.ts', 'native.d.ts']) {
    const file = path.join(root, directory, entry);
    fs.writeFileSync(file, '/// <reference types="miniprogram-api-typings" />\n' + fs.readFileSync(file, 'utf8'));
  }
}

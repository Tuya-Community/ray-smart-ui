const fs = require('fs');
const path = require('path');

/** 将 CHANGELOG.md 拷贝到 docs 目录 */
const copyCHANGELOG = () => {
  if (!process.env.PIPELINE_DATA) return;
  const changelogPath = path.join(__dirname, '../CHANGELOG.md');
  const docsDir = path.join(__dirname, '../docs');
  const docsChangelogPath = path.join(docsDir, 'CHANGELOG.md');

  if (!fs.existsSync(changelogPath)) {
    console.warn('postBuild: CHANGELOG.md 不存在，跳过拷贝');
    return;
  }

  fs.mkdirSync(docsDir, { recursive: true });
  fs.copyFileSync(changelogPath, docsChangelogPath);
  console.log('CHANGELOG.md 已拷贝到 docs/');
};

/** 将组件 README.md 拷贝到 es/lib 对应目录 */
const copyComponentReadmes = () => {
  const srcDir = path.join(__dirname, '../src');
  const outputDirs = ['es', 'lib'];

  if (!fs.existsSync(srcDir)) {
    console.warn('postBuild: src 目录不存在，跳过 README 拷贝');
    return;
  }

  const componentNames = fs
    .readdirSync(srcDir, { withFileTypes: true })
    .filter(item => item.isDirectory())
    .map(item => item.name);

  componentNames.forEach(componentName => {
    const sourceReadmePath = path.join(srcDir, componentName, 'README.md');
    if (!fs.existsSync(sourceReadmePath)) {
      return;
    }

    outputDirs.forEach(outputDir => {
      const targetDir = path.join(__dirname, `../${outputDir}/${componentName}`);
      const targetReadmePath = path.join(targetDir, 'README.md');

      if (!fs.existsSync(targetDir)) {
        console.warn(`postBuild: ${targetDir} 不存在，跳过 README 拷贝`);
        return;
      }

      fs.copyFileSync(sourceReadmePath, targetReadmePath);
      console.log(`README.md 已拷贝到 ${outputDir}/${componentName}/`);
    });
  });
};

/** 打包后的通用逻辑，可在此追加其他任务 */
const run = () => {
  copyCHANGELOG();
  copyComponentReadmes();
};

if (require.main === module) {
  run();
}

module.exports = { run, copyCHANGELOG, copyComponentReadmes };

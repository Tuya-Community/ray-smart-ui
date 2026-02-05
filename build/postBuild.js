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

/** 打包后的通用逻辑，可在此追加其他任务 */
const run = () => {
  copyCHANGELOG();
  // 其他打包后逻辑可在此添加
};

if (require.main === module) {
  run();
}

module.exports = { run, copyCHANGELOG };

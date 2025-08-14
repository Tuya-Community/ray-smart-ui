/*
 * @Author: mjh
 * @Date: 2025-03-18 16:12:20
 * @LastEditors: mjh
 * @LastEditTime: 2025-08-14 10:55:15
 * @Description:
 */
const transCSSVarToConfigTypes = require('./transCSSVarToConfigTypes');
const copyREADME = require('./copyREADME');
const updatePackage = require('./updatePackage');
const { execSync } = require('child_process');
const ENV = process.env;

async function main() {
  // console.log(`切换到分支：${ENV.BRANCH}`);
  // execSync(`git fetch && git checkout ${ENV.BRANCH}`);

  await Promise.all([
    // 生成config-provider 类型文件
    transCSSVarToConfigTypes(),
    // 拷贝miniapp的README文件
    copyREADME(),
    // 拷贝miniapp的package的version 并更新依赖
    updatePackage(),
  ]);
  console.log('更新代码完成！');
  const status = execSync('git status -s').toString();
  if (!status) {
    console.log('无文件改动');
    return;
  }

  console.log(`改动的文件内容：`);
  console.log(status);

  console.log('准备推送代码：');

  execSync(
    `git add -A && git commit -m 'CI(template): update CSS var and README' && git push https://x-access-token:${ENV.PROTECT_WRITE_TOKEN}@github.com/${ENV.repository} HEAD:${ENV.ref}`
  );
}

// 主函数
main();

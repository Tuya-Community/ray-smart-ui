/*
 * @Author: mjh
 * @Date: 2025-03-18 16:12:20
 * @LastEditors: mjh
 * @LastEditTime: 2025-06-10 18:17:38
 * @Description:
 */
const transCSSVarToConfigTypes = require('./transCSSVarToConfigTypes');
const copyREADME = require('./copyREADME');
const { execSync } = require('child_process');
const ENV = process.env;

async function main() {
  console.log(`切换到分支：${ENV.DRONE_SOURCE_BRANCH}`);
  execSync(`git fetch && git checkout ${ENV.DRONE_SOURCE_BRANCH}`);

  await Promise.all([
    // 生成config-provider 类型文件
    transCSSVarToConfigTypes(),
    // 拷贝miniapp的README文件
    copyREADME(),
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

  execSync(`git add -A && git commit -m 'CI(template): update CSS var and README' && git push`);
}

// 主函数
main();

const transCSSVarToConfigTypes = require('./transCSSVarToConfigTypes');
const copyREADME = require('./copyREADME');
const updatePackage = require('./updatePackage');
const copyPLANS = require('./copyPLANS');
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
    // 同步miniapp的PLANS.md文件
    copyPLANS(),
  ]);
  console.log('更新代码完成！');

  // 如果 workflow_dispatch 环境变量为 true，则在此处返回
  if (ENV.workflow_dispatch === 'true') {
    console.log('workflow_dispatch 模式：跳过代码提交步骤');
    return;
  }

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

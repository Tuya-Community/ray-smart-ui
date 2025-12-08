const fs = require('fs');
const path = require('path');

const copyPLANS = async () => {
  try {
    const miniappPlansPath = path.join(__dirname, '../miniapp-smart-ui/PLANS.md');
    const rayPlansPath = path.join(__dirname, '../PLANS.md');

    // 读取 miniapp-smart-ui 仓库的 PLANS.md 文件
    const plansContent = fs.readFileSync(miniappPlansPath, 'utf8');

    // 覆盖写入到当前仓库的 PLANS.md
    fs.writeFileSync(rayPlansPath, plansContent, 'utf8');

    console.log('同步完成 PLANS.md');
  } catch (err) {
    console.error('Error copying PLANS.md:', err);
    throw err;
  }
};

module.exports = copyPLANS;

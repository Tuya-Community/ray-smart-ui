/*
 * @Author: mjh
 * @Date: 2025-08-14 10:42:36
 * @LastEditors: mjh
 * @LastEditTime: 2025-08-14 10:58:11
 * @Description:
 */
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const updatePackage = async () => {
  try {
    const miniapp_package_path = path.join(__dirname, `../miniapp-smart-ui/package.json`);
    const miniappPackageData = fs.readFileSync(miniapp_package_path, 'utf8');
    const miniappJsonData = miniappPackageData ? JSON.parse(miniappPackageData) : {};
    const { version } = miniappJsonData;

    const ray_package_path = path.join(__dirname, `../package.json`);
    const rayPackageStr = fs.readFileSync(ray_package_path, 'utf8');
    const rayPackageData = rayPackageStr ? JSON.parse(rayPackageStr) : {};
    rayPackageData.dependencies['@tuya-miniapp/smart-ui'] = version.includes('beta')
      ? version
      : `^${version}`;
    fs.writeFileSync(ray_package_path, JSON.stringify(rayPackageData, null, 2), 'utf-8');
    console.log(version, '--update version');
    await execSync('yarn');
  } catch (err) {
    console.error('Error updating package:', err);
  }
};

module.exports = updatePackage;

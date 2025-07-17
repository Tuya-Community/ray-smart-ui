const fs = require('fs');
const path = require('path');

const transCSSVarToConfigTypes = async () => {
  const srcDir = path.join(__dirname, '../src');
  const subDirs = getSubDirs(srcDir);
  const res = await getCSSVarJson();
  const compCSSVarMap = {};
  Object.keys(res).forEach(item => {
    const nameList = item.split('-');
    const compName =
      (item.startsWith('tabbar')
        ? 'tabbar'
        : item.startsWith('collapse')
        ? 'collapse'
        : item.startsWith('base')
        ? 'common'
        : subDirs.find(comp => item.startsWith(comp))) || 'common';
    const name = nameList
      .map((nameItem, index) => {
        if (!index) return nameItem;
        return nameItem.slice(0, 1).toUpperCase() + nameItem.slice(1);
      })
      .join('');
    compCSSVarMap[compName] = compCSSVarMap[compName] ? [...compCSSVarMap[compName], name] : [name];
    return name;
  });
  let typeStr = '';
  const typeNameList = [];
  Object.keys(compCSSVarMap).forEach(compName => {
    const nameStr = compName
      .split('-')
      .map(nameItem => nameItem.slice(0, 1).toUpperCase() + nameItem.slice(1))
      .join('');
    typeNameList.push(`${nameStr}ThemeVars`);
    const list = compCSSVarMap[compName];
    list.length <= 4
      ? (typeStr += `type ${nameStr}ThemeVars = ${list.map(str => `'${str}'`).join(' | ')}`)
      : (typeStr += `type ${nameStr}ThemeVars =
  | ${list.map(str => `'${str}'`).join(`
  | `)}`);
    typeStr += `;

`;
  });
  typeStr += `/**
 * 主题变量
 */
export type ThemeVars = Record<
  | ${typeNameList.join(`
  | `)},
  string
>;
`;
  const typeDir = path.join(__dirname, '../src/@types/config-provider/theme-vars.ts');
  fs.writeFileSync(typeDir, typeStr, 'utf-8');
  console.log('同步完成 config-provider 类型！');
};

const getCSSVarJson = () => {
  return new Promise((resolve, reject) => {
    fetch(
      `https://static1.tuyacn.com/static/txp-miniapp-SmartUi/2.x/css-var.json?t=${new Date().getTime()}`
    ).then(async response => {
      if (!response.ok) {
        reject(new Error('Network response was not ok'));
        return;
      }
      const res = await response.json();
      resolve(res);
    });
  });
};

// 递归遍历指定目录下的所有子目录
function getSubDirs(dir) {
  return fs
    .readdirSync(dir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory() && !dirent.name.startsWith('@'))
    .map(dirent => dirent.name);
}

module.exports = transCSSVarToConfigTypes;

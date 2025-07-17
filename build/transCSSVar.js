const fs = require('fs');
const path = require('path');

const CSSVarTitle = `
### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](/material/smartui?comId=config-provider)。

| 名称                          | 默认值                                 | 描述 |
| ----------------------------- | -------------------------------------- | ---- |
`;
const CSSVarTitleName = '### 样式变量';
const CSSVarTitleEN = `
### Style Variables

The component provides the following CSS variables that can be used for custom styles. For usage, refer to the [ConfigProvider Component](/material/smartui?comId=config-provider).

| Name                          | Default Value                             | Description |
| ----------------------------- | ----------------------------------------- | ----------- |
`;
const CSSVarTitleNameEN = '### Style Variables';

const getCSSVar = () => {
  const cssVarName = path.join(__dirname, 'css-var.json');
  const content = fs.readFileSync(cssVarName, 'utf-8');
  const cssObjList = JSON.parse(content);
  upDateReadME(cssObjList);
};

const upDateReadME = cssObjList => {
  const srcDir = path.join(__dirname, '../src');
  const subDirs = getSubDirs(srcDir);
  const keyList = Object.keys(cssObjList);
  subDirs.forEach(fileName => {
    const READMEDir = path.join(__dirname, `../src/${fileName}/README.md`);
    const currCSSVar = keyList.filter(item => item.startsWith(fileName));
    if (!currCSSVar.length) return;
    const hasREADME = fs.existsSync(READMEDir);
    if (!hasREADME) return;
    const tableBody = currCSSVar.map(item => {
      const { value } = cssObjList[item];
      const tableListStr = `| --${item} | _${value}_ | - |`;
      return tableListStr;
    });
    // 中文部分
    const content = fs.readFileSync(READMEDir, 'utf-8');
    const hasCSSTable = content.includes(CSSVarTitleName);
    if (!hasCSSTable) {
      const questionPosition = content.indexOf('## 常见问题');
      const [addContent, questionContent] = content.split('## 常见问题');
      const CSSContent = CSSVarTitle + tableBody.join('\n');
      let READMEContent = addContent + CSSContent;
      if (questionPosition !== -1) {
        READMEContent = `${READMEContent}
  
## 常见问题${questionContent}`;
      }
      fs.writeFileSync(READMEDir, READMEContent, 'utf-8');
    }
    // 英文
    const READMEDirEN = path.join(__dirname, `../src/${fileName}/README.en.md`);
    if (!fs.existsSync(READMEDirEN)) return;
    const contentEn = fs.readFileSync(READMEDirEN, 'utf-8');
    if (contentEn.includes(CSSVarTitleNameEN)) return;
    const CSSENContent = CSSVarTitleEN + tableBody.join('\n');
    fs.writeFileSync(READMEDirEN, contentEn + CSSENContent, 'utf-8');
  });
};
// 递归遍历指定目录下的所有子目录
function getSubDirs(dir) {
  return fs
    .readdirSync(dir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);
}

getCSSVar();

const fs = require('fs');
const path = require('path');

const whiteComponents = ['progress', 'slider'];

const copyREADME = async () => {
  const components = await getComponents();
  const componentsNames = Object.keys(components);
  for (let i = 0; i < componentsNames.length; i++) {
    const item = componentsNames[i];
    if (whiteComponents.includes(item)) {
      // eslint-disable-next-line no-continue
      continue;
    }
    // eslint-disable-next-line no-await-in-loop
    const [ch, en] = await Promise.all([getComponentDetail(item), getComponentDetail(item, true)]);
    const rayChStr = getApiStr(ch);
    const rayEnStr = getApiStr(en);
    writeReadme(item, false, rayChStr);
    writeReadme(item, true, rayEnStr);
  }
};

const getComponents = () => {
  return new Promise((resolve, reject) => {
    fetch(
      `https://static1.tuyacn.com/static/txp-ray-SmartUi/2.x/components.json?t=${new Date().getTime()}`
    ).then(async response => {
      if (!response.ok) {
        reject(new Error('getComponents Network response was not ok'));
        return;
      }
      const res = await response.json();
      resolve(res);
    });
  });
};

const getComponentDetail = (name, isEn) => {
  return new Promise((resolve, reject) => {
    const CSS_VAR_PATH = path.join(
      __dirname,
      `../miniapp-smart-ui/packages/${name}/${isEn ? 'README.en' : 'README'}.md`
    );
    const data = fs.readFileSync(CSS_VAR_PATH, 'utf8');
    resolve(data);
  });
};

const getApiStr = str => {
  let [, usefulStr] = str.split(`## API
`);
  if (usefulStr.includes('## 常见问题')) {
    usefulStr = usefulStr.split('## 常见问题')[0];
  }
  if (usefulStr.includes('## FAQs')) {
    usefulStr = usefulStr.split('## FAQs')[0];
  }
  if (usefulStr.includes('## FAQ')) {
    usefulStr = usefulStr.split('## FAQ')[0];
  }
  const rayStr = tranToRayStr(usefulStr);
  return rayStr;
};

const tranToRayStr = str => {
  const rayList = [];
  const listList = str.trim().replaceAll('&appType=miniapp', '').split('\n');
  let titleFirstTag = false;
  listList.forEach(line => {
    if (line.startsWith('##')) {
      titleFirstTag = true;
    }
    if (!line.startsWith('|')) {
      rayList.push(line);
      return;
    }
    // 需要处理转译的 \\| 防止被当成表格的分割栏
    const partList = line
      .replaceAll('\\|', '$*$')
      .split('|')
      .map(item => item.trim());
    let name = partList[1];
    if (name.startsWith('-')) {
      rayList.push(line);
      return;
    }

    // 代表此行是大标题下的 第一个 表格标题行 不需要处理
    if (titleFirstTag) {
      rayList.push(line);
      titleFirstTag = false;
      return;
    }

    // event 处理
    if (name.startsWith('bind:')) {
      const eventName = name.slice(5);
      name = `on${eventName.slice(0, 1).toUpperCase()}${camelCase(eventName.slice(1))}`;
    }

    // 样式处理
    if (name.endsWith('-style') && partList[3] === '_string_') {
      partList[3] = '_React.CSSProperties_';
      if (partList[4] === "''") partList[4] = '-';
      if (partList[4] === "`''`") partList[4] = '-';
    }

    partList[1] = camelCase(name);

    const lineNew = partList.join(' | ').trim().replaceAll('$*$', '\\|');
    rayList.push(lineNew);
  });
  const newStr = rayList.join('\n');
  return newStr;
};

const writeReadme = (name, isEn, str) => {
  const readmeDir = path.join(__dirname, `../src/${name}/${isEn ? 'README.en' : 'README'}.md`);
  const readmeList = fs.readFileSync(readmeDir, 'utf-8').split('\n');
  const apiStartIndex = readmeList.findIndex(item => item.startsWith('## API'));
  const apiEndIndex = readmeList.findIndex(
    item => item.startsWith('## 常见问题') || item.startsWith('## FAQ')
  );
  const newReadmeStr = `${readmeList.slice(0, apiStartIndex).join('\n').trim()}

## API

${str.trim()}

${apiEndIndex === -1 ? '' : readmeList.slice(apiEndIndex).join('\n').trim()}`;
  fs.writeFileSync(readmeDir, newReadmeStr.trim(), 'utf-8');
  console.log(`同步完成 ${name} 组件 ${isEn ? 'README.en' : 'README'}`);
};

const camelCase = name => {
  return name
    .split('-')
    .map((item, index) => (index ? `${item.slice(0, 1).toUpperCase()}${item.slice(1)}` : item))
    .join('');
};

module.exports = copyREADME;

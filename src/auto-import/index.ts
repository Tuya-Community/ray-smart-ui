/*
 * @Author: mjh
 * @Date: 2025-05-20 14:47:06
 * @LastEditors: mjh
 * @LastEditTime: 2025-05-20 15:07:58
 * @Description:
 */
function kebabCase(srt: string): string {
  const t = srt.replace(/[A-Z]/g, match => `-${match.toLowerCase()}`);
  if (t[0] === '-') {
    return t.slice(1);
  }
  return t;
}

const SmartUIAutoImport = {
  libraryName: '@ray-js/smart-ui',
  format(localName: string, importedName: string) {
    return `import { ${
      importedName !== localName ? `${importedName} as ${localName}` : localName
    } } from "@ray-js/smart-ui/es/${kebabCase(importedName)}";`;
  },
};

export default SmartUIAutoImport;

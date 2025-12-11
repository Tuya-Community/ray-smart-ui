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

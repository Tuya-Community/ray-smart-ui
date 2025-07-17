---
category: Guide
---

# FAQ

Some common issues of development

### Packing and report errors json-loader error

The Smart-UI component libraries need to use the ESBUILD packager for packaging and construction. If this error occurs, it may be that your constructing command uses webpack packaging. For example, package.json is as follows

```json
{
  "scripts": {
    "start": "ray start --target tuya",
    "build": "ray build --target tuya --bundler=webpack",
    "lint": "eslint src --ext .js,.jsx,.ts,.tsx --fix"
  }
}
```

The packing will use the built command for packaging. You can see that the bundler is specified that the Bundler is a webpack. Remove the bundler parameter:

```json
{
  "scripts": {
    "start": "ray start --target tuya",
    "build": "ray build --target tuya",
    "lint": "eslint src --ext .js,.jsx,.ts,.tsx --fix"
  }
}
```
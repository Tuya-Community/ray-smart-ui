# 参与贡献

> 请先阅读[《提问的智慧》](https://github.com/ryanhanwu/How-To-Ask-Questions-The-Smart-Way)和[《如何有效地报告 Bug》](http://www.chiark.greenend.org.uk/%7Esgtatham/bugs-cn.html)，这将帮助你更好地提交问题和得到反馈。

## 🤝 参与共建

### 1. 环境准备

> 需要安装 [Node.js](https://nodejs.org/en/) 18 及以上版本，建议 `v18.20.4`

首先把 SmartUI 仓库 fork 一份到自己的 GitHub，然后从个人仓库把项目 clone 到本地，项目默认是 `master` 分支。

然后依次在项目根目录运行以下命令：

```bash
# 安装依赖
$ yarn
# 运行
$ yarn dev
```

运行完上述命令后，使用涂鸦 IDE 导入项目的 example 目录即可

### 2. 发布周期

目前约定**每周二**和**每周四**作为常规发布日，如有紧急问题需发布请提前至少一天通知在群内告知维护人员报备。

### 3. 分支管理

> 我们长期维护两个分支 `master` 和 `release/2.x`，其中 `master` 分支用来发布正式版本，`release/2.x` 分支用来发布 beta 版本。  
> `release/1.x` 分支为 1.0 版本的代码，除紧急 bug 以外，暂时不在维护

- 如果你要修一个 bug，那么请基于 `hotfix` 分支来做，并提 merge request 到 `release/2.x`，我们会按发布周期从 `release/2.x` 发布一个 patch 版本。
- 如果你要提一个增加新功能的 merge request，那么请基于 `feature` 分支来做，并提 merge request 到 `release/2.x`，我们会按发布周期从 `release/2.x` 发布一个包含新特性的 minor 版本。

- 如果你要对历史的 1.0 版本进行迭代修复，请基于 `release/1.x` 分支来做，并提 merge request 到 `release/1.x` 分支

## 🐞 报告 Bug

> 我们基于 Issue 来做 bug 追踪和管理

提交 Bug 需要按照我们提供的 Issue 模板进行，并需要基于当前项目的 example 来提供可复现的代码片段，这样可以更好地减少多余的沟通成本，当然更建议能自己发现并参与共建，对于此类贡献我们会更优提供 Review 及发布支持。

## 💡 提交需求

> 我们基于 Issue 来做需求的追踪和管理

提交需求需要按照我们提供的 Issue 模板进行

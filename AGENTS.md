# SmartUI miniapp 组件库仓库说明

项目下有 project.tuya.json 文件，包含了基本信息，其中：
- miniprogramRoot 字段表示 example 打包产物目录，不能为空

## 安装

- yarn install

## 项目结构

- 此项目为用 Ray 开发， 语法类似React，语言选用 Typescript、less；项目其实就是 @tuya-miniapp/smart-ui 仓库的类型仓库，将原来用小程序语法写的 @tuya-miniapp/smart-ui 组件库加上ts类型，包装成React组件

总体项目目录:
- build 相关打包和同步代码文件位置
- src 目录下为所有组件的代码；其中@types 文件夹下的是每个组件暴露的类型；
- example 为组件库的 demo 目录，其src下的 pages 每个子目录就是每个组件的demo，语法同React；

src下单个组件目录结构：
- index.ts 组件的入口文件
- PropTypes.ts 导出类型的文件
- [组件名称].tsx 引入 @tuya-miniapp/smart-ui 下的对应组件 包上类型

## 多语言

* example/src/i18n/strings.ts 其是导出的是一个对象，en 代表英文，zh 代表中文；  
* 在我们 example/src/pages/... 书写时都需要使用例如：Strings.getLang('options') 这样的代码，通过I18n方法去调用strings文件内的key 生成文案，这样可以在不同的语言环境下生成不同的多语言文案  
* src/*/README和README.en.md 文件内demo的代码书写时不需要使用 Strings 方法，直接根据README文件的中英文类别直接写对应strings.json 对应语种文案即可  
* 注意 README 内的 ## 代码演示 下的每一个事例都要和 example下的对应组件的demo 对应；中英文标题在strings.ts内对应的key也要和 example 下的标题key一一对齐；

## 启动开发

- yarn dev

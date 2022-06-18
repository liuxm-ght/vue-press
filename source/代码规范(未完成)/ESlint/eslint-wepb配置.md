### 使用 ESlint 规范构建脚本
  1. 之前讲到 Eslint 的时候，我们使用 eslint-config-airbnb 来进行 Eslint 的规范设计，这里我们可以使用 eslint-config-airbnb-base，它提供了 Airbnb 的基础 .eslintrc（无 React 插件）的配置。

  2. 安装配置
    npm install eslint babel-eslint eslint-config-airbnb-base -D
    #配置 .eslintrc.js
      <!-- 
        module.exports = {
          "env": {
            "browser": true,
            "es6": true
          },
          "parser": "babel-eslint",
          "extends": "airbnb-base",
        }; 
      -->
    #增加 package.json
      <!-- 
        cripts": {
          // ...
          "lint": "eslint --fix ./lib",
        }, 
      -->
    我们运行一下 npm run lint，可以看到相应的错误代码：

    我们便可以根据错误进行相应的修复。

    #当前目录结构
    .
    ├── lib  // webpack 配置文件夹
        ├── webpack.common.js  // 基础配置文件
        ├── webpack.dev.js     // 开发环境配置文件
        ├── webpack.prod.js    // 生产环境配置文件
        ├── webpack.ssr.js     // SSR 环境配置文件
        ├── ...
        └── webpack.dll.js     // dll 配置文件
    ├── test  // 测试文件夹
    ├── .eslintrc.js  // eslint 的配置文件
    ├── .babelrc      // babel 配置文件
    ├── README.md     // 项目 README 文件
    ├── .gitignore    // git 忽略文件
    └── package.json  // 当前整一个项目的依赖
    接下去我们会讲项目的测试相关的代码。

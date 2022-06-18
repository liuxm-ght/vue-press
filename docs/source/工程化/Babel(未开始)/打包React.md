### Babel 打包react
  1. 使用：
    配置 babel
    下载解析 react 代码的 babel 依赖

  ```ts
    npm install @babel/preset-react -D 
  ```

    修改 .babelrc 文件

  ```ts
  {
    "presets": [
      [
        "@babel/preset-env",
        {
          "useBuiltIns": "usage"
        }
      ],
      "@babel/preset-react"
    ]
  } 
  ```
### 打包ES6
  1. 为何要打包ES6代码
    * 一些浏览器不支持ES6代码，需要进行转译

  2. Babel
    * 使用Babel来将ES next 转 ES5
    
  3. 使用：
      1. 安装：
        首先安装依赖，
          babel-loader 是让 webpack 能使用 babel，
          @babel/core 是 babel 的核心模块，
          @babel/preset-env 是 babel 真正帮我们转化 es6 代码的插件
          <!-- npm install babel-loader @babel/core @babel/preset-env -D -->
      2. webpack中配置：
      ```ts
          module: {
            rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
              },
              ...
            ]
          }
          ...
      ```
      3. 在项目根目录下 创建 .babelrc 文件来更好的管理 babel 的配置
      ```ts
          // .babelrc
          {
            "presets": ["@babel/preset-env"]
          } 
      ```
      4. 此时还不是所有es6代码转为了es5
        但是这里面还会有一个问题，就是我们会发现上述的打包出来的代码中还有 promise 和 map 函数还没有被转化，
        如 Promise 或 WeakMap，静态方法如 Array.from 或 Object.assign ，实例方法如Array.prototype.includes 等等；
        有些低版本浏览器还不支持这些方法，所以我们要加一些垫片。

  4. 垫片(兼容更低级版本的浏览器) 
      1. 使用 @babel/polyfill
        1. 安装：
        ```ts
          npm install @babel/polyfill -D 
        ```
        2. 在 index.js 中使用：
        ```ts
          import "@babel/polyfill" 
        ```
      2. 按需使用 @babel/polyfill
        1. 在.babelrc中使用：
        ```ts
            {
              "presets": [
                [
                  "@babel/preset-env",
                  {
                    // 针对大部分浏览器最新的两个版本以及 IE 7+ 以及 chrome25版本进行转码编译，高版本chrome 浏览器已经支持了 es6，就不再去打包注入相应的代码了
                    "targets": { 
                      "chrome": "67",
                      "browsers": ["last 2 versions","safari 7"]
                    },

                    // 使用到的来加载进来
                    "useBuiltIns": "usage"
                  }
                ]
              ]
            } 
        ```

  5. 打包类库
    1. 前言：
      当我们实现自己的类库的时候，并想让类库能在低端版本浏览器中运行，
      * 如果使用了 @babel/polyfill，因为他要注入一些低端浏览器所需要的方法，他会采取一种全局注入的方式，所以有可能会影响全局环境。
      所以在这里我们就要换一种打包的方式，我们可以通过 @babel/plugin-transform-runtime 来实现
    2. 首先安装依赖

  ```ts
    npm install @babel/plugin-transform-runtime @babel/runtime -D
    npm install @babel/runtime @babel/runtime-corejs2 -S 
  ```

    3. 修改 .babelrc 配置文件：
    
  ```ts
    {
      "plugins": [["@babel/plugin-transform-runtime", {
        "corejs": 2,
        "helpers": true,
        "regenerator": true,
        "useESModules": false
      }]]
    } 
  ```

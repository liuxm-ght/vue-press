### 核心概念：
  1. 入口 entry: 配置模块入口
  2. 输出 output: 配置如何输出最终想要的代码
  3. 开发工具 devtool: 此选项控制是否生成，以及如何生成 source map (配置source Map)
  4. 模块 module: 配置处理模块的规则 (配置Loader:  文件转换工具)
  5. 插件 plugins: 扩展插件
  6. 开发服务 devServer: 配置webpack-dev-server，启动一个服务
  <!-- 参考文章 webpack/docs项目 -->
  <!-- 参考文章 https://mp.weixin.qq.com/s/2rUjUM6Zfu1I7cjRUDschg -->

  1. 入口 entry：
      1. 概念:
        * entry选项是用来配置入口文件的，它可以是字符串、数组或者对象类型。
        webpack默认只支持js和json文件作为入口文件，因此如果引入其他类型文件会保存。

      2. 入口模式：
          1. 单入口单输出
            字符串 ： 
              <!-- entry: './src/index.js'   -->
            默认输出main.js

          2. 多入口单输出
            数组 ： 
              <!-- entry: ['./src/index_1.js', './src/index_2.js'] -->
            默认输出main.js ，如果output配置了filename，输出配置名称
            * 注意：此时其实只有一个chunk

          3. 多入口多输出
            对象类型 ：
              <!-- 
                entry: {
                  index: "./src/index.js",  // chunkName为index
                  main: "./src/main.js"     // chunkName为main
                } 
              -->
            * filename 使用占位符： 此时，我们的output.filename也不能写死了，这时候webpack提供了一个占位符[name]给我们使用，它会自动替换为对应的chunkName。
              <!-- 
                output: {
                  path: path.resolve(__dirname, 'dist'),
                  filename: '[name].js'  // [name]占位符会自动替换为chunkName
                } 
              -->
            根据上面的配置，最后会打包出index.js和main.js。
            应用：多页面应用

  2. 输出 output：
      1. 概念:
        * output选项是设置输出配置，该选项必须是对象类型，不能是其它类型格式。
        在output对象中，必填的两个选项就是导出路径path和导出bundle文件名称filename。

      2. path:
        * path选项必须为绝对路径。
        打包输出的文件夹(文件目录)的绝对路径
        <!-- path: path.resolve(__dirname, 'dist/'), -->

      3. filename:
          * 代表输出的文件名。
          1. 默认 main.js
          2. 可自定义名称 
            <!-- filename: '[name].js', -->
          3. 可使用占位符，自动配置名称
            <!-- filename: '[name]-[chunkhash:6].js', -->

  3. 开发工具 devtool (配置source Map)：
      1. 概述
          此选项控制是否生成，以及如何生成 source map。
          
      2. 比较常用的选项。
          none：不会生成sourceMap；
          eval：每个模块都会使用eval()执行，不建议生成环境中使用；
          cheap-source-map：生成sourceMap，但是没有列映射，则只会提醒是在代码的第几行，不会提示到第几列；
          inline-source-map：会生成sourceMap，但不会生成map文件，而是将sourceMap放在打包文件中。

  4. 模块 module (配置Loader: 文件转换工具)：
      1. 概念
          * 配置处理模块的规则
          由于webpack的入口文件只能接受js和json的文件，或者说webpack本身只能处理js和json的文件，那么如何处理其他如html、css、图片、字体、vue等文件呢？此时需要第三方的loader来转换这些文件。
          module下就是配置哪些文件使用什么转换规则及如何转换(包括顺序...)

      2. 原理
          1. Loaders 本身是一个函数，接受源文件作为参数，返回转换的结果。
          2. 例子：
          file-loader协助webpack打包图片时，
          1. 首先，webpack从入口文件开始打包，一直打包遇到图片，发现不知道怎么打包，就去module配置下匹配规则来处理，发现匹配到了规则，use:[file-loader]
          2. 然后，使用file-loader来处理图片，处理完成后，将图片移动到输出文件夹下去，并给出名字，名字可以在module下的options中配置，或使用默认file-name的规则。

  5. 插件 plugins：
      1. 概念 
          * 第三方插件来实现打包优化、资源管理、注入环境变量等任务。
          简单的可以理解为：loader是在打包过程中处理文件，plugin是在打包 前 和 后 处理。

      2. 原理
          1. webpack在打包的过程中，获取到所有注册的plugins，遍历执行所有plugin的apply函数，并传入compiler或compilation实例
          2. 插件是一个类Class，提供了apply方法，来获取compiler（可在整个webpack编译过程提供生命周期）事件钩子
          3. 通过compiler/compilation提供的hooks下挂载了很多事件钩子，插件通过这些钩子来注册自定义的事件，在webpack执行的各个生命周期，通过发布来触发这些事件，执行其回调函数，每个钩子都会返回一个compilation对象（编译上下文），在回调函数里可以拿到这个compilation对象，做一些事情。

  6. 开发服务 devServer：
      1. 概述：
          当我们使用webpack的时候，不仅仅只是用于打包文件，大部分我们还会依赖webpack来搭建本地服务，同时利用其热更新的功能，让我们更好的开发和调试代码
          * 一般在我们的项目中肯定去会发一些 ajax 请求，而这个请求是基于 http 协议的，所以我们需要起一个服务器

      2. 使用：
          yarn add webpack-dev-server -D
          然后执行下列代码开启服务：
            npx webpack serve
          或者在package.json配置一下：
            "scripts": {
              "serve": "webpack serve --mode development"
            }
          然后通过yarn serve运行。
          这时，webpack会默认开启http://localhost:8080/服务（具体看你们运行返回的代码），而该服务指向的是dist/index.html。
          * 但你会发现，你的dist中其实是没有任何文件的，这是因为webpack将实时编译后的文件都保存到了内存当中。
          <!-- 
            devServer: {
              host: 'localhost', // 默认localhost,想外部可访问用'0.0.0.0'
              port: 8888,  // 自定义端口号
              open: true,   // 自动打开浏览器窗口
              proxy: {  // 跨域代理
                '/api': 'http://localhost:3000',
                '/api2': { // 这时候，当你请求/api2/users的时候，就会代理到http://localhost:3000/users。
                  target: 'http://localhost:3000',  // 代理地址
                  pathRewrite: { '^/api2': '' },   // 重写路径
                },
              },
              secure: false,  // 使用https
              changeOrigin: true,   // 覆盖主机源
            }, 
          -->
  
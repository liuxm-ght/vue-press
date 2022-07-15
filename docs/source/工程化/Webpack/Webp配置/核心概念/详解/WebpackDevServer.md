### Webpack-dev-server
  1. 概述：
      * 当我们使用webpack的时候，不仅仅只是用于打包文件，大部分我们还会依赖webpack来搭建本地服务，同时利用其热更新的功能，让我们更好的开发和调试代码

      ::: tip 解决跨域问题
      一般在我们的项目中肯定去会发一些 ajax 请求，而这个请求是基于 http 协议的，所以我们需要起一个服务器
      :::

  2. 使用：

      安装
      ```ts
      yarn add webpack-dev-server -D
      ```
      然后执行下列代码开启服务：
      ```ts
        npx webpack serve
      ```
      或者在package.json配置一下：
      ```ts
        "scripts": {
          "serve": "webpack serve --mode development"
        }
      ```
      然后通过yarn serve运行。

      这时，webpack会默认开启http://localhost:8080/服务（具体看你们运行返回的代码），而该服务指向的是dist/index.html。

      ::: warning
      但你会发现，你的dist中其实是没有任何文件的，这是因为webpack将实时编译后的文件都保存到了内存当中。
      ::: 
  
  3. webpack-dev-server的好处(可以实现热更新)
      1. 其实webpack自带提供了--watch命令，可以实现动态监听文件的改变并实时打包，输出新的打包文件。
        ::: warning 缺点:
        一是每次你一修改代码，webpack就会全部文件进行重新打包，这时候每次更新打包的速度就会慢了很多；

        其次，这样的监听方式做不到热更新，即每次你修改代码后，webpack重新编译打包后，你就得手动刷新浏览器，才能看到最新的页面结果。
        :::

      2. 而webpack-dev-server，却有效了弥补这两个问题。
        ::: warning 原理:
        它的实现，是使用了express启动了一个http服务器，来伺候资源文件。然后这个http服务器和客户端使用了websocket通讯协议，当原始文件作出改动后，webpack-dev-server就会实时编译，然后将最后编译文件实时渲染到页面上。
        :::
      <!-- 热更新见《HMR》篇 -->

  4. webpack-dev-server配置
      * 在webpack.config.js中，有一个devServer选项是用来配置webpack-dev-server，这里简单讲几个比较常用的配置。
        * contentBase: './dist', / / 指定目录 起 服务器
        * port 我们可以通过port来设置服务器端口号。
        * open 在devServer中有一个open选项，默认是为false，当你设置为true的时候，你每次运行webpack-dev-server就会自动帮你打开浏览器。
        * proxy 这个选项是用来设置本地开发的跨域代理的，proxy的值必须是一个对象，在里面我们可以配置一个或多个跨域代理。最简单的配置写法就是地址配上api地址。
        * changeOrigin，默认情况下，代理时会保留主机头的来源，当我们将其设置为true可以覆盖这种行为
        * secure ，当你的接口使用了https的时候，需要将其设置为false
        * publicPath， 公共目录

      package.json配置
      ```ts
      devServer: {
        contentBase: path.join(__dirname, 'static'),    // 告诉服务器从哪里提供内容(默认当前工作目录)
        openPage: 'views/index.html',  // 指定默认启动浏览器时打开的页面
        index: 'views/index.html',  // 指定首页位置
        watchContentBase: true, // contentBase下文件变动将reload页面(默认false)
        host: 'localhost', // 默认localhost,想外部可访问用'0.0.0.0'
        inline: true, // 可以监控js变化
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
        compress: true, // 一切服务都启用gzip 压缩
        disableHostCheck: true, // true：不进行host检查
        stats: { // 设置控制台的提示信息
          chunks: false,
          children: false,
          modules: false,
          entrypoints: false, // 是否输出入口信息
          warnings: false,
          performance: false, // 是否输出webpack建议（如文件体积大小）
        },
        writeToDisk: true,//也可以写入硬盘，产出实体文件：
      }
      ```
        * publicPath
            1. 假设服务器运行在 http://localhost:8080 并且 output.filename 被设置为 bundle.js。默认 publicPath 是 "/"，所以你的包(bundle)可以通过 http://localhost:8080/bundle.js 访问。
            2. 可以修改 publicPath，将 bundle 放在一个目录：
            publicPath: "/assets/"
            3. 你的包现在可以通过 http://localhost:8080/assets/bundle.js 访问。
        
        * historyApiFallback
            1. 当使用 HTML5 History API (opens new window)时，任意的 404 响应都可能需要被替代为 index.html。通过传入以下启用：
                historyApiFallback: true
            2. 通过传入一个对象，比如使用 rewrites 这个选项，此行为可进一步地控制：
            ```ts
            historyApiFallback: {
              rewrites: [
                { from: /^\/$/, to: '/views/landing.html' },
                { from: /^\/subpage/, to: '/views/subpage.html' },
                { from: /./, to: '/views/404.html' }
              ]
            }
            ```
        * [hot](../../HMR/HMR(模块热替换).md)
            启用 webpack 的模块热替换特性
  
  5. 实现一个简单的 webpack-dev-server：
      1. 实现一个没有热更新的简单的webpack-dev-server，其原理是：
        1. 通过express来启动一个服务
        2. 利用webpack-dev-middleware来监听文件的变化，当文件变化时自动刷新服务器

      2. 实现:
          1. 根目录下创建一个server.js文件，并安装依赖
          ```ts
          npm install express webpack-dev-middleware -D 
          ```
          2. 编写server.js文件
          ```ts
            const express = require('express');
            const webpack = require('webpack');

            // 监听文件变化
            const webpackDevMiddleware = require('webpack-dev-middleware');

            // 导入配置文件
            const config = require('./webpack.config.js');

            // 返回 webpack 的编译器
            // complier 的意思就是 通过 webpack 和 其配置文件，可以随时对文件进行编译
            const complier = webpack(config);

            // 创建服务器的实例
            const app = express();

            // 服务注册中间件，中间件功能是监听webpack的编译，中间件可以接受两个参数，编译器 和 其他的配置参数
            app.use(webpackDevMiddleware(complier, {}));

            // 启动一个 express 服务
            app.listen(3000, () => {
              console.log('server is running');
            }); 
          ```
          
          3. 执行server.js文件
              package.json 文件的 scripts
              ```ts
                "scripts": {
                  "bundle": "webpack",
                  "start": "webpack-dev-server",
                  "server": "node server.js"
                }, 
              ```
              运行 npm run server，我们可以发现在 localhost:3000 起了一个服务，页面上可以看到 webpack-dev-server 文字

          4. 修改代码
              
              修改一下 header.js 文件，修改完服务会刷新，但页面不会自动刷新，我们需要自己刷新一下页面。其实效果就跟 webpack --watch 一样。
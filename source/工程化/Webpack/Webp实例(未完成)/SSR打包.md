### SSR 打包
  1. 服务端渲染和客户端渲染
      1. 服务器端渲染：用户请求服务器，服务器上直接生成 HTML 内容并返回给浏览器。服务器端渲染来，页面的内容是由 Server 端生成的。
        * 一般服务器端的渲染能力有限，如果要给相应的元素做一点交互，我们就需要引入相应的 js 来完成。
          这就又涉及到另外一个概念 同构，他的意思就是让客户端渲染和服务器端渲染的一个整合。
          我们把页面的展示内容和交互写在一起，让同一套代码代码执行两次。在服务器端执行一次，用于实现服务器端渲染，在客户端再执行一次，用于接管页面交互。

      2. 浏览器端渲染：页面初始加载的 HTML 页面中无网页展示内容，需要加载执行 JavaScript 文件中的 React 代码，通过 JavaScript 渲染生成页面，同时，JavaScript 代码会完成页面交互事件的绑定。

  2. ssr 的优势
      1. 减少白屏时间，即首屏加载时间
        在 SPA （单页应用） 模式下，所有的数据请求和 Dom 渲染都在浏览器端完成。所以当我们第一次访问页面的时候很可能会存在 白屏 等待，而服务端渲染所有数据请求和 html 内容已在服务端处理完成，浏览器收到的是完整的 html 内容，可以更快的看到渲染内容，在服务端完成数据请求肯定是要比在浏览器端效率要高的多。

      2. 对于 SEO 友好
        由于在 HTML 中已经包含了网页的所有内容，所以网页的 SEO 效果也会变的非常好。
        不过在项目中引入 SSR，势必会让项目变得更加复杂，提高了维护成本，如果不是特别需要，大家尽量还是不要用服务端渲染。

  3. ssr 整体流程
    第一： 打包浏览器端代码：npm run build
    第二： 打包服务端代码并启动服务：npm run build:ssr
    第三： 用户访问，服务端读取浏览器端打包好的 index.html 文件为字符串，同时塞入 ssr 打包好的 html 文件，返回给浏览器
    第四： 浏览器直接渲染接收到的 html 内容，并且加载打包好的浏览器端 js 文件，进行事件绑定，初始化状态数据，完成同构。

  4. webpack 打包
      1. config 下新增一个 webpack.ssr.js，我们将 common.js 中的代码复制一份，
        1. 新增 target: 'node' 代表在 Node 环境中使用，
        2. 同时在 output 属性中 libraryTarget 和 libraryExport 属性，因为现在我们是将 React 代码打包到服务器端中使用，在 Node 中不支持 esmodule，只支持 commonjs 引入；
      2. "build:ssr": "webpack --config ./config/webpack.ssr.js",
      3. 接着我们就去创建一个入口文件 index-server.js并修改一下 home.js，
        在 home.js 中绑定了点击图片，增加数字的一个事件，代码就不贴了，直接可以在示例代码中查看；
        主要看一下 index-server.js，这个是服务端打包的入口文件，我们通过 ReactDOMServer (opens new window)中的renderToString 这个方法将 React 元素渲染为初始 HTML。这样我们就能在服务器端拿到相应的 html，拼好好后，直接返回给浏览器了。

      4. 服务器端代码
        我们新建 server 目录，在下面新建一个 index.js，用来做服务器端的一些操作，这里需要注意的几个点：

        我们最前面提过同构 这个概念，即让同一套代码在服务器中和浏览器中各运行一次，所以我们需要进行两次打包，一次是针对 ssr 的打包，也就是运行 npm run build:ssr，我们把打包代码放到 dist 下；接着对浏览器端代码进行一次打包，npm run build，把打包代码放到 dist-client 下，服务器返回给浏览器的 html 是浏览器端打包出来的模版，因为这样可以直接引入相应的 css 和 js 代码了，我们就只需将 ssr 打包出来的模版 html 注入就 ok 了。
        服务器端代码是通过 express 来写的
        我们通过标识符 <!--HTML_PLACEHOLDER--> 插入 html，<!--INITIAL_DATA_PLACEHOLDER--> 插入相应的数据

      5. 完成之后，我们依次运行：
          npm run build：打包浏览器代码
          npm run build:ssr：打包服务器代码
          进入到 server 目录下，运行 node index.js，开启 node 服务
          我们可以看到起了一个端口 3000 的服务：

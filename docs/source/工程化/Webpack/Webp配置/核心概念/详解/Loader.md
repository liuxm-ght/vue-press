### 3. Loader  
  1. 概念
    * 配置处理模块的规则
    由于webpack的入口文件只能接受js和json的文件，或者说webpack本身只能处理js和json的文件，那么如何处理其他如html、css、图片、字体、vue等文件呢？此时需要第三方的loader来转换这些文件。
    module下就是配置哪些文件使用什么转换规则及如何转换(包括顺序...)

  2. 原理
    1. 实现：
        Loaders 本身是一个函数，接受源文件作为参数source，返回转换的结果。
        函数有一个pitch属性，也是一个函数，可提供三个参数，分别代表
          1. remainingRequest： 可以获取剩余请求loader
          2. precedingRequest： 可以获取前置请求loader
          3. data： 数据
        * 并且pitching loader函数的执行顺序是跟loader本身函数的执行顺序是相反的，而且pitching loader先执行，即：
            Pitching Loader: style-loader -> css-loader -> less-loader (从左到右)
            Normal Loader: less-loader -> css-loader -> style-loader (从右到左)
        * 其实当某个 Pitching Loader 返回非 undefined 值时，就会实现熔断效果。
            比如 Pitching css-loader 返回 true， 那么不执行Pitching less-loader ，直接执行Normal less-loader，也不执行 Normal css-loader

    2. 例子：
        file-loader协助webpack打包图片时，
        1. 首先，webpack从入口文件开始打包，一直打包遇到图片，发现不知道怎么打包，就去module配置下匹配规则来处理，发现匹配到了规则，use:[file-loader]
        2. 然后，使用file-loader来处理图片，处理完成后，将图片移动到输出文件夹下去，并给出名字，名字可以在module下的options中配置，或使用默认file-name的规则。

  3. 使用：
      * 配置写在 模块 module
      * module选项是一个对象，它里面有一个rules属性，是一个数组，rules 就是配置模块的读取和解析规则，在里面我们可以配置多个匹配规则。而匹配规则是一个对象，会有test属性和use属性，
        1. 条件匹配：
          1. test属性一般是正则表达式，用来识别文件类型，
          2. include 包含哪些目录
          3. exclude 不包含哪些目录
        2. 应用规则：use属性是一个数组，里面用来存放对该文件类型使用的loader。
          * use数组的顺序是有要求的，webpack会根据 从右往左 的规则去执行loader，同时我们可以分别向 loader 传入相应的参数。
        3. 重置 loader 的执行顺序：因为一组 loader 的执行顺序默认是从右到左执行的，通过 enforce 选项可以将其中一个 loader 的执行顺序放到最前或者最后。
      eg:
        <!-- 
        module: {
          rules: [
            {
              test: /\.css$/,  // 识别css文件
              use: ['style-loader', 'css-loader', 
                {
                  // loader名称
                  loader: 'less-loader',
                  // loader选项
                  options: {
                    name: '[name].[ext]',
                    outputPath: 'style/',
                    importLoaders: 1, // 必须确保后面一个loaders都执行了，例如在less中引入其他less文件，可能不会再走 less-loader 和 postcss-loader了，必须使用importLoaders确保下
                    ... 
                  }
                },
                'postcss-loader'
              ]  // 对css文件使用的三个loader
            }
          ]
        } 
        -->

  4. CSS 模块化
      例子：
        一个index.css文件，有一个 avter 的class，这个css文件被几个地方引用：
          a.js import './index.less';
          b.js import './index.less';
        * 当修改index.css文件里的avter class的样式后，两个文件的样式都会被改变。
      * 解决：
        * Css的模块化，css 只在这个模块里面有效，其他模块不影响。
        <!-- 
          {
            test: /\.less$/,
            use: [
              ...
              {
                loader: 'css-loader',
                options: {
                  ...
                  modules: true,
                }
              },
              ...
            ]
          } 
        -->
        同时我们修改一下各个模块的引入方式：
        <!-- 
          // import './index.less';
          import style from './index.less'
          img.classList.add(style.avatar); // 添加类名
        -->

  5. 常用 Loader
      file-loader url-loader : 打包静态资源（图片等）
      style-loader css-loader less-loader postcss-loader ： 打包样式文件
      px2rem-loader : 移动端 css px 自动转换为 rem 的 loader
      row-loader : 有的时候我们需要将资源内联到 html 中去，我们可以通过 row-loader 来内联 html 和 js 代码。
      raw-loader (opens new window)：将文件以字符串的形式导入
      thread-loader (opens new window)：多进程打包 js 和 css 的 loader，我们会在 Webpack 性能优化 中讲到
      babel-loader (opens new window)：转换 ES6、ES7 等 JS 新特性语法，我们会在接下去的小结专门讲一下
      ts-loader：将 typescript 代码转化为 js，我们会在 Webpack 实战配置案例 中讲到

  6. 手写一个Loader
    <!-- 详情见《手写系列-Loader》 -->
    <!-- 参考文章： https://juejin.cn/post/6992754161221632030#heading-3 -->

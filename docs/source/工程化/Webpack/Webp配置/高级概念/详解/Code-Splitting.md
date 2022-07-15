[[toc]]
### Code-Splitting 代码分割 
1. 前言：  
    ::: tip
    对于大的 Web 应用来讲，将所有的代码都放在一个文件中显然是不够有效的，特别是当你的某些代码块是在某些特殊的时候才会被使用到。
    ::: 
    
    webpack 有一个功能就是将你的代码库分割成 chunks(语块)，当代码运行到需要它们的时候再进行加载。

2. 手动分割：

    多入口多输出，手动修改index.html引入输出的文件
    ```ts 
    entry: {
      lodash: './src/lodash.js',
      main: './src/index.js',
    }, 
    ```
    将 工具库函数 lodash 抽取到了 lodash.js，main.js 只负责我们的业务代码，这样当我们修改了相关的业务代码的时候，就不需要重新去打包 lodash.js 了，浏览器会缓存不变的代码，或者我们可以将其放到 cdn 上

3. webpack两种分割方式:
    1. 同步引入，分割代码:

        webpack4+ 自带配置
        ```ts
        optimization: {
          splitChunks: {
            chunks: 'all', // 公用的类库拆分，默认全部
          }
        }, 
        ```
        ::: tip
        多了一个 vendors~main.js，我们打开看一波，其实这个文件就是对 lodash 的打包
        :::

    2. 异步引入，分割代码(import):
        ::: tip 自动分割到单独文件
          异步代码引入切割代码，我们无需做任何配置，会自动进行代码分割，放置到新的文件中。(webpack的optimization.splitChunks.chunks默认是async)
        :::

        * 实现方式
        1. CommonJs：使用 require.ensure (opens new window)来实现
        2. ES6：动态 import()，我们接下去的例子

            * 我们新建一个 async.js 文件，用于异步导入 lodash：
            ```ts 
            export default function getComponent() {
              return import(/* webpackChunkName:"lodash" */ 'lodash').then(({ default: _ }) => {
                var element = document.createElement('div');
                element.innerHTML = _.join(['Hello', 'Darrell'], '-');
                return element;
              })
            } 
            ```
            接着我们在 index.js 中引入使用：
            ```ts 
            import getComponent from './async.js'
            getComponent().then(element => {
              document.body.appendChild(element);
            }); 
            ```
            在打包出来的 dist 目录下多出了 0.js，里面的内容就是 lodash.js

            ::: warning 注意点：
              在早些 webpack 版本中是不支持 import('lodash').then() 这种方法的，打包过程中会报错，我们需要借助 babel 的一个插件 babel-plugin-dynamic-import-webpack 帮我们解决这个问题。
              安装：
              ```ts
                npm i babel-plugin-dynamic-import-webpack -D 
              ```
              在 .babelrc 中进行配置：
              ```ts
                {
                "presets": [
                  [
                    "@babel/preset-env",
                    {
                      useBuiltIns: 'usage'
                    }
                  ],
                  "@babel/preset-react"
                ],
                "plugins": ["dynamic-import-webpack"]
              } 
              ```
            ::: 

  4. 进阶分割方式(CDN引入)：
      ::: warning CDN引入 
      分割代码不打包进bundle，利用cdn引入并自动插入到html
      :::

      * html-webpack-externals-plugin
        1. 此插件可以将一些公用包提取出来使用 cdn 引入，不打入 bundle 中，并自动在html中引入
        2. 安装
        ```ts
          npm install html-webpack-externals-plugin -D
        ```
        3. 配置
        ```ts 
        const HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin');
        plugins: [
          new HtmlWebpackPlugin(),
          new HtmlWebpackExternalsPlugin({
            externals:[
              {
                module:'moduleName',
                entry:'moduleCdnUrl',
                global:'全局变量'
              },
              {
                module: 'react', // 模块名称
                entry: 'https://11.url.cn/now/lib/16.2.0/react.min.js', // 引入的cdn
                entry: {
                  path: 'https://fonts.googleapis.com/css?family=Roboto',
                  type: 'css',// 生成的html中是使用link标签还是script标签
                },
                global: 'React', // 创建一个全局对象 React
              },
            ]
          }) 
        ]
        ```
        4. 需要配合html-webpack-plugin使用，因为需要将 CDN 的地址引入到 html 中去。
        ::: tip html-webpack-plugin 可以自定义配置
        * cdnConfig: externalConfig, // cdn配置
        * onlyCss: false, //加载css

        在html上通过htmlWebpackPlugin.options可以读取到。
        [](https://www.jianshu.com/p/aaa01bb7fa78)
        :::

        ::: warning 疑问点❓

        注意：html-webpack-plugin 要在 HtmlWebpackExternalsPlugin前实例化

        提示：不使用HtmlWebpackExternalsPlugin插件的话，1.可以配合webpack.externals配置，将不需要打包的第三方库利用cdn引入，2.但需要手动将cdn在html中引入
        :::

  5. 原理：
      ::: tip SplitChunksPlugin
      webpack 之所以能够进行代码分割，原因是它内部集成了 SplitChunksPlugin 插件，它能够非常方便的帮我们进行代码分割。
      
      老版本是需要自己手动引入的。
      ::: 

      * SplitChunksPlugin
          1. 官方默认配置
              webpack 将会基于以下条件自动分割代码块:
              * 新的代码块被共享或者来自 node_modules 文件夹
              * 新的代码块大于 30kb (在 min+giz 之前)
              * 按需加载代码块的请求数量应该 <=5
              * 页面初始化时加载代码块的请求数量应该 <=3

          2. 配置说明：
          ```ts
            splitChunks: {
              chunks: "async", // "initial" | "all"(推荐) | "async" (默认就是async) | 函数
              minSize: 30000,              // 最小尺寸，30000
              minChunks: 1,                // 最小 chunk ，默认1
              maxAsyncRequests: 5,         // 最大异步请求数， 默认5
              maxInitialRequests: 3,       // 最大初始化请求数，默认3
              automaticNameDelimiter: '~', // 打包分隔符
              name: true,       // 打包后的名称，此选项可接收 function
              cacheGroups: {   // 这里开始设置缓存的 chunks ，缓存组
                vendors: {
                  test: /[\\/]node_modules[\\/]/,
                  priority: -10,
                },
                default: {
                  minChunks: 2,
                  priority: -20,
                  reuseExistingChunk: true, // 可设置是否重用该chunk
                }
              }
            } 
          ```
          ::: details 配置说明
          * initial：表示对初始化值进行分离优化。

              此属性的意思是告诉 webpack，我希望将动态导入的文件和非动态导入的文件分别打包，如果一个模块被动态引入，也被非动态引入。那么这个模块将会被分离2次。被分别打包到不同的文件中。 

          * maxAsyncRequests

              此参数规定按需加载的最大并行请求数。

              当异步引入模块的时候，按需加载的代码块（vendor-chunk）并行请求的数量小于或等于的数量。

              官方默认配置是 5个。  

          * maxInitialRequests

              此参数规定最大的初始化加载次数，最大的初始请求数是为了防止 chunk 划分的过于细致，导致大量的文件请求，降低性能。

              官方默认配置是 3 个。

          * cacheGroups

              缓存组默认将 node_modules 中的模块拆分带一个叫做 vendors 的代码块中。

              将最少重复引用两次的模块放入 default中。 
              
              可以通过 default:false 禁用默认的缓存组，然后就可以自定义缓存组，将初始化加载时被重复引用的模块进行拆分，就像这样：
              ```ts
                cacheGroups: {
                  commons: {
                    filename: "commons",
                    chunks: "initial",
                    minChunks: 2
                  }
                }
              ```
              priority
                此参数规定 表示缓存的优先级，当一个模块同时满足两个要求的时候，我们会根据这个值来进行分组，参数越大优先级越高。
                    
          ::: 



  6. webpack-bundle-analyzer

      此依赖是方便我们查看打包内容的的可视化分析工具。
      ```ts
        new BundleAnalyzerPlugin({
          analyzerHost: '127.0.0.1',
          analyzerPort: 8889,
          openAnalyzer: false,
        }),
        "scripts": {
          ...
          "analyz": "NODE_ENV=production npm_config_report=true npm run build"
        }, 
      ```
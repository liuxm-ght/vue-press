### Webp高级概念
  1. Tree-Shaking 摇树
    打包后，删除没有被引用或执行的模块，减少代码体积
    <!-- wabpack配置：optimitation:{ usedExports:true } -->
    <!-- package.json： sideEffects:false, -->

  2. Code-Splitting 代码分割 
    将所有的代码都放在一个文件中显然是不够有效的,单文件体积太大
    webpack 有一个功能就是将你的代码库分割成 chunks(语块)，当代码运行到需要它们的时候再进行加载。
    <!-- wabpack配置：optimitation:{ splitChunks:{ chunks: 'all' } } -->
    <!-- import() 或 require.sure() 异步加载的代码，会默认放到单独的chunks中去 -->

  3. Lazing-Loading 懒加载
    关于懒加载的我们其实之前几节课上面都有用到，其实就是代码的异步引入。
  
  4. CSS 文件的代码分割
    之前我们写的 css 代码都是直接被打包到 js 文件中去的，然后使用 style-loader，以 < style> 标签的形式 将 css 插入到 dom 中。
    但是并没有单独的打包出一个 css 文件，代码分割将单独打包出 css 文件。

  5. 区分打包 
    不同环境用不同配置文件，通过webpack-merge来合并公共配置文件

  6. 显示日志和异常处理优化
    在 webpack 中有一个配置 stats，他的意思是：
    如果你不希望使用 quiet 或 noInfo 这样的不显示信息，而是又不想得到全部的信息，只是想要获取某部分 bundle 的信息，使用 stats 选项是比较好的折衷方式。

  7. 打包分析 与 Preloading、Prefetching
  ```ts
    "bundle": "webpack webpack --profile --json > stats.json --config ./config/webpack.dev.js"
  ```
    这句话的意思就是使用 webpack 打包的过程的一些文件放到 stats.json 中去。
    我们打包一下 npm run bundle，页面根目录下会生成 stats.json 描述性文件。
    我们通过官网提供的 stats.json 分析工具 (opens new window)进行分析：

  8. shimming 垫片
    * 其实就是改变了 webpack 中的一些默认的特性或者行为，这其实也是一个 垫片 的作用。
      1. @babel/polyfill 就是一个 垫片，他能解决 webpack 打包过程中的一些兼容性的问题，但这仅仅是浏览器兼容性，还有其他各种各样的兼容性垫片。

      2. webpack.ProvidePlugin 
        定义全局变量，当遇到定义变量，就自动引用指定模块
        ```ts
          new webpack.ProvidePlugin({
            $: 'jquery',
            _: 'lodash'
          }) 
        ```

      3. imports-loader
        定义this的指向，eg:可以在浏览器中看到现在的 this 指向了 window。
        ```ts
          module: {
            rules: [
              { 
                test: /\.js$/, 
                exclude: /node_modules/, 
                use: [
                  'babel-loader',
                  {
                    loader: 'imports-loader?this=>window'
                  }
                ]
              },
              ...
            ],
          } 
        ```


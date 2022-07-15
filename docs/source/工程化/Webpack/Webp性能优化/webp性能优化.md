[[toc]]
## Webpack性能优化

### 体积压缩
1. js 压缩、剔除、拆分
    1. 压缩
        * terser-webpack-plugin 多进程压缩js代码，同时支持es6，parallel可设置进程数量
        ::: details 
          * 'webpack-parallel-uglify-plugin' 'uglifyjs-webpack-plugin' 
          * 现在 webpack4.0 之后默认使用是 terser-webpack-plugin (opens new window)。
              * 两者的区别是前者不支持 es6 代码的压缩，后者是支持的。

              使用：
              ```ts
              optimization: {
                minimize: true,
                minimizer: [
                  new TerserPlugin({
                    parallel: 4, // 开启几个进程来处理压缩，默认是 os.cpus().length - 1
                  }),
                ],
              }, 
            ```
        :::

    2. 剔除
    [tree-shaking](../Webp配置/高级概念/详解/Tree-Shaking.md)
    ::: tip tree-shaking
    tree-shaking 删除无效js代码
    :::

    3. 拆分 
    [splitChunks](../Webp配置/高级概念/详解/Code-Splitting.md)
    ::: tip 
    splitChunks 把一个大的文件分割成几个小的文件，这样也可以有效的提升 webpack 的打包速度
    :::

2. css 压缩、剔除、拆分、动态polyfill
    1. 压缩
    ::: tip optimize-css-assets-webpack-plugin
    optimize-css-assets-webpack-plugin 压缩css代码，其默认使用的压缩引擎是 cssnano。
    :::

    ::: details 详情
      我们可以借助 OptimizeCSSAssetsPlugin，来帮助我们做 css 的代码压缩。
      1. 安装
      ```ts
      npm install optimize-css-assets-webpack-plugin -D 
      ```
      2. 配置：
      ```ts 
        const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
        ...
        const prodConfig = {
          ...
          optimization: {
            minimizer: [new OptimizeCSSAssetsPlugin({})]
          },
          ...
        }
      ```
    :::

    2. 擦除
    ::: tip PurgeCSS
    使用 purgecss-webpack-plugin 来完成对无用 css 的擦除，它需要和 mini-css-extract-plugin 配合使用。
    :::

    3. 拆分
    [mini-css-extract-plugin](../Webp配置/高级概念/详解/CSS-Code-Splitting.md)
    ::: tip 
    mini-css-extract-plugin 拆分bundl.js的css到单独文件
    :::

    4. 动态polyfill
    ::: tip polyfill
    添加动态polyfill叠片
    :::

3. 图片压缩
    ::: tip image-webpack-loader
    图片压缩 image-webpack-loader
    :::


### 速度提升
1. [环境区分](../Webp配置/高级概念/详解/区分打包.md)

    一般来说在项目开发中，我们会区分开发和生产环境两套配置，各司其职。

2. 减少查找过程

    对 webpack 的 resolve 参数进行合理配置，使用 resolve 字段告诉 webpack 怎么去搜索文件。
    1. 合理使用 resolve.extensions
        * 在导入语句没带文件后缀时，webpack 会自动带上后缀后去尝试询问文件是否存在，查询的顺序是按照我们配置 的 resolve.extensions 顺序从前到后查找，webpack 默认支持的后缀是 js 与 json。
    2. 优化 resolve.modules
        * 这个属性告诉 webpack 解析模块时应该搜索的目录，绝对路径和相对路径都能使用。使用绝对路径之后，将只在给定目录中搜索，从而减少模块的搜索层级
      3. 使用 resolve.alias 减少查找过程
        * alias 的意思为 别名，能把原导入路径映射成一个新的导入路径。
        比如我们项目中可能会有一些相对路径的写法，就可以使用 alias 配置来减少查找过程；

3. 缩小构建目标

    排除 Webpack 不需要解析的模块，即使用 loader 的时候，在尽量少的模块中去使用。
    * 我们可以借助 include 和 exclude 这两个参数，规定 loader 只在那些模块应用和在哪些模块不应用。

4. 多线程打包
    *  HappyPack 和 thread-loader
    * webpack 每次解析一个模块，thread-loader 会将它及它的依赖分配给 worker 线程中，从而达到多进程打包的目的。
    ::: details 
    1. 使用 thread-loader
    ```ts
    module: {
      rules: [{ 
        test: /\.jsx?$/, 
        // exclude: /node_modules/,
        // include: path.resolve(__dirname, '../src'), 
        use: [
          {
            loader: 'thread-loader',
            options: {
              workers: 3, // 开启几个 worker 进程来处理打包，默认是 os.cpus().length - 1
            }
        }, 
        ...
    ```
    :::

5. 预先编译资源模块（[DllPlugin](../Webp配置/高级概念/详解/dllPlugin.md)）
    * webpack.DllPlugin 就是来解决这个问题的插件，使用它可以在第一次编译打包后就生成一份不变的代码供其他模块引用，这样下一次构建的时候就可以节省开发时编译打包的时间。

6. 缓存 Cache
    * 我们可以开启相应 loader 或者 plugin 的缓存，来提升二次构建的速度。
        * babel-loader 开启缓存
        * terser-webpack-plugin 开启缓存
        * 使用 cache-loader 或者 hard-source-webpack-plugin(opens new window)
    ::: warning 充分利用缓存提升二次构建速度
    如果项目中有缓存的话，在 node_modules 下会有相应的 .cache 目录来存放相应的缓存。
    :::
    * [webpack配合浏览器缓存](../Webp配置/高级概念/详解/webpack和浏览器缓存.md)

7. 合理使用 [sourceMap](../Webp配置/核心概念/详解/SourceMap.md)

    对应的环境使用对应的 sourceMap 很重要。

### 更新版本号
  1. 这个是 webpack 性能优化的万能膏药，升级版本必定能带来性能提升，而且提升很明显。

  2. 一个 v8 性能优化例子：

      我们可以来看一个例子，比较使用 includes 替代 indexOf 之后带来的速度提升，创建 compare-includes-indexof.js 文件，在这个文件中建一个 10000000 长度的数组，记录两个函数分别消耗的时间：
      ```txt
      可以发现 includes 的速度远远快于 indexOf：
        includes：12.224ms
        indexOf：147.638ms
      ```
      所以在项目上尽可能使用比较新的 webpack、Node、Npm、Yarn 版本，是我们提升打包速度的第一步。

[参考文章：](https://juejin.cn/post/6844904142675279886)
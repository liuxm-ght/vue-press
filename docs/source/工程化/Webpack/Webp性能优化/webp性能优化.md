### 性能优化
  * 主要是提升打包速度
    1. 使用 DllPlugin 提高打包速度
        我们在打包的时候，一般来说第三方模块是不会变化的，所以我们想只要在第一次打包的时候去打包一下第三方模块，并将第三方模块打包到一个特定的文件中，当第二次 webpack 进行打包的时候，就不需要去 node_modules 中去引入第三方模块，而是直接使用我们第一次打包的第三方模块的文件就行，这样就能加快 webpack 的打包速度。

    2. 充分利用缓存提升二次构建速度
        * 我们可以开启相应 loader 或者 plugin 的缓存，来提升二次构建的速度。一般我们可以通过下面几项来完成：
          babel-loader 开启缓存
          terser-webpack-plugin 开启缓存
          使用 cache-loader 或者 hard-source-webpack-plugin(opens new window)
        * 如果项目中有缓存的话，在 node_modules 下会有相应的 .cache 目录来存放相应的缓存。

    3. 控制包的大小
        1. 图片压缩 image-webpack-loader
        2. css的tree-shaking 删除无效css
            purgecss-webpack-plugin和 mini-css-extract-plugin 配合使用。
        3. 使用动态 Polyfill 服务

    4. 合理使用 sourceMap

    5. 多进程打包
      *  HappyPack 和 thread-loader
      * 主要 thread-loader 现在
        1. 使用
          <!-- 
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
          -->

    6. 多进程/多示例 压缩
      * 'webpack-parallel-uglify-plugin' 'uglifyjs-webpack-plugin' 
      * 现在 webpack4.0 之后默认使用是 terser-webpack-plugin (opens new window)。
          两者的区别是前者不支持 es6 代码的压缩，后者是支持的。
        1. 使用：
          <!-- 
            optimization: {
              minimize: true,
              minimizer: [
                new TerserPlugin({
                  parallel: 4, // 开启几个进程来处理压缩，默认是 os.cpus().length - 1
                }),
              ],
            }, 
          -->

    7. 使用 DllPlugin 提高打包速度 - 详解：
       1. 使用：
        

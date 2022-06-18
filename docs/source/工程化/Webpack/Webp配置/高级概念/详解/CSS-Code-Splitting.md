### CSS-Code-Splitting CSS文件的代码分割
  1. 概述：
      之前我们写的 css 代码都是直接被打包到 js 文件中去的，然后使用 style-loader，以 < style /> 标签的形式 将 css 插入到 dom 中。
      但是并没有单独的打包出一个 css 文件，今天我们来讲一下讲如何单独打包出 css 文件。
      在 Webpack 4 之前，我们使用 extract-text-webpack-plugin (opens new window)插件来提取项目中引入的样式文件，打包到一个单独的文件中。从 Webpack 4 开始，这个插件就过时了，需要使用 MiniCssExtractPlugin (opens new window)。

  2. 使用 MiniCssExtractPlugin：
      此插件能提取 js 中引入的 css 打包到单独文件中，然后通过标签 < link /> 添加到头部；
      1. 安装依赖
        ```ts
         npm install mini-css-extract-plugin -D
        ```
      2. 配置： 
        ```ts 
          module: {
            rules: [
              ...
              {
                test: /\.less$/,
                use: [
                  MiniCssExtractPlugin.loader,
                  {
                    loader: 'css-loader',
                    options: {
                      importLoaders: 2,
                    }
                  },
                  'less-loader',
                  'postcss-loader',
                ]
              }
              ...
            ]
          },
          plugins: [
            new MiniCssExtractPlugin({
              filename: '[name].css', // 直接引用【index.html（入口文件） 引入的名字】
              chunkFilename: '[name].chunk.css' // 间接引用【其他地方引入使用的名字】
            }),
          ], 
        ```
  
  3. 注意点
    此插件为每个包含 css 的 js 文件创建一个单独的 css 文件，并支持 css 和 source-map 的按需加载。
    * 注意：这里说的每个包含 css 的 js 文件，并不是说组件对应的 js 文件，而是打包之后的 js 文件！接下来会详细说明。
    <!-- 
      如果需要每个文件有单独的css，解决方案：
        动态引入js文件，js文件引入它需要的css文件
        因为异步引入，webpack 会将其单独打包分离成一个 chunk。这个时候便有了有两个 chunk，对应了两个 js 文件，所以会提取这两个 js 文件中的 css 生成对应的文件。这才是 为每个包含 CSS 的 JS 文件创建一个单独的 CSS 文件 的真正含义。 
    -->

  4. 将所有的 css 打包到一个文件：
    * MiniCssExtractPlugin 底层也依赖 splitChunksPlugin，所以我们可以在 splitChunksPlugin 的缓存组中进行相应的配置：
      ```ts 
        optimization: {
          splitChunks: {
            cacheGroups: {
              styles: {
                name: 'styles', // 名字命名为 styles
                test: /\.(c|le)ss$/, // 对所有的 less 或者 css 文件
                chunks: 'all', // 代码分割类型
                enforce: true, // 忽略其他的参数，比如 minsize、minchunks 等，只要是样式文件就去做代码的拆分
              },
            }
          }
        }, 
      ```
      我们重新打包，我们会发现 dist 目录下多了 styles.chunk.js 和 styles.chunk.css，这里面主要用到的就是 styles.chunk.css，所有的 css 文件都被放进去了。我们的 HtmlWebpackPlugin 会自动将 styles.chunk.css 引入到 index.html 中去。

      * 多页面打包 css
        给cacheGroups配置多个子配置，test中传入函数，里面判断入口

  5. 压缩 css
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
### 4. 插件 plugins
  1. 概念 
      * 第三方插件来实现打包优化、资源管理、注入环境变量等任务。
      简单的可以理解为：loader是在打包过程中处理文件，plugin是在打包 前 和 后 处理。

  2. 原理
      1. webpack在打包的过程中，获取到所有注册的plugins，遍历执行所有plugin的apply函数，并传入compiler或compilation实例
      2. 插件是一个类Class，提供了apply方法，来获取compiler（可在整个webpack编译过程提供生命周期）事件钩子
      3. 通过compiler/compilation提供的hooks下挂载了很多事件钩子，插件通过这些钩子来注册自定义的事件，在webpack执行的各个生命周期，通过发布来触发这些事件，执行其回调函数，每个钩子都会返回一个compilation对象（编译上下文），在回调函数里可以拿到这个compilation对象，做一些事情。

  3. 使用：
      * plugins选项是一个数组，里面可以放入多个plugin插件。
      ```ts
      plugins: [
        new htmlWebpackPlugin(),
        new CleanWebpackPlugin(),
        new miniCssExtractPlugin(),
        new TxtWebpackPlugin()
      ]
      ```
      ::: tip
      而对于plugins数组对排序位置是没有要求，因为在plugin的实现中，webpack会通过打包过程的生命周期钩子，因此在插件逻辑中就已经设置好需要在哪个生命周期执行哪些任务。
      :::

  4. 常用 Plugin
      1. html-webpack-plugin
          ::: warning 
          当我们是Web项目的时候，我们必然会存在html文件去实现页面。
          而对于其他类型的文件，比如css、图片、文件等等，我们是可以通过引入入口js文件，然后通过loader进行解析打包。而对于html文件，我们不可能将其引入到入口文件然后解析打包，
          * 反而我们还需要将打包出来的bundle文件引入html文件去使用
          ::: 
          因此，我们需要实现的操作只有两个，
              1. 复制一份html文件到打包路径下
              2. 将打包出来的bundle文件自动引入到html文件中
          1. 使用:
          ```ts 
          yarn add html-webpack-plugin -D
          // 引入htmlWebpackPlugin
          const htmlWebpackPlugin = require('html-webpack-plugin');   
          plugins: [
            // 使用htmlWebpackPlugin插件
            new htmlWebpackPlugin({
              // 指定html模板
                template: './src/index.html',  
              // 自定义打包的文件名
                filename: 'index.html'
                chunks: ["index"]  // 只引入index chunk
            })
          ] 
          ```
          接下来执行一下打包，就会发现dist文件下会生成一个index.html。打开会发现，webpack会自动将bundle文件引入

          ::: details more : 有多个chunk的时候
          如果我们有多个chunk的时候，我们可以指定该html要引入哪些chunk。在htmlWebpackPlugin配置中有一个chunks选项，是一个数组，你只需要加入你想引入的chunkName即可。

          打包完成后，dist文件下会出现index.html、index.js和main.js，但是index.html只会引入index.js。

          如果我们需要实现多页面的话，只需要再new一个htmlWebpackPlugin实例即可
          ::: 

      2. clean-webpack-plugin 清理打包路径
          1. 在每次打包前，我们其实都需要去清空一下打包路径的文件。

            如果文件重名的话，webpack还会自动覆盖，但是实际中我们都会在打包文件名称中加入哈希值，因此清空的操作不得不实现。

          2. 使用：
          ```ts
          const {CleanWebpackPlugin} = require('clean-webpack-plugin');
          plugins: [
            // 使用CleanWebpackPlugin
              new CleanWebpackPlugin({
                // dry: true   // 打开可测试，不会真正执行删除动作
                cleanOnceBeforeBuildPatterns: [
                  '**/*',  // 删除dist路径下所有文件
                  `!package.json`,  // 不删除dist/package.json文件
                ],
              }),
          ] 
          ```
          有些情况下，我们不需要完全清空打包路径，这时候我们可以使用到一个选项，叫cleanOnceBeforeBuildPatterns，它是一个数组，默认是[**/*]，也就是清理output.path路径下所有东西。而你可以在里面输入只想删除的文件，同时我们可以输入不想删除的文件，只需要在前面加上一个!。
    
      
      3. 其他常用的 plugins
          * mini-css-extract-plugin ：Webpack4.0 中将 css 从 bundle 文件中提取成一个独立的 css 文件；在 3.0 版本使用 extract-text-webpack-plugin 。
          * terser-webpack-plugin ：压缩 js 的插件，支持压缩 es6 代码，webpack4.0 默认使用的一个压缩插件，在 3.0 版本使用 uglifyjs-webpack-plugin 来压缩 js 代码。
          * copy-webpack-plugin ：将文件或者文件夹拷贝到构建的输出目录
          * zip-webpack-plugin ：将打包出的资源生成一个 zip 包
          * optimize-css-assets-webpack-plugin ：压缩 css 代码的插件
          * webpack.DefinePlugin ：创建一个在 编译 时可以配置的全局常量，比如设置 process .env .NODE_ENV，可以在 js 业务代码中使用。
          * webpack.DllPlugin ：抽取第三方 js，使用 dll 打包，笔者会在之后 Webpack 性能优化将到。

  5. 手写一个Plugin
      1. my-file-plugin
      ```ts
      /*
        实现功能：
          输出一个文件
          记录输出文件的名称及大小
      */

      module.exports = class filePlugin {
        apply(compiler){
          compiler.hooks.emit.tap('filePlugin',(compilation)=>{
            console.log(compilation.assets);
            let str = ''
            for (let filename in compilation.assets) {
              // 获取文件名称和文件大小
              str += `${filename} -> ${compilation.assets[filename]['size']() / 1024}KB\n`
            }
            // 新建fileSize.txt
            compilation.assets['fileSize.txt'] = {
              // 内容
              source: function () {
                return str
              }
            }
          })
        }
      }
      ```
      [参考文章](https://mp.weixin.qq.com/s/2rUjUM6Zfu1I7cjRUDschg)

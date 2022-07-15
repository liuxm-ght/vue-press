### DllPlugin
  1. 提升打包速度

  2. 当 webpack 打包引入第三方模块的时候，每一次引入，它都会去从 node_modules 中去分析，这样肯定会影响 webpack 打包的一些性能，如果我们能在第一次打包的时候就生成一个第三方打包文件，在接下去的过程中应用第三方文件的时候，就直接使用这个文件，这样就会提高 webpack 的打包速度。这就是 DllPlugin 的作用。

  3. 使用：
  ```ts
  // 对生成的库文件进行分析，生成库文件与业务文件的映射关系，将结果放在 mainfest.json 文件中
  output: {
    filename: '[name].dll.js', // 输出的名字
    path: path.resolve(__dirname, '../dll'), // 输出的文件目录
    library: '[name]' // 将我们打包出来的文件以全部变量的形式暴露，可以在浏览器变量的名字进行访问
  },
  plugins: [
    // 对生成的库文件进行分析，生成库文件与业务文件的映射关系，将结果放在 mainfest.json 文件中
    new webpack.DllPlugin({
      name: '[name]', // 和上面的 library 输出的名字要相同
      path: path.resolve(__dirname, '../dll/[name].manifest.json'),
    })
  ]
  ```
  ::: tip mainfest.json
  mainfest.json 文件是一个映射关系，它的作用就是帮助 webpack 使用我们之前打包好的 ***.dll.js 文件，而不是重新再去 node_modules 中去寻找。
  <!-- 更详细使用方法见百度 -->
  :::
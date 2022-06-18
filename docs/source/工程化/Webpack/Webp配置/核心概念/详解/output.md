### 输出 output：
  1. 概念:
    * output选项是设置输出配置，该选项必须是对象类型，不能是其它类型格式。
    在output对象中，必填的两个选项就是导出路径path和导出bundle文件名称filename。

  2. path:
    * path选项必须为绝对路径。
    打包输出的文件夹(文件目录)的绝对路径
    <!-- path: path.resolve(__dirname, 'dist/'), -->

  3. filename:
      * 代表输出的文件名。
      1. 默认 main.js
      2. 可自定义名称
      3. 可使用占位符，自动配置名称
        <!-- filename: '[name]-[chunkhash:6].js', -->
        * 占位符分两大类：
          1. 名称占位符name
            [hash]         模块标识符(module identifier)的hash
            [chunkhash]    chunk的内容的hash
            [name]         模块名称
            [id]           模块标识符(module identifier)
            [query]        模块的query ，例如 ，文件名 ？后面的字符串
          2. 哈希占位符hash(主要用于缓存)
            1. [hash]  
              * hash策略，是以项目为单位的，也就是说，只要项目一个文件发生改动，首先打包后该文件对应的bundle文件名会改变，其次所有js文件和css文件的文件名也会改变。
                1. 如果修改项目文件的话，所有的js、css打包文件的文件名都会发生变化，但静态文件名不会变化，尽管来自多个chunk。
                2. 如果修改静态文件的话，该静态文件的打包文件文件名会发生变化，并且所有的js、css打包文件的文件名也都会发生变化。
                总结：怎样都全改变
            2. [chunkhash]
              * chunkhash策略的话，是以chunk为单位的，如果一个文件发生变化，只有那条chunk相关的文件的打包文件文件名才会发生变化。
                1. 如果修改项目文件的话，该项目文件对应的chunk的js、css打包文件的文件名都会发生变化。
                2. 如果修改静态文件的话，该静态文件的打包文件文件名会发生变化，并且引入该静态文件对应的chunk的js、css打包文件的文件名也都会发生变化。
                总结：用同一个chunk都改变
            3. [contenthash]
              * contenthash策略， 它是以自身内容为单位的，因此当一个文件发生变化的时候，首先它本身的打包文件的名称会发生变化，其次，引入它的文件的打包文件也会发生变化。
                1. 不管是修改项目文件还是静态文件，它本身的打包文件的文件名会发生变化，其次引用该文件的对应打包文件的文件名也会发生变化，向上递归。
                总结：相关联的才改变

  4. library 与 libraryTarget:
      * 影响打包输出的bundle文件，即将输出结果挂载到指定的变量上。
      webpack 官方文档将 libraryTarget 主要分为三类：
      1. Expose a Variable: 暴露为一个变量
        libraryTarget: 'var', library：'' /  libraryTarget: 'var', library：'hhhhh'
          1. 没有赋值操作，所以其他文件没法引用该对象
          2. 有赋值操作，赋值给 library 定义的变量。
        libraryTarget: 'assign',
          1. 没有赋值操作，会报错，打包后相当于是  = (funciton()=>{})
          2. 有赋值操作， library: 'hhhhh', 打包后相当于是  hhhhh = (funciton()=>{}),挂在了在全局

      2. Expose Via Object Assignment: 通过对象属性暴露
        libraryTarget: 'this'
          1. 不加 library，则将所有属性 mixin 到 this 上，
          2. 加 library，则将对象挂载到 this[library]字段上
        libraryTarget: 'window'
          1. 逻辑同 this，只是将 this 替换成 window
        libraryTarget: 'global'
          1. 逻辑同 this，只是将 this 替换成 global（由于 webpack 默认 target 为"web"，所以默认即使设置 libraryTarget 为 global，最终的挂载对象仍然是 window。需要先将 target 改为"node"，才能使得挂载对象为 global)
        libraryTarget: 'commonjs'			
          1. 逻辑同 this，只是将 this 替换成 exports

      3. Module Definition Systems: 模块定义系统
        libraryTarget: 'commonjs2' 			
          1. 更符合模块定义系统
          2. 符合 commonjs 规范，加了 library 没有效果
        libraryTarget: 'amd' 			
          1. 符合 amd 规范
          2. 加了 library，会改为定义 library 模块
        libraryTarget: 'umd' 			
          1. 定义了兼容各种模块的执行函数
          2. 不加 library，则将所有属性 mixin 到导出模块上
          3. 加 library，则将对象挂载到导出模块的 library 字段上

  5. chunkFilename 指未被列在 entry 中，却又需要被打包出来的 chunk 文件的名称。一般来说，这个 chunk 文件指的就是要懒加载的代码。
    filename 指列在 entry 中，打包后输出的文件的名称。
    chunkFilename 指未列在 entry 中，却又需要被打包出来的文件的名称。
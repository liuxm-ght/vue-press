### 基础概念
  7. 模式 mode: webpack自带的代码压缩和优化插件使用。
  8. Resolve: 配置模块如果解析
  9. externals: 外部扩展，提供了「从输出的 bundle 中排除依赖」的方法。
  10. 打包ES6

#### 详细介绍
  7. 模式 mode：
      配置不同mode可以开启webpack自带的一些不同基本功能。
      * 当我们设置mode之后，我们可以在process .env .NODE_ENV获取到当前的环境
      1. 类型
          1. none
            * 不使用任何默认优化选项；
          2. development
            * 指的是开发环境，会默认开启一些有利于开发调试的选项，比如NamedModulesPlugin和NamedChunksPlugin，分别是给module和chunk命名的，而默认是一个数组，对应的chunkName也只是下标，不利于开发调试；
          3. production
            * 指的是生产环境，则会开启代码压缩和代码性能优化的插件，从而打包出来的文件也相对none和development小很多。
      2. 使用
        1. 配置文件上：
          mode：xxx
        2. 命令行中：

    ```ts
      // package.json
      "scripts": {
        "dev": "webpack --mode development",
        "build": "webpack --mode production"
      }
    ```

  8. Resolve: 配置模块如果解析
      Resolve.alias 设置别名，可快速查询到模块的位置
      * 设置为false将忽略指定模块
      * 设置为数组将查询指定模块组

    
  9. externals: 
      外部扩展，提供了「从输出的 bundle 中排除依赖」的方法。此功能通常对 library 开发人员来说是最有用的，然而也会有各种各样的应用程序用到它。
      1. 配置：
          1. 字符串：
          ```ts
              config文件：   externals:{ jquery: 'commonjs jQuery',} 
              index.js文件： import $ from 'jquery';
          ```
            * 意思是：当import引用遇到jquery时，应该排除jquery模块的引入，用全局变量jQuery来替代这个模块，这个模块遵循commonjs规范，那么这个全局变量jQuery哪里来？(在html中CDN引入了jQuery库)

          2. [string]：
          ```ts
              config文件：   externals:{ jquery: ['./math', 'jQuery'],} 
              index.js文件： import $ from 'jquery';
          ```
            该例子会编译成 require('./math').jQuery;该打包后的bundle只是引用了它父级math目录下的jQuery文件

          3. 对象：
          ```ts
              config文件：   externals:{ 
                              jquery: {
                                commonjs: 'jQuery',// 在commonjs环境下，通过 jQuery 访问
                                amd: 'jQuery',
                                root: '$', // 在script环境下，通过 $ 访问
                              },
                              subtract: {
                                root: ['math', 'subtract'],
                              },
                            } 
              index.js文件： import $ from 'jquery';
          ```

            这里 jquery 这个外部 library 可以在 AMD 和 CommonJS 模块系统中通过 jQuery 访问，但在全局变量形式下用 $ 访问。
            subtract 可以通过全局 math 对象下的属性 subtract 访问（例如 window ['math'] ['subtract']）。
          4. RegExp
            匹配给定正则表达式的每个依赖，都将从输出 bundle 中排除。
            <!-- externals: /^(jquery|\$)$/i, -->
            这个示例中，所有名为 jQuery 的依赖（忽略大小写），或者 $，都会被外部化。

  10. 打包ES6
      <!-- 详情见 Babel《打包ES6.md》 -->
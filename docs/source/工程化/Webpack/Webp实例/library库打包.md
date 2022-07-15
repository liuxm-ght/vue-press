### Library库
  1. 背景：
    开发一个第三方库，如何被别使用？同时可以实现多种引用方式？

  2. 引用方式：
      1. script 标签引入
          ```ts
            <script src="demo.js"></script>
            <script>demo();</script> 
          ```
          
      2. commonjs 方式引入
          ```ts
            const demo = require('demo');
            demo(); 
          ```

      3. AMD 方式引入
          ```ts 
            define(['demo'],function(demo){
              demo();
            }) 
          ```

      4. ESM 方式引入
          ```ts 
            import demo from 'demo';
            demo(); 
          ```

  3. 为何我们写的库可以直接被上面这样使用？

      因为wepback打包的库，在配置的时候指定了，这个库的引用方式：
      * 主要是 library libraryTarget 这两个配置配合使用：
      1. library 定义变量名称 
          1. 字符串
          ```ts
            library:'root'
          ```
          * 当时scirpt引用方式时，打包的库将挂在这个变量的default下，如果想直接挂在变量名下，可配合libraryExport:'default'使用，这样就直接挂在了变量名root下了。

          2. 对象:
          ```ts
            library: {
              root: "myDemo",
              amd: "my-demo",
              commonjs: "my-common-demo"
            }, 
          ```
          * 可以针对不同环境，输出不同模式的代码

      2. libraryTarget 定义模块暴露方式
          1. 暴露一个变量：
              1. libraryTarget:'var'
                  * 库的返回值将被赋值到，var声明的变量上去
                  ```ts
                    配合1:library 结果是： var root = _entry_return_ 
                  ```               

              2. libraryTarget:'assgin'
                  * 库的返回值将被赋值到，没被var声明的变量上去
                  ```ts
                    配合1:library 结果是： root = _entry_return_ ; 非全局变量下，局部的root
                  ```               

          2. 暴露一个对象
              1. libraryTarget: this
                  * 库的返回值将被赋值到，this 上去 
                  ```ts
                    配合1:library 结果是： this.root = _entry_return_ 
                  ```               

              2. libraryTarget: window
                  * 库的返回值将被赋值到，window 上去 
                  ```ts
                    配合1:library 结果是： window.root = _entry_return_ 
                  ```               

              3. libraryTarget: global
                  * 库的返回值将被赋值到，global 上去 (NodeJs)
                  ```ts
                    配合1:library 结果是： global.root = _entry_return_ 
                  ```               

              4. libraryTarget: commonjs
                  * 库的返回值将被赋值到，exports 上去 
                  ```ts
                    配合1:library 结果是： exports.root = _entry_return_ 
                  ```               
          
          3. 定义模块系统
              1. commonjs2

                  输出符合 commonjs 规范
                  * 如果同时配置了 library，那么 library 将失效

              2. AMD

                  输出符合 AMD 规范
                  * 如果不配置了 library，那么将是一个匿名模块，需要定义library的值

              3. UMD

                  输出符合 UMD 规范
                  * 不加 library，则将所有属性 mixin 到导出模块上
                  * 加 library，则将对象挂载到导出模块的 library 字段上
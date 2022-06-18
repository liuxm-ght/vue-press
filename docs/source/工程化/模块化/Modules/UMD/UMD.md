### UMD
  1. 概念：
      是一种思想，兼容commonjs、AMD、CMD。
      先判断是否支持Nodejs模块(exports是否存在)，如果存在就使用Nodehs模块。不支持的话，再判断是否支持AMD/CMD(判断define是否存在)。都不行就挂载在window全局对象上
  2. 使用：
  ```ts
    (function(root,factory){
      if(typeof define === 'function' && define.amd){ //是否支持AMD\CMD
        define([module1,module2],factory)
      }else
      if(typeof exports === 'object'){ //是否支持CJS
        module.exports = factory(require(module1),require(module2))
      }else{ //都不支持，挂window
        root.requester = factory(root.module1,root.module2)
      }
    }(window/this,function(module1,module2){
      var requester = {...}
      return requester
    }))
  ```

  3. 优点：
      1. 是一种思想，兼容commonjs、AMD、CMD。
          先判断是否支持Nodejs模块(exports是否存在)，如果存在就使用Nodehs模块。不支持的话，再判断是否支持AMD/CMD(判断define是否存在)。都不行就挂载在window全局对象上
      2. 与 CJS 或 AMD 不同，UMD 更像是一种配置多个模块系统的模式。这里可以找到更多的模式
      3. 当使用 Rollup/Webpack 之类的打包器时，UMD 通常用作备用模块
    应用：通用模块定义，在前端和后端都适用（“通用”因此得名）

  4. 总结： 
      使用：
      ```ts
        (function(root,factory){
          if(typeof define === 'function' && define.amd){ //是否支持AMD\CMD
            define([module1,module2],factory)
          }else
          if(typeof exports === 'object'){ //是否支持CJS
            module.exports = factory(require(module1),require(module2))
          }else{ //都不支持，挂window
            root.requester = factory(root.module1,root.module2)
          }
        }(window/this,function(module1,module2){
          var requester = {...}
          return requester
        }))
      ```
      优点：
        1. 是一种思想，兼容commonjs、AMD、CMD。
            先判断是否支持Nodejs模块(exports是否存在)，如果存在就使用Nodehs模块。不支持的话，再判断是否支持AMD/CMD(判断define是否存在)。都不行就挂载在window全局对象上
        2. 与 CJS 或 AMD 不同，UMD 更像是一种配置多个模块系统的模式。这里可以找到更多的模式
        3. 当使用 Rollup/Webpack 之类的打包器时，UMD 通常用作备用模块
      应用：通用模块定义，在前端和后端都适用（“通用”因此得名）
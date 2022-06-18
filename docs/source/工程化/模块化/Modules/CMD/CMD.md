### CMD
  1. 概述：
    * 为解决AMDJS只能异步加载的问题，CMD出现了，CommonJS与requireJS的结合体
    CMD推崇的是就近依赖，延迟加载

  2. 使用：
      1. 导出： define(function(require,exports,module){exports.xxx = any 或 module.exports = any})
      2. 引用： 同步：require()，异步：require.async([模块名],callback(模块暴露的内容){})
      
      /** CMD写法 **/
      ```ts
      define(function(require, exports, module) {
          var a = require('./a'); //在需要时申明
          a.doSomething();
          if (false) {
              var b = require('./b');
              b.doSomething();
          }
      });
      ```

      /** sea.js **/
      // 定义模块 math.js
      ```ts
      define(function(require, exports, module) {
          var $ = require('jquery.js');
          var add = function(a,b){
              return a+b;
          }
          exports.add = add;
      });
      // 加载模块
      seajs.use(['math.js'], function(math){
          var sum = math.add(1+2);
      });
      ```


  3. 优点：
      1. 异步加载，有缓存
      2. 依赖就近，延迟执行

  4. 缺点：
      1. 模块定义不如es6简洁
      2. 只能异步加载

  5.  应用：主要用于浏览器，seaJS

  6. 原理： 
      Reqiurejs 模块加载完毕后是立即执行， Seajs 在模块加载完毕后保存 factory 函数，在执行到 require 时再执行模块对应的 factory 函数返回模块的导出结果。

  7. 总结：
      * 为解决AMDJS只能异步加载的问题，CMD出现了，CommonJS与requireJS的结合体 
      1. 使用：
          引入库： 加载seaJS (如src="lib/sea.js")
          导出： define(function(require,exports,module){exports.xxx = any 或 module.exports = any})
          引用： 同步：require()，异步：require.async([模块名],callback(模块暴露的内容){})
      2. 优点：
          1. 异步加载，有缓存
          2. 依赖就近，延迟执行
      3. 缺点：
          1. 模块定义不如es6简洁
      4. 应用：主要用于浏览器，seaJS

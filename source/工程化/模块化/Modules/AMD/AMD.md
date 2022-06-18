### AMD 
  1. 概述：
      AMD是"Asynchronous Module Definition"的缩写，意思就是"异步模块定义"。

  2. 使用：
      1. 例子1 ：
      ```ts
          /** 网页中引入require.js及main.js **/
              < script src="js/require.js" data-main="js/main"></>
          /** main.js 入口文件/主模块 **/
              // 首先用config()指定各模块路径和引用名
              require.config({
                baseUrl: "js/lib",
                paths: {
                  "jquery": "jquery.min",  //实际路径为js/lib/jquery.min.js
                  "underscore": "underscore.min",
                }
              });
              // 执行基本操作
              require(["jquery","underscore"],function($,_){
                // some code here
              });
      ```
      2. 例子2：
      ```ts
          // 定义math.js模块
            define(function () {
              var basicNum = 0;
              var add = function (x, y) {
                  return x + y;
              };
              return {
                  add: add,
                  basicNum :basicNum
              };
            });
          // 定义一个依赖underscore.js的模块
            define(['underscore'],function(_){
              var classify = function(list){
                _.countBy(list,function(num){
                  return num > 30 ? 'old' : 'young';
                })
              };
              return {
                classify :classify
              };
            })

          // 引用模块，将模块放在[]内
            require(['jquery', 'math'],function($, math){
              var sum = math.add(10,20);
              $("#sum").html(sum);
            });
      ```

      
    




  3. 特点： 
      1. 异步加载，有缓存
      2. 依赖前置，提前执行
  
  4. 总结： 
      * 为解决CommonJS只能同步加载的问题，AMD出现了
      1. 实现：<!-- 具体看requireJS文件夹 -->
      2. 使用：
          引入库：加载requireJS(如src="lib/require.js")，同时设置主模块data-main="main.js"
          配置：主模块配置，require.config可配置公共路径、模块路径等
          导出：define(id?,[modules]?,callback(modules){ return {modules}})
          引用：require([modules],callback(modulesAliasName){ dosomething }) (require是异步引入这些模块)
      3. 优点：
          1. 异步加载，有缓存
          2. 依赖前置，提前执行
      4. 缺点：
          1. 没用到的依赖库提前执行了，浪费资源
      5. 应用：主要用于浏览器，requireJS、curlJS，

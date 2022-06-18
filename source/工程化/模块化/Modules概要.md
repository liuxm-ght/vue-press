### 概要
  1. 什么事模块？
      没有模块化之前，所有JS代码都写在一个文件里，文件大而且不好管理。为了解决这些问题，出现了模块化概念。
      1. 将一个复杂的程序依据一定的规则(规范)封装成几个块(文件), 并进行组合在一起
      2. 块的内部数据相对而言是私有的, 只是向外部暴露一些接口(方法)与外部其它模块通信  

  2. 模块化的优势
      1. 方便维护代码，更好的分离，按需加载
      2. 提高代码复用性
      3. 降低代码耦合度（降偶）
      4. 分治思想——模块化不仅仅只是复用，不管你将来是否要复用某段代码，你都有充分的理由将其分治为一个模块。（我们在开发中有时候经常会出现一个模块，实则只用到了一次，但还是抽离出来作为单个独立的模块，这就是分而治之的软件工程的思想，在前端模块化同样适用）
      <!-- 链接：https://juejin.cn/post/6844903792987602958 -->

  3. 模块化进程
        * 了解模块化进程的好处是，可以更深入理解为何需要现代化的模块化，同时可以了解各类型模块化的优劣。
      1. 全局Function阶段
          实现：定义全局函数，将不同功能封装成不同全局函数
          优点：可以分模块引入代码了，入门简单
          缺点：全局变量污染问题，容易引起命名冲突

      2. NameSpace阶段
          实现：封装成对象
          优点：解决了Function阶段的命名冲突问题
          缺点：不安全，模块内部数据容易被修改
        
      3. IIFE阶段
          实现：闭包，核心思想是闭包，函数自执行
          优点：
            数据私有化，外部只能通过暴露的方法操作，同时功能分块了，同时进阶后的IIFE模式还能引赖第三方模块
          缺点：
            依赖关系虽然明确但顺序要明确，模块间关系难维护，同样需要引入大量的script标签

        * 为了解决上面那些问题，即：
          1. 避免命名冲突
          2. 更好的分离，按需加载
          3. 高复用性
          4. 高维护性
        * 进入现代模式

      4. CommonJS
          实现：<!-- 具体看《CommonJS》篇 -->
            一个文件即一个Module实例，有require方法和exports对象，require获取文件内容拼成匿名函字符串，并转为可执行函数，并自执行，同时传入一些模块需要使用到的参数
          使用：
            导出：module.exports = any / exports.xxx = any  
            引用：require(path)
          优点：
            1. 同步加载，有缓存
            2. 是值得拷贝关系(浅拷贝)
          缺点：
          应用：主要是服务端模块化的规范，NodeJS用的也是这种，浏览器需要使用，需要使用browerify插件转译

        * Module Loader
        <!-- * 为解决CommonJS只能同步加载的问题，AMD出现了 -->
      5. AMD
          实现：<!-- 具体看《AMD》篇 -->
          使用：
            引入库：加载requireJS(如src="lib/require.js")，同时设置主模块data-main="main.js"
            配置：主模块配置，require.config可配置公共路径、模块路径等
            导出：define(id?,[modules]?,callback(modules){ return {modules}})
            引用：require([modules],callback(modulesAliasName){ dosomething }) (require是异步引入这些模块)
          优点：
            1. 异步加载，有缓存
            2. 依赖前置，提前执行
          缺点：
            1. 没用到的依赖库提前执行了，浪费资源
          应用：主要用于浏览器，requireJS、curlJS，

        <!-- * 为了解决AMD前置加载的问题，CMD出现了，CMD是另一种异步加载解决方案， -->
      6. CMD
          实现：<!-- 具体看《CMD》篇 -->
          使用：
            引入库： 加载seaJS (如src="lib/sea.js")
            导出： define(function(require,exports,module){exports.xxx = any 或 module.exports = any})
            引用： 同步：require()，异步：require.async([模块名],callback(模块暴露的内容){})
          优点：
            1. 异步加载，有缓存
            2. 依赖就近，延迟执行
          缺点：
            1. 模块定义不如es6简洁
          应用：主要用于浏览器，seaJS

        <!-- 为了解决CJS只能同步加载问，及AMD或CMD只能异步加载问题,UMD出现了，UMD是一种通用加载解决方案 -->
      7. UMD
          实现：<!-- 具体看《UMD》篇 -->
          使用：
            ```ts
            (function(root,factory){
              if(typeof define === 'function' && define.amd){ //是否支持AMD\CMD
                define([module1,module2],factory)
              }else
              if(typeof module === 'object' && typeof exports === 'object'){ //是否支持CJS
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
                1. 先判断是否支持Nodejs模块(exports是否存在)，如果存在就使用Nodehs模块。
                2. 不支持的话，再判断是否支持AMD/CMD(判断define是否存在)。
                3. 都不行就挂载在window全局对象上
            2. 与 CJS 或 AMD 不同，UMD 更像是一种配置多个模块系统的模式。这里可以找到更多的模式
            3. 当使用 Rollup/Webpack 之类的打包器时，UMD 通常用作备用模块
          应用：通用模块定义，在前端和后端都适用（“通用”因此得名）

        * ES Module
      8. ES6
          实现：<!-- 具体看《ES6》篇 -->
          使用：
            安装：
              babel：将es6代码转为es5代码(包含commonJS语法的代码)
              browerify：将commonjs语法转为浏览器可执行代码
            导出：export、export default
            引用：import xxx from xxx
          优点：
            1. 静态定义，动态引入(按需加载),没有缓存
            2. 是值得引用关系
            3. 可多种暴露方法：分别暴露、统一暴露、默认暴露
          应用：主要是用在浏览器，服务器端也使用。


#### 前端模块化 类别
  ##### 1. IIFE
  ##### 2. CommonJs
  ##### 3. AMD ----- 代表requireJs
  ##### 4. CMD ----- 代表seaJs
  ##### 5. ES6 
  <!-- 详情见 《Modules》系列 -->


#### 经典面试题
  1. Commonjs 和 ES6 Module的区别
    取自阿里巴巴淘系技术前端团队的回答：
      1. Commonjs是拷贝输出，ES6模块化是引用输出
      2. Commonjs是运行时加载，ES6模块化是编译时输出接口
      3. Commonjs是单个值导出，ES6模块化可以多个值导出
      4. Commonjs是动态语法可写在函数体中，ES6模块化静态语法只能写在顶层
      5. Commonjs的this是当前模块化，ES6模块化的this是undefined

  2. 为什么Commonjs不适用于浏览器
    eg:
      var math = require('math');
      math.add(2, 3);
    解答：
      1. 第二行math.add(2, 3)，在第一行require('math')之后运行，因此必须等math.js加载完成。也就是说，如果加载时间很长，整个应用就会停在那里等。
      2. 这对服务器端不是一个问题，因为所有的模块都存放在本地硬盘，可以同步加载完成，等待时间就是硬盘的读取时间。但是，对于浏览器，这却是一个大问题，因为模块都放在服务器端，等待时间取决于网速的快慢，可能要等很长时间，浏览器处于"假死"状态。
      3. 因此，浏览器端的模块，不能采用"同步加载"（synchronous），只能采用"异步加载"（asynchronous）。这就是AMD规范诞生的背景。

  3. CommonJS 模块输出的是一个值的拷贝，ES6 模块输出的是值的引用。
      1. CommonJS 模块输出的是值的拷贝，也就是说，一旦输出一个值，模块内部的变化就影响不到这个值。
      2. ES6 模块的运行机制与 CommonJS 不一样。JS 引擎对脚本静态分析的时候，遇到模块加载命令import，就会生成一个只读引用。等到脚本真正执行时，再根据这个只读引用，到被加载的那个模块里面去取值。换句话说，ES6 的import有点像 Unix 系统的“符号连接”，原始值变了，import加载的值也会跟着变。因此，ES6 模块是动态引用，并且不会缓存值，模块里面的变量绑定其所在的模块。


  4. CommonJS 模块是运行时加载，ES6 模块是编译时输出接口。
      1. 运行时加载: CommonJS 模块就是对象；即在输入时是先加载整个模块，生成一个对象，然后再从这个对象上面读取方法，这种加载称为“运行时加载”。
      2. 编译时加载: ES6 模块不是对象，而是通过 export 命令显式指定输出的代码，import时采用静态命令的形式。即在import时可以指定加载某个输出值，而不是加载整个模块，这种加载称为“编译时加载”。
      <!-- 链接：https://juejin.cn/post/6844903576309858318 -->

  5. ES Module的import 、import()解决了nodeJS和浏览器环境，静态加载和动态加载的问题，那么还需要编译或打包工具吗？
      答案是需要的。
      原因是:
        在浏览器中使用模块加载器存在很多弊端：
          1. AMD 的 requireJS编码方式不友好，加载前置导致的阻塞问题，
          2. CMD 的 SeaJS 规则一直变化导致升级出现各种问题等,
          3. CJS 的 虽然有异步加载问题，但使用很简单，引用库只需要几步:
                                                        1. 在 package.json 里面配置模块名和版本号
                                                        2. npm install 安装模块
                                                        3. 直接使用 require 引入
      但如何在浏览器中使用CommonJS？

      解决方案:
        预编译：用CommonJS的规范定义编写模块或引入依赖，然后用编译器将模块和依赖编译成一个js文件，我们叫这个文件为bundle.js
      
      实际应用：  
        * Browserify和webpack都是这种预编译的模块化方案，最终都是build生成一个bundle文件，在这个build的过程中进行依赖关系的解析。
        <!-- https://juejin.cn/post/6844904056847073293#heading-6 -->

  6. Browserify 与 Webpack 的简介：
      1. Browserify
        * Browserify 可以让你使用类似于 node 的 require() 的方式来组织浏览器端的 Javascript 代码，通过预编译让前端 Javascript 可以直接使用 Node NPM 安装的一些库, 也可以引入非 CommonJS 模块，但需要使用 transform（browserify.transform 配置转换插件）。
        * Browserify 的 require 与 Node.js 保持一致，不支持异步加载。

      2. Webpack 
        * Webpack结合了 CommonJS 和 AMD 的优缺点，开发时可按照 CommonJS 的编写方式，支持编译后按需加载和异步加载所有资源。
          Webpack 最出色的特性
            1. 一是它的模块解析粒度以及因此带来的强大打包能力，
            2. 二是它的可扩展性，相关转换工具（Babel、PostCSS、CSS Modules）可以变成插件快速接入，还能自定义 Loader。这些特性加在一起，无往而不利。
        * 而且它还支持 ES Module：
            import defaultExport from "module-name";
            import * as name from "module-name";
            import { export } from "module-name";
        <!-- Webpack相关的详情见《Webpack》系列 -->
      这便是构建工具带来的好处了，发挥空间远比传统浏览器 Loader 来得大，可以轻松加入像 Babel、Traceur 等 transpiler 支持。




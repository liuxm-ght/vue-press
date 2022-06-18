### Tree-Shaking
  1. 概述： 
      tree-shaking 简称摇树。它的作用是 能够在模块的层面上做到打包后的代码只包含被引用并被执行的模块，而不被引用或不被执行的模块被删除掉，以起到减包的效果。
      * Tree-Shaking 依赖于 ES6 import 和 export 静态分析能力，当模块是通过 static 方式引用，它会尽可能的删除只写不读的变量和函数。

  2. 使用：
      1. wabpack配置：  
        ```ts
          optimization: {
            usedExports: true,
          }, 
        ```
      2. package.json:
      ```ts
        <!-- 
          sideEffects:false,   // 对所有的文件都启用 tree_shaking
        -->
          * sideEffects : 不需要tree_shaking的文件或目录数组
            * false：对所有的文件都启用 tree_shaking
            * [a.js , b]:a文件 、 b目录不需要 tree_shaking
      ```

  3. mode：
      开发mode模式下：
        1. development：
          默认不 tree_shaking，就是配置了也无效tree_shaking，为了更好的定位错误
        2. production：
          默认开启了 sideEffects:false，所以不需要在package.json配置

  4. Tree-Shaking局限性：
      1. 只能是静态声明和引用的 ES6 模块，不能是动态引入和声明的。(即 require() 引入模块，不能被tree-shaking)
          在打包阶段对冗余代码 (uglify) 进行删除，就需要 webpack 需要在打包阶段确定模块文件的内部结构，而 ES 模块的引用和输出必须出现在文件结构的第一级 （'import' and 'export' may only appear at the top level），否则会报错。
          ```ts
            // webpack编译时会报错
            if (condition) {
              import module1 from './module1';
            } else {
              import module2 from './module2';
            } 
          ```
          * 而 CommonJS 模块是支持动态结构，它通过 require() 引入模块，所以是不能被 tree-shaking 进行处理的。
      2. 只能处理模块级别，不能处理函数级别的冗余；
          因为 webpack 的 tree-shaking 是基于模块间的依赖关系，所以并不能对模块内部自身的无用代码进行删除。
      3. 只能处理 JS 相关冗余代码，不能处理 CSS 冗余代码。
          目前 webpack 只对 JS 文件的依赖进行了处理，CSS 的冗余并没有给出很好的工具。可以借助 PureCss 来完成这个目的。


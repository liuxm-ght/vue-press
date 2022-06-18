### SourceMap
  1. 概述：
    * SourceMap 是一个映射关系。能够帮我们更好的定位源码的错误。
    <!-- 
    例如：
      SourceMap 是打包文件和源码的一个映射关系，它知道 dist 目录下 main.js 文件的 97 行 实际上对应的 src 目录下的 index.js 文件的第一行，这样我们就能够快速定位问题，并进行修复了。
      运行 npm run bundle，我们会发现在 dist 目录下面，除了 index.html 和 main.js ，还额外的生成了 一个 main.js.map 文件。 
    -->

  2. 使用：
    开发工具 devtool (配置source Map)：
      1. 概述
          此选项控制是否生成，以及如何生成 source map。

      2. 比较常用的选项。
          <!-- devtool：'source-map' -->
          none：不会生成sourceMap；
          eval：每个模块都会使用eval()执行，不建议生成环境中使用；
          cheap-source-map：生成sourceMap，但是没有列映射，则只会提醒是在代码的第几行，不会提示到第几列；
          inline-source-map：会生成sourceMap，但不会生成map文件，而是将sourceMap放在打包文件中。
      
      3. 按环境分类
          1. 生产环境：
            none: 打包后的代码 +++ +++ 
            source-map：原始源代码 -- --
            hidden-source-map：原始源代码 -- -- 
            nosources-source-map：无源代码内容 -- -- 
            * cheap-module-source-map：原始源代码（仅限行） o -
            <!-- 一般关掉source-map,没必要开启 -->
          
          2. 非生产环境：
            eval： 生成后的代码 +++ +++ 
            cheap-source-map：转换过的代码（仅限行） + o
            inline-source-map：原始源代码 -- -- 
            * cheap-module-eval-source-map： 原始源代码（仅限行） o ++

      4. 各配置字段说明：
          1. inline：  
            <!-- 打包进输出文件，没有.map文件 -->
            * 有这个的配置，直接会将 .map 文件直接打包到对应的 js 中去，从而加快相应的速度
            * 使用这个我们会发现，打包出来的文件没有 .map 文件了，而是以 base64 的形式放入了打包的文件中了。
          2. cheap：
            <!-- 定位行，同时不定位第三方代码 -->
            * 有这个的配置，意思是 map 文件只会帮你定为到具体的 某一行，并不会把代码定位到 具体的 某一行 某一列，从而加快速度；
            * cheap 还有一个作用，就是这个选项只使针对业务代码，也就是说只能定位到业务代码里面的错误，并不能定位到我们引用的第三方文件（比如说 loader，第三方模块）的错误。
          3. module：
            <!-- 定位第三方代码 -->
            * 有这个的配置，意思是 它不仅会帮我们定位 自己的业务代码中的错误，还会同时帮我们定位第三方模块的错误。
          4. eval：
            <!-- 用eval包裹代码，//@sourceURL备注代码文件，速度最快 -->
            * 有这个的配置，使用eval包裹模块代码，并且存在 //@sourceURL，这个是打包速度最快，性能最好的的一种方式，但是有的时候，对于代码比较复杂的情况，它提示出来的错误可能不够全面。


  3. 原理： 
    
### ES6 Module
  1. 概述:
      * ES6 在语言标准的层面上，实现了模块功能，而且实现得相当简单，旨在成为浏览器和服务器通用的模块解决方案。其模块功能主要由两个命令构成：export和import。
          * export命令用于规定模块的对外接口，
          * import命令用于输入其他模块提供的功能。

  2. 使用: 
  ```ts
      /** 定义模块 math.js **/
      var basicNum = 0;
      var add = function (a, b) {
          return a + b;
      };
      export { basicNum, add };

      /** 引用模块 **/
      import { basicNum, add } from './math';
      function test(ele) {
          ele.textContent = add(99 + basicNum);
      }
  ```

  3. 运行机制：
      ::: warning ES6 模块的运行机制与 CommonJS 不一样。
      1. import 是静态命令的方式，js引擎对脚本静态分析时，遇到模块加载命令import，会生成一个只读引用。
      2. 等到脚本真正执行时，再根据这个只读引用，到被记载的那么模块中去取值。
      3. 模块内部引用的变化会反应在外部。
      4. 换句话说，ES6 的import有点像 Unix 系统的“符号连接”，原始值变了，import加载的值也会跟着变。 
      ::: 

      * 因此，ES6 模块是动态引用，并且不会缓存值，模块里面的变量绑定其所在的模块。
      * 在import时可以指定加载某个输出值，而不是加载整个模块，这种加载称为编译时加载。在编译时就引入模块代码，而不是在代码运行时加载，所以无法实现条件加载。也正因为这个，使得静态分析成为可能。
      [链接：](https://juejin.cn/post/6844903576309858318)
      
      ::: tip 构建一张模块依赖关系图
      1. 当我们在使用模块开发时，其实就是在构建一张模块依赖关系图，当模块加载时，就会从入口文件开始，最终生成完整的模块实例图。
          ESM的执行可以分为三个步骤：
          1. 构建： 确定从哪里下载该模块文件、下载并将所有的文件解析为模块记录
          2. 实例化： 将模块记录转换为一个模块实例，为所有的模块分配内存空间，依照导出、导入语句把模块指向对应的内存地址。
          3. 运行： 运行代码，将内存空间填充
      * 从上面实例化的过程可以看出，ESM使用实时绑定的模式，导出和导入的模块都指向相同的内存地址，也就是值引用。而CJS采用的是值拷贝，即所有导出值都是拷贝值。

      [链接：](https://juejin.cn/post/7064853960636989454)
      ::: 

  4. 特征：
      1. import 是只读属性，不能赋值。相当于const
      2. export/import 提升，import/export必须位于模块的顶级，不可以位于作用域内，其次对于模块内的import/export都会提升到模块的顶部。
      3. 静态解析(编译时加载)
      4. 动态引用(按需加载),没有缓存
      5. 可多种暴露方法：分别暴露、统一暴露、默认暴露

      [链接：](https://juejin.cn/post/6977604469794013197)

  4. ES Module 与 CommonJS 及 Loaders 等方案的区别主要在以下方面：
      1. 声明式而非命令式，或者说 import 是声明语句 Declaration 而非表达式 Statement，在 ES Module 中无法使用 import 声明带变量的依赖、或者动态引入依赖：
          1. CommonJS 模块输出的是一个值的拷贝，ES6 模块输出的是值的引用。
          2. import 是预先解析、预先加载的，不像 RequireJS 等是执行到点了再发一个请求

      1. 静态 import 能确保被编译成变量引用，
          * 这些引用在当前执行环境运行时能被解析器（通过 JIT 编译 polymorphic inline cache）优化，执行更有效率
      2. 静态 export 能让变量检测更准确，
          * 在 JSHint、ESLint 等代码检测工具中，变量是否定义是个非常受欢迎的功能，而静态 export 能让这一检测更具准确性
      3. 更完备的循环依赖处理，
          * 在 Node.js 等已有的 CommonJS 实现中，循环依赖是通过传递未完成的 exports 对象解决的，对于直接引用 exports.* foo 或者父模块覆盖 module.exports 的情况，传统方式无从解决，而因为 ES Module 传递的是引用，便不会有这些问题

      [链接：](https://juejin.cn/post/6844904056847073293)

  5. 不同环境中使用ES Module
      1. 浏览器：
          ::: warning 只有 module 模式执行的脚本，才可以声明 import 
          由于 ES Module 的执行环境和普通脚本不同，浏览器选择增加 < script type="module"> ，
          只有 < script type="module"> 中的脚本（和 import 进来的脚本）才是 module 模式。
          :::
          * 也只有 module 模式执行的脚本，才可以声明 import 
          ```ts
          eg：下面代码会报错
            <script>
              import foo from "./foo.js"
            </>
            <script type="javascript">
              import bar from "./bar.js"
            </script> 

          eg：下面代码可执行
            // 在浏览器中，import 语句只能在声明了 type="module" 的 script 的标签中使用。
            <script type="module" src="./app.js"></script>
            // 在 script 标签中使用 nomodule 属性，可以确保向后兼容。
            <script nomodule src="./app.bundle.js"></script> 
          ```

      2. NodeJs：
          * 首先纠结的是如何支持 module 执行模式，是自动检测，还是 'use module' ，还是在 package.json 里增加 module 属性作为专门的入口，还是干脆增加一个新的扩展名？

          ::: warning 区别不同模式的模块
          * 最终 Node.js 选择增加新的扩展名 .mjs ：
              * 在 .mjs 中可以自如使用 import 和 export
              * 在 .mjs 中不可以使用 require
              * 在 .js 中只能使用 require
              
          * 也就是两套模块系统完全独立。
          ::: 

          * 依赖查询方式也改变了：  
            原本 require.extensions 是：
            ```ts
            { 
              '.js': [Function],
              '.json': [Function],
              '.node': [Function] 
            }
            ```
            如今（需要开启 --experimental-modules 选项）则是：
            ```ts
              { 
                '.js': [Function],
                '.json': [Function],
                '.node': [Function],
                '.mjs': [Function] 
              } 
            ```
            
            * 但两套独立的模块系统也导致第二个纠结的方面，模块系统彼此之间如何互通？对浏览器来说这不是问题，但对 Node.js 来说，npm 中海量的 CommonJS 模块是它不得不考虑的。
                * 最终确定的方案倒也简单：
                * 在 .mjs 里，开发者可以 import CommonJS（虽然只能 import default）：
                ```ts 
                import 'fs' from 'fs'
                import { readFile } from 'fs'
                import foo from './foo'
                // etc. 
                ```
                * 在 .js 里，开发者自然不能 import ES Module，但他们可以 import() ：
                ```ts 
                import('./foo').then(foo => {
                  // use foo
                })
                async function() {
                  const bar = await import('./bar')
                  // use bar
                }() 
                ```
            ::: warning 注意
            * 和浏览器以引入方式判断运行模式不同，Node.js 中脚本的运行模式是和扩展名绑定的。也就是说，依赖的查找方式会有所不同：
                1. 在 .js 中 require('./foo') 找的是 ./foo.js 或者 ./foo/index.js
                2. 在 .mjs 中 import './bar' 找的是 ./bar.mjs 或者 ./bar/index.mjs
            * 善用这些特性，我们现在就可以将已有的 npm 模块升级成 ES Module，并且仍然支持 CommonJS 方式。
            :::

  6. Dynamic Import (动态import)
      1. 静态import(编译时加载)：是初始化加载依赖项的最优选择，使用静态 import 更容易从代码静态分析工具和 tree shaking 中受益。
      2. 动态import()(运行时加载)：
          * 当希望按照一定的条件或者按需加载模块的时候，需要动态引入依赖
          ```ts 
          if (process. env .NODE_ENV !== 'production') {
            import('./cjs/react.development.js')
          } else {
            import('./cjs/react.production.js')
          }
          if (process. env .BROWSER) {
            import('./browser.js')
          } 
          ```
          ::: warning 除了可以用来处理动态依赖
          * 在浏览器中，HTML 中的 script 标签不需要声明 type="module" ：
          ```ts 
          <script>
            import('./foo.js').then(foo => {
              // use foo
            })
          </script> 
          ```

          * 在 Node.js 中（.js 文件）还可以使用 import() 引入使用 import 的 ES Module ：
          ```ts 
          import('./foo.mjs').then(foo => {
            // use foo
          }) 
          ```
          :::

      使用 ES Module 编写浏览器、Node.js 通用的 JavaScript 模块化代码已经完全可行，我们还需要编译或者打包工具吗？
      [答](../../Modules概要.md#%E6%A6%82%E8%A6%81)  <!-- 详情见 《Modules概要.md》篇， #### 经典面试题 第5点。 -->

  7. 总结:
      1. 使用：
          * 安装：
              * babel：将es6代码转为es5代码(包含commonJS语法的代码)
              * browerify：将commonjs语法转为浏览器可执行代码
          * 导出：export、export default
          * 引用：import xxx from xxx

      2. 优点：
          1. 静态解析(编译时加载)
          2. 动态引入(按需加载),没有缓存
          3. 是值得引用关系
          4. 可多种暴露方法：分别暴露、统一暴露、默认暴露

      3. 应用：主要是用在浏览器，服务器端也使用。

      ::: warning 注意
      * CommonJS 加载的是一个对象（即module.exports属性），该对象只有在脚本运行完才会生成。
      * ES6 模块不是对象，它的对外接口只是一种静态定义，在代码静态解析阶段就会生成。
      :::
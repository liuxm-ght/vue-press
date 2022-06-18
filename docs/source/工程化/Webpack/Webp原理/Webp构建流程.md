### 简要说明Webpack构建主流程
  * webpack 的构建是通过 Compiler 控制构建流程，Compilation 解析，ModuleFactory 生成模块，Parser 解析源码，Template 渲染代码，最后输出打包后的文件。

  1. 最简版:
      1. 初始化：获取与合并配置参数，实例化Compiler和Compilation，加载插件，启动构建
      2. 编译：从Entry开始，针对每个Module串行调用对于的loader去翻译文件内容，再找到Module所依赖的Module，递归地进行编译处理,将编译后的文件合成chunks
      3. 输出：将chunks转为文件，输出到文件系统中

  2. 进阶版：
      1. 初始化参数：从配置文件和shell中读取与合并参数，得出最终参数
      2. 开始编译：从上面得到的配置参数初始化compiler对象，加载所有配置的插件，执行compiler对象的run方法开始执行编译
      3. 确定入口：根据配置参数中的entry确定所有入口文件
      4. 编译模块：从入口文件出发，调用所有配置的loader对模块进行编译，编译得到模块的AST语法树，并解析它，找出该模块的依赖模块，递归本步骤，直到所有入口文件的模块都经过了本步骤的处理
      5. 模块编译完成：经过4使用loader翻译所有模块后，得到了每个模块编译后的最终结果和它们的依赖关系
      6. 输出资源：根据入口和模块间的依赖关系，组装成一个个包含多个模块chunk，再把每个chunk转换成一个文件添加到输出列表，这步是最后可以修改输出内容的地方
      7. 输出完成：在确认好输出内容后，根据输出配置的路径和文件名，把文件内容写入到文件系统
      8. 至此，完成了webpack的构建流程，在整个构建过程中，webpack会在特定的时期发布特定的事件，插件可以监听到感兴趣的事件后做一些操作，并且插件可以调用webpack的API来改变webpack的运行结果。 

  3. 详细版本：
      1. 准备阶段
          1. webpack入口，无论是webpack命令行启动，还是npm run 启动，npm 会在命令行中进入 node_modules/bin 目录下去查找是否存在 webpack.sh 或者 webpack.cmd 文件，如果存在，就执行，不存在，就抛出错误。
              <!-- webpack项目的package.json 文件中设置了 bin 字段之后 ，可执行文件 会被链接到当前项目的 ./node_modules/.bin 中，在本项目中，就可以很方便地利用 npm 执行脚本，更多可参考 npm的package.json字段含义 (opens new window)。 -->
              <!-- 
                在函数中引入 webpack，那么入口将会是lib/webpack.js。而如果在 shell 中执行，那么将会走到 ./bin/webpack.js。
                其实 webpack 实际的路口文件是 node_modules/webpack/bin/webpack.js。 
              -->
              * 入口文件小结
              在执行 ./bin/webpack.js 文件之后，webpack 最终会找到 webpack-cli（webpack-command）这个 npm 包，并且执行 CLI。
                <!-- 
                  webpack-cli：webpack4.0 之后将 webpack-cli 分离了出来，具有 webpack 所有的特性和功能。
                  webpack-command：轻量级的 webpack-cli 
                -->
              * 总结：
                webpack.js确定webpack-cli模式，执行webpack-cli项目

          2. 执行webpack-cli文件，处理配置参数
              webpack-cli，最终运行的就是其目录下的 ./bin/cli.js
              1. 作用
                webpack-cli 对配置文件（webpack.config.js）和命令行参数进行转换最终生成 webpack 构建所需要的配置选项参数，最终会根据配置参数实例化 webpack 对象，然后执行构建流程。
              2. 流程分析
                <!-- 
                  首先在 webpack-cli 中引入了 yargs 工具，用于对命令行进行定制。
                  分析输入之后的命令行参数，对各个参数进行转换，组成编译配置项，最后通过引入 webpack 结合处理好的配置，进行编译和构建。 
                -->
              * 总结：
                webpack-cli最终确认生成webpack需要的配置选项参数entryOptions，同时确定outputOptions输出配置项，引入webpack，执行webpack(entryOptions)，生成实例化compiler，执行compiler.run，触发webpack的编译流程

          3. 执行webpack()函数，生成compiler实例
              1. 实例化一个 compiler
                ```ts
                compiler = createCompiler(webpackOptions) 或 compiler = new Compiler(options.context); 
                ```
                Compiler是一个class类，实例化是定义了hooks，hooks上挂载了webpack各生命流程中需要用到的同步或异步hook钩子(钩子的种类见《Tapable》篇)
              
              2. 注册用户配置的plugins
                ```ts
                  if (options.plugins && Array.isArray(options.plugins)) {
                    plugin.call(compiler, compiler);
                    plugin.apply(compiler); 
                ```
                * 用户自定义的plugin，必须有一个apply私有方法，供webpack注册用户plugins时使用，往apply传入实例化的compiler，自定义plugin就可以拿到各种hooks，往上面tap/tapAsync/tapPromis注册自定义的事件，待compiler.run()时，触发对应钩子事件

              3. 注册 webpack 内置插件
                * webpack 内置了很多插件，例如mode的不同模式会使用到很多不同的插件

          4. 执行compiler.run()函数，确认入口，开始编译

              1. 执行this.compile(onCompiled)
                compile 是真正进行编译的过程，最终会把所有原始资源编译为目标资源。实例化了一个 compilation，并将 compilation 传给 make 钩子上的方法，注册在这些钩子上的方法会调用 compilation 上的 addEntry，执行构建。
                <!-- 
                  compilation 是后续构建流程中最核心最重要的对象，它包含了一次构建过程中所有的数据，一次构建过程对应一个 Compilation 实例。当 Compilation 实例创建完成之后，Webpack 的准备阶段已经完成，下一步将开始编译阶段。 
                -->

      2. 编译阶段
          5. 开始编译

              1. 从 Compiler 的 make 钩子触发开始，此时内置插件 SingleEntryPlugin、MultiEntryPlugin、DynamicEntryPlugin (根据不同类型 entry)的监听器会开始执行。监听器都会调用 Compilation 实例的 compilation.addEntry() 方法，该方法将会触发第一批 module 的解析，这些 module 就是 entry 中配置的模块。

              2. 执行 moduleFactory.create 开始创建 module
                1. resolve 流程用于获得各 loader 和模块的绝对路径等信息。
                2. 在 resolver 里，先通过 enhanced-resolve 获取 resolver，提供 resolve 方法。
                3. 解析 inline loader 和 resource 和项目配置的 loader，然后根据配置对其进行合并，排序。
                4. 调用 getParser 和 getGenerator 得到 module 对应的 parser 和 generator，用于后面的 ast 解析及模板生成。
                5. 最后输出一个组合对象 data，该对象为创建 module 提供各种必备的环境条件。

              3. run loader将源码转为字符串或buffer
                1. 实例化 NormalModule 得到初始化的 module（方法链：moduleFactory.create 回调里->buildModule->module.   build->module.doBuild->runLoaders），然后在 build 过程中先 run loader 处理源码，得到一个编译后的字符串或 buffer。
                2. 在 run loader 的过程中，先正序执行了每个 loader 的 pitch ，然后倒序执行了每个 loader 的 normal。

              4. 调用 parser 将前面 runloaders 的编译结果，通过 acorn 转换为 ast
                1. 遍历 ast 根据导入导出及异步的情况触发相关钩子插件收集依赖，这些依赖用于解析递归依赖和模板操作；
                2. 根据每个 module 的相关信息生成各自唯一的 buildHash；
                3. 根据 module 间的相互依赖关系，递归解析所有依赖 module，最终返回一个入口 module，module 所依赖的其他同步异步  module 将分别保存在 dependencies 与 blocks 里。module 构建完成后，回到文件 Compiler.js 的 compile 的 make 钩子的回调里。

      3. 输出阶段
          6. 生成chunk

              1. 在 finish 回调中执行的 seal 方法里，包含了海量钩子用于我们侵入 webpack 的封包阶段；
              2. 在遍历入口文件实例化生成 chunk 时，同时实例化了 Entrypoint 等，并建立了入口 module 和 chunk，Entrypoint 之间的联系；
              3. 通过 buildChunkGraph 的三个阶段，让所有的 module、chunk、chunkGroup 之间都建立了联系，形成了 chunk Graph。
              4. 最后触发钩子 afterChunks 标志这 chunk 生成结束。
      
      <!-- 
      4. 资源构建
        通过 this.emitFile 可生成 module 资源，如果有则直接调用 this.emitAsset 生成资源；
        生成 chunk 资源时，先根据是否含有 runtime 得到不同的 template，包括 chunkTemplate 和 mainTemplate;
        通过不同的 template 得到不同的 manifest 和 pathAndInfo，然后调用不同的 render 渲染代码；
        最后建立文件名与资源之间的映射，最终一起挂载到 compilation.assets 即目标资源。 
      -->

      5. 写入文件
          1. 创建目标文件夹及文件并将资源写入；
          2. 写入的时候，会循环处理 source 中的 ReplaceSource 实例中的 replacements，将其替换为真实字符串；
          设置 stats 并打印构建信息。




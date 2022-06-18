### 手写一个Webpack
  * 简单了解一下webpack的整个打包流程：
    1. 读取webpack的配置参数
    2. 启动webpack，创建complier对象并开始解析项目
    3. 解析入口文件，并找出其依赖模块，递归这些模块，形成依赖关系树
    4. 对不同类型的模块使用不同的loader进行解析，转为javascript文件
    5. 整个过程webpack会通过发布订阅模式，向外抛出一些hooks，而webpack的插件即可以通过监听这些
        关键的事件节点，执行插件任务进而达到关于输出结果的目的
        <!-- 参考文章：https://mp.weixin.qq.com/s/2rUjUM6Zfu1I7cjRUDschg -->


  * 实现流程：
    此项目为实现一个mini-webpack项目
    <!-- 代码在webpack目录mini-weppack中 -->
    1. 使用：
      npm run webpack 
    2. 打包：
      测试项目为：test-webpack
      配置文件：webpack.config.js
      结果：dist/index.js

    3. 其他地方：
      如果想直接使用 mini-webpack 启动打包程序，需要如下处理：
        npm link 配合bin文件，package.json 的bin配置，将项目映射到系统node的bin中
        source ～/.bash_profile 刷新系统环境
        使用：mini-webpack 

    4. 实现：
      mini-webpack 手写一个简版webpack
      1. 使用
        new Webpack(options).run() 
          * options是webpack的配置文件,即通常的webpack.config.js
          * run是webpack的启动函数
      2. 构建Webpack
        1. Webpack是一个类/构造函数 class Webpack
        2. 私有属性包括 entry output ...
        3. run 启动函数 执行了 
          1. 解析模块
            1. parseModule 解析模块目的
              1. getModuleInfo获取项目中所有的模块信息，存储在全局depsGraph中，depsGraph = { moduleId ： moduleInfo} ,moduleInfo包括有：
                1. deps : 当前模块的引用关系 deps = { refpath : abspath }，在模块内部require refpath时，会从deps找到abspath，webpack会去depsGraph找abspath对于的模块code
                  读取文件，利用babel提供的parser.parse来将文件内容转化为AST树，
                  使用@babel/traverse 来遍历AST，获取当前模块的所有import语法对应的引用路径refpath
                  存储在deps中，key为引用路径refpath，value为相对于根目录的abspath路径（其实就是模块的moduleId），方便后面在depsGraph中查找
                2. code : 当前模块的es5代码
                  利用babel的transformFromAst将AST转为含commonjs语法的es5代码
                3. files : 当前模块id
                  moduleId，就是当前模块相对于根目录的路径
            2. getDeps遍历父级模块中的deps，即获取父级模块下所有import的模块的信息，存储在temp中
                先去重，避免同一个模块多次解析
                获取父级模块的child模块信息 const child = this.getModuleInfo(deps[key])，存储在temp中
                遍历child模块，获取child模块下的child的信息，同样存储在temp中
            3. 将temp转为对象形式depsGraph， depsGraph = { moduleId ： moduleInfo}
          2. bundle 打包输出	
            1. webpack打包后会生成一个文件，这个文件的代码是可执行的js代码	
            2. webpack最后生成的可执行代码是封闭的，所有是个匿名自执行函数，通过参数来传入模块信息depsGraph，(function(__webpack_modules__){...})(depsGraph)
            3. 在匿名自执行函数内部，主要是执行__webpack_require__(moduleId)来获取对应模块并执行模块内容
            4. __webpack_require__(moduleId)主要执行了一个匿名自执行函数，里面eval(code)，执行了模块代码，同样使用匿名自执行函数，是为了封闭代码，防止变量全局污染，需要传入require、exports及code代码去执行，requrie是因为code中可能还引用了其他模块，exports是因为code中可能导出了东西，但code中未定义exports，是外部定义传入的。
            5. 被引用的模块中有一个require来引用其他模块，其实这个require调用的就是__webpack_require__，被定义在父级模块里，之所以是让webpack的require，是因为要找到对应模块的code，也就是被缓存起来了的depsGraph里的code，否则呢？？？可能是使用commonjs的require，后面去验证下！！！
            6. 被引用的模块中有一个exports来导出结果，其实这个exports被定义在父级模块里，之所以定义在父级里，是因为执行child的code后，child里exports的内容并不能对外输出，因为child是封闭的，所以需求父级传入exports，挂在父级的exports里，父级才能拿到。

    5. 总结：
        webpack根据配置文件，打包输出一个bundle文件，bundle内是匿名可自执行的函数，传入参数为模块映射表depsGraph
        这个映射表是webpack在解析文件过程生成的，具体流程是，读取入口文件，解析入口文件，转为AST，确认并记录其import的引用关系表deps，同时保存入口文件es5代码code，最后将解析返回的入口文件相关信息存入映射表depsGraph，至此第一步完成，接着是递归遍历deps确实整个项目的引用关系，获取完整的映射表depsGraph
        有了映射表depsGraph后，就可以打包输出bundle文件，执行这个bundle文件主要是执行映射表depsGraph中的各个code，
        所以bundle文件是匿名可自执行的函数，并且可以执行code，通过eval，同时code已经是es5代码，所以需要提供一个require方法供code（如果有引用别的模块）调用，这个require就是执行当前模块下deps里的code，即递归调用了


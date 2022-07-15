## mini webpack 代码

::: details
```ts
const fs = require('fs')
const path = require('path')
const parser = require('@babel/parser')
const traverse = require('@babel/traverse').default
const babel = require('@babel/core')
module.exports = class Webpack {
   /**
  *  构造函数，获取webpack配置
  *  @param {*} options
  */
  constructor(options){
    // console.log(options,'webpack.config.js 内容');
    const {entry, output} = options;
    this.entry = options.refPath ? path.resolve(options.refPath,entry) : entry;  // 入口文件
    this.output = output;  // 导出配置
  }
  /**
  *  webpack运行函数
  */
  run() {
    console.log('开始执行Webpack!')
    //解析入口文件
    this.depsGraph = this.parseModule(this.entry)

    //打包输出
    this.bundle()
  }

  /*
  * 解析入口文件，分析入口文件信息，找到import引用相关的转为commonjs语法，剩下的转为字符串，用eval去执行，用匿名函数包起来
  */
  parseModule(files){
    //分析模块信息
    /*
      做了几件事
        1.将当前模块转为AST，获取当前模块引用映射表
        2.利用AST将ES6语法转为ES5
    */
    const entry = this.getModuleInfo(files)

    /*
      保存所有模块的信息
        1.files 模块的唯一标识id
        2.code 模块的含commonjs的ES5代码
        3.deps 模块的引用映射表
    */
    const temp = [entry]

    //递归遍历,获取引入模块代码 
    //最终得到的temp将存有所以模块的信息，包括他们之间的引用关系
    this.getDeps(temp,entry)

    const depsGraph = {}
    temp.forEach( m => {
      depsGraph[m.files] = {
        deps: m.deps,
        code: m.code
      }
    });

    return depsGraph
  }

  getModuleInfo(files){
    //读取文件
    const body = fs.readFileSync(files,'utf8')
    // console.log(body,'入口文件内容');

    //转为AST
    //babel的parse插件，通过它来将JavaScript转成AST。yarn add @babel/parser -D 
    const ast = parser.parse(body,{
      sourceType: 'module' // 表示我们解析的是ES模块
    })
    // console.log(ast,'ast 语法树');

    //遍历AST语法数
    //需要使用@babel/traverse来遍历AST，从而来识别该文件有没有引入其他模块，有的话就将其记录下来 yarn add @babel/traverse -D
    //traverse接受两个参数，第一个是ast语法树，第二个是一个对象，在对象中我们可以设置观察者函数，并且可以针对语法树中的特定节点类型。
    //比如我们这次只需要找到引入模块的语句，对应的节点类型为ImportDeclaration，我们就可以设置对应的ImportDeclaration函数，并在参数值获取到节点信息。
    
    //依赖收集，创建映射表，用于记录 引用路径 与 相对项目根目录的文件路径 的关系，引用路径为key，将文件相对路径为value，
    //deps = { 当前模块中的引用路径 : 相对项目根目录的文件路径 }
    const deps = {}
    traverse(ast,{
      //visitor函数 找到import 语法并处理，
      ImportDeclaration({node}){
        // console.log(node,'找到了import 语法字符串');
        //入口文件路径
        const dirname = path.dirname(files) //文件目录的绝对路径
        //引入文件路径
        const absPath = path.join(dirname,node.source.value)
        deps[node.source.value] = absPath
        // console.log(deps,'deps');
      }
    })

    //收集完依赖后，我们需要将AST转回JavaScript代码，并且将其转成ES5语法。这时候我们就会用到@babel/core和@babel/preset-env。
    //将ES6 转为 ES5 -> 含commonjs的代码
    const {code} = babel.transformFromAst(ast,null,{
      presets:['@babel/preset-env'],
    })
    // console.log(code ,'code');
    return {
      files,
      deps,
      code
    }
  }

  getDeps(temp,{deps}){
    Object.keys(deps).forEach(key => {
      //去重
      if (!temp.some(m => m.files === deps[key])) {
        // 获取依赖模块代码
        const child = this.getModuleInfo(deps[key])
        temp.push(child)
        // 递归遍历
        this.getDeps(temp,child)
      }
    });
  }

  bundle(){
    const content = `(function (__webpack_modules__) {
      function __webpack_require__(moduleId) {
        function require(relPath) {
          return __webpack_require__(__webpack_modules__[moduleId].deps[relPath])
        }
        var exports = {}; 
        (function (require,exports,code) {
          eval(code)
        })(require,exports,__webpack_modules__[moduleId].code)
        return exports
      }
      __webpack_require__('${this.entry}')
    })(${ JSON.stringify(this.depsGraph)})`;
    //var exports = {};  注意这个分号，这个分号可能导致打包输出后的文件不能执行，报{}is not a function 的错误
    //先把简单的部分完成了，就是生成打包文件
    !fs.existsSync(this.output.path) && fs.mkdirSync(this.output.path)
    const filePath = path.join(this.output.path,this.output.filename)
    fs.writeFileSync(filePath,content)
  }
}
```
:::
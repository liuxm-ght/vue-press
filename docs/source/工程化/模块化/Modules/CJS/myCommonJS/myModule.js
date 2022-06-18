const path = require('path')
const fs = require('fs')
const vm = require('vm')
const { DH_UNABLE_TO_CHECK_GENERATOR } = require('constants')
//Module 
function MyModule(id = '') { //一个文件实际上是一个Module模块
  this.id = id //标示模块，缓存中的key
  this.filename = null // 文件名称
  this.path = path.dirname(id)//文件夹
  this.loaded = false //模块实例化状态
  this.exports = {} //导出模块对象
}

MyModule._cache = Object.create(null) //缓存队列      prototype 为null 的对象，体量最小的对象
MyModule._extensions = Object.create(null) //不同后缀文件处理方法队列

//Require
MyModule.prototype.require = function(id) {
  console.log(id,'如果是两次，说明第二次走的是自定义的require');
  return MyModule._load(id)
}

MyModule._load = function(id) {
  //一：缓存校验
  const filename = MyModule._resolveFilename(id) //获取绝对路径，即也是缓存id
  const cacheModule = MyModule._cache[filename]
    //1.存在缓存
    if(cacheModule){
      return cacheModule.exports
    }

    //2.不存在缓存
    const newModule = new MyModule(filename) //实例化一个module
    MyModule._cache[filename] = newModule //存入缓存
    newModule.load(filename) //读取文件并处理文件
  return newModule.exports 
}

MyModule._resolveFilename = function(id) {
  const filename = path.resolve(id)
  const extname = path.extname(id)

  // 如果没有文件后缀名，尝试添加.js和.json
  if(!extname){
    const exts = Object.keys(MyModule._extensions)
    for (let index = 0; index < exts.length; index++) {
      const currentPath = `${filename}${exts[index]}`
      // 如果拼接后的文件存在，返回拼接的路径
      if (fs.existsSync(currentPath)) {
        return currentPath
      }
    }
  }
  return filename
}

MyModule.prototype.load = function(filename) {
  //根据文件后缀调用对应的函数来处理文件
  const extname = path.extname(filename)
  MyModule._extensions[extname](this,filename)
  this.loaded = true
}

MyModule._extensions['.js'] = function(module,filename) {
  const content = fs.readFileSync(filename,'utf8')
  //读取文件，为创造独立的作用域，将文件内容拼成可执行的匿名函数，并提供 exports\require\module\filenema\dirname参数,this指向当前module
  module._compile(content,filename)
}

MyModule.wrapper = [
  '(function(exports,require,selfmodule,__filename,__dirname){',
  '\n})'
]

MyModule.wrap = function(content) {
  return MyModule.wrapper[0] + content + MyModule.wrapper[1]
}

MyModule.prototype._compile = function(content,filename) {
  const wrapper = MyModule.wrap(content) //匿名文件函数体

  //将匿名文件函数体转为可执行函数
  // vm是nodejs的虚拟机模块，runInThisContext方法可以接受一个字符串并将它转化为一个函数
  // 返回值就是转化后的函数，所以compiledWrapper是一个函数
  const compileWrapper = vm.runInThisContext(wrapper,{
    filename,
    lineOffset: 0,
    displayErrors: true
  })
  const dirname = path.dirname(filename)
  compileWrapper.call(this.exports,this.exports,this.require,this,filename,dirname)
}

MyModule._extensions['.json'] = function(module,filename) {
  const content = fs.readFileSync(filename,'utf8')
  module.exports = JSON.parse(content)
}

module.exports = MyModule //测试使用导出，非测试不需要导出

/*
  手写commonJs其实就是手写Module，Require其实就是实例化一个Module
  Require一个模块的原理流程是：
    1.执行Module._load(id),这个函数里进行缓存校验，如果有缓存直接retrun缓存exports，如果没有实例化一个新的module，
      新的module来执行内部函数，Module.load()
    2.执行module.load()，根据不同后缀，读取对应路径的文件，进行不同的处理，
      js文件，会读取文件内容，执行_compile处理文件内容，将拼接成可执行的匿名函数体字符串，函数体拥有参数exports、require、module、__filename、__dirname,
      利用vm.runInThisContext将函数体转为可执行函数，执行函数，this指向当前模块实例module
      json文件，直接读取文件，JSON.parse解析文件，返回实例module.exports

    处理JS文件核心思想：
      每次新require一个文件时，会创建一个Module实例，实例会load初始化，初始化主要做的是
      将文件内容转化成一个可执行的匿名函数，这个函数内部可以获取到当前实例的一些属性，并且this指向的也是当前实例
      这样做的目的是使模块内部私有化，不污染全局变量，同时方便管理模块间的关系
*/
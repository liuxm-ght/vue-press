const MyModule = require('./myModule') //这个require还是node环境自带的commonJS语法的require

//从这开始走自定义的module
console.log('---------开始myModuleJs---------');
const mmmodule = new MyModule()
let txt = mmmodule.require('./a') //这个require是自定义commonJS的require

console.log(txt,'\n-----------结束输出txt---------');
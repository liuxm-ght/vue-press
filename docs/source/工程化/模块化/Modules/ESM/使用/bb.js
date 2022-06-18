// import {a1,a2} from './aa.js' //会报错，此时的a1、a2尚未赋值，直接读取会报错
// console.log(a1,a2,'-------------aa.js');

import * as a from './aa.js' //不会报错，虽然尚未赋值，但a是对象，有a1、a2属性
console.log(a,'-------------aa.js'); //将输出 { a1: <uninitialized>, a2: <uninitialized> } 可以看出，ES6 模块为 export 的变量预留了空间，不过尚未赋值。

//如果是CommonJS，a的结果是a1有直了，a2未赋值，，，，因为CommonJS是运行时才确定模块间的关系的，import是提前确认
//CommonJS 可以在运行时使用变量进行 require, 例如 require(path.join('xxxx', 'xxx.js'))，
//而静态 import 语法（还有动态 import，返回 Promise）不行，因为 ES6 模块会先解析所有模块再执行代码。

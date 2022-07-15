
### var、let、const的区别

var、let、const三者区别可以围绕下面五点展开：
* 变量提升

    var声明的变量存在变量提升，即变量可以在声明之前调用，值为undefined

    let和const不存在变量提升，即它们所声明的变量一定要在声明后使用，否则报错

* 暂时性死区

    var不存在暂时性死区

    let和const存在暂时性死区，只有等到声明变量的那一行代码出现，才可以获取和使用该变量

* 块级作用域

    var不存在块级作用域

    let和const存在块级作用域

* 重复声明

    var允许重复声明变量

    let和const在同一作用域不允许重复声明变量

* 修改声明的变量

    var和let可以

    const声明一个只读的常量。一旦声明，常量的值就不能改变

* 使用

    能用const的情况尽量使用const，其他情况下大多数使用let，避免使用var


#### 测试代码
```ts
/**
 * 总结：
 *    1. let就是产生了块级作用域
 *    2. 实际上就是替代了IIFE的写法
 *    3. 块级作用域变量查询方法是，先查找内部的变量再往外查找，不能从外部查询内部的变量
*/

//var
var funcs = [];
for (var i = 0; i < 10; i++) {
  funcs[i] = function () {
    console.log(i);
  };
}
funcs[0](); // 10

// Es6 的 let 实现原理
// 原始 es6 代码
var funcs = [];
for (let i = 0; i < 10; i++) {
  funcs[i] = function () {
    console.log(i);
  };
}
funcs[0](); // 0

// babel 编译之后的 es5 代码（polyfill）
var funcs = [];
var _loop = function _loop(i) {
  funcs[i] = function () {
    console.log(i);
  };
}
for (var i = 0; i < 10; i++) {
  _loop(i)
}
funcs[0](); // 0
//或
var funcs = [];
for (var i = 0; i < 10; i++) {
  (function(i) {
    funcs[i] = function () {
      console.log(i);
    };
  }(i))
}
funcs[0](); // 0


// ES6 的块级作用域

// let实际上为 JavaScript 新增了块级作用域。

function f1() {
  let n = 5;
  if (true) {
    let n = 10;
  }
  console.log(n); // 5
}
// 上面的函数有两个代码块，都声明了变量n，运行后输出 5。这表示外层代码块不受内层代码块的影响。如果两次都使用var定义变量n，最后输出的值才是 10。

// ES6 允许块级作用域的任意嵌套。

{{{{
  {let insane = 'Hello World'}
  console.log(insane); // 报错
}}}};
// 上面代码使用了一个五层的块级作用域，每一层都是一个单独的作用域。第四层作用域无法读取第五层作用域的内部变量。

// 内层作用域可以定义外层作用域的同名变量。

{{{{
  let insane = 'Hello World';
  {let insane = 'Hello World'}
}}}};
// 块级作用域的出现，实际上使得获得广泛应用的匿名立即执行函数表达式（匿名 IIFE）不再必要了。

// IIFE 写法
(function () {
  var tmp = ...;
  ...
}());

// 块级作用域写法
{
  let tmp = ...;
  ...
}

```

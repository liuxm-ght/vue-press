[[toc]]
## Bind

### 总结
  1. 共同点：call、apply、bind都能改变函数的this的指向
  2. 不同点：
      1. call：立即执行，接受多个参数，第一个是绑定对象，后面都是函数参数
      2. apply：立即执行，接受两个参数，第一个是绑定对象，第二个是函数参数数组
      3. bind：不立即执行，接受多个参数，第一个是绑定对象，后面都是函数参数，可预设参数，返回一个新函数，可接受未传完的参数
              返回的函数可作为构造函数使用，作为构造函数使用时函数this指向new的实例
  3. 原理解析：
      1. call：手写函数内this指向绑定函数fn，给绑定对象context添加fn属性，内部eval执行context.fn(args)，eval保证环境干净
      2. apply：与call不同的是，参数的处理，call的args是arguments.slice(1)，apply的参数是传入的数组arr
      3. bind：与call、apply完全不同，但是有借用到apply；bind返回一个函数，该函数寄生继承了绑定函数fn的公共属性，返回的函数执行时执行的是绑定函数，绑定函数绑定的绑定对象，由它的用途决定，如果是构造函数，其绑定对象是new创建的空对象，否则是传入的绑定对象
  4. 终结理解：
      * 其实就是将函数当做绑定对象的属性，当call、apply执行函数时，this自然就指向了绑定对象，bind只是不立即执行。

### Call
```ts
/**
 * Call
 * 参数：多个参数---使用一个指定的 this 值和一个或多个参数来调用一个函数。
 * 要点：
 *    this 可能传入 null；
 *    传入不固定个数的参数；
 *    函数可能有返回值；
 * 总结：
 *    指定函数的this指向，可以多个参数，第一个参数为指定的对象，其他参数为函数参数，返回值看原函数
 *    原理是: 将函数添加为绑定对象的属性，执行这个属性，其this指向绑定对象
*/
// es5
Function.prototype.myCall = function(context) {
  // 为null或undefined则指向window
  // 其它原始值会转换成它的对象形式(如 '5' => new String('5'), true => new Boolean(true)等),这就是“装箱”。
  var context = context === null || context === 'undefined' ? window : Object(context)
  // 考虑context 是否存在fn 属性
  var key = createUniqueKey(context)
  context[key] = this

  let len = arguments.length, result
  if (len <= 1) {
    result = context[key]()
  } else {
    var args = [] ;
    for (let i = 1; i < len; i++) {
      args.push('arguments['+i+']')
    }
    // 最终执行 obj.fn(arg1,arg2,arg3....)
    result = eval('context[key]('+args+')')
  }
  delete context[key]
  return result
}
// es6 
Function.prototype.myCall = function(context) {
  // 为null或undefined则指向window
  // 其它原始值会转换成它的对象形式(如 '5' => new String('5'), true => new Boolean(true)等),这就是“装箱”。
  var context = context === null || context === 'undefined' ? window : Object(context)
  // 考虑context 是否存在fn 属性
  var key = createUniqueKey(context) // 返回 Symbol('fn')
  context[key] = this
  var args = [...arguments].slice(1) ;
  // 最终执行 obj.fn(arg1,arg2,arg3....)
  var result = context[key](...args)
  delete context[key]
  return result
}
```

### Apply
```ts
/**
 * Apply
 * 参数： call 是传入不固定个数的参数，而 apply 是传入一个数组
 * 要点：
 *    this 可能传入 null；
 *    传入一个数组；
 *    函数可能有返回值；
 * 
 *  总结：
 *    指定函数的this指向，可以两个参数，第一个参数为指定的对象，第二参数是个数组为函数参数，返回值看原函数
 *    原理是: 同call类似，将函数添加为绑定对象的属性，执行这个属性，其this指向绑定对象
*/
Function.prototype.myApply = function(context,arr) {
  // 为null或undefined则指向window
  // 其它原始值会转换成它的对象形式(如 '5' => new String('5'), true => new Boolean(true)等),这就是“装箱”。
  var context = context === null || context === 'undefined' ? window : Object(context)
  // 考虑context 是否存在fn 属性
  var key = createUniqueKey(context)
  context[key] = this

  let len = arguments.length, result
  if (len <= 1) {
    result = context[key]()
  } else {
    var args = []
    for (let i = 0,len = arr.length; i < len; i++) {
      args.push('arr['+i+']')
    }
    var result = eval('context[key]('+args+')')
  }

  delete context[key]
  return result
}
// es6 
Function.prototype.myApply = function(context,arr) {
  // 为null或undefined则指向window
  // 其它原始值会转换成它的对象形式(如 '5' => new String('5'), true => new Boolean(true)等),这就是“装箱”。
  var context = context === null || context === 'undefined' ? window : Object(context)
  // 考虑context 是否存在fn 属性
  var key = Symbol('fn')
  context[key] = this
  // 最终执行 obj.fn(arg1,arg2,arg3....)
  var result =  arr ? context[key](...arr) : context[key]()
  delete context[key]
  return result
}
```


### Bind
```ts
/**
 * Bind
 * 参数：多个参数---这个新函数的 this 被指定为 bind() 的第一个参数，而其余参数将作为新函数的参数，供调用时使用
 * 要点：
 *    bind() 除了 this 外，还可传入多个参数；
        bind 创建的新函数可能传入多个参数；
        新函数可能被当做构造函数调用；
        函数可能有返回值；
 * 用法：
 *    1. 创建绑定函数，即绑定对象
 *    2. 偏函数，使一个函数拥有预设的初始参数
 *    3. 作为构造函数使用的绑定函数
 * 功能：
 *    1. 返回一个函数，函数执行时执行的是被绑定的函数，其this指向绑定的对象，如果是构造函数this指向
 *    2. 可以预留参数
 *    3. 可作为构造函数使用并继承原函数
 * 总结：
 *    1. bind绑定的函数，会返回一个函数fBound，可以预留参数，同时寄生继承了原函数的原型链
 *    2. fBound当做普通函数执行时，可以传入参数，跟预留的参数合并，this指向绑定的对象
 *    3. fBound当做构造函数时，this指向new新建的空对象
*/
Function.prototype.myBind = function(context) {
  var self = this,args = Array.prototype.slice.call(arguments,1) // 获取第二个参数到最后一个参数，即预设参数
  // 返回的函数
  var fBound = function() {
    // 获取的是bind返回的函数传入的参数
    var bindArgs = Array.prototype.slice.call(arguments)
    // 按照顺序拼接起来
    var finalArgs = args.concat(bindArgs)
    // 当作为构造函数时，this 指向实例(new的空对象)，此时结果为 true，将绑定函数的 this 指向该实例，可以让实例获得来自绑定函数的值
    return self.apply(this instanceof fBound ? this : context , finalArgs)
  }

  // 作为中转
  var fNOP = function () {};
  // 修改返回函数的 prototype 为绑定函数的 prototype，实例就可以继承绑定函数的原型中的值
  // fBound.prototype = this.prototype;
  // 优化 ：修改 fBound.prototype 的时候，也会直接修改绑定函数的 prototype。这个时候，我们可以通过一个空函数来进行中转
  fNOP.prototype = this.prototype
  fBound.prototype = new fNOP(); // 返回的函数继承，原型链继承self，即原来的函数的原型链
  return fBound
}
```


### 测试代码
```ts
// test 
var Person = function(name,age) { //一个构造函数
  this.name = name
  this.age = age
  this.sayName = function() {
    console.log(this.name);
  }
}
var obj = {
  name:'bindObj',
  age:'24'
};
var Bound1 = Person.myBind(obj, 'xman'); //创建绑定函数 ,同时使一个函数拥有预设的初始参数，，，返回的可以是一个构造函数
var bound1 = new Bound1('22'); // 当被当做是构造函数使用时，合并预设的参数，

console.log(bound1.name);  // 'xman'
console.log(bound1.age);  // 22
bound1.sayName();  // xman

var bound2 = new Bound1('23'); // 当被当做是构造函数使用时，合并预设的参数，
console.log(bound2.name);  // 'xman'
console.log(bound2.age);  // 23
bound2.sayName();  // xman

bound1 instanceof Person;  // true
bound1 instanceof Bound1;  // true


//参考文章 ： https://juejin.cn/post/7039601703447953416#heading-12

// 生成键名
function createUniqueKey (context) {
  var key = 'fn';
  while (obj.hasOwnProperty(key)) {
    key = 'fn' + new Date().getTime()
  }
  return key;
}
```
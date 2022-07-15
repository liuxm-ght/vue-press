
### 类型判断

1. 总结：
    * instanceof：用于判断数据是否在某种类型的原型链上，返回 ture 或 false
    * typeof的实现：只能判断除了null的基础类型，引用类型除function其他判断为object；原因是typeof会判断机器码存储信息前三位，为000的是对象，null的机器码存储信息也是000
    * 通用类型判断：通用Object.prototype.toString.call(xxx).slice(8,-1)准确获取数据类型

2. 原理：

:::: code-group
::: code-group-item instanceof

```ts
/**
 * 实现 instanceof
 *  主要用于 判断数据是否在某种类型的原型链上
 */ 
function myInstanceof(left,right){
  // let proto = left.__proto__
  let proto = Object.getPrototypeOf(left)
  while (true) {
    if(proto === null) return false
    if (proto === right.prototype) {
      return true
    }
    // proto = proto.__proto__
    proto = Object.getPrototypeOf(proto)
  }
}
```

:::
::: code-group-item typeof
```ts
/**
 * 实现 typeof
 *  typeof 一般被用于判断一个变量的类型，我们可以利用 typeof 来判断number, string, object, boolean, function, undefined, symbol 这七种类型；
 * 
 *  主要用于 基础数据类型的 判断
 *      对于 引用类型 除function, 其他判断都是object ，同时 null 也是判断为object（这点可从Mdn文档可知道）
 * 
 *  null 也是判断为object， 原理是：
 *    js在存储变量的时候，底层逻辑是在变量转为机器码后的1-3位存储相应的信息：
        000：对象
        010：浮点数
        100：字符串
        110：布尔
        1：整数
 *    对于null的存储是全0，所以会被判断为object
 *    对于undefined 的存储是 用 −2^30 整数来表示
*       参考文章：https://juejin.cn/post/6844903613584654344
*       参考文章：https://juejin.cn/post/6991653255847772167
 */ 

function myTypeOf(data) {
  var type = Object.prototype.toString.call(data).slice(8,-1).toLowerCase()
  var map = {
    'number':true,
    'string':true,
    'boolean':true,
    'undefined':true,
    'bigint':true,
    'symbol':true,
    'function':true,
  }
  return map[res] ? type : 'object'
}
```
:::
::: code-group-item 类型判断
```ts

/**
 * 通用 类型判断 
 * 可以判断所有类型
 *  Number String Boolean Null Undefined Symbol bigint
 *  Object Array Date RegExp Function 
 * */ 
function isType(obj) {
  // if (typeof obj !== 'object') return false
  // const typeString = Object.prototype.toString.call(obj)
  // let flag
  // switch (type) {
  //   case 'Array':
  //     flag = typeString === '[object Array]' 
  //     break;
  //   case 'Date':
  //     flag = typeString === '[object Date]' 
  //     break;
  //   case 'RegExp':
  //     flag = typeString === '[object RegExp]' 
  //     break;
  //   default:
  //     flag = false
  //     break;
  // }
  // return flag
  return Object.prototype.toString.call(obj).slice(8,-1).toLowerCase()
}

// 类型判断 - curry柯力化函数
function isType_curry(type) {
  return function(obj) {
    return Object.prototype.toString.call(obj) === `[object ${type}]`
  }
}
let isArray = isType_curry('Array')
let isNumber = isType_curry('Number')

```
:::
::::
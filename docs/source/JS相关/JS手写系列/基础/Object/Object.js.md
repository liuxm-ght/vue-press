[[toc]]
## Object常用方法详解

### 总结
  1. Create: 新构造函数创建新对象，原型链指向第一个参数；第二个参数为对对象的一些描述，是否可枚举等
  2. Assign: 遍历合并新旧对象

### Object.create
```ts
/**
 *  语法
      Object.create(proto，[propertiesObject])
    参数
      proto
        新创建对象的原型对象。
      propertiesObject
        可选。需要传入一个对象，该对象的属性类型参照Object.defineProperties()的第二个参数。
        如果该参数被指定且不为 undefined，该传入对象的自有可枚举属性(即其自身定义的属性，
        而不是其原型链上的枚举属性)将为新创建的对象添加指定的属性值和对应的属性描述符。
 * 
*/
Object.prototype.myCreate = function(proto,propertyObject = undefined) {
  if (typeof proto !== 'object' && typeof proto !== 'function') {
    throw new TypeError('Object prototype may only be an Object or null.')
  }
  if (propertyObject == null) {
    new TypeError('Cannot convert undefined or null to object')
  }
  function F() {}
  F.prototype = proto
  const obj = new F()
  if (propertyObject != undefined) {
    Object.defineProperty(obj,propertyObject)
  }
  if (proto == null) {
    // 创建一个没有原型对象的对象，Object.create(null)
    // obj.__proto__ = null
    Object.setPrototypeOf(obj,null)
  }
  return obj
}
```
::: tip 结论
 * Create: 新构造函数创建新对象，原型链指向第一个参数；第二个参数为对对象的一些描述，是否可枚举等
:::


### Object.assign
```ts
/**
 * Object.assign() 方法用于将所有可枚举属性的值从一个或多个源对象分配到目标对象。它将返回目标对象。
 *  语法
      Object.assign(target, ...sources)
    参数
      target
        目标对象。
      sources
        源对象。
      返回值
        目标对象。
*/
Object.prototype.myAssign = function(target,...sources) {
  if (target == null) {
    throw new TypeError('Cannot convert undefined or null to object')
  }
  let ret = Object(target)
  sources.forEach(function(obj) {
    if(obj != null){
      for (const key in obj) {
        if (Object.hasOwnProperty.call(obj, key)) {
          ret[key] = obj[key];
        }
      }
    }
  });
  return ret
}
```
::: tip 结论
 * Assign: 遍历参数合并新旧对象
:::

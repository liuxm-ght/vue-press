[[toc]]

### 总结
  1. 浅拷贝主要用于基础类型及Function的复制
  2. 深拷贝是主要用于引用类型的复制
      * 深拷贝需要根据不同的类型进行判断，如果是引用类型，进行递归拷贝，利用缓存处理循环拷贝问题
      * 主要区分类型有：Array、Date、RegExp、其中Obeject需要进行继承处理

### 浅拷贝
```ts
//浅拷贝
let arr = [1,2,3,4,5];
let arr2 = arr;
```

### 深拷贝
:::: code-group
::: code-group-item 缺陷版

<CodeGroup>
  <CodeGroupItem title="数组的拷贝" active>

  for 循环 copy
  ```ts
    // for 循环 copy
    function copy(arr) {
      let cArr = []
      for(let i = 0; i < arr.length; i++){
        cArr.push(arr[i])
      }
      return cArr;
    }
    let arr3 = [1,2,3,4];
    let arr4 = copy(arr3) //[1,2,3,4]
    console.log(arr4) //[1,2,3,4]
    arr3[0] = 5;
    console.log(arr3) //[5,2,3,4]
    console.log(arr4) //[1,2,3,4]
  ```
  slice实现深拷贝
  ```ts
    //slice实现深拷贝
    let arr5 = [1,2,3,4];
    let arr6 = arr5.slice(0);
    arr5[0] = 5;
    console.log(arr5); //[5,2,3,4]
    console.log(arr6); //[1,2,3,4]
  ```
  concat实现深拷贝
  ```ts
    //concat实现深拷贝
    let arr7 = [1,2,3,4];
    let arr8 = arr7.concat();
    arr7[0] = 5;
    console.log(arr7); //[5,2,3,4]
    console.log(arr8); //[1,2,3,4]
  ```
  es6 扩展运算实现深拷贝
  ```ts
    //es6 扩展运算实现深拷贝
    let arr9 = [1,2,3,4];
    let [...arr10] = arr9;
    arr9[0] = 5;
    console.log(arr9) //[5,2,3,4]
    console.log(arr10) //[1,2,3,4]
  ```
  JSON.parse(JSON.stringify(arr))
  ```ts
    //JSON.parse(JSON.stringify(arr)) 不考虑 undefined 、 null、 function、 symbol
    let arr9 = [1,2,3,4];
    let arr10 = JSON.parse(JSON.stringify(arr9))
    arr9[0] = 5;
    console.log(arr9) //[5,2,3,4]
    console.log(arr10) //[1,2,3,4]
    //注意：该方法在数据量比较大时，会有性能问题。
  ```
  </CodeGroupItem>
  <CodeGroupItem title="对象的拷贝">

  循环 copy 对象
  ```ts
    //  循环 copy 对象
    let obj = {
      id:'0',
      name:'king',
      sex:'man'
    }
    let obj2 = copy2(obj)
    function copy2(obj) {
      let cObj = {};
      for(var key in obj){
        cObj[key] = obj[key]
      }
      return cObj
    }
    obj2.name = "king2"
    console.log(obj) // {id: "0", name: "king", sex: "man"}
    console.log(obj2) // {id: "0", name: "king2", sex: "man"}
  ```
  JSON.parse 与 JSON.stringify
  ```ts
    //JSON.parse 与 JSON.stringify
    // 构造函数
    function person(pname) {
      this.name = pname;
    }

    const Messi = new person('Messi');
    var obj1 = {
      x: 1, 
      y: {
          m: 1
      },
      a:undefined,
      b:function(a,b){
        return a+b
      },
      c:Symbol("foo"),
      d: new Array(1),
      e: new RegExp('ab+c', 'i'),
      f: Messi
    };
    var obj2 = JSON.parse(JSON.stringify(obj1));
    console.log(obj1) //{x: 1, y: {m: 1}, a: undefined, b: ƒ, c: Symbol(foo)}
    console.log(obj2) //{x: 1, y: {m: 1}}
    obj2.y.m = 2; //修改obj2.y.m
    console.log(obj1) //{x: 1, y: {m: 1}, a: undefined, b: ƒ, c: Symbol(foo)}
    console.log(obj2) //{x: 2, y: {m: 2}}
    //可实现多维对象的深拷贝。
    //注意：进行JSON.stringify() 序列化的过程中，undefined、任意的函数以及 symbol 值，在序列化过程中会被忽略（出现在非数组对象的属性值中时）或者被转换成 null（出现在数组中时）。
      // 无法复制函数
      console.log(obj2.b, obj1.b); // undefined [Function: say]
      // 稀疏数组复制错误
      console.log(obj2.d[0], obj1.d[0]); // null undefined
      // 无法复制正则对象
      console.log(obj2.e, obj1.e); // {} /ab+c/i
      // 构造函数指向错误
      console.log(obj2.f.constructor, obj1.f.constructor); // [Function: Object] [Function: person]
  ```
  es6 扩展运算
  ```ts
    //es6 扩展运算
    let obj = {
      id:'0',
      name:'king',
      sex:'man'
    }
    let {...obj4} = obj
    obj4.name = "king4"
    console.log(obj) //{id: "0", name: "king", sex: "man"}
    console.log(obj4) //{id: "0", name: "king4", sex: "man"}

    //Object.assign() 只能实现一维对象的深拷贝。
    var obj1 = {x: 1, y: 2}, obj2 = Object.assign({}, obj1);
    console.log(obj1) // {x: 1, y: 2}
    console.log(obj2) // {x: 1, y: 2}
    obj2.x = 2; // 修改 obj2.x
    console.log(obj1) // {x: 1, y: 2}
    console.log(obj2) // {x: 2, y: 2}
    var obj1 = {
        x: 1, 
        y: {
            m: 1
        }
    };
    var obj2 = Object.assign({}, obj1);
    console.log(obj1) // {x: 1, y: {m: 1}}
    console.log(obj2) // {x: 1, y: {m: 1}}

    obj2.y.m = 2; // 修改 obj2.y.m
    console.log(obj1) // {x: 1, y: {m: 2}}
    console.log(obj2) // {x: 1, y: {m: 2}}
  ```
  </CodeGroupItem>
</CodeGroup>

::: 
::: code-group-item 通用版
```ts
//通用版
  let clone = function (v) {
    let o = v.constructor === Array ? [] : {};
    for(var i in v){
      o[i] = typeof v[i] === "object" ? clone(v[i]) : v[i];
    }
    return o;
  }
  // 测试
  let obj = {
    id:'0',
    name:'king',
    sex:'man'
  }
  let obj2 = clone(obj)
  obj2.name = "king2"
  //但上面的深拷贝方法遇到循环引用，会陷入一个循环的递归过程，从而导致爆栈，所以要避免。
  let obj1 = {
    x: 1, 
    y: 2
  };
  obj1.z = obj1;
  let obj2 = clone(obj1);
  console.log(obj2) 
  //结果如下：Maximum call stack size exceeded
```
::: 
::: code-group-item 终结完美版
```ts
//终结完美版
// 总结：根据不同的类型进行递归拷贝，利用缓存处理循环拷贝问题
// 主要区分类型：Array、Date、RegExp、其中Obeject与Function需要进行继承处理
function cloneDeep(oldObj) {
  // 处理循环引用问题，parents与children下标一一对应，其原理是再次递归拷贝时返回空数据，但空数据继承了循环对象的原型对象
  let oldObjs = []
  let newObjs = []
  function isType(obj,type) { //判断obj是否为type类型
    return Object.prototype.toString.call(obj) === `[object ${type}]`
  }
  // function getRegExp(exp) { //获取正则的flags
  //   let flags = ''
  //   if (exp.global) flags += 'g'
  //   if (exp.ignoreCase) flags += 'i'
  //   if (exp.multiline) flags += 'm'
  //   return flags
  // }
  function _clone(oldObj) {
    if (oldObj === null) return null
    if (typeof oldObj !== 'object') return oldObj
    let newObj , proto
    if (isType(oldObj,'Array')) { //处理 Array
      newObj = []
    } else if (isType(oldObj,'Date')) { //处理 Date
      newObj = newDate(oldObj.getTime())
    } else if (isType(oldObj,'RegExp')) { //处理 RegExp
      // newObj = new RegExp(oldObj.source,getRegExp(oldObj))
      // if (oldObj.lastIndex) newObj.lastIndex = oldObj.lastIndex;
      newObj = new RegExp(oldObj)
    } else { //处理 Object
      proto = Object.getPrototypeOf(oldObj)
      newObj = Object.create(proto) //返回空对象，同时继承原对象的原型对象
    }
    
    // 处理循环引用问题，之前有处理过，直接返回结果
    const pIndex = oldObjs.indexOf(oldObj)
    if (pIndex > -1) {
      return newObjs[pIndex] //返回对应类型的新的空数据，但是继承了原对象的原型对象
    }
    oldObjs.push(oldObj)
    newObjs.push(newObj)

    // 正式复制
    for (const i in oldObj) {
      if (Object.hasOwnProperty.call(oldObj, i)) {
        newObj[i] = _clone(oldObj[i]);
      }
    }
    return newObj
  }
  return _clone(oldObj)
}
```
::: 
::::


### 解决问题[](https://juejin.cn/post/6844903584023183368#heading-1)
 *  1.对象的构造函数指向错误问题
 *  2.正则对象无法复制问题
 *  3.函数无法复制问题(JSON.parse 与 JSON.stringify)
 *  4.循环引用爆栈问题

### 测试数据
```ts
  test = ''
  function person(pname) {
    this.name = pname;
  }
  const Messi = new person('Messi');
  function say() {
    console.log('hi');
  }
  const oldObj = {
    a: say,
    c: new RegExp('ab+c', 'i'),
    d: Messi,
  };
  oldObj.b = oldObj;
  const newObj = cloneDeep(oldObj);
  console.log(newObj.a, oldObj.a); // [Function: say] [Function: say]
  console.log(newObj.b, oldObj.b); // { a: [Function: say], c: /ab+c/i, d: person { name: 'Messi' }, b: [Circular] } { a: [Function: say], c: /ab+c/i, d: person { name: 'Messi' }, b: [Circular] }
  console.log(newObj.c, oldObj.c); // /ab+c/i /ab+c/i
  console.log(newObj.d.constructor, oldObj.d.constructor); // [Function: person] [Function: person]

  // 累加器
  // add(1) // 1
  // add(1)(2)  // 3
  // add(1)(2)(3) // 6
  // add(1)(2)(3)(4) // 10 
  // add(1)(2,5)(3)(4) // 10 

  // function add(a) {
  //   function s(b) {
  //       a = a + b
  //   return s
  //   }
  //   s.toString = function() {
  //       return a
  //   }
  //   return s
  // }
  // console.log(add(1)(2)(3)(4)) // f 10
```

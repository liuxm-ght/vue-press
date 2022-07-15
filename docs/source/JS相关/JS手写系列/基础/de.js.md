测试用js文件
```ts
/**
 * 总结：
 *    1. 如果是null直接返回null
 *    2. typeof类型判断非object类型的直接返回值，
 *    3. isType类型判断Array\Object\Function\RegExp\Date等，特殊处理
 *    4. Array:初始化值为[],Date:时间转换为毫秒再转为Date,RegExp:根据原exp新New RegExp新的exp,Object或Function获取其prototype、新建对象继承原对象；
 *    5. 避免循环引入问题，利用缓存原理，循环引用的属性从缓存里获取，缓存数组分为新旧数组，旧用于查询，新用于返回
 *    6. 遍历属性，递归处理属性值
*/

//终结完美版
function cloneDeep(oldObj) {
  // 处理循环引用问题，parents与children下标一一对应
  let oldObjs = []
  let newObjs = []
  function isType(obj,type) { //判断obj是否为type类型
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
    return Object.prototype.toString.call(obj) === `[object ${type}]`
  }
  function getRegExp(exp) { //获取正则的flags
    let flags = ''
    if (exp.global) flags += 'g'
    if (exp.ignoreCase) flags += 'i'
    if (exp.multiline) flags += 'm'
    return flags
  }
  function _clone(oldObj) {
    if (oldObj === null) return null
    if (typeof oldObj !== 'object') return oldObj
    let newObj , proto
    if (isType(oldObj,'Array')) { //处理 Array
      newObj = []
    } else if (isType(oldObj,'Date')) { //处理 Date
      newObj = new Date(oldObj.getTime())
    } else if (isType(oldObj,'RegExp')) { //处理 RegExp
      newObj = new RegExp(oldObj.source,getRegExp(oldObj))
      if (oldObj.lastIndex) newObj.lastIndex = oldObj.lastIndex;
    } else { //处理 Object 或 Function
      proto = Object.getPrototypeOf(oldObj)
      newObj = Object.create(proto)
    }
    
    // 处理循环引用问题，之前有处理过，直接返回结果
    const pIndex = oldObjs.indexOf(oldObj)
    if (pIndex > -1) {
      return newObjs[pIndex] // 返回拷贝后的值
    }
    oldObjs.push(oldObj) // 利用缓存处理循环引用问题，旧数组存放旧值用于查询，从新数组返回拷贝的值
    newObjs.push(newObj)

    for (const i in oldObj) {
      if (Object.hasOwnProperty.call(oldObj, i)) {
        newObj[i] = _clone(oldObj[i]);
      }
    }
    return newObj
  }
  return _clone(oldObj)
}

/**
 * 解决问题:
 *  1.对象的构造函数指向错误问题
 *  2.正则对象无法复制问题
 *  3.函数无法复制问题(JSON.parse 与 JSON.stringify)
 *  4.循环引用爆栈问题
 *  参考文章：https://juejin.cn/post/6844903584023183368#heading-1
*/
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
    e: {
      name:'xxxx'
    }
  };
  oldObj.b = oldObj;
  const newObj = cloneDeep(oldObj);
  oldObj.e.name = 'yyy'
  console.log(newObj.a, oldObj.a); // [Function: say] [Function: say]
  console.log(newObj.b, oldObj.b); // { a: [Function: say], c: /ab+c/i, d: person { name: 'Messi' }, b: [Circular] } { a: [Function: say], c: /ab+c/i, d: person { name: 'Messi' }, b: [Circular] }
  console.log(newObj.c, oldObj.c); // /ab+c/i /ab+c/i
  console.log(newObj.d.constructor, oldObj.d.constructor); // [Function: person] [Function: person]
  console.log(newObj.e, oldObj.e); // { name: 'xxxx' } { name: 'yyy' }



  /**
* deep clone
* @param  {[type]} parent object 需要进行克隆的对象
* @return {[type]}        深克隆后的对象
*/
const clone = parent => {
  // 维护两个储存循环引用的数组
  const parents = [];
  const children = [];

  const _clone = parent => {
    if (parent === null) return null;
    if (typeof parent !== 'object') return parent;

    let child, proto;

    if (isType(parent, 'Array')) {
      // 对数组做特殊处理
      child = [];
    } else if (isType(parent, 'RegExp')) {
      // 对正则对象做特殊处理
      // child = new RegExp(parent.source, getRegExp(parent));
      child = new RegExp(parent);
      if (parent.lastIndex) child.lastIndex = parent.lastIndex;
    } else if (isType(parent, 'Date')) {
      // 对Date对象做特殊处理
      child = new Date(parent.getTime());
    } else {
      // 处理对象原型
      proto = Object.getPrototypeOf(parent);
      // 利用Object.create切断原型链
      child = Object.create(proto);
    }

    // 处理循环引用
    const index = parents.indexOf(parent);

    if (index != -1) {
      // 如果父数组存在本对象,说明之前已经被引用过,直接返回此对象
      return children[index];
    }
    parents.push(parent);
    children.push(child);

    for (let i in parent) {
      // 递归
      child[i] = _clone(parent[i]);
    }

    return child;
  };
  return _clone(parent);
};
```
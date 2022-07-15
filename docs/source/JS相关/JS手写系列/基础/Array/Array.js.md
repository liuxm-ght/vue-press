[[toc]]
## Array 常用方法详解

### 总结
 *  forEach：this数组转为对象，利用while循环执行callback函数，while比for快，注意如果有第二个参数是绑定的this
 *  map：类似forEach，只是返回callback执行的结果保存到新数组返回出来
 *  filter：类似forEach，只是返回callback执行结果为true的元素，保存到新数组返回出来
 *  some：类似forEach，只是如果有一个callback执行结果为true的元素，返回true；否则为false
 *  reduce：类似forEach，只是每次返回的callback执行结果当做是下一次callback的第一个参数，可实现累加器得到最后结果返回出来，可设置初始值
 *  flat：展开数组，三种方法，一是forEach循环遍历数组，判断元素是否为数组，是递归处理，最后拼接新数组返回出来；二是while循环判断是否有元素是数组存在，是扩展符展开一层数组，根据深度参数判断是否进行进一步展开；三是reduce遍历拼接
 *  sort：根据数组长度判断使用哪种排序，数组长度小于10使用插入排序，反之使用快速排序
 *  unique：去重，有两种方法，一是循环遍历数组，利用indexOf查找元素下标，将下标与遍历下标相同的元素加入新数组返回；二是new Set去重运用扩展运算符转为新数组返回

### forEach
```ts
// 实现 forEach
/**
 *  语法
      arr.forEach(callback(currentValue [, index [, array]])[, thisArg])
    参数
      callback
      为数组中每个元素执行的函数，该函数接收一至三个参数：
        currentValue
          数组中正在处理的当前元素。
        index 可选
          数组中正在处理的当前元素的索引。
        array 可选
          forEach() 方法正在操作的数组。
      thisArg 可选
        可选参数。当执行回调函数 callback 时，用作 this 的值。不传时，undefined会作为callback回调的this
    返回值
      undefined。
 */
Array.prototype.myForEach = function(callback, thisArg) {
  if (this == null) { // this 为调用的数组
    throw new TypeError('this is null or not defined')
  }
  if (typeof callback !== 'funciton') {
    throw new TypeError(callback + ' is not a function')
  }
  const O = Object(this) //转为对象，while in 比 for快
  const len = O.length >>> 0
  let k = 0
  while (k < len) {
    if (k in O) {
      callback.call(thisArg,O[k],k,O)
    }
    k++;
  }
}
/* 
* O.length >>> 0 是什么操作？就是无符号右移 0 位，那有什么意义嘛？
*   就是为了保证转换后的值为正整数。
*   其实底层做了 2 层转换，第一是非 number 转成 number 类型，第二是将 number 转成 Uint32 类型。
* 感兴趣可以阅读 something >>> 0是什么意思?。 参考文章：https://link.juejin.cn/?target=https%3A%2F%2Fzhuanlan.zhihu.com%2Fp%2F100790268
*/
```


### map
```ts
// 实现 map
/**
 * 用跟forEach类似
 * 不同是返回一个由原数组每个元素执行回调函数的结果组成的新数组。
 * 
 * thisArg 指定了callback函数this的指向
*/
Array.prototype.myMap = function(callback,thisArg) {
  if (this == null) { // this 为调用的数组
    throw new TypeError('this is null or not defined')
  }
  if (typeof callback !== 'funciton') {
    throw new TypeError(callback + ' is not a function')
  }
  const O = Object(this)
  let len = O.length >>> 0
  let k = 0,newArr = []
  while (k < len) {
    if (k in O) {
      newArr[k] = callback.call(thisArg,O[k],k,O)
    }
    k++
  }
  return newArr
}
```


### filter
```ts
// 实现 filter
/**
 * 用跟forEach类似
 * 不同是返回一个新的、由通过测试的元素组成的数组，如果没有任何数组元素通过测试，则返回空数组。
*/
Array.prototype.myFilter = function(callback,thisArg) {
  if (this == null) { // this 为调用的数组
    throw new TypeError('this is null or not defined')
  }
  if (typeof callback !== 'funciton') {
    throw new TypeError(callback + ' is not a function')
  }
  const O = Object(this)
  let len = O.length >>> 0
  let k = 0,newArr = []
  while (k < len) {
    if (k in O) {
      if (callback.call(thisArg,O[k],k,O)) {
        newArr.push(O[k])
      }
    }
    k++
  }
  return newArr
}
```


### some
```ts
// 实现 some
/**
 * 用法
 * some() 方法测试数组中是不是至少有1个元素通过了被提供的函数测试。它返回的是一个Boolean类型的值。
 * 用跟forEach类似
 * 不同的是数组中有至少一个元素通过回调函数的测试就会返回true；所有元素都没有通过回调函数的测试返回值才会为false。
 * 
*/
Array.prototype.mySome = function(callback,thisArg) {
  if (this == null) { // this 为调用的数组
    throw new TypeError('this is null or not defined')
  }
  if (typeof callback !== 'funciton') {
    throw new TypeError(callback + ' is not a function')
  }
  const O = Object(this)
  let len = O.length >>> 0
  let k = 0 ,flag = false
  while (k < len) {
    if (callback.call(thisArg,O[k],k,O)) {
      return true
    }
    k++
  }
  return false
}
```


### reduce
```ts
// 实现 reduce
/**
 *  语法
      arr.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])
    参数
      callback
        执行数组中每个值 (如果没有提供 initialValue则第一个值除外)的函数，包含四个参数：
        accumulator
          累计器累计回调的返回值; 它是上一次调用回调时返回的累积值，或initialValue（见于下方）。
        currentValue
          数组中正在处理的元素。
        index 可选
          数组中正在处理的当前元素的索引。 如果提供了initialValue，则起始索引号为0，否则从索引1起始。
        array可选
          调用reduce()的数组
      initialValue可选
        作为第一次调用 callback函数时的第一个参数的值。 如果没有提供初始值，则将使用数组中的第一个元素。 在没有初始值的空数组上调用 reduce 将报错。
    返回值
      函数累计处理的结果
 * 
*/
Array.prototype.myReduce = function(callback,initialValue) {
  if (this == null) {
    throw new TypeError('this is null or not defined')
  }
  if (typeof callback !== "function") {
      throw new TypeError(callback + ' is not a function')
  }
  const O = Object(this)
  const len = O.length >>> 0
  let k = 0 , acc
  if (arguments.length > 1) {
    acc = initialValue
  }else{ //找到第一个不为空的元素为初始acc
    while (k<len && !(k in O)) { 
      k++
    }
    if(k > len){
      throw new TypeError( 'Reduce of empty array with no initial value' );
    }
    acc = O[k++]
  }
  while(k < len) {
    if (k in O) {
      acc = callback(acc,O[k],k,O)
    }
    k++
  }
  return acc
}
// function sum(a, b, c, d) {
//     console.log(a, b, c, d);
//     for (let i = 0; i < d.length; i++) {
//         d[i] = d[i] * 2;
//     }
//     return a + b;
// }
// var result = arr.myReduce(sum, 50) 
```


### flat
```ts
// 实现 flat 展开数组
/**
 *  语法
      var newArray = arr.flat([depth])
    参数
      depth 可选
      指定要提取嵌套数组的结构深度，默认值为 1。
    返回值
      一个包含将数组与子数组中所有元素的新数组。
  *
  *  总结：
  *     方法一：forEach循环判断是否有元素为数组，不是加入返回的新数组，是的话拼接递归调用该方法返回的数组，但需要根据dep来判断是否深入
  *     方法二：while循环判断是否有元素为数组，是直接扩展符拼接过滤空的数组，根据dep深度来判断是否继续深入扩展
  *     方法三：reduce累加器
  *
*/
Array.prototype.myFlat_Foreach = function(dep = 1) {
  const result = []
  this.forEach(function(item) {
    if (Array.isArray(item) && dep > 0) {
      dep--
      result = result.concat(item.myFlat_Foreach(dep))
    }else{
      result.push(item)
    }
  })
  return result
}
Array.prototype.myFlat_While = function(dep = 1) {
  let result = this
  while (result.some(Array.isArray) && dep > 0) {
    result = [].concat(...result.filter(item => item)) //...展开一层，并filter去除空值
    dep--
  }
  return result
}
Array.prototype.myFlat_Reduce = function(dep = 1) {
  return this.reduce(function(acc,item) {
    return acc.concat(
      Array.isArray(item) && dep > 0 ?
        item.myFlat_Reduce(--dep)  
        : Array.isArray(item) //确保当dep为0时，合并后的元素还是数组
        ? [item]
        : item
    )
  },[])
}

//纯数字数组
Array.prototype.myFlat2 = function() {
  return this.toString().split(',').map(item => Number(item))
}
var arr2 = [1,[2,3,[4,5,[6,7]]]]
console.log(arr2.myFlat_Reduce()); 
```


### sort
```ts
// 实现 sort
/**
 * 语法
    arr.sort([compareFunction])
  参数
    compareFunction 可选
      用来指定按某种顺序进行排列的函数。如果省略，元素按照转换为的字符串的各个字符的Unicode位点进行排序。
      firstEl
        第一个用于比较的元素。
      secondEl
        第二个用于比较的元素。
  返回值
    排序后的数组。请注意，数组已原地排序，并且不进行复制。
 *
 *
 * 总结：
 *    数组sort排序使用两种排序方法：
 *      一：当数组长度小于10时，使用插入排序法
 *      二：当数组长度大于10时，使用快速排序法
 */
//v8在处理sort方法时，使用了插入排序和快排两种方案。 当目标数组长度小于10时，使用插入排序；反之，使用快速排序。
Array.prototype.mySort = function(callback) {
  if (this == null) { // this 为调用的数组
    throw new TypeError('this is null or not defined')
  }
  let len = this.length
  if(len <= 1){
    return this
  }
  if (len < 10) { //插入排序
    for (let i = 1; i < this.length; i++) { //插入元素下标
      for (let j = i; j > 0; j--) { //当前最多需要比对j次
        if(this[j] < this[j-1]){
          [this[j],this[j-1]] = [this[j-1],this[j]]
        }else{
          break
        }
      }
    }
    return this
  } else { //快速排序
    let left = [], right = [], current = this.splice(0,1)
    for (let i = 0; i < this.length; i++) {
      if (this[i] < current) {
        left.push(this[i])
      }else{
        right.push(this[i])
      }
    }
    return left.mySort().concat(current,right.mySort())
  }
}
```


### unique
```ts
/**
 * 去重
 * 总结：
 *    方法一：使用数组过滤filter方法，如果有多个相同元素，只保留最前面的元素，即indexOf查到的
 *    方法二：使用Set类型方法，直接new Set数组，然后扩展法...展开
*/
Array.prototype.unique_es5 = function() {
  if (this == null) { // this 为调用的数组
    throw new TypeError('this is null or not defined')
  }
  var res = this.filter(function(item,index,array) {
    return array.indexOf(item) === index
  })
  return res
}
Array.prototype.unique_es6 = function() {
  if (this == null) { // this 为调用的数组
    throw new TypeError('this is null or not defined')
  }
  return [...new Set(this)]
}
```
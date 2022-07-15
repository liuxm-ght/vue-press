## Array 常用方法

* reduce
  定义和用法
  * reduce() 方法接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值。
  * reduce() 可以作为一个高阶函数，用于函数的 compose。
    array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
    * 注意: reduce() 对于空数组是不会执行回调函数的。
      total	必需。初始值, 或者计算结束后的返回值。
      currentValue	必需。当前元素
      currentIndex	可选。当前元素的索引
  arr	可选。当前元素所属的数组对象。

* reduceRight
  定义和用法
  reduceRight() 方法的功能和 reduce() 功能是一样的，不同的是 reduceRight() 从数组的末尾向前将数组中的数组项做累加。
  注意: reduce() 对于空数组是不会执行回调函数的。
  语法
  array.reduceRight(function(total, currentValue, currentIndex, arr), initialValue)


* some
  定义和用法
  some() 方法用于检测数组中的元素是否满足指定条件（函数提供）。
  some() 方法会依次执行数组的每个元素：
  如果有一个元素满足条件，则表达式返回true , 剩余的元素不会再执行检测。
  如果没有满足条件的元素，则返回false。
  注意： some() 不会对空数组进行检测。
  注意： some() 不会改变原始数组。
  array.some(function(currentValue,index,arr),thisValue) 


* from
  定义和用法
    * from() 方法用于通过拥有 length 属性的对象或可迭代的对象来返回一个数组。
      如果对象是数组返回 true，否则返回 false。
  语法
    * Array.from(object, mapFunction, thisValue)
    mapFunction	可选，数组中每个元素要调用的函数。


* Array.of()
Array.of()方法用于将一组值，转换为数组。


* 类数组转数组
  var arrayLike = {0: 'name', 1: 'age', 2: 'sex', length: 3 }
  // 1. slice
  Array.prototype.slice.call(arrayLike); // ["name", "age", "sex"] 
  // 2. splice
  Array.prototype.splice.call(arrayLike, 0); // ["name", "age", "sex"] 
  // 3. ES6 Array.from
  Array.from(arrayLike); // ["name", "age", "sex"] 
  // 4. apply
  Array.prototype.concat.apply([], arrayLike)


* 找出指定元素出现的所有位置
  var indices = [];
  var array = ['a', 'b', 'a', 'c', 'a', 'd'];
  var element = 'a';
  var idx = array.indexOf(element);
  while (idx != -1) {
    indices.push(idx);
    idx = array.indexOf(element, idx + 1);
  }
  console.log(indices);
  // [0, 2, 4]

* find 和 findIndex
  数组实例的find方法，用于找出第一个符合条件的数组成员。
  数组实例的findIndex方法的用法与find方法非常类似，返回第一个符合条件的数组成员的位置，如果所有成员都不符合条件，则返回-1。
  这两个方法都可以接受第二个参数，用来绑定回调函数的this对象。

* instanceof 和 isArray
  当检测Array实例时, Array.isArray 优于 instanceof,因为Array.isArray能检测iframes.

* includes 比 indexOf好在哪？
  includes可以检测NaN，indexOf不能检测NaN，includes内部使用了Number.isNaN对NaN进行了匹配
  includes的查找速度比indexOf快很多

* fill
  fill方法使用给定值，填充一个数组。

* flat()，flatMap()
  用于将嵌套的数组“拉平”，变成一维的数组。该方法返回一个新数组，对原数据没有影响。
  flatMap()方法对原数组的每个成员执行一个函数（相当于执行Array.prototype.map()），然后对返回值组成的数组执行flat()方法。

* at()
  如果要引用数组的最后一个成员，不能写成arr[-1]，只能使用arr[arr.length - 1]。
  arr.at(-2) // 130

* 实例方法：copyWithin()
  数组实例的copyWithin()方法，在当前数组内部，将指定位置的成员复制到其他位置（会覆盖原有成员），然后返回当前数组。也就是说，使用这个方法，会修改当前数组。
  [1, 2, 3, 4, 5].copyWithin(0, 3, 5) //  [4, 5, 3, 4, 5]
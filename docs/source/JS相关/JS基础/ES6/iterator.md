```ts
// Iterator 迭代器

/**
 * Iterator
 * Iterator 的作用有三个：
 *    一是为各种数据结构，提供一个统一的、简便的访问接口；
 *    二是使得数据结构的成员能够按某种次序排列；
 *    三是 ES6 创造了一种新的遍历命令for...of循环，Iterator 接口主要供for...of消费。
    Iterator 的遍历过程是这样的。
    （1）创建一个指针对象，指向当前数据结构的起始位置。也就是说，遍历器对象本质上，就是一个指针对象。
    （2）第一次调用指针对象的next方法，可以将指针指向数据结构的第一个成员。
    （3）第二次调用指针对象的next方法，指针就指向数据结构的第二个成员。
    （4）不断调用指针对象的next方法，直到它指向数据结构的结束位置。
    每一次调用next方法，都会返回数据结构的当前成员的信息。具体来说，就是返回一个包含value和done两个属性的对象。其中，value属性是当前成员的值，done属性是一个布尔值，表示遍历是否结束。
 * 
 * 
 * ES6中数据结构：数组（Array）和对象（Object），Map和Set
 * 
 * 除了具有next()方法，还可以具有return()方法和throw()方法。
 * return()方法的使用场合是，如果for...of循环提前退出（通常是因为出错，或者有break语句），就会调用return()方法。如果一个对象在完成遍历前，需要清理或释放资源，就可以部署return()方法。
 * 
 * Iterator 和 for...of 循环
*/

// 创建一个迭代器
function makeInterator(arr) {
  var nextIndex = 0;
  return {
    next: function() {
      if (nextIndex < arr.length) {
        return { value: arr[nextIndex++] , done:false}
      }else{
        return { value: undefined , done:true}
      }
    }
  }
}

let it = makeInterator(['a','b','c']) //获取一个迭代器
//手动执行迭代器
it.next() // { value: "a", done: false }
it.next() // { value: "b", done: false }
it.next() // { value: undefined, done: true }




//利用 for...of... 自动执行迭代器
/**
 * ES6 规定，默认的 Iterator 接口部署在数据结构的Symbol.iterator属性，
 * 或者说，一个数据结构只要具有Symbol.iterator属性，就可以认为是“可遍历的”（iterable）。
 * 
 * 原生具备 Iterator 接口的数据结构如下。
 *      Array 
 *      Map 
 *      Set 
 *      String 
 *      TypedArray 
 *      函数的arguments对象 
 *      NodeList对象
 * 
 * *** 执行Symbol.iterator属性会返回一个迭代器
 * 
*/
// 给普通对象 添加迭代功能，需自定义iterator函数 ，即可以 for...of... 
const obj = {
  'a':1,
  'b':1,
  'c':1,
  [Symbol.iterator] : function () {
    return {
      next: function () {
        return {
          value: 1,
          done: true
        };
      }
    };
  }
};
for (const item of obj) {
  console.log(item); // { value: 1, done: true }
}

// 利用数组Array的迭代器给普通obj添加迭代功能
let iterable = {
  a: 'a',
  b: 'b',
  c: 'c',
  length: 3,
  [Symbol.iterator]: Array.prototype[Symbol.iterator]
};
for (let item of iterable) {
  console.log(item); // undefined, undefined, undefined
}

// 利用数组Array的迭代器给 类似数组的 普通obj添加迭代功能
let iterable = {
  0: 'a',
  1: 'b',
  2: 'c',
  length: 3,
  [Symbol.iterator]: Array.prototype[Symbol.iterator]
};
for (let item of iterable) {
  console.log(item); // 'a', 'b', 'c'
}


// 其他自动执行迭代器的场合
  // 1、解构赋值
      let set = new Set().add('a').add('b').add('c');
      let [x,y] = set; // x='a'; y='b'
      let [first, ...rest] = set; // first='a'; rest=['b','c'];
  // 2、扩展运算符
        // 例一
        var str = 'hello';
        [...str] //  ['h','e','l','l','o']
        // 例二
        let arr = ['b', 'c'];
        ['a', ...arr, 'd']
        // ['a', 'b', 'c', 'd']
        // 只要某个数据结构部署了 Iterator 接口，就可以对它使用扩展运算符，将其转为数组。
        //let arr = [...iterable];
  // 3、yield* (不会自动执行它产生的迭代器)
        let generator = function* () {
          yield 1;
          yield* [2,3,4]; // yield*后面跟的是一个可遍历的结构，它会调用该结构的遍历器接口。
          yield 5;
        };
        var iterator = generator(); // 执行yield*函数，返回一个迭代器
        iterator.next() // { value: 1, done: false }
        iterator.next() // { value: 2, done: false }
        iterator.next() // { value: 3, done: false }
        iterator.next() // { value: 4, done: false }
        iterator.next() // { value: 5, done: false }
        iterator.next() // { value: undefined, done: true }
      //可利用其他自执行方法来执行该迭代器
      // eg: [...iterator] 、 for...of...

  // 4、其他场合
        // 由于数组的遍历会调用遍历器接口，所以任何接受数组作为参数的场合，其实都调用了遍历器接口。下面是一些例子。
          // for...of
          // Array.from()
          // Map(), Set(), WeakMap(), WeakSet()（比如new Map([['a',1],['b',2]])）
          // Promise.all()
          // Promise.race()

```
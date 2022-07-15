[[toc]]
## ES6 Array 新增的特性

### 扩展运算符
1. ES6通过扩展元素符...，好比 rest 参数的逆运算，将一个数组转为用逗号分隔的参数序列
```ts
console.log(1, ...[2, 3, 4], 5)
// 1 2 3 4 5
```

2. 扩展运算符可以与解构赋值结合起来，用于生成数组
```ts
const [first, ...rest] = [1, 2, 3, 4, 5];
first // 1
rest  // [2, 3, 4, 5]

const [first, ...rest] = [];
first // undefined
rest  // []
```

3. 定义了遍历器（Iterator）接口的对象，都可以用扩展运算符转为真正的数组
```ts
let nodeList = document.querySelectorAll('div');
let array = [...nodeList];

let map = new Map([
  [1, 'one'],
  [2, 'two'],
  [3, 'three'],
]);

let arr = [...map.keys()]; // [1, 2, 3]
```
如果对没有 Iterator 接口的对象，使用扩展运算符，将会报错
```ts
const obj = {a: 1, b: 2};
let arr = [...obj]; // TypeError: Cannot spread non-iterable object
```

### 构造函数新增的方法
1. Array.from(): 将两类对象转为真正的数组：类似数组的对象和可遍历（iterable）的对象（包括 ES6 新增的数据结构 Set 和 Map）
```ts
let arrayLike = {
    '0': 'a',
    '1': 'b',
    '2': 'c',
    length: 3
};
let arr2 = Array.from(arrayLike); // ['a', 'b', 'c']
```
还可以接受第二个参数，用来对每个元素进行处理，将处理后的值放入返回的数组


2. Array.of() : 用于将一组值，转换为数组
```ts
Array.of(3, 11, 8) // [3,11,8]
```
没有参数的时候，返回一个空数组

当参数只有一个的时候，实际上是指定数组的长度

参数个数不少于 2 个时，Array()才会返回由参数组成的新数组

### 实例对象新增的方法
1. copyWithin() : 将指定位置的成员复制到其他位置（会覆盖原有成员），然后返回当前数组，参数如下：
    * target（必需）：从该位置开始替换数据。如果为负值，表示倒数。
    * start（可选）：从该位置开始读取数据，默认为 0。如果为负值，表示从末尾开始计算。
    * end（可选）：到该位置前停止读取数据，默认等于数组长度。如果为负值，表示从末尾开始计算。
    ```ts
    [1, 2, 3, 4, 5].copyWithin(0, 3) // 将从 3 号位直到数组结束的成员（4 和 5），复制到从 0 号位开始的位置，结果覆盖了原来的 1 和 2
    // [4, 5, 3, 4, 5] 
    ```

2. find()、findIndex()
    * find()用于找出第一个符合条件的数组成员
    * findIndex返回第一个符合条件的数组成员的位置，如果所有成员都不符合条件，则返回-1
    * 参数是一个回调函数，接受三个参数依次为当前的值、当前的位置和原数组
    * 这两个方法都可以接受第二个参数，用来绑定回调函数的this对象。
    ```ts
    [1, 5, 10, 15].find(function(value, index, arr) {
      return value > 9;
    }) // 10
    [1, 5, 10, 15].findIndex(function(value, index, arr) {
      return value > 9;
    }) // 2
    function f(v){
      return v > this.age;
    }
    let person = {name: 'John', age: 20};
    [10, 12, 26, 15].find(f, person);    // 26
    ```

3. fill() : 使用给定值，填充一个数组
    * 还可以接受第二个和第三个参数，用于指定填充的起始位置和结束位置
    * 注意，如果填充的类型为对象，则是浅拷贝
    ```ts
    ['a', 'b', 'c'].fill(7)
    // [7, 7, 7]

    new Array(3).fill(7)
    // [7, 7, 7]

    ['a', 'b', 'c'].fill(7, 1, 2)
    // ['a', 7, 'c']
    ```

4. entries()，keys()，values():keys()是对键名的遍历、values()是对键值的遍历，entries()是对键值对的遍历
    ```ts
    or (let index of ['a', 'b'].keys()) {
      console.log(index);
    }
    // 0
    // 1

    for (let elem of ['a', 'b'].values()) {
      console.log(elem);
    }
    // 'a'
    // 'b'

    for (let [index, elem] of ['a', 'b'].entries()) {
      console.log(index, elem);
    }
    // 0 "a"
    ```


5. includes(): 用于判断数组是否包含给定的值
    * 方法的第二个参数表示搜索的起始位置，默认为0
    * 参数为负数则表示倒数的位置
    ```ts
    [1, 2, 3].includes(2)     // true
    [1, 2, 3].includes(4)     // false
    [1, 2, NaN].includes(NaN) // true

    [1, 2, 3].includes(3, 3);  // false
    [1, 2, 3].includes(3, -1); // true
    ```

6. flat()，flatMap(): 将数组扁平化处理，返回一个新数组，对原数据没有影响
    ```ts
    [1, 2, [3, 4]].flat()
    // [1, 2, 3, 4]
    ```
    
    flat()默认只会“拉平”一层，如果想要“拉平”多层的嵌套数组，可以将flat()方法的参数写成一个整数，表示想要拉平的层数，默认为1
    ```ts
    [1, 2, [3, [4, 5]]].flat()
    // [1, 2, 3, [4, 5]]

    [1, 2, [3, [4, 5]]].flat(2)
    // [1, 2, 3, 4, 5]
    ```

    flatMap()方法对原数组的每个成员执行一个函数相当于执行Array.prototype.map()，然后对返回值组成的数组执行flat()方法。该方法返回一个新数组，不改变原数组
    ```ts
    // 相当于 [[2, 4], [3, 6], [4, 8]].flat()
    [2, 3, 4].flatMap((x) => [x, x * 2])
    // [2, 4, 3, 6, 4, 8]
    ```

    flatMap()方法还可以有第二个参数，用来绑定遍历函数里面的this

[[toc]]

### 数据结构
  * Set是一种叫做集合的数据结构，Map是一种叫做字典的数据结构

  * 什么是集合？什么又是字典？
    ::: warning
    集合: 是由一堆无序的、相关联的，且不重复的内存结构【数学中称为元素】组成的组合

    字典 : 是一些元素的集合。每个元素有一个称作key 的域，不同元素的key 各不相同
    ::: 

  * 区别？
    ::: warning
    共同点：集合、字典都可以存储不重复的值
    
    不同点：集合是以[值，值]的形式存储元素，字典是以[键，值]的形式存储
    :::

### Set 数据结构
  1. Set是es6新增的数据结构，类似于数组，但是成员的值都是唯一的，没有重复的值，我们一般称为集合

  2. Set本身是一个构造函数，用来生成 Set 数据结构
      ```ts
      const s = new Set();
      ```

  3. 增删改查
      * s.add(): 添加某个值，返回 Set 结构本身
      * s.delete()
      * s.has()
      * s.clear()

  4. 遍历
      * s.keys()：返回键名的遍历器
      * s.values()：返回键值的遍历器
      * s.entries()：返回键值对的遍历器
      * s.forEach()：使用回调函数遍历每个成员，forEach()用于对每个成员执行某种操作，没有返回值，键值、键名都相等，同样的forEach方法有第二个参数，用于绑定处理函数的this
      ::: warning
      扩展运算符和Set 结构相结合实现数组或字符串去重
      :::

  

### Map 数据结构
  1. Map类型是键值对的有序列表，而键和值都可以是任意类型

  2. Map本身是一个构造函数，用来生成 Map 数据结构
  ```ts
  const m = new Map()
  ```

  3. 增删改查
    * m.size 属性 : 返回 Map 结构的成员总数
    * m.set() : 设置键名key对应的键值为value，然后返回整个 Map 结构,同时返回的是当前Map对象，可采用链式写法
    * m.get()
    * m.has()
    * m.delete()
    * m.clear()

  4. 遍历
    * m.keys()：返回键名的遍历器
    * m.values()：返回键值的遍历器
    * m.entries()：返回所有成员的遍历器
    * m.forEach()：遍历 Map 的所有成员, 遍历顺序就是插入顺序

### WeakSet与WeakMap 
1. 在API中WeakSet与Set有两个区别：
    * 没有遍历操作的API
    * 没有size属性
    * WeakSet只能成员只能是引用类型，而不能是其他类型的值

2. 在API中WeakMap与Map有两个区别：
    * 没有遍历操作的API
    * 没有clear清空方法
    * WeakMap的键名所指向的对象，一旦不再需要，里面的键名对象和所对应的键值对会自动消失，不用手动删除引用

3. 举个场景例子：

在网页的 DOM 元素上添加数据，就可以使用WeakMap结构，当该 DOM 元素被清除，其所对应的WeakMap记录就会自动被移除
```ts
const wm = new WeakMap();

const element = document.getElementById('example');

wm.set(element, 'some information');
wm.get(element) // "some information"
```
注意：WeakMap 弱引用的只是键名，而不是键值。键值依然是正常引用

下面代码中，键值obj会在WeakMap产生新的引用，当你修改obj不会影响到内部
```ts
const wm = new WeakMap();
let key = {};
let obj = {foo: 1};

wm.set(key, obj);
obj = null;
wm.get(key)
// Object {foo: 1}
```
[[toc]]
## new 
  ### 总结
  1. 创建一个对象
  2. 原型链继承公共属性 Object.create(proto)
  3. call继承私有属性
  4. 函数有返回值且是对象，返回指定对象；否则返回新对象

  ### 原理
  1. 创建一个新对象；  
      * 对象字面量：obj = {}
      * obj = new Object()
      * obj = Obejct.create() 。性能更好，推荐
  2. 这个对象继承了构造函数的原型链（公共属性和方法）；
      * 将obj的原型指向构造函数的原型对象，即：obj.__proto__ = Constructor.prototype （该方式不推荐）
  3. 这个对象继承了构造函数的私有属性和方法；
      * 构造函数绑定this到obj(即构造函数的this指向obj)，并执行
  4. 判断构造函数返回值，如果有返回值res且为对象类型，则直接返回res；否则返回新对象;
      * 因此构造函数也可以带有返回值，但是这会导致new的结果不同。

  ### 手写一个new
  ```ts
  //方案一： 
    function new_operator(_constructor, ...args) {
      // ① 创建新对象
      let obj = {}
      
      // ② 构建obj的原型
      obj.__proto__ = _constructor.prototype
      // Object.setPrototypeOf(obj,_constructor.prototype) 
      
      // ③ 绑定this到obj
      let res = _constructor.apply(obj, args)
      
      // ④ 返回值判断。（注：res值为对象，即 Object, Array, Function 类型，才可被返回）
      return res instanceof Object ? res : obj
    }
  ```

  ::: warning 缺点
  以上实现，在构建新对象obj的原型引用时，直接操作obj上的 __proto__。
  会存在以下问题：
  __proto__ 属性已经在最新的Web标准中删除，考虑操作安全，不推荐使用。
  如果想直接操作原型引用，推荐使用 Object.getPrototypeOf/Reflect.getPrototypeOf 和Object.setPrototypeOf/Reflect.setPrototypeOf
  上面两种方式操作对象的原型[[Prototype]]都是一个缓慢的操作。考虑性能，应避免。
  
  推荐使用Ojbect.create() 创建一个新的且可以继承[[Prototype]]的对象。

  箭头函数没有this，所以不能继承构造函数的私有属性和方法，所以不能被new
  :::

  ```ts
  //方案二：
    //用Object.create()来代替obj.__proto__来继承原型对象
    function new_operator_2(_constructor, ...args) {
      // ① 创建新对象obj，并关联obj原型到构造函数原型对象上
      let obj = Object.create(_constructor.prototype)
      
      // ② 执行构造函数，且绑定this到新对象Obj上，实现继承。同时接受返回值res
      let res = _constructor.apply(obj, args)
      
      // ③ 返回值判断
      return res instanceof Object ? res : obj
    }
  ```
  ::: tip 最佳继承
  利用Object.create快速且安全的继承了构造函数的原型对象
  ::: 

  ```ts
  //方案三：
  // function createObj(_constructor) {
  function createObj() {
    // 先创建一个空对象
    var obj = new Object();
    // 获得构造函数
    var constructorFn = [].shift.call(arguments); // 利用数组的shift方法，参数数组第一个即为构造函数_constructor
    //链接到构造函数的原型，继承构造函数公共属性和方法
    Object.setPrototypeOf(obj, constructorFn.prototype);
    //改变this指向，继承构造函数的私有属性和方法
    var result = constructorFn.apply(obj, arguments); 
    // 如果构造函数中没有返回其它对象，那么返回this，即创建的这个的新对象；否则，返回构造函数中返回的对象
    return typeof result == "object" && result != null ? result : obj;
  }
  ```
  ::: tip 参数优化
  利用Array.slice获取构造函数，同时arguments留下剩余参数，优化参数处理方式
  ::: 


  ### Object.create(Obj.prototype)和new Obj()的区别
  ```ts
  /**
  * Object.create的实现方法
  *  从Object.create与new的实现方式可以看出
        Object.create的母类是一个新的空的构造函数，父类是传进来的对象；所以它没有继承母类，但继承了父类
        new的母类是指定构造函数，父类是该构造函数的原型对象；所以它继承了母类，同时继承了父类
  **/ 
  Object.create =  function (o) {
    var F = function (){}
    F.prototype = o
    return new F()
  }
  ```
  ::: tip 结论
  1. Object.create(Obj.prototype) ：
  * 创建了一个空对象，并且空对象obj的原型指向了Obj的原型对象，也就是说obj继承了Obj的原型链（拥有父级/公共的属性和方法），但是没有继承构造函数Obj（母级/私有）的属性和方法；
  * 这个obj一定是空对象
  2. new Obj(): 
  * 创建了一个对象，并且原型指向了Obj的原型对象，也就是说obj继承了Obj的原型链（拥有父级/公共的属性和方法），同时继承构造函数Obj（母级/私有）的属性和方法；
  * 这个obj不一定是空对象，可以有属性和方法（继承自构造函数）
  :::


  ### 构造函数为箭头函数的new？
  ```ts
  /**
  * 构造函数为箭头函数的new？
      普通函数创建时，引擎会按照特定的规则为这个函数创建一个prototype属性（指向原型对象）。
      默认情况下，所有原型对象自动获得一个名为 constructor 的属性，指回与之关联的构造函数。
  */
  function Person(){
    this.age = 18;
  }
  Person.prototype
  /**
  {
    constructor: ƒ Foo()
    __proto__: Object
  }
  **/

  /**
  * 创建箭头函数时，引擎不会为其创建prototype属性，箭头函数没有constructor供new调用，因此使用new调用箭头函数会报错！
  * 构造函数没有prototype属性，顾不能继承，所以应该报错
  */
  const Person = ()=>{}
  new Person()//TypeError: Foo is not a constructor
  ```
  ::: tip 结论
  new一个构造函数时，会获取构造函数的prototype属性，
  而箭头函数在创建时，并不会创建prototype属性，顾不能new，new它会报错
  :::
### this的理解
  1. 关于this
      * this是一个很特别的关键字，被自动定义在所有函数的作用域中。
      * 当一个函数被调用时，会创建一个活动记录(执行上下文)。这个记录会包含函数在哪里被调用(调用栈)、函数的调用方法、传入的参数等信息。this 就是记录的其中一个属性，会在函数执行的过程中用到。[](https://juejin.cn/post/7039601703447953416)

  2. this的指向
      1. this的指向是在函数执行前，即预编译阶段确认的
          * 全局环境下，this指向window或其他全局活动对象即全局作用域；
          * 函数环境下，this指向其调用者；

      2. 普通函数与箭头函数的this指向区别：
          * 普通函数时，谁调用，指向谁；无谁调用，指向window
          * 箭头函数时，this指向定义时所在环境上下文

              ::: tip 总结
              * 箭头函数在使用时，需要注意以下几点:
                1. 函数体内的this对象，继承的是外层代码块的this。箭头函数在创建执行上下文的时候没有创建this，this的查询时执行上下文栈往上查的。
                2. 不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误。
                3. 不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用 rest 参数代替。
                4. 不可以使用yield命令，因此箭头函数不能用作 Generator 函数。
                5. 箭头函数没有自己的this，所以不能用call()、apply()、bind()这些方法去改变this的指向.
              :::
  
      3. 严格模式下，函数内，this指向undefined
      ::: details 代码
        ```ts
        function foo () {
            "use strict";
            console.log(this.a);
          }
          var a = 10;
          foo();  // TypeError: this is undefined
        ```
      :::

  3. this的绑定
:::: code-group
::: code-group-item 隐式绑定
  * 对象内部
  ```ts
  /**
   * 隐式绑定
  * 当函数引用有上下文对象时， 隐式绑定规则会把函数调用中的this绑定到这个上下文对象。
  */
  function foo () {
    console.log(this.a);
  };
  var obj = {
    a: 100,
    foo: foo
  };
  var a = 10;
  obj.foo();  // 100
  ```

  * new 构造函数
  ```ts
  /**
  * new 绑定
  * 使用new来调用函数，会自动执行如下操作：
      1.创建一个空对象，构造函数中的this指向这个空对象
      2.这个新对象被执行 [[Prototype]] 连接
      3.执行构造函数方法，属性和方法被添加到this引用的对象中
      4.如果构造函数中没有返回其它对象，那么返回this，即创建的这个的新对象，否则，返回构造函数中返回的对象。
  * 
  * 使用new 来调用foo(...)时，我们会构造一个新对象并把它绑定到foo(...)调用中的this上。
  */
  function foo (a) {
    this.a = a;
    return 1;
  }
  function bar (a) {
    this.a = a;
    return {};
  }
  var a = 'global';
  var f1 = new foo(100);
  var b1 = new bar(2);
  console.log(f1.a);    // 100
  console.log(b1.a);    // undefined
  ```

  * 箭头函数
  ```ts
  /**
  * ES6 箭头函数
  * 箭头函数不使用this的四种标准规则，里面的this是由外层作用域来决定的
  * （ 箭头函数中没有 this 绑定，必须通过查找作用域链来决定其值，
  *    如果箭头函数被非箭头函数包含，则 this 绑定的是最近一层非箭头函数的 this，
  *   否则，this 为 undefined。 ），
  * 且指向函数定义时的this而非执行时。
  */
  var a = 10;
  var obj = {
    a: 100,
    foo1: () => {
      console.log(this.a);
    },
    foo2: function () {
      console.log(this.a);
      return () => {
        console.log(this.a);
      };
    },
    foo3: function () {
      setTimeout(() => {
        console.log(this.a);
      });
    },
  };
  obj.foo1(); // 10
  obj.foo2()(); // 100 100
  obj.foo3();  // 100
  ```

:::
::: code-group-item 显示绑定
  * call\apply\bind
  ```ts
  /**
   * 显式绑定
  * 相对隐式绑定，this值在调用过程中会动态变化，可是我们就想绑定指定的对象，这时就用到了显式绑定。
      显式绑定主要是通过改变对象的prototype关联对象，可以通过call()、apply()方法直接指定this的绑定对象
      两者区别： call接收若干个参数，而apply接收的是一个数组
  * 
      bind硬绑定，与apply，call区别：
      使用.call()或者.apply()的函数是会直接执行的
      bind()会返回一个硬编码的新函数，会把你指定的参数设置为this的上下文并调用原始函数，需要手动调用才会执行
  */
  function foo () {
    console.log(this.a);
  }
  var obj1 = { a: 1, foo: foo };
  var a = 'global';
  var obj2 = {a: 2, foo: foo};
  var fn = obj2.foo;
  var obj3 = {a: 3, foo: foo};
  foo();        // 'global'
  foo.call(obj1);    // this指向obj1，  输出1
  fn.apply(obj2);    // this指向obj2，  输出2
  fn.call(undefined);    // this指向window，  输出global
  obj2.foo.call(obj1);  // this指向obj1，  输出1
  obj1.foo.bind(obj2)();    // this硬绑定为obj2, 输出2
  obj1.foo.bind(obj2).call(obj3);    // this硬绑定为obj2, 输出2
  ```

:::
::::




    

### 从ECMAScript规范解读this
<!-- 参考文章：https://github.com/mqyqingfeng/Blog/issues/7 -->
  1. this指针
    这也是JS的核心知识之一，由于内容过多，这里就不展开，仅提及部分
    * 注意：this是执行上下文环境的一个属性，而不是某个变量对象的属性

  2. 因此，即总结:
      1. this是没有一个类似搜寻变量的过程
      2. 当代码中使用了this，这个 this的值就直接从执行的上下文中获取了，而不会从作用域链中搜寻
      3. this的值只取决预进入上下文时的情况

      所以经典的例子：
      ```ts
        var baz = 200;
        var bar = {
            baz: 100,
            foo: function() {
                console.log(this.baz);
            }
        };
        var foo = bar.foo;
        // 进入环境：global
        foo(); // 200，严格模式中会报错，Cannot read property 'baz' of undefined
        // 进入环境：global bar
        bar.foo(); // 100
      ```

      就要明白了上面this的介绍，上述例子很好理解


  3. 参考文章重要片段
      <!-- 参考文章：https://www.cnblogs.com/TomXu/archive/2012/01/12/2308594.html -->
      任何对象都可以作为上下文的this值。我想再次澄清对与ECMAScript中，与执行上下文相关的一些描述——特别是this的误解。通常，this 被错误地，描述为变量对象的属性。最近比如在这本书中就发现了(尽管书中提及this的那一章还不错)。 请牢记：

      a this value is a property of the execution context, but not a property of the variable object.
      this是执行上下文环境的一个属性，而不是某个变量对象的属性
      * 这个特点很重要，因为和变量不同，this是没有一个类似搜寻变量的过程。当你在代码中使用了this,这个 this的值就直接从执行的上下文中获取了，而不会从作用域链中搜寻。this的值只取决中进入上下文时的情况。

      顺便说一句，和ECMAScript不同，Python有一个self的参数，和this的情况差不多，但是可以在执行过程中被改变。在ECMAScript中，是不可以给this赋值的，因为，还是那句话，this不是变量。

      在global context(全局上下文)中，this的值就是指全局这个对象，这就意味着，this值就是这个变量本身。
      ```ts
      var x = 10;
      
      console.log(
        x, // 10
        this.x, // 10
        window.x // 10
      );
      ```
      * 在函数上下文[function context]中，this会可能会根据每次的函数调用而成为不同的值.this会由每一次caller提供,caller是通过调用表达式[call expression]产生的（也就是这个函数如何被激活调用的）。例如，下面的例子中foo就是一个callee，在全局上下文中被激活。下面的例子就表明了不同的caller引起this的不同。

### 总结：
  1. this是执行上下文的属性，不是活动对象的属性
  2. this的指向结论是由调用者决定的
  3. this的指向原理就是函数被激活的时候，会生成一个caller，this就指向这个caller，这个caller简单的可以理解为是.前面的对象
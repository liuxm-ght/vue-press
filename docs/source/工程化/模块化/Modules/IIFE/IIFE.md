### IIFE 

#### 全局Function模式
  1. 全局Function模式
  ```ts
    eg:
      module1.js (定义一个模块1)
        //数据
        let data1 = 'module one data'
        //操作数据的函数
        function foo() {
          console.log(`foo() ${data1}`)
        }
        function bar() {
          console.log(`bar() ${data1}`)
        }

      module2.js (定义一个模块2)
        let data2 = 'module two data';
        function foo() {  //与模块1中的函数冲突了
          console.log(`foo() ${data2}`)
        }

      test.html (去使用定义好的模块1和模块2)
        //同步引入，若函数冲突，则后面覆盖前面
        < script type="text/javascript" src="module1.js"></>
        < script type="text/javascript" src="module2.js"></>
        < script type="text/javascript">
          foo()   //foo() module two data
          bar()   //bar() module one data
        </>
  ```

  2. 说明：
    全局函数模式: 将不同的功能封装成不同的全局函数
    问题: Global被污染了, 很容易引起命名冲突（比如模块中的data1 data2都是全局变量）



#### namespace模式
  1. namespace模式
  ```ts
    module1.js (定义一个模块1)
      let moduleOne = {
        data: 'module one data',
        foo() {
          console.log(`foo() ${this.data}`)
        },
        bar() {
          console.log(`bar() ${this.data}`)
        }
      }

      module2.js (定义一个模块2)
        let moduleTwo = {
          data: 'module two data',
          foo() {
            console.log(`foo() ${this.data}`)
          },
          bar() {
            console.log(`bar() ${this.data}`)
          }
        }
      test.html (去使用定义好的模块1和模块2)
        < script type="text/javascript" src="module1.js"></>
        < script type="text/javascript" src="module2.js"></>
        < script type="text/javascript">
          moduleOne.foo()   //foo() module one data
          moduleOne.bar()   //bar() module one data
          moduleTwo.foo()  //foo() module two data
          moduleTwo.bar()  //bar() module two data
          moduleOne.data = 'update data' //能直接修改模块内部的数据
          moduleOne.foo()  //foo() update data
        </>
  ```
  2. 说明：
    namespace模式: 简单对象封装
    作用: 减少了全局变量 (如两个模块的 data 都不是全局变量了，而是对象的某一个属性 )
    问题: 不安全，可以直接修改模块内部的数据

#### IIFE模式
  1. IIFE模式
  ```ts
      module1.js (定义一个模块1)
        (function (window) {
          //数据
          let data = 'IIFE module data'
          //操作数据的函数
          function foo() { //用于暴露的函数
            console.log(`foo() ${data}`)
          }
          function bar() {//用于暴露的函数
            console.log(`bar() ${data}`)
            otherFun() //内部调用
          }
          function otherFun() { //内部私有的函数
            console.log('privateFunction go otherFun()')
          }
          //暴露foo函数和bar函数
          window.moduleOne = {foo, bar}
        })(window)

      test.html (去使用定义好的模块1)
        < script type="text/javascript" src="module1.js"></>
        < script type="text/javascript">
          moduleOne.foo()  //foo() IIFE module data
          moduleOne.bar()  //bar() IIFE module data    privateFunction go otherFun()
          //moduleOne.otherFun()  //报错，moduleOne.otherFun is not a function
          console.log(moduleOne.data) //undefined 因为我暴露的moduleOne对象中无data
          moduleOne.data = 'xxxx' //不是修改的模块内部的data，而是在moduleOne新增data属性
          moduleOne.foo() //验证内部的data没有改变  还是会输出 foo() IIFE module data
        </>
  ```

  2. 说明：
    IIFE模式: 匿名函数自调用(闭包)
    IIFE : immediately-invoked function expression(立即调用函数表达式)
    作用: 数据是私有的, 外部只能通过暴露的方法操作
    问题: 如果当前这个模块依赖另一个模块怎么办? 见下面IIFE增强版的（模块依赖于jQuery）

####  IIFE模式增
  1. IIFE模式增强
  引入jquery到项目中
  ```ts
  module1.js (定义一个模块1)
    (function (window,$) {
      //数据
      let data = 'IIFE Strong module data'

      //操作数据的函数
      function foo() { //用于暴露的函数
        console.log(`foo() ${data}`)
        $('body').css('background', 'red')
      }

      function bar() {//用于暴露的函数
        console.log(`bar() ${data}`)
        otherFun() //内部调用
      }

      function otherFun() { //内部私有的函数
        console.log('privateFunction go otherFun()')
      }

      //暴露foo函数和bar函数
      window.moduleOne = {foo, bar}
    })(window,jQuery)

  test.html (去使用定义好的模块1)
    <!--引入的js必须有一定顺序-->
    < script type="text/javascript" src="jquery-1.10.1.js"></>
    < script type="text/javascript" src="module1.js"></>
    < script type="text/javascript">
      moduleOne.foo()  //foo() IIFE Strong module data  而且页面背景会变色
    </>
  ```

  2. 说明：
    IIFE模式增强 : 引入依赖
    这就是现代模块实现的基石。其实很像了，有引入和暴露两个方面。
    存在的问题：一个页面需要引入多个JS的问题
    ```ts
        < script type="text/javascript" src="module1.js"></>
        < script type="text/javascript" src="module2.js"></>
        < script type="text/javascript" src="module3.js"></>
        < script type="text/javascript" src="module4.js"></>
    ```
      请求过多：一个script标签就是一次请求
      依赖模糊：看不出来谁依赖着谁？哪些模块是有依赖关系的，很难看出来。
      难以维护：内部依赖关系混乱也就难以维护啦

    <!-- 链接：https://juejin.cn/post/6844903792987602958 -->

  3. 总结：
    IIFE匿名函数自执行
      其核心是闭包，函数内部属性私有化，通过return向外暴露数据
      并且module是挂在window上的，所以可以通过window拿到所有IIFE模块
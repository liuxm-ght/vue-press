```ts
//Generator 函数的异步应用

/**
 * 传统方法
 *  ES6 诞生以前，异步编程的方法，大概有下面四种。
 *    回调函数
 *    事件监听
 *    发布/订阅
 *    Promise 对象
 * */


/**
 * 进阶方法
 *    Thunk 函数是自动执行 Generator 函数的一种方法。
 */

  //Thunk 函数
    // 传值调用和传名调用，哪一种比较好？
    // 回答是各有利弊。传值调用比较简单，但是对参数求值的时候，实际上还没用到这个参数，有可能造成性能损失。
    function f(m) {
      return m * 2;
    }
    f(x + 5);
    
    // 等同于
    var thunk = function () {
      return x + 5;
    };
    function f(thunk) {
      return thunk() * 2;
    }
  
  //JavaScript 语言的 Thunk 函数
    //JavaScript 语言是传值调用，它的 Thunk 函数含义有所不同。
    //在 JavaScript 语言中，Thunk 函数替换的不是表达式，而是多参数函数，将其替换成一个只接受回调函数作为参数的单参数函数。
    //就是curry函数简版
      // ES6版本
        const Thunk = function(fn) {
          return function (...args) {
            return function (callback) {
              return fn.call(this, ...args, callback);
            }
          };
        };
        var readFileThunk = Thunk(fs.readFile);
        readFileThunk(fileA)(callback);
      // 下面是另一个完整的例子。
        function f(a, cb) {
          cb(a);
        }
        const ft = Thunk(f);
        ft(1)(console.log) // 1
    
  //手动执行
    // 回到解决generator函数处理流程管理问题中遇到的不能处理异步流程的问题
    // 由于递归或while判断!taskObj.done都不能知道异步函数是否执行完成，所以都不知道什么时候改变done
    // 为了保证前一步执行完成，才执行后一步
        // 还是以readFile为例子，，，此时还是手动执行
          var fs = require('fs');
          var readFileThunk = Thunk(fs.readFile); // 柯力化fs.readFile函数
          var gen = function* () { // 定义一个生成器
            var r1 = yield readFileThunk('/etc/xxx')
            console.log(r1.toString());
            var r2 = yield readFileThunk('/etc/yyy')
            console.log(r2.toString());
          }
          var g = gen() //返回一个迭代器
          // 自动执行这个迭代器
          g.next().value(function(err,data1) { //g.next().value为readFileThunk返回的函数 ；callback 为readFIle的回调函数
            // 在这里可以处理下一个next的执行
            if (err) throw err;
            g.next(data1).value(function(err,data2) { //r1的结果是data1
              if (err) throw err;
              g.next(data2);//r1的结果是data2
            })
          })
      /**
       * 上面实现的逻辑是这样的：
       *    1. 异步流程管理的需求真是，需要执行完上一步，然后将结果给下一步执行，一直传递下去
       *    2. 而生成器的原理是返回一个迭代器，迭代器可以next一步一步执行代码，返回的状态中value为当前执行步骤的结果，而yield的值是next传递的参数
       *    3. thunk的作用是将fs.readFile函数柯力化，使其可以分步传参，第一步保存第一个参数, 第二步保存参数callback函数
       *    4. 那么就可以自定义在什么时候执行callback函数了
       *    5. 在第一个next之后，执行value()开始请求异步数据，请求完毕调用回调，执行第一个readFIle的callback函数，在其回调里继续执行下一个next，以此类推就达到了异步流程管理的效果
       *  总结，主要是使得callback的执行时机是可控制的，通过thunk使其可脱离原位置其执行，通过generator使其可以在函数外执行
       * */ 

  //自动执行
    //Thunk 函数真正的威力，在于可以自动执行 Generator 函数
    function run(gfn) {
      var gen = gfn() //获取迭代器
      function next(err,data) {
        var result = gen.next(data) // 指针对象
        if (result.done) return
        result.value(next) //result.value不是callback函数，是科利化返回的函数，next才是fs.readFile的callback函数
      }
      next()
    }
    function* g(){
      // 需要yield 后面的函数是一个thunk函数，或执行结果返回的value是个函数
      var f1 = yield readFileThunk('fileA');//readFileThunk('fileA')返回一个函数，参数是callback，此函数当做是状态的value，在自执行函数中把next当做是此callback函数，交给value去执行
      var f2 = yield readFileThunk('fileB');
      // ...
      var fn = yield readFileThunk('fileN');
    };
    run(g);
    // 总结：生成器来处理异步函数时，先将异步函数柯力化处理，好处是分步来执行异步函数
    // 分成两部步骤：第一步，状态机的value是 启动异步请求函数
    // 第二步，状态机自执行run函数的next当做是 异步请求的callback函数


    //基于 Promise 对象的自动执行
    function runPromise(gfn) { //自执行器 作用：使迭代器自动执行
      var gen = gfn()
      function next(data) { // 传值写法
        var result = gen.next(data)
        if (result.done) return result.value
        result.value().then(function(data) {
          next(data)
        }) 
      }
      next() 
    }
    function* gPromise() { //生产器 作用：生成迭代器
      var f1 = yield readFileThunk('fileA');
      var f2 = yield readFileThunk('fileB');
    }
    runPromise(gPromise) // 启动自执行器
      
```
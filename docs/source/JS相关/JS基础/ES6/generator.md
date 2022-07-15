[[toc]]
## Generator生产器

### 介绍
1. Generator函数是 ES6 提供的一种异步编程解决方案，语法行为与传统函数完全不同。
    * 执行 Generator 函数会返回一个遍历器对象，也就是说，Generator 函数除了状态机，还是一个遍历器对象生成函数。
    * 返回的遍历器对象，可以依次遍历 Generator 函数内部的每一个状态。
    * 只有调用next方法才会遍历下一个内部状态，所以其实提供了一种可以暂停执行的函数。yield表达式就是暂停标志。
    
    ::: warning 特性
      * Generator函数 是一个可以产生遍历器的状态机。执行Generator函数返回一个遍历器。

      * 有两个特征。
          * 一是，function关键字与函数名之间有一个星号；
          * 二是，函数体内部使用yield表达式，定义不同的内部状态（yield在英语里的意思就是“产出”）。

      * 调用 Generator 函数后，该函数并不执行，返回的也不是函数运行结果，而是一个指向内部状态的指针对象，也就是上一章介绍的遍历器对象（Iterator Object）。
      * 注意，yield表达式只能用在 Generator 函数里面，用在其他地方都会报错。
    :::

### 1. 使用
1. next()启动迭代器，返回状态
```ts
function* hGenerator() { // 定义一个generator函数
          yield 'hello'; // yield 后面表达式的值放 指针对象的value里
  var a = yield 'world'; // yield 本身的返回值由上一个next的参数决定，无返回undefined
          return 'ending'; // 无yield后，done为true；如果有return，value为return后面的值；无value为undefined
}
var hw = hGenerator(); //返回一个迭代器（一个指针对象，这个对象指向函数内部的状态）
hw.next() // { value: 'hello', done: false }
hw.next() // { value: 'world', done: false }
hw.next() // { value: 'ending', done: true }
hw.next() // { value: undefined, done: true }
```

### 2. next()的参数，决定yield返回值
```ts
function* f() {
  var a = yield 'a11'
  console.log(a,'a'); // 2 
  var b = yield 'a22'
  console.log(b,'b'); // 3
  var c = yield 'a33'
  console.log(c,'c'); // 4
}

var g = f();
g.next(1)  //启动迭代器，返回状态 { value: 'a11', done: false }
g.next(2)  //指针指向a22，执行，此next的参数当做是第一个yield的值，即a = 2，返回状态 { value: 'a22', done: false }
g.next(3)  //指针指向a33，执行，此next的参数当做是第二个yield的值，即b = 3，返回状态 { value: 'a33', done: false }
g.next(4)  //指针指向null，此next的参数当做是第三个yield的值，即c = 4，返回状态 { value: undefined, done: true }

// 1.当执行第一个next，启动迭代器，遇到yield暂停函数执行，返回一个指针对象，指针指向第一个yield后面的代码，执行其代码，返回当前状态对象，
// 2.当执行next，遇到下一个yield，暂停执行，指针指向第二个yield后面的代码，执行其代码，返回当前状态对象，第一个yield的值为这个next的参数
// 3.如果没有yield了，直接执行到代码结束或遇到return，将return后面的值作为返回对象的value值
// 4.如果没有return，则返回的value为undefined
```

### 3. 无yeild时，是单纯的暂缓执行函数
```ts
//Generator 函数可以不用yield表达式，这时就变成了一个单纯的暂缓执行函数。
function* f() {
  console.log('执行了')
}
var generator = f();
setTimeout(function () {
  generator.next()
}, 2000);
```

### 4. yield当做表达式结果时，必现用()包裹
```ts
//注意: yield表达式如果用在另一个表达式之中，必须放在圆括号里面。
function* demo() {
  console.log('Hello' + yield); // SyntaxError
  console.log('Hello' + yield 123); // SyntaxError

  console.log('Hello' + (yield)); // OK
  console.log('Hello' + (yield 123)); // OK
}
```

### 5. 与 interator 的关系
  * 执行generator 返回一个 interator迭代器，即跟 Symbol.iterator用法一样
```ts
/**
 * */ 
 var myIterable = {};
 myIterable[Symbol.iterator] = function* () {
   yield 1;
   yield 2;
   yield 3;
 };
 [...myIterable] // [1, 2, 3]
 //上面代码中，Generator 函数赋值给Symbol.iterator属性，从而使得myIterable对象具有了 Iterator 接口，可以被...运算符遍历了。
```

### 6. next()的参数，决定yield返回值
```ts
/**
* yield表达式本身没有返回值，或者说总是返回undefined。
* next方法可以带一个参数，该参数就会被当作上一个yield表达式的返回值。
*/
function* f() {
  for(var i = 0; true; i++) {
    // yield表达式本身没有返回值，或者说总是返回undefined。next才会返回状态对象。
    // 要想yield返回值，可以在next函数传参，这个参数会是yeild的返回值
    var reset = yield i; 
    if(reset) { i = -1; }
  }
}
var g = f();
g.next() // { value: 0, done: false }
g.next() // { value: 1, done: false }
g.next(true) // { value: 0, done: false }
```

### 7. yield* 自动执行迭代器
  ::: warning 自制自执行迭代器
  * for...of...
  * Array.from 
  * ...扩展运算符
  * 等等
  * 当generator作为他们的迭代器时，能够自动执行generator返回的这个迭代器
  :::

::: tip 自动执行 yield*
 * 如果在 Generator 函数内部，调用另一个 Generator 函数。需要在前者的函数体内部，自己手动完成遍历。
 * 为了解决手动遍历的问题， yield* 出现了
    * 实际上，任何数据结构只要有 Iterator 接口，就可以被yield*遍历。
    * 如果被代理的 Generator 函数有return语句，那么就可以向代理它的 Generator 函数返回数据。
::: 

```ts
function* iter1() { 
  yield '11'; 
  return '22'; 
}
function* iter2() { 
  yield '33'; 
  yield '44'; 
}

function* concat(iter1, iter2) { // iter1, iter2 都是generator函数
  var result =  yield* iter1(); // iter1函数里有retrun返回值，result能获取到返回值
                yield* iter2();
  console.log(result);
}
var objects = concat(iter1, iter2)
for (const i of objects) {
  console.log(i);
}
// 等同于
function* concat(iter1, iter2) {
  for (var value of iter1) {
    yield value;
  }
  for (var value of iter2) {
    yield value;
  }
}
```

### 8. Generator 函数的this
```ts
/**
 * Generator 函数的this 
 * Generator 函数总是返回一个遍历器，
 * ES6 规定这个遍历器是 Generator 函数的实例，也继承了 Generator 函数的prototype对象上的方法。
 * 
 * Generator 函数也不能跟new命令一起用，会报错。
 * new命令跟构造函数F一起使用，结果报错，因为F不是构造函数。
*/
function* g() {}
g.prototype.hello = function () {
  return 'hi!';
};
let obj = g();
obj instanceof g // true
obj.hello() // 'hi!'
```

### 9. Generator运行原理
```ts
// 运行原理 : 遇到yield，gen函数退出栈，但不消失，保留了当前状态
// Generator 与上下文
/**
 * 
  JavaScript 代码运行时，会产生一个全局的上下文环境（context，又称运行环境），包含了当前所有的变量和对象。
  然后，执行函数（或块级代码）的时候，又会在当前上下文环境的上层，产生一个函数运行的上下文，变成当前（active）的上下文，
  由此形成一个上下文环境的堆栈（context stack）。
  这个堆栈是“后进先出”的数据结构，最后产生的上下文环境首先执行完成，退出堆栈，
  然后再执行完成它下层的上下文，直至所有代码执行完成，堆栈清空。

  Generator 函数不是这样，它执行产生的上下文环境，一旦遇到yield命令，就会暂时退出堆栈，
  但是并不消失，里面的所有变量和对象会冻结在当前状态。等到对它执行next命令时，
  这个上下文环境又会重新加入调用栈，冻结的变量和对象恢复执行。
    function* gen() {
      console.log('object');
      yield console.log('yield 1 右代码');1+1;
      yield console.log('yield 2 右代码');2+2; 
    }
    let g = gen();
    console.log(
      g.next(),
      g.next(),
      g.next(),
    );
  上面代码中，let g = gen()并不执行gen函数，
  当执行第一个g.next()时，Generator 函数gen的上下文会加入堆栈，即开始运行gen内部的代码
    等遇到yield 1时，先执行其右边第一个表达式，将结果存入状态value中，再将gen上下文退出堆栈，内部状态冻结，返回状态{value: 1, done: false}。
  第二次执行g.next()时，gen上下文重新加入堆栈，变成当前的上下文，重新恢复执行，
    等遇到yield 2时，先执行其右边第一个表达式，将结果存入状态value中，再将gen上下文退出堆栈，内部状态冻结，返回状态{value: 2, done: false}。
  第三次执行g.next()时，gen上下文重新加入堆栈，变成当前的上下文，重新恢复执行，
    没遇到yield时，将结果undefined存入状态value中,再将gen上下文退出堆栈，内部状态冻结，返回状态{value: undefined, done: true}。
* 
*/
function fn1() {
  console.log('fn1');
  return 1+1
}
function fn2() {
  console.log('fn2');
  return 2+2
}
function* gen() {
  console.log('object');
  yield fn1();console.log('yield 1 右代码');
  yield fn2();console.log('yield 2 右代码');
}
let g = gen();
console.log(g.next())
// console.log(g.next())
// console.log(g.next())
```

### 10. 应用
:::: code-group
::: code-group-item Generator实现状态机
  ```ts 
    // Generator 是实现状态机的最佳结构。比如，下面的clock函数就是一个状态机。
    //es5
    var ticking = true;
    var clock = function() {
      if (ticking)
        console.log('Tick!');
      else
        console.log('Tock!');
      ticking = !ticking;
    }
    //es6
    var clock = function* () {
      while (true) {
        console.log('Tick!');
        yield;
        console.log('Tock!');
        yield;
      }
    };
    //减少了外部变量来维护状态
  ```
:::

::: code-group-item Ajax异步请求同步化
  ```ts
  function* main() {
    var result = yield request("http://some.url");
    var resp = JSON.parse(result); // 返回结果后在执行后面的代码
      console.log(resp.value);
  }
  function request(url) {
    makeAjaxCall(url, function(response){
      it.next(response); // 返回结果后在执行后面的代码
    });
  }
  var it = main();
  it.next();
  ```
:::

::: code-group-item Generator函数逐行读取文本文件
  ```ts
  //通过 Generator 函数逐行读取文本文件。
  function* numbers() {
    let file = new FileReader("numbers.txt");
    try {
      while(!file.eof) {
        yield parseInt(file.readLine(), 10);
      }
    } finally {
      file.close();
    }
  }
  ```
:::

::: code-group-item 控制流管理
  ```ts 
  //如果有一个多步操作非常耗时，采用回调函数，可能会写成下面这样。
  step1(function (value1) {
    step2(value1, function(value2) {
      step3(value2, function(value3) {
        step4(value3, function(value4) {
          // Do something with value4
        });
      });
    })
  });
  // 使用promise可以实现在then里回调，虽然可以自动按顺序执行，但会有太多的promise的语法，每一步都要传入resolve、reject等
    Promise.resolve(step1)
      .then(step2)
      .then(step3)
      .then(step4)
      .then(function (value4) {
        // Do something with value4
      }, function (error) {
        // Handle any error from step1 through step4
      })
      .done();
  // 利用yield *，虽然客观代码整洁，但是不能自动执行，需要手动next
    function* longRunningTask(value1) {
      try {
        var value2 = yield step1(value1);
        var value3 = yield step2(value2);
        var value4 = yield step3(value3);
        var value5 = yield step4(value4);
        // Do something with value4
      } catch (e) {
        // Handle any error from step1 through step4
      }
    }
  //但是可以实现一个自动执行器，来自动执行上面的yield代码，核心思想是递归执行next
  // 仅适用于同步task，因为获取到value就返回，没判断什么时候结束
    scheduler(longRunningTask(initialValue));
    function scheduler(task) {
      var taskObj = task.next(task.value); // 同步调用next，不是等待上一个异步完成才调用，达不到异步效果
      // 如果Generator函数未结束，就继续调用
      if (!taskObj.done) {
        task.value = taskObj.value
        scheduler(task);
      }
    }
  ```
:::
::::
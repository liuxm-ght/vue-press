[[toc]]
## Async

### 总结
 * async 就是可自执行的生成器，实现原理是：
    1. 返回一个promise，resolve的结果是迭代器停止即done为true时的value
    2. promise内部执行自执行函数，自动调用next
    3. 在上一个步骤异步执行完成后才调用next
    4. await
        * 下面的代码会放到其async创造的promise的then中去
        * await等待的是右侧「表达式」的结果，即右侧promise传入resolve的参数
        * await的值是前一个next传入的参数，即右侧promise传入resolve的参数

  [应用方面有：](./async-use.js.md)
  1. forEach或promise.all并发请求，串联输出
  2. 睡眠函数
  3. for of继发请求
  4. 保留外层函数的运行栈


## 代码实现
### interator
```ts
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
```


### generator 
```ts
  // 创建一个生成器
  function* hGenerator() { // 定义一个generator函数
      yield 'hello'; // yield 后面表达式的值放 指针对象的value里
  var a = yield 'world'; // yield 本身的返回值,由上一个next的参数决定，无返回undefined
      return 'ending'; // 无yield后，done为true；如果有return，value为return后面的值；无value为undefined
  }
  var hw = hGenerator(); //返回一个迭代器（一个指针对象，这个对象指向函数内部的状态）
  hw.next() // { value: 'hello', done: false }
  hw.next() // { value: 'world', done: false }
  hw.next() // { value: 'ending', done: true }
  hw.next() // { value: undefined, done: true }
```


### async-await 
```ts
  // 创建一个自动执行的迭代器
  function spawn(genF) { //将生成器传入，即可生成迭代器，并自动执行
    return new Promise(function(resolve,reject) {
      const gen = genF() //获取到迭代器
      function step(nextF) { // 自执行函数
        let next
        try {
          next = nextF() // 执行一次next
        } catch (error) {
          return reject(error)
        }
        if (next.done) {
          //async函数内部return语句返回的值，会成为then方法回调函数的参数。
          return resolve(next.value)
        }
        // 如果next.value是promise实例，那么将promise的状态交给next.value的Promise去处理
        Promise.resolve(next.value).then(function(v) {
          step(function() { return gen.next(v); }); // v 当做上一个await的值
        }, function(e) {
          step(function() { return gen.throw(e); });
        });
        // next.value().then(function(data) { //next.value()返回promise实例
        //   step(function() {return gen.next(data)})
        // }) 
      }
      step(function () {return gen.next(undefined)}) // 开启迭代器
    })
  }
  function* gPromise() { //生成器 作用：生成迭代器
    var f1 = yield readFileThunk('fileA');
    var f2 = yield readFileThunk('fileB');
    return 'retrun 返回的值将是done状态下的value值,也是生成器的规则'
  }
  spawn(gPromise)
```



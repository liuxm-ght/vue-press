[[toc]]
## Async 测试代码

### 例子1
```ts
//async await 执行顺序 eventloop
async function async1() {
  console.log("async1 start");
  await async2();
  console.log("async1 end");
}
async function async2() {
  console.log("async2");
  // 如果返回的不是promise ，制造一个promise，并直接把await 后面的代码放到其then中去 ,并且执行resovle，将后面的代码放入微观队列去（并携带一个resolve函数等待cb执行完成后执行）

  // 如果返回的是promise 会先执行rutrun的结果，把‘async2 promise’先push进微观队列去（并携带一个resolve函数等待cb执行完成后执行）, 
  // 并把await 后面的代码包装成then，接到当前p.then后去，下面的代码相当于 p.then.then(()=>{await后面的代码})
  // return new Promise(function(resolve) {
  //   console.log("async2 promise retrun");
  //   resolve()
  // }).then(()=>{
  //   console.log("async2 promise");
  // })
}
console.log("script start");
setTimeout(function() {
  console.log("setTimeout");
}, 0);
async1();
new Promise(function(resolve) {
  console.log("promise1");
  resolve();
}).then(function() {
  console.log("promise2");
});
console.log("script end");
```
[参考文章：](https://juejin.cn/post/6844903734321872910#heading-18)

### 例子二
```ts
setTimeout(function () {
  console.log("1");
}, 0);
async function async1() {
  console.log("2");
  const data = await async2();
  console.log("3");
  return data;
}
async function async2() {
  return new Promise((resolve) => {
    console.log("4");
    resolve("async2的结果");
  }).then((data) => {
    console.log("5");
    return data;
  });
}
async1().then((data) => {
  console.log("6");
  console.log(data);
});
new Promise(function (resolve) {
  console.log("7");
  //   resolve()
}).then(function () {
  console.log("8");
});


//结果： 2 4 7 5 3 6 async2结果 1
```
::: details 具体过程：
  * 执行栈[],宏[],微[],resolve内存[]
  * 1.开始，遇到settimeout，堆入宏[setimeout()=>{0},],继续，遇到async1()
  * 2.执行async1()，打印2，遇到await，先执行await后面的代码async2()，换行的代码先不执行
  * 3.执行async2()，遇到实力化promise4，打印4，后执行resolve(xxx)，将promise4状态置为fulled，
  *    执行后面的then并生成promise5，由于promise4状态为fulled，将then的第一个回调函数堆入微[{()=>{5};promise5的resolve}，]
  *    继续，处理 await换行 的代码()=>3，实际上由于async2()返回的是promise4，所以会将()=>3当成promise4的最后一个then处理，
  *    由于倒数第二个then返回的是promise5，但其状态为pending，执行then生成promise3，所以会暂时将promise3的回调即()=>3，堆入resolve内存P5[()=>3，]，
  *    并生成promise3返回出去，其状态也是pending
  * 4.继续，async1().then,由于async函数返回的是promise3，其状态为pending，执行then生成promise6，所以会暂时将promise6的回调即()=>6，堆入resolve内存P3[()=>6，]，
  * 5.遇到promise7实例，打印7，由于没有执行resolve()，状态为pending，执行then生成promise8，暂时将promise8的回调即()=>8，堆入resolve内存P7[()=>8，]，
  * 6.此时，主执行栈已经执行完成了，根据浏览器的eventloop（事件循环机制），开始执行微观任务，
  * 7.此时，微观任务为微[{()=>{5};promise5的resolve}，]，执行，打印5，并执行p5的resolve，状态置为fulled，将resolve内存P5[()=>3，]中的()=>3堆入微[{()=>{3};promise3的resolve}，]
  * 8.继续检查微观任务队列，发现[{()=>{5};promise5的resolve}，]，继续执行，打印3，并执行p3的resolve，状态置为fulled，将resolve内存P3[()=>6，]中的()=>6堆入微[{()=>{6}，()=>{"async2的结果"};promise6的resolve}，]
  * 9.继续检查微观任务队列，发现[{()=>{6};promise6的resolve}，]，继续执行，打印6，打印"async2的结果"，并执行p6的resolve，状态置为fulled，p6没有暂存栈，
  * 10，继续检查微观任务队列，发现无任务可执行，结束一轮事件循环，
  * 11，开始下一轮事件循环，检查宏观任务队列，打印1
:::
[参考文章：](https://juejin.cn/post/7004638318843412493)

### 应用
```ts
  //并发发出远程请求,按次序输出
  async function logInOrder(urls) {
    // 并发读取远程URL
    const textPromises = urls.map(async url => { // 存了urls.length个promise，这些promise都是等待异步执行完毕状态的promise
      const response = await fetch(url); // 每个async-await都只有一个await，只执行一个next之后done为true返回一个promise
      return response.text();
    });
    // 按次序输出
    for (const textPromise of textPromises) { // 一个async下urls.length个await，这些awati会按textPromises的promises顺序输出
      console.log(await textPromise); //等待这个promise的状态改为resolve后，才执行gen.next(v)
    }
  }
  /**
   * 上面代码中，虽然map方法的参数是async函数，但它是并发执行的，因为只有async函数内部是继发执行，外部不受影响。
   * 后面的for..of循环内部使用了await，因此实现了按顺序输出。
   * */
  //  参考文章：https://es6.ruanyifeng.com/#docs/async-iterator

```
[参考文章：](https://juejin.cn/post/7004638318843412493)


### 错误处理
```ts
  async function async1() {
    try {
      await Promise.reject('error')
    } catch (error) {
      console.log(error,'dddd');
      throw error('xxxx')
    }
    console.log('???还执行？');
  }
  async1().then((data) => {
    console.log("6");
    console.log(data);
  });
```
::: tip Js错误处理
  1. try...catch...捕获同步异常；
  2. promise的reject捕获宏观任务异步异常；
  3. promise的catch捕获异步异常；
  
  [参考](https://juejin.cn/post/6844903462002491399#heading-10)
:::
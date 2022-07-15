[[toc]]
## Async应用

### asyncPool

 * 核心思路是
    * 一个总数组用来存放所有异步请求的promise
    * 一个执行数组用来存放当前已经发送异步请求的promise，当完成一个(race可以知道哪个先完成)将其从数组剔出，加入下一个
    * await实现了暂停for循环的机制，使得执行数组仅同时仅支持limit个请求
    * Promise.all返回所有成功数组

```ts
// 需求一： 实现一个并发请求队列，每次最多能并发poolLimit次，请求完一个会推入新的请求，并且能按之前队列顺序输出结果
const curl = (i) => {
  console.log('开始' + i);
  return new Promise((resolve)=>{
    setTimeout(()=>{
      resolve(i)
      console.log('结束' + i);
    },1000 + Math.random()*1000)
  })
}
const urls = new Array(10).fill(0).map((v,i) => i)
console.log(urls);
async function asyncPool(poolLimit,array,iteratorFn) {
  const ret = []
  const executing = [] 
  for (const item of array) {
    const p = Promise.resolve().then(()=>iteratorFn(item))  // 将异步请求加入微观队列，微观队列执行才发送请求
    ret.push(p) 
    if (poolLimit<=array.length) {
      const e = p.then(()=> executing.splice(executing.indexOf(e),1)) //关键步骤，完成后将自己从执行队列中抛出来
      executing.push(e) 
      if (executing.length >= poolLimit) { 
        var a = await Promise.race(executing)  // 等待哪个e的状态先改为fulled
        console.log(a);
      }
    }
  }
  console.log(ret); // 至此前面7个都已经resolve完成的了，
  return Promise.all(ret) // 等待后面三个完成了，返回一个value为数组的promise
}
(async ()=>{
  const res = await asyncPool(3,urls,curl)
  console.log(res);
})()

// async function asyncPool(poolLimit,array,iteratorFn) {
//   const ret = []
//   const executing = [] // 执行队列
//   for (const item of array) {
//     const p = Promise.resolve().then(()=>iteratorFn(item)) // 将异步请求加入微观队列，微观队列执行才发送请求
//     ret.push(p) // p的状态是pending
//     if (poolLimit<=array.length) {
//       // 关键步骤，完成后将自己从执行队列中抛出来
//       const e = p.then(()=> executing.splice(executing.indexOf(e),1)) //p的状态是pending,将回调丢p的回调队列保存起来，返回的e也是pending状态
//       executing.push(e) // e的状态是pending
//       if (executing.length >= poolLimit) { // 执行队列 多于限制长度，开始等待
//         // 等待微观任务队列的请求完成，当谁先完成，resolve谁，进入下一个循环，抛出之前完成的p，推入新p
//         var a = await Promise.race(executing) // 等待哪个p的状态先改为fulled，将e的状态改为fulled，执行抛出函数，，最后返回的promise是fulled状态的，value
//         console.log(a);
//       }
//     }
//   }
//   console.log(ret); // 至此前面7个都已经resolve完成的了，
//   return Promise.all(ret) // 等待后面三个完成了，返回一个value为数组的promise
// }

```

### async promise 终极题目
```ts
async function async1() {
  console.log('async1 start'); //执行2
  await async2() 
  console.log('async1 end');
}
async function async2() {  
  console.log('async2 start'); // 执行3
  return new Promise((resolve, reject) => {
    resolve();
    console.log('async2 promise'); // 执行4
  }) 
}
console.log('script start'); //执行1
setTimeout(function() {
  console.log('setTimeout'); //宏1
}, 0);  
async1();
new Promise(function(resolve) {
  console.log('promise1');
  resolve();
}).then(function() {
  console.log('promise2');
}).then(function() {
  console.log('promise3');
});
console.log('script end');

// 执行队列
//script start
//async1 start
//async2 start
//async2 promise
//promise1
//script end
//promise2
//promise3
//async1 end
//
//setTimeout
```
::: details 详解
* 微队列：
    * async2_next2,即async2的第一个next开启的微任务，它的状态是resolve，那么将第二个next的执行放微任务队列
    * promise2
    * promise3
    * async1_next2
    * async1 end

* 宏队列：
    * setTimeout

* 注意：
    * 执行 async1, 打印async1 start，遇到await，
    * 执行 async2，打印async2 start，执行new promise p_a2p，打印 async2 promise，状态为fulled，async2的next（async2_next2）存入微任务队列
    * async2 状态为pendding，返回p_a2
    * async1 的第一个next产生的promise 即为 p_a2，状态为pendding，将async1的第二个next函数暂存内存resolveQueue中
    * 继续打印 promise1,将 promise2 存入微任务队列，此时队列有[async2_next2，promise2]
    * 继续打印 script end
    * 执行 async2_next2，将async2状态改为fulled，执行resolveQueue代码，将async1_next2 存入微任务队列,此时队列有[promise2,async1_next2]
    * 执行 promise2， 打印 promise2，将 promise3 存入微任务队列，此时队列有[async1_next2，promise3]
    * 执行 async1_next2,改变 async1_promsie的状态为fulled
    * 注意：await Promise.resolve() 类似于 Promise.resolve(undefined).then((undefined) => {})
    * 所以 async1 end 在 async1_promsie的then里，存入微任务队列，此时队列有[promise3，async1 end]
    * 打印 promise3
    * 打印 async1 end
:::
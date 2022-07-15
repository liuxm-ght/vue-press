## Promise代码实现
```ts
/**
 * 异步实现
 *    参考文章：https://juejin.cn/post/6844904147884441608#heading-0
 * 宏观任务
 *    script、setTimeout、setInterval、I/O、UI交互事件、postMessage、MessageChannel、setImmediate(Node.js 环境)；
 * 微观任务
 *    promise async await  
 */
const MicrotaskFun = (callback) => {
  window.addEventListener('message', _=>{
    callback();
  });
  window.postMessage('');
}
const MutationObserveFun = (callback) => {
   // MutationObserver可以绑定某个节点，当节点改变时，回调函数callback将放入微任务中
  // 通过装饰者模式，将回调函数包装一下，将执行之后的返回值保存起来
  const observe = new MutationObserver(() => {
    callback()
  });
  // 为了节约开销，创建一个文本比创建一个dom可划算的多
  let count = 0;
  const textNode = document.createTextNode(String(count));
  observe.observe(textNode, {
    // 当文本改变时触发回调
    characterData: true
  });
  // 改变文本，回调callback触发
  textNode.data = String(++count);
  observe = textNode = null
}

pid = 0;
cid = 0;
//处理 then 成功或失败函数 返回值得类型，根据类型处理当前then_promise的状态
const resolvePromise = (promise2, x, resolve, reject) => {
  // 处理x是为了如果x是promise需要等待其完成后再继续promise2，如果x与promise2一致，则自己等待自己是错误的
  if(x === promise2){
    return reject(new TypeError('Chaining cycle detected for promise'));
  }
  let called;
  // 如果是promise实例，那么执行它的then函数，在成功回调里改变返回这promise实例的then_promise的状态，成功回调处理完后继续处理当前then函数的状态
  if (x != null && (typeof x === 'object' || typeof x === 'function')) {
    try {
      let then = x.then; // x是thenable类型的
      if (typeof then === 'function') { // then是个函数
        //执行then函数，等待其成功或失败，
        then.call( x, 
          //如果成功，则获取成功的结果y，继续处理y，如果y是promise同样跟x的处理一样，其他情况是直接执行之前promise2的成功回调resolve(y)
          y => { 
            if(called)return;
            called = true;
            resolvePromise(promise2, y, resolve, reject); // 先改变retrun_promise实例的 then_promise的状态；完了之后执行retrun_promise实例resolvePromise创造的then_promise的状态
          }, 
          // 如果失败，直接reject
          err => { 
            if(called)return;
            called = true;
            reject(err);
          }
        )
      } else { // 不是函数，直接将x返回给之前promise2，当成成功回调的参数
        resolve(x);
      }
    } catch (e) {
      if(called)return;
      called = true;
      reject(e); 
    }
  } else { // 其他情况，直接resolve，这里的resolve、reject都是之前promise2的
    resolve(x);
  }
}
class MyPromise {
  static PENDING = 'pending';
  static RESOLVED = 'resolved';
  static REJECTED = 'rejected';

  constructor (executor,pid_params) {
    this.pid_params = pid_params
    this[pid_params] = pid_params === 'pid' ? pid++ : cid++ ;
    this.status = MyPromise.PENDING;
    this.value = null;
    this.reason = null;

    this.resolvedQueues = [];
    this.rejectedQueues = [];

    if (typeof executor !== 'function') {
      throw new TypeError('Promise resolver undefined is not a function');
    }

    let resolve = value => {
      if (this.status == MyPromise.PENDING) {
        // console.log('---this.resolvedQueues---', this.resolvedQueues,value);
        this.value = value;
        this.status = MyPromise.RESOLVED;
        this.resolvedQueues.forEach(cb => cb(this.value))
      }
    }

    let reject = reason => {
      if (this.status == MyPromise.PENDING) {
        this.reason = reason;
        this.status = MyPromise.REJECTED;
        this.rejectedQueues.forEach(cb => cb(this.reason))
      }
    }

    try {
      executor(resolve, reject);
    } catch(err) {
      reject(err);
    }
  }

  then (onFulfilled, onRejected) {
    // console.log(onFulfilled(),'onFulfilled');
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
    onRejected = typeof onRejected === 'function' ? onRejected : reason => { throw reason}
    // 第二步 加上 return this
    const promise2 = new MyPromise((resolve, reject) => {
      if (this.status === MyPromise.RESOLVED) {
        // MicrotaskFun();
        // MutationObserveFun()
        setTimeout(() => {
          // console.log('setimet resolve');
          try {
            let x = onFulfilled(this.value);
            // 处理x，x可能是个promise
            resolvePromise(promise2, x, resolve, reject); //处理then_promise的状态
          } catch(err) {
            reject(err);
          }
        },0);
      }
  
      if (this.status === MyPromise.REJECTED) {
        setTimeout(() => {
          try {
            let x = onRejected(this.reason)
            resolvePromise(promise2, x, resolve, reject);
          } catch(err) {
            reject(err);
          }
        },0);
      }

      if (this.status === MyPromise.PENDING) {
        // console.log('---this.resolvedQueues---push', this);
        this.resolvedQueues.push((value) => {
          setTimeout(() => {
            try {
              let x = onFulfilled(this.value);
              resolvePromise(promise2, x, resolve, reject);
            } catch(err) {
              reject(err);
            }
          },0);
        })
        this.rejectedQueues.push(() => {
          setTimeout(() => {
            try {
              let x = onRejected(this.reason)
              resolvePromise(promise2, x, resolve, reject);
            } catch(err) {
              reject(err);
            }
          },0);
        })
      }
    },this.pid_params);

    return promise2;
  }

  static resolve = (value,pid_params) => { //如果传入是promise则返回这个promise，否则返回一个成功状态的promise
    if (value instanceof Promise) {
      return value
    }
    return new MyPromise((resolve) => resolve(value), pid_params);
  }
  static reject = (reason,pid_params) => {//如果传入是promise则返回这个promise，否则返回一个失败状态的promise
    if (reason instanceof Promise) {
      return value
    }
    return new MyPromise((resolve,reject) => reject(reason), pid_params);
  }
  static all = (promiseAll) => { // 只有所有promise都成功了，才返回最后的result集合 ; 只要有一个错误，就返回错误
    let index = 0,result = []
    return new Promise((resolve,reject)=>{
      promiseAll.forEach((p,i)=>{
        Promise.resolve(p).then((value)=>{
          index++
          result[i] = value
          if (index === result.length) { // 只要所有promise都成功了，才返回最后的result集合
            resolve(result)
          }
        },(err)=>{ // 只要有一个错误，就返回错误
          reject(err)
        })
      })
    })
  }
  static race = (promiseAll) => {// 无论成功失败，都返回第一个执行完成的
    return new Promise((resolve,reject)=>{
      promiseAll.forEach((p,i)=>{
        Promise.resolve(p).then((val)=>{// 只要有一个成功了，就返回结果
          resolve(val)
        },(err)=>{// 只要有一个错误，就返回错误
          reject(err)
        })
      })
    })
  }
  static any = (promiseAll) => { // 只要有一个成功了，就返回结果;只有所有都是错误，才抛出错误
    let index = 0
    return new Promise((resolve,reject)=>{
      promiseAll.forEach((p,i)=>{
        Promise.resolve(p).then((val)=>{// 只要有一个成功了，就返回结果
          resolve(val)
        },(err)=>{// 只有所有都是错误，才抛出错误
          index++
          if (index === promiseAll.length) {
            reject(new AggregateError('All promises were rejected'))
          }
        })
      })
    })
  }
  static allsettled = (promiseAll) => { // 返回所有promise的状态及结果，不管是成功失败，只有所有promise都改变状态才返回result数组，否则返回pending的状态
    let result = []
    return new Promise((resolve,reject)=>{
      promiseAll.forEach((p,i)=>{
        Promise.resolve(p).then((val)=>{
          result.push({
            status:'fulfilled',
            value:val
          })
          if (promiseAll.length === result.length) { 
            resolve(result)
          }
        },(err)=>{
          result.push({
            status:'rejected',
            reason:err
          })
          if (promiseAll.length === result.length) { 
            resolve(result)
          }
        })
      })
    })
  }
}

//Promise 写完之后可以通过 promises-aplus-tests 这个包对我们写的代码进行测试，看是否符合 A+ 规范。不过测试前还得加一段代码：
//npm i promises-aplus-tests -g
// 执行测试用例需要用到的代码
MyPromise.defer = MyPromise.deferred = function() {
  let defer = {};
  defer.promise = new MyPromise((resolve, reject) => {
    defer.resolve = resolve;
    defer.reject = reject;
  });
  return defer;
}
// let p1 = MyPromise.resolve().then(v=>console.log(1)).then(v=>console.log(2)).then(v=>console.log(3))
// p1.then(v=>console.log(4))
// p1.then(v=>console.log(5))
// console.log(6666);
// let p2 = MyPromise.resolve().then(v=>console.log(11)).then(v=>console.log(22)).then(v=>console.log(33))
// p2.then(v=>console.log(44))
// p2.then(v=>console.log(55))
// module.exports = MyPromise;
// export default MyPromise;


MyPromise.resolve('first','pid').then((a) => {
  console.log(0);
  return MyPromise.resolve(4,'pid');
}).then((res) => {
  console.log(res)
})

MyPromise.resolve('second','cid').then(() => {
  console.log(1);
}).then(() => {
  console.log(2);
}).then(() => {
  console.log(3);
}).then(() => {
  console.log(5);
}).then(() =>{
  console.log(6);
})

// pid0 - pid0_resolved - resolvedQueues_pid0.forEach [] - pid0.then - pid1 - pid0_resolved - 把st1_pid1塞队列
// - pid1.then - pid2 - pid1_pending - resolvedQueues_pid1.push(cb_clg4)

// cid0 - cid0_resolved - resolvedQueues_cid0.forEach [] - cid0.then - cid1 - cid0_resolved - 把st1_cid1塞队列
// - cid1.then - cid2 - cid1_pending - resolvedQueues_cid1.push(cb_clg2)

// 队列执行st1_pid1 - console.log(0) - st1_pid1返回pid3且状态resolved - resolvePromise_pid1 
// - pid3.then - pid4 - pid3_resolved - 把st4_pid4塞队列(onFulfilled 为创建的 y=>{resolvePromise_pid1(promise2, y, resolve_pid1, reject);})

// 队列执行st1_cid1 - console.log(1) - resolvePromise_cid1 - cid1_resolved - resolvedQueues_pid1.forEach [cb_clg2] - 把st2_cid2塞队列

// 队列执行st4_pid4 - resolvePromise_pid1 - resolve_pid1(y) - pid1_resolved - resolvedQueues_pid1.forEach [cb_clg4] - 把st2_pid2塞队列

// 队列执行st2_cid2 - console.log(2) - resolvePromise_cid2 - cid2_resolved - resolvedQueues_pid2.forEach [cb_clg3] - 把st3_cid3塞队列

// 队列执行st2_pid2 - console.log(4) - resolvePromise_pid2 - pid2_resolved - resolvedQueues_pid2.forEach [] 

// 队列执行st3_cid3 - console.log(3) - resolvePromise_cid3 - cid3_resolved - resolvedQueues_pid3.forEach [cb_clg5] - 把st5_cid5塞队列
// 队列执行st5_cid5 - console.log(5) - resolvePromise_cid5 - cid5_resolved - resolvedQueues_pid5.forEach [cb_clg6] - 把st6_cid6塞队列
// 队列执行st6_cid6 - console.log(6) - resolvePromise_cid6 - cid6_resolved - resolvedQueues_pid3.forEach [] 






```






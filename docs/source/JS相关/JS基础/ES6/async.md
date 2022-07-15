```ts

// async 函数
/**
 * 1. 介绍
 * async 函数是什么？一句话，它就是 Generator 函数的语法糖。
 *    async函数就是将 Generator 函数的星号（*）替换成async，将yield替换成await，仅此而已。
 * 改进：
 *  （1）内置执行器。
 *      Generator 函数的执行必须靠执行器，所以才有了co模块，而async函数自带执行器。
 *  （2）更好的语义。
 *  （3）更广的适用性。
 *  （4）返回值是 Promise。
 * 
 * 正常情况下，await 命令后面是一个 Promise 对象，返回该对象的结果。如果不是 Promise 对象，就直接返回对应的值。
 * 
 * await等的是右侧「表达式」的结果
 * 
 * await下面的代码会放到其async创造的promise的then中去
 *   
 * await Promise.resolve() 类似于 Promise.resolve(undefined).then((undefined) => {})
*/



// 2. 原理
/**
 * async 函数的实现原理，就是将 Generator 函数和自动执行器，包装在一个函数里。
 * 
 * 
 * 总结：async-await就是可以自动执行的generator生成器，generator生成器执行返回一个迭代器，使迭代器可自动往下一步执行
 * 
*/
  async function fn(args) {
    // ...
  }
  // 等同于
  function fn(args) {
    return spawn(function* () {
      // ...
    });
  }

  //所有的async函数都可以写成上面的第二种形式，其中的spawn函数就是自动执行器。
  // 下面给出spawn函数的实现，基本就是前文自动执行器的翻版。
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
          return resolve(next.value)
        }
        // 如果next.value是promise实例，那么Promise.resolve(next.value)不处理next.value
        Promise.resolve(next.value).then(function(v) {
          step(function() { return gen.next(v); });
        }, function(e) {
          step(function() { return gen.throw(e); });
        });
        // next.value().then(function(data) { //next.value()返回promise实例
        //   step(function() {return gen.next(data)})
        // }) 
      }
      step(function () {return gen.next(undefined)}) // 开启迭代器，，传名写法
    })
  }
  function* gPromise() { //生成器 作用：生成迭代器
    var f1 = yield readFileThunk('fileA');
    var f2 = yield readFileThunk('fileB');
  }
  spawn(gPromise)

        // Generator 函数的写法 VS Async写法
            function chainAnimationsGenerator(elem, animations) {
              return spawn(function*() {
                let ret = null;
                try {
                  for(let anim of animations) {
                    ret = yield anim(elem);
                  }
                } catch(e) {
                  /* 忽略错误，继续执行 */
                }
                return ret;
              });
            }
            // vs
            async function chainAnimationsAsync(elem, animations) {
              let ret = null;
              try {
                for(let anim of animations) {
                  ret = await anim(elem);
                }
              } catch(e) {
                /* 忽略错误，继续执行 */
              }
              return ret;
            }


// 3. 应用：
  // 睡眠函数
  /**
   * JavaScript 一直没有休眠的语法，但是借助await命令就可以让程序停顿指定的时间。下面给出了一个简化的sleep实现。
  */
    function sleep(interval) {
      // await new Promise(resolve => {
      return new Promise(resolve => {
        setTimeout(resolve, interval);
      })
    }
    // 用法
    async function one2FiveInAsync() {
      for(let i = 1; i <= 5; i++) {
        console.log(i);
        await sleep(1000);
      }
    }
    one2FiveInAsync();


  /**
   * 使用注意点 
   */
  // 第一点，前面已经说过，await命令后面的Promise对象，运行结果可能是rejected，所以最好把await命令放在try...catch代码块中。
      async function myFunction() {
        try {
          await somethingThatReturnsAPromise();
        } catch (err) {
          console.log(err);
        }
      }
      // 另一种写法
      async function myFunction() {
        await somethingThatReturnsAPromise()
        .catch(function (err) {
          console.log(err);
        });
      }
  // 第二点，多个await命令后面的异步操作，如果不存在继发关系，最好让它们同时触发。
      //耗时
      let foo = await getFoo();
      let bar = await getBar();

      //正确写法
        // 写法一
        let [foo, bar] = await Promise.all([getFoo(), getBar()]);
        // 写法二
        let fooPromise = getFoo();
        let barPromise = getBar();
        let foo = await fooPromise;
        let bar = await barPromise;

  //  第三点，await命令只能用在async函数之中，如果用在普通函数，就会报错。
      // 错误情况，原因是这时三个db.post()操作将是并发执行，也就是同时执行，而不是继发执行。
      function dbFuc(db) { //这里不需要 async
        let docs = [{}, {}, {}];

        // 可能得到错误结果
        docs.forEach(async function (doc) {
          await db.post(doc);
        });
      }
      //正确的写法是采用for循环。
      async function dbFuc(db) {
        let docs = [{}, {}, {}];
      
        for (let doc of docs) {
          await db.post(doc);
        }
      }

  //  第四点，async 函数可以保留运行堆栈。
    /**
     * 下面代码中，函数a内部运行了一个异步任务b()。当b()运行的时候，函数a()不会中断，而是继续执行。
     * 等到b()运行结束，可能a()早就运行结束了，b()所在的上下文环境已经消失了。
     * 如果b()或c()报错，错误堆栈将不包括a()。
    */
    const a = () => {
      b().then(() => c());
    };

    /**
      * 下面代码中，b()运行的时候，a()是暂停执行，上下文环境都保存着。一旦b()或c()报错，错误堆栈将包括a()。
    */
    const a = async () => {
      await b();
      c();
    };
  


    //应用 
      //并发发出远程请求,按次序输出
        async function logInOrder(urls) {
          // 并发读取远程URL
          const textPromises = urls.map(async url => { // textPromises存了urls.length个promise，这些promise都是async返回的promise，等待异步执行完毕状态的promise
            const response = await fetch(url); // 每个async-await都只有一个await，，，fetch(url)请求成功后自动resolve(data)，，，data就是await返回的值
            return response.text(); // 有return，return的值就是done为true时的next.value，，至此当前这个textPromise，resolve(response.text())，，，
          });
          // 按次序输出
          for (const textPromise of textPromises) { // 一个async下urls.length个await，这些awati会按textPromises的promises顺序输出
            console.log(await textPromise); //等待这个promise的状态改为resolve后，才执行gen.next(v)
          }
        }
        /**
         * 上面代码中，虽然map方法的参数是async函数，但它是并发执行的，因为只有async函数内部是继发执行，外部不受影响。
         * 后面的for..of循环内部使用了await，因此实现了按顺序输出。
         * 
         * 
         * 
         * 这里要联合 async的原理spawn 即 map的原理来理解
         * textPromises 存了urls.length个 url_async_promise, 
         *    url_async_promise执行启动了迭代器的自执行，执行第一个next，遇到await，执行fetch(url),返回pending_fetch_promise,存入next.value
         *    同时执行pending_fetch_promise.then(()=>{gen.next}),由于是pending状态，()=>{gen.next}存在fulledCallbak数组里，等待请求成功执行resolve后才执行它
         * 
         * for...of... textPromises时，第一个url_async_promise是big_async_promise的第一个next.value，
         *    相当于是 url_async_promise .url_async_then .big_async_then
         *    当fetch成功，改变url_async_promise为fulled，执行url_async_then，之后执行big_async_then，然后next_big_async
         * */
    

```
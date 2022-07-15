[[toc]]
## Promise
### 简介：
1. 主要用于处理异步回调问题，执行promise，执行异步函数(可能是ajax事件)，异步函数执行完毕可通过resolve或reject来改变promise的状态；
2. 执行then返回一个新的promise，如此可实现链式调用；
3. 执行then返回的新promise，会判断之前promise的状态；
    1. 如果是resolved或failed，则开启异步事件，异步事件里执行回调函数，同时处理函数的返回结果；
    2. 如果是pending的状态，则将回调函数暂存起来，等待异步函数执行完成，异步函数执行完，改变之前promise的状态，执行暂存里的函数，开启异步事件，执行回调函数，同时处理函数的返回结果；
4. 处理函数结果，目的是为了改变then产生的promise的状态，判断结果是否为promise或thenable的对象，
    1. 如果不是thenable类对象，则直接resolve或reject改变then产生的promise的状态；
    2. 如果是thenable类对象，则执行这个thenable类对象的then函数，等待这个thenable类对象执行的异步函数执行完毕，改变thenable类对象的状态后，执行它的回调函数即then传进去的成功或失败函数，这个函数里会继续递归处理函数结果，直到判断结果不是thenable类对象，那么才resolve或reject改变then产生的promise的状态；
    (promise2\promise2_resolve\promise2_reject都是函数参数透传的，为了就是能找到最初的then产生的promise)
    3. 总体过程就是判断结果是否为thenable类，如果是处理这些promise，最终成功或失败都要回来处理then参数的promise的状态，这样才能继续链式调用下后面的then

### 其他扩展函数：
1. resolve：如果传入的是promise实例则返回改实例，如果不是返回一个新的状态为resolve的promise
2. reject：类似resolve
3. all：传入数组，返回一个新的promise，只有所有promise成功了，才执行成功回调，返回的promise的状态才是成功的；有一个错误，执行失败回，调返回的promise的状态是失败的；
4. race：传入数组，返回一个新的promise，只要有一个promise成功了，返回promise的状态改为成功；只要有一个失败，返回失败的状态；
5. any：传入数组，返回一个新的promise，只要有一个promise成功了，返回promise的状态改为成功；只有所有失败，才返回失败的状态；跟all相反；
6. allsettled：传入数组，返回一个新的promise，不管是成功失败，都将结果存入数组，并返回promise的状态改为成功，成功结果为结果数组；

### 异常处理：
1. try...catch...捕获同步异常；
2. promise 的 reject 捕获宏观任务异步异常；
3. promise 的 catch 捕获异步异常；


### 使用场景
:::: code-group
::: code-group-item promise监听图片加载
将图片的加载写成一个Promise，一旦加载完成，Promise的状态就发生变化
```ts
const preloadImage = function (path) {
  return new Promise(function (resolve, reject) {
    const image = new Image();
    image.onload  = resolve;
    image.onerror = reject;
    image.src = path;
  });
};
```
:::

::: code-group-item then传统请求依赖
通过链式操作，将多个渲染数据分别给个then，让其各司其职。或当下个异步请求依赖上个请求结果的时候，我们也能够通过链式操作友好解决问题
```ts
// 各司其职
getInfo().then(res=>{
    let { bannerList } = res
    //渲染轮播图
    console.log(bannerList)
    return res
}).then(res=>{
    
    let { storeList } = res
    //渲染店铺列表
    console.log(storeList)
    return res
}).then(res=>{
    let { categoryList } = res
    console.log(categoryList)
    //渲染分类列表
    return res
})
```
:::

::: code-group-item all管理所有请求
通过all()实现多个请求合并在一起，汇总所有请求结果，只需设置一个loading即可
```ts
function initLoad(){
    // loading.show() //加载loading
    Promise.all([getBannerList(),getStoreList(),getCategoryList()]).then(res=>{
        console.log(res)
        loading.hide() //关闭loading
    }).catch(err=>{
        console.log(err)
        loading.hide()//关闭loading
    })
}
//数据初始化    
initLoad()
```
:::

::: code-group-item race处理请求超时
通过race可以设置图片请求超时
```ts
//请求某个图片资源
function requestImg(){
    var p = new Promise(function(resolve, reject){
        var img = new Image();
        img.onload = function(){
           resolve(img);
        }
        //img.src = "https://b-gold-cdn.xitu.io/v3/static/img/logo.a7995ad.svg"; 正确的
        img.src = "https://b-gold-cdn.xitu.io/v3/static/img/logo.a7995ad.svg1";
    });
    return p;
}

//延时函数，用于给请求计时
function timeout(){
    var p = new Promise(function(resolve, reject){
        setTimeout(function(){
            reject('图片请求超时');
        }, 5000);
    });
    return p;
}

Promise
.race([requestImg(), timeout()])
.then(function(results){
    console.log(results);
})
.catch(function(reason){
    console.log(reason);
});
```
:::
::::
[代码实现](./promise.js.md)

[测试代码](./promise-test.js.md)
#### 异步组件渲染？
    /**
    * Vue.component('async-webpack-example',fn)
    * 异步组件加载（注册）方式有三种：
    *  1. 普通函数方式 function (resolve, reject) {require(['./my-async-component'], resolve)}
    *  2. Promise方式 () => import('./my-async-component')
    *  3. 高级异步方式  () => ({
    *        component: import('./MyComp.vue'),  //需要加载的组件。应当是一个 Promise
    *        loading: LoadingComp, //加载中应当渲染的组件
    *        error: ErrorComp,  //出错时渲染的组件
    *        delay: 200,     // 渲染加载中组件前的等待时间。默认：200ms。
    *        timeout: 3000   // 最长等待时间。超出此时间则渲染错误组件。默认：Infinity
    *     })
    */
  以 普通函数方式 加载为例子:
  1. 在Vue.component注册异步组件时，第二个参数是个function
  2. 所以进入createComponent流程来返回vnode
  3. 在createComponent流程中，因为是异步组件所以没有cid，所以进入resolveAsyncComponent来处理异步函数，返回Ctor
  4. 在resolveAsyncComponent流程中，factory为注册时的第二个参数function，factory.resolved为undefined,进行初始化，定义一下成功失败的回调函数resolve、reject、forceRender(用于触发watcher的更新)，执行factory函数传入resolve、reject为参数启动异步请求，返回factory.resolved = undefined,即返回的Ctor为undefined
  5. 继续createComponent流程，Ctor === undefined，createAsyncPlaceholder创建一个占位vnode，继续vm._update流程，挂载dom
  6. 此时因为vnode是空的，所以页面也没啥；
  7. 等待异步请求完成，执行异步回调里的函数resolve(),ensureCtor将传入的options转为Ctor函数,赋值到factory.resolved = Ctor;此时不为同步sync=false,会执行resolve函数里的forceRender(true);
  8. 在forceRender(true)里,遍历所有加载完成了的异步组件,强制执行$forceUpdate()去更新这些异步组件
  9. 强制更新再次回到各个异步组件的vm._watcher.update()流程(即updateComponent: _render、_update);
  10. 此时factory.resolved是有值的,进入resolveAsyncComponent流程，直接返回return factory.resolved (有值Ctor);
  11. Ctor不为undefined,继续后面流程,返回组件vnode;
  12. 继续后面的流程。

  /**
  * 启动加载异步组件，并处理回调结果，返回一个组件构造器
  * 1. 默认返回factory.resolved，由于是初次进入，所以resolved是undefined的，则Ctor === undefined
  * 2. 如果factory是对象且有loading属性，那么先返回loadingComp组件
  * 3. 判断Ctor === undefined，返回一个占位组件，不执行后面同步代码；
  * 4. 如果有Ctor === loadingComp组件，则返回loadingComp组件，继续执行后面同步代码；
  * 5. 当异步组件加载完成，会执行vm._watcher.update()，再次进入这里来，此时factory.resolved是有值的
  * 6. 那么会执行后面的同步函数，走正常的render、patch 过程
  * 总结：
  *  异步组件实现的本质是 2 次渲染，除了 0 delay 的高级异步组件第一次直接渲染成 loading 组件外，
  *  其它都是第一次渲染生成一个注释节点，当异步获取组件成功后，再通过 forceRender 强制重新渲染，
  *  这样就能正确渲染出我们异步加载的组件了。
  **/ 


#### 路由懒加载？


10. 手写系列
    手写 Vue2 系列 之 异步更新队列
    https://juejin.cn/post/6984939784133148685

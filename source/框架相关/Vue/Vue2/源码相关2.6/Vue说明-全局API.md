### Vue的方法

#### $nextTick
  原理：
    通过异步方法挂起回调函数，在当前事件循环机制结束后，进入*下一个事件循环机制*时才执行这个cb回调函数
  作用：
    1. 当数据改变后，不会马上更新视图，而是等待所有当前事件循环机制的同步代码执行完毕后，进入*下一个事件循环机制*才更新视图；
    2. 在Vue中是等待数据改变更新Dom后，在cb中获取改变后的DOM；
    例如：某个数据在当前同步代码中被修改了多次，那么它在视图上不会变化多次，最终只展示最后修改的结果
    例如：this.aa = 'xx',this.$nextTick(cb),代码修改了数据aa，由于watcher内部有个nextTick处理，所以aa改变后，不会马上更新视图，而是等待所有当前同步代码执行完毕，才执行视图更新，DOM更新了，然后才是，由于this.$nextTick(cb)又起了个异步处理程序，所以在aa的视图更新后的*下一个事件循环机制*执行时才执行cb函数，获取到更新后的DOM
  代码：
  const callbacks = [] // 保存所有回调函数
  let pending = false  // 默认false
  let timerFunc
  Vue.prototype.$nextTick = function nextTick (cb?: Function, ctx?: Object) { // ctx：当前上下文环境
    let _resolve
    callbacks.push(() => {
      if (cb) {
        try {
          cb.call(ctx) //执行cb
        } catch (e) {
          handleError(e, ctx, 'nextTick')
        }
      } else if (_resolve) {
        _resolve(ctx)
      }
    })
    if (!pending) { // 只有false 才开启 ，true表示已经开启
      pending = true
      timerFunc() // 开启异步队列
    }
    // $flow-disable-line
    if (!cb && typeof Promise !== 'undefined') { // 如果是没cb回调函数，那么将resolve当回调塞异步队列去
      return new Promise(resolve => {
        _resolve = resolve
      })
    }
  }
  说明：
    用callbacks保存所有回调函数，timerFunc开启异步队列，当进入下次事件循环机制的时候，执行callbacks里所有回调函数
  ##### timerFunc函数
  原理：
    利用原声API开启异步队列
  作用：
    开启异步队列，等待当前事件循环机制当前队列所用同步代码执行完毕后，再执行异步队列（可能是当前事件循环机制的微观队列或 下一个事件机制的宏观队列）
  注意：
    timeFunc函数前面所说的*下一个事件循环机制*，都是异步队列的描述，其不一定是下一个事件循环机制宏观队列，可能是当前的微观队列
  代码：
    开启异步队列的方式有n种，vue使用了这几种：
    1. Promise (开启微观队列 microtask)
      if (typeof Promise !== 'undefined' && isNative(Promise)) {
        const p = Promise.resolve() 
        timerFunc = () => {
          p.then(flushCallbacks)
          if (isIOS) setTimeout(noop)
        }
      }
    2. MutationObserver (开启微观队列 microtask) 
      else if (!isIE && typeof MutationObserver !== 'undefined' && (isNative(MutationObserver) || 
        MutationObserver.toString() === '[object MutationObserverConstructor]')){
        // e.g. PhantomJS, iOS7, Android 4.4
        let counter = 1
        const observer = new MutationObserver(flushCallbacks)
        const textNode = document.createTextNode(String(counter))
        observer.observe(textNode, {
          characterData: true
        })
        timerFunc = () => {
          counter = (counter + 1) % 2
          textNode.data = String(counter)
        }
      }
    3. setImmediate (开启宏观队列 microtask)
      else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
        timerFunc = () => {
          setImmediate(flushCallbacks)
        }
      }
    4. setTimeout (开启宏观队列 microtask)
      timerFunc = () => {
        setTimeout(flushCallbacks, 0)
      }

    function flushCallbacks () {
      pending = false // 重制pending
      const copies = callbacks.slice(0) //拷贝到copies上去
      callbacks.length = 0 // 清空callbacks
      for (let i = 0; i < copies.length; i++) {
        copies[i]()
      }
    }
  说明：
    重制pending，方便下一个nextTick，也保证了nextTick执行的顺序，只能等待前一个异步队列执行了，才可以进入下一个的nextTick
    eg: this.$nextTick(cb1);this.$nextTick(cb2);cb2是无效的，不会加入异步队列；只有this.$nextTick(cb => {this.$nextTick(cb2)}),这样才是有效的。
  总结：
    Vue在更新DOM时是异步的，数据变更，会开启一个异步队列，等待所有同步代码执行完毕后，才去执行异步队列里的回调去更新DOM；
    这样的好处是避免数据多次更新，造成真的DOM的多次操作消耗性能。

#### $watch
  原理：
    通过new Watcher来观察Vue实例上的某个属性或含有某个属性的计算函数，在回调里处理业务逻辑
  作用：
    观察 Vue 实例上的一个表达式或者一个函数计算结果的变化。回调函数得到的参数为新值和旧值。表达式只接受简单的键路径。对于更复杂的表达式，用一个函数取代。
    eg:
      // 键路径
        vm.$watch('a.b.c', function (newVal, oldVal) {
          // 做点什么
        })
      // 函数
        vm.$watch(
          function () {
            // 表达式 `this.a + this.b` 每次得出一个不同的结果时
            // 处理函数都会被调用。
            // 这就像监听一个未被定义的计算属性
            return this.a + this.b
          },
          function (newVal, oldVal) {
            // 做点什么
          }
        )
  代码：
    Vue.prototype.$watch = function (
      expOrFn: string | Function, //最终会处理成fn，执行这个fn会读取vm上的对应的属性
      cb: any,  //拿到新值后的回调，cb里可以拿到新旧值
      options?: Object  // 一些配置，deep...
    ): Function {
      const vm: Component = this
      if (isPlainObject(cb)) {
        return createWatcher(vm, expOrFn, cb, options)
      }
      options = options || {}
      options.user = true //标识是用户手动监听的
      const watcher = new Watcher(vm, expOrFn, cb, options) //开启监听
      /**
      * 配置了immediate为true，会立即执行watch的data的回调
      * 会执行 Dep.target = this
      * 立即执行cb函数
      */
      if (options.immediate) {
        const info = `callback for immediate watcher "${watcher.expression}"`
        pushTarget()
        invokeWithErrorHandling(cb, vm, [watcher.value], vm, info)
        popTarget()
      }
      return function unwatchFn () { //vm.$watch 返回一个取消观察函数，用来停止触发回调
        watcher.teardown()
      }
    }
  说明：
    通过this.$watch(vm,'a.b.c',cb)来监听，vm.a.b.c属性值的变化，当变化会触发cb，在cb里能拿到新旧值，可以在这进行业务逻辑处理
    通过this.$watch(vm,function(){return this.a + this.b},cb)来监听，vm.a、vm.b属性值的变化
  总结：
    $watch就是监听vm上的属性的变化，然后在回调里进行业务逻辑的处理

#### $forceUpdate
  原理：
    通过触发被观察的vm的_watcher观察者来强制更新视图
  作用：
    强制触发当前Vue或VueComponent的watcher去更新渲染视图
    eg：在异步组件加载过程中，当异步组件加载完毕后，会执行forceRender(true)强制当前vm更新渲染
    eg: 迫使 Vue 实例重新渲染。注意它仅仅影响实例本身和插入插槽内容的子组件，而不是所有子组件。
    eg: transition 的afterLeave后也会强制更新this.$forceUpdate()
  代码：
    Vue.prototype.$forceUpdate = function () {
      const vm: Component = this
      if (vm._watcher) { //确保vm被观察了，即只有isRenderWatcher才能被强制更新，其他的只能通过数据变化来更新
        vm._watcher.update()
      }
    }
  总结：
    有时候组件被加载了，但是数据没变化(异步的组件或槽)，可以通过此方法来强制更新

#### $set
  原理：
    通过defineReactive中Object.defineProperty方法劫持对象的属性，并手动触发对象的订阅器通知所有依赖更新视图
  作用：
    给对象新增属性，并且使该属性具有响应式功能，同时触发下视图更新
    向响应式对象中添加一个 property，并确保这个新 property 同样是响应式的，且触发视图更新。它必须用于向响应式对象上添加新 property，因为 Vue 无法探测普通的新增 property (比如 this.myObject.newProperty = 'hi')
    eg:this.$set(data,'aa','123'),使aa是响应式的
  代码：
    Vue.prototype.$set = function set (target: Array<any> | Object, key: any, val: any): any {
      /**
      * 如果此对象有该属性，表示已经被劫持了该属性，并且不是Object.prototype的属性或方法，直接赋值
      * 否则 响应式处理该属性，并触发更新
      */
      if (key in target && !(key in Object.prototype)) {
        target[key] = val
        return val  
      }
      const ob = (target: any).__ob__
      if (!ob) { //没被响应式处理的target，直接添加新属性
        target[key] = val
        return val
      }
      defineReactive(ob.value, key, val) //响应式处理该属性
      ob.dep.notify() //手动触发target对应的订阅器通知所有依赖去更新，因为target有新的属性进来了
      return val
    }
  总结：
    给vue的data新增属性时，普通的data.aa = 123 是不会被监听的，只有this.$set(data,'aa','123')
    
#### $delete
  原理：
    数组.splice(key, 1) 对象delete target[key]
  作用：
    eg：this.$delete(this.data,'aaa')
  代码：
    function del (target: Array<any> | Object, key: any) {
      //数组直接删除
      if (Array.isArray(target) && isValidArrayIndex(key)) {
        target.splice(key, 1)
        return
      }
      /**
      * 获取 当前target的ob对象，ob对象是属性的订阅器管理者
      * 删除key后，触发target的更新
      */
      const ob = (target: any).__ob__
      if (!hasOwn(target, key)) {
        return
      }
      delete target[key]
      if (!ob) {
        return
      }
      ob.dep.notify()
    }
  说明：
    删除后要重新触发更新

#### $on
  原理：
    在每个vm上定义了一个_events全局对象，往vm._events对象中添加属性，值对应的回调函数
  作用：
    监听当前实例上的自定义事件。事件可以由 vm.$emit 触发。回调函数会接收所有传入事件触发函数的额外参数。
    eg:EventBus: var Bus = new Vue() 可以在某组件Bus.$on注册事件，在别的组件Bus.$emit来触发
    eg:父组件@/v-on自定义的事件，其实会传到子组建的_events存起来，最终会在子组件通过this.$emit来触发
    eg:组合组件间，通过parent.$emit或child.$emit来触发，parent或child自己定义的$on事件
  代码：
    Vue.prototype.$on = function (event: string | Array<string>, fn: Function): Component {
      const vm: Component = this
      if (Array.isArray(event)) {
        for (let i = 0, l = event.length; i < l; i++) {
          vm.$on(event[i], fn)
        }
      } else {
        (vm._events[event] || (vm._events[event] = [])).push(fn)
        if (hookRE.test(event)) { //如果是hook event，那么打标识
          vm._hasHookEvent = true
        }
      }
      return vm
    }
  
#### $emit
  原理：
    在vm._events对象中找到对应属性，执行所有cbs
  作用：
    触发当前实例上的事件。附加参数都会传给监听器回调。
  代码：
    Vue.prototype.$emit = function (event: string): Component {
      const vm: Component = this
      let cbs = vm._events[event]
      if (cbs) {
        cbs = cbs.length > 1 ? toArray(cbs) : cbs
        const args = toArray(arguments, 1)
        const info = `event handler for "${event}"`
        for (let i = 0, l = cbs.length; i < l; i++) {
          //invokeWithErrorHandling(cbs[i], vm, args, vm, info)
          cbs[i]()
        }
      }
      return vm
    }

#### use
  原理：
    执行插件的install方法
  作用：
    给Vue注册插件
    eg:VueRouter插件：在install函数中给Vue混入了一些生命周期函数，这样每个组件都有这些函数
    eg:Vuex插件：？？？
  代码：
    Vue.use = function (plugin: Function | Object) {
      //创建全局插件缓存数组 _installedPlugins
      const installedPlugins = (this._installedPlugins || (this._installedPlugins = []))
      if (installedPlugins.indexOf(plugin) > -1) { //缓存中有直接从缓存中获取
        return this
      }
      const args = toArray(arguments, 1) 
      args.unshift(this) //给插件提供 Vue构造器 参数
      //注册插件
      if (typeof plugin.install === 'function') {
        plugin.install.apply(plugin, args)
      } else if (typeof plugin === 'function') {
        plugin.apply(null, args)
      }
      //缓存注册后的插件
      installedPlugins.push(plugin)
      return this
    }
  总结：
    可以通过给Vue注册插件来扩展Vue的能力

#### x x x
  原理：
  作用：
  代码：
  说明：
  总结：

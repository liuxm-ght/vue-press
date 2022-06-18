### Vue响应式系统
  1. Vue的响应式系统，使用的设计模式是 发布-订阅模式（观察者模式）
  2. 其基础原理是 通过劫持数据，收集观察者，数据变化后，通知观察者去视图更新

#### 数据劫持(能力前提)
  ##### 什么是数据劫持？为何劫持数据？
  1. 数据劫持就是拦截某个数据的读取、设置操作
  2. 通过拦截这些操作来 监测数据的变化 ，进而 操作视图的更新

  ##### Vue是如何劫持数据的？
  例如：
    const data = {
      name: 'device',
      formData: {
        input: null,
        select: []
      },
    }
  需要劫持这个data对象，Vue是如何劫持的？
  1. Object.defineProperty 为基础
  代码：
    let val = data[name]
    Object.defineProperty(data, 'name', {
      enumerable: true,
      configurable: true,
      get: function reactiveGetter (val) {
        clg('name 被读取了')
        return val
      },
      set: function reactiveSetter (newVal) {
        clg('name 被设置了')
        val = newVal
      }
    }
  说明：
    当读取data.name的时候会打印clg('name 被读取了')，当设置data.name = 'list'的时候会打印clg('name 被设置了')；
    如此可见，data的这个name属性被劫持了。

  2. Observer类 将对象的所有属性转为可监测的(响应式某个对象)
    由于Object.defineProperty的弊端限制了，Object.defineProperty只能劫持对象的某个属性，不能劫持整个对象，所以需要劫持data的所有属性的时候，需要遍历这个对象的属性来处理，对象的属性可能包含对象，所以需要递归处理；
  代码：
    observe(data, true /* asRootData */) 
    function observe (value, asRootData){
      if (!isObject(value) || value instanceof VNode) {return} // 如果不是对象或数组 或是虚拟dom ，retrun
      if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
        ob = value.__ob__
      } else {
        ob = new Observer(value)
      }
      return ob
    }
    class Observer{
      constructor (value) {
        this.value = value
        this.dep = new Dep() //给当前ob也创造一个订阅器，在调用数组增加方法或执行$set、$del给对象新增或删除属性时，会需要这个dep去更新
        def(value, '__ob__', this) //标记data被劫持了，已经是响应式的
        if (Array.isArray(value)) {
          ... //当value为数组时的逻辑，->跳到6 数组的劫持
        } else {
          this.walk(value) //开始对data属性进行劫持处理
        }
      }
      walk (obj: Object) {
        const keys = Object.keys(obj)
        for (let i = 0; i < keys.length; i++) {//对所有属性进行劫持处理
          defineReactive(obj, keys[i]) //真正的劫持处理
        }
      }
    }
    function defineReactive(obj,key,val){
      if(arguments.length === 2){val = obj[key]} //只传obj, key时
      let childOb = !shallow && observe(val) //递归处理，如果data的key属性的值val为对象或数组会继续observe响应处理，如果不是return
      Object.defineProperty(obj, key, {
        ...
        get()...,
        set()...,
      }
    }
  说明：
    Observer类的作用是提供walk等方法来劫持对象属性，并且用value记录了这个被劫持的对象
    asRootData标记这个是根data对象，后面data的属性如果是对象的话不为true 
    __ob__标记这个data对象已经被劫持，后面不需要再劫持，直接返回劫持后的ob对象；在给对象set新增属性时，可以通过__ob__拿到劫持后的ob对象，从而__ob__.value拿到data对象，劫持新增的属性
    defineReactive 是真正劫持对象属性的，并且进行了递归处理

#### 属性订阅
  3. Dep 类 (订阅器类) 用于收集观察者
    劫持数据的目的是为了让对象中的某个数据A更新的时候，可以通知对应的组件(观察者)去更新视图，那么该通知哪些组件(观察者)去更新呢？
    肯定是用到这个数据A的组件(观察者)们，那么就需要数据A提供一个容器(订阅器)来存放这些组件(观察者)，这个过程就叫订阅
    订阅：将观察者存入订阅器中。
    在什么时候订阅呢？在读取每个属性值的时候，将当前的观察者添加到这个属性所产生的订阅器中去。
    在什么时候会读取这些数据的属性呢？在vue或VueComponent初始化完，渲染视图的时候。
  原理：
    JS中监听数据变化的工作是Object.defineProperty来做的，那么观察者需要知道数据变化了，就需要Object.defineProperty来告诉观察者数据变化了，然后观察者去执行更新操作，如果告诉观察者呢？Object.defineProperty需要把观察者记录起来，因为可能有多个观察者，所以用数组来存放这些观察者们，这样数据更新，Object.defineProperty去通知记录的观察者们，可以去更新了。
  代码：
    class Dep {
      constructor () {
        this.id = uid++ //订阅器唯一标识
        this.subs = [] //收集观察者的容器(订阅器)，可能存在多个观察者订阅一个属性的情况
      }
      addSub (sub: Watcher) { //添加观察者
        this.subs.push(sub)
      }
      removeSub (sub: Watcher) { //删除观察者
        remove(this.subs, sub)
      }
      depend () { //校验是否有观察者来添加
        if (Dep.target) { //全局属性，用来标记当前是哪个观察者的环境
          Dep.target.addDep(this) //为什么要观察者这里来添加？？？后面解答
        }
      }
      notify () { //通知观察者更新，如何更新的操作交给观察者去处理
        const subs = this.subs.slice()
        if (process.env.NODE_ENV !== 'production' && !config.async) {
          subs.sort((a, b) => a.id - b.id)
        }
        for (let i = 0, l = subs.length; i < l; i++) {
          subs[i].update()
        }
      }
    }
    function defineReactive(obj,key,val){
      const dep = new Dep()
      ...
      let childOb = !shallow && observe(val) //递归处理，如果data的key属性的值val为对象或数组会继续observe响应处理，如果不是return
      Object.defineProperty(obj, key, {
        ...
        get(){
          const value = getter ? getter.call(obj) : val
          if (Dep.target) {
            dep.depend() //将当前观察者添加到订阅器中去
            if (childOb) { // 如果存在子属性也是对象或数组的情况下，并且也被响应处理了
              childOb.dep.depend() // 那么将当前观察者也加入到子对象或数组的订阅器中去
              if (Array.isArray(value)) { //如果当前值是数组，那么同样将观察者添加到数组的每个元素的订阅器中去
                dependArray(value) 
              }
            }
          }
          return value
        },
        set(){
          const value = getter ? getter.call(obj) : val
          ... 前后一致 或 NuN return
          childOb = !shallow && observe(newVal) //响应式newVal
          dep.notify() //通知当前订阅器中的所有观察者去更新
        },
      }
    }
    function dependArray (value: Array<any>) { //递归处理，将观察者添加到数组的每个observe元素的订阅器中去
      for (let e, i = 0, l = value.length; i < l; i++) {
        // 由于在observe(childOb)时判断是数组会observeArray，处理数组每个元素，将其变成响应式的，所有拥有自身的dep订阅器，并将当前观察者
        // 添加到订阅器中去，如果数组的元素是普通元素不会处理，如果数组的元素是对象或数组，会递归observe处理，
        // 会有__ob__属性及其自身的dep订阅器，所以也将当前观察者添加到其自身的dep中去
        e = value[i];e && e.__ob__ && e.__ob__.dep.depend() 
        if (Array.isArray(e)) { dependArray(e) } //迭归处理  
      }
    }
  说明：
    订阅器的作用就是收集观察者，并提供增删和校验观察者的功能，同时可通知观察者去更新视图
    当父对象的属性被读取的时候，不仅会将观察者添加到当前属性的dep中去，也会将观察者添加到其(子对象属性)的dep中去，如果是子数组属性，还会遍历数组，也将观察者添加到数组中是对象的元素的dep中去；
    这样当父对象的属性值被改动时，也会触发它dep去更新视图，但并不会触发它的子对象属性的dep去更新视图
    那么添加到子对象属性的dep的观察者什么时候会被触发呢？
      在调用数组增加方法或执行$set、$del给对象新增或删除属性时，会ob.dep.notify()去触发这个dep去更新
      eg：this.data = { a : {b : 3}},当this.data.a = {e:xxx}时，会触发a对应的dep去通知watcherA去更新视图
      当this.data.a.b = 4时，并不会去通知watcherA去更新视图，当会通知b的dep去通知watcherB去更新视图
      但是当this.$set(this.data.a,'e',5)时，会去ob.dep.notify()通知watcherA去更新视图，同时劫持e属性，
    这就是ob.dep的作用，在新增属性或元素的时候，能手动更新视图，其他情况都是属性劫持了在被设置的时候被动更新的。

#### 观察发布（发布）
  4. Watcher 类(观察者类) 用于通知更新
    什么是Watcher？
      Watcher就是上面所说的(观察者)，所谓(观察者)就是"谁"依靠"某些数据"来展示，而"某些数据"更新需要去通知"谁"去更新视图。
    Watcher什么时候产生？
      首先要知道如何更新视图，在什么阶段渲染视图的？
        视图的渲染是vue或vueComponent初始化完成之后，开始更新视图，通过render函数产生vnode，通过vnode生成真实dom，挂载到document，从而浏览器会去渲染展示出来。
        所以更新视图就是执行render函数并生成真实dom(方法updateComponent)。
      而Watcher的工作正是在数据更新后，更新视图(即去执行(方法updateComponent)),所以Watcher("谁")在vue或vueComponent实例初始化完成后创造。
    那么为什么要Watcher去通知呢(为什么不直接在订阅器里去更新需要Watcher来转达)?
      "某些数据"需要知道哪些"谁"(观察者)(观察了)它，可能存在多个"谁"的情况，然后"某些数据"更新去通知所有"谁"去更新视图。
      由于可能有多个"谁"，为了便于收集并管理，将更新视图的操作集成成一个类，这个类就叫做Watcher。
  原理：
    Watcher可以被添加到订阅器中去，同时可以更新视图；如何被添加呢？就是通过读数据，触发数据的get，同时全局记录了当前观察者是谁，这样数据的get中可以将观察者添加到它的订阅器中去；数据变化时，数据就可以在set中，通知订阅器的观察者去更新视图了。
  代码：
    class Watcher {
      constructor (
        vm: Component, //vue或vueComponent实例
        expOrFn: string | Function, //更新视图的fn 或 ？？？
        cb: Function, //回调函数，
        options?: ?Object, // 其中有个deep的属性，用于标记是否深度监听
        isRenderWatcher?: boolean
      ) { 
        this.vm = vm
        if (isRenderWatcher) {// 如果是渲染 watcher,由vm实例来的默认为true,$watch来的默认false
          vm._watcher = this // 可用于forceUpdate强制更新时判断是否为有效watcher
        }
        if (options) { ... } else { this.deep = this.user = this.lazy = this.sync = false }
        this.cb = cb
        this.dirty = this.lazy //用于computed的缓存标记，为true，获取新值，为false，拿缓存
        this.getter = expOrFn || parsePath(expOrFn) // parsePath(expOrFn)返回的也是fn，执行这个fn会去读取vm上的属性
        this.value = this.lazy ? undefined : this.get()
      }
      get(){
        pushTarget(this) //Dep.target = this
        const vm = this.vm
        //首次挂载时，执行的是updateComponent，这里会往读取的相关属性的dep中添加当前watcher
        value = this.getter.call(vm, vm) 
        if (this.deep) { // 如果存在 deep，则触发每个深层对象的观察者，追踪其变化
          traverse(value) // ？？？
        }
        popTarget() //Dep.target = null
        this.cleanupDeps()
        return value
      }
      //数据更新流程：订阅器在数据更新时触发notify来触发update
      update () { 
        if (this.lazy) { //computed情况下，lazy为true
          this.dirty = true
        } else if (this.sync) { //sync设置为true，同步情况下，直接执行run()
          this.run()
        } else { //通常情况下，进入queueWatcher异步处理run()
          queueWatcher(this)
        }
      }
      run () {
        if (this.active) { 
          const value = this.get() 
          this.cb.call(this.vm, value, oldValue) //回调函数返回两个参数，新值、旧值
        }
      }
    }
    const bailRE = /[^\w.$]/
    // path = 'a.b.c', data = {a:{b:{c:2}}} ;parsePath(path)(data),返回 2
    function parsePath (path: string): any {
      if (bailRE.test(path)) {
        return
      }
      const segments = path.split('.')
      return function (obj) {
        for (let i = 0; i < segments.length; i++) {
          if (!obj) return
          obj = obj[segments[i]]
        }
        return obj
      }
    }
  说明：
    Dep.target用于在全局标记了当前观察者是谁
    初始化：在vue初始化的时候，观察者Watcher，默认触发get()去渲染视图，此过程中会读取数据的一些属性，会触发其订阅器去收集观察者，由于Dep.target被标记了，所以当前观察者Watcher会被添加到对应的订阅器中去；
    更新：在data的数据更新的时候，会被订阅器们，去通知对应的观察者们，去update()更新视图
  总结：
    Watcher就是观察Vue/VueComponent实例上的某个属性或含有某个属性的计算函数，在回调里处理业务逻辑
    观察者就是监听数据，并且数据变更可以去更新视图
    Watcher (观察者)：每个Vue组件都有一个对应的 Watcher ，这个 Watcher 将会在组件 render 的时候收集组件所依赖的数据，并在依赖有更新的时候，触发组件vm._updata调用patch()进行diff，重新渲染DOM。

#### 异步更新视图
  5. nextTick异步更新视图
    为什么要异步更新视图？
      如果data中的多个数据被短时间内或同一进程内被改变，那么会通知所有观察者去更新视图，假如某个观察者订阅了data的多个数据，那么它会被执行多次更新，如果是大量循环操作，会造成严重的渲染性能问题；所以vue做了异步更新处理，同一进程下，将所有更新先异步挂载起来，执行完当前循环机制改变数据，等待下一个循环机制再去更新视图
  代码：
    const queue: Array<Watcher> = []
    let has: { [key: number]: ?true } = {}
    let waiting = false
    function queueWatcher (watcher) {
      const id = watcher.id
      if (has[id] == null) { //判断watcher queue队列 是否已经存在相同wathcer，存在直接跳过，不存在加入queue队列
        has[id] = true
        queue.push(watcher)
        if (!waiting) {
          waiting = true
          nextTick(flushSchedulerQueue) //nextTick后执行queue队列
        }
      }
    }
    function flushSchedulerQueue () { //此时的data的数据是最新的了，但是视图还没更新过来，现在就是更新视图
      queue.sort((a, b) => a.id - b.id) //根据watcher.id 来排序，可确保更新顺序是由父到子的更新
      for (index = 0; index < queue.length; index++) {
        watcher = queue[index]
        has[id] = null //从异步更新队中移除，列标记更新了
        watcher.run() //执行更新
      }
      //调用updated钩子
      const updatedQueue = queue.slice()  //获取异步更新队列触发钩子
      callUpdatedHooks(updatedQueue) //触发更新钩子
    }
    function callUpdatedHooks (queue) {
      let i = queue.length
      while (i--) { //先触发子的钩子，再触发父的钩子
        const watcher = queue[i]
        const vm = watcher.vm
        // 如果是渲染 watcher，并且已经挂载过了，并且没有被销毁的情况下 (第一次不会执行 updated)
        if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
          callHook(vm, 'updated')
        }
      }
    }
  说明：
    如此可见updated钩子也是由子到父的，更mounted一样
    如此可见视图的更新是等待上一次浏览器循环机制完成后，此时数据全部是最新的了，因为数据的更新是同步的，但是视图的更新是在nextTick后的下一个浏览器循环机制中处理的，此时所有数据都是最新的了
    nextTick的详细讲解在《Vue说明-方法.md》中会详解。
    更新视图时，将watcher塞入异步队列时，会做一个去重判断，防止同一个watcher多次塞入

#### 数组的劫持
  6. 数组的劫持处理
    当this.arr1.push(xx)时，为了使this.arr1.xx也是响应式的，必须对其进行劫持
    如何劫持？通过重写数组常用的方法，提前进行劫持这些新增或修改的元素。
    代码：
      常用方法：
      const arrayProto = Array.prototype
      const arrayMethods = Object.create(arrayProto) //拷贝的arrayProto
      const methodsToPatch = [
        'push',
        'pop',
        'shift',
        'unshift',
        'splice',
        'sort',
        'reverse'
      ]
      ...
      Observer中劫持数组的流程：
      if (Array.isArray(value)) {
        if (hasProto) { // 有__proto__
          //重制原型链 value.__proto__ = arrayMethods，使value的原型链上有arrayMethods这些方法
          protoAugment(value, arrayMethods)  // 也相当于Object.setPrototypeOf(value, arrayMethods);
        } else { 
          copyAugment(value, arrayMethods, arrayKeys) //
        }
        this.observeArray(value)
      }
      methodsToPatch.forEach(function (method) {
        const original = arrayProto[method]
        def(arrayMethods, method, function mutator (...args) { //劫持原数组原型对象上的方法，返回新方法mutator
          const result = original.apply(this, args)
          const ob = this.__ob__ //this指向的是this.arr1,它之前被响应式处理了所以有__ob__属性
          let inserted
          switch (method) { //只有新增的属性才会进行响应式处理
            case 'push':
            case 'unshift':
              inserted = args
              break
            case 'splice':
              inserted = args.slice(2)
              break
          }
          if (inserted) ob.observeArray(inserted) // 给新增的属性也进行响应式处理
          ob.dep.notify() // 手动触发了更新，数组的所有操作都触发更新，这就是为什么数组变更后也能更新视图，即触发了arr1的dep
          return result
        })
      })
      function def (obj: Object, key: string, val: any, enumerable?: boolean) { //劫持指定对象的key
        Object.defineProperty(obj, key, {value: val, enumerable: !!enumerable,...}
      }
      function observeArray (items: Array<any>) { //将数组每个元素进行响应式处理
        for (let i = 0, l = items.length; i < l; i++) {
          observe(items[i])
        }
      }
    说明：
      数组的响应式处理，原理就是通过重写原生数组原型对象上的方法来处理的，通过Object.defineProperty重新定义读取数组原型对象上的方法时返回的值，即执行数组原型对象上的方法时执行的函数被重新定义了，在新的函数里对添加的参数进行了响应式处理，并最后都进行了手动更新视图
      但是也有弊端，就是arr1[0] = xx ,arr1.length = 0 //类似这样的修改数组的时候，并不会触发更新，因为这样的赋值操作并没有被重写
      但是Vue同样给出了解决方法，就是 Vue.set和 Vue.delete 来处理这样的问题。
      ob.dep.notify() 手动更新视图
      ob.dep是在对data进行new Observer响应式处理的时候，this.dep = new Dep()添加了个dep属性，
      表明不单是data的属性key拥有dep订阅器，data本身也有订阅器，并且如果它的data.key的订阅器添加了观察者，那么如果data.key的值value(是个对象或数组)，那么也会有订阅器，也会添加这个观察者
      eg: data.arr1 = [] ,那么data.arr1读取的时候，arr1的dep会添加当前观察者；同时[]也会被响应式处理，有dep[]，也会将当前观察者添加到这个dep[]中；
      这样做的好处是如果被劫持的属性key1的值是对象obj1或数组arr1的时候，要想通过key1去触发视图更新，只能通过 key1 = obj2 或 arr2 来通知key1对应的观察者去更新视图；如果对象obj1或数组arr1有自己的订阅器的时候，想要通过key1触发.视图更新，就可以通过 arr1.push(xxx),然后手动ob1.dep.notify() 或 对象obj1 通过Vue.set设置新属性时，也会手动触发ob1.dep.notify()，去更新视图

#### 手写代码
  10. 手写系列
      手写 Vue 系列 之 Vue1.x
      https://juejin.cn/post/6977152988678733855
      手写 Vue 系列 之 从 Vue1 升级到 Vue2
      https://juejin.cn/post/6978773901736149029
      手写 Vue2 系列 之 computed
      https://juejin.cn/post/6983827167079563295
### 完
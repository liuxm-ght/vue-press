### 渲染流程
  1. Vue的渲染流程
      1. 初次渲染：
          1. vue实例化、初始化[init](./Vue说明-初始化阶段.md)、合并参数mergeOptions、数据[响应式](./Vue说明-响应式系统.md)处理Observe、开始挂载[mount](./Vue说明-挂载阶段.md)、执行mountComponent
          2. 实例化渲染watcher、执行updateComponent、执行[render](./Vue说明-Render详解.md)函数生成vnode、执行update函数根据vnode生成dom挂载到app上
          3. update函数执行过程是，[patch](./Vue说明-Patch详解.md)比对新旧vnode，通过createElm创建真实dom并挂载，如果patch过程中，发现是普通节点，直接调用DOMAPI创建真实dom并挂载vnode上，然后递归调用createChildren处理子节点，最终将生成的dom挂载到父节点上去；如果patch过程中，发现是组件vnode，会执行createComponent，进入组件的渲染环节；

  2. 组件的渲染流程
      1. 注册组件：通过Vue.component注册组件，其原理是vue.extend原型链继承vue构造函数的属性方法，产生组件构造函数componentCtor，挂载到options.component上
      2. 渲染流程：组件渲染流程跟vue的渲染流程一样，最终组件生成的真实dom的挂载到其父真实DOM节点上
          1. new componentCtor，执行vueComponent实例化、初始化init、合并参数mergeOptions、数据响应式处理Observe、开始挂载mount、执行mountComponent
          2. 实例化渲染watcher、执行updateComponent、执行render函数生成vnode，执行update函数根据vnode生成真实dom挂载到app上
          3. update的过程是执行patch比对新旧vnode，通过createEle来创建真实dom，如果是非组件vnode，直接调用DOM api创建真实dom，并挂载到父dom节点；如果是组件vnode，执行createComponent，实例化组件Ctor，进入组件的渲染流程，最后组件内部完成DOM的挂载，将生成的dom挂到组件vnode.elm上，然后将vnode.elm挂载到组件父真实节点Dom上去；

### Vue 一般响应式流程：
  在此之前对Vue构造函数及原型对象进行了一系列的初始化，使得Vue实例有一系列的属性和方法
1. new Vue(options) -> //src/core/instance/index.js
2. _init(options) Vue实例初始化
3. vm.$options = mergeOptions(...,options）传入配置合并
4. 初始化
  1. initProxy(vm) 代理vm -> //src/core/instance/proxy.js
    1. vm._renderProxy = new Proxy(vm, handlers) //对Vue或组件实例代理监听，当读取或遍历实例的属性或方法时，做判断或发出警告
    2. vm._renderProxy // 实例 options上的 render函数执行时所在作用域
  2. initLifecycle(vm) 初始化生命周期 -> //src/core/instance/lifecycle.js
    1. 主要是赋值了vm.$parent = parent
    2. 定义了一些根属性 vm.$root vm.$refs vm._watcher vm._directInactive vm._isMounted vm._isDestroyed...
  3. initEvents(vm) 初始化事件 -> ///src/cor= e/instance/events.js
    1. vm._events 用来存放当前vm实例的所有自定义事件
    2. listeners = vm.$options._parentListeners 从vm实例optioins参数中获取到当前组件绑定的events
    3. updateComponentListeners(vm, listeners) 将事件加入到中
  4. initRender(vm) 初始化render -> //src/core/instance/render.js
    1. $slots 初始化
    2. vm实例上挂载方法 核心函数 _createElement ($createElement = _c = createElement = _createElement)
    3. 劫持 $attrs $listeners 为后面更新准备
  5. callHook(vm, 'beforeCreate') 触发 beforeCreate 生命周期
  6. initInjections(vm) 初始化 inject
  7. initState(vm) 数据劫持初始化 -> //src/core/instance/state.js
    1. initData(vm) data\computed\watch 数据劫持初始化
      1. proxy(vm, `_data`, key) // 代理，直接this.xxx 代替 this._data.xxx
      2. observe(data, true /* asRootData */) //开始数据劫持,仅劫持并不触发get或set
        1. new Observer()  -> //src/core/observer/index.js
          创建 dep = new Dep() 订阅器盒子，用来存放watcher们 -> //src/core/observer/dep.js
          walk() 遍历data
            defineReactive(obj, keys[i]) 属性进行监听
              get: if (Dep.target) dep.depend() 读取该属性值时，将对应的watcher添加入当前属性的dep中;
              set: dep.notify() 修改该属性时，subs[i].update()通知对应的(subs[i] -> wathcer)更新视图
                ---------watcher 在什么情况产生？后面会讲到。
                wathcer更新视图
                  update() -> //src/core/observer/watcher.js
                    queueWatcher(this) 将当前watcher加入异步队列，是为了防止数据连续修改导致连续的render、patch、操作dom等性能问题，加入异步队列，在nextclick后再修改就不会有这问题，nextclick后拿到的数据是最后一次修改的数据 -> //src/core/observer/scheduler.js
                    ---------nextclick 如何实现？下一个课程会讲解
                    nextclick后 执行回调 flushSchedulerQueue() 执行watcher.run() //执行更新
                  run ()
                    this.get()
                      pushTarget(this) 将Dep.target = this -> this.getter.call(vm, vm) this.getter = expOrFn 为new Watcher 时的一个参数，new Vue()时是updateComponent -> //src/core/instance/lifecycle.js ,
                      updateComponent
                        vm._update(vm._render(), hydrating)
                          vm._render() 将new Vue()的render函数转换为vnode
                          vm._update 将转换的vnode生成真实dom，即挂载
  8. initProvide(vm) 初始化 provide
  5. callHook(vm, 'created') 触发 beforeCreate 生命周期
5. vm.$mount(vm.$options.el) 开始dom挂载
6. 开始挂载主要做了如下事情：
  1. 初次渲染时，生成渲染watcher（ pushTarget(this) //Dep.target = this），
  2. 触发render函数生成vnode（执行render读取对应数据时，会触发对应的get，将这个watcher添加到当前订阅器中去），
  3. 执行_update将vnode转化成真实dom，插入到html文档中去，挂载完成
---------watcher 如何执行？下一个课程会讲解
7. 数据更新时，触发对应watcher的update，同样触发render函数生成新的vnode，执行_update将新旧vnode diff比对，操作旧dom真实更新dom

##### watcher 如何执行？
  1. vm.$mount 执行的是 mountComponent   -> //src/core/instance/lifecycle.js
  2. callHook(vm, 'beforeMount')
  3. new Watcher(vm, updateComponent,...)
    1. 实例化Watcher，执行this.get()，pushTarget(this)(Dep.target = this)，
    2. value = this.getter.call(vm, vm) //首次挂载时，执行的是updateComponent -> //src/core/instance/lifecycle.js）
    3. vm._render() 执行vm的渲染函数，最后会生成vnode返回
      1. 如果过程中遇到组件，会生成组件vnode，带有Ctor，无children、parent,elm指向undefined
      2. 如果是普通节点，会生成非组件vnode，有children、parent,elm指向当前elm
    4. vm._update() 根据返回的vnode，进行patch、diff比对过程，生成真实dom
      1. 根据vnode创建真实dom
      2. 如果是组件vnode，实例化组件vnode.Ctor,进入组件的初始化、render、update、patch、diff、生成dom、挂载到父级el
      3. 如果是非组件v弄的，直接生成创建dom，递归处理子组件，插入到当前dom中去，最后将当前dom挂载到父级el
    5. 最后将vm.$el = el 挂载到body上去
  4. vm._isMounted = true 
  5. callHook(vm, 'mounted')

### Vue组件的首次渲染流程？
  在此之前对Vue构造函数及原型对象进行了一系列的初始化，使得Vue实例有一系列的属性和方法
  并且经过了上面1234一系列初始化、数据劫持、开始挂载5
  挂载过程跟6一样，只是在执行render函数时，会在_createElement判断是否为组件，是组件走创建组件流程
  1. createComponent 会根据Ctor(VueComponent组件构造器)创建一个虚拟Vnode
  2. 返回Vnode进行，
      执行vm._update(vm._render(), hydrating)，
        --------- patch vnode到真实dom？下一个课程会讲解
        会进行patch比对，有两种情况：
          1. 旧节点非组件：
            1. 旧节点为真实oldDom，转为空vnode，createElm将新vnode转为真实newDom挂载到oldDom的父级dom去，清除掉oldDom
            2. 旧节点为真实oldVnode，且新旧都为同一节点，patchVnode比对节点，更新dom
          2. 旧节点组件
            1. 初次patch过程时，无旧真实或虚拟节点，即isUndef(oldVnode)是true的
              直接createElm(vnode, insertedVnodeQueue) 创建真实dom
                判断是否为组件createComponent(vnode, insertedVnodeQueue, parentElm, refElm)
                  let i = vnode.data;if (isDef(i)) 判断是否为组件
                  1. if (isDef(i = i.hook) && isDef(i = i.init)) 是组件且有init函数，
                    执行init，开始组件的实例化
                      const child = vnode.componentInstance = createComponentInstanceForVnode(vnode,activeInstance) 实例化组件
                        return new vnode.componentOptions.Ctor(options) // 返回 组件 Sub实例
                          实例化组件过程中进行了，组件的初始化，初始化完成，但是没有el，所以不会挂载，最后返回组件实例
                      child.$mount(hydrating ? vnode.elm : undefined, hydrating) 将返回的Sub挂载，但vnode.elm即父级为undefined，所以暂不挂载
                  2. if (isDef(vnode.componentInstance)) 如果是有组件是被实例化了的，那么开始组件挂载
                    initComponent(vnode, insertedVnodeQueue) 
                    insert(parentElm, vnode.elm, refElm) 将创建好的组件对应的真实dom插入到父级中去

##### 注意两个概念
1. 组件vnode，组件vnode是用h(App)、link.js这样render返回的vnode，没有children vnodes 和 parent vnode，携带有ctor构造函数
2. 非组件vnode，非组件vnode是实例化组件时render返回的vnode，一般有children vnodes 和 parent vnode（即实例化组件vnode）


##### 1.案例一：项目目录结构，项目存在 vue-router-test/router-test （/Users/xiaoming.liu/test-projects/vue/vue-router/vue-router-test/vue-router-3.5.3-test）
  ----main.js 
      App.vue
  ----component
      ----hello.vue
          home.vue
          helle-child1.vue
          helle-child2.vue
          .
          .
          .
  执行main.js
    1. new Vue({ render: h => h(App)}).$mount('#app') ,
      App为App.vue文件解析后的组件对象，
        结构大概如：
          {name:'App',render:f(),data:f(),beforeCreate:f()...}
        注释：render函数是App.vue文件解析后的render函数(render_App)，返回一个_createElemnet函数，
          结构大概如：
            return _c(
              "div",
              { attrs: { id: "app" } },
              [
                _c("router-link", { attrs: { to: "/home" } }, [_vm._v("home的link")]),
                _c("span", { staticStyle: { margin: "0 10px" } }, [_vm._v("|")]),
                _c("router-link", { attrs: { to: "/hello" } }, [_vm._v("hello的link")]),
                _c("router-view"),
              ],
              1
            )
    2. 实例化Vue，开始渲染组件 
        1. new Watcher () (后面用Watcher_Vue_Big来代替new Watcher)，get，
          执行render，执行h => h(App),_createElement,createComponent,
            return vnode_App 携带Ctor_App的vnode，组件vnode
          执行patch_BigVue，createElm(vnode_App,parentElm_body),createComponent(parentElm_body),i.hook.init触发Ctor_App组件实例化
          (注释: 由于一开始div#app为真实dom，所以走流程createElm时会拿到body为parentElm，这是第一个带parentElm的createElm)
        2. new VueComponent_App()(后面用Watcher_Vue_App),get,
          执行render_App，按程序顺序最开始
            执行_c("router-link"...),_createElement,createComponent,return vnode_RouterLink 携带Ctor_RouterLink的vnode，组件vnode
                                                  (注释：此时createComponent返回的vnode是没有children的，所以后面diff会直接跳过不会深入diff)
            执行_c("span"...),_createElement,return vnode_span，非组件vnode
                                                  (注释：此时createComponent返回的vnode是有children的，所以后面会深入diff)
            执行_c("router-link"...),_createElement,createComponent,return vnode_RouterLink 携带Ctor_RouterLink的vnode，组件vnode
                                                  (注释：此时createComponent返回的vnode是没有children的，所以后面diff会直接跳过不会深入diff)
            执行_c("router-view"...),_createElement,createComponent,Ctor.options.functional=true，createFunctionalComponent，执行router-view的render函数，由于默认路由为/，没有对应的组件，所以record为null，return h()，createEmptyVNode，return empty_vnode，非组件vnode
              (
                注释：router-view组件在VueRouter实例初始化init时注册了，router-view组件结构大概如：
                routerView = {
                  functional: true,
                  render(h, { parent, data }) {
                      console.log('view render ',{ parent, data });
                      const { matched } = parent.$route
                      data.routerView = true // 标识此组件为router-view
                      let depth = 0 // 深度索引
                      while(parent) {
                          // 如果有父组件且父组件为router-view 说明索引需要加1
                          if (parent.$vnode && parent.$vnode.data.routerView) {
                              depth++
                          }
                          parent = parent.$parent
                      }
                      const record = matched[depth]
                      if (!record) {
                          return h()
                      }
                      const component = record.component
                      // 使用render的h函数进行渲染组件
                      return h(component, data)
                  }
                }
              )
            执行_c("div"...,children:[vnode_RouterLink,vnode_span，,vnode_RouterLink,empty_vnode]),_createElement,return vnode_div，非组件vnode
                                                  (注释：此时返回的vnode是有children的，所以后面diff会深入diff)
          执行patch_App，createElm(vnode_div,parentElm_undefined ）,createComponent(判断为非组件),createChildren,children:[vnode_RouterLink,vnode_span，,vnode_RouterLink,empty_vnode],开始循环处理子组件dom插入
            (注释: )
            a.createElm(vnode_RouterLink, parentElm_div),createComponent(parentElm_div)(判断为组件),i.hook.init触发Ctor_RouterLink组件实例化，
              3. new VueComponent_RouterLink()(后面用Watcher_Vue_RouterLink),get,
                执行routerLink_render的render函数，_createElement，return vnode_a
                  注释：routerLink的函数式组件结构大概如：
                    const routerLink = {
                      ...
                      render(h) {
                        return h('a',...)
                      },
                    }
                执行patch_RouterLink，createElm(vnode_a,parentElm_undefined ),createComponent(判断为非组件),createChildren,children:[vnode_text_"home的link"],开始循环处理子组件dom插入
                  createElm(vnode_text_"home的link",parentElm_a ),createComponent(判断为非组件),createTextNode,insert(parentElm_a, vnode.elm_text, ref_undefined) 子组件或子标签插入进父组件后，继续执行父级未完成的代码
                  子组件插入完成，开始执行父级插入
                insert(parentElm_undefined, vnode.elm_a, ref_undefined)
                invokeInsertHook() 触发Watcher_Vue_RouterLink组件的mounted回调钩子函数
              Watcher_Vue_RouterLink实例化完成了，将组件实例化后生成的elm_a挂载到父级dom上去parentElm_div
            insert(parentElm_div, vnode.elm_a, ref_undefined);
              完了，继续下一个vnode的插入处理
            b.createElm(vnode_span, parentElm_div),createChildren,children:[vnode_text_"|"],开始循环处理子组件dom插入
                createElm(vnode_text_"｜",parentElm_span ),createTextNode,insert(parentElm_span, vnode.elm_text, ref_undefined) 子组件或子标签插入进父组件后，继续执行父级未完成的代码
                子组件插入完成，开始执行父级插入
            insert(parentElm_div, vnode.elm_span, ref_undefined)
              完了，继续下一个vnode的插入处理
            c.createElm(vnode_RouterLink, parentElm_div),...跟a的操作一样，最后将vnode_RouterLink生成的dom插入到parentElm_div
              此时parentElm_div的innerHTML字符串有'<a>xxxx</a><span>xxxx</span><a>xxxx</a>'
              完了，继续下一个vnode的插入处理
            d.createElm(empty_vnode, parentElm_div),createComment创建注释dom,
            insert(parentElm_div, vnode.elm_empty_comment, ref_undefined)
            子组件插入完成，开始执行父级插入
          insert(parentElm_undefined, vnode.elm_div, ref_undefined)
          invokeInsertHook() 触发Watcher_Vue_App组件的mounted回调钩子函数
          Watcher_Vue_APP实例化完成了，将组件实例化后生成的elm_div挂载到父级dom上去parentElm_body
        insert(parentElm_body, vnode.elm_div, ref_undefined)  组件实例化完成后的insert

      
  ##### 注意：
    1. 组件render时createComponent产生的vnode(即组件vnode)的children为undefined，children挂在componentOptions.children上了,所以在父组件进行patch时，updatechildren的diff的时候，子组件的children是undefined，所以不会进入子组件的updatechildren的diff比对，直接进入下一个child的diff。
    2. 那么子组件的children在什么时候diff呢？在子组件自身进行patch时，updatechildren的diff的时候，才会进行它的子组件的diff，
    但是此时的子vnode为何有children呢？因为在子组件render的时候(返回的是非组件vnode)，非组件vnode上有children。


### Vue组件更新渲染流程？
  例子: 当切换hello儿子2时Vue是如何运转的？
  1. vueRouter通过监听hashchange来改变this._route的值来通知Vue去更新组件的；
  2. 哪些组件订阅了这个_route属性呢？由于vueRouter在install时全局mixin了beforeCreate方法
      1. 所以new Vue时读了this._route，所以订阅了_route；
      2. 在new RouterLink的render时也读取了this.$route，所以订阅了_route；
      2. 在new RouterView的render时也读取了parent.$route，所以订阅了_route；
  3. 案例中就有
    Watcher_Vue_App、
    Watcher_Vue_RouterLink—home、
    Watcher_Vue_RouterLink-hello、
    Watcher_Vue_Hello.vue、
    Watcher_Vue_RouterLink—hello_child1、
    Watcher_Vue_RouterLink-hello_child2、
  4. 当this._route改变会通知上面所有的wathcer去更新视图
  5. Watcher_Vue_App更新App，执行watcher.run触发updateComponent，重新组件app-render，返回非组件vnode_div，patch新旧非组件vnode_div，非组件vnode_div有children:[vnode_RouterLink,vnode_span,vnode_RouterLink,vnode_hello]，updateChildren，开始diff比对新旧children，vnode_RouterLink\vnode_RouterLink\vnode_hello都是组件vnode，没有child不继续updateChildren的diff比对,vnode_span有children:[vnode_|],updateChildren，开始diff比对新旧vnode_span的children，更新旧vnode_|的真实dom，完成vnode_div的patch；
  6. Watcher_Vue_RouterLink—home、Watcher_Vue_RouterLink-hello类似上面的流程；
  7. Watcher_Vue_Hello.vue更新Hello.vue，执行watcher.run触发updateComponent，重新组件hello-render，返回非组件vnode_hello，patch新旧非组件vnode_hello，非组件vnode_hello有children:[vnode_div,vnode_RouterLink,vnode_|,vnode_RouterLink,vnode_hello_child1]，updateChildren，开始diff比对新旧children，前面4个类似5的后面流程，vnode_hello_child1与新的vnode_hello_child2比对，发现没有久的isUndef(idxInOld)一样的Vnode，createElm创建新的dom(传参parenr_div_hello)，vnode_hello_child2为组件vnode，createComponent(判断为组件)，实例化组件，实例完成插入父级dom(parenr_div_hello)，最后新旧指针分别比对，当旧指针oldStartIdx > oldEndIdx为false，newStartIdx > newEndIdx为true，说明旧的dom有多余的，删除掉多余的；removeVnodes(oldCh, oldStartIdx, oldEndIdx);
  8. 最后完成Watcher_Vue_Hello.vue更新
  9. 继续后面没完成的wathcer的更新。


### 总结
  1. 初次渲染：
    1. vue 实例化，做了options合并，数据劫持，监听数据变化；
    2. 开始挂载，启动watcher监听，执行render生成vnode，根据vnode生成真实dom，挂载到页面。
  2. 更新：
    1. 数据变化，通知对应的watcher去update更新视图；
    2. 重新执行render生成vnode，patch比对新旧vnode，diff其子组件们，更新真实dom；
  3. 注意的是：
    在更新过程中，如果父级组件下有多个子组件(vnodes)，而子组件中如果是组件vnode，那么比对过程中只比对当前新旧组件vnode，而不继续深入比对其子组件，如果不是组件vnode,是普通节点vnode，那么会深入diff比对其子组件，diff的过程会操作旧的真实dom进而直接更新页面；
    那么组件vnode何时深入比对其子组件呢？如果这个组件vnode有订阅对应的数据，那么数据更新，也会触发起watcher，进而重新render其生成vnode，去比对它的新旧vnode，diff其子组件们，更新真实dom；
  
### 完  
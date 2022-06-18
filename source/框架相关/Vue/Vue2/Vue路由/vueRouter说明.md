##### 此项目可以用来研究vuerouter的跳转问题及vue组件渲染过程。
### VueRouter 工作流程

#### 1. 使用方法
1. Vue.use(VueRouter)
2. new VueRouter(routes),routes为路由配置
3. new Vue({router}), router为VueRouter实例 

#### 1. 原理及流程说明  
  ##### 1. Vue.use(VueRouter) 原理 ？
  1. Vue.use 原理实际上是执行了 插件VueRouter的 install 函数，并主动提供了第一个参数Vue
  2. VueRouter的install函数，做了三件事情:
    1. Vue.mixin()为每个组件及大Vue，合并了beforeCreate生命周期函数，
      ##### beforeCreate生命周期函数做了什么？为什么在beforeCreate处理？
        1. 根组件: 即this.$options.router为true，
          1. 设置_routerRoot为根组件
                this._routerRoot = this
          2. 获取路由实例，并初始化init
                this.$router = this.$options.router，this.$router.init(this)
              ###### VueRouter实例init初始化做了什么？
          3. 给根组件添加一个_route属性，并进行响应式处理，当读取时返回当前路由，设置时可以触发根watcher，并更新视图
                Vue.util.defineReactive(this, '_route', this.$router.history.current)
        2. 非根组件: 
          1. 设置_routerRoot，从父组件中获取
                this._routerRoot = this.$parent && this.$parent._routerRoot
        3. 在beforeCreate处理是因为，此时组件的$options已初始化完成，可以获取，并且此时组件的其他data、props、computed等的属性还没初始化，这些属性可能用到上面挂载的那些属性，所以放在beforeCreate处理
    2. Vue的原型对象上添加了
          1. $route属性，这样任何由Vue扩展的组件都可以访问改属性，并读取到this._routerRoot._route
          2. $router属性，从根组件获取this.$router = this._routerRoot.$router  
    3. 注册routerView、routerLink组件

  ##### 2. new VueRouter(routes) 原理 ？
  1. 提供一些VueRouter的方法: 初始化init、路由生命周期钩子函数等
  2. 根据routes创建matcher: 创建path-record(路由-组件)等映射表，提供操作映射表的方法（查询、添加、匹配）
  3. 根据mode(默认hash模式)实例化new xxxHistory()对象(确认浏览器模式): 提供 setupListeners开启路由监听(默认监听popstate而非hashchange)、transitionTo路由跳转后的处理方法
  4. 当new Vue 会执行VueRouter的init方法，开始init的过程------>

  ##### 3. new Vue({router}) 原理 ？
  1. 将 router路由实例挂在$options上
  2. 实例化vue，开始Vue的生命周期，触发VueRouter实例的init初始化

#### 2. 流程说明
  ##### 1. Vue.use安装VueRouter插件，使每个组件混入beforeCreate生周期函数，定义全局变量$router、$route，注册全局routerView、routerLink组件；
  ##### 2. 根据路由配置routes，实例化VueRouter，获取路由与组件的映射表，并提供操作路由的方法，根据mode确定并实例对应的history对象，即确定路由模式；
  ##### 3. 实例化Vue，在合并的beforeCreate中发现有router配置项，init初始化router，并劫持_router，用于更新组件

  ###### 在init初始化router过程中，做了两件事：
  1. 触发history.transitionTo
      为了在手动刷新页面时也能监听到路由的变化，手动触发一个路由切换函数history.transitionTo，开始监听浏览器url变化（eg:hashchange）,当hashchange时this.router.match去映射表查找到对应的route，updateRoute更新路由：更新当前路由current（标识整个router当下使用的route）、触发cb函数（初次手动触发的为null），接着触发_router变化导致Vue的watcher更新视图
  2. history.listen监听路由的变化，提供回调函数cb用于触发_router变化，来触发Vue的watcher更新视图。
    完成路由的任务。

    (具体流程: 在VueRouter实例化时，确定了hashHistory并实例化了，获取到history，提供了一下方法和属性，在Big_Vue实例过程中由于混入了VueRouter初始化init的方法，执行VueRouter初始化init，将手动触发(transitionTo)一次history的改变，启动浏览器监听(获取到最新的route，执行confirmTransition成功回调updateRoute更新路由，并执行onComplete(即setupListeners)开启浏览器监听)，并往history上挂一个回调函数用来更新vue组件的；)

#### 3. 路由切换流程
  (注意 : // 默认 supportsPushState 为true(即浏览器支持pushState),所以默认监听popstate，而不是hashchange)
  1. 浏览器url切换
      popstate\hashchange监听到变化，触发_router变化，来触发Vue的watcher更新视图。
  2. 组件切换
      routlink点击触发router.push/replace来histroy.push，触发transitionTo来触发_router变化，来触发Vue的watcher更新视图。


#### VueRouter 生命周期执行顺序？
  ##### 全局前置守卫 、 独享路由 、 组件路由
  1. beforeEach 
  2. beforeResolve
  3. afterEach
  1. beforeEnter
  1. beforeRouteEnter\ beforeRouteUpdate \ beforeRouteLeave

    1. 首先实例化完VueRouter后，在new Vue之前，VueRouter在项目mian.js中，手动注册钩子们，执行了beforeEach、beforeResolve、afterEach等钩子函数，将钩子加入对应的hooksList中（把回调函数存在beforeHooks、resolveHooks、afterHooks数组里）;
    2. 触发big_Vue混入mixin的beforeCreate，init初始化VueRouter，手动触发一个路由切换函数history.transitionTo，在transitionTo的confirmTransition中，获取路由的metched的组件对应的 updated, deactivated, activated 路由守卫，将这些守卫按顺序存入queue中([deactivated之前销毁的组件的钩子们beforeRouteLeave]、[this.router.beforeHook根路由的beforeEach]、[updated需要更新的组件的钩子们beforeRouteUpdate]、[activated激活的组件的路由配置的独享路由钩子们beforeEnter]、[异步activated激活的组件]);
    3. 按步骤执行queue里的钩子们，只有next执行非false才进行下一步流程，否则会阻塞后面的流程,报错
    4. 当根路由的queue中的钩子们都执行完了，执行回调cb开始获取([获取当前所有激活路由的所有beforeRouteEnter]、[根路由的beforeResolve钩子]),
    5. 按步骤执行queue里的钩子们，只有next执行非false才进行下一步流程，否则会阻塞后面的流程,报错
    6. 在onComplete后， [执行根路由的afterEach守卫]
  
  至此，路由的所有守卫执行完毕；
  开始执行mian.js本身的beforecreate，继续Big_vue初始化流程。
  当路由切换，触发_route改变，触发全局组件更新，从新进入最开始的流程，获取路由的metched的组件对应的 updated, deactivated, activated 路由守卫，将这些守卫按顺序存入queue中，但是当前需要销毁、更新、激活的组件不一样了，所以触发的对应的守卫也不一样了；但是最后同样进入Big_vue的watcher更新流程。

  ##### 在执行手动首次触发transitionTo过程中，是如何获取到所有组件的钩子函数的？
  1. 在VueRouter实例化过程中，就生成了path-route的映射表，此时，所有被映射的组件都已经成生成{default:componentsOptions(eg:{name:'home',beforeRouteEnter...})}实际就是被当成对象导入了
  2. 每个route都有一个matched属性，记录了当前路由的层级关系(eg:home/home-child1,那么matched:[homeRoute,homeChild1Route])
  3. 当根据这个matched属性去获取守卫时，就会获取到当前改变路由所涉及到的所有组件的守卫了。


#### 路由守卫的next原理？
  1. 路由守卫队列中维护了一个迭代器；
  2. 下一步放在迭代器的回调函数里，只有next不为false时才进入下一步的执行。


### 总结
  1. VueRouter 实现了vue的前端SPA路由，即前端维护了一套路由和组件的对应关系
  2. 安装VueRouter：VueRouter是一个插件，vue注册插件时为vue的所有组件混入了beforecreate方法，使组件可以访问到路由
  3. 实例化VurRouter：VurRouter在实例化的时候，会根据用户配置的路由配置，来产生路由-组件映射关系表，同时会确定路由模式hash或history或astract，来创建对应的History实例，用来操作路由的跳转；History实例存储路由的状态和提供了操作路由的方法；
  4. 初始化VurRouter：在vue初始化时，初始化VurRouter，History实例触发初次更新视图，同时开启监听路由变化，触发视图更新；
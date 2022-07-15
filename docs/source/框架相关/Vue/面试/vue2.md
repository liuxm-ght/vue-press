[[toc]]
### SPA是什么？MPA是什么？SPA优缺点？如何给SPA做SEO？
* 单页面应用，优点是不刷新页面用户体验好，缺点是不利于SEO
* 实现是：前端路由实现，通过切换路由(url或浏览器历史)来显示或隐藏页面(元素)
* 下面给出基于Vue的SPA如何实现SEO的三种方式
    1. SSR服务端渲染
        将组件或页面通过服务器生成html，再返回给浏览器，如nuxt.js

    2. 静态化
        目前主流的静态化主要有两种：（1）一种是通过程序将动态页面抓取并保存为静态页面，这样的页面的实际存在于服务器的硬盘中（2）另外一种是通过WEB服务器的 URL Rewrite的方式，它的原理是通过web服务器内部模块按一定规则将外部的URL请求转化为内部的文件地址，一句话来说就是把外部请求的静态地址转化为实际的动态页面地址，而静态页面实际是不存在的。这两种方法都达到了实现URL静态化的效果

    3. 使用Phantomjs针对爬虫处理
        原理是通过Nginx配置，判断访问来源是否为爬虫，如果是则搜索引擎的爬虫请求会转发到一个node server，再通过PhantomJS来解析完整的HTML，返回给爬虫。下面是大致流程图


### vue是什么？核心特性是什么？
* vue是一个MVVM模式的渐进式的前端JS框架，注重的是数据驱动更新视图。
* 核心特性是：
    * 数据驱动
        * MVVM？
            * M是model数据层
            * V是view视图层
            * VM是view-model视图数据交互层
    * 组件化
        每个模块由多个功能组件组成，好处是降低耦合度，方便定位调试问题，可维护度高
    * 指令系统
        指令主要是为了方便操作dom节点

### v-show和v-if？
* v-show css的display显示隐藏dom，dom还在文档中
* v-if 删除或添加dom
* v-if的改变会触发组件的生命周期，v-show的不会只是css样式的改变

1. 原理：
    * 具体解析流程这里不展开讲，大致流程如下
    1. 将模板template转为ast结构的JS对象
    2. 用ast得到的JS对象拼装render和staticRenderFns函数
    3. render和staticRenderFns函数被调用后生成虚拟VNODE节点，该节点包含创建DOM节点所需信息
    4. vm.patch函数通过虚拟DOM算法利用VNODE节点创建真实DOM节点

### Vue实例挂载的过程中发生了什么?
1. new Vue()实例化vue，开始vue的init初始化工作，初始化会劫持data中的数据，
2. 初始化完成后，开始挂载组件，挂载判断是否有render函数，没有从template模板生成render函数，有继续，开始正式挂载组件
3. 创建一个watcher用来监听vue实例或组件的变化，从而更新视图，初次会主动触发一次视图更新，
4. 流程是，执行render函数，会读取数据，订阅当前watcher，最终生成vnode，执行update函数，用vnode生成真实dom并挂载到根节点上
5. 当数据更新时，触发订阅的watcher的更新函数，执行render，生成新的vnode，执行update，比对新旧vnode与_vnode，更新视图
6. 如果vnode有子组件，diff比对子组件，更新旧dom

模板编译过程：
    * 最终都会解析成render函数，调用compileToFunctions，会将template解析成render函数
    * 对template的解析步骤大致分为以下几步：
        1. 将html文档片段解析成ast描述符
        2. 将ast描述符解析成字符串
        3. 生成render函数
        4. 生成render函数，挂载到vm的$options上后，会再次调用mount方法

### 前端权限控制可以分为四个方面：
1. 路由权限
    1. 方案一： 初始化即挂载全部路由，并且在路由上标记相应的权限信息，每次路由跳转前做校验
    2. 方案二：
        * 初始化的时候先挂载不需要权限控制的路由，比如登录页，404等错误页。如果用户通过URL进行强制访问，则会直接进入404，相当于从源头上做了控制
        * 登录后，获取用户的权限信息，然后筛选有权限访问的路由，在全局路由守卫里进行调用addRoutes添加路由
2. 按钮权限
    1. 方案一：按钮权限也可以用v-if判断，但是如果页面过多，每个页面页面都要获取用户权限role和路由表里的meta.btnPermissions，然后再做判断
    2. 方案二：通过自定义指令进行按钮权限的判断
3. 菜单权限
    菜单权限可以理解成将页面与理由进行解耦
    1. 方案一：菜单与路由分离，菜单由后端返回
    2. 方案二：菜单和路由都由后端返回
4. 接口权限
    1. 接口权限目前一般采用jwt的形式来验证，没有通过的话一般返回401，跳转到登录页面重新进行登录登录完拿到token，将token存起来，通过axios请求拦截器进行拦截，每次请求的时候头部携带token


### 为什么data属性是一个函数而不是一个对象？
1. 根实例对象data可以是对象也可以是函数（根实例是单例），不会产生数据污染情况
2. 组件实例对象data必须为函数，目的是为了防止多个组件实例对象之间共用一个data，产生数据污染。采用函数的形式，initData时会将其作为工厂函数都会返回全新data对象
3. 原理是组件的构造函数都是Vue.extend扩展出来的，如果用对象会共享这些data

### 动态给vue的data添加一个新的属性时会发生什么？怎样解决？
::: warning 场景
我们为obj添加新属性的时候，却无法触发事件属性的拦截

obj.bar  = '新属性'

原因是一开始obj的foo属性被设成了响应式数据，而bar是后面新增的属性，并没有通过Object.defineProperty设置成响应式数据
:::
* Vue.set()
    * 通过Vue.set向响应式对象中添加一个property，并确保这个新 property同样是响应式的，且触发视图更新
    * 这里无非再次调用defineReactive方法，实现新增属性的响应式
* Object.assign()
* $forcecUpdated()

::: tip 小结
如果为对象添加少量的新属性，可以直接采用Vue.set()

如果需要为新对象添加大量的新属性，则通过Object.assign()创建新对象

如果你实在不知道怎么操作时，可采取$forceUpdate()进行强制刷新 (不建议)

PS：vue3是用过proxy实现数据响应式的，直接动态添加新属性仍可以实现数据响应式
:::

### Vue中组件和插件有什么区别？
1. 组件就是把图形、非图形的各种逻辑均抽象为一个统一的概念（组件）来实现开发的模式，在Vue中每一个.vue文件都可以视为一个组件

2. 插件是什么

插件通常用来为 Vue 添加全局功能。插件的功能范围没有严格的限制——一般有下面几种：
::: tip
    添加全局方法或者属性。如: vue-custom-element
    添加全局资源：指令/过滤器/过渡等。如 vue-touch
    通过全局混入来添加一些组件选项。如vue-router
    添加 Vue 实例方法，通过把它们添加到 Vue.prototype 上实现。
    一个库，提供自己的 API，同时提供上面提到的一个或多个功能。如vue-router
:::
```ts
MyPlugin.install = function (Vue, options) {
  // 1. 添加全局方法或 property
  Vue.myGlobalMethod = function () {
    // 逻辑...
  }

  // 2. 添加全局资源
  Vue.directive('my-directive', {
    bind (el, binding, vnode, oldVnode) {
      // 逻辑...
    }
    ...
  })

  // 3. 注入组件选项
  Vue.mixin({
    created: function () {
      // 逻辑...
    }
    ...
  })

  // 4. 添加实例方法
  Vue.prototype.$myMethod = function (methodOptions) {
    // 逻辑...
  }
}
```

3. 使用场景

具体的其实在插件是什么章节已经表述了，这里在总结一下

组件 (Component) 是用来构成你的 App 的业务模块，它的目标是 App.vue

插件 (Plugin) 是用来增强你的技术栈的功能模块，它的目标是 Vue 本身

简单来说，插件就是指对Vue的功能的增强或补充

### 组件间通信的分类
组件间通信的分类可以分成以下

* 父子组件之间的通信
* 兄弟组件之间的通信
* 祖孙与后代组件之间的通信
* 非关系组件间之间的通信

整理vue中8种常规的通信方案

* 通过 props 传递
* 通过 $emit 触发自定义事件
* 使用 ref
* EventBus
* $parent 或$root
* attrs 与 listeners
* Provide 与 Inject
* Vuex

::: warning 小结
* 父子关系的组件数据传递选择 props  与 $emit进行传递，也可选择ref
* 兄弟关系的组件数据传递可选择$bus，其次可以选择$parent进行传递
```ts
//兄弟组件
this.$parent.on('add',this.add)
//另一个兄弟组件
this.$parent.emit('add')
```
* 祖先与后代组件数据传递可选择attrs与listeners或者 Provide与 Inject
```ts
// 给Grandson隔代传值，communication/index.vue  
<Child2 msg="lalala" @some-event="onSomeEvent"></Child2>  
// Child2做展开  
<Grandson v-bind="$attrs" v-on="$listeners"></Grandson>  
// Grandson使⽤  
<div @click="$emit('some-event', 'msg from grandson')">  
{{msg}}  
</div>  
```
* 复杂关系的组件数据传递可以通过vuex存放共享的变量
:::

### NextTick是什么
  1. 在修改数据后立刻得到更新后的DOM结构，可以使用Vue.nextTick()
  ```ts
  // 修改数据
    vm.message = '修改后的值'
    // DOM 还没有更新
    console.log(vm.$el.textContent) // 原始的值
    Vue.nextTick(function () {
    // DOM 更新了
    console.log(vm.$el.textContent) // 修改后的值
    })
  ```
  2. 优化策略，避免多次渲染
  ```ts
    {{num}}
    for(let i=0; i<100000; i++){
        num = i
    }
  ```
  3. 原理：

      将nexttick回调里的函数放到宏观或微观任务队列去
      ::: warning 原理
      1. 把回调函数放入callbacks等待执行
      2. 将执行函数放到微任务或者宏任务中
      3. 事件循环到了微任务或者宏任务，执行函数依次执行callbacks中的回调
      :::

### mixin 是什么？
  1. 混入，即提取出公共代码，然后混入到各个组件中去
  2. 包括有 props 、methods、computed、watch、data 、各生命周期等
  3. 覆盖规则是：
      1. 替换型：props、methods、inject、computed 会被后来者代替
          * 组件 对象 > 组件 mixin 对象 > 组件 mixin -mixin 对象 > ... > 全局 mixin 对象。
      2. 合并型：data，将组件的data合并到mixin的data上，不存在的新set，存在的替换，对象递归替换或set
          ::: details 
          ```ts
          function mergeData(to, from) {   //to为mixin的data，from为组件的data 
            if (!from) return to     
            var key, toVal, fromVal;    
            var keys = Object.keys(from);   
            for (var i = 0; i < keys.length; i++) {
                key = keys[i];
                toVal = to[key];
                fromVal = from[key];    
                // 如果不存在这个属性，就重新设置
                if (!to.hasOwnProperty(key)) {
                    set(to, key, fromVal);
                }      
                // 存在相同属性，合并对象
                else if (typeof toVal =="object" && typeof fromVal =="object") {
                    mergeData(toVal, fromVal);
                }
            }    
            return to // 返回mixin的属性
          }
          ```
          :::
          * 组件 data > 组件 mixin data > 组件 mixin -mixin data > ... > 全局 mixin data。
      3. 队列性：生命周期或watch，被合并为一个数组，然后正序遍历一次执行
          * 全局 mixin hook > 组件mixin-mixin hook > 组件mixin hook > 组件 hook
      4. 叠加型有component、directives、filters，通过原型链进行层层的叠加
          * 组件 > 组件 mixin > 组件 mixin -mixin > ... > 全局 mixin。
  4. 原理: 是全局 mixin做为最外层parent，组件 mixin -mixin第二层parent，以此类推组件 mixin第三次parent，组件为最里面child，data合并策略是返回to即child，所以以组件data为准，队列合并的是push的，所以parent先push，所以mixin的先执行；

### 说说你对slot的理解？slot使用场景有哪些
  * 未完：说说你对slot的理解？slot使用场景有哪些？ 槽与render函数的关系还没深入研究！！！

### 你知道vue中key的原理吗？说说你对它的理解
  1. key 的作用 ：key是给每一个vnode的唯一id，也是diff的一种优化策略，可以根据key，更准确， 更快的找到对应的vnode节点
  2. 当我们在使用v-for时，需要给单元加上key
      1. 如果不用key，Vue会采用就地复地原则：最小化element的移动，并且会尝试尽最大程度在同适当的地方对相同类型的element，做patch或者reuse。
      2. 如果使用了key，Vue会根据keys的顺序记录element，曾经拥有了key的element如果不再出现的话，会被直接remove或者destoryed
          * 用+new Date()生成的时间戳作为key，手动强制触发重新渲染
      3. 当拥有新值的rerender作为key时，拥有了新key的Comp出现了，那么旧key Comp会被移除，新key Comp触发渲染
  3. 总结就是：当不使用key时，当插入一个元素时需要更新插入元素位置及后面所有元素，同时后面新增一个原；当使用key时在updateChildren时diff比对就会跳过相同key元素的更新，只插入一个新的元素

### 说说你对keep-alive的理解是什么？
  1. keep-alive是一个render函数，通过$slot来获取子组件
  2. 在keep-alive组件内部维护一个cache缓存来缓存子组件实例，当update更新组件时，会从cache获取
  3. 如果需要强制更新可以在beforeRouteEnter或actived路执行获取数据函数，更新数据

### Vue常用的修饰符有哪些有什么应用场景
  1. 修饰符的作用：修饰符主要处理了许多DOM事件的细节
  2. vue中修饰符分为以下五种：
      * 表单修饰符 : v-model.lazy\trim\number
      * 事件修饰符  : @click.once\self\stop\capture\prevent\native\passive
      * 鼠标按键修饰符 : @click.right\left\middle
      * 键值修饰符 : 
      * v-bind修饰符 : 
      ```ts
        // parent
        <parent v-bind:xxx.sync = 'yyy'></parent>
        // child
        this.$emit('update:xxx',{})
      ```
      等同于
      ```ts
        // parent
        <parent v-bind:xxx = 'yyy' @update:xxx = 'zzzFn'></parent>
        // child
        this.$emit('update:xxx',{})
      ```
### 你有写过自定义指令吗？自定义指令的应用场景有哪些？
  1. 防抖指令、图片懒加载指令
  2. 全局或局部注册Vue.directive 、directives
  3. 方法有bind、inserted、update、componentUpdated、unbind
  4. 所有方法都有参数：el、binding、vnode、oldVnode

### dd

### dd

### dd

### dd



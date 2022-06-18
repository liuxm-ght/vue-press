### Render阶段
  1. 何为Virtual DOM？为何使用它？
    Virtual DOM出现的前提的浏览器DOM的设计非常复杂，频繁操作非常影响浏览器性能。
    而Virtual DOM 就是用一个原生的 JS 对象去描述一个 DOM 节点，所以它比创建一个 DOM 的代价要小很多。
    总之，其实 VNode 是对真实 DOM 的一种抽象描述，它的核心定义无非就几个关键属性，标签名、数据、子节点、键值等，其它属性都是用来扩展 VNode 的灵活性以及实现一些特殊 feature 的。由于 VNode 只是用来映射到真实 DOM 的渲染，不需要包含操作 DOM 的方法，因此它是非常轻量和简单的。
    Virtual DOM 除了它的数据结构的定义，映射到真实的 DOM 实际上要经历 VNode 的 create、diff、patch 等过程。那么在 Vue.js 中，VNode 的 create 是通过之前提到的 createElement 方法创建的。

  2. render在Vue整个流程中的哪个阶段？
    * 通过Vue整体流程.jgp, 可以理解一个Vue组件是如何运行起来的.
      模板通过编译生成AST树
      AST树生成Vue的render渲染函数
      render渲染函数结合数据生成vNode(Virtual DOM Node)树
      Diff和Patch后产生新的UI界面(真实DOM渲染)
    * 在这张图中, 我们需要了解以下几个概念:
      1. 模板, Vue模板是纯HTML, 基于Vue的模板语法, 可以比较方便的处理数据和UI界面的关系
      2. AST, 即Abstract Syntax Tree的简称, Vue将HTML模板解析为AST,并对AST进行一些优化的标记处理, 提取最大的静态树,以使Virtual DOM直接跳过后面的Diff
      3. render渲染函数, render渲染函数是用来生成Virtual DOM的. Vue推荐使用模板来构建我们的应用程序, 在底层实现中Vue最终还是会将模板编译成渲染函数. 因此, 若我们想要得到更好的控制, 可以直接写渲染函数.(重点)
      Virtual DOM, 虚拟DOM
      4. Watcher, 每个Vue组件都有一个对应的watcher, 它会在组件render时收集组件所依赖的数据, 并在依赖有更新时, 触发组件重新渲染, Vue会自动优化并更新需要更新DOM
    * 在上图中, render函数可以作为一道分割线:
      render函数左边可以称为编译期, 将Vue板转换为渲染函数
      render函数右边, 是Vue运行时, 主要是将渲染函数生成Virtual DOM树, 以及Diff和Patch

  3. render如何产生？
    1. 手写render函数
      render: function (createElement) {
        return createElement(
          'h' + this.level,   // tag name 标签名称
          this.$slots.default // 子组件中的阵列
        )
      }
    2. template编译生成
      使用：
        new Vue({
          template:'<div>template编译生成</div>'
        })
      通过compileToFunctions可以转为{ render, staticRenderFns }
    3. .vue编辑生产
      使用：
        .vue文件中，
        <template>
          <div id="app">
            .vue文件
          </div>
        </template>
      通过vue-cli脚手架编译后可以转为
        var render = function(){
          var _vm = this
          var _h = _vm.$createElement
          var _c = _vm._self._c || _h
          return _c(
            "div",
            { attrs: { id: "app" } },
            ".vue文件",
            1
          )
        }
        var staticRenderFns = []
        render._withStripped = true
        export { render, staticRenderFns }

  4. vnode的种类？
    1. 组件vnode(ComponentVNode 组件节点)
      组件vnode是用h(App)这样render返回的vnode，没有children vnodes 和 parent vnode，携带有ctor构造函数
      原因是在createComponent阶段，将所有children vnodes放到componentOptions中去，parent vnode为空是因为首次App的_parentVnode是空的，后续组件vnode的parent是有的，是它的父级vnode。
      将childrenVnodes放到componentOptions的好处是：在后面patch diff patchVnode阶段，不需要去遍历diff比对它的children，只需要diff当前组件vnode，组件的childrenVnodes的diff比对在组件内部去比对，这样大大的提升了性能。
    2. 节点vnode(ElementVNode 普通元素节点)
      非组件vnode是实例化组件时render返回的vnode，一般有children vnodes 和 parent vnode（即实例化组件vnode）
      原因是ElementVNode是直接创建vnode的，所以有children(第三个参数)，parent vnode 为它的父级组件vnode的_parentVnode
      (vnode.parent = _parentVnode)
    3. 其他vnode 
      1. TextVNode 文本节点
      2. EmptyVNode 没有内容的注释节点
      3. CloneVNode 克隆节点，可以是以上任意类型的节点，唯一的区别在于isCloned属性为true 我们先定义一个vnode

  5. Render流程
    1. Vue初始化完成后，数据data被响应式处理了，开始vm.$mount挂载vm，产生一个watcher观察者，观察data数据的变化；
    2. 执行vm._render()开始渲染，代码如下
      Vue.prototype._render = function (): VNode {
        const { render, _parentVnode } = vm.$options
        vm.$vnode = _parentVnode //设置了父级vnode，用于定位层级关系
        vnode = render.call(vm._renderProxy, vm.$createElement) //利用createElement生成vnode
        vnode.parent = _parentVnode //设置了父级vnode，用于定位层级关系
        return vnode
      }
    3. vm.$createElement 创建vnode节点
      在initRender初始中定义了----《Vue说明-初始化阶段.md》有详细介绍
        vm._c = (a, b, c, d) => createElement(vm, a, b, c, d, false)
        vm.$createElement = (a, b, c, d) => createElement(vm, a, b, c, d, true)
      代码如下
        const SIMPLE_NORMALIZE = 1
        const ALWAYS_NORMALIZE = 2
        function createElement (
          context: Component, //上下文
          tag: any, //标签字符串 、组件...
          data: any, //options：标签属性... 或 是children （类型是array 或 基础数据类型）
          children: any, //子标签
          normalizationType: any, // 区分 children 规范化的方式
          alwaysNormalize: boolean //$createElement，用户手写的render 会标示为 true
        ){
          // 兼容不传 data 的情况(是数组或者基础数据类型) 
          // h 的第二个参数是string 或 数组时，不是对象时，把data当作是children处理
          if (Array.isArray(data) || isPrimitive(data)) {
            normalizationType = children
            children = data
            data = undefined
          }
          //alwaysNormalize：用户手写的render 会标示为 true
          if (isTrue(alwaysNormalize)) {
            normalizationType = ALWAYS_NORMALIZE
          }
          // 创建虚拟节点
          return  _createElement(context, tag, data, children, normalizationType)
        }
        /* 步骤
          * 1、children 的规范化
          * 2、VNode 的创建
        */
        function _createElement (
          context: Component, 
          tag?: string | Class<Component> | Function | Object,
          data?: VNodeData, //VNode 的数据，它是一个 VNodeData 类型
          children?: any, //当前 VNode 的子节点，它是任意类型的，它接下来需要被规范为标准的 VNode 数组
          normalizationType?: number // 区分 children 规范化的方式
        ): VNode | Array<VNode> {
          /**如果 data 已定义(非 undefined 或者 null),并且 data 的 __ob__ 已经定义(代表 data 是响应式的 - 即  data 已经被 observed，上面绑定了 Observer 对象) 
            那么创建一个空节点
            被监控的data不能被用作vnode渲染的数据的原因是：
            data在vnode渲染过程中可能会被改变，这样会触发监控，导致不符合预期的操作
          */ 
          if (isDef(data) && isDef((data: any).__ob__)) {
            warn...return createEmptyVNode()
          }
          if (isDef(data) && isDef(data.is)) { // 设置了is，渲染成is vnode
            tag = data.is
          }
          if (!tag) { // 如果 tag 不存在也创建一个空节点
            return createEmptyVNode()
          }
          if (Array.isArray(children) &&
            typeof children[0] === 'function'
          ) {  // 默认作用域插槽
            data = data || {}
            data.scopedSlots = { default: children[0] }
            children.length = 0
          }
          // 将 children 规范化
          if (normalizationType === ALWAYS_NORMALIZE) {
            // render 函数是用户手写的、或当编译 slot、v-for 的时候会产生嵌套数组的情况，会调用 normalizeArrayChildren
            children = normalizeChildren(children)
          } else if (normalizationType === SIMPLE_NORMALIZE) {
            // render 函数是编译生成的则调用 simpleNormalizeChildren
            children = simpleNormalizeChildren(children)
          }
          let vnode, ns
          if (typeof tag === 'string') { // 如果是标签字符串 
            let Ctor
            ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag) // 获取 tag 的名字空间
            if (config.isReservedTag(tag)) { // 判断是否是保留的标签，比如 div
              vnode = new VNode(
                config.parsePlatformTagName(tag), data, children,
                undefined, undefined, context
              ) // 如果是保留的标签则创建普通节点Vnode ElementVNode
            } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) { // 在vm.$options.components上找，如果有说明组件被全局/局部注册了，可以直接拿来用，没有就报错，说明组件没被注册
              vnode = createComponent(Ctor, data, context, children, tag) // 如果是保留的标签则创建组件节点Vnode ComponentVNode
            } else {
              // 未知的元素，在运行时检查，因为父组件可能在序列化子组件的时候分配一个名字空间，创建一个 EmptyVNode
              vnode = new VNode(
                tag, data, children,
                undefined, undefined, context
              )
            }
          } else {// 如果 tag 是一个 Component 类型，返回一个由组件转换的vnode
            /*
              tag: 一个VueComponent构造器Ctor
              data: render函数的配置对象，属性、事件等
              context: 上下文，Vue的render上下文是Vue实例，VueComponent的是组件实例
              children: 节点child
            */
            vnode = createComponent(tag, data, context, children) // ComponentVNode
          }
          。。。
          retrun vnode
        }
        function createComponent (
          Ctor: Class<Component> | Function | Object | void, //组件构造器
          data: ?VNodeData, //render函数的配置对象，属性、事件等
          context: Component, 
          children: ?Array<VNode>,
          tag?: string
        ): VNode | Array<VNode> | void {
          if (isUndef(Ctor)) {
            return
          }
          const baseCtor = context.$options._base
          // TODO:步骤一：构造子类构造函数
          // 如果是对象形式的，创建一个子类构造器
          // 异步组件传入的是个function
          if (isObject(Ctor)) {
            Ctor = baseCtor.extend(Ctor)
          }
          let asyncFactory
          /**
          * 处理异步组件
          * 异步组件的cid是null，非异步组件会在Vue.extend创建组件构造器的时候标示一个cid
          * */ 
          if (isUndef(Ctor.cid)) { 
            asyncFactory = Ctor
            异步组件处理流程
          }
          // 合并父类 options (core/instance/init.js) 因此子构造器上就有了Vue构造器 或 Vue.Mixins进的 生命周期方法了
          resolveConstructorOptions(Ctor)
          // TODO: 步骤二：安装组件钩子函数 (将 componentVNodeHooks 合并到 data.hooks)
          // data.hooks: {init: f, insert: f, destroy: f, prepatch: f}
          installComponentHooks(data)
          // TODO: 步骤三：实例化 VNode
          // 组件 VNode 的 children 是空，但有一个 componentOptions 
          const vnode = new VNode(
            `vue-component-${Ctor.cid}${name ? `-${name}` : ''}`,
            data, undefined, undefined, undefined, context,
            { Ctor, propsData, listeners, tag, children },
            asyncFactory
          )
          return vnode
        }
  
 
  6. 手写miniRender
    eg：
      1. 手动写render
        var vm = function(){}
        function createEl(a,b){
          console.log(a,b);
        }
        vm.$createEl = (a,b) => createEl(a,b);
        function render(createEl){
          return createEl('div1','div2');
        }
        
        render.call(vm,vm.$createEl);  // div1 div2

      2. 编译 template为render
        // vm构造函数
        var vm= function(){};
        // 创建vdom函数
        function createEl(a,b){
          console.log(a,b);
        };
        // 模拟获得编译后的render 字符串
        var compiledRender = "with(this){return _c('div1','div2')}";
        // 将其转换为函数
        var render= new Function(compiledRender);
        // 为vm定义_c函数
        vm._c = (a,b) => createEl(a,b);
        // 为vm定义$createEl 函数
        vm.$createEl = (a,b) => createEl(a,b);

        // 执行调用
        render.call(vm, vm.$createEl ); //    div1 div2



  7. 总结：
      Render阶段主要做的事情是：拿到无论是手写还是模版解析生产的render函数，执行render函数最终生成Vnode树返回。
      虚拟DOM树，Vue的Virtual DOM Patching算法是基于 Snabbdom库 的实现，并在些基础上作了很多的调整和改进。
      只能通过RenderFn执行vm._render()生成，patch的目标都是Vnode，并且每个Vnode在全局都是唯一的
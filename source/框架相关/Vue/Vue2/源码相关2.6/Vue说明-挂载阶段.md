### Vue的挂载阶段
  1. Vue的目的是把数据变为真实DOM，同时数据变更可以更新视图。
  2. 挂载的意思就是将Vue实例生成的Dom挂载到真实Dom上去，即页面上会展示。
  3. Vue的挂载发生在初始化完成之后，即created生命周期之后
  4. 主要执行函数是 mountComponent
  挂载阶段做了什么？
    1. 创造观察者，用于监听数据变化，更新视图
    2. 产生Vnode，根据render函数产生虚拟Dom，方便操作
    3. 生成真实Dom，根据Vnode操作，最终生成真实DOM
    4. 将生成的真实DOM插入页面节点

#### 创造观察者
  说明：
    在《Vue说明-响应式系统.md》篇详细介绍了什么是观察者，简单说观察者是vm实例创造的用来观察某系数据变化，同时可以去更新视图的工具。
  原理：
    为vm实例创造一个观察者，用来观察用到的数据的变化，然后去通知视图的更新
  代码：  
  ```ts
    new Watcher(vm, updateComponent, noop, {
      before () {
        // 挂载后并且未销毁则调用 beforeUpdate
        if (vm._isMounted && !vm._isDestroyed) {
          callHook(vm, 'beforeUpdate')
        }
      }
    }, true /* isRenderWatcher */)
    updateComponent = () => {
      vm._update(vm._render(), hydrating)
    }
  ```
  注意：
    updateComponent就是生成Vnode，产生Dom
  总结： 
    创造观察者，用于监听数据变化，更新视图

#### 产生Vnode
  说明：
    Vnode的作用在《Vue说明-Render阶段.md》篇详细介绍了，简单说就是真实DOM的映射，但是比真实DOM轻便，便于比对更新。
  原理：
    通过render函数返回一个Vnode，Vnode代表的是对映的真实DOM节点。
  代码：
  ```ts
    vm._render()
    return vnode = render.call(vm._renderProxy, vm.$createElement)
    vm._c = vm.$createElement = (a, b, c, d) => createElement(vm, a, b, c, d, true)
    _createElement(context, tag, data, children, normalizationType)
    vnode = new VNode(tag, data, children,text, elm, context，componentOptions，asyncFactory)
  ```
  注意：
    _createElement 会根据tag的类型来创建是节点Vnode，还是组件Vnode
    两者的区别是
      1. 组件vnode，组件vnode是用h(App)、link.js这样render返回的vnode，没有children vnodes 和 parent vnode，携带有Ctor构造函数
      2. 非组件vnode，非组件vnode是实例化组件时render返回的vnode，一般有children vnodes 和 parent vnode（即实例化组件vnode）
  总结： 
    根据render函数产生Vnode，用于生成真实DOM，同时方便操作，减少性能消耗

#### 生成真实Dom
  说明：
    在《Vue说明-Patch阶段.md》篇详细介绍了Vnode到真实DOM的过程，简单说就是通过比对vnode的变化，根据vnode的类型生成不同类型的DOM节点，挂载到其父亲DOM去，挂载的顺序是由子到父，所以最后的父节点挂载到页面上才全部渲染。
  原理：
    根据vnode，通过平台对应的节点操作方法，创造出对应的节点，最终挂载到页面去
  代码：
  ```ts
    vm._update(vnode, hydrating)
    vm.$el = vm.__patch__(prevVnode, vnode)
    Vue.prototype.__patch__ = inBrowser ? patch : noop
    return function patch (oldVnode, vnode, hydrating, removeOnly) {
      const insertedVnodeQueue = []
      if (!isRealElement && sameVnode(oldVnode, vnode)) {
        // 是同一个节点的时候直接修改现有的（旧真实dom）节点，diff从这开始
        // 在对比的过程中，对比的是vnode虚拟dom，相同的不操作，不同时会插入、删除、添加都是操作的真实旧dom，
        patchVnode(oldVnode, vnode, insertedVnodeQueue, null, null, removeOnly)
      }else{
         //旧节点如果是真实dom，初次渲染，options配置了el，将el对应的真实dom转化为oldVnode
        oldVnode = emptyNodeAt(oldVnode)
      }
      // 获取真实的 dom - 例如 id 为 app 的 div
      const oldElm = oldVnode.elm
      // 获取父节点 - 例如 id 为 app 的 div 的父节点为 body
      const parentElm = nodeOps.parentNode(oldElm)
      // 通过虚拟节点创建真实的 DOM 并插入到它的父节点中，在后面会删除原来的真实dom，即oldElm
      createElm(vnode, insertedVnodeQueue,oldElm._leaveCb ? null : parentElm,nodeOps.nextSibling(oldElm))
      if (isDef(parentElm)) {
        // 删除旧节点 会删除<div id='app'>
        removeVnodes([oldVnode], 0, 0)
      }
    }
    function createElm (
      vnode,
      insertedVnodeQueue,
      parentElm,
      refElm,
      nested,
      ownerArray,
      index
    ){
      /**
      *  1. 组件，如果是执行完createComponent方法返回true就return不执行下面。
      *     如果是组件，执行组件初始化 _init，组件进行挂载
      *     i(vnode, false /* hydrating */)
      *     insert(parentElm, vnode.elm, refElm) //parentElm = 真实的parentElm，，，组件实例化力的  *                                          //parentElm是undefined的
      * */ 
      if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
        return
      }
      if (isDef(tag)) {
        // 创建一个父节点占位符元素  //创建空的标签的目标是为了让标签仅仅是标签，其内容都当是children来处理
        // 通过 document 原生方法创建指定 tag 的 dom
        vnode.elm = vnode.ns
          ? nodeOps.createElementNS(vnode.ns, tag)
          : nodeOps.createElement(tag, vnode)
        // 创建子节点
        // 遍历所有子 VNode 递归调用 createElm 创建子组件
        // 通过一个递归的方式就可以完整地构建了整个组件树，先insert孩子们
        createChildren(vnode, children, insertedVnodeQueue)
        if ( (data)) {
          // 调用 created 钩子函数
          invokeCreateHooks(vnode, insertedVnodeQueue)
        }
        // 插入
        // 因为是递归调用，子元素会优先调用 insert，所以整个 vnode 树节点的插入顺序是先子后父
        insert(parentElm, vnode.elm, refElm)
        // 如果是注释或者纯文本节点则直接插入到父元素中
      } else if (isTrue(vnode.isComment)) {
        vnode.elm = nodeOps.createComment(vnode.text)
        insert(parentElm, vnode.elm, refElm)
      } else {
        vnode.elm = nodeOps.createTextNode(vnode.text)
        insert(parentElm, vnode.elm, refElm)
      }
    }
  ```
  注意：
    组件实例化里的parentElm是undefined的
    insert的顺序是从子到父的挂载
  总结： 
    通过vnode生成Dom的过程中，会根据vnode的类型来处理，如果是组件vnode走组件实例化流程，如果不是组件vnode，会遍历它的children，直接生成DOM，最后都会挂载到parentElm上，挂载的顺序是从子到父的挂载，所以最终将插到parentElm是id=app的DOM上。

#### 插到页面
  说明：
    挂载的顺序是从子到父的挂载，所以最终将插到parentElm是id=app的DOM上。
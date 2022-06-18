### Patch阶段
  1. patch是整个virtaul-dom当中最为核心的方法

  2. 上代码
    vm._update(vnode, hydrating)
    Vue.prototype._update = function (vnode: VNode, hydrating?: boolean) {
      const vm: Component = this
      const prevEl = vm.$el // 取出缓存的真实dom，初次mount时将options的el对应的dom挂到vm.$el上
      const prevVnode = vm._vnode // 取出缓存的旧的虚拟dom
      const restoreActiveInstance = setActiveInstance(vm) //设置当前转换的vm实例activeInstance = vm，暂存之前的vm实例prevActiveInstance = activeInstance
      /*
        初始化 _vnode
          1. 缓存当前vnode，render函数转化的vnode，下次更新时的旧vnode
          2. vm._vnode.$parent = vm.$node
      */
      vm._vnode = vnode 
      /*
        生成真实dom或着更新真实dom，挂载到vm.$el上
          1. 初次渲染，真实dom为旧vnode，patch比对新旧vnode，更新真实dom
          2. 更新时，直接patch比对新旧vnode，更新真实dom
          Vue或组件patch都走这里
          __patch__ 在 platforms/web/runtime/index 中定义，其实是在core/vdom/patch return出来了
      */ 
      if (!prevVnode) {
        vm.$el = vm.__patch__(
          vm.$el, // 首次渲染传入的为 id 为 app 的 DOM 对象 <div id="app"> ，相当于是旧的vnode
          vnode,  // 虚拟 dom - render 函数的返回值，相当于是新的vnode，可以是一个组件虚拟节点
          hydrating, // 是否在服务端渲染
          false /* removeOnly */)
      } else {
        // 更新时。会比较差异，diff对比新旧vnode，更新真实dom
        vm.$el = vm.__patch__(prevVnode, vnode)
      }
      restoreActiveInstance()  //还原activeInstance实例，activeInstance = prevActiveInstance ？？
      // update __vue__ reference
      // 更新后，vnode对比更新完成，需要清空旧真实dom挂载的vm实例 ？？
      if (prevEl) {
        prevEl.__vue__ = null
      }
      if (vm.$el) { //更新后，vnode对比更新完成，新的真实dom挂载的vm实例 ？？
        // 可通过 dom.__vue__ 访问组件实例
        vm.$el.__vue__ = vm
      }
      /**
        * 当前组件已经生成真实dom vm.$el
        * 将 当前组件的真实dom 给 父级组件，同理，父级组件的真实dom 也 给它的父级，这样最终父级拿到的将是完整的dom
      */
      if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
        vm.$parent.$el = vm.$el
      }
    }
    Vue.prototype.__patch__ = inBrowser ? patch : noop
    const patch: Function = createPatchFunction({ nodeOps, modules })
    function createPatchFunction (backend) {
      return function patch (oldVnode, vnode, hydrating, removeOnly) {
        /*
          比对vnode或 操作真实dom
          两种情况:
            1. 组件vnode初次patch时,不存在oldVnode，创建真实dom并插入父级dom中去；
            2. 非组件vnodepatch时，两种情况:
              1. oldVnode非真实dom，且新旧vnode为同一个节点，比对新旧节点，更新旧节点真实dom
              2. 新旧vnode不为同一个节点
                1. oldVnode真实dom，转为虚拟oldVnode
                2. 通过新虚拟节点创建真实的 DOM 并插入到它的父节点中，在后面会删除原来的真实dom，即oldElm
        */
        if (isUndef(oldVnode)) {
          isInitialPatch = true
          createElm(vnode, insertedVnodeQueue)
        } else {
          // 标记是否为真实的 dom 对象，根据 nodeType 判断， 存在即为真实dom
          const isRealElement = isDef(oldVnode.nodeType)
          if (!isRealElement && sameVnode(oldVnode, vnode)) { //先比对是不是相同vnode，根据tag、key、isComment、是否是相同input类型等来判断
            // 是同一个节点的时候直接修改现有的（旧真实dom）节点，diff从这开始
            // 在对比的过程中，对比的是vnode虚拟dom，相同的不操作，不同时会插入、删除、添加都是操作的真实旧dom，
            patchVnode(oldVnode, vnode, insertedVnodeQueue, null, null, removeOnly)
          } else {
            if (isRealElement) { //旧节点如果是真实dom，初次渲染，options配置了el，将el对应的真实dom转化为oldVnode
              // 如果不是服务端渲或者合并到真实 Dom 失败，则创建一个空的 VNode 节点替换它
              // 把 oldVnode 转换成 VNode 对象
              oldVnode = emptyNodeAt(oldVnode)
            }
            // 获取真实的 dom - 例如 id 为 app 的 div
            const oldElm = oldVnode.elm
            // 获取父节点 - 例如 id 为 app 的 div 的父节点为 body
            const parentElm = nodeOps.parentNode(oldElm)
            // 通过虚拟节点创建真实的 DOM 并插入到它的父节点中，在后面会删除原来的真实dom，即oldElm
            createElm(
              vnode,
              insertedVnodeQueue, // keep-alive + HOCs. (#4590)
              oldElm._leaveCb ? null : parentElm, //父真实dom
              nodeOps.nextSibling(oldElm) //旧真实dom下一个兄弟节点
            )
            // destroy old node
            if (isDef(parentElm)) {
              // 删除旧节点 会删除<div id='app'>
              removeVnodes([oldVnode], 0, 0)
            } else if (isDef(oldVnode.tag)) {
              invokeDestroyHook(oldVnode)
            }
          }
        }
      }
    }
    说明：patch主要做的是根据新旧vnode生成dom，vnode类型不同处理不同，
      初次patch时，真实vnode直接创建emptyVNode来创建DOM节点并插入parent上，组件vnode实例化组件；
      更新时，patchVnode比对新旧vnode

  3. 创建DOM   createElm
    /* 
      *两种情况：
      *1. 组件，直接走createComponent，创建组件，组件mount流程
      *2. 非组件，有子节点则通过递归，用虚拟节点创建真实的 DOM ，并将子节点插入到它的父节点中，最后将当前节点插入父节点的父节点中去.
    */ 
      function createElm (
        vnode,
        insertedVnodeQueue,
        parentElm,
        refElm,
        nested,
        ownerArray,
        index
      ) {
        /**
        *  1. 组件，如果是执行完createComponent方法返回true就return不执行下面。即实例化组件
        * */ 
        if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
          return
        }
        /**
        * 2.非组件走下面流程
        * */ 
        const data = vnode.data // vnode 的属性数据({attr: {id: 'app'}}) 或 字符串（文本字符串）
        const children = vnode.children // 获取 vnode 子节点(例如：div 内的 button、span 节点的，已标准化的 vnode)
        const tag = vnode.tag //div
        // 是否为一个合法标签
        if (isDef(tag)) {
          // 创建一个父节点占位符元素  //创建空的标签的目标是为了让标签仅仅是标签，其内容都当是children来处理
          // 通过 document 原生方法创建指定 tag 的 dom
          vnode.elm = vnode.ns
            ? nodeOps.createElementNS(vnode.ns, tag)
            : nodeOps.createElement(tag, vnode)
          setScope(vnode)
          // 创建子节点
          // 遍历所有子 VNode 递归调用 createElm 创建子组件
          // 通过一个递归的方式就可以完整地构建了整个组件树
          createChildren(vnode, children, insertedVnodeQueue)
          if ( (data)) {
            // 调用 created 钩子函数
            invokeCreateHooks(vnode, insertedVnodeQueue)
          }
          // 插入 // 因为是递归调用，子元素会优先调用 insert，所以整个 vnode 树节点的插入顺序是先子后父
          insert(parentElm, vnode.elm, refElm)
        } else if (isTrue(vnode.isComment)) {// 如果是注释或者纯文本节点则直接插入到父元素中
          vnode.elm = nodeOps.createComment(vnode.text)
          insert(parentElm, vnode.elm, refElm)
        } else {
          vnode.elm = nodeOps.createTextNode(vnode.text)
          insert(parentElm, vnode.elm, refElm)
        }
      }
      // 递归遍历子节点，然后再次调用 createElm 方法
      function createChildren (vnode, children, insertedVnodeQueue) {
        // 如果还有子节点
        if (Array.isArray(children)) {
          // 递归调用 createElm 创建子节点节点，并将当前 vnode.ele 作为父节点
          for (let i = 0; i < children.length; ++i) {
            createElm(children[i], insertedVnodeQueue, vnode.elm, null, true, children, i)
          }
          // 如果是基础数据类型，创建一个文本节点并添加
        } else if (isPrimitive(vnode.text)) {
          nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)))
        }
      }

  4. 组件Vnode createComponent
    // IMPORT: 创建一个组件
    function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
      let i = vnode.data
      if (isDef(i)) {
        const isReactivated = isDef(vnode.componentInstance) && i.keepAlive
        // debugger
        // data 中是否有 hook，hook 中是否有 init 方法
        if (isDef(i = i.hook) && isDef(i = i.init)) {
          // 执行组件初始化 _init，组件进行挂载
          // NOTICE: 在 _init 中会完成子组件的 patch ( vdom/create-component line-42)
          i(vnode, false /* hydrating */)
          /**
          * 走组件内部流程，开始组件初始化、实例化，组件子组件也会递归进入这
          * 最后子组件走完，回到当前组件这，继续走下面
          */
        }
        /**
        * 在 child = vnode.componentInstance = createComponentInstanceForVnode(）实例化组件后赋值
        */
        if (isDef(vnode.componentInstance)) {
          initComponent(vnode, insertedVnodeQueue) //初始化组件实例
          insert(parentElm, vnode.elm, refElm)
          if (isTrue(isReactivated)) {
            reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm)
          }
          return true
        }
      }
    }

  5. 比对vnode  patchVnode
    function patchVnode (
      oldVnode,
      vnode,
      insertedVnodeQueue,
      ownerArray,
      index,
      removeOnly
    ) {
      // 新旧 vnode 相等
      if (oldVnode === vnode) {
        return
      }
      ...
      const elm = vnode.elm = oldVnode.elm //操作旧真实dom，因为旧真实dom才是渲染在浏览器的dom
      ...
      const oldCh = oldVnode.children
      const ch = vnode.children
      ...
      if (isUndef(vnode.text)) { //新节点没有文本
        if (isDef(oldCh) && isDef(ch)) { //同时存在children，进行children对比
          if (oldCh !== ch) updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly)
        } else if (isDef(ch)) { //只存在新children，相当于新增chilren节点
          if (process.env.NODE_ENV !== 'production') {
            checkDuplicateKeys(ch)
          }
          if (isDef(oldVnode.text)) nodeOps.setTextContent(elm, '')
          addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue)
        } else if (isDef(oldCh)) { //只存在旧children，相当于删除旧chilren节点
          removeVnodes(oldCh, 0, oldCh.length - 1)
        } else if (isDef(oldVnode.text)) { //都没有children，但旧节点有text，清空旧的文本
          nodeOps.setTextContent(elm, '')
        }
      } else if (oldVnode.text !== vnode.text) {//新节点有文本，但不同，替换文本
        nodeOps.setTextContent(elm, vnode.text)
      }
      ...
    }

  6. diff比对子Vnodes updateChildren
    function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
      let oldStartIdx = 0
      let newStartIdx = 0
      let oldEndIdx = oldCh.length - 1
      let oldStartVnode = oldCh[0]
      let oldEndVnode = oldCh[oldEndIdx]
      let newEndIdx = newCh.length - 1
      let newStartVnode = newCh[0]
      let newEndVnode = newCh[newEndIdx]
      let oldKeyToIdx, idxInOld, vnodeToMove, refElm
      const canMove = !removeOnly
      while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
        if (isUndef(oldStartVnode)) { //不存在旧开头
          oldStartVnode = oldCh[++oldStartIdx] // 旧开头指针右移动
        } else if (isUndef(oldEndVnode)) { //不存在旧结尾
          oldEndVnode = oldCh[--oldEndIdx] // 旧结尾指针左移动
        } else if (sameVnode(oldStartVnode, newStartVnode)) { //新旧开头一致，patch新旧节点
          patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx) 
          oldStartVnode = oldCh[++oldStartIdx] // 旧开头指针右移动
          newStartVnode = newCh[++newStartIdx] // 新开头指针右移动
        } else if (sameVnode(oldEndVnode, newEndVnode)) { //新旧结尾一致，patch新旧节点
          patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx)
          oldEndVnode = oldCh[--oldEndIdx]
          newEndVnode = newCh[--newEndIdx]
        } else if (sameVnode(oldStartVnode, newEndVnode)) { //新开头旧结尾一致，patch新旧节点
          patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx)
          canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm))
          oldStartVnode = oldCh[++oldStartIdx]
          newEndVnode = newCh[--newEndIdx]
        } else if (sameVnode(oldEndVnode, newStartVnode)) { //新结尾开头一致，patch新旧节点
          patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx)
          canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm)
          oldEndVnode = oldCh[--oldEndIdx]
          newStartVnode = newCh[++newStartIdx]
        } else { 
          //根据oldStartIdx, oldEndIdx创建旧数组的key-Id映射表，
          if (isUndef(oldKeyToIdx)) oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx)
          // 根据新开头的key在key-Id映射表中找到旧数组中对应的Id(idxInOld下标)
          idxInOld = isDef(newStartVnode.key)
            ? oldKeyToIdx[newStartVnode.key]
            : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx)
          if (isUndef(idxInOld)) { // 如果旧数组中不存在对应的Dom，根据新vnode创建新的Dom插入到旧数组开头的位置去
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx)
          } else { //如果旧数组中存在对应的Dom
            vnodeToMove = oldCh[idxInOld]//找到对应的旧vnode
            if (sameVnode(vnodeToMove, newStartVnode)) {//如果相同vnode，patch比对新旧vnode更新dom，清空旧数组对应下标的内容，旧dom插入到旧数组开头的位置去（这里所说的开头位置都是指startIdx前一个位置）
              patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue, newCh, newStartIdx)
              oldCh[idxInOld] = undefined
              canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm)
            } else { //如果不同，根据新vnode创建新的Dom插入到旧数组开头的位置去
              createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx)
            }
          }
          newStartVnode = newCh[++newStartIdx] //新数组指针右移动
        }
      }
      //以上while循环执行完毕之后会对剩余的节点进行处理：
      if (oldStartIdx > oldEndIdx) { //当旧数组比对完成，新数组还有，批量创建dom插入到父级DOM后面去（即旧数组后面）
        refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm
        addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue)
      } else if (newStartIdx > newEndIdx) { //当旧的还有，新的比对完了，那么批量删除旧DOM
        removeVnodes(oldCh, oldStartIdx, oldEndIdx)
      }
    } 
    说明：
      diff的过程是：拿新旧vnode数组，先新旧开头比对，不成然后新旧结尾比对，不成然后新开头旧结尾比对，不成然后旧开头新结尾比对，不成在旧数组中生成key-id映射表，拿新开头在映射表中找，没找到创建新dom插入到旧数组开头位置去，找到了比对新旧的更新dom同时拷贝旧dom插入到旧数组开头位置去，清空旧数组对应的位置的内容是保留旧数组的长度，否则后面旧数组的位置就错乱了，找到了如果新旧不同，那么也创建新的dom插入到旧数组开头位置去；如此循环比对新旧数组的所有元素，当旧的比对完了，新数组还有，批量创建dom插入到父级DOM后面；当旧的还有，新的比对完了，那么批量删除旧DOM。
      至此，vnode的children的所有patch就完成了，旧DOM也更新了。
      1. 如果新旧数组头部节点是sameVnode，递归的进行patchVnode，之后旧数组右移，新数组右移。
      2. 如果新旧数组尾部节点是sameVnode，递归的进行patchVnode，之后旧数组左移，新数组左移。
      3. 如果旧数组头部节点和新数组尾部节点是sameVnode，递归的进行patchVnode，之后旧数组右移，新数组左移。
      4. 如果旧数组尾部节点和新数组头部节点是sameVnode，递归的进行patchVnode，之后旧数组左移，新数组右移。
      5. 如果以上4种情况都不满足，则把旧数组中剩余的节点根据他们的key与他们本身建立一个映射关系，并通过新数组头部节点的key来查找旧数组中匹配的节点。如果存在key相同的节点，则获取该节点在旧数组中的位置，判断该节点与新数组中的头部节点是否为sameVnode，并把旧数组中该位置设置为undefined；如果不存在key相同的节点，则直接执行createElm方法，进入创建流程。

  7. 插入顺序
    createChildren中可以看出，DOM的插入顺序是子先插入到父，如此一级一级往上插入的。

  8. 总结：
    patch是整个virtaul-dom当中最为核心的方法，主要功能是对旧vnode和新vnode进行diff的过程，最后生成新的DOM节点通过updataComponent()方法重新渲染，vue对此做了相当多的性能优化
  
  9. Patch流程总结：
      1. 当数据发生改变时，订阅者watcher就会调用patch给真实的DOM打补丁
      2. 通过isSameVnode进行判断，相同则调用patchVnode方法
      3. patchVnode做了以下操作：
          1. 找到对应的真实dom，称为el
          2. 如果都有都有文本节点且不相等，将el文本节点设置为Vnode的文本节点
          3. 如果oldVnode有子节点而VNode没有，则删除el子节点
          4. 如果oldVnode没有子节点而VNode有，则将VNode的子节点真实化后添加到el
          5. 如果两者都有子节点，则执行updateChildren函数比较子节点
          6. updateChildren主要做了以下操作：
              1. 设置新旧VNode的头尾指针
              2. 新旧头尾指针进行比较，循环向中间靠拢，根据情况调用patchVnode进行patch重复流程、调用createElem创建一个新节点，从哈希表寻找 key一致的VNode 节点再分情况操作

  10. 手写系列
    手写 Vue2 系列 之 patch —— diff
    https://juejin.cn/post/6982341667483303950
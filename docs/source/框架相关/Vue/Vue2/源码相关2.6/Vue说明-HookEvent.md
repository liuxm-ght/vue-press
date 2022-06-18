#### Hook Event
1. Hook Event（钩子事件）
  简介：
    相信很多 Vue 开发者都没有使用过，甚至没听过，毕竟 Vue 官方文档中也没有提及。
    Vue 提供了一些生命周期钩子函数，供开发者在特定的逻辑点添加额外的处理逻辑，比如：在组件挂载阶段提供了 beforeMount 和 mounted 两个生命周期钩子，供开发者在组件挂载阶段执行额外的逻辑处理，比如为组件准备渲染所需的数据。
    那这个 Hook Event —— 钩子事件，其中也有钩子的意思，和 Vue 的生命周期钩子函数有什么关系呢？
  作用：
    通过 Hook Event 可以从组件外部为组件注入额外的生命周期方法。
  eg：
  ```ts
    <template>
      <div class="wrapper">
        <comp @hook:mounted="hookMounted" />
      </div>
    </template>
    < script>
    // 这就是上面的那个第三方业务组件
    import Comp from '@/components/Comp.vue'
    export default {
      components: {
        Comp
      },
      methods: {
        hookMounted() {
          console.log('loading ...')
        }
      }
    }
    </>
  ```
    这时候你再刷新页面就会发现业务组件在请求数据的时候，会在控制台输出一个 loading ... 字符串。

  代码：
    /**
    *callHook(vm, 'mounted')
    *执行实例指定的生命周期钩子函数
    *如果实例设置有对应的 Hook Event，比如：<comp @hook:mounted="method" />，执行完生命周期函数之后，触发该事件的执行
    *@param {*} vm 组件实例
    *@param {*} hook 生命周期钩子函数
    */
    export function callHook (vm: Component, hook: string) {
      pushTarget() // 在执行生命周期钩子函数期间禁止依赖收集，设置Dep.target = ''
      const handlers = vm.$options[hook] // 从实例配置对象中获取指定钩子函数，比如 mounted
      const info = `${hook} hook`
      if (handlers) { // *生命周期钩子在这里触发
        for (let i = 0, j = handlers.length; i < j; i++) {
          invokeWithErrorHandling(handlers[i], vm, null, vm, info)// 通过 invokeWithErrorHandler 执行生命周期钩子
        }
      }
      // Hook Event，如果设置了 Hook Event，比如 <comp @hook:mounted="method" />，则通过 $emit 触发该事件
      if (vm._hasHookEvent) { // *hook event 的在这里触发
        // vm._hasHookEvent 标识组件是否有 hook event，这是在 vm.$on 中处理组件自定义事件时设置的
        vm.$emit('hook:' + hook) 
      }
      // 关闭依赖收集,Dep.target = null
      popTarget()
    }
    /**
    *通用函数，执行指定函数 handler
    *传递进来的函数会被用 try catch 包裹，进行异常捕获处理
    */
    export function invokeWithErrorHandling ( handler: Function, context: any, args: null | any[], vm: any, info: string) {
      let res
      try {
        // 执行传递进来的函数 handler，并将执行结果返回
        res = args ? handler.apply(context, args) : handler.call(context)
        if (res && !res._isVue && isPromise(res) && !res._handled) {
          res.catch(e => handleError(e, vm, info + ` (Promise/async)`))
          res._handled = true
        }
      } catch (e) {
        handleError(e, vm, info)
      }
      return res
    }

  原理：
    <comp @hook:mounted="hookMounted" />
    会被解析成 on:['hook:mounted'] 组件Comp会执行vm.$on(on[i])来注册on里的所有事件，如果是hook event会被标记_hasHookEvent
    当组件执行生命周期callhooks的时候会触发vm.$emit('hook:' + hook)来触发注册了的事件
  
  总结：  
    什么是 Hook Event？
      Hook Event 是 Vue 的自定义事件结合生命周期钩子实现的一种从组件外部为组件注入额外生命周期方法的功能。
    Hook Event 是如果实现的？
      1. 组件上添加自定义事件，用@hook：生命周期钩子的格式来定义事件，那么解析的时候$on会标记当前组件为_hasHookEvent
      2. 在执行到组件生命周期的时候，会判断如果有_hasHookEvent标记，那么会$emit触发hook event

  参考：
    Vue 源码解读（7）—— Hook Event
    https://juejin.cn/post/6954923081462710309


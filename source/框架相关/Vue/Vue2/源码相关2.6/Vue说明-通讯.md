#### VuexBus
  原理：
    创建一个全局容器，用来装注册了的事件，这样在全局各处都能触发调用
  作用：
    注册全局事件，在各组件都可以触发
  代码：
    VuexEvent = function(store) {
      // 注册一个新的store模块
      store.registerModule('EventBus',{
        mutations: {
          setEvent(){} //作用是用于标记事件的触发，方便跟踪
        }
      })
      store.$events = {} //store全局上挂载$events
      store.$on = function(evt,fn) {
        store.$events['$'+evt] = fn
      }
      store.$off = function(evt) {
        store.$events['$'+evt] = null
      }
      store.$emit = function(evt,data) {
        if(!store.$events['$'+evt]) return
        store.$events['$'+evt](data)
        this.commit('setEvent')
      }
    }
    VuexEvent(store)
  说明：
    利用store的状态可跟踪原理，往store实例上挂载$events对象保存事件和$on、$emit方法用于操作，$emit提交同时commit('setEvent')去记录提交
    同时事件名称同样不能重复，否则会被覆盖

#### EventBus
  原理：
    跟VuexBus很类似，不过使用的是新的Vue实例来创造容器
  作用：
    注册全局事件，在各组件都可以触发
  代码：
    var EventBus = new Vue()
    EventBus.$emit('message', 'hello');
    EventBus.$on('message', (e) => {
      console.log(e)
    })
  说明：
    Vue内部有$emit、$on的方法，同时也在initEvent提供了vm._events容器
    但是缺点就是不能跟踪提交状态
    同时事件名称同样不能重复，否则会被覆盖


#### 组合组件$on\$emit
  原理：
  作用：
  代码：
  说明：
  总结：

#### 父子组件props
  原理：
  作用：
  代码：
  说明：
  总结：
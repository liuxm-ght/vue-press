
[[toc]]
### Vue生命周期流程
![Vue生命周期](./Vue生命周期.png)

* 具体分析

* beforeCreate -> created
    * 初始化vue实例，进行数据观测

* created
    * 完成数据观测，属性与方法的运算，watch、event事件回调的配置
    * 可调用methods中的方法，访问和修改data数据触发响应式渲染dom，可通过computed和watch完成数据计算
    * 此时vm.$el 并没有被创建

* created -> beforeMount
    * 判断是否存在el选项，若不存在则停止编译，直到调用vm.$mount(el)才会继续编译
    * 优先级：render > template > outerHTML
    * vm.el获取到的是挂载DOM的

* beforeMount
    * 在此阶段可获取到vm.el
    * 此阶段vm.el虽已完成DOM初始化，但并未挂载在el选项上

* beforeMount -> mounted
    * 此阶段vm.el完成挂载，vm.$el生成的DOM替换了el选项所对应的DOM

* mounted
    * vm.el已完成DOM的挂载与渲染，此刻打印vm.$el，发现之前的挂载点及内容已被替换成新的DOM

* beforeUpdate
    * 更新的数据必须是被渲染在模板上的（el、template、render之一）
    * 此时view层还未更新
    * 若在beforeUpdate中再次修改数据，不会再次触发更新方法
    
* updated
    * 完成view层的更新
    * 若在updated中再次修改数据，会再次触发更新方法（beforeUpdate、updated）

* beforeDestroy
    * 实例被销毁前调用，此时实例属性与方法仍可访问
    
* destroyed
    * 完全销毁一个实例。可清理它与其它实例的连接，解绑它的全部指令及事件监听器
    * 并不能清除DOM，仅仅销毁实例
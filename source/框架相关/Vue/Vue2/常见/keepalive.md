### Keep-Alive
  1. 使用：
      * keep-alive是vue中的内置组件，能在组件切换过程中将状态保留在内存中，防止重复渲染DOM
      * keep-alive 包裹动态组件时，会缓存不活动的组件实例，而不是销毁它们
      * keep-alive可以设置以下props属性：
          include - 字符串或正则表达式。只有名称匹配的组件会被缓存
          exclude - 字符串或正则表达式。任何名称匹配的组件都不会被缓存
          max - 数字。最多可以缓存多少组件实例
      * 关于keep-alive的基本用法：
          <keep-alive>
            <component :is="view"></component>
          </keep-alive>

      * 新增了两个钩子
        * actived
        * deactivated

  2. 原理： 

      1. keepalive使用render来渲染组件，通过this.$slots.default来获取槽子组件
      2. 组件内部维护一个cache数组来缓存使用符合规则include...的组件
      3. 通过槽子组件的name或tag来当做cache的key
      4. 当缓存超过最多存储数量时，删除最老的组件，即下标为0的组件
      5. keepalive组件销毁的时候，清空cache

  3. 缓存组件如何获取最新数据

      1. beforeRouteEnter
          每次组件渲染的时候，都会执行beforeRouteEnter
          beforeRouteEnter(to, from, next){
              next(vm=>{
                  console.log(vm)
                  // 每次进入路由执行
                  vm.getData()  // 获取数据
              })
          },

      2. actived
          在keep-alive缓存的组件被激活的时候，都会执行actived钩子
          activated(){
            this.getData() // 获取数据
          },
          注意：服务器端渲染期间avtived不被调用

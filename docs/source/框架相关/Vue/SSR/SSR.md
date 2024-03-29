### SSR
  1. 单页应用SPA
      单页应用优秀的用户体验，使其逐渐成为主流，页面内容由JS渲染出来，这种方式称为客户端渲染
      打开页面查看源码，浏览器拿到的仅有宿主元素#app，并没有内容

  2. 服务端渲染
      SSR解决方案，后端渲染出完整的首屏的dom结构返回，前端拿到的内容包括首屏及完整spa结构，应用激活后依然按照spa方式运行
      指由服务侧完成页面的 HTML 结构拼接的页面处理技术，发送到浏览器，然后为其绑定状态与事件，成为完全可交互页面的过程
      我们从上门解释得到以下结论：
        * Vue SSR是一个在SPA上进行改良的服务端渲染
        * 通过Vue SSR渲染的页面，需要在客户端激活才能实现交互
        * Vue SSR将包含两部分：服务端渲染的首屏，包含交互的SPA

  3. 解决了什么
    SSR主要解决了以下两种问题：
      * seo：搜索引擎优先爬取页面HTML结构，使用ssr时，服务端已经生成了和业务想关联的HTML，有利于seo
      * 首屏呈现渲染：用户无需等待页面所有js加载完成就可以看到页面视图（压力来到了服务器，所以需要权衡哪些用服务端渲染，哪些交给客户端）
    但是使用SSR同样存在以下的缺点：
      * 复杂度：整个项目的复杂度
      * 库的支持性，代码兼容
      * 性能问题

  4. 如何实现
      1. 使用ssr不存在单例模式，每次用户请求都会创建一个新的vue实例
      2. 实现ssr需要实现服务端首屏渲染和客户端激活
      3. 服务端异步获取数据asyncData可以分为首屏异步获取和切换组件获取
          * 首屏异步获取数据，在服务端预渲染的时候就应该已经完成
          * 切换组件通过mixin混入，在beforeMount钩子完成数据获取

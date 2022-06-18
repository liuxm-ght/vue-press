### webpack知识体系
  1. 核心概念
      1. 入口
      2. 输出
      3. loader
      4. plugin
      5. devtool
      6. devserver
      7. resolve
      8. externals
      9. mode
      

  2. 编译流程
      1. 初始化：配置、compiler、plugin、启动构建
      2. 模块编译：loader转译模块、依赖关系确认
      3. chunks输出：合成chunks字符串、输出文件


  3. 编译优化
      1. tree-shakig： 删除无效代码
      2. code-splitting：代码切割、提取公共代码、动态加载lazy-loading
      3. css-code-splitting： css代码提取、与js并行加载
      4. 占位符控制浏览器缓存：定义打包文件名称，做到更新仅部分文件变动
      5. dllPlugin：生成第三方库文件，再次打包直接从文件找而不是去node_modules找
      6. 开启loader的缓存
      7. thread-loader： 多进程打包 js 和 css 的 loader
      8. terser-webpack-plugin： 多进程压缩 js
      9. css压缩：optimization.minimizer = new OptimizeCSSAssetsPlugin({})


  5. Tapable
      1. webpack利用Tapable提供的发布订阅API来实现插件的注册和调用
      2. 在插件apply中可以获取compiler，通过compiler.hooks(上面挂载了wepback各个运行阶段需要用到的hooks)获取发布订阅模式，tap注册钩子事件，在webpack运行过程中通过这些hooks的call触发这些钩子事件


  6. HMR
      1. 开启本地服务，解决跨域问题，用与http请求
      2. 热更新，sockjs通讯，module.hot.accept监听文件，做到无感知刷新页面

  7. webpack解决了：
      1. 编译代码能力：提高效率，解决浏览器兼容性问题
      2. 模块整合能力：提高性能，可维护性，解决浏览器频繁请求文件问题
      3. 万物皆可模块能力：项目维护性增强，支持不同种类的前端模块类型，统一的模块化方案，所有资源文件的加载都可以通过代码控制

<!-- 
    Webpack相关的详情见《Webpack》系列

    好文章：
        https://juejin.cn/post/6844904047221145613
        https://github.com/darrell0904/webpack-doc
        https://mp.weixin.qq.com/s/2rUjUM6Zfu1I7cjRUDschg
        https://zhuanlan.zhihu.com/p/142755734
 -->
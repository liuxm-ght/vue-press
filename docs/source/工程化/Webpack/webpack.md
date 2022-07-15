[[toc]]
## webpack知识体系

### 核心概念
1. [入口](./Webp配置/核心概念/webp核心概念.md#%E5%85%A5%E5%8F%A3-entry)
2. [输出](./Webp配置/核心概念/webp核心概念.md#%E8%BE%93%E5%87%BA-output)
3. [loader](./Webp配置/核心概念/webp核心概念.md#%E6%A8%A1%E5%9D%97-module-%E9%85%8D%E7%BD%AEloader-%E6%96%87%E4%BB%B6%E8%BD%AC%E6%8D%A2%E5%B7%A5%E5%85%B7)
4. [plugin](./Webp配置/核心概念/webp核心概念.md#%E6%8F%92%E4%BB%B6-plugins)
5. [devtool](./Webp配置/核心概念/webp核心概念.md#%E5%BC%80%E5%8F%91%E5%B7%A5%E5%85%B7-devtool-%E9%85%8D%E7%BD%AEsource-map)
6. [devserver](./Webp配置/核心概念/webp核心概念.md#%E5%BC%80%E5%8F%91%E6%9C%8D%E5%8A%A1-devserver)
7. [resolve](./Webp配置/其他重要概念/webp基础概念.md#resolve-%E9%85%8D%E7%BD%AE%E6%A8%A1%E5%9D%97%E5%A6%82%E6%9E%9C%E8%A7%A3%E6%9E%90)
8. [externals](./Webp配置/其他重要概念/webp基础概念.md#externals)
9. [mode](./Webp配置/其他重要概念/webp基础概念.md#%E6%A8%A1%E5%BC%8F-mode)

[->](./Webp配置/核心概念/webp核心概念.md)
      

###  编译优化 
1. [tree-shakig：](./Webp配置/高级概念/详解/Tree-Shaking.md) 删除无效代码
2. [code-splitting：](./Webp配置/高级概念/详解/Code-Splitting.md)代码切割、提取公共代码、动态加载lazy-loading
3. [css-code-splitting：](./Webp配置/高级概念/详解/CSS-Code-Splitting.md) css代码提取、与js并行加载
4. [占位符控制浏览器缓存：](./Webp配置/高级概念/详解/webpack和浏览器缓存.md)定义打包文件名称，做到更新仅部分文件变动
5. [dllPlugin：](./Webp配置/高级概念/详解/dllPlugin.md) 生成第三方库文件，再次打包直接从文件找而不是去node_modules找
6. 开启loader的缓存
7. thread-loader： 多进程打包 js 和 css 的 loader
8. terser-webpack-plugin： 多进程压缩 js
9. css压缩：optimization.minimizer = new OptimizeCSSAssetsPlugin({})

[->](./Webp性能优化/Webp性能优化.md)


### 编译流程
1. [初始化：](./Webp原理/Webp构建流程.md#%E5%87%86%E5%A4%87%E9%98%B6%E6%AE%B5)配置、compiler、plugin、启动构建
2. [模块编译：](./Webp原理/Webp构建流程.md#%E7%BC%96%E8%AF%91%E9%98%B6%E6%AE%B5)loader转译模块、依赖关系确认
3. [chunks输出：](./Webp原理/Webp构建流程.md#%E8%BE%93%E5%87%BA%E9%98%B6%E6%AE%B5)合成chunks字符串、输出文件

[->](./Webp原理/Webp构建流程.md)


###  Tapable 
1. webpack利用Tapable提供的发布订阅API来实现插件的注册和调用
2. 在插件apply中可以获取compiler，通过compiler.hooks(上面挂载了wepback各个运行阶段需要用到的hooks)获取发布订阅模式，tap注册钩子事件，在webpack运行过程中通过这些hooks的call触发这些钩子事件

[->](./Tapable/Tapable.md)


###  HMR 
1. 开启本地服务，解决跨域问题，用与http请求
2. 热更新，sockjs通讯，module.hot.accept监听文件，做到无感知刷新页面

[->](./Webp配置/HMR/HMR(模块热替换).md)

###  webpack解决了：
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
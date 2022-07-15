### vue-loader
  1. vue-loader是用来加载.vue文件的
      * 我们的.vue文件style要是加了scoped，那么经过vue-loader处理后的样式会加上 .app[data-v-hashxx] 这样的class属性的

  2. vue-template-compiler是用来解析.vue文件的
  
  3. vue-style-loader是用来处理.vue文件的样式的
      * vue-style-loader 跟 style-loader 基本用法跟功能是一样的，都是往 dom 里面插入一个 style 标签去让样式生效的，但是 vue-style-loader 支持 vue 中的 ssr（服务端渲染），所以如果需要支持服务端渲染的 vue 项目，就需要用到 vue-style-loader了，如果一般的 vue 项目的话，推荐使用 style-loader，毕竟 style-loader 支持的功能还是丰富些，比如可以懒注入、可以指定位置插入标签等等。
    <!-- 原文链接：https://blog.csdn.net/vv_bug/article/details/109260358 -->
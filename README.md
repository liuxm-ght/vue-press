
#### vuepress图片资源路径问题解决
  1. 图片资源放docs/.vuepress/public中，这个是vuepress默认public路径，可以更改
  2. 第三方vue组件引用图片路径时，路径需要以/vue-press开头，eg：/vue-press/project...，project为public下的一级目录
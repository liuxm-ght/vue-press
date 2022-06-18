### 异常处理：
  1. try...catch...捕获同步异常；
  2. promise的reject捕获宏观任务异步异常；
  3. promise的catch捕获异步异常；
  <!-- https://juejin.cn/post/6844903462002491399#heading-10 -->


### 项目异常处理：
  1. 监听错误
      1. vue.config.errorHandler 来监听vue的错误
      2. window.onerror 即addEventListener('error') 来监听网络请求的错误
          1. onerror可以捕获到宏任务抛出的错误，微任务比如：Promise，和async函数抛出的错误是捕获不到的。onunhandledrejection 可以捕获未处理的Promise中抛出的错误。
          2. 对于本域的js抛出的错误，onerror包含了详情的错误信息。对于其他域的js抛出的错误，只会在msg中显示简单的 Script error。
  
  2. 上报错误
      1. tracekit格式化错误信息
          1. 我们的目标是搭建一个生产环境错误信息收集平台，用户使用的浏览器各有不同，错误对象的格式不同浏览器之间可能有所不同，所以我们需要对不同格式的错误信息，进行标准化。github已经有了现成的轮子，TraceKit - Cross browser stack traces.
      2. 通过 img 来上传错误信息到服务器
          1. 因为img 不会有跨域问题，也不会阻塞js执行，也不刷新页面

  3. 上传sourceMap
      1. webpack-sentry-plugin插件，将打包后的sourceMap上传并删除
      2. sourceMap的功能是用于定位错误位置
          1. SourceMap是如何通过mappings属性提供的位置信息找到源码的，可以查看阮一峰老师的博客，JavaScript Source Map 详解
  
  4. 服务端获取到sourceMap存起来

  5. 服务端获取到上报的错误，根据错误信息到sourceMap中查询，得到具体的代码文件及行、列等信息，返回客户端

  <!-- https://baijiahao.baidu.com/s?id=1708390524836385001&wfr=spider&for=pc -->
  <!-- https://juejin.cn/post/6844904169359294477 -->

  * sentry 与 tracekit区别
      1. sentry 与 tracekit都可以处理错误信息并上报
      2. 区别是 ：Sentry 相对于 TraceKit 提供了更多异常类型的处理，并且不同类型的异常可能会有单独的描述属性。如果需要根据自身的需求定制数据格式，建议基于 TraceKit 的处理结果再次处理。
      <!-- https://www.wangt.cc/2020/12/%E5%89%8D%E7%AB%AF%E5%BC%82%E5%B8%B8%E8%A7%A3%E6%9E%90/ -->

      3.  利用sentry 来管理上报信息，已经搭好的管理系统，不需要自己手动搭建
          1. sentry + vue
          <!-- https://blog.csdn.net/teddyWithPig/article/details/121948261 -->

      4. 利用tracekit需要自己搭服务，自己搭管理系统
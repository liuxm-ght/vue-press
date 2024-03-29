### HTTP2.0时代
  1. 现在我们先不聊HTTP2, 看一下HTTP发展到1.1存在有哪些问题：
      1. 线头阻塞：TCP连接上只能发送一个请求，前面的请求未完成前，后续的请求都在排队等待。
      2. 多个TCP连接
        虽然HTTP/1.1管线化可以支持请求并发，但是浏览器很难实现，chrome、firefox等都禁用了管线化。所以1.1版本请求并发依赖于多个TCP连接，建立TCP连接成本很高，还会存在慢启动的问题。
      3. 头部冗余，采用文本格式
        HTTP/1.X版本是采用文本格式，首部未压缩，而且每一个请求都会带上cookie、user-agent等完全相同的首部。
      4. 客户端需要主动请求

  2. HTTP2.0特点
      1. 二进制分帧层
        HTTP2性能提升的核心就在于二进制分帧层。HTTP2是二进制协议，他采用二进制格式传输数据而不是1.x的文本格式。
      2. 多路复用
        上面提到HTTP/1.1的线头阻塞和多个TCP连接的问题，HTTP2的多路复用完美解决。HTTP2让所有的通信都在一个TCP连接上完成，真正实现了请求的并发。
      3. 头部压缩
        头部压缩也是HTTP2的一大亮点。在1.X版本中，首部用文本格式传输，通常会给每个传输增加500-800字节的开销。现在打开一个网页上百个请求已是常态，而每个请求带的一些首部字段都是相同的，例如cookie、user-agent等。HTTP2为此采用HPACK压缩格式来压缩首部。头部压缩需要在浏览器和服务器端之间：
          维护一份相同的静态字典，包含常见的头部名称，以及常见的头部名称和值的组合
          维护一份相同的动态字典，可以动态的添加内容
          通过静态Huffman编码对传输的首部字段进行编码
      4. 服务器端推送
        服务器端推送使得服务器可以预测客户端需要的资源，主动推送到客户端。
        例如：客户端请求index.html，服务器端能够额外推送script.js和style.css。
        实现原理就是客户端发出页面请求时，服务器端能够分析这个页面所依赖的其他资源，主动推送到客户端的缓存，当客户端收到原始网页的请求时，它需要的资源已经位于缓存。
        针对每一个希望发送的资源，服务器会发送一个PUSH_PROMISE帧，客户端可以通过发送RST_STREAM帧来拒绝推送（当资源已经位于缓存）。这一步的操作先于父响应（index.html），客户端了解到服务器端打算推送哪些资源，就不会再为这些资源创建重复请求。当客户端收到index.html的响应时，script.js和style.css已经位于缓存。
        想要搭一个HTTP2服务器的话推荐node，很简单。链接






  <!-- 面试官问：你了解HTTP2.0吗？ -->
  <!-- https://juejin.cn/post/6844903734670000142 -->
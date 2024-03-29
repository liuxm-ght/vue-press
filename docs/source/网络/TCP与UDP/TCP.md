### TCP/ip 互联网协议

1. 简介：
是面向连接的、可靠的流协议。流就是指不间断的数据结构，当应用程序采用 TCP 发送消息时，虽然可以保证发送的顺序，但还是犹如没有任何间隔的数据流发送给接收端。TCP 为提供可靠性传输，实行“顺序控制”或“重发控制”机制。此外还具备“流控制（流量控制）”、“拥塞控制”、提高网络利用率等众多功能。
  <!-- https://www.jianshu.com/p/9f3e879a4c9c -->

2. 握手流程

   1. 三次握手
      概要：所谓三次握手是指建立一个 TCP 连接时需要客户端和服务器端总共发送三个包以确认连接的建立。
      客户端：hi，你是服务端吗？ SYN = 1 ，seq = J
      服务端：hi，我是服务端，你是客户端吗？ SYN = 1，ACK = 1，ack = J+1， seq = K
      客户端：是的，我是客户端 ACK = 1，ack = K+1
   2. 四次挥手
      概要：
      主动方：我已经关闭向你那边的主动通道了，只能被动接收 FIN = M
      被动方：收到关闭信息，我看看还有没有要发送的信息 ack = M + 1
      被动方：我也关闭向你那边发送消息的通道了 FIN = N
      主动方：最后收到消息，之后双方再无法通讯  ACK = 1，ack = N + 1

3. TCP/ip 并发量
   浏览器对于同一域名下的 Tcp 连接是有限制的（2-10 个）

4. get/post 请求
   get/post 本质都是 tcp/ip，但是除了 http 层的区别外，tcp 层也是有区别的。
   get 请求会产生一个数据包，post 会有两个。
   具体是：
   1. get 请求会将 headers 和 data 一起打包发送，服务器返回 200
   2. post 请求会先将 headers 打包发送过去，服务器返回 100 continue，再将 data 打包发送过去，返回 200

5. 通过序列号与确认应答提高可靠性
   1. 发送方发送SYN = 1、seq = J，等待应答方应答，应答方返回SYN = 1，seq = K，ACK = 1，ack = J+1，确保了序列号的连续性，如果没有ack表明应答方没收到返回数据没到达发送方；
   2. 发送方一段时间内没收到应答，再次发送数据，如果之前应答方已经接收了数据，那么会丢掉当前数据，再次返回之前的数据ack = J+1；
   3. 发送方多次为接收到应答数据，判断为网络异常

#### 五层因特网协议栈

1. 概念： 从客户端发出 http 请求到服务器接收，中间会经过一系列的流程。
   简括就是：
   从应用层的发送 http 请求，到传输层通过三次握手建立 tcp/ip 连接，再到网络层的 ip 寻址，再到数据链路层的封装成帧，最后到物理层的利用物理介质传输。
   当然，服务端的接收就是反过来的步骤

2. 简要：
   1. 应用层(dns,http) DNS 解析成 IP 并发送 http 请求
   2. 传输层(tcp,udp) 建立 tcp 连接（三次握手）
   3. 网络层(IP,ARP) IP 寻址
   4. 数据链路层(PPP) 封装成帧
   5. 物理层(利用物理介质传输比特流) 物理传输（然后传输的时候通过双绞线，电磁波等各种介质）

#### 服务器接收数据后

1. 负载均衡
   简单的说：
   用户发起的请求都指向调度服务器（反向代理服务器，譬如安装了 nginx 控制负载均衡），然后调度服务器根据实际的调度算法，分配不同的请求给对应集群中的服务器执行，然后调度器等待实际服务器的 HTTP 响应，并将它反馈给用户
2. 后台处理：
   一般后台都是部署到容器中的，所以一般为：
3. 先是容器接受到请求（如 tomcat 容器）
4. 然后对应容器中的后台程序接收到请求（如 java 程序）
5. 然后就是后台会有自己的统一处理，处理完后响应响应结果
   概述：
6. 一般有的后端是有统一的验证的，如安全拦截，跨域验证
7. 如果这一步不符合规则，就直接返回了相应的 http 报文（如拒绝请求等）
8. 然后当验证通过后，才会进入实际的后台代码，此时是程序接收到请求，然后执行（譬如查询数据库，大量计算等等）
9. 等程序执行完毕后，就会返回一个 http 响应包（一般这一步也会经过多层封装）
10. 然后就是将这个包从后端发送到前端，完成交互

    <!-- http://www.dailichun.com/2018/03/12/whenyouenteraurl.html -->

    史上最详细的经典面试题 从输入 URL 到看到页面发生了什么？
    <!-- https://juejin.cn/post/6844903832435032072#heading-59 -->

   一篇文章带你熟悉 TCP/IP 协议（网络协议篇二）
    <!-- https://juejin.cn/post/6844903510509633550 -->


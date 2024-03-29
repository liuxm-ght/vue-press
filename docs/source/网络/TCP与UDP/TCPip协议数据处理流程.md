### TCP/IP 协议群

1. 简介
   1. 应用层：http、文件传输 
   2. 传输层：TCP、UDP
   3. 网络层：Ip
   4. 数据链路层：以太网
   5. 物理层：以太网电缆
   * 传输过程中，各层包含的数据：
      1. 应用层：http请求报文
      2. 传输层：http请求报文 + TCP首部(报文标记序号、端口号)
      3. 网络层：http请求报文 + TCP首部(报文标记序号、端口号) + IP首部(ip地址)
      4. 数据链路层：http请求报文 + TCP首部(报文标记序号、端口号) + IP首部(ip地址) + 以太网首部(MAC地址)
      5. 通过物理层传输什么这串数据，接收端收到从数据链路层开始解析判断，逐层传递解析。

2. 数据处理流程：

   1. 应用程序处理首先应用程序会进行编码处理，这些编码相当于 OSI 的表示层功能；编码转化后，邮件不一定马上被发送出去，这种何时建立通信连接何时发送数据的管理功能，相当于 OSI 的会话层功能。
   2. TCP 模块的处理 TCP 根据应用的指示，负责建立连接、发送数据以及断开连接。TCP 提供将应用层发来的数据顺利发送至对端的可靠传输。为了实现这一功能，需要在应用层数据的前端附加一个 TCP 首部。
   3. IP 模块的处理 IP 将 TCP 传过来的 TCP 首部和 TCP 数据合起来当做自己的数据，并在 TCP 首部的前端加上自己的 IP 首部。IP 包生成后，参考路由控制表决定接受此 IP 包的路由或主机。
   4. 网络接口（以太网驱动）的处理从 IP 传过来的 IP 包对于以太网来说就是数据。给这些数据附加上以太网首部并进行发送处理，生成的以太网数据包将通过物理层传输给接收端。
   5. 网络接口（以太网驱动）的处理主机收到以太网包后，首先从以太网包首部找到 MAC 地址判断是否为发送给自己的包，若不是则丢弃数据。如果是发送给自己的包，则从以太网包首部中的类型确定数据类型，再传给相应的模块，如 IP、ARP 等。这里的例子则是 IP 。
   6. IP 模块的处理 IP 模块接收到 数据后也做类似的处理。从包首部中判断此 IP 地址是否与自己的 IP 地址匹配，如果匹配则根据首部的协议类型将数据发送给对应的模块，如 TCP、UDP。这里的例子则是 TCP。另外吗，对于有路由器的情况，接收端地址往往不是自己的地址，此时，需要借助路由控制表，在调查应该送往的主机或路由器之后再进行转发数据。
   7. TCP 模块的处理在 TCP 模块中，首先会计算一下校验和，判断数据是否被破坏。然后检查是否在按照序号接收数据。最后检查端口号，确定具体的应用程序。数据被完整地接收以后，会传给由端口号识别的应用程序。
   8. 应用程序的处理接收端应用程序会直接接收发送端发送的数据。通过解析数据，展示相应的内容。

    <!-- 链接：https://juejin.cn/post/6844903510509633550 -->

3. 首部概念
   1. Tcp首部
      1. 源端口号
      2. 目标端口号
   2. Ip首部
      1. 源IP地址
      2. 目标Ip地址
      3. Tcp协议版号
   3. 以太网首部

4. 各种地址概念
   1. MAC：识别同一链路中不同的计算机
   2. Ip：识别 TCP/IP 网络中互连的主机和路由器
   3. 端口：识别同一台计算机中进行通信的不同应用程序


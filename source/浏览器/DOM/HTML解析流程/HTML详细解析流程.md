### HTML解析 (GUI线程(GUI thread))
  Bytes → characters → tokens → nodes → DOM
  1. 主要两步骤：
      1. 标记化(词法分析)：标记生成器/解析器
          1. 转码（encoding）
              将字节数据，根据指定的编码（例如UTF-8）转为字符串,就是HTML代码
              * 预解析（pre-parsing）
                预解析的作用是，提前加载资源，减少处理时间，它会识别请求资源属性，比如img标签的src，并将这个请求加入请求队列
          2. 符号化（令牌化Tokenization）
            符号化是词法分析的过程，将字符串转为符号Token。(或叫HTML标记过程)
            HTML符号主要有：开始标签、结束标签、文本等。即Token的类别有：Tag Token和文本Token
            * HTML标记，使用状态机表示。状态机一共有4个状态：数据状态(Data)、标记打开状态(Tag open)、标记名称状态(Tag name)、关闭标记打开状态(Close tag open state)。初始状态是数据状态。
                具体过程是：
                  1. 解析器会遍历每个字符进行状态标记，遇到<，状态标记为“标记打开状态”，
                    1. 此时遇到a-z状态标记为“起始标记”，并保持到>字符，此期间的所字符串形成一个新的标记名称。遇到到>字符，状态标记为“关闭标记打开状态”，同时将当前的新标记发送给树构造器(此时构造器同时进行着)，状态改为“数据状态”。
                    2. 接收下一个输入字符/时，会创建关闭标记打开状态，并更改为“标记名称状态”。直到接收>字符，将当前的新标记发送给树构造器，并改回“数据状态”。
                  2. 遇到a-z字符时，会将每个字符创建成字符标记，并发送给树构造器。此时构造器同时进行着。
                  * 解析的过程中，GUI线程有很强的容错机制，防止出现页面解析错误的情况
          3. 构建Nodes
            将发出的令牌(Token/标记)转为Node对象(定义了这个节点的属性和规则的对象)
      2. 树构建(语法分析)：树构造器
          4. 构建树（tree construction）
            * 注意：符号化和构建树是并行操作的，就是说解析到一个开始标签，就构建一个Dom节点
            * 在创建解析器的同时，也会创建 Document 对象。
            在符号化的过程中，生成一个标记对象(node)会发送给树构造器，构造器接收到标记对象(node)后，会将标记对象(node)压入其维护的一个栈中去，同时往 Document对象 上添加一个DOM节点，如果是文本标记对象(node)\没闭合标签的标记对象(node)，那么直接加到DOM上去，不压入栈，如果是结束标签不会入栈，但会跟栈顶元素匹配，如果匹配上，弹出栈顶，处理层级关系，继续接受后面的标记对象(node)。当栈空了，即html标记对象(node)也加入dom了，DOM树构建完毕。
                <!-- (我的理解是，解析器维护了一个栈，符号化过程中遇到一个开始标签就入栈，并创建一个DOM对象，继续解析，遇到非结束标签继续生成Token并压入栈，同时创建一个DOM对象，添加一个parent属性指向前一个Token，直到遇到结束Token，弹出栈顶Token(即销毁了)，加它的parent的children数组中，这样就维护了DOM tree的关系) -->
                <!-- https://blog.csdn.net/Alan_1550587588/article/details/80297765 -->
                <!-- http://www.dailichun.com/2018/03/12/whenyouenteraurl.html -->

  2. 加载与解析过程的阻塞性问题(window.onload和DOMContentLoaded有什么区别？)
      <!-- (《DOMContentLoaded.md》篇也有部分说明，但这里更着重阻塞性问题) -->
      整个dom的解析过程是顺序，并且渐进式的。
      <!-- 
        html从第一行开始解析，遇到外联资源(外联css、外联javascript、image、iframe等)就会请求对应资源，那么请求过程是否会阻塞dom的解析过程呢？

          答案是看情况，有的资源会，有的资源不会。
        
        下面按是否会阻塞页面解析分为两类：
          阻塞型与非阻塞型，注意这里区分两类资源的标志是document对象派发DOMContentLoaded事件的时间点，认为
      -->
      派发DOMContentLoaded事件才表示dom树构建完成。

      1. 阻塞型
        会阻塞dom解析的资源主要包括有：
          <!-- * 内联css   应该是阻塞渲染树生成，不阻塞dom的解析-->
          * 内联js
          * 外联普通js
            上面这两种其实差不多，dom解析遇到script标签，暂停，(加载外联js)，然后执行js，完了再继续dom解析，dom解析完了，最后派发DOMContentLoaded事件
          * 外联defer js
            dom解析，遇到script defer标签，并行加载js，继续解析dom，dom解析完了，执行js(可以把此时的script理解为dom解析的一部分)，最后派发DOMContentLoaded事件
          * script标签之前的外联css
            css资源是不应该阻塞dom的解析的，但是如果后面有js代码要执行，js代码可能调用类似getComputedStyle API来操作样式，所以js的执行必现等待css加载解析完成，由于js的执行会阻塞dom的解析，所以script标签之前的外联css资源会阻塞dom的解析
      2. 非阻塞型
        不会阻塞dom解析的资源主要包括有：
          * js标签之后的外联css
            一般情况css的加载解析是不会阻塞dom的加载和解析的
          * image
          * iframe
            上面两个的加载都是不会阻塞dom的解析的
          * 外联 async js
            dom解析，遇到script async标签，并行加载js，
            执行有两种情况：
              1. dom解析完，js还没加载完，js不会阻塞dom的解析，及DOMContentLoaded事件的派发
              2. dom未解析完，js加载完了，会马上执行js，阻塞dom的解析及DOMContentLoaded事件的派发
      <!-- 详细说明将参考文章 https://juejin.cn/post/6844903745730396174 -->


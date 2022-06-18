### DOMContentLoaded
  1. 介绍：
    文档加载和解析完成，后触发DOMContentLoaded事件，而无需等待样式表、图像和子框架的完全加载。
  
  2. 何为解析完成？
    从浏览器的渲染流程说起
    分析：
      浏览器向服务器请求到了 HTML 文档后便开始解析，产物是 DOM（文档对象模型），到这里 HTML 文档就被加载和解析完成了。如果有 CSS 的会根据 CSS 生成 CSSOM（CSS 对象模型），然后再由 DOM 和 CSSOM 合并产生渲染树。有了渲染树，知道了所有节点的样式，下面便根据这些节点以及样式计算它们在浏览器中确切的大小和位置，这就是布局阶段。有了以上这些信息，下面就把节点绘制到浏览器上。
      JavaScript 可以阻塞 DOM 的生成，也就是说当浏览器在解析 HTML 文档时，如果遇到
      <body>
        <script type="text/javascript">
        console.log(document.getElementById('ele')); // null
        </script>
        <div id="ele"></div>
        <script type="text/javascript">
        console.log(document.getElementById('ele')); // <div id="ele"></div>
        </script>
      </body>
      那么，因为 JavaScript 可以查询任意对象的样式，所以意味着在 CSS 解析完成，也就是 CSSOM 生成之后，JavaScript 才可以被执行。

  3. 总结：
    分两种情况，
      一：文档中无js脚本加载 或 js在css加载前面(即外联CSS在后面)
        文档加载和解析完成(或等js执行完成) 即 html转ast后生成Dom后马上触发DOMContentLoaded事件
      二：文档中有js脚本加载 且 js在css加载后面(即外联CSS在前面)
        文档加载和解析，遇到脚本，解析脚本，等待Css加载解生成CSSOM后，才析执行脚本，脚本执行完，继续解析文档，完成后 即 html转ast后生成Dom后，才触发DOMContentLoaded事件
      在任何情况下，DOMContentLoaded 的触发不需要等待图片等其他资源加载完成。

  4. 异步脚本
      HTML5 中定义了两个定义异步脚本的方法：defer 和 async。我们来看一看他们的区别。
      1. 当 HTML 文档被解析时如果遇见（同步）脚本，则停止解析，先去加载脚本，然后执行，执行结束后继续解析 HTML 文档。
      2. defer 脚本：
            当 HTML 文档被解析时如果遇见 defer 脚本，则在后台加载脚本，文档解析过程不中断，而等文档解析结束之后，defer 脚本执行。另外，defer 脚本的执行顺序与定义时的位置有关。
      3. async 脚本：
            当 HTML 文档被解析时如果遇见 async 脚本，则在后台加载脚本，文档解析过程不中断。脚本加载完成后，文档停止解析，脚本执行，执行结束后文档继续解析。
      4. defer 与 DOMContentLoaded
          如果 script 标签中包含 defer，那么这一块脚本将不会影响 HTML 文档的解析，而是等到 HTML 解析完成后才会执行。而 DOMContentLoaded 只有在 defer 脚本执行结束后才会被触发。 所以这意味着什么呢？HTML 文档解析不受影响，等 DOM 构建完成之后 defer 脚本执行，但脚本执行之前需要等待 CSSOM 构建完成。
        在 DOM、CSSOM 构建完毕，defer 脚本执行完成之后，DOMContentLoaded 事件触发。
      5. async 与 DOMContentLoaded
          如果 script 标签中包含 async，则 HTML 文档构建不受影响，解析完毕后，DOMContentLoaded 触发，
          页面渲染的时候遇到script文件会立刻下载，下载过程是异步的，下载完成后会自动执行，他执行的时候会阻塞dom解析，但是他执行时间不一定，可能在DTL事件之前，也可能之后，但一定在load事件之前，所以，async不能保证js文件的执行顺序
        而不需要等待 async 脚本执行、样式表加载等等。

  #### DOMContentLoaded 与 load
    当 HTML 文档解析完成就会触发 DOMContentLoaded，
    而所有资源加载完成之后，load 事件才会被触发。
    
    
    另外需要提一下的是，我们在 jQuery 中经常使用的 (document).ready(function()//...代码...);其实监听的就是DOMContentLoaded事件，而(document).ready(function() { // ...代码... }); 其实监听的就是 DOMContentLoaded 事件，而 (document).ready(function()//...代码...);其实监听的就是DOMContentLoaded事件，而(document).load(function() { // ...代码... }); 监听的是 load 事件。

#### JS延迟加载的方法有哪些？
  1. < script async src="script.js"></>：给script标签加async属性，则加载和渲染后续文档元素的过程将和 script.js 的加载与执行并行进行（异步）
  2. < script defer src="script.js"></>：给script标签加defer属性，加载后续文档元素的过程将和 script.js 的加载并行进行（异步），
      但是 script.js 的执行要在所有元素解析完成之后，DOMContentLoaded 事件触发之前完成
  3. 动态创建script标签：等到DOMContentLoaded 事件触发时，生成一个script标签，渲染到页面上上
  4. setTimeout定时器延迟代码执行


<!-- 链接：https://juejin.cn/post/7022795467821940773 -->


#### 什么是文档碎片？
  是什么：一个容器，用于暂时存放创建的dom元素，使用document.createDocumentFragment()创建
  有什么用：将需要添加的大量元素 先添加到文档碎片 中，再将文档碎片添加到需要插入的位置，大大减少dom操作，提高性能


#### setTimeout而不是setInterval
  * W3C在HTML标准中规定，规定要求setTimeout中低于4ms的时间间隔算为4ms。
  * 用setTimeout模拟定期计时和直接用setInterval是有区别的。
    因为每次setTimeout计时到后就会去执行，然后执行一段时间后才会继续setTimeout，中间就多了误差
    （误差多少与代码执行时间有关）
    而setInterval则是每次都精确的隔一段时间推入一个事件
    （但是，事件的实际执行时间不一定就准确，还有可能是这个事件还没执行完毕，下一个事件就来了）
  * setInterval有一些比较致命的问题就是：
    * 累计效应（上面提到的），如果setInterval代码在（setInterval）再次添加到队列之前还没有完成执行，
        就会导致定时器代码连续运行好几次，而之间没有间隔。
        就算正常间隔执行，多个setInterval的代码执行时间可能会比预期小（因为代码执行需要一定时间）
    * 而且把浏览器最小化显示等操作时，setInterval并不是不执行程序，
      它会把setInterval的回调函数放在队列中，等浏览器窗口再次打开时，一瞬间全部执行时
      所以，鉴于这么多但问题，目前一般认为的最佳方案是：用setTimeout模拟setInterval，或者特殊场合直接用requestAnimationFrame

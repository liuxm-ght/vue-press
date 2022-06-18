### BFC
  1. 概念： 
    BFC - Block Formatting Context 块级格式化上下文 BFC的定义，在官方文档到中，是这么介绍BFC的。
    <!-- A block formatting context contains everything inside of the element creating it that is not also inside a descendant element that creates a new block formatting context. -->
    划重点
      * 每一个BFC区域只包括其子元素，不包括其子元素的子元素。(这1点比较容易理解)
      * 每一个BFC区域都是独立隔绝的,互不影响!(这点不太好理解，但是后续会使用代码验证)

    简单来说：
      BFC是一个完全独立的空间（布局环境），让空间里的子元素不会影响到外面的布局。

  2. 触发条件： 
    1. body根元素
    2. 设置浮动：float：非none
    3. 设置定位：position：absolute 、 fixed
    4. 弹性布局：display：flex
    5. 设置overflow：hidden、scroll、auto
    6. 行内块：inline-block
    7. 表格单元格：table-cell

  3. 解决问题：
    1. 解决外边距margin的塌陷问题(垂直塌陷)

    2. 解决包含塌陷：当父子关系的盒子，给子元素添加margin-top，有可能会把父元素一起带跑

    3. 当浮动产生影响的时候，可以利用BFC来清除浮动的影响：
      当所有的子元素都浮动了，这个时候，父盒子失去了原有的高度，这就是浮动的影响。这个时候，同样也可用BFC的机制，来清除浮动带来的影响。使用BFC，overflow：hidden将所有的浮动元素包裹起来。

    4. BFC可以阻止标准流元素被浮动元素覆盖：
      红色盒子浮动，蓝色盒子时标准流，默认情况下，浮动元素覆盖了标准流元素。但是，如果将蓝色盒子的BFC触发，那么情况将有所变化。

  4. [参考文章：](https://www.itcast.cn/news/20201016/16152387135.shtml)


## position: sticky 粘性布局

- 我不是最后一个知道的：position: sticky
  position 的含义是指定位类型，取值类型可以有：static、relative、absolute、fixed、inherit 和 sticky，这里 sticky 是 CSS3 新发布的一个属性。

  我今天重点要说的就是 sticky 属性，position:sticky 用法

- position:sticky 被称为粘性定位元素（stickily positioned element）是计算后位置属性为 sticky 的元素。

  * 简单的理解就是：
      * 在目标区域以内，它的行为就像 position:relative;在滑动过程中，某个元素距离其父元素的距离达到 sticky 粘性定位的要求时(比如 top：100px)；position:sticky 这时的效果相当于 fixed 定位，固定到适当位置。
      * 可以说是相对定位 relative 和固定定位 fixed 的结合
  * 元素固定的相对偏移是相对于离它最近的具有滚动框的祖先元素，如果祖先元素都不可以滚动，那么是相对于 viewport 来计算元素的偏移量。

- position:sticky 使用条件 
  1. 父元素不能 overflow:hidden 或者 overflow:auto 属性。
  2. 必须指定 top、bottom、left、right 4个值之一，否则只会处于相对定位 
  3. 父元素的高度不能低于 sticky 元素的高度
  4. sticky 元素仅在其父元素内生效

- 使用： 固定顶部导航栏等

- [参考文章：](https://juejin.cn/post/6844904087486464007)

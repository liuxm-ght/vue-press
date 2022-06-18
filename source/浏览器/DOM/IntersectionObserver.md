### IntersectionObserver
  1. 简介
    * 在移动端，有个很重要的概念，叫做懒加载，适用于一些图片资源特别多，ajax数据特别多的页面中，经常会有动态加载数据的场景中，这个时候，我们通常是使用监听scroll或者使用setInterval来判断，元素是否进入视图，其中scroll由于其特别大的计算量，会有性能问题，而setInterval由于其有间歇期，也会出现体验问题。
    * 浏览器的开发商，估计也发现了这个问题，所以在2016年初，chrome51率先提供了一个新的API，就是IntersectionObserver，它可以用来监听元素是否进入了设备的可视区域之内，而不需要频繁的计算来做这个判断。
    [[链接：]](https://www.jianshu.com/p/7c06669ed98e)

  2. 使用： 
    callback是当被监听元素的可见性变化时，触发的回调函数
    options是一个配置参数，可选，有默认的属性值
  ```
    var observer = new IntersectionObserver(callback,options);
      // 对元素target添加监听，当target元素变化时，就会触发上述的回调
    observer.observe(target);
      // 移除一个监听，移除之后，target元素的可视区域变化，将不再触发前面的回调函数
    observer.unobserve(target);
      // 停止所有的监听
    observer.disconnect();
  ```
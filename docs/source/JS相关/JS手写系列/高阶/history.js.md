[[toc]]
## Hash路由实现

  ### 总结
  * 路的实现其实很简单：
      1. 维护一个数组存储路由历史记录
      2. 维护一个path-route路由表，用于查询路由(此实例中没有这个)
      3. 监听路由变化：hashchange或popstate
      4. 触发路由变化：点击浏览器前进后退、手动push、replace、a标签跳转等
      5. 监听变化后，到路由表查或路由历史记录中找，找到对应序号判断是前后操作还是刷新，进而更新路由历史记录表

### 代码实现
```ts
// 路由构造函数 
function Router() {
  this.routes = {}; //保存注册的所有路由
  this.routerViewId = "#routerView"; // 路由挂载点 
  this.stackPages = true; // 多级页面缓存
  this.history = []; // 路由历史
}

Router.prototype = {
  init: function(config) {
    var self = this;
    //页面首次加载 匹配路由
    window.addEventListener('load', function(event) {
      // console.log('load', event);
      self.historyChange(event)
    }, false)

    //路由切换
    window.addEventListener('hashchange', function(event) {
      // console.log('hashchange', event);
      self.historyChange(event)
    }, false)
  },
  // 路由历史纪录变化
  historyChange: function(event) {
      var currentHash = util.getParamsUrl();
      var nameStr = "router-history"
      this.history = window.sessionStorage[nameStr] ? JSON.parse(window.sessionStorage[nameStr]) : []

      var back = false, // 后退
          refresh = false, // 刷新
          forward = false, // 前进
          index = 0,
          len = this.history.length;

      // 比较当前路由的状态，得出是后退、前进、刷新的状态。
      for (var i = 0; i < len; i++) {
        var h = this.history[i];
        if (h.hash === currentHash.path && h.key === currentHash.query.key) { //已存路由
          index = i
          if (i === len - 1) { // 当前路由，刷新
              refresh = true
          } else { // 非当前路由，后退
              back = true
          }
          break;
        } else { //新路由
          forward = true
        }
      }
      if (back) {
          // 后退，把历史纪录的最后一项删除
        this.historyFlag = 'back'
        this.history.length = index + 1 //删除 index+1 后面的所有元素
      } else if (refresh) {
          // 刷新，不做其他操作
        this.historyFlag = 'refresh'
      } else {
        // 前进，添加一条历史纪录
        this.historyFlag = 'forward'
        var item = {
          key: currentHash.query.key,
          hash: currentHash.path,
          query: currentHash.query
        }
        this.history.push(item)
      }
      // 如果不需要页面缓存功能，每次都是刷新操作
      if (!this.stackPages) {
        this.historyFlag = 'forward'
      }
    window.sessionStorage[nameStr] = JSON.stringify(this.history)
  },
}
```
::: warning 提示
  此处只是部分路由的实现，[完整的看](https://github.com/biaochenxuying/route)
:::

### 路由存储思路
```ts
// 基于数组实现的顺序栈
class ArrayStack {
  constructor(n) {
    this.items = [];  // 数组
    this.count = 0;   // 栈中元素个数
    this.n = n;       // 栈的大小
  }
  // 入栈操作
  push(item) {
    // 数组空间不够了，直接返回 false，入栈失败。
    if (this.count === this.n) return false;
    // 将 item 放到下标为 count 的位置，并且 count 加一
    this.items[this.count] = item;
    ++this.count;
    return true;
  }
  // 出栈操作
  pop() {
    // 栈为空，则直接返回 null
    if (this.count == 0) return null;
    // 返回下标为 count-1 的数组元素，并且栈中元素个数 count 减一
    let tmp = items[this.count-1];
    --this.count;
    return tmp;
  }
}
```

### Vue路由实现原理
  [详见Vue2篇](../../../框架相关/Vue/Vue2/Vue路由/前端路由.md)
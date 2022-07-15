[[toc]]
## 闭包

### 总结
 * 需求：我们现在需要写一个 foo 函数，这个函数返回首次调用时的 Date 对象，注意是首次。
 * 目的就是考察，变量存储问题；
    1. 全局变量存储
    2. 闭包存储
    3. 函数属性存储
    4. 重写函数，也是闭包的一种吧

### 代码
```ts
// 解决一：普通方法
  var t;
  function foo() {
      if (t) return t;
      t = new Date()
      return t;
  }
```
::: warning 缺点
问题有两个，一是污染了全局变量，二是每次调用 foo 的时候都需要进行一次判断。
:::


```ts
// 解决二：闭包
// 我们很容易想到用闭包避免污染全局变量。

  var foo = (function() {
      var t;
      return function() {
          if (t) return t;
          t = new Date();
          return t;
      }
  })();
```
::: warning 缺点
然而还是没有解决调用时都必须进行一次判断的问题。
:::


```ts
// 解决三：函数对象
// 函数也是一种对象，利用这个特性，我们也可以解决这个问题。
  function foo() {
      if (foo.t) return foo.t;
      foo.t = new Date();
      return foo.t;
  }
```
::: warning 缺点
依旧没有解决调用时都必须进行一次判断的问题。
:::


```ts
// 解决四：惰性函数
  var foo = function() {
    var t = new Date();
    foo = function() {
        return t;
    };
    return foo();
  };

```
::: warning 完美
不错，惰性函数就是解决每次都要进行判断的这个问题，解决原理很简单，重写函数。
:::


### 更多应用
```ts{3,14,28}
// DOM 事件添加中，为了兼容现代浏览器和 IE 浏览器，我们需要对浏览器环境进行一次判断：

// 简化写法：
function addEvent (type, el, fn) {
    if (window.addEventListener) {
        el.addEventListener(type, fn, false);
    }
    else if(window.attachEvent){
        el.attachEvent('on' + type, fn);
    }
}
// 问题在于我们每当使用一次 addEvent 时都会进行一次判断。

// 惰性函数：
function addEvent (type, el, fn) {
    if (window.addEventListener) {
        addEvent = function (type, el, fn) {
            el.addEventListener(type, fn, false);
        }
    }
    else if(window.attachEvent){
        addEvent = function (type, el, fn) {
            el.attachEvent('on' + type, fn);
        }
    }
}

// 闭包写法：
var addEvent = (function(){
    if (window.addEventListener) {
        return function (type, el, fn) {
            el.addEventListener(type, fn, false);
        }
    }
    else if(window.attachEvent){
        return function (type, el, fn) {
            el.attachEvent('on' + type, fn);
        }
    }
})();
// 当我们每次都需要进行条件判断，其实只需要判断一次，接下来的使用方式都不会发生改变的时候，想想是否可以考虑使用惰性函数。
```
### 总结：
 *  防抖debounce：立即执行或时间到期执行，中途打断重新计时
 *  节流throttle：立即执行或时间到期执行，中途打断不重新计时，到期执行
 *  图片懒加载imgLazyLoad：dataset存储真是资源路径，防抖滚动，当图片进入视图区域内开始替换src为真实资源加载图片，全部加载完删除滚动监听事件
 *  字符串模板渲染render：正则匹配特殊字符串，replace替换，递归调用函数直到所有替换完成

<CodeGroup>
  <CodeGroupItem title="获取url参数" active>

  ```ts
    // URLSearchParams 方法：
      function getUrlParams() {
        // 创建一个URLSearchParams实例
        const urlSearchParams = new URLSearchParams(window.location.search);
        // 把键值对列表转换为一个对象
        const params = Object.fromEntries(urlSearchParams.entries());
        return params
      }

    // split 方法：
      function getParams(url) {
        const res = {}
        if (url.includes('?')) {
          const str = url.split('?')[1]
          const arr = str.split('&')
          arr.forEach(item => {
            const key = item.split('=')[0]
            const val = item.split('=')[1]
            res[key] = decodeURIComponent(val) // 解码
          })
        }
        return res
      }
      // 测试
      const user = getParams('http://www.baidu.com?user=%E9%98%BF%E9%A3%9E&age=16')
      console.log(user) // { user: '阿飞', age: '16' }
  ```
  </CodeGroupItem>
  <CodeGroupItem title="防抖">

  ```ts
    /**
    * 触发高频事件 N 秒后只会执行一次，如果 N 秒内事件再次触发，则会重新计时。
    * 简单版：函数内部支持使用 this 和 event 对象；
    * 最终版：还支持以下功能： 支持立即执行；函数可能有返回值；支持取消功能；
    */
    // 只执行最后一次
    function debounce(func,wait,immediate) {
      var timeout,result;
      var _debounce = function() {
        var context = this;
        var args = arguments
        if (timeout) clearTimeout(timeout)
        if (immediate) {
          var callNow = !timeout
          timeout = setTimeout(function() {
            timeout = null
          },wait)
          if (callNow) result = func.apply(context,args)
        } else {
          timeout = setTimeout(function(params) {
            result = func.apply(context,args)
          },wait)
        }
        return result
      }
      _debounce.cancel = function() { //支持取消功能；
        clearTimeout(timeout)
        timeout = null
      }
      return _debounce
    }
      // // 使用：
      //   var setUseAction = debounce(getUserAction, 10000, true);
      //   // 使用防抖
      //   node.onmousemove = setUseAction
      //   // 取消防抖
      //   setUseAction.cancel()
  ```
  </CodeGroupItem>
  <CodeGroupItem title="节流">

  ```ts
  /**
   * 立即执行一次，然后一段时间内执行一次
   * 简单版：使用时间戳来实现，立即执行一次，然后每 N 秒执行一次。
   * 最终版：支持取消节流；另外通过传入第三个参数，
   *    leading：false 表示禁用第一次执行
   *    trailing: false 表示禁用最后一次执行
   *    默认都是 true。
   *    注意设置的时候不能同时将 leading 或 trailing 设置为 false。
   * 
   * 总结： 通过剩余时间来判断是否立即执行，在剩余时间范围内，设置剩余时间倒计时，到期执行，否则立即执行
   * */ 
  function throttle(func,wait,options) {
    var timeout,result,args,context;
    var previous = 0;
    if(!options) options = {} //默认 trailing leading 都不为false
    var later = function() {
      previous = options.leading === false ? 0 : new Date().getTime()
      timeout = null
      result = func.apply(context,args)
      if(!timeout) context = args = null
    }
    function _throttled() {
      var now = new Date().getTime()
      if (!previous && options.leading === false) previous = now // 如果是第一次，且不允许触发第一次，则将上一次时间设置为当前时间，当做事第二次来处理，remaining === wait
      var remaining = wait - (now - previous) //获取剩余时间
      context = this
      args = arguments
      if (remaining <= 0 || remaining > wait ) { // 不在剩余时间范围内，可能情况是 超出了剩余范围时间 或 修改了系统时间
        if (timeout) {
          clearTimeout(timeout)
          timeout = null
        }
        previous = now
        result = func.apply(context,args)
        if(!timeout) context = args = null
      } else if(!timeout && options.trailing !== false){ // 如果是在剩余时间范围内再次触发 且允许最后触发一次
        timeout = setTimeout(later,remaining)
      }
    }
    _throttled.cancel = function() {
      clearTimeout(timeout)
      timeout = null 
      previous = 0
    }
    return _throttled
  }

  // 操作                描述                                                            场景
  // 防抖             频繁去触发一个事件，但是只触发最后一次。以最后一次为准         1、电脑息屏时间，每动一次电脑又重新计算时间2、input框变化频繁触发事件可加防抖3、频繁点击按钮提交表单可加防抖
  // 节流              频繁去触发一个事件，但是只能每隔一段时间触发一次             1、滚动频繁请求列表可加节流2、游戏里长按鼠标，但是动作都是每隔一段时间做一次
  ```

  </CodeGroupItem>
  <CodeGroupItem title="图片懒加载">

  ```ts
    /**
    * 与普通的图片懒加载不同，如下这个多做了 2 个精心处理：
    *    图片全部加载完成后移除事件监听；
    *    加载完的图片，从 imgList 移除；
    */
    let imgList = [...document.querySelectorAll('img')]
    let length = imgList.length
    const imgLazyLoad = (function () {
      let count = 0
      return function() {
        let deleteIndexList = []
        imgList.forEach((img,index)=>{
          let = rect = img.getBoundingClientRect()
          if (rect.top < window.innerHeight) {
            img.src = img.dataset.src
            deleteIndexList.push(index)
            count++
            if (count === length) {
              document.removeEventListener('scroll',debounce(imgLazyLoad,2000))
            }
          }
        })
        imgList = imgList.filter((img,index) => !deleteIndexList.includes(index))
      }
    })()
    document.addEventListener('scroll',debounce(imgLazyLoad,2000))
  ```
  </CodeGroupItem>
  <CodeGroupItem title="字符串模板渲染">

  ```ts
  /**
  * reg.test匹配上替换，递归正则匹配
  */
  function render(template,data) {
    const reg = /\{\{(\w+)\}\}/; // 模板字符串正则
    if (reg.test(template)) { 
      // console.log(reg.exec(template));
      const name = reg.exec(template)[1] // 匹配到属性名称
      template = template.replace(reg,data[name]) //替换
      return render(template,data)
    }
    return template
  }
      // let template = '我是{{name}}，年龄{{age}}，性别{{sex}}';
      // let person = {
      //     name: '布兰',
      //     age: 12
      // }
      // render(template, person); // 我是布兰，年龄12，性别undefined
  ```
  </CodeGroupItem>
</CodeGroup>
### 理解函数组合（compose）及中间件实现
  <!-- 参考文章：https://juejin.cn/post/7037085842883641381 -->
  #### 总结
  将一组函数封装成一个函数，按顺序执行，前一个函数的结果为后一个函数的参数；最大作用是函数流程化管理

  ::: tip 简介
  将简单的函数组合成可以完成复杂任务的函数的过程,即函数流程化处理
  :::

  1. 实现：
      * 一个函数可接受两个函数类型的参数，返回一个函数，可传入一个参数
      * 执行返回的函数，可先执行第二个参数，将其结果当成第一个函数的参数传入第一个参数,最后将结果返回

  2. 简版：参数固定
  ```ts
  function compose(f,g){
    return function(x){
      return f(g(x))
    }
  }
  ```

  3. 复杂版：参数不固定，顺序可调
  ```ts
  // 实现管道
  const pipe = (...fns) => (value) => fns.reduce((acc, fn) => fn(acc), value)
  // reduceRight实现
  const compose = (...fns) => (value) => fns.reduceRight((acc, fn) => fn(acc), value)
  ```

  4. 实际应用：
  
  lodash.js
  ```ts
    flow
    flowRight
      function flowRight(...funcs) {
        return flow(...funcs.reverse());
      }
      // flow.js
      function flow(...funcs) {
        const length = funcs.length
        let index = length
        while (index--) {
          if (typeof funcs[index] !== 'function') {
            throw new TypeError('Expected a function')
          }
        }
        return function(...args) {
          let index = 0
          let result = length ? funcs[index].apply(this, args) : args[0]
          while (++index < length) {
            result = funcs[index].call(this, result)
          }
          return result
        }
      }
  ```

  underscore.js
  ```ts
    function compose(){
      var args = arguments;
      var start = args.length - 1;
      return function(){
        var i = start;
        var result = args[i].apply(this,arguments);
        while(i--) result = args[i].call(this,result);
        return result;
      }  
    }
    ```




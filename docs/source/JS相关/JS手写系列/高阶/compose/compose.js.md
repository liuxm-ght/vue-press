```ts
/**
 * 总结
 * compose:组合函数
 *    作用是函数按顺序执行，前一个函数结果为后一个函数的参数
 *    实现是
 *        1. 最简单是数组的reduce实现
 *        2. while循环执行
 */


//简版：参数固定
  function compose(f,g){
    return function(x){
      return g(f(x))
    }
  }

// 复杂版：参数不固定，顺序可调
  // 实现管道
  const pipe = (...fns) => (value) => fns.reduce((acc, fn) => fn(acc), value)
  // reduceRight实现
  const compose = (...fns) => (value) => fns.reduceRight((acc, fn) => fn(acc), value)

//其他库的实现
  // lodash.js
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
  // underscore.js
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



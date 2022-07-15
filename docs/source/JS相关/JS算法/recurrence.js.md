```ts
// 参考文章：https://juejin.cn/post/6844903656865677326#heading-26
/* 
  递归
    递归，其实就是自己调用自己。
    很多时候我们自己觉得麻烦或者感觉 "想象不过来"，主要是自己和自己较真，因为交给递归，它自己会帮你完成需要做的。
    递归步骤：

    寻找出口，递归一定有一个出口，锁定出口，保证不会死循环
    递归条件，符合递归条件，自己调用自己。

    斐波那契数列，每个语言讲递归都会从这个开始，但是既然搞前端，就搞点不一样的吧，从对象的深度克隆(deep clone)说起
*/

/* 
  Deep Clone ：实现对一个对象(object)的深度克隆
*/
  function deepClone(origin,target) {
    var target = target || {}
    for (const key in origin) {
      if (Object.hasOwnProperty.call(origin, key)) {
        if (Array.isArray(origin[key])) {
          target[key] = []
          deepClone(origin[key],target[key])
        } else if(typeof origin[key] === 'object' && origin[key] != null) {
          target[key] = {}
          deepClone(origin[key],target[key])
        } else {
          target[key] = origin[key]
        }
      }
    }
    return target
  }
  var obj1 = {
    'a':1,
    'b':[1,2,2],
    'c':{
      'e':1,
      'f':[1,2,2],
    }
  }
  console.log( deepClone(obj1));

  /* 
    Q1：Array数组的flat方法实现(2018网易雷火&伏羲前端秋招笔试)
  */
    Array.prototype.flat1 = function() {
      var arr = []
      this.forEach(item => {
        if(Array.isArray(item)){
          arr = arr.concat(item.flat1())
        }else{
          arr.push(item)
        }
      });
      return arr
    }

    /* 
      1.toString方法，连接数组并返回一个字符串 '2,2,3,2,3,4'
      2.split方法分割字符串，变成数组['2','2','3','2','3','4']
      3.map方法，将string映射成为number类型2,2,3,2,3,4
    */
    Array.prototype.flat2 = function() {
      return this.toString().split(',').map(item => +item)
    }
    var arr2 = [1,[2,3,[4,5,[6,7]]]]
    console.log(arr2.flat1()); 
    console.log(arr2.flat2()); 
  
  /* 
    Q2 实现简易版的co，自动执行generator
    先复习下 es6的 interator generator
  */


  /* 
    Q3. 爬楼梯问题
      有一楼梯共M级，刚开始时你在第一级，若每次只能跨上一级或二级，要走上第M级，共有多少种走法？
        分析： 这个问题要倒过来看，要到达n级楼梯，只有两种方式，从（n-1）级 或 （n-2）级到达的。所以可以用递推的思想去想这题，假设有一个数组s[n], 那么s[1] = 1（由于一开始就在第一级，只有一种方法）， s[2] = 1（只能从s[1]上去 没有其他方法）。
        那么就可以推出s[3] ~ s[n]了。
        下面继续模拟一下， s[3] = s[1] + s[2]， 因为只能从第一级跨两步， 或者第二级跨一步。
        嗯嗯，没错呢，其实就是斐波纳契数列没跑了

      n级的楼梯，只能从 n-1 跨一步 或 n-2 跨两步
      所以 s[n] = s[n-1] + sn[n-2] 种
  */
    function cStairs(n) {
      if(n === 1 || n === 2){
        return 1 
      }else{
        return cStairs(n - 1) + cStairs(n - 2)
      }
    }
    console.log(cStairs(9));

```


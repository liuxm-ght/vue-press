```ts
/**
 * 总结：
 * curry：函数科利化、即颗粒化
 *    将一个函数的参数，拆分为按多次函数调用来完成
 *    实现是返回一个递归函数，执行这个函数比对拼接后的参数长度是否等于原函数的参数长度，是执行原函数，否执行递归函数
*/

// 好处
// 1、参数复用
// 2、延迟执行 bind

// 基础版
function curry(fn,len = fn.length) { 
  return _curry.call(this,fn,len)
} 
function _curry(fn,len,...args) { //中转函数
  return function(...params) {
    let _args = [...args,...params]
    if (_args.length >= len) {
      return fn.apply(this,_args)
    } else {
      return _curry.call(this,fn,len,..._args)
    }
  }
}
let _fn = curry(function(a,b,c,d,e){ //知道被颗粒化的函数的参数长度
  console.log(a,b,c,d,e)
});
_fn(1,2,3,4,5);     // print: 1,2,3,4,5
_fn(1)(2)(3,4,5);   // print: 1,2,3,4,5
_fn(1,2)(3,4)(5);   // print: 1,2,3,4,5
_fn(1)(2)(3)(4)(5); // print: 1,2,3,4,5


// 升级版
/**
     * @param  fn           待柯里化的函数
     * @param  length       需要的参数个数，默认为函数的形参个数
     * @param  holder       占位符，默认当前柯里化函数
     * @return {Function}   柯里化后的函数
     */
function curry_up(fn,length = fn.length,holder = curry){
  return _curry_up.call(this,fn,length,holder,[],[])
}
/**
* 中转函数
* @param fn            柯里化的原函数
* @param length        原函数需要的参数个数
* @param holder        接收的占位符
* @param args          已接收的参数列表
* @param holders       已接收的占位符位置列表
* @return {Function}   继续柯里化的函数 或 最终结果
*/
function _curry_up(fn,length,holder,args,holders){
  return function(..._args){
      //将参数复制一份，避免多次操作同一函数导致参数混乱
      let params = args.slice();
      //将占位符位置列表复制一份，新增加的占位符增加至此
      let _holders = holders.slice();
      //循环入参，追加参数 或 替换占位符
      _args.forEach((arg,i)=>{
          //真实参数 之前存在占位符 将占位符替换为真实参数
          if (arg !== holder && holders.length) {
              let index = holders.shift();
              _holders.splice(_holders.indexOf(index),1);
              params[index] = arg;
          }
          //真实参数 之前不存在占位符 将参数追加到参数列表中
          else if(arg !== holder && !holders.length){
              params.push(arg);
          }
          //传入的是占位符,之前不存在占位符 记录占位符的位置
          else if(arg === holder && !holders.length){
              params.push(arg);
              _holders.push(params.length - 1);
          }
          //传入的是占位符,之前存在占位符 删除原占位符位置
          else if(arg === holder && holders.length){
              holders.shift();
          }
      });
      // params 中前 length 条记录中不包含占位符，执行函数
      if(params.length >= length && params.slice(0,length).every(i=>i!==holder)){
          return fn.apply(this,params);
      }else{
          return _curry_up.call(this,fn,length,holder,params,_holders)
      }
    }
  }
  let fn = function(a, b, c, d, e) {
    console.log([a, b, c, d, e]);
  }

  let _ = {}; // 定义占位符
  let _fn_up = curry_up(fn,5,_);  // 将函数柯里化，指定所需的参数个数，指定所需的占位符

  _fn_up(1, 2, 3, 4, 5);                 // print: 1,2,3,4,5
  _fn_up(_, 2, 3, 4, 5)(1);              // print: 1,2,3,4,5
  _fn_up(1, _, 3, 4, 5)(2);              // print: 1,2,3,4,5
  _fn_up(1, _, 3)(_, 4,_)(2)(5);         // print: 1,2,3,4,5
  _fn_up(1, _, _, 4)(_, 3)(2)(5);        // print: 1,2,3,4,5
  _fn_up(_, 2)(_, _, 4)(1)(3)(5);        // print: 1,2,3,4,5

  // 说明：
  //   eg: _fn(_, 2)(_, _, 4)(1)(3)(5);  
  //   执行顺序是_fn(_, 2) ,参数结果是params:[{},2];
  //   继续(_, _, 4),第一个_代替之前的parmas里的第一个占位符,参数结果是params:[{},2],第二个_加入到params尾部去,
  //   参数结果是params:[{},2,{}],第三个4是直接加入params:[{},2,{},4]
  //   继续(1),替换params:[{},2,{},4]里的第一个参数，结果是params:[1,2,{},4]
  //   继续(3),替换params:[1,2,{},4]里的第三个参数，结果是params:[1,2,3,4]
  //   最后是直接加入5，结果是params:[1,2,3,4,5]


```
import{_ as n,o as r,c as e,e as a}from"./app.6cfd3ac5.js";const l={},t=a(`<h4 id="\u67EF\u91CC\u5316-curry" tabindex="-1"><a class="header-anchor" href="#\u67EF\u91CC\u5316-curry" aria-hidden="true">#</a> \u67EF\u91CC\u5316\uFF08curry\uFF09</h4><ol><li><p>\u7B80\u4ECB curry \u7684\u6982\u5FF5\u5F88\u7B80\u5355\uFF1A\u53EA\u4F20\u9012\u7ED9\u51FD\u6570\u4E00\u90E8\u5206\u53C2\u6570\u6765\u8C03\u7528\u5B83\uFF0C\u8BA9\u5B83\u8FD4\u56DE\u4E00\u4E2A\u51FD\u6570\u53BB\u5904\u7406\u5269\u4E0B\u7684\u53C2\u6570\u3002</p></li><li><p>\u6570\u5B66\u4E2D\u7684\u6982\u5FF5 \u5728\u6570\u5B66\u548C\u8BA1\u7B97\u673A\u79D1\u5B66\u4E2D\uFF0C\u67EF\u91CC\u5316\u662F\u4E00\u79CD\u5C06\u4F7F\u7528\u591A\u4E2A\u53C2\u6570\u7684\u4E00\u4E2A\u51FD\u6570\u8F6C\u6362\u6210\u4E00\u7CFB\u5217\u4F7F\u7528\u4E00\u4E2A\u53C2\u6570\u7684\u51FD\u6570\u7684\u6280\u672F\u3002</p></li><li><p>\u7A0B\u5E8F\u4E2D\u7684\u6982\u5FF5 Javascript\u5B9E\u9645\u5E94\u7528\u4E2D\u7684\u67EF\u91CC\u5316\u51FD\u6570\uFF0C\u53EF\u4EE5\u4F20\u9012\u4E00\u4E2A\u6216\u591A\u4E2A\u53C2\u6570\u3002 \u5BF9\u4E8E\u5DF2\u7ECF\u67EF\u91CC\u5316\u540E\u7684 _fn \u51FD\u6570\u6765\u8BF4\uFF0C\u5F53\u63A5\u6536\u7684\u53C2\u6570\u6570\u91CF\u4E0E\u539F\u51FD\u6570\u7684\u5F62\u53C2\u6570\u91CF\u76F8\u540C\u65F6\uFF0C\u6267\u884C\u539F\u51FD\u6570\uFF1B \u5F53\u63A5\u6536\u7684\u53C2\u6570\u6570\u91CF\u5C0F\u4E8E\u539F\u51FD\u6570\u7684\u5F62\u53C2\u6570\u91CF\u65F6\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u51FD\u6570\u7528\u4E8E\u63A5\u6536\u5269\u4F59\u7684\u53C2\u6570\uFF0C\u76F4\u81F3\u63A5\u6536\u7684\u53C2\u6570\u6570\u91CF\u4E0E\u5F62\u53C2\u6570\u91CF\u4E00\u81F4\uFF0C\u6267\u884C\u539F\u51FD\u6570\u3002</p></li><li><p>\u5B9E\u73B0<br> \u90A3\u4E48\u6211\u4EEC\u5982\u4F55\u53BB\u786E\u5B9A\u4F55\u65F6\u8FBE\u5230\u8DB3\u591F\u7684\u53C2\u6570\u5462\uFF1F \u4E24\u79CD\u601D\u8DEF\uFF1A 1. \u901A\u8FC7\u51FD\u6570\u7684 length \u5C5E\u6027\uFF0C\u83B7\u53D6\u51FD\u6570\u7684\u5F62\u53C2\u4E2A\u6570\uFF0C\u5F62\u53C2\u7684\u4E2A\u6570\u5C31\u662F\u6240\u9700\u7684\u53C2\u6570\u4E2A\u6570 2. \u5728\u8C03\u7528\u67EF\u91CC\u5316\u5DE5\u5177\u51FD\u6570\u65F6\uFF0C\u624B\u52A8\u6307\u5B9A\u6240\u9700\u7684\u53C2\u6570\u4E2A\u6570 function curry(fn,len = fn.length) { return _curry.call(this,fn,len) } function _curry(fn,len,...args) { //\u4E2D\u8F6C\u51FD\u6570 return function(...params) { let _args = [...args,...params] if (_args.length &gt;= len) { return fn.apply(this,_args) } else { return _curry.call(this,fn,len,..._args) } } } let _fn = curry(function(a,b,c,d,e){ console.log(a,b,c,d,e) }); _fn(1,2,3,4,5); // print: 1,2,3,4,5 _fn(1)(2)(3,4,5); // print: 1,2,3,4,5 _fn(1,2)(3,4)(5); // print: 1,2,3,4,5 _fn(1)(2)(3)(4)(5); // print: 1,2,3,4,5</p></li><li><p>\u5360\u4F4D\u6269\u5C55 /**</p><ul><li>@param fn \u5F85\u67EF\u91CC\u5316\u7684\u51FD\u6570</li><li>@param length \u9700\u8981\u7684\u53C2\u6570\u4E2A\u6570\uFF0C\u9ED8\u8BA4\u4E3A\u51FD\u6570\u7684\u5F62\u53C2\u4E2A\u6570</li><li>@param holder \u5360\u4F4D\u7B26\uFF0C\u9ED8\u8BA4\u5F53\u524D\u67EF\u91CC\u5316\u51FD\u6570</li><li>@return {Function} \u67EF\u91CC\u5316\u540E\u7684\u51FD\u6570 <em>/ function curry(fn,length = fn.length,holder = curry){ return _curry.call(this,fn,length,holder,[],[]) } /</em>*</li></ul></li></ol><pre><code>* \u4E2D\u8F6C\u51FD\u6570
* @param fn            \u67EF\u91CC\u5316\u7684\u539F\u51FD\u6570
* @param length        \u539F\u51FD\u6570\u9700\u8981\u7684\u53C2\u6570\u4E2A\u6570
* @param holder        \u63A5\u6536\u7684\u5360\u4F4D\u7B26
* @param args          \u5DF2\u63A5\u6536\u7684\u53C2\u6570\u5217\u8868
* @param holders       \u5DF2\u63A5\u6536\u7684\u5360\u4F4D\u7B26\u4F4D\u7F6E\u5217\u8868
* @return {Function}   \u7EE7\u7EED\u67EF\u91CC\u5316\u7684\u51FD\u6570 \u6216 \u6700\u7EC8\u7ED3\u679C
*/
function _curry(fn,length,holder,args,holders){
  return function(..._args){
      //\u5C06\u53C2\u6570\u590D\u5236\u4E00\u4EFD\uFF0C\u907F\u514D\u591A\u6B21\u64CD\u4F5C\u540C\u4E00\u51FD\u6570\u5BFC\u81F4\u53C2\u6570\u6DF7\u4E71
      let params = args.slice();
      //\u5C06\u5360\u4F4D\u7B26\u4F4D\u7F6E\u5217\u8868\u590D\u5236\u4E00\u4EFD\uFF0C\u65B0\u589E\u52A0\u7684\u5360\u4F4D\u7B26\u589E\u52A0\u81F3\u6B64
      let _holders = holders.slice();
      //\u5FAA\u73AF\u5165\u53C2\uFF0C\u8FFD\u52A0\u53C2\u6570 \u6216 \u66FF\u6362\u5360\u4F4D\u7B26
      _args.forEach((arg,i)=&gt;{
          //\u771F\u5B9E\u53C2\u6570 \u4E4B\u524D\u5B58\u5728\u5360\u4F4D\u7B26 \u5C06\u5360\u4F4D\u7B26\u66FF\u6362\u4E3A\u771F\u5B9E\u53C2\u6570
          if (arg !== holder &amp;&amp; holders.length) {
              let index = holders.shift();
              _holders.splice(_holders.indexOf(index),1);
              params[index] = arg;
          }
          //\u771F\u5B9E\u53C2\u6570 \u4E4B\u524D\u4E0D\u5B58\u5728\u5360\u4F4D\u7B26 \u5C06\u53C2\u6570\u8FFD\u52A0\u5230\u53C2\u6570\u5217\u8868\u4E2D
          else if(arg !== holder &amp;&amp; !holders.length){
              params.push(arg);
          }
          //\u4F20\u5165\u7684\u662F\u5360\u4F4D\u7B26,\u4E4B\u524D\u4E0D\u5B58\u5728\u5360\u4F4D\u7B26 \u8BB0\u5F55\u5360\u4F4D\u7B26\u7684\u4F4D\u7F6E
          else if(arg === holder &amp;&amp; !holders.length){
              params.push(arg);
              _holders.push(params.length - 1);
          }
          //\u4F20\u5165\u7684\u662F\u5360\u4F4D\u7B26,\u4E4B\u524D\u5B58\u5728\u5360\u4F4D\u7B26 \u5220\u9664\u539F\u5360\u4F4D\u7B26\u4F4D\u7F6E
          else if(arg === holder &amp;&amp; holders.length){
              holders.shift();
          }
      });
      // params \u4E2D\u524D length \u6761\u8BB0\u5F55\u4E2D\u4E0D\u5305\u542B\u5360\u4F4D\u7B26\uFF0C\u6267\u884C\u51FD\u6570
      if(params.length &gt;= length &amp;&amp; params.slice(0,length).every(i=&gt;i!==holder)){
          return fn.apply(this,params);
      }else{
          return _curry.call(this,fn,length,holder,params,_holders)
      }
  }
}
let fn = function(a, b, c, d, e) {
  console.log([a, b, c, d, e]);
}

let _ = {}; // \u5B9A\u4E49\u5360\u4F4D\u7B26
let _fn = curry(fn,5,_);  // \u5C06\u51FD\u6570\u67EF\u91CC\u5316\uFF0C\u6307\u5B9A\u6240\u9700\u7684\u53C2\u6570\u4E2A\u6570\uFF0C\u6307\u5B9A\u6240\u9700\u7684\u5360\u4F4D\u7B26

_fn(1, 2, 3, 4, 5);                 // print: 1,2,3,4,5
_fn(_, 2, 3, 4, 5)(1);              // print: 1,2,3,4,5
_fn(1, _, 3, 4, 5)(2);              // print: 1,2,3,4,5
_fn(1, _, 3)(_, 4,_)(2)(5);         // print: 1,2,3,4,5
_fn(1, _, _, 4)(_, 3)(2)(5);        // print: 1,2,3,4,5
_fn(_, 2)(_, _, 4)(1)(3)(5);        // print: 1,2,3,4,5

\u8BF4\u660E\uFF1A
  eg: _fn(_, 2)(_, _, 4)(1)(3)(5);  
  \u6267\u884C\u987A\u5E8F\u662F_fn(_, 2) ,\u53C2\u6570\u7ED3\u679C\u662Fparams:[{},2];
  \u7EE7\u7EED(_, _, 4),\u7B2C\u4E00\u4E2A_\u4EE3\u66FF\u4E4B\u524D\u7684parmas\u91CC\u7684\u7B2C\u4E00\u4E2A\u5360\u4F4D\u7B26,\u53C2\u6570\u7ED3\u679C\u662Fparams:[{},2],\u7B2C\u4E8C\u4E2A_\u52A0\u5165\u5230params\u5C3E\u90E8\u53BB,
  \u53C2\u6570\u7ED3\u679C\u662Fparams:[{},2,{}],\u7B2C\u4E09\u4E2A4\u662F\u76F4\u63A5\u52A0\u5165params:[{},2,{},4]
  \u7EE7\u7EED(1),\u66FF\u6362params:[{},2,{},4]\u91CC\u7684\u7B2C\u4E00\u4E2A\u53C2\u6570\uFF0C\u7ED3\u679C\u662Fparams:[1,2,{},4]
  \u7EE7\u7EED(3),\u66FF\u6362params:[1,2,{},4]\u91CC\u7684\u7B2C\u4E09\u4E2A\u53C2\u6570\uFF0C\u7ED3\u679C\u662Fparams:[1,2,3,4]
  \u6700\u540E\u662F\u76F4\u63A5\u52A0\u51655\uFF0C\u7ED3\u679C\u662Fparams:[1,2,3,4,5]
</code></pre><ol start="6"><li>\u603B\u7ED3 \u51FD\u6570\u67EF\u529B\u5316\u5C31\u662F\u5904\u7406\u51FD\u6570\u5C06\u5176\u8F6C\u4E3A\u53EF\u5206\u6B21\u63A5\u53D7\u53C2\u6570\u7684\u51FD\u6570</li></ol>`,4),s=[t];function i(p,_){return r(),e("div",null,s)}var o=n(l,[["render",i],["__file","curry.html.vue"]]);export{o as default};

import{_ as n,o as s,c as a,g as e}from"./app.02f2fcbd.js";const t={},p=e(`<div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * \u603B\u7ED3\uFF1A
 *    1. \u901A\u7528\u7C7B\u578B\u5224\u65AD\uFF1A\u901A\u7528Object.prototype.toString.call(xxx).slice(8,-1)\u51C6\u786E\u83B7\u53D6\u6570\u636E\u7C7B\u578B
 *    2. typeof\u7684\u5B9E\u73B0\uFF1A\u53EA\u80FD\u5224\u65AD\u9664\u4E86null\u7684\u57FA\u7840\u7C7B\u578B\uFF0C\u5176\u4ED6\u5224\u65AD\u4E3Aobject\uFF1B\u539F\u56E0\u662Ftypeof\u4F1A\u5224\u65AD\u673A\u5668\u7801\u5B58\u50A8\u4FE1\u606F\u524D\u4E09\u4F4D\uFF0C\u4E3A000\u7684\u662F\u5BF9\u8C61\uFF0Cnull\u7684\u673A\u5668\u7801\u5B58\u50A8\u4FE1\u606F\u4E5F\u662F000\uFF0C
*/</span>




<span class="token doc-comment comment">/**
 * \u5B9E\u73B0 instanceof
 *  \u4E3B\u8981\u7528\u4E8E \u5224\u65AD\u6570\u636E\u662F\u5426\u5728\u67D0\u79CD\u7C7B\u578B\u7684\u539F\u578B\u94FE\u4E0A
 */</span> 
<span class="token keyword">function</span> <span class="token function">myInstanceof</span><span class="token punctuation">(</span>left<span class="token punctuation">,</span>right<span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token comment">// let proto = left.__proto__</span>
  <span class="token keyword">let</span> proto <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">getPrototypeOf</span><span class="token punctuation">(</span>left<span class="token punctuation">)</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>proto <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>proto <span class="token operator">===</span> right<span class="token punctuation">.</span>prototype<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// proto = proto.__proto__</span>
    proto <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">getPrototypeOf</span><span class="token punctuation">(</span>proto<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token doc-comment comment">/**
 * \u5B9E\u73B0 typeof
 *  typeof \u4E00\u822C\u88AB\u7528\u4E8E\u5224\u65AD\u4E00\u4E2A\u53D8\u91CF\u7684\u7C7B\u578B\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5229\u7528 typeof \u6765\u5224\u65ADnumber, string, object, boolean, function, undefined, symbol \u8FD9\u4E03\u79CD\u7C7B\u578B\uFF1B
 * 
 *  \u4E3B\u8981\u7528\u4E8E \u57FA\u7840\u6570\u636E\u7C7B\u578B\u7684 \u5224\u65AD
 *      \u5BF9\u4E8E \u5F15\u7528\u7C7B\u578B \u9664function, \u5176\u4ED6\u5224\u65AD\u90FD\u662Fobject \uFF0C\u540C\u65F6 null \u4E5F\u662F\u5224\u65AD\u4E3Aobject\uFF08\u8FD9\u70B9\u53EF\u4ECEMdn\u6587\u6863\u53EF\u77E5\u9053\uFF09
 * 
 *  null \u4E5F\u662F\u5224\u65AD\u4E3Aobject\uFF0C \u539F\u7406\u662F\uFF1A
 *    js\u5728\u5B58\u50A8\u53D8\u91CF\u7684\u65F6\u5019\uFF0C\u5E95\u5C42\u903B\u8F91\u662F\u5728\u53D8\u91CF\u8F6C\u4E3A\u673A\u5668\u7801\u540E\u76841-3\u4F4D\u5B58\u50A8\u76F8\u5E94\u7684\u4FE1\u606F\uFF1A
        000\uFF1A\u5BF9\u8C61
        010\uFF1A\u6D6E\u70B9\u6570
        100\uFF1A\u5B57\u7B26\u4E32
        110\uFF1A\u5E03\u5C14
        1\uFF1A\u6574\u6570
 *    \u5BF9\u4E8Enull\u7684\u5B58\u50A8\u662F\u51680\uFF0C\u6240\u4EE5\u4F1A\u88AB\u5224\u65AD\u4E3Aobject
 *    \u5BF9\u4E8Eundefined \u7684\u5B58\u50A8\u662F \u7528 \u22122^30 \u6574\u6570\u6765\u8868\u793A
*       \u53C2\u8003\u6587\u7AE0\uFF1Ahttps://juejin.cn/post/6844903613584654344
*       \u53C2\u8003\u6587\u7AE0\uFF1Ahttps://juejin.cn/post/6991653255847772167
 */</span> 

<span class="token keyword">function</span> <span class="token function">myTypeOf</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> type <span class="token operator">=</span> Object<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">var</span> map <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&#39;number&#39;</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;string&#39;</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;boolean&#39;</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;undefined&#39;</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;bigint&#39;</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;symbol&#39;</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;function&#39;</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> map<span class="token punctuation">[</span>res<span class="token punctuation">]</span> <span class="token operator">?</span> type <span class="token operator">:</span> <span class="token string">&#39;object&#39;</span>
<span class="token punctuation">}</span>


<span class="token doc-comment comment">/**
 * \u901A\u7528 \u7C7B\u578B\u5224\u65AD
 * \u53EF\u4EE5\u5224\u65AD\u6240\u6709\u7C7B\u578B
 *  Number String Boolean Null Undefined Symbol bigint
 *  Object Array Date RegExp Function 
 * */</span> 
<span class="token keyword">function</span> <span class="token function">isType</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// if (typeof obj !== &#39;object&#39;) return false</span>
  <span class="token comment">// const typeString = Object.prototype.toString.call(obj)</span>
  <span class="token comment">// let flag</span>
  <span class="token comment">// switch (type) {</span>
  <span class="token comment">//   case &#39;Array&#39;:</span>
  <span class="token comment">//     flag = typeString === &#39;[object Array]&#39; </span>
  <span class="token comment">//     break;</span>
  <span class="token comment">//   case &#39;Date&#39;:</span>
  <span class="token comment">//     flag = typeString === &#39;[object Date]&#39; </span>
  <span class="token comment">//     break;</span>
  <span class="token comment">//   case &#39;RegExp&#39;:</span>
  <span class="token comment">//     flag = typeString === &#39;[object RegExp]&#39; </span>
  <span class="token comment">//     break;</span>
  <span class="token comment">//   default:</span>
  <span class="token comment">//     flag = false</span>
  <span class="token comment">//     break;</span>
  <span class="token comment">// }</span>
  <span class="token comment">// return flag</span>
  <span class="token keyword">return</span> Object<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),o=[p];function c(i,l){return s(),a("div",null,o)}var r=n(t,[["render",c],["__file","typeOf.js.html.vue"]]);export{r as default};

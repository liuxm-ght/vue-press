import{_ as n,o as s,c as a,g as t}from"./app.85e25c47.js";const p={},o=t(`<div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
  * \u5173\u4E8Ethis
  * this\u662F\u4E00\u4E2A\u5F88\u7279\u522B\u7684\u5173\u952E\u5B57\uFF0C\u88AB\u81EA\u52A8\u5B9A\u4E49\u5728\u6240\u6709\u51FD\u6570\u7684\u4F5C\u7528\u57DF\u4E2D\u3002
  * \u5F53\u4E00\u4E2A\u51FD\u6570\u88AB\u8C03\u7528\u65F6\uFF0C\u4F1A\u521B\u5EFA\u4E00\u4E2A\u6D3B\u52A8\u8BB0\u5F55(\u6267\u884C\u4E0A\u4E0B\u6587)\u3002\u8FD9\u4E2A\u8BB0\u5F55\u4F1A\u5305\u542B\u51FD\u6570\u5728\u54EA\u91CC\u88AB\u8C03\u7528(\u8C03\u7528\u6808)\u3001\u51FD\u6570\u7684\u8C03\u7528\u65B9\u6CD5\u3001\u4F20\u5165\u7684\u53C2\u6570\u7B49\u4FE1\u606F\u3002
  * this \u5C31\u662F\u8BB0\u5F55\u7684 \u5176\u4E2D\u4E00\u4E2A\u5C5E\u6027\uFF0C\u4F1A\u5728\u51FD\u6570\u6267\u884C\u7684\u8FC7\u7A0B\u4E2D\u7528\u5230\u3002
  * 
  *     \u53C2\u8003\u6587\u7AE0\uFF1Ahttps://juejin.cn/post/7039601703447953416
  * 
  * \u666E\u901A\u51FD\u6570\u65F6\uFF0C\u8C01\u8C03\u7528\uFF0C\u6307\u5411\u8C01\uFF1B\u65E0\u8C01\u8C03\u7528\uFF0C\u6307\u5411window
  * \u7BAD\u5934\u51FD\u6570\u65F6\uFF0Cthis\u6307\u5411\u5B9A\u4E49\u65F6\u6240\u5728\u73AF\u5883\u4E0A\u4E0B\u6587
  * 
  * 
  * \u4E25\u683C\u6A21\u5F0F\u4E0B\uFF0C\u51FD\u6570\u5185\uFF0Cthis\u6307\u5411undefined
  * function foo () <span class="token punctuation">{</span>
      &quot;use strict&quot;;
      console.log(this.a);
    <span class="token punctuation">}</span>
    var a = 10;
    foo();  // TypeError: this is undefined

*/</span>

<span class="token doc-comment comment">/**
 * \u9690\u5F0F\u7ED1\u5B9A
 * \u5F53\u51FD\u6570\u5F15\u7528\u6709\u4E0A\u4E0B\u6587\u5BF9\u8C61\u65F6\uFF0C \u9690\u5F0F\u7ED1\u5B9A\u89C4\u5219\u4F1A\u628A\u51FD\u6570\u8C03\u7528\u4E2D\u7684this\u7ED1\u5B9A\u5230\u8FD9\u4E2A\u4E0A\u4E0B\u6587\u5BF9\u8C61\u3002
*/</span>
<span class="token keyword">function</span> <span class="token function">foo</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  a<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  foo<span class="token operator">:</span> foo
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
obj<span class="token punctuation">.</span><span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 100</span>


<span class="token doc-comment comment">/**
 * \u663E\u5F0F\u7ED1\u5B9A
 * \u76F8\u5BF9\u9690\u5F0F\u7ED1\u5B9A\uFF0Cthis\u503C\u5728\u8C03\u7528\u8FC7\u7A0B\u4E2D\u4F1A\u52A8\u6001\u53D8\u5316\uFF0C\u53EF\u662F\u6211\u4EEC\u5C31\u60F3\u7ED1\u5B9A\u6307\u5B9A\u7684\u5BF9\u8C61\uFF0C\u8FD9\u65F6\u5C31\u7528\u5230\u4E86\u663E\u5F0F\u7ED1\u5B9A\u3002
    \u663E\u5F0F\u7ED1\u5B9A\u4E3B\u8981\u662F\u901A\u8FC7\u6539\u53D8\u5BF9\u8C61\u7684prototype\u5173\u8054\u5BF9\u8C61\uFF0C\u53EF\u4EE5\u901A\u8FC7call()\u3001apply()\u65B9\u6CD5\u76F4\u63A5\u6307\u5B9Athis\u7684\u7ED1\u5B9A\u5BF9\u8C61
    \u4E24\u8005\u533A\u522B\uFF1A call\u63A5\u6536\u82E5\u5E72\u4E2A\u53C2\u6570\uFF0C\u800Capply\u63A5\u6536\u7684\u662F\u4E00\u4E2A\u6570\u7EC4
 * 
    bind\u786C\u7ED1\u5B9A\uFF0C\u4E0Eapply\uFF0Ccall\u533A\u522B\uFF1A
    \u4F7F\u7528.call()\u6216\u8005.apply()\u7684\u51FD\u6570\u662F\u4F1A\u76F4\u63A5\u6267\u884C\u7684
    bind()\u4F1A\u8FD4\u56DE\u4E00\u4E2A\u786C\u7F16\u7801\u7684\u65B0\u51FD\u6570\uFF0C\u4F1A\u628A\u4F60\u6307\u5B9A\u7684\u53C2\u6570\u8BBE\u7F6E\u4E3Athis\u7684\u4E0A\u4E0B\u6587\u5E76\u8C03\u7528\u539F\u59CB\u51FD\u6570\uFF0C\u9700\u8981\u624B\u52A8\u8C03\u7528\u624D\u4F1A\u6267\u884C
 */</span>
<span class="token keyword">function</span> <span class="token function">foo</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">var</span> obj1 <span class="token operator">=</span> <span class="token punctuation">{</span> a<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> foo<span class="token operator">:</span> foo <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token string">&#39;global&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> obj2 <span class="token operator">=</span> <span class="token punctuation">{</span>a<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> foo<span class="token operator">:</span> foo<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> fn <span class="token operator">=</span> obj2<span class="token punctuation">.</span>foo<span class="token punctuation">;</span>
<span class="token keyword">var</span> obj3 <span class="token operator">=</span> <span class="token punctuation">{</span>a<span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> foo<span class="token operator">:</span> foo<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>        <span class="token comment">// &#39;global&#39;</span>
<span class="token function">foo</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>obj1<span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">// this\u6307\u5411obj1\uFF0C  \u8F93\u51FA1</span>
<span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>obj2<span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">// this\u6307\u5411obj2\uFF0C  \u8F93\u51FA2</span>
<span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">// this\u6307\u5411window\uFF0C  \u8F93\u51FAglobal</span>
obj2<span class="token punctuation">.</span><span class="token function">foo</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>obj1<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// this\u6307\u5411obj1\uFF0C  \u8F93\u51FA1</span>
obj1<span class="token punctuation">.</span><span class="token function">foo</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span>obj2<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">// this\u786C\u7ED1\u5B9A\u4E3Aobj2, \u8F93\u51FA2</span>
obj1<span class="token punctuation">.</span><span class="token function">foo</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span>obj2<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>obj3<span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">// this\u786C\u7ED1\u5B9A\u4E3Aobj2, \u8F93\u51FA2</span>


<span class="token doc-comment comment">/**
 * new \u7ED1\u5B9A
 * \u4F7F\u7528new\u6765\u8C03\u7528\u51FD\u6570\uFF0C\u4F1A\u81EA\u52A8\u6267\u884C\u5982\u4E0B\u64CD\u4F5C\uFF1A
    1.\u521B\u5EFA\u4E00\u4E2A\u7A7A\u5BF9\u8C61\uFF0C\u6784\u9020\u51FD\u6570\u4E2D\u7684this\u6307\u5411\u8FD9\u4E2A\u7A7A\u5BF9\u8C61
    2.\u8FD9\u4E2A\u65B0\u5BF9\u8C61\u88AB\u6267\u884C [[Prototype]] \u8FDE\u63A5
    3.\u6267\u884C\u6784\u9020\u51FD\u6570\u65B9\u6CD5\uFF0C\u5C5E\u6027\u548C\u65B9\u6CD5\u88AB\u6DFB\u52A0\u5230this\u5F15\u7528\u7684\u5BF9\u8C61\u4E2D
    4.\u5982\u679C\u6784\u9020\u51FD\u6570\u4E2D\u6CA1\u6709\u8FD4\u56DE\u5176\u5B83\u5BF9\u8C61\uFF0C\u90A3\u4E48\u8FD4\u56DEthis\uFF0C\u5373\u521B\u5EFA\u7684\u8FD9\u4E2A\u7684\u65B0\u5BF9\u8C61\uFF0C\u5426\u5219\uFF0C\u8FD4\u56DE\u6784\u9020\u51FD\u6570\u4E2D\u8FD4\u56DE\u7684\u5BF9\u8C61\u3002
 * 
 * \u4F7F\u7528new \u6765\u8C03\u7528foo(...)\u65F6\uFF0C\u6211\u4EEC\u4F1A\u6784\u9020\u4E00\u4E2A\u65B0\u5BF9\u8C61\u5E76\u628A\u5B83\u7ED1\u5B9A\u5230foo(...)\u8C03\u7528\u4E2D\u7684this\u4E0A\u3002
*/</span>
<span class="token keyword">function</span> <span class="token function">foo</span> <span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>a <span class="token operator">=</span> a<span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">bar</span> <span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>a <span class="token operator">=</span> a<span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token string">&#39;global&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> f1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">foo</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> b1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">bar</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>f1<span class="token punctuation">.</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">// 100</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b1<span class="token punctuation">.</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">// undefined</span>


<span class="token doc-comment comment">/**
 * ES6 \u7BAD\u5934\u51FD\u6570
 * \u7BAD\u5934\u51FD\u6570\u4E0D\u4F7F\u7528this\u7684\u56DB\u79CD\u6807\u51C6\u89C4\u5219\uFF0C\u91CC\u9762\u7684this\u662F\u7531\u5916\u5C42\u4F5C\u7528\u57DF\u6765\u51B3\u5B9A\u7684
 * \uFF08 \u7BAD\u5934\u51FD\u6570\u4E2D\u6CA1\u6709 this \u7ED1\u5B9A\uFF0C\u5FC5\u987B\u901A\u8FC7\u67E5\u627E\u4F5C\u7528\u57DF\u94FE\u6765\u51B3\u5B9A\u5176\u503C\uFF0C
 *    \u5982\u679C\u7BAD\u5934\u51FD\u6570\u88AB\u975E\u7BAD\u5934\u51FD\u6570\u5305\u542B\uFF0C\u5219 this \u7ED1\u5B9A\u7684\u662F\u6700\u8FD1\u4E00\u5C42\u975E\u7BAD\u5934\u51FD\u6570\u7684 this\uFF0C
 *   \u5426\u5219\uFF0Cthis \u4E3A undefined\u3002 \uFF09\uFF0C
 * \u4E14\u6307\u5411\u51FD\u6570\u5B9A\u4E49\u65F6\u7684this\u800C\u975E\u6267\u884C\u65F6\u3002
*/</span>
<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  a<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  <span class="token function-variable function">foo1</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">foo2</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">foo3</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
obj<span class="token punctuation">.</span><span class="token function">foo1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 10</span>
obj<span class="token punctuation">.</span><span class="token function">foo2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 100 100</span>
obj<span class="token punctuation">.</span><span class="token function">foo3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 100</span>
<span class="token doc-comment comment">/**
 * \u7BAD\u5934\u51FD\u6570\u5728\u4F7F\u7528\u65F6\uFF0C\u9700\u8981\u6CE8\u610F\u4EE5\u4E0B\u51E0\u70B9:
  1.\u51FD\u6570\u4F53\u5185\u7684this\u5BF9\u8C61\uFF0C\u7EE7\u627F\u7684\u662F\u5916\u5C42\u4EE3\u7801\u5757\u7684this\u3002\u7BAD\u5934\u51FD\u6570\u5728\u521B\u5EFA\u6267\u884C\u4E0A\u4E0B\u6587\u7684\u65F6\u5019\u6CA1\u6709\u521B\u5EFAthis\uFF0Cthis\u7684\u67E5\u8BE2\u65F6\u6267\u884C\u4E0A\u4E0B\u6587\u6808\u5F80\u4E0A\u67E5\u7684\u3002
  2.\u4E0D\u53EF\u4EE5\u5F53\u4F5C\u6784\u9020\u51FD\u6570\uFF0C\u4E5F\u5C31\u662F\u8BF4\uFF0C\u4E0D\u53EF\u4EE5\u4F7F\u7528new\u547D\u4EE4\uFF0C\u5426\u5219\u4F1A\u629B\u51FA\u4E00\u4E2A\u9519\u8BEF\u3002
  3.\u4E0D\u53EF\u4EE5\u4F7F\u7528arguments\u5BF9\u8C61\uFF0C\u8BE5\u5BF9\u8C61\u5728\u51FD\u6570\u4F53\u5185\u4E0D\u5B58\u5728\u3002\u5982\u679C\u8981\u7528\uFF0C\u53EF\u4EE5\u7528 rest \u53C2\u6570\u4EE3\u66FF\u3002
  4.\u4E0D\u53EF\u4EE5\u4F7F\u7528yield\u547D\u4EE4\uFF0C\u56E0\u6B64\u7BAD\u5934\u51FD\u6570\u4E0D\u80FD\u7528\u4F5C Generator \u51FD\u6570\u3002
  5.\u7BAD\u5934\u51FD\u6570\u6CA1\u6709\u81EA\u5DF1\u7684this\uFF0C\u6240\u4EE5\u4E0D\u80FD\u7528call()\u3001apply()\u3001bind()\u8FD9\u4E9B\u65B9\u6CD5\u53BB\u6539\u53D8this\u7684\u6307\u5411.
*/</span>



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),e=[o];function c(i,l){return s(),a("div",null,e)}var k=n(p,[["render",c],["__file","this.js.html.vue"]]);export{k as default};

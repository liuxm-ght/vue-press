import{_ as n,o as s,c as a,g as p}from"./app.85e25c47.js";const t={},o=p(`<div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>
<span class="token doc-comment comment">/**
 * \u603B\u7ED3\uFF1A
 *    1. let\u5C31\u662F\u4EA7\u751F\u4E86\u5757\u7EA7\u4F5C\u7528\u57DF
 *    2. \u5B9E\u9645\u4E0A\u5C31\u662F\u66FF\u4EE3\u4E86IIFE\u7684\u5199\u6CD5
 *    3. \u5757\u7EA7\u4F5C\u7528\u57DF\u53D8\u91CF\u67E5\u8BE2\u65B9\u6CD5\u662F\uFF0C\u5148\u67E5\u627E\u5185\u90E8\u7684\u53D8\u91CF\u518D\u5F80\u5916\u67E5\u627E\uFF0C\u4E0D\u80FD\u4ECE\u5916\u90E8\u67E5\u8BE2\u5185\u90E8\u7684\u53D8\u91CF
*/</span>


<span class="token comment">//var</span>
<span class="token keyword">var</span> funcs <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  funcs<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
funcs<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 10</span>

<span class="token comment">// Es6 \u7684 let \u5B9E\u73B0\u539F\u7406</span>
<span class="token comment">// \u539F\u59CB es6 \u4EE3\u7801</span>
<span class="token keyword">var</span> funcs <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  funcs<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
funcs<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 0</span>

<span class="token comment">// babel \u7F16\u8BD1\u4E4B\u540E\u7684 es5 \u4EE3\u7801\uFF08polyfill\uFF09</span>
<span class="token keyword">var</span> funcs <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> <span class="token function-variable function">_loop</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">_loop</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  funcs<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">_loop</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
funcs<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 0</span>
<span class="token comment">//\u6216</span>
<span class="token keyword">var</span> funcs <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    funcs<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
funcs<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 0</span>




<span class="token comment">// ES6 \u7684\u5757\u7EA7\u4F5C\u7528\u57DF</span>

<span class="token comment">// let\u5B9E\u9645\u4E0A\u4E3A JavaScript \u65B0\u589E\u4E86\u5757\u7EA7\u4F5C\u7528\u57DF\u3002</span>

<span class="token keyword">function</span> <span class="token function">f1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> n <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> n <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 5</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u4E0A\u9762\u7684\u51FD\u6570\u6709\u4E24\u4E2A\u4EE3\u7801\u5757\uFF0C\u90FD\u58F0\u660E\u4E86\u53D8\u91CFn\uFF0C\u8FD0\u884C\u540E\u8F93\u51FA 5\u3002\u8FD9\u8868\u793A\u5916\u5C42\u4EE3\u7801\u5757\u4E0D\u53D7\u5185\u5C42\u4EE3\u7801\u5757\u7684\u5F71\u54CD\u3002\u5982\u679C\u4E24\u6B21\u90FD\u4F7F\u7528var\u5B9A\u4E49\u53D8\u91CFn\uFF0C\u6700\u540E\u8F93\u51FA\u7684\u503C\u624D\u662F 10\u3002</span>

<span class="token comment">// ES6 \u5141\u8BB8\u5757\u7EA7\u4F5C\u7528\u57DF\u7684\u4EFB\u610F\u5D4C\u5957\u3002</span>

<span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
  <span class="token punctuation">{</span><span class="token keyword">let</span> insane <span class="token operator">=</span> <span class="token string">&#39;Hello World&#39;</span><span class="token punctuation">}</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>insane<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u62A5\u9519</span>
<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// \u4E0A\u9762\u4EE3\u7801\u4F7F\u7528\u4E86\u4E00\u4E2A\u4E94\u5C42\u7684\u5757\u7EA7\u4F5C\u7528\u57DF\uFF0C\u6BCF\u4E00\u5C42\u90FD\u662F\u4E00\u4E2A\u5355\u72EC\u7684\u4F5C\u7528\u57DF\u3002\u7B2C\u56DB\u5C42\u4F5C\u7528\u57DF\u65E0\u6CD5\u8BFB\u53D6\u7B2C\u4E94\u5C42\u4F5C\u7528\u57DF\u7684\u5185\u90E8\u53D8\u91CF\u3002</span>

<span class="token comment">// \u5185\u5C42\u4F5C\u7528\u57DF\u53EF\u4EE5\u5B9A\u4E49\u5916\u5C42\u4F5C\u7528\u57DF\u7684\u540C\u540D\u53D8\u91CF\u3002</span>

<span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
  <span class="token keyword">let</span> insane <span class="token operator">=</span> <span class="token string">&#39;Hello World&#39;</span><span class="token punctuation">;</span>
  <span class="token punctuation">{</span><span class="token keyword">let</span> insane <span class="token operator">=</span> <span class="token string">&#39;Hello World&#39;</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// \u5757\u7EA7\u4F5C\u7528\u57DF\u7684\u51FA\u73B0\uFF0C\u5B9E\u9645\u4E0A\u4F7F\u5F97\u83B7\u5F97\u5E7F\u6CDB\u5E94\u7528\u7684\u533F\u540D\u7ACB\u5373\u6267\u884C\u51FD\u6570\u8868\u8FBE\u5F0F\uFF08\u533F\u540D IIFE\uFF09\u4E0D\u518D\u5FC5\u8981\u4E86\u3002</span>

<span class="token comment">// IIFE \u5199\u6CD5</span>
<span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> tmp <span class="token operator">=</span> <span class="token operator">...</span><span class="token punctuation">;</span>
  <span class="token operator">...</span>
<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u5757\u7EA7\u4F5C\u7528\u57DF\u5199\u6CD5</span>
<span class="token punctuation">{</span>
  <span class="token keyword">let</span> tmp <span class="token operator">=</span> <span class="token operator">...</span><span class="token punctuation">;</span>
  <span class="token operator">...</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),e=[o];function c(l,i){return s(),a("div",null,e)}var k=n(t,[["render",c],["__file","let.html.vue"]]);export{k as default};

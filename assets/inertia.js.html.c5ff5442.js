import{_ as n,o as s,c as a,g as t}from"./app.85e25c47.js";const p={},e=t(`<div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * \u9700\u6C42\uFF1A\u6211\u4EEC\u73B0\u5728\u9700\u8981\u5199\u4E00\u4E2A foo \u51FD\u6570\uFF0C\u8FD9\u4E2A\u51FD\u6570\u8FD4\u56DE\u9996\u6B21\u8C03\u7528\u65F6\u7684 Date \u5BF9\u8C61\uFF0C\u6CE8\u610F\u662F\u9996\u6B21\u3002
 * \u603B\u7ED3\uFF1A
 *      \u76EE\u7684\u5C31\u662F\u8003\u5BDF\uFF0C\u53D8\u91CF\u5B58\u50A8\u95EE\u9898\uFF1B
 *      1. \u5168\u5C40\u53D8\u91CF\u5B58\u50A8
 *      2. \u95ED\u5305\u5B58\u50A8
 *      3. \u51FD\u6570\u5C5E\u6027\u5B58\u50A8
 *      4. \u91CD\u5199\u51FD\u6570\uFF0C\u4E5F\u662F\u95ED\u5305\u7684\u4E00\u79CD\u5427
 */</span>

<span class="token comment">// \u89E3\u51B3\u4E00\uFF1A\u666E\u901A\u65B9\u6CD5</span>
  <span class="token keyword">var</span> t<span class="token punctuation">;</span>
  <span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>t<span class="token punctuation">)</span> <span class="token keyword">return</span> t<span class="token punctuation">;</span>
      t <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token keyword">return</span> t<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token comment">// \u95EE\u9898\u6709\u4E24\u4E2A\uFF0C\u4E00\u662F\u6C61\u67D3\u4E86\u5168\u5C40\u53D8\u91CF\uFF0C\u4E8C\u662F\u6BCF\u6B21\u8C03\u7528 foo \u7684\u65F6\u5019\u90FD\u9700\u8981\u8FDB\u884C\u4E00\u6B21\u5224\u65AD\u3002</span>

<span class="token comment">// \u89E3\u51B3\u4E8C\uFF1A\u95ED\u5305</span>
<span class="token comment">// \u6211\u4EEC\u5F88\u5BB9\u6613\u60F3\u5230\u7528\u95ED\u5305\u907F\u514D\u6C61\u67D3\u5168\u5C40\u53D8\u91CF\u3002</span>

  <span class="token keyword">var</span> foo <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">var</span> t<span class="token punctuation">;</span>
      <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>t<span class="token punctuation">)</span> <span class="token keyword">return</span> t<span class="token punctuation">;</span>
          t <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token keyword">return</span> t<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u7136\u800C\u8FD8\u662F\u6CA1\u6709\u89E3\u51B3\u8C03\u7528\u65F6\u90FD\u5FC5\u987B\u8FDB\u884C\u4E00\u6B21\u5224\u65AD\u7684\u95EE\u9898\u3002</span>

<span class="token comment">// \u89E3\u51B3\u4E09\uFF1A\u51FD\u6570\u5BF9\u8C61</span>
<span class="token comment">// \u51FD\u6570\u4E5F\u662F\u4E00\u79CD\u5BF9\u8C61\uFF0C\u5229\u7528\u8FD9\u4E2A\u7279\u6027\uFF0C\u6211\u4EEC\u4E5F\u53EF\u4EE5\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\u3002</span>
  <span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>foo<span class="token punctuation">.</span>t<span class="token punctuation">)</span> <span class="token keyword">return</span> foo<span class="token punctuation">.</span>t<span class="token punctuation">;</span>
      foo<span class="token punctuation">.</span>t <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> foo<span class="token punctuation">.</span>t<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token comment">// \u4F9D\u65E7\u6CA1\u6709\u89E3\u51B3\u8C03\u7528\u65F6\u90FD\u5FC5\u987B\u8FDB\u884C\u4E00\u6B21\u5224\u65AD\u7684\u95EE\u9898\u3002</span>

<span class="token comment">// \u89E3\u51B3\u56DB\uFF1A\u60F0\u6027\u51FD\u6570</span>
<span class="token comment">// \u4E0D\u9519\uFF0C\u60F0\u6027\u51FD\u6570\u5C31\u662F\u89E3\u51B3\u6BCF\u6B21\u90FD\u8981\u8FDB\u884C\u5224\u65AD\u7684\u8FD9\u4E2A\u95EE\u9898\uFF0C\u89E3\u51B3\u539F\u7406\u5F88\u7B80\u5355\uFF0C\u91CD\u5199\u51FD\u6570\u3002</span>
  <span class="token keyword">var</span> <span class="token function-variable function">foo</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> t <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function-variable function">foo</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> t<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>


<span class="token comment">// \u66F4\u591A\u5E94\u7528</span>
<span class="token comment">// DOM \u4E8B\u4EF6\u6DFB\u52A0\u4E2D\uFF0C\u4E3A\u4E86\u517C\u5BB9\u73B0\u4EE3\u6D4F\u89C8\u5668\u548C IE \u6D4F\u89C8\u5668\uFF0C\u6211\u4EEC\u9700\u8981\u5BF9\u6D4F\u89C8\u5668\u73AF\u5883\u8FDB\u884C\u4E00\u6B21\u5224\u65AD\uFF1A</span>

<span class="token comment">// \u7B80\u5316\u5199\u6CD5</span>
<span class="token keyword">function</span> <span class="token function">addEvent</span> <span class="token punctuation">(</span>type<span class="token punctuation">,</span> el<span class="token punctuation">,</span> fn<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>window<span class="token punctuation">.</span>addEventListener<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        el<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span>type<span class="token punctuation">,</span> fn<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>attachEvent<span class="token punctuation">)</span><span class="token punctuation">{</span>
        el<span class="token punctuation">.</span><span class="token function">attachEvent</span><span class="token punctuation">(</span><span class="token string">&#39;on&#39;</span> <span class="token operator">+</span> type<span class="token punctuation">,</span> fn<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u95EE\u9898\u5728\u4E8E\u6211\u4EEC\u6BCF\u5F53\u4F7F\u7528\u4E00\u6B21 addEvent \u65F6\u90FD\u4F1A\u8FDB\u884C\u4E00\u6B21\u5224\u65AD\u3002</span>

<span class="token comment">// \u5229\u7528\u60F0\u6027\u51FD\u6570\uFF0C\u6211\u4EEC\u53EF\u4EE5\u8FD9\u6837\u505A\uFF1A</span>
<span class="token keyword">function</span> <span class="token function">addEvent</span> <span class="token punctuation">(</span>type<span class="token punctuation">,</span> el<span class="token punctuation">,</span> fn<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>window<span class="token punctuation">.</span>addEventListener<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function-variable function">addEvent</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>type<span class="token punctuation">,</span> el<span class="token punctuation">,</span> fn<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            el<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span>type<span class="token punctuation">,</span> fn<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>attachEvent<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function-variable function">addEvent</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>type<span class="token punctuation">,</span> el<span class="token punctuation">,</span> fn<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            el<span class="token punctuation">.</span><span class="token function">attachEvent</span><span class="token punctuation">(</span><span class="token string">&#39;on&#39;</span> <span class="token operator">+</span> type<span class="token punctuation">,</span> fn<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u5F53\u7136\u6211\u4EEC\u4E5F\u53EF\u4EE5\u4F7F\u7528\u95ED\u5305\u7684\u5F62\u5F0F\uFF1A</span>
<span class="token keyword">var</span> addEvent <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>window<span class="token punctuation">.</span>addEventListener<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>type<span class="token punctuation">,</span> el<span class="token punctuation">,</span> fn<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            el<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span>type<span class="token punctuation">,</span> fn<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>attachEvent<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>type<span class="token punctuation">,</span> el<span class="token punctuation">,</span> fn<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            el<span class="token punctuation">.</span><span class="token function">attachEvent</span><span class="token punctuation">(</span><span class="token string">&#39;on&#39;</span> <span class="token operator">+</span> type<span class="token punctuation">,</span> fn<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u5F53\u6211\u4EEC\u6BCF\u6B21\u90FD\u9700\u8981\u8FDB\u884C\u6761\u4EF6\u5224\u65AD\uFF0C\u5176\u5B9E\u53EA\u9700\u8981\u5224\u65AD\u4E00\u6B21\uFF0C\u63A5\u4E0B\u6765\u7684\u4F7F\u7528\u65B9\u5F0F\u90FD\u4E0D\u4F1A\u53D1\u751F\u6539\u53D8\u7684\u65F6\u5019\uFF0C\u60F3\u60F3\u662F\u5426\u53EF\u4EE5\u8003\u8651\u4F7F\u7528\u60F0\u6027\u51FD\u6570\u3002</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),o=[e];function c(i,l){return s(),a("div",null,o)}var k=n(p,[["render",c],["__file","inertia.js.html.vue"]]);export{k as default};

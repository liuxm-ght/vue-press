import{_ as n,o as s,c as a,g as e}from"./app.42a0e3cd.js";const p={},t=e(`<div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">var</span> _ <span class="token operator">=</span> <span class="token keyword">require</span><span class="token punctuation">(</span><span class="token string">&#39;ramda&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token comment">// \u7EC3\u4E60 1</span>
<span class="token comment">//==============</span>
<span class="token comment">// \u901A\u8FC7\u5C40\u90E8\u8C03\u7528\uFF08partial apply\uFF09\u79FB\u9664\u6240\u6709\u53C2\u6570</span>

<span class="token keyword">var</span> <span class="token function-variable function">words</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39; &#39;</span><span class="token punctuation">,</span> str<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// \u7EC3\u4E60 1a</span>
<span class="token comment">//==============</span>
<span class="token comment">// \u4F7F\u7528 \`map\` \u521B\u5EFA\u4E00\u4E2A\u65B0\u7684 \`words\` \u51FD\u6570\uFF0C\u4F7F\u4E4B\u80FD\u591F\u64CD\u4F5C\u5B57\u7B26\u4E32\u6570\u7EC4</span>

<span class="token keyword">var</span> sentences <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>


<span class="token comment">// \u7EC3\u4E60 2</span>
<span class="token comment">//==============</span>
<span class="token comment">// \u901A\u8FC7\u5C40\u90E8\u8C03\u7528\uFF08partial apply\uFF09\u79FB\u9664\u6240\u6709\u53C2\u6570</span>

<span class="token keyword">var</span> <span class="token function-variable function">filterQs</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>xs<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">filter</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">q</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">,</span> x<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token punctuation">}</span><span class="token punctuation">,</span> xs<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>


<span class="token comment">// \u7EC3\u4E60 3</span>
<span class="token comment">//==============</span>
<span class="token comment">// \u4F7F\u7528\u5E2E\u52A9\u51FD\u6570 \`_keepHighest\` \u91CD\u6784 \`max\` \u4F7F\u4E4B\u6210\u4E3A curry \u51FD\u6570</span>

<span class="token comment">// \u65E0\u987B\u6539\u52A8:</span>
<span class="token keyword">var</span> <span class="token function-variable function">_keepHighest</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span>y<span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token keyword">return</span> x <span class="token operator">&gt;=</span> y <span class="token operator">?</span> x <span class="token operator">:</span> y<span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// \u91CD\u6784\u8FD9\u6BB5\u4EE3\u7801:</span>
<span class="token keyword">var</span> <span class="token function-variable function">max</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>xs<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">reduce</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span>acc<span class="token punctuation">,</span> x<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">_keepHighest</span><span class="token punctuation">(</span>acc<span class="token punctuation">,</span> x<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">Infinity</span><span class="token punctuation">,</span> xs<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>


<span class="token comment">// \u5F69\u86CB 1:</span>
<span class="token comment">// ============</span>
<span class="token comment">// \u5305\u88F9\u6570\u7EC4\u7684 \`slice\` \u51FD\u6570\u4F7F\u4E4B\u6210\u4E3A curry \u51FD\u6570</span>
<span class="token comment">// //[1,2,3].slice(0, 2)</span>
<span class="token keyword">var</span> slice <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>


<span class="token comment">// \u5F69\u86CB 2:</span>
<span class="token comment">// ============</span>
<span class="token comment">// \u501F\u52A9 \`slice\` \u5B9A\u4E49\u4E00\u4E2A \`take\` curry \u51FD\u6570\uFF0C\u8BE5\u51FD\u6570\u8C03\u7528\u540E\u53EF\u4EE5\u53D6\u51FA\u5B57\u7B26\u4E32\u7684\u524D n \u4E2A\u5B57\u7B26\u3002</span>
<span class="token keyword">var</span> take <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>



\u7B54\u6848\uFF1A



<span class="token keyword">require</span><span class="token punctuation">(</span><span class="token string">&#39;../../support&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> _ <span class="token operator">=</span> <span class="token keyword">require</span><span class="token punctuation">(</span><span class="token string">&#39;ramda&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;add&#39;</span><span class="token punctuation">,</span> <span class="token function">map</span><span class="token punctuation">(</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token comment">// Exercise 1</span>
<span class="token comment">//==============</span>

<span class="token keyword">var</span> words <span class="token operator">=</span> <span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39; &#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Exercise 1a</span>
<span class="token comment">//==============</span>

<span class="token keyword">var</span> sentences <span class="token operator">=</span> <span class="token function">map</span><span class="token punctuation">(</span>words<span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token comment">// Exercise 2</span>
<span class="token comment">//==============</span>

<span class="token keyword">var</span> filterQs <span class="token operator">=</span> <span class="token function">filter</span><span class="token punctuation">(</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">q</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token comment">// Exercise 3</span>
<span class="token comment">//==============</span>
<span class="token comment">// Use the helper function _keepHighest to refactor max</span>

<span class="token keyword">var</span> <span class="token function-variable function">_keepHighest</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span>y<span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token keyword">return</span> x <span class="token operator">&gt;=</span> y <span class="token operator">?</span> x <span class="token operator">:</span> y<span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">// &lt;- leave be</span>

<span class="token keyword">var</span> max <span class="token operator">=</span> <span class="token function">reduce</span><span class="token punctuation">(</span>_keepHighest<span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">Infinity</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token comment">// Bonus 1:</span>
<span class="token comment">// ============</span>
<span class="token comment">// wrap array&#39;s slice to be functional and curried.</span>
<span class="token comment">// //[1,2,3].slice(0, 2)</span>
<span class="token keyword">var</span> slice <span class="token operator">=</span> _<span class="token punctuation">.</span><span class="token function">curry</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span>start<span class="token punctuation">,</span> end<span class="token punctuation">,</span> xs<span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token keyword">return</span> xs<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>start<span class="token punctuation">,</span> end<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token comment">// Bonus 2:</span>
<span class="token comment">// ============</span>
<span class="token comment">// use slice to define a function &quot;take&quot; that takes n elements. make it curried</span>
<span class="token keyword">var</span> take <span class="token operator">=</span> <span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span> words<span class="token operator">:</span> words<span class="token punctuation">,</span>
                   sentences<span class="token operator">:</span> sentences<span class="token punctuation">,</span>
                   filterQs<span class="token operator">:</span> filterQs<span class="token punctuation">,</span>
                   max<span class="token operator">:</span> max<span class="token punctuation">,</span>
                   slice<span class="token operator">:</span> slice<span class="token punctuation">,</span>
                   take<span class="token operator">:</span> take
                 <span class="token punctuation">}</span><span class="token punctuation">;</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),c=[t];function o(i,l){return s(),a("div",null,c)}var r=n(p,[["render",o],["__file","curry-\u7EC3\u4E60.js.html.vue"]]);export{r as default};

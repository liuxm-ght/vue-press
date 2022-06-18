import{_ as n,o as s,c as a,g as t}from"./app.c10353cc.js";const p={},e=t(`<div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * \u603B\u7ED3\uFF1A
 *    \u8DEF\u7684\u5B9E\u73B0\u5176\u5B9E\u5F88\u7B80\u5355\uFF1A
 *      1. \u7EF4\u62A4\u4E00\u4E2A\u6570\u7EC4\u5B58\u50A8\u8DEF\u7531\u5386\u53F2\u8BB0\u5F55
 *      2. \u7EF4\u62A4\u4E00\u4E2Apath-route\u8DEF\u7531\u8868\uFF0C\u7528\u4E8E\u67E5\u8BE2\u8DEF\u7531(\u6B64\u5B9E\u4F8B\u4E2D\u6CA1\u6709\u8FD9\u4E2A)
 *      3. \u76D1\u542C\u8DEF\u7531\u53D8\u5316\uFF1Ahashchange\u6216popstate
 *      4. \u89E6\u53D1\u8DEF\u7531\u53D8\u5316\uFF1A\u70B9\u51FB\u6D4F\u89C8\u5668\u524D\u8FDB\u540E\u9000\u3001\u624B\u52A8push\u3001replace\u3001a\u6807\u7B7E\u8DF3\u8F6C\u7B49
 *      5. \u76D1\u542C\u53D8\u5316\u540E\uFF0C\u5230\u8DEF\u7531\u8868\u67E5\u6216\u8DEF\u7531\u5386\u53F2\u8BB0\u5F55\u4E2D\u627E\uFF0C\u627E\u5230\u5BF9\u5E94\u5E8F\u53F7\u5224\u65AD\u662F\u524D\u540E\u64CD\u4F5C\u8FD8\u662F\u5237\u65B0\uFF0C\u8FDB\u800C\u66F4\u65B0\u8DEF\u7531\u5386\u53F2\u8BB0\u5F55\u8868
*/</span>


<span class="token comment">// \u6B64\u5904\u53EA\u662F\u90E8\u5206\u8DEF\u7531\u7684\u5B9E\u73B0\uFF0C\u5B8C\u6574\u7684\u770Bhttps://github.com/biaochenxuying/route</span>

<span class="token comment">// \u8DEF\u7531\u6784\u9020\u51FD\u6570 </span>
<span class="token keyword">function</span> <span class="token function">Router</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>routes <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">//\u4FDD\u5B58\u6CE8\u518C\u7684\u6240\u6709\u8DEF\u7531</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>routerViewId <span class="token operator">=</span> <span class="token string">&quot;#routerView&quot;</span><span class="token punctuation">;</span> <span class="token comment">// \u8DEF\u7531\u6302\u8F7D\u70B9 </span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>stackPages <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span> <span class="token comment">// \u591A\u7EA7\u9875\u9762\u7F13\u5B58</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>history <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// \u8DEF\u7531\u5386\u53F2</span>
<span class="token punctuation">}</span>

Router<span class="token punctuation">.</span>prototype <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">init</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">var</span> self <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
      <span class="token comment">//\u9875\u9762\u9996\u6B21\u52A0\u8F7D \u5339\u914D\u8DEF\u7531</span>
      window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;load&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token comment">// console.log(&#39;load&#39;, event);</span>
          self<span class="token punctuation">.</span><span class="token function">historyChange</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span>

      <span class="token comment">//\u8DEF\u7531\u5207\u6362</span>
      window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;hashchange&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token comment">// console.log(&#39;hashchange&#39;, event);</span>
          self<span class="token punctuation">.</span><span class="token function">historyChange</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span>

  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// \u8DEF\u7531\u5386\u53F2\u7EAA\u5F55\u53D8\u5316</span>
  <span class="token function-variable function">historyChange</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">var</span> currentHash <span class="token operator">=</span> util<span class="token punctuation">.</span><span class="token function">getParamsUrl</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">var</span> nameStr <span class="token operator">=</span> <span class="token string">&quot;router-history&quot;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>history <span class="token operator">=</span> window<span class="token punctuation">.</span>sessionStorage<span class="token punctuation">[</span>nameStr<span class="token punctuation">]</span> <span class="token operator">?</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>sessionStorage<span class="token punctuation">[</span>nameStr<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

      <span class="token keyword">var</span> back <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// \u540E\u9000</span>
          refresh <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// \u5237\u65B0</span>
          forward <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// \u524D\u8FDB</span>
          index <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
          len <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>history<span class="token punctuation">.</span>length<span class="token punctuation">;</span>

      <span class="token comment">// \u6BD4\u8F83\u5F53\u524D\u8DEF\u7531\u7684\u72B6\u6001\uFF0C\u5F97\u51FA\u662F\u540E\u9000\u3001\u524D\u8FDB\u3001\u5237\u65B0\u7684\u72B6\u6001\u3002</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">var</span> h <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>history<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>h<span class="token punctuation">.</span>hash <span class="token operator">===</span> currentHash<span class="token punctuation">.</span>path <span class="token operator">&amp;&amp;</span> h<span class="token punctuation">.</span>key <span class="token operator">===</span> currentHash<span class="token punctuation">.</span>query<span class="token punctuation">.</span>key<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//\u5DF2\u5B58\u8DEF\u7531</span>
          index <span class="token operator">=</span> i
          <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">===</span> len <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// \u5F53\u524D\u8DEF\u7531\uFF0C\u5237\u65B0</span>
              refresh <span class="token operator">=</span> <span class="token boolean">true</span>
          <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token comment">// \u975E\u5F53\u524D\u8DEF\u7531\uFF0C\u540E\u9000</span>
              back <span class="token operator">=</span> <span class="token boolean">true</span>
          <span class="token punctuation">}</span>
          <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token comment">//\u65B0\u8DEF\u7531</span>
          forward <span class="token operator">=</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>back<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token comment">// \u540E\u9000\uFF0C\u628A\u5386\u53F2\u7EAA\u5F55\u7684\u6700\u540E\u4E00\u9879\u5220\u9664</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>historyFlag <span class="token operator">=</span> <span class="token string">&#39;back&#39;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>history<span class="token punctuation">.</span>length <span class="token operator">=</span> index <span class="token operator">+</span> <span class="token number">1</span> <span class="token comment">//\u5E94\u8BE5\u662F\u51CF\u4E00\uFF0C\u56E0\u4E3A\u8981\u5220\u9664\u4E00\u4E2A\u5143\u7D20</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>refresh<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token comment">// \u5237\u65B0\uFF0C\u4E0D\u505A\u5176\u4ED6\u64CD\u4F5C</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>historyFlag <span class="token operator">=</span> <span class="token string">&#39;refresh&#39;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u524D\u8FDB\uFF0C\u6DFB\u52A0\u4E00\u6761\u5386\u53F2\u7EAA\u5F55</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>historyFlag <span class="token operator">=</span> <span class="token string">&#39;forward&#39;</span>
        <span class="token keyword">var</span> item <span class="token operator">=</span> <span class="token punctuation">{</span>
          key<span class="token operator">:</span> currentHash<span class="token punctuation">.</span>query<span class="token punctuation">.</span>key<span class="token punctuation">,</span>
          hash<span class="token operator">:</span> currentHash<span class="token punctuation">.</span>path<span class="token punctuation">,</span>
          query<span class="token operator">:</span> currentHash<span class="token punctuation">.</span>query
        <span class="token punctuation">}</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>history<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      <span class="token comment">// \u5982\u679C\u4E0D\u9700\u8981\u9875\u9762\u7F13\u5B58\u529F\u80FD\uFF0C\u6BCF\u6B21\u90FD\u662F\u5237\u65B0\u64CD\u4F5C</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>stackPages<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>historyFlag <span class="token operator">=</span> <span class="token string">&#39;forward&#39;</span>
      <span class="token punctuation">}</span>
    window<span class="token punctuation">.</span>sessionStorage<span class="token punctuation">[</span>nameStr<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>history<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>






<span class="token comment">// \u57FA\u4E8E\u6570\u7EC4\u5B9E\u73B0\u7684\u987A\u5E8F\u6808</span>
<span class="token keyword">class</span> <span class="token class-name">ArrayStack</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>items <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>  <span class="token comment">// \u6570\u7EC4</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>   <span class="token comment">// \u6808\u4E2D\u5143\u7D20\u4E2A\u6570</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>n <span class="token operator">=</span> n<span class="token punctuation">;</span>       <span class="token comment">// \u6808\u7684\u5927\u5C0F</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// \u5165\u6808\u64CD\u4F5C</span>
  <span class="token function">push</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u6570\u7EC4\u7A7A\u95F4\u4E0D\u591F\u4E86\uFF0C\u76F4\u63A5\u8FD4\u56DE false\uFF0C\u5165\u6808\u5931\u8D25\u3002</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>count <span class="token operator">===</span> <span class="token keyword">this</span><span class="token punctuation">.</span>n<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token comment">// \u5C06 item \u653E\u5230\u4E0B\u6807\u4E3A count \u7684\u4F4D\u7F6E\uFF0C\u5E76\u4E14 count \u52A0\u4E00</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>items<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token punctuation">]</span> <span class="token operator">=</span> item<span class="token punctuation">;</span>
    <span class="token operator">++</span><span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// \u51FA\u6808\u64CD\u4F5C</span>
  <span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u6808\u4E3A\u7A7A\uFF0C\u5219\u76F4\u63A5\u8FD4\u56DE null</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>count <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token comment">// \u8FD4\u56DE\u4E0B\u6807\u4E3A count-1 \u7684\u6570\u7EC4\u5143\u7D20\uFF0C\u5E76\u4E14\u6808\u4E2D\u5143\u7D20\u4E2A\u6570 count \u51CF\u4E00</span>
    <span class="token keyword">let</span> tmp <span class="token operator">=</span> items<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token operator">--</span><span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token punctuation">;</span>
    <span class="token keyword">return</span> tmp<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),o=[e];function c(i,l){return s(),a("div",null,o)}var k=n(p,[["render",c],["__file","history.js.html.vue"]]);export{k as default};

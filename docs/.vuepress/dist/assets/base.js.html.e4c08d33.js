import{_ as n,o as s,c as a,g as t}from"./app.c10353cc.js";const p={},e=t(`<div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * \u603B\u7ED3\uFF1A
 *  \u9632\u6296debounce\uFF1A\u7ACB\u5373\u6267\u884C\u6216\u65F6\u95F4\u5230\u671F\u6267\u884C\uFF0C\u4E2D\u9014\u6253\u65AD\u91CD\u65B0\u8BA1\u65F6
 *  \u8282\u6D41throttle\uFF1A\u7ACB\u5373\u6267\u884C\u6216\u65F6\u95F4\u5230\u671F\u6267\u884C\uFF0C\u4E2D\u9014\u6253\u65AD\u4E0D\u91CD\u65B0\u8BA1\u65F6\uFF0C\u5230\u671F\u6267\u884C
 *  \u56FE\u7247\u61D2\u52A0\u8F7DimgLazyLoad\uFF1Adataset\u5B58\u50A8\u771F\u662F\u8D44\u6E90\u8DEF\u5F84\uFF0C\u9632\u6296\u6EDA\u52A8\uFF0C\u5F53\u56FE\u7247\u8FDB\u5165\u89C6\u56FE\u533A\u57DF\u5185\u5F00\u59CB\u66FF\u6362src\u4E3A\u771F\u5B9E\u8D44\u6E90\u52A0\u8F7D\u56FE\u7247\uFF0C\u5168\u90E8\u52A0\u8F7D\u5B8C\u5220\u9664\u6EDA\u52A8\u76D1\u542C\u4E8B\u4EF6
 *  \u5B57\u7B26\u4E32\u6A21\u677F\u6E32\u67D3render\uFF1A\u6B63\u5219\u5339\u914D\u7279\u6B8A\u5B57\u7B26\u4E32\uFF0Creplace\u66FF\u6362\uFF0C\u9012\u5F52\u8C03\u7528\u51FD\u6570\u76F4\u5230\u6240\u6709\u66FF\u6362\u5B8C\u6210
*/</span>


<span class="token comment">// \u83B7\u53D6url\u53C2\u6570</span>
  <span class="token comment">// URLSearchParams \u65B9\u6CD5\uFF1A</span>
    <span class="token keyword">function</span> <span class="token function">getUrlParams</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u521B\u5EFA\u4E00\u4E2AURLSearchParams\u5B9E\u4F8B</span>
      <span class="token keyword">const</span> urlSearchParams <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">URLSearchParams</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>search<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">// \u628A\u952E\u503C\u5BF9\u5217\u8868\u8F6C\u6362\u4E3A\u4E00\u4E2A\u5BF9\u8C61</span>
      <span class="token keyword">const</span> params <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">fromEntries</span><span class="token punctuation">(</span>urlSearchParams<span class="token punctuation">.</span><span class="token function">entries</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> params
    <span class="token punctuation">}</span>

  <span class="token comment">// split \u65B9\u6CD5\uFF1A</span>
    <span class="token keyword">function</span> <span class="token function">getParams</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>url<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">&#39;?&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> str <span class="token operator">=</span> url<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;?&#39;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
        <span class="token keyword">const</span> arr <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;&amp;&#39;</span><span class="token punctuation">)</span>
        arr<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>item <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          <span class="token keyword">const</span> key <span class="token operator">=</span> item<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;=&#39;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
          <span class="token keyword">const</span> val <span class="token operator">=</span> item<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;=&#39;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
          res<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">decodeURIComponent</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span> <span class="token comment">// \u89E3\u7801</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> res
    <span class="token punctuation">}</span>
    <span class="token comment">// \u6D4B\u8BD5</span>
    <span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token function">getParams</span><span class="token punctuation">(</span><span class="token string">&#39;http://www.baidu.com?user=%E9%98%BF%E9%A3%9E&amp;age=16&#39;</span><span class="token punctuation">)</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span> <span class="token comment">// { user: &#39;\u963F\u98DE&#39;, age: &#39;16&#39; }</span>
  


<span class="token comment">// \u9632\u6296</span>
  <span class="token doc-comment comment">/**
   * \u89E6\u53D1\u9AD8\u9891\u4E8B\u4EF6 N \u79D2\u540E\u53EA\u4F1A\u6267\u884C\u4E00\u6B21\uFF0C\u5982\u679C N \u79D2\u5185\u4E8B\u4EF6\u518D\u6B21\u89E6\u53D1\uFF0C\u5219\u4F1A\u91CD\u65B0\u8BA1\u65F6\u3002
   * \u7B80\u5355\u7248\uFF1A\u51FD\u6570\u5185\u90E8\u652F\u6301\u4F7F\u7528 this \u548C event \u5BF9\u8C61\uFF1B
   * \u6700\u7EC8\u7248\uFF1A\u8FD8\u652F\u6301\u4EE5\u4E0B\u529F\u80FD\uFF1A \u652F\u6301\u7ACB\u5373\u6267\u884C\uFF1B\u51FD\u6570\u53EF\u80FD\u6709\u8FD4\u56DE\u503C\uFF1B\u652F\u6301\u53D6\u6D88\u529F\u80FD\uFF1B
  */</span>
  <span class="token comment">// \u53EA\u6267\u884C\u6700\u540E\u4E00\u6B21</span>
  <span class="token keyword">function</span> <span class="token function">debounce</span><span class="token punctuation">(</span>func<span class="token punctuation">,</span>wait<span class="token punctuation">,</span>immediate<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> timeout<span class="token punctuation">,</span>result<span class="token punctuation">;</span>
    <span class="token keyword">var</span> <span class="token function-variable function">_debounce</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">var</span> context <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
      <span class="token keyword">var</span> args <span class="token operator">=</span> arguments
      <span class="token keyword">if</span> <span class="token punctuation">(</span>timeout<span class="token punctuation">)</span> <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timeout<span class="token punctuation">)</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>immediate<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">var</span> callNow <span class="token operator">=</span> <span class="token operator">!</span>timeout
        timeout <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          timeout <span class="token operator">=</span> <span class="token keyword">null</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>wait<span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>callNow<span class="token punctuation">)</span> result <span class="token operator">=</span> <span class="token function">func</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span>args<span class="token punctuation">)</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        timeout <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          result <span class="token operator">=</span> <span class="token function">func</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span>args<span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>wait<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> result
    <span class="token punctuation">}</span>
    _debounce<span class="token punctuation">.</span><span class="token function-variable function">cancel</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//\u652F\u6301\u53D6\u6D88\u529F\u80FD\uFF1B</span>
      <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timeout<span class="token punctuation">)</span>
      timeout <span class="token operator">=</span> <span class="token keyword">null</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> _debounce
  <span class="token punctuation">}</span>
    <span class="token comment">// // \u4F7F\u7528\uFF1A</span>
    <span class="token comment">//   var setUseAction = debounce(getUserAction, 10000, true);</span>
    <span class="token comment">//   // \u4F7F\u7528\u9632\u6296</span>
    <span class="token comment">//   node.onmousemove = setUseAction</span>
    <span class="token comment">//   // \u53D6\u6D88\u9632\u6296</span>
    <span class="token comment">//   setUseAction.cancel()</span>



<span class="token comment">// \u8282\u6D41</span>
  <span class="token doc-comment comment">/**
   * \u7ACB\u5373\u6267\u884C\u4E00\u6B21\uFF0C\u7136\u540E\u4E00\u6BB5\u65F6\u95F4\u5185\u6267\u884C\u4E00\u6B21
   * \u7B80\u5355\u7248\uFF1A\u4F7F\u7528\u65F6\u95F4\u6233\u6765\u5B9E\u73B0\uFF0C\u7ACB\u5373\u6267\u884C\u4E00\u6B21\uFF0C\u7136\u540E\u6BCF N \u79D2\u6267\u884C\u4E00\u6B21\u3002
   * \u6700\u7EC8\u7248\uFF1A\u652F\u6301\u53D6\u6D88\u8282\u6D41\uFF1B\u53E6\u5916\u901A\u8FC7\u4F20\u5165\u7B2C\u4E09\u4E2A\u53C2\u6570\uFF0C
   *    leading\uFF1Afalse \u8868\u793A\u7981\u7528\u7B2C\u4E00\u6B21\u6267\u884C
   *    trailing: false \u8868\u793A\u7981\u7528\u6700\u540E\u4E00\u6B21\u6267\u884C
   *    \u9ED8\u8BA4\u90FD\u662F true\u3002
   *    \u6CE8\u610F\u8BBE\u7F6E\u7684\u65F6\u5019\u4E0D\u80FD\u540C\u65F6\u5C06 leading \u6216 trailing \u8BBE\u7F6E\u4E3A false\u3002
   * 
   * \u603B\u7ED3\uFF1A \u901A\u8FC7\u5269\u4F59\u65F6\u95F4\u6765\u5224\u65AD\u662F\u5426\u7ACB\u5373\u6267\u884C\uFF0C\u5728\u5269\u4F59\u65F6\u95F4\u8303\u56F4\u5185\uFF0C\u8BBE\u7F6E\u5269\u4F59\u65F6\u95F4\u5012\u8BA1\u65F6\uFF0C\u5230\u671F\u6267\u884C\uFF0C\u5426\u5219\u7ACB\u5373\u6267\u884C
   * */</span> 
  <span class="token keyword">function</span> <span class="token function">throttle</span><span class="token punctuation">(</span>func<span class="token punctuation">,</span>wait<span class="token punctuation">,</span>options<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> timeout<span class="token punctuation">,</span>result<span class="token punctuation">,</span>args<span class="token punctuation">,</span>context<span class="token punctuation">;</span>
    <span class="token keyword">var</span> previous <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>options<span class="token punctuation">)</span> options <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment">//\u9ED8\u8BA4 trailing leading \u90FD\u4E0D\u4E3Afalse</span>
    <span class="token keyword">var</span> <span class="token function-variable function">later</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      previous <span class="token operator">=</span> options<span class="token punctuation">.</span>leading <span class="token operator">===</span> <span class="token boolean">false</span> <span class="token operator">?</span> <span class="token number">0</span> <span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      timeout <span class="token operator">=</span> <span class="token keyword">null</span>
      result <span class="token operator">=</span> <span class="token function">func</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span>args<span class="token punctuation">)</span>
      <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>timeout<span class="token punctuation">)</span> context <span class="token operator">=</span> args <span class="token operator">=</span> <span class="token keyword">null</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">function</span> <span class="token function">_throttled</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">var</span> now <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>previous <span class="token operator">&amp;&amp;</span> options<span class="token punctuation">.</span>leading <span class="token operator">===</span> <span class="token boolean">false</span><span class="token punctuation">)</span> previous <span class="token operator">=</span> now <span class="token comment">// \u5982\u679C\u662F\u7B2C\u4E00\u6B21\uFF0C\u4E14\u4E0D\u5141\u8BB8\u89E6\u53D1\u7B2C\u4E00\u6B21\uFF0C\u5219\u5C06\u4E0A\u4E00\u6B21\u65F6\u95F4\u8BBE\u7F6E\u4E3A\u5F53\u524D\u65F6\u95F4\uFF0C\u5F53\u505A\u4E8B\u7B2C\u4E8C\u6B21\u6765\u5904\u7406\uFF0Cremaining === wait</span>
      <span class="token keyword">var</span> remaining <span class="token operator">=</span> wait <span class="token operator">-</span> <span class="token punctuation">(</span>now <span class="token operator">-</span> previous<span class="token punctuation">)</span> <span class="token comment">//\u83B7\u53D6\u5269\u4F59\u65F6\u95F4</span>
      context <span class="token operator">=</span> <span class="token keyword">this</span>
      args <span class="token operator">=</span> arguments
      <span class="token keyword">if</span> <span class="token punctuation">(</span>remaining <span class="token operator">&lt;=</span> <span class="token number">0</span> <span class="token operator">||</span> remaining <span class="token operator">&gt;</span> wait <span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// \u4E0D\u5728\u5269\u4F59\u65F6\u95F4\u8303\u56F4\u5185\uFF0C\u53EF\u80FD\u60C5\u51B5\u662F \u8D85\u51FA\u4E86\u5269\u4F59\u8303\u56F4\u65F6\u95F4 \u6216 \u4FEE\u6539\u4E86\u7CFB\u7EDF\u65F6\u95F4</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>timeout<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timeout<span class="token punctuation">)</span>
          timeout <span class="token operator">=</span> <span class="token keyword">null</span>
        <span class="token punctuation">}</span>
        previous <span class="token operator">=</span> now
        result <span class="token operator">=</span> <span class="token function">func</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span>args<span class="token punctuation">)</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>timeout<span class="token punctuation">)</span> context <span class="token operator">=</span> args <span class="token operator">=</span> <span class="token keyword">null</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>timeout <span class="token operator">&amp;&amp;</span> options<span class="token punctuation">.</span>trailing <span class="token operator">!==</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">// \u5982\u679C\u662F\u5728\u5269\u4F59\u65F6\u95F4\u8303\u56F4\u5185\u518D\u6B21\u89E6\u53D1 \u4E14\u5141\u8BB8\u6700\u540E\u89E6\u53D1\u4E00\u6B21</span>
        timeout <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span>later<span class="token punctuation">,</span>remaining<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    _throttled<span class="token punctuation">.</span><span class="token function-variable function">cancel</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timeout<span class="token punctuation">)</span>
      timeout <span class="token operator">=</span> <span class="token keyword">null</span> 
      previous <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> _throttled
  <span class="token punctuation">}</span>

  <span class="token comment">// \u64CD\u4F5C                \u63CF\u8FF0                                                            \u573A\u666F</span>
  <span class="token comment">// \u9632\u6296             \u9891\u7E41\u53BB\u89E6\u53D1\u4E00\u4E2A\u4E8B\u4EF6\uFF0C\u4F46\u662F\u53EA\u89E6\u53D1\u6700\u540E\u4E00\u6B21\u3002\u4EE5\u6700\u540E\u4E00\u6B21\u4E3A\u51C6         1\u3001\u7535\u8111\u606F\u5C4F\u65F6\u95F4\uFF0C\u6BCF\u52A8\u4E00\u6B21\u7535\u8111\u53C8\u91CD\u65B0\u8BA1\u7B97\u65F6\u95F42\u3001input\u6846\u53D8\u5316\u9891\u7E41\u89E6\u53D1\u4E8B\u4EF6\u53EF\u52A0\u9632\u62963\u3001\u9891\u7E41\u70B9\u51FB\u6309\u94AE\u63D0\u4EA4\u8868\u5355\u53EF\u52A0\u9632\u6296</span>
  <span class="token comment">// \u8282\u6D41              \u9891\u7E41\u53BB\u89E6\u53D1\u4E00\u4E2A\u4E8B\u4EF6\uFF0C\u4F46\u662F\u53EA\u80FD\u6BCF\u9694\u4E00\u6BB5\u65F6\u95F4\u89E6\u53D1\u4E00\u6B21             1\u3001\u6EDA\u52A8\u9891\u7E41\u8BF7\u6C42\u5217\u8868\u53EF\u52A0\u8282\u6D412\u3001\u6E38\u620F\u91CC\u957F\u6309\u9F20\u6807\uFF0C\u4F46\u662F\u52A8\u4F5C\u90FD\u662F\u6BCF\u9694\u4E00\u6BB5\u65F6\u95F4\u505A\u4E00\u6B21</span>


<span class="token comment">// \u56FE\u7247\u61D2\u52A0\u8F7D</span>
  <span class="token doc-comment comment">/**
   * \u4E0E\u666E\u901A\u7684\u56FE\u7247\u61D2\u52A0\u8F7D\u4E0D\u540C\uFF0C\u5982\u4E0B\u8FD9\u4E2A\u591A\u505A\u4E86 2 \u4E2A\u7CBE\u5FC3\u5904\u7406\uFF1A
   *    \u56FE\u7247\u5168\u90E8\u52A0\u8F7D\u5B8C\u6210\u540E\u79FB\u9664\u4E8B\u4EF6\u76D1\u542C\uFF1B
   *    \u52A0\u8F7D\u5B8C\u7684\u56FE\u7247\uFF0C\u4ECE imgList \u79FB\u9664\uFF1B
  */</span>
  <span class="token keyword">let</span> imgList <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>document<span class="token punctuation">.</span><span class="token function">querySelectorAll</span><span class="token punctuation">(</span><span class="token string">&#39;img&#39;</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
  <span class="token keyword">let</span> length <span class="token operator">=</span> imgList<span class="token punctuation">.</span>length
  <span class="token keyword">const</span> imgLazyLoad <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> deleteIndexList <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
      imgList<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span>img<span class="token punctuation">,</span>index<span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
        <span class="token keyword">let</span> <span class="token operator">=</span> rect <span class="token operator">=</span> img<span class="token punctuation">.</span><span class="token function">getBoundingClientRect</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>rect<span class="token punctuation">.</span>top <span class="token operator">&lt;</span> window<span class="token punctuation">.</span>innerHeight<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          img<span class="token punctuation">.</span>src <span class="token operator">=</span> img<span class="token punctuation">.</span>dataset<span class="token punctuation">.</span>src
          deleteIndexList<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span>
          count<span class="token operator">++</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>count <span class="token operator">===</span> length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            document<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;scroll&#39;</span><span class="token punctuation">,</span><span class="token function">debounce</span><span class="token punctuation">(</span>imgLazyLoad<span class="token punctuation">,</span><span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
      imgList <span class="token operator">=</span> imgList<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span>img<span class="token punctuation">,</span>index<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token operator">!</span>deleteIndexList<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;scroll&#39;</span><span class="token punctuation">,</span><span class="token function">debounce</span><span class="token punctuation">(</span>imgLazyLoad<span class="token punctuation">,</span><span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">)</span>



<span class="token comment">// \u5B57\u7B26\u4E32\u6A21\u677F\u6E32\u67D3</span>
<span class="token doc-comment comment">/**
 * reg.test\u5339\u914D\u4E0A\u66FF\u6362\uFF0C\u9012\u5F52\u6B63\u5219\u5339\u914D
*/</span>
<span class="token keyword">function</span> <span class="token function">render</span><span class="token punctuation">(</span>template<span class="token punctuation">,</span>data<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> reg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\{\\{(\\w+)\\}\\}</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span> <span class="token comment">// \u6A21\u677F\u5B57\u7B26\u4E32\u6B63\u5219</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>reg<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>template<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
    <span class="token comment">// console.log(reg.exec(template));</span>
    <span class="token keyword">const</span> name <span class="token operator">=</span> reg<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>template<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token comment">// \u5339\u914D\u5230\u5C5E\u6027\u540D\u79F0</span>
    template <span class="token operator">=</span> template<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span>reg<span class="token punctuation">,</span>data<span class="token punctuation">[</span>name<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">//\u66FF\u6362</span>
    <span class="token keyword">return</span> <span class="token function">render</span><span class="token punctuation">(</span>template<span class="token punctuation">,</span>data<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> template
<span class="token punctuation">}</span>
    <span class="token comment">// let template = &#39;\u6211\u662F{{name}}\uFF0C\u5E74\u9F84{{age}}\uFF0C\u6027\u522B{{sex}}&#39;;</span>
    <span class="token comment">// let person = {</span>
    <span class="token comment">//     name: &#39;\u5E03\u5170&#39;,</span>
    <span class="token comment">//     age: 12</span>
    <span class="token comment">// }</span>
    <span class="token comment">// render(template, person); // \u6211\u662F\u5E03\u5170\uFF0C\u5E74\u9F8412\uFF0C\u6027\u522Bundefined</span>



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),o=[e];function c(i,l){return s(),a("div",null,o)}var k=n(p,[["render",c],["__file","base.js.html.vue"]]);export{k as default};

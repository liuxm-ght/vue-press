import{_ as n,o as s,c as a,e as p}from"./app.6cfd3ac5.js";const t={},e=p(`<div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * \u603B\u7ED3: 
 * \u6570\u7EC4\u5E38\u7528\u65B9\u6CD5\u624B\u5199\u603B\u7ED3\uFF1A
 *  forEach\uFF1Athis\u6570\u7EC4\u8F6C\u4E3A\u5BF9\u8C61\uFF0C\u5229\u7528while\u5FAA\u73AF\u6267\u884Ccallback\u51FD\u6570\uFF0Cwhile\u6BD4for\u5FEB\uFF0C\u6CE8\u610F\u5982\u679C\u6709\u7B2C\u4E8C\u4E2A\u53C2\u6570\u662F\u7ED1\u5B9A\u7684this
 *  map\uFF1A\u7C7B\u4F3CforEach\uFF0C\u53EA\u662F\u8FD4\u56DEcallback\u6267\u884C\u7684\u7ED3\u679C\u4FDD\u5B58\u5230\u65B0\u6570\u7EC4\u8FD4\u56DE\u51FA\u6765
 *  filter\uFF1A\u7C7B\u4F3Cmap\uFF0C\u53EA\u662F\u8FD4\u56DEcallback\u6267\u884C\u7ED3\u679C\u4E3Atrue\u7684\u5143\u7D20\uFF0C\u4FDD\u5B58\u5230\u65B0\u6570\u7EC4\u8FD4\u56DE\u51FA\u6765
 *  some\uFF1A\u7C7B\u4F3CforEach\uFF0C\u53EA\u662F\u5982\u679C\u6709\u4E00\u4E2Acallback\u6267\u884C\u7ED3\u679C\u4E3Atrue\u7684\u5143\u7D20\uFF0C\u8FD4\u56DEtrue\uFF1B\u5426\u5219\u4E3Afalse
 *  reduce\uFF1A\u7C7B\u4F3CforEach\uFF0C\u53EA\u662F\u6BCF\u6B21\u8FD4\u56DE\u7684callback\u6267\u884C\u7ED3\u679C\u5F53\u505A\u662F\u4E0B\u4E00\u6B21callback\u7684\u7B2C\u4E00\u4E2A\u53C2\u6570\uFF0C\u53EF\u5B9E\u73B0\u7D2F\u52A0\u5668\u5F97\u5230\u6700\u540E\u7ED3\u679C\u8FD4\u56DE\u51FA\u6765\uFF0C\u53EF\u8BBE\u7F6E\u521D\u59CB\u503C
 *  flat\uFF1A\u5C55\u5F00\u6570\u7EC4\uFF0C\u4E09\u79CD\u65B9\u6CD5\uFF0C\u4E00\u662FforEach\u5FAA\u73AF\u904D\u5386\u6570\u7EC4\uFF0C\u5224\u65AD\u5143\u7D20\u662F\u5426\u4E3A\u6570\u7EC4\uFF0C\u662F\u9012\u5F52\u5904\u7406\uFF0C\u6700\u540E\u62FC\u63A5\u65B0\u6570\u7EC4\u8FD4\u56DE\u51FA\u6765\uFF1B\u4E8C\u662Fwhile\u5FAA\u73AF\u5224\u65AD\u662F\u5426\u6709\u5143\u7D20\u662F\u6570\u7EC4\u5B58\u5728\uFF0C\u662F\u6269\u5C55\u7B26\u5C55\u5F00\u4E00\u5C42\u6570\u7EC4\uFF0C\u6839\u636E\u6DF1\u5EA6\u53C2\u6570\u5224\u65AD\u662F\u5426\u8FDB\u884C\u8FDB\u4E00\u6B65\u5C55\u5F00\uFF1B\u4E09\u662Freduce\u904D\u5386\u62FC\u63A5
 *  sort\uFF1A\u6839\u636E\u6570\u7EC4\u957F\u5EA6\u5224\u65AD\u4F7F\u7528\u54EA\u79CD\u6392\u5E8F\uFF0C\u6570\u7EC4\u957F\u5EA6\u5C0F\u4E8E10\u4F7F\u7528\u63D2\u5165\u6392\u5E8F\uFF0C\u53CD\u4E4B\u4F7F\u7528\u5FEB\u901F\u6392\u5E8F
 *  unique\uFF1A\u53BB\u91CD\uFF0C\u6709\u4E24\u79CD\u65B9\u6CD5\uFF0C\u4E00\u662F\u5FAA\u73AF\u904D\u5386\u6570\u7EC4\uFF0C\u5229\u7528indexOf\u67E5\u627E\u5143\u7D20\u4E0B\u6807\uFF0C\u5C06\u4E0B\u6807\u4E0E\u904D\u5386\u4E0B\u6807\u76F8\u540C\u7684\u5143\u7D20\u52A0\u5165\u65B0\u6570\u7EC4\u8FD4\u56DE\uFF1B\u4E8C\u662Fnew Set\u53BB\u91CD\u8FD0\u7528\u6269\u5C55\u8FD0\u7B97\u7B26\u8F6C\u4E3A\u65B0\u6570\u7EC4\u8FD4\u56DE
*/</span>


<span class="token comment">// \u5B9E\u73B0 forEach</span>
<span class="token doc-comment comment">/**
 *  \u8BED\u6CD5
      arr.forEach(callback(currentValue [, index [, array]])[, thisArg])
    \u53C2\u6570
      callback
      \u4E3A\u6570\u7EC4\u4E2D\u6BCF\u4E2A\u5143\u7D20\u6267\u884C\u7684\u51FD\u6570\uFF0C\u8BE5\u51FD\u6570\u63A5\u6536\u4E00\u81F3\u4E09\u4E2A\u53C2\u6570\uFF1A
        currentValue
          \u6570\u7EC4\u4E2D\u6B63\u5728\u5904\u7406\u7684\u5F53\u524D\u5143\u7D20\u3002
        index \u53EF\u9009
          \u6570\u7EC4\u4E2D\u6B63\u5728\u5904\u7406\u7684\u5F53\u524D\u5143\u7D20\u7684\u7D22\u5F15\u3002
        array \u53EF\u9009
          forEach() \u65B9\u6CD5\u6B63\u5728\u64CD\u4F5C\u7684\u6570\u7EC4\u3002
      thisArg \u53EF\u9009
        \u53EF\u9009\u53C2\u6570\u3002\u5F53\u6267\u884C\u56DE\u8C03\u51FD\u6570 callback \u65F6\uFF0C\u7528\u4F5C this \u7684\u503C\u3002\u4E0D\u4F20\u65F6\uFF0Cundefined\u4F1A\u4F5C\u4E3Acallback\u56DE\u8C03\u7684this
    \u8FD4\u56DE\u503C
      undefined\u3002
 */</span>
<span class="token builtin">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">myForEach</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>callback<span class="token punctuation">,</span> thisArg<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span> <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// this \u4E3A\u8C03\u7528\u7684\u6570\u7EC4</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">TypeError</span><span class="token punctuation">(</span><span class="token string">&#39;this is null or not defined&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> callback <span class="token operator">!==</span> <span class="token string">&#39;funciton&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">TypeError</span><span class="token punctuation">(</span>callback <span class="token operator">+</span> <span class="token string">&#39; is not a function&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">const</span> <span class="token constant">O</span> <span class="token operator">=</span> <span class="token function">Object</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span> <span class="token comment">//\u8F6C\u4E3A\u5BF9\u8C61\uFF0Cwhile in \u6BD4 for\u5FEB</span>
  <span class="token keyword">const</span> len <span class="token operator">=</span> <span class="token constant">O</span><span class="token punctuation">.</span>length <span class="token operator">&gt;&gt;&gt;</span> <span class="token number">0</span>
  <span class="token keyword">let</span> k <span class="token operator">=</span> <span class="token number">0</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>k <span class="token operator">&lt;</span> len<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>k <span class="token keyword">in</span> <span class="token constant">O</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">callback</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>thisArg<span class="token punctuation">,</span><span class="token constant">O</span><span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">,</span>k<span class="token punctuation">,</span><span class="token constant">O</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    k<span class="token operator">++</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">/* 
* O.length &gt;&gt;&gt; 0 \u662F\u4EC0\u4E48\u64CD\u4F5C\uFF1F\u5C31\u662F\u65E0\u7B26\u53F7\u53F3\u79FB 0 \u4F4D\uFF0C\u90A3\u6709\u4EC0\u4E48\u610F\u4E49\u561B\uFF1F
*   \u5C31\u662F\u4E3A\u4E86\u4FDD\u8BC1\u8F6C\u6362\u540E\u7684\u503C\u4E3A\u6B63\u6574\u6570\u3002
*   \u5176\u5B9E\u5E95\u5C42\u505A\u4E86 2 \u5C42\u8F6C\u6362\uFF0C\u7B2C\u4E00\u662F\u975E number \u8F6C\u6210 number \u7C7B\u578B\uFF0C\u7B2C\u4E8C\u662F\u5C06 number \u8F6C\u6210 Uint32 \u7C7B\u578B\u3002
* \u611F\u5174\u8DA3\u53EF\u4EE5\u9605\u8BFB something &gt;&gt;&gt; 0\u662F\u4EC0\u4E48\u610F\u601D?\u3002 \u53C2\u8003\u6587\u7AE0\uFF1Ahttps://link.juejin.cn/?target=https%3A%2F%2Fzhuanlan.zhihu.com%2Fp%2F100790268
*/</span>





<span class="token comment">// \u5B9E\u73B0 map</span>
<span class="token doc-comment comment">/**
 * \u7528\u8DDFforEach\u7C7B\u4F3C
 * \u4E0D\u540C\u662F\u8FD4\u56DE\u4E00\u4E2A\u7531\u539F\u6570\u7EC4\u6BCF\u4E2A\u5143\u7D20\u6267\u884C\u56DE\u8C03\u51FD\u6570\u7684\u7ED3\u679C\u7EC4\u6210\u7684\u65B0\u6570\u7EC4\u3002
 * 
 * thisArg \u6307\u5B9A\u4E86callback\u51FD\u6570this\u7684\u6307\u5411
*/</span>
<span class="token builtin">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">myMap</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>callback<span class="token punctuation">,</span>thisArg<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span> <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// this \u4E3A\u8C03\u7528\u7684\u6570\u7EC4</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">TypeError</span><span class="token punctuation">(</span><span class="token string">&#39;this is null or not defined&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> callback <span class="token operator">!==</span> <span class="token string">&#39;funciton&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">TypeError</span><span class="token punctuation">(</span>callback <span class="token operator">+</span> <span class="token string">&#39; is not a function&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">const</span> <span class="token constant">O</span> <span class="token operator">=</span> <span class="token function">Object</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
  <span class="token keyword">let</span> len <span class="token operator">=</span> <span class="token constant">O</span><span class="token punctuation">.</span>length <span class="token operator">&gt;&gt;&gt;</span> <span class="token number">0</span>
  <span class="token keyword">let</span> k <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>newArr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>k <span class="token operator">&lt;</span> len<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>k <span class="token keyword">in</span> <span class="token constant">O</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      newArr<span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">callback</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>thisArg<span class="token punctuation">,</span><span class="token constant">O</span><span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">,</span>k<span class="token punctuation">,</span><span class="token constant">O</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    k<span class="token operator">++</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> newArr
<span class="token punctuation">}</span>






<span class="token comment">// \u5B9E\u73B0 filter</span>
<span class="token doc-comment comment">/**
 * \u7528\u8DDFmap\u7C7B\u4F3C
 * \u4E0D\u540C\u662F\u8FD4\u56DE\u4E00\u4E2A\u65B0\u7684\u3001\u7531\u901A\u8FC7\u6D4B\u8BD5\u7684\u5143\u7D20\u7EC4\u6210\u7684\u6570\u7EC4\uFF0C\u5982\u679C\u6CA1\u6709\u4EFB\u4F55\u6570\u7EC4\u5143\u7D20\u901A\u8FC7\u6D4B\u8BD5\uFF0C\u5219\u8FD4\u56DE\u7A7A\u6570\u7EC4\u3002
*/</span>
<span class="token builtin">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">myFilter</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>callback<span class="token punctuation">,</span>thisArg<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span> <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// this \u4E3A\u8C03\u7528\u7684\u6570\u7EC4</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">TypeError</span><span class="token punctuation">(</span><span class="token string">&#39;this is null or not defined&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> callback <span class="token operator">!==</span> <span class="token string">&#39;funciton&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">TypeError</span><span class="token punctuation">(</span>callback <span class="token operator">+</span> <span class="token string">&#39; is not a function&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">const</span> <span class="token constant">O</span> <span class="token operator">=</span> <span class="token function">Object</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
  <span class="token keyword">let</span> len <span class="token operator">=</span> <span class="token constant">O</span><span class="token punctuation">.</span>length <span class="token operator">&gt;&gt;&gt;</span> <span class="token number">0</span>
  <span class="token keyword">let</span> k <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>newArr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>k <span class="token operator">&lt;</span> len<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>k <span class="token keyword">in</span> <span class="token constant">O</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">callback</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>thisArg<span class="token punctuation">,</span><span class="token constant">O</span><span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">,</span>k<span class="token punctuation">,</span><span class="token constant">O</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        newArr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token constant">O</span><span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    k<span class="token operator">++</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> newArr
<span class="token punctuation">}</span>





<span class="token comment">// \u5B9E\u73B0 some</span>
<span class="token doc-comment comment">/**
 * \u7528\u6CD5
 * some() \u65B9\u6CD5\u6D4B\u8BD5\u6570\u7EC4\u4E2D\u662F\u4E0D\u662F\u81F3\u5C11\u67091\u4E2A\u5143\u7D20\u901A\u8FC7\u4E86\u88AB\u63D0\u4F9B\u7684\u51FD\u6570\u6D4B\u8BD5\u3002\u5B83\u8FD4\u56DE\u7684\u662F\u4E00\u4E2ABoolean\u7C7B\u578B\u7684\u503C\u3002
 * \u7528\u8DDFforEach\u7C7B\u4F3C
 * \u4E0D\u540C\u7684\u662F\u6570\u7EC4\u4E2D\u6709\u81F3\u5C11\u4E00\u4E2A\u5143\u7D20\u901A\u8FC7\u56DE\u8C03\u51FD\u6570\u7684\u6D4B\u8BD5\u5C31\u4F1A\u8FD4\u56DEtrue\uFF1B\u6240\u6709\u5143\u7D20\u90FD\u6CA1\u6709\u901A\u8FC7\u56DE\u8C03\u51FD\u6570\u7684\u6D4B\u8BD5\u8FD4\u56DE\u503C\u624D\u4F1A\u4E3Afalse\u3002
 * 
*/</span>
<span class="token builtin">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">mySome</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>callback<span class="token punctuation">,</span>thisArg<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span> <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// this \u4E3A\u8C03\u7528\u7684\u6570\u7EC4</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">TypeError</span><span class="token punctuation">(</span><span class="token string">&#39;this is null or not defined&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> callback <span class="token operator">!==</span> <span class="token string">&#39;funciton&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">TypeError</span><span class="token punctuation">(</span>callback <span class="token operator">+</span> <span class="token string">&#39; is not a function&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">const</span> <span class="token constant">O</span> <span class="token operator">=</span> <span class="token function">Object</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
  <span class="token keyword">let</span> len <span class="token operator">=</span> <span class="token constant">O</span><span class="token punctuation">.</span>length <span class="token operator">&gt;&gt;&gt;</span> <span class="token number">0</span>
  <span class="token keyword">let</span> k <span class="token operator">=</span> <span class="token number">0</span> <span class="token punctuation">,</span>flag <span class="token operator">=</span> <span class="token boolean">false</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>k <span class="token operator">&lt;</span> len<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">callback</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>thisArg<span class="token punctuation">,</span><span class="token constant">O</span><span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">,</span>k<span class="token punctuation">,</span><span class="token constant">O</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
    k<span class="token operator">++</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>




<span class="token comment">// \u5B9E\u73B0 reduce</span>
<span class="token doc-comment comment">/**
 *  \u8BED\u6CD5
      arr.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])
    \u53C2\u6570
      callback
        \u6267\u884C\u6570\u7EC4\u4E2D\u6BCF\u4E2A\u503C (\u5982\u679C\u6CA1\u6709\u63D0\u4F9B initialValue\u5219\u7B2C\u4E00\u4E2A\u503C\u9664\u5916)\u7684\u51FD\u6570\uFF0C\u5305\u542B\u56DB\u4E2A\u53C2\u6570\uFF1A
        accumulator
          \u7D2F\u8BA1\u5668\u7D2F\u8BA1\u56DE\u8C03\u7684\u8FD4\u56DE\u503C; \u5B83\u662F\u4E0A\u4E00\u6B21\u8C03\u7528\u56DE\u8C03\u65F6\u8FD4\u56DE\u7684\u7D2F\u79EF\u503C\uFF0C\u6216initialValue\uFF08\u89C1\u4E8E\u4E0B\u65B9\uFF09\u3002
        currentValue
          \u6570\u7EC4\u4E2D\u6B63\u5728\u5904\u7406\u7684\u5143\u7D20\u3002
        index \u53EF\u9009
          \u6570\u7EC4\u4E2D\u6B63\u5728\u5904\u7406\u7684\u5F53\u524D\u5143\u7D20\u7684\u7D22\u5F15\u3002 \u5982\u679C\u63D0\u4F9B\u4E86initialValue\uFF0C\u5219\u8D77\u59CB\u7D22\u5F15\u53F7\u4E3A0\uFF0C\u5426\u5219\u4ECE\u7D22\u5F151\u8D77\u59CB\u3002
        array\u53EF\u9009
          \u8C03\u7528reduce()\u7684\u6570\u7EC4
      initialValue\u53EF\u9009
        \u4F5C\u4E3A\u7B2C\u4E00\u6B21\u8C03\u7528 callback\u51FD\u6570\u65F6\u7684\u7B2C\u4E00\u4E2A\u53C2\u6570\u7684\u503C\u3002 \u5982\u679C\u6CA1\u6709\u63D0\u4F9B\u521D\u59CB\u503C\uFF0C\u5219\u5C06\u4F7F\u7528\u6570\u7EC4\u4E2D\u7684\u7B2C\u4E00\u4E2A\u5143\u7D20\u3002 \u5728\u6CA1\u6709\u521D\u59CB\u503C\u7684\u7A7A\u6570\u7EC4\u4E0A\u8C03\u7528 reduce \u5C06\u62A5\u9519\u3002
    \u8FD4\u56DE\u503C
      \u51FD\u6570\u7D2F\u8BA1\u5904\u7406\u7684\u7ED3\u679C
 * 
*/</span>
<span class="token builtin">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">myReduce</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>callback<span class="token punctuation">,</span>initialValue<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span> <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">TypeError</span><span class="token punctuation">(</span><span class="token string">&#39;this is null or not defined&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> callback <span class="token operator">!==</span> <span class="token string">&quot;function&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">TypeError</span><span class="token punctuation">(</span>callback <span class="token operator">+</span> <span class="token string">&#39; is not a function&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">const</span> <span class="token constant">O</span> <span class="token operator">=</span> <span class="token function">Object</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> len <span class="token operator">=</span> <span class="token constant">O</span><span class="token punctuation">.</span>length <span class="token operator">&gt;&gt;&gt;</span> <span class="token number">0</span>
  <span class="token keyword">let</span> k <span class="token operator">=</span> <span class="token number">0</span> <span class="token punctuation">,</span> acc
  <span class="token keyword">if</span> <span class="token punctuation">(</span>arguments<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    acc <span class="token operator">=</span> initialValue
  <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span> <span class="token comment">//\u627E\u5230\u7B2C\u4E00\u4E2A\u4E0D\u4E3A\u7A7A\u7684\u5143\u7D20\u4E3A\u521D\u59CBacc</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>k<span class="token operator">&lt;</span>len <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span><span class="token punctuation">(</span>k <span class="token keyword">in</span> <span class="token constant">O</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
      k<span class="token operator">++</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>k <span class="token operator">&gt;</span> len<span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">TypeError</span><span class="token punctuation">(</span> <span class="token string">&#39;Reduce of empty array with no initial value&#39;</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    acc <span class="token operator">=</span> <span class="token constant">O</span><span class="token punctuation">[</span>k<span class="token operator">++</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">while</span><span class="token punctuation">(</span>k <span class="token operator">&lt;</span> len<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>k <span class="token keyword">in</span> <span class="token constant">O</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      acc <span class="token operator">=</span> <span class="token function">callback</span><span class="token punctuation">(</span>acc<span class="token punctuation">,</span><span class="token constant">O</span><span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">,</span>k<span class="token punctuation">,</span><span class="token constant">O</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    k<span class="token operator">++</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> acc
<span class="token punctuation">}</span>
<span class="token comment">// function sum(a, b, c, d) {</span>
<span class="token comment">//     console.log(a, b, c, d);</span>
<span class="token comment">//     for (let i = 0; i &lt; d.length; i++) {</span>
<span class="token comment">//         d[i] = d[i] * 2;</span>
<span class="token comment">//     }</span>
<span class="token comment">//     return a + b;</span>
<span class="token comment">// }</span>
<span class="token comment">// var result = arr.myReduce(sum, 50) </span>



<span class="token comment">// \u5B9E\u73B0 flat \u5C55\u5F00\u6570\u7EC4</span>
<span class="token doc-comment comment">/**
 *  \u8BED\u6CD5
      var newArray = arr.flat([depth])
    \u53C2\u6570
      depth \u53EF\u9009
      \u6307\u5B9A\u8981\u63D0\u53D6\u5D4C\u5957\u6570\u7EC4\u7684\u7ED3\u6784\u6DF1\u5EA6\uFF0C\u9ED8\u8BA4\u503C\u4E3A 1\u3002
    \u8FD4\u56DE\u503C
      \u4E00\u4E2A\u5305\u542B\u5C06\u6570\u7EC4\u4E0E\u5B50\u6570\u7EC4\u4E2D\u6240\u6709\u5143\u7D20\u7684\u65B0\u6570\u7EC4\u3002
  *
  *  \u603B\u7ED3\uFF1A
  *     \u65B9\u6CD5\u4E00\uFF1AforEach\u5FAA\u73AF\u5224\u65AD\u662F\u5426\u6709\u5143\u7D20\u4E3A\u6570\u7EC4\uFF0C\u4E0D\u662F\u52A0\u5165\u8FD4\u56DE\u7684\u65B0\u6570\u7EC4\uFF0C\u662F\u7684\u8BDD\u62FC\u63A5\u9012\u5F52\u8C03\u7528\u8BE5\u65B9\u6CD5\u8FD4\u56DE\u7684\u6570\u7EC4\uFF0C\u4F46\u9700\u8981\u6839\u636Edep\u6765\u5224\u65AD\u662F\u5426\u6DF1\u5165
  *     \u65B9\u6CD5\u4E8C\uFF1Awhile\u5FAA\u73AF\u5224\u65AD\u662F\u5426\u6709\u5143\u7D20\u4E3A\u6570\u7EC4\uFF0C\u662F\u76F4\u63A5\u6269\u5C55\u7B26\u62FC\u63A5\u8FC7\u6EE4\u7A7A\u7684\u6570\u7EC4\uFF0C\u6839\u636Edep\u6DF1\u5EA6\u6765\u5224\u65AD\u662F\u5426\u7EE7\u7EED\u6DF1\u5165\u6269\u5C55
  *     \u65B9\u6CD5\u4E09\uFF1Areduce\u7D2F\u52A0\u5668
  *
*/</span>
<span class="token builtin">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">myFlat_Foreach</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>dep <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token builtin">Array</span><span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> dep <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      dep<span class="token operator">--</span>
      result <span class="token operator">=</span> result<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span><span class="token function">myFlat_Foreach</span><span class="token punctuation">(</span>dep<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
      result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> result
<span class="token punctuation">}</span>
<span class="token builtin">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">myFlat_While</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>dep <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token keyword">this</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>result<span class="token punctuation">.</span><span class="token function">some</span><span class="token punctuation">(</span><span class="token builtin">Array</span><span class="token punctuation">.</span>isArray<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> dep <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token operator">...</span>result<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>item <span class="token operator">=&gt;</span> item<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">//...\u5C55\u5F00\u4E00\u5C42\uFF0C\u5E76filter\u53BB\u9664\u7A7A\u503C</span>
    dep<span class="token operator">--</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> result
<span class="token punctuation">}</span>
<span class="token builtin">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">myFlat_Reduce</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>dep <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span>acc<span class="token punctuation">,</span>item<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> acc<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>
      <span class="token builtin">Array</span><span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> dep <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">?</span>
        item<span class="token punctuation">.</span><span class="token function">myFlat_Reduce</span><span class="token punctuation">(</span><span class="token operator">--</span>dep<span class="token punctuation">)</span>  
        <span class="token operator">:</span> <span class="token builtin">Array</span><span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token comment">//\u786E\u4FDD\u5F53dep\u4E3A0\u65F6\uFF0C\u5408\u5E76\u540E\u7684\u5143\u7D20\u8FD8\u662F\u6570\u7EC4</span>
        <span class="token operator">?</span> <span class="token punctuation">[</span>item<span class="token punctuation">]</span>
        <span class="token operator">:</span> item
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">//\u7EAF\u6570\u5B57\u6570\u7EC4</span>
<span class="token builtin">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">myFlat2</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;,&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>item <span class="token operator">=&gt;</span> <span class="token function">Number</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">var</span> arr2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr2<span class="token punctuation">.</span><span class="token function">myFlat_Reduce</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 




<span class="token comment">// \u5B9E\u73B0 sort</span>
<span class="token doc-comment comment">/**
 * \u8BED\u6CD5
    arr.sort([compareFunction])
  \u53C2\u6570
    compareFunction \u53EF\u9009
      \u7528\u6765\u6307\u5B9A\u6309\u67D0\u79CD\u987A\u5E8F\u8FDB\u884C\u6392\u5217\u7684\u51FD\u6570\u3002\u5982\u679C\u7701\u7565\uFF0C\u5143\u7D20\u6309\u7167\u8F6C\u6362\u4E3A\u7684\u5B57\u7B26\u4E32\u7684\u5404\u4E2A\u5B57\u7B26\u7684Unicode\u4F4D\u70B9\u8FDB\u884C\u6392\u5E8F\u3002
      firstEl
        \u7B2C\u4E00\u4E2A\u7528\u4E8E\u6BD4\u8F83\u7684\u5143\u7D20\u3002
      secondEl
        \u7B2C\u4E8C\u4E2A\u7528\u4E8E\u6BD4\u8F83\u7684\u5143\u7D20\u3002
  \u8FD4\u56DE\u503C
    \u6392\u5E8F\u540E\u7684\u6570\u7EC4\u3002\u8BF7\u6CE8\u610F\uFF0C\u6570\u7EC4\u5DF2\u539F\u5730\u6392\u5E8F\uFF0C\u5E76\u4E14\u4E0D\u8FDB\u884C\u590D\u5236\u3002
 *
 *
 * \u603B\u7ED3\uFF1A
 *    \u6570\u7EC4sort\u6392\u5E8F\u4F7F\u7528\u4E24\u79CD\u6392\u5E8F\u65B9\u6CD5\uFF1A
 *      \u4E00\uFF1A\u5F53\u6570\u7EC4\u957F\u5EA6\u5C0F\u4E8E10\u65F6\uFF0C\u4F7F\u7528\u63D2\u5165\u6392\u5E8F\u6CD5
 *      \u4E8C\uFF1A\u5F53\u6570\u7EC4\u957F\u5EA6\u5927\u4E8E10\u65F6\uFF0C\u4F7F\u7528\u5FEB\u901F\u6392\u5E8F\u6CD5
 */</span>
<span class="token comment">//v8\u5728\u5904\u7406sort\u65B9\u6CD5\u65F6\uFF0C\u4F7F\u7528\u4E86\u63D2\u5165\u6392\u5E8F\u548C\u5FEB\u6392\u4E24\u79CD\u65B9\u6848\u3002 \u5F53\u76EE\u6807\u6570\u7EC4\u957F\u5EA6\u5C0F\u4E8E10\u65F6\uFF0C\u4F7F\u7528\u63D2\u5165\u6392\u5E8F\uFF1B\u53CD\u4E4B\uFF0C\u4F7F\u7528\u5FEB\u901F\u6392\u5E8F\u3002</span>
<span class="token builtin">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">mySort</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>callback<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span> <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// this \u4E3A\u8C03\u7528\u7684\u6570\u7EC4</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">TypeError</span><span class="token punctuation">(</span><span class="token string">&#39;this is null or not defined&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">let</span> len <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>length
  <span class="token keyword">if</span><span class="token punctuation">(</span>len <span class="token operator">&lt;=</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>len <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//\u63D2\u5165\u6392\u5E8F</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//\u63D2\u5165\u5143\u7D20\u4E0B\u6807</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> i<span class="token punctuation">;</span> j <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">;</span> j<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//\u5F53\u524D\u6700\u591A\u9700\u8981\u6BD4\u5BF9j\u6B21</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">[</span>j<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
          <span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token keyword">this</span><span class="token punctuation">[</span>j<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">[</span>j<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token keyword">this</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
          <span class="token keyword">break</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token comment">//\u5FEB\u901F\u6392\u5E8F</span>
    <span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> right <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> current <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;</span> current<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        left<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
        right<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> left<span class="token punctuation">.</span><span class="token function">mySort</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>current<span class="token punctuation">,</span>right<span class="token punctuation">.</span><span class="token function">mySort</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>




<span class="token doc-comment comment">/**
 * \u53BB\u91CD
 * \u603B\u7ED3\uFF1A
 *    \u65B9\u6CD5\u4E00\uFF1A\u4F7F\u7528\u6570\u7EC4\u8FC7\u6EE4filter\u65B9\u6CD5\uFF0C\u5982\u679C\u6709\u591A\u4E2A\u76F8\u540C\u5143\u7D20\uFF0C\u53EA\u4FDD\u7559\u6700\u524D\u9762\u7684\u5143\u7D20\uFF0C\u5373indexOf\u67E5\u5230\u7684
 *    \u65B9\u6CD5\u4E8C\uFF1A\u4F7F\u7528Set\u7C7B\u578B\u65B9\u6CD5\uFF0C\u76F4\u63A5new Set\u6570\u7EC4\uFF0C\u7136\u540E\u6269\u5C55\u6CD5...\u5C55\u5F00
*/</span>
<span class="token builtin">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">unique_es5</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span> <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// this \u4E3A\u8C03\u7528\u7684\u6570\u7EC4</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">TypeError</span><span class="token punctuation">(</span><span class="token string">&#39;this is null or not defined&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">var</span> res <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span>item<span class="token punctuation">,</span>index<span class="token punctuation">,</span>array<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> array<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token operator">===</span> index
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> res
<span class="token punctuation">}</span>
<span class="token builtin">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">unique_es6</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span> <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// this \u4E3A\u8C03\u7528\u7684\u6570\u7EC4</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">TypeError</span><span class="token punctuation">(</span><span class="token string">&#39;this is null or not defined&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),o=[e];function c(l,i){return s(),a("div",null,o)}var k=n(t,[["render",c],["__file","Array.js.html.vue"]]);export{k as default};

import{_ as n,o as s,c as a,e as t}from"./app.68e824a5.js";const e={},p=t(`<div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// Iterator \u8FED\u4EE3\u5668</span>

<span class="token doc-comment comment">/**
 * Iterator
 * Iterator \u7684\u4F5C\u7528\u6709\u4E09\u4E2A\uFF1A
 *    \u4E00\u662F\u4E3A\u5404\u79CD\u6570\u636E\u7ED3\u6784\uFF0C\u63D0\u4F9B\u4E00\u4E2A\u7EDF\u4E00\u7684\u3001\u7B80\u4FBF\u7684\u8BBF\u95EE\u63A5\u53E3\uFF1B
 *    \u4E8C\u662F\u4F7F\u5F97\u6570\u636E\u7ED3\u6784\u7684\u6210\u5458\u80FD\u591F\u6309\u67D0\u79CD\u6B21\u5E8F\u6392\u5217\uFF1B
 *    \u4E09\u662F ES6 \u521B\u9020\u4E86\u4E00\u79CD\u65B0\u7684\u904D\u5386\u547D\u4EE4for...of\u5FAA\u73AF\uFF0CIterator \u63A5\u53E3\u4E3B\u8981\u4F9Bfor...of\u6D88\u8D39\u3002
    Iterator \u7684\u904D\u5386\u8FC7\u7A0B\u662F\u8FD9\u6837\u7684\u3002
    \uFF081\uFF09\u521B\u5EFA\u4E00\u4E2A\u6307\u9488\u5BF9\u8C61\uFF0C\u6307\u5411\u5F53\u524D\u6570\u636E\u7ED3\u6784\u7684\u8D77\u59CB\u4F4D\u7F6E\u3002\u4E5F\u5C31\u662F\u8BF4\uFF0C\u904D\u5386\u5668\u5BF9\u8C61\u672C\u8D28\u4E0A\uFF0C\u5C31\u662F\u4E00\u4E2A\u6307\u9488\u5BF9\u8C61\u3002
    \uFF082\uFF09\u7B2C\u4E00\u6B21\u8C03\u7528\u6307\u9488\u5BF9\u8C61\u7684next\u65B9\u6CD5\uFF0C\u53EF\u4EE5\u5C06\u6307\u9488\u6307\u5411\u6570\u636E\u7ED3\u6784\u7684\u7B2C\u4E00\u4E2A\u6210\u5458\u3002
    \uFF083\uFF09\u7B2C\u4E8C\u6B21\u8C03\u7528\u6307\u9488\u5BF9\u8C61\u7684next\u65B9\u6CD5\uFF0C\u6307\u9488\u5C31\u6307\u5411\u6570\u636E\u7ED3\u6784\u7684\u7B2C\u4E8C\u4E2A\u6210\u5458\u3002
    \uFF084\uFF09\u4E0D\u65AD\u8C03\u7528\u6307\u9488\u5BF9\u8C61\u7684next\u65B9\u6CD5\uFF0C\u76F4\u5230\u5B83\u6307\u5411\u6570\u636E\u7ED3\u6784\u7684\u7ED3\u675F\u4F4D\u7F6E\u3002
    \u6BCF\u4E00\u6B21\u8C03\u7528next\u65B9\u6CD5\uFF0C\u90FD\u4F1A\u8FD4\u56DE\u6570\u636E\u7ED3\u6784\u7684\u5F53\u524D\u6210\u5458\u7684\u4FE1\u606F\u3002\u5177\u4F53\u6765\u8BF4\uFF0C\u5C31\u662F\u8FD4\u56DE\u4E00\u4E2A\u5305\u542Bvalue\u548Cdone\u4E24\u4E2A\u5C5E\u6027\u7684\u5BF9\u8C61\u3002\u5176\u4E2D\uFF0Cvalue\u5C5E\u6027\u662F\u5F53\u524D\u6210\u5458\u7684\u503C\uFF0Cdone\u5C5E\u6027\u662F\u4E00\u4E2A\u5E03\u5C14\u503C\uFF0C\u8868\u793A\u904D\u5386\u662F\u5426\u7ED3\u675F\u3002
 * 
 * 
 * ES6\u4E2D\u6570\u636E\u7ED3\u6784\uFF1A\u6570\u7EC4\uFF08Array\uFF09\u548C\u5BF9\u8C61\uFF08Object\uFF09\uFF0CMap\u548CSet
 * 
 * \u9664\u4E86\u5177\u6709next()\u65B9\u6CD5\uFF0C\u8FD8\u53EF\u4EE5\u5177\u6709return()\u65B9\u6CD5\u548Cthrow()\u65B9\u6CD5\u3002
 * return()\u65B9\u6CD5\u7684\u4F7F\u7528\u573A\u5408\u662F\uFF0C\u5982\u679Cfor...of\u5FAA\u73AF\u63D0\u524D\u9000\u51FA\uFF08\u901A\u5E38\u662F\u56E0\u4E3A\u51FA\u9519\uFF0C\u6216\u8005\u6709break\u8BED\u53E5\uFF09\uFF0C\u5C31\u4F1A\u8C03\u7528return()\u65B9\u6CD5\u3002\u5982\u679C\u4E00\u4E2A\u5BF9\u8C61\u5728\u5B8C\u6210\u904D\u5386\u524D\uFF0C\u9700\u8981\u6E05\u7406\u6216\u91CA\u653E\u8D44\u6E90\uFF0C\u5C31\u53EF\u4EE5\u90E8\u7F72return()\u65B9\u6CD5\u3002
 * 
 * Iterator \u548C for...of \u5FAA\u73AF
*/</span>

<span class="token comment">// \u521B\u5EFA\u4E00\u4E2A\u8FED\u4EE3\u5668</span>
<span class="token keyword">function</span> <span class="token function">makeInterator</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> nextIndex <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">next</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>nextIndex <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span> value<span class="token operator">:</span> arr<span class="token punctuation">[</span>nextIndex<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token punctuation">,</span> done<span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span> value<span class="token operator">:</span> <span class="token keyword">undefined</span> <span class="token punctuation">,</span> done<span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> it <span class="token operator">=</span> <span class="token function">makeInterator</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;c&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">//\u83B7\u53D6\u4E00\u4E2A\u8FED\u4EE3\u5668</span>
<span class="token comment">//\u624B\u52A8\u6267\u884C\u8FED\u4EE3\u5668</span>
it<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// { value: &quot;a&quot;, done: false }</span>
it<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// { value: &quot;b&quot;, done: false }</span>
it<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// { value: undefined, done: true }</span>




<span class="token comment">//\u5229\u7528 for...of... \u81EA\u52A8\u6267\u884C\u8FED\u4EE3\u5668</span>
<span class="token doc-comment comment">/**
 * ES6 \u89C4\u5B9A\uFF0C\u9ED8\u8BA4\u7684 Iterator \u63A5\u53E3\u90E8\u7F72\u5728\u6570\u636E\u7ED3\u6784\u7684Symbol.iterator\u5C5E\u6027\uFF0C
 * \u6216\u8005\u8BF4\uFF0C\u4E00\u4E2A\u6570\u636E\u7ED3\u6784\u53EA\u8981\u5177\u6709Symbol.iterator\u5C5E\u6027\uFF0C\u5C31\u53EF\u4EE5\u8BA4\u4E3A\u662F\u201C\u53EF\u904D\u5386\u7684\u201D\uFF08iterable\uFF09\u3002
 * 
 * \u539F\u751F\u5177\u5907 Iterator \u63A5\u53E3\u7684\u6570\u636E\u7ED3\u6784\u5982\u4E0B\u3002
 *      Array 
 *      Map 
 *      Set 
 *      String 
 *      TypedArray 
 *      \u51FD\u6570\u7684arguments\u5BF9\u8C61 
 *      NodeList\u5BF9\u8C61
 * 
 * *** \u6267\u884CSymbol.iterator\u5C5E\u6027\u4F1A\u8FD4\u56DE\u4E00\u4E2A\u8FED\u4EE3\u5668
 * 
*/</span>
<span class="token comment">// \u7ED9\u666E\u901A\u5BF9\u8C61 \u6DFB\u52A0\u8FED\u4EE3\u529F\u80FD\uFF0C\u9700\u81EA\u5B9A\u4E49iterator\u51FD\u6570 \uFF0C\u5373\u53EF\u4EE5 for...of... </span>
<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token string-property property">&#39;a&#39;</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token string-property property">&#39;b&#39;</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token string-property property">&#39;c&#39;</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span>Symbol<span class="token punctuation">.</span>iterator<span class="token punctuation">]</span> <span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token function-variable function">next</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
          value<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
          done<span class="token operator">:</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> item <span class="token keyword">of</span> obj<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// { value: 1, done: true }</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u5229\u7528\u6570\u7EC4Array\u7684\u8FED\u4EE3\u5668\u7ED9\u666E\u901Aobj\u6DFB\u52A0\u8FED\u4EE3\u529F\u80FD</span>
<span class="token keyword">let</span> iterable <span class="token operator">=</span> <span class="token punctuation">{</span>
  a<span class="token operator">:</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span>
  b<span class="token operator">:</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span>
  c<span class="token operator">:</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">,</span>
  length<span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span>Symbol<span class="token punctuation">.</span>iterator<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">[</span>Symbol<span class="token punctuation">.</span>iterator<span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> item <span class="token keyword">of</span> iterable<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// undefined, undefined, undefined</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u5229\u7528\u6570\u7EC4Array\u7684\u8FED\u4EE3\u5668\u7ED9 \u7C7B\u4F3C\u6570\u7EC4\u7684 \u666E\u901Aobj\u6DFB\u52A0\u8FED\u4EE3\u529F\u80FD</span>
<span class="token keyword">let</span> iterable <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token number">0</span><span class="token operator">:</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span>
  <span class="token number">1</span><span class="token operator">:</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span>
  <span class="token number">2</span><span class="token operator">:</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">,</span>
  length<span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span>Symbol<span class="token punctuation">.</span>iterator<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">[</span>Symbol<span class="token punctuation">.</span>iterator<span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> item <span class="token keyword">of</span> iterable<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &#39;a&#39;, &#39;b&#39;, &#39;c&#39;</span>
<span class="token punctuation">}</span>


<span class="token comment">// \u5176\u4ED6\u81EA\u52A8\u6267\u884C\u8FED\u4EE3\u5668\u7684\u573A\u5408</span>
  <span class="token comment">// 1\u3001\u89E3\u6784\u8D4B\u503C</span>
      <span class="token keyword">let</span> set <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&#39;b&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&#39;c&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">let</span> <span class="token punctuation">[</span>x<span class="token punctuation">,</span>y<span class="token punctuation">]</span> <span class="token operator">=</span> set<span class="token punctuation">;</span> <span class="token comment">// x=&#39;a&#39;; y=&#39;b&#39;</span>
      <span class="token keyword">let</span> <span class="token punctuation">[</span>first<span class="token punctuation">,</span> <span class="token operator">...</span>rest<span class="token punctuation">]</span> <span class="token operator">=</span> set<span class="token punctuation">;</span> <span class="token comment">// first=&#39;a&#39;; rest=[&#39;b&#39;,&#39;c&#39;];</span>
  <span class="token comment">// 2\u3001\u6269\u5C55\u8FD0\u7B97\u7B26</span>
        <span class="token comment">// \u4F8B\u4E00</span>
        <span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token string">&#39;hello&#39;</span><span class="token punctuation">;</span>
        <span class="token punctuation">[</span><span class="token operator">...</span>str<span class="token punctuation">]</span> <span class="token comment">//  [&#39;h&#39;,&#39;e&#39;,&#39;l&#39;,&#39;l&#39;,&#39;o&#39;]</span>
        <span class="token comment">// \u4F8B\u4E8C</span>
        <span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token operator">...</span>arr<span class="token punctuation">,</span> <span class="token string">&#39;d&#39;</span><span class="token punctuation">]</span>
        <span class="token comment">// [&#39;a&#39;, &#39;b&#39;, &#39;c&#39;, &#39;d&#39;]</span>
        <span class="token comment">// \u53EA\u8981\u67D0\u4E2A\u6570\u636E\u7ED3\u6784\u90E8\u7F72\u4E86 Iterator \u63A5\u53E3\uFF0C\u5C31\u53EF\u4EE5\u5BF9\u5B83\u4F7F\u7528\u6269\u5C55\u8FD0\u7B97\u7B26\uFF0C\u5C06\u5176\u8F6C\u4E3A\u6570\u7EC4\u3002</span>
        <span class="token comment">//let arr = [...iterable];</span>
  <span class="token comment">// 3\u3001yield* (\u4E0D\u4F1A\u81EA\u52A8\u6267\u884C\u5B83\u4EA7\u751F\u7684\u8FED\u4EE3\u5668)</span>
        <span class="token keyword">let</span> <span class="token function-variable function">generator</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token operator">*</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">yield</span> <span class="token number">1</span><span class="token punctuation">;</span>
          <span class="token keyword">yield</span><span class="token operator">*</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// yield*\u540E\u9762\u8DDF\u7684\u662F\u4E00\u4E2A\u53EF\u904D\u5386\u7684\u7ED3\u6784\uFF0C\u5B83\u4F1A\u8C03\u7528\u8BE5\u7ED3\u6784\u7684\u904D\u5386\u5668\u63A5\u53E3\u3002</span>
          <span class="token keyword">yield</span> <span class="token number">5</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token keyword">var</span> iterator <span class="token operator">=</span> <span class="token function">generator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u6267\u884Cyield*\u51FD\u6570\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u8FED\u4EE3\u5668</span>
        iterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// { value: 1, done: false }</span>
        iterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// { value: 2, done: false }</span>
        iterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// { value: 3, done: false }</span>
        iterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// { value: 4, done: false }</span>
        iterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// { value: 5, done: false }</span>
        iterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// { value: undefined, done: true }</span>
      <span class="token comment">//\u53EF\u5229\u7528\u5176\u4ED6\u81EA\u6267\u884C\u65B9\u6CD5\u6765\u6267\u884C\u8BE5\u8FED\u4EE3\u5668</span>
      <span class="token comment">// eg: [...iterator] \u3001 for...of...</span>

  <span class="token comment">// 4\u3001\u5176\u4ED6\u573A\u5408</span>
        <span class="token comment">// \u7531\u4E8E\u6570\u7EC4\u7684\u904D\u5386\u4F1A\u8C03\u7528\u904D\u5386\u5668\u63A5\u53E3\uFF0C\u6240\u4EE5\u4EFB\u4F55\u63A5\u53D7\u6570\u7EC4\u4F5C\u4E3A\u53C2\u6570\u7684\u573A\u5408\uFF0C\u5176\u5B9E\u90FD\u8C03\u7528\u4E86\u904D\u5386\u5668\u63A5\u53E3\u3002\u4E0B\u9762\u662F\u4E00\u4E9B\u4F8B\u5B50\u3002</span>
          <span class="token comment">// for...of</span>
          <span class="token comment">// Array.from()</span>
          <span class="token comment">// Map(), Set(), WeakMap(), WeakSet()\uFF08\u6BD4\u5982new Map([[&#39;a&#39;,1],[&#39;b&#39;,2]])\uFF09</span>
          <span class="token comment">// Promise.all()</span>
          <span class="token comment">// Promise.race()</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),o=[p];function c(l,i){return s(),a("div",null,o)}var r=n(e,[["render",c],["__file","iterator.html.vue"]]);export{r as default};

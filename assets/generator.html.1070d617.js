import{_ as n,o as s,c as a,g as t}from"./app.7b383bae.js";const p={},e=t(`<div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>
<span class="token comment">//Generator \u751F\u4EA7\u5668</span>

<span class="token doc-comment comment">/**
 * Generator\u51FD\u6570\u662F ES6 \u63D0\u4F9B\u7684\u4E00\u79CD\u5F02\u6B65\u7F16\u7A0B\u89E3\u51B3\u65B9\u6848\uFF0C\u8BED\u6CD5\u884C\u4E3A\u4E0E\u4F20\u7EDF\u51FD\u6570\u5B8C\u5168\u4E0D\u540C\u3002
 * \u6267\u884C Generator \u51FD\u6570\u4F1A\u8FD4\u56DE\u4E00\u4E2A\u904D\u5386\u5668\u5BF9\u8C61\uFF0C\u4E5F\u5C31\u662F\u8BF4\uFF0CGenerator \u51FD\u6570\u9664\u4E86\u72B6\u6001\u673A\uFF0C\u8FD8\u662F\u4E00\u4E2A\u904D\u5386\u5668\u5BF9\u8C61\u751F\u6210\u51FD\u6570\u3002
 * \u8FD4\u56DE\u7684\u904D\u5386\u5668\u5BF9\u8C61\uFF0C\u53EF\u4EE5\u4F9D\u6B21\u904D\u5386 Generator \u51FD\u6570\u5185\u90E8\u7684\u6BCF\u4E00\u4E2A\u72B6\u6001\u3002
 * \u53EA\u6709\u8C03\u7528next\u65B9\u6CD5\u624D\u4F1A\u904D\u5386\u4E0B\u4E00\u4E2A\u5185\u90E8\u72B6\u6001\uFF0C\u6240\u4EE5\u5176\u5B9E\u63D0\u4F9B\u4E86\u4E00\u79CD\u53EF\u4EE5\u6682\u505C\u6267\u884C\u7684\u51FD\u6570\u3002yield\u8868\u8FBE\u5F0F\u5C31\u662F\u6682\u505C\u6807\u5FD7\u3002
 * 
 * \u5373 Generator\u51FD\u6570 \u662F\u4E00\u4E2A\u53EF\u4EE5\u4EA7\u751F\u904D\u5386\u5668\u7684\u72B6\u6001\u673A\u3002
 *             \u6267\u884CGenerator\u51FD\u6570\u8FD4\u56DE\u4E00\u4E2A\u904D\u5386\u5668\u3002
 * 
 * \u6709\u4E24\u4E2A\u7279\u5F81\u3002
 *    \u4E00\u662F\uFF0Cfunction\u5173\u952E\u5B57\u4E0E\u51FD\u6570\u540D\u4E4B\u95F4\u6709\u4E00\u4E2A\u661F\u53F7\uFF1B
 *    \u4E8C\u662F\uFF0C\u51FD\u6570\u4F53\u5185\u90E8\u4F7F\u7528yield\u8868\u8FBE\u5F0F\uFF0C\u5B9A\u4E49\u4E0D\u540C\u7684\u5185\u90E8\u72B6\u6001\uFF08yield\u5728\u82F1\u8BED\u91CC\u7684\u610F\u601D\u5C31\u662F\u201C\u4EA7\u51FA\u201D\uFF09\u3002
 * 
 *  \u8C03\u7528 Generator \u51FD\u6570\u540E\uFF0C\u8BE5\u51FD\u6570\u5E76\u4E0D\u6267\u884C\uFF0C\u8FD4\u56DE\u7684\u4E5F\u4E0D\u662F\u51FD\u6570\u8FD0\u884C\u7ED3\u679C\uFF0C
 *  \u800C\u662F\u4E00\u4E2A\u6307\u5411\u5185\u90E8\u72B6\u6001\u7684\u6307\u9488\u5BF9\u8C61\uFF0C\u4E5F\u5C31\u662F\u4E0A\u4E00\u7AE0\u4ECB\u7ECD\u7684\u904D\u5386\u5668\u5BF9\u8C61\uFF08Iterator Object\uFF09\u3002
 * 
 * 
 * 
 * \u6CE8\u610F\uFF0Cyield\u8868\u8FBE\u5F0F\u53EA\u80FD\u7528\u5728 Generator \u51FD\u6570\u91CC\u9762\uFF0C\u7528\u5728\u5176\u4ED6\u5730\u65B9\u90FD\u4F1A\u62A5\u9519\u3002
*/</span>

<span class="token comment">// \u624B\u52A8\u6267\u884C</span>
<span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">hGenerator</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// \u5B9A\u4E49\u4E00\u4E2Agenerator\u51FD\u6570</span>
          <span class="token keyword">yield</span> <span class="token string">&#39;hello&#39;</span><span class="token punctuation">;</span> <span class="token comment">// yield \u540E\u9762\u8868\u8FBE\u5F0F\u7684\u503C\u653E \u6307\u9488\u5BF9\u8C61\u7684value\u91CC</span>
  <span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token keyword">yield</span> <span class="token string">&#39;world&#39;</span><span class="token punctuation">;</span> <span class="token comment">// yield \u672C\u8EAB\u7684\u8FD4\u56DE\u503C\u7531\u4E0A\u4E00\u4E2Anext\u7684\u53C2\u6570\u51B3\u5B9A\uFF0C\u65E0\u8FD4\u56DEundefined</span>
          <span class="token keyword">return</span> <span class="token string">&#39;ending&#39;</span><span class="token punctuation">;</span> <span class="token comment">// \u65E0yield\u540E\uFF0Cdone\u4E3Atrue\uFF1B\u5982\u679C\u6709return\uFF0Cvalue\u4E3Areturn\u540E\u9762\u7684\u503C\uFF1B\u65E0value\u4E3Aundefined</span>
<span class="token punctuation">}</span>
<span class="token keyword">var</span> hw <span class="token operator">=</span> <span class="token function">hGenerator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u8FD4\u56DE\u4E00\u4E2A\u8FED\u4EE3\u5668\uFF08\u4E00\u4E2A\u6307\u9488\u5BF9\u8C61\uFF0C\u8FD9\u4E2A\u5BF9\u8C61\u6307\u5411\u51FD\u6570\u5185\u90E8\u7684\u72B6\u6001\uFF09</span>
hw<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// { value: &#39;hello&#39;, done: false }</span>
hw<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// { value: &#39;world&#39;, done: false }</span>
hw<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// { value: &#39;ending&#39;, done: true }</span>
hw<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// { value: undefined, done: true }</span>


<span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token keyword">yield</span> <span class="token string">&#39;a11&#39;</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2 </span>
  <span class="token keyword">var</span> b <span class="token operator">=</span> <span class="token keyword">yield</span> <span class="token string">&#39;a22&#39;</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">,</span><span class="token string">&#39;b&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 3</span>
  <span class="token keyword">var</span> c <span class="token operator">=</span> <span class="token keyword">yield</span> <span class="token string">&#39;a33&#39;</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>c<span class="token punctuation">,</span><span class="token string">&#39;c&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 4</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> g <span class="token operator">=</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
g<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>  <span class="token comment">//\u542F\u52A8\u8FED\u4EE3\u5668\uFF0C\u8FD4\u56DE\u72B6\u6001 { value: &#39;a11&#39;, done: false }</span>
g<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>  <span class="token comment">//\u6307\u9488\u6307\u5411a22\uFF0C\u6267\u884C\uFF0C\u6B64next\u7684\u53C2\u6570\u5F53\u505A\u662F\u7B2C\u4E00\u4E2Ayield\u7684\u503C\uFF0C\u5373a = 2\uFF0C\u8FD4\u56DE\u72B6\u6001 { value: &#39;a22&#39;, done: false }</span>
g<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>  <span class="token comment">//\u6307\u9488\u6307\u5411a33\uFF0C\u6267\u884C\uFF0C\u6B64next\u7684\u53C2\u6570\u5F53\u505A\u662F\u7B2C\u4E8C\u4E2Ayield\u7684\u503C\uFF0C\u5373b = 3\uFF0C\u8FD4\u56DE\u72B6\u6001 { value: &#39;a33&#39;, done: false }</span>
g<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span>  <span class="token comment">//\u6307\u9488\u6307\u5411null\uFF0C\u6B64next\u7684\u53C2\u6570\u5F53\u505A\u662F\u7B2C\u4E09\u4E2Ayield\u7684\u503C\uFF0C\u5373c = 4\uFF0C\u8FD4\u56DE\u72B6\u6001 { value: undefined, done: true }</span>

<span class="token comment">// 1.\u5F53\u6267\u884C\u7B2C\u4E00\u4E2Anext\uFF0C\u542F\u52A8\u8FED\u4EE3\u5668\uFF0C\u9047\u5230yield\u6682\u505C\u51FD\u6570\u6267\u884C\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u6307\u9488\u5BF9\u8C61\uFF0C\u6307\u9488\u6307\u5411\u7B2C\u4E00\u4E2Ayield\u540E\u9762\u7684\u4EE3\u7801\uFF0C\u6267\u884C\u5176\u4EE3\u7801\uFF0C\u8FD4\u56DE\u5F53\u524D\u72B6\u6001\u5BF9\u8C61\uFF0C</span>
<span class="token comment">// 2.\u5F53\u6267\u884Cnext\uFF0C\u9047\u5230\u4E0B\u4E00\u4E2Ayield\uFF0C\u6682\u505C\u6267\u884C\uFF0C\u6307\u9488\u6307\u5411\u7B2C\u4E8C\u4E2Ayield\u540E\u9762\u7684\u4EE3\u7801\uFF0C\u6267\u884C\u5176\u4EE3\u7801\uFF0C\u8FD4\u56DE\u5F53\u524D\u72B6\u6001\u5BF9\u8C61\uFF0C\u7B2C\u4E00\u4E2Ayield\u7684\u503C\u4E3A\u8FD9\u4E2Anext\u7684\u53C2\u6570</span>
<span class="token comment">// 3.\u5982\u679C\u6CA1\u6709yield\u4E86\uFF0C\u76F4\u63A5\u6267\u884C\u5230\u4EE3\u7801\u7ED3\u675F\u6216\u9047\u5230return\uFF0C\u5C06return\u540E\u9762\u7684\u503C\u4F5C\u4E3A\u8FD4\u56DE\u5BF9\u8C61\u7684value\u503C</span>
<span class="token comment">// 4.\u5982\u679C\u6CA1\u6709return\uFF0C\u5219\u8FD4\u56DE\u7684value\u4E3Aundefined</span>


<span class="token comment">//Generator \u51FD\u6570\u53EF\u4EE5\u4E0D\u7528yield\u8868\u8FBE\u5F0F\uFF0C\u8FD9\u65F6\u5C31\u53D8\u6210\u4E86\u4E00\u4E2A\u5355\u7EAF\u7684\u6682\u7F13\u6267\u884C\u51FD\u6570\u3002</span>
<span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u6267\u884C\u4E86&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">var</span> generator <span class="token operator">=</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  generator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//\u6CE8\u610F: yield\u8868\u8FBE\u5F0F\u5982\u679C\u7528\u5728\u53E6\u4E00\u4E2A\u8868\u8FBE\u5F0F\u4E4B\u4E2D\uFF0C\u5FC5\u987B\u653E\u5728\u5706\u62EC\u53F7\u91CC\u9762\u3002</span>
<span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">demo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Hello&#39;</span> <span class="token operator">+</span> <span class="token keyword">yield</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// SyntaxError</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Hello&#39;</span> <span class="token operator">+</span> <span class="token keyword">yield</span> <span class="token number">123</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// SyntaxError</span>

  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Hello&#39;</span> <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token keyword">yield</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// OK</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Hello&#39;</span> <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token keyword">yield</span> <span class="token number">123</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// OK</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * \u4E0E interator \u7684\u5173\u7CFB
 * \u6267\u884Cgenerator \u8FD4\u56DE\u4E00\u4E2A interator\u8FED\u4EE3\u5668\uFF0C\u5373\u8DDF Symbol.iterator\u7528\u6CD5\u4E00\u6837
 * */</span> 
 <span class="token keyword">var</span> myIterable <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
 myIterable<span class="token punctuation">[</span>Symbol<span class="token punctuation">.</span>iterator<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token operator">*</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">yield</span> <span class="token number">1</span><span class="token punctuation">;</span>
   <span class="token keyword">yield</span> <span class="token number">2</span><span class="token punctuation">;</span>
   <span class="token keyword">yield</span> <span class="token number">3</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span><span class="token punctuation">;</span>
 <span class="token punctuation">[</span><span class="token operator">...</span>myIterable<span class="token punctuation">]</span> <span class="token comment">// [1, 2, 3]</span>
 <span class="token comment">//\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0CGenerator \u51FD\u6570\u8D4B\u503C\u7ED9Symbol.iterator\u5C5E\u6027\uFF0C\u4ECE\u800C\u4F7F\u5F97myIterable\u5BF9\u8C61\u5177\u6709\u4E86 Iterator \u63A5\u53E3\uFF0C\u53EF\u4EE5\u88AB...\u8FD0\u7B97\u7B26\u904D\u5386\u4E86\u3002</span>

<span class="token doc-comment comment">/**
* yield\u8868\u8FBE\u5F0F\u672C\u8EAB\u6CA1\u6709\u8FD4\u56DE\u503C\uFF0C\u6216\u8005\u8BF4\u603B\u662F\u8FD4\u56DEundefined\u3002
* next\u65B9\u6CD5\u53EF\u4EE5\u5E26\u4E00\u4E2A\u53C2\u6570\uFF0C\u8BE5\u53C2\u6570\u5C31\u4F1A\u88AB\u5F53\u4F5C\u4E0A\u4E00\u4E2Ayield\u8868\u8FBE\u5F0F\u7684\u8FD4\u56DE\u503C\u3002
*/</span>
<span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token boolean">true</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// yield\u8868\u8FBE\u5F0F\u672C\u8EAB\u6CA1\u6709\u8FD4\u56DE\u503C\uFF0C\u6216\u8005\u8BF4\u603B\u662F\u8FD4\u56DEundefined\u3002next\u624D\u4F1A\u8FD4\u56DE\u72B6\u6001\u5BF9\u8C61\u3002</span>
    <span class="token comment">// \u8981\u60F3yield\u8FD4\u56DE\u503C\uFF0C\u53EF\u4EE5\u5728next\u51FD\u6570\u4F20\u53C2\uFF0C\u8FD9\u4E2A\u53C2\u6570\u4F1A\u662Fyeild\u7684\u8FD4\u56DE\u503C</span>
    <span class="token keyword">var</span> reset <span class="token operator">=</span> <span class="token keyword">yield</span> i<span class="token punctuation">;</span> 
    <span class="token keyword">if</span><span class="token punctuation">(</span>reset<span class="token punctuation">)</span> <span class="token punctuation">{</span> i <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">var</span> g <span class="token operator">=</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
g<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// { value: 0, done: false }</span>
g<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// { value: 1, done: false }</span>
g<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token comment">// { value: 0, done: false }</span>


<span class="token doc-comment comment">/**
 * for...of...
 * Array.from 
 * ...\u6269\u5C55\u8FD0\u7B97\u7B26
 * \u7B49\u7B49
 * \u5F53generator\u4F5C\u4E3A\u4ED6\u4EEC\u7684\u8FED\u4EE3\u5668\u65F6\uFF0C\u80FD\u591F\u81EA\u52A8\u6267\u884Cgenerator\u8FD4\u56DE\u7684\u8FD9\u4E2A\u8FED\u4EE3\u5668
*/</span>

<span class="token comment">// \u81EA\u52A8\u6267\u884C yield*</span>
<span class="token doc-comment comment">/**
 * \u5982\u679C\u5728 Generator \u51FD\u6570\u5185\u90E8\uFF0C\u8C03\u7528\u53E6\u4E00\u4E2A Generator \u51FD\u6570\u3002\u9700\u8981\u5728\u524D\u8005\u7684\u51FD\u6570\u4F53\u5185\u90E8\uFF0C\u81EA\u5DF1\u624B\u52A8\u5B8C\u6210\u904D\u5386\u3002
 * 
 * \u4E3A\u4E86\u89E3\u51B3\u624B\u52A8\u904D\u5386\u7684\u95EE\u9898\uFF0C yield* \u51FA\u73B0\u4E86
 *        \u5B9E\u9645\u4E0A\uFF0C\u4EFB\u4F55\u6570\u636E\u7ED3\u6784\u53EA\u8981\u6709 Iterator \u63A5\u53E3\uFF0C\u5C31\u53EF\u4EE5\u88AByield*\u904D\u5386\u3002
 * 
 * \u5982\u679C\u88AB\u4EE3\u7406\u7684 Generator \u51FD\u6570\u6709return\u8BED\u53E5\uFF0C\u90A3\u4E48\u5C31\u53EF\u4EE5\u5411\u4EE3\u7406\u5B83\u7684 Generator \u51FD\u6570\u8FD4\u56DE\u6570\u636E\u3002
 * 
*/</span>
<span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">iter1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
  <span class="token keyword">yield</span> <span class="token string">&#39;11&#39;</span><span class="token punctuation">;</span> 
  <span class="token keyword">return</span> <span class="token string">&#39;22&#39;</span><span class="token punctuation">;</span> 
<span class="token punctuation">}</span>
<span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">iter2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
  <span class="token keyword">yield</span> <span class="token string">&#39;33&#39;</span><span class="token punctuation">;</span> 
  <span class="token keyword">yield</span> <span class="token string">&#39;44&#39;</span><span class="token punctuation">;</span> 
<span class="token punctuation">}</span>
<span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">concat</span><span class="token punctuation">(</span>iter1<span class="token punctuation">,</span> iter2<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// iter1, iter2 \u90FD\u662Fgenerator\u51FD\u6570</span>
  <span class="token keyword">var</span> result <span class="token operator">=</span>  <span class="token keyword">yield</span><span class="token operator">*</span> <span class="token function">iter1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// iter1\u51FD\u6570\u91CC\u6709retrun\u8FD4\u56DE\u503C\uFF0Cresult\u80FD\u83B7\u53D6\u5230\u8FD4\u56DE\u503C</span>
                <span class="token keyword">yield</span><span class="token operator">*</span> <span class="token function">iter2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">var</span> objects <span class="token operator">=</span> <span class="token function">concat</span><span class="token punctuation">(</span>iter1<span class="token punctuation">,</span> iter2<span class="token punctuation">)</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> i <span class="token keyword">of</span> objects<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u7B49\u540C\u4E8E</span>
<span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">concat</span><span class="token punctuation">(</span>iter1<span class="token punctuation">,</span> iter2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> value <span class="token keyword">of</span> iter1<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">yield</span> value<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> value <span class="token keyword">of</span> iter2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">yield</span> value<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token doc-comment comment">/**
 * Generator \u51FD\u6570\u7684this 
 * Generator \u51FD\u6570\u603B\u662F\u8FD4\u56DE\u4E00\u4E2A\u904D\u5386\u5668\uFF0C
 * ES6 \u89C4\u5B9A\u8FD9\u4E2A\u904D\u5386\u5668\u662F Generator \u51FD\u6570\u7684\u5B9E\u4F8B\uFF0C\u4E5F\u7EE7\u627F\u4E86 Generator \u51FD\u6570\u7684prototype\u5BF9\u8C61\u4E0A\u7684\u65B9\u6CD5\u3002
 * 
 * Generator \u51FD\u6570\u4E5F\u4E0D\u80FD\u8DDFnew\u547D\u4EE4\u4E00\u8D77\u7528\uFF0C\u4F1A\u62A5\u9519\u3002
 * new\u547D\u4EE4\u8DDF\u6784\u9020\u51FD\u6570F\u4E00\u8D77\u4F7F\u7528\uFF0C\u7ED3\u679C\u62A5\u9519\uFF0C\u56E0\u4E3AF\u4E0D\u662F\u6784\u9020\u51FD\u6570\u3002
*/</span>
<span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">g</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
g<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">hello</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token string">&#39;hi!&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token function">g</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
obj <span class="token keyword">instanceof</span> <span class="token class-name">g</span> <span class="token comment">// true</span>
obj<span class="token punctuation">.</span><span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// &#39;hi!&#39;</span>




<span class="token comment">// \u8FD0\u884C\u539F\u7406 : \u9047\u5230yield\uFF0Cgen\u51FD\u6570\u9000\u51FA\u6808\uFF0C\u4F46\u4E0D\u6D88\u5931\uFF0C\u4FDD\u7559\u4E86\u5F53\u524D\u72B6\u6001</span>
<span class="token comment">// Generator \u4E0E\u4E0A\u4E0B\u6587</span>
<span class="token doc-comment comment">/**
 * 
  JavaScript \u4EE3\u7801\u8FD0\u884C\u65F6\uFF0C\u4F1A\u4EA7\u751F\u4E00\u4E2A\u5168\u5C40\u7684\u4E0A\u4E0B\u6587\u73AF\u5883\uFF08context\uFF0C\u53C8\u79F0\u8FD0\u884C\u73AF\u5883\uFF09\uFF0C\u5305\u542B\u4E86\u5F53\u524D\u6240\u6709\u7684\u53D8\u91CF\u548C\u5BF9\u8C61\u3002
  \u7136\u540E\uFF0C\u6267\u884C\u51FD\u6570\uFF08\u6216\u5757\u7EA7\u4EE3\u7801\uFF09\u7684\u65F6\u5019\uFF0C\u53C8\u4F1A\u5728\u5F53\u524D\u4E0A\u4E0B\u6587\u73AF\u5883\u7684\u4E0A\u5C42\uFF0C\u4EA7\u751F\u4E00\u4E2A\u51FD\u6570\u8FD0\u884C\u7684\u4E0A\u4E0B\u6587\uFF0C\u53D8\u6210\u5F53\u524D\uFF08active\uFF09\u7684\u4E0A\u4E0B\u6587\uFF0C
  \u7531\u6B64\u5F62\u6210\u4E00\u4E2A\u4E0A\u4E0B\u6587\u73AF\u5883\u7684\u5806\u6808\uFF08context stack\uFF09\u3002
  \u8FD9\u4E2A\u5806\u6808\u662F\u201C\u540E\u8FDB\u5148\u51FA\u201D\u7684\u6570\u636E\u7ED3\u6784\uFF0C\u6700\u540E\u4EA7\u751F\u7684\u4E0A\u4E0B\u6587\u73AF\u5883\u9996\u5148\u6267\u884C\u5B8C\u6210\uFF0C\u9000\u51FA\u5806\u6808\uFF0C
  \u7136\u540E\u518D\u6267\u884C\u5B8C\u6210\u5B83\u4E0B\u5C42\u7684\u4E0A\u4E0B\u6587\uFF0C\u76F4\u81F3\u6240\u6709\u4EE3\u7801\u6267\u884C\u5B8C\u6210\uFF0C\u5806\u6808\u6E05\u7A7A\u3002

  Generator \u51FD\u6570\u4E0D\u662F\u8FD9\u6837\uFF0C\u5B83\u6267\u884C\u4EA7\u751F\u7684\u4E0A\u4E0B\u6587\u73AF\u5883\uFF0C\u4E00\u65E6\u9047\u5230yield\u547D\u4EE4\uFF0C\u5C31\u4F1A\u6682\u65F6\u9000\u51FA\u5806\u6808\uFF0C
  \u4F46\u662F\u5E76\u4E0D\u6D88\u5931\uFF0C\u91CC\u9762\u7684\u6240\u6709\u53D8\u91CF\u548C\u5BF9\u8C61\u4F1A\u51BB\u7ED3\u5728\u5F53\u524D\u72B6\u6001\u3002\u7B49\u5230\u5BF9\u5B83\u6267\u884Cnext\u547D\u4EE4\u65F6\uFF0C
  \u8FD9\u4E2A\u4E0A\u4E0B\u6587\u73AF\u5883\u53C8\u4F1A\u91CD\u65B0\u52A0\u5165\u8C03\u7528\u6808\uFF0C\u51BB\u7ED3\u7684\u53D8\u91CF\u548C\u5BF9\u8C61\u6062\u590D\u6267\u884C\u3002
    function* gen() <span class="token punctuation">{</span>
      console.log(&#39;object&#39;);
      yield console.log(&#39;yield 1 \u53F3\u4EE3\u7801&#39;);1+1;
      yield console.log(&#39;yield 2 \u53F3\u4EE3\u7801&#39;);2+2; 
    <span class="token punctuation">}</span>
    let g = gen();
    console.log(
      g.next(),
      g.next(),
      g.next(),
    );
  \u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0Clet g = gen()\u5E76\u4E0D\u6267\u884Cgen\u51FD\u6570\uFF0C
  \u5F53\u6267\u884C\u7B2C\u4E00\u4E2Ag.next()\u65F6\uFF0CGenerator \u51FD\u6570gen\u7684\u4E0A\u4E0B\u6587\u4F1A\u52A0\u5165\u5806\u6808\uFF0C\u5373\u5F00\u59CB\u8FD0\u884Cgen\u5185\u90E8\u7684\u4EE3\u7801
    \u7B49\u9047\u5230yield 1\u65F6\uFF0C\u5148\u6267\u884C\u5176\u53F3\u8FB9\u7B2C\u4E00\u4E2A\u8868\u8FBE\u5F0F\uFF0C\u5C06\u7ED3\u679C\u5B58\u5165\u72B6\u6001value\u4E2D\uFF0C\u518D\u5C06gen\u4E0A\u4E0B\u6587\u9000\u51FA\u5806\u6808\uFF0C\u5185\u90E8\u72B6\u6001\u51BB\u7ED3\uFF0C\u8FD4\u56DE\u72B6\u6001<span class="token punctuation">{</span>value: 1, done: false<span class="token punctuation">}</span>\u3002
  \u7B2C\u4E8C\u6B21\u6267\u884Cg.next()\u65F6\uFF0Cgen\u4E0A\u4E0B\u6587\u91CD\u65B0\u52A0\u5165\u5806\u6808\uFF0C\u53D8\u6210\u5F53\u524D\u7684\u4E0A\u4E0B\u6587\uFF0C\u91CD\u65B0\u6062\u590D\u6267\u884C\uFF0C
    \u7B49\u9047\u5230yield 2\u65F6\uFF0C\u5148\u6267\u884C\u5176\u53F3\u8FB9\u7B2C\u4E00\u4E2A\u8868\u8FBE\u5F0F\uFF0C\u5C06\u7ED3\u679C\u5B58\u5165\u72B6\u6001value\u4E2D\uFF0C\u518D\u5C06gen\u4E0A\u4E0B\u6587\u9000\u51FA\u5806\u6808\uFF0C\u5185\u90E8\u72B6\u6001\u51BB\u7ED3\uFF0C\u8FD4\u56DE\u72B6\u6001<span class="token punctuation">{</span>value: 2, done: false<span class="token punctuation">}</span>\u3002
  \u7B2C\u4E09\u6B21\u6267\u884Cg.next()\u65F6\uFF0Cgen\u4E0A\u4E0B\u6587\u91CD\u65B0\u52A0\u5165\u5806\u6808\uFF0C\u53D8\u6210\u5F53\u524D\u7684\u4E0A\u4E0B\u6587\uFF0C\u91CD\u65B0\u6062\u590D\u6267\u884C\uFF0C
    \u6CA1\u9047\u5230yield\u65F6\uFF0C\u5C06\u7ED3\u679Cundefined\u5B58\u5165\u72B6\u6001value\u4E2D,\u518D\u5C06gen\u4E0A\u4E0B\u6587\u9000\u51FA\u5806\u6808\uFF0C\u5185\u90E8\u72B6\u6001\u51BB\u7ED3\uFF0C\u8FD4\u56DE\u72B6\u6001<span class="token punctuation">{</span>value: undefined, done: true<span class="token punctuation">}</span>\u3002
* 
*/</span>
<span class="token keyword">function</span> <span class="token function">fn1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;fn1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token number">1</span><span class="token operator">+</span><span class="token number">1</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">fn2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;fn2&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token number">2</span><span class="token operator">+</span><span class="token number">2</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">gen</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;object&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">yield</span> <span class="token function">fn1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;yield 1 \u53F3\u4EE3\u7801&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">yield</span> <span class="token function">fn2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;yield 2 \u53F3\u4EE3\u7801&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> g <span class="token operator">=</span> <span class="token function">gen</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>g<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// console.log(g.next())</span>
<span class="token comment">// console.log(g.next())</span>




<span class="token comment">//\u5E94\u7528</span>
  <span class="token comment">// Generator \u4E0E\u72B6\u6001\u673A</span>
    <span class="token comment">// Generator \u662F\u5B9E\u73B0\u72B6\u6001\u673A\u7684\u6700\u4F73\u7ED3\u6784\u3002\u6BD4\u5982\uFF0C\u4E0B\u9762\u7684clock\u51FD\u6570\u5C31\u662F\u4E00\u4E2A\u72B6\u6001\u673A\u3002</span>
      <span class="token comment">//es5</span>
      <span class="token keyword">var</span> ticking <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
      <span class="token keyword">var</span> <span class="token function-variable function">clock</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>ticking<span class="token punctuation">)</span>
          <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Tick!&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">else</span>
          <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Tock!&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        ticking <span class="token operator">=</span> <span class="token operator">!</span>ticking<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token comment">//es6</span>
      <span class="token keyword">var</span> <span class="token function-variable function">clock</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token operator">*</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Tick!&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token keyword">yield</span><span class="token punctuation">;</span>
          <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Tock!&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token keyword">yield</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
      <span class="token comment">//\u51CF\u5C11\u4E86\u5916\u90E8\u53D8\u91CF\u6765\u7EF4\u62A4\u72B6\u6001</span>

  <span class="token comment">// Ajax\u5F02\u6B65\u8BF7\u6C42\u540C\u6B65\u5316</span>
    <span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">var</span> result <span class="token operator">=</span> <span class="token keyword">yield</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token string">&quot;http://some.url&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">var</span> resp <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u8FD4\u56DE\u7ED3\u679C\u540E\u5728\u6267\u884C\u540E\u9762\u7684\u4EE3\u7801</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>resp<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">function</span> <span class="token function">request</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">makeAjaxCall</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span>response<span class="token punctuation">)</span><span class="token punctuation">{</span>
        it<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span>response<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u8FD4\u56DE\u7ED3\u679C\u540E\u5728\u6267\u884C\u540E\u9762\u7684\u4EE3\u7801</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">var</span> it <span class="token operator">=</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    it<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">//\u901A\u8FC7 Generator \u51FD\u6570\u9010\u884C\u8BFB\u53D6\u6587\u672C\u6587\u4EF6\u3002</span>
    <span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">numbers</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> file <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileReader</span><span class="token punctuation">(</span><span class="token string">&quot;numbers.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token operator">!</span>file<span class="token punctuation">.</span>eof<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">yield</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>file<span class="token punctuation">.</span><span class="token function">readLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
        file<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  
  <span class="token comment">// \u63A7\u5236\u6D41\u7BA1\u7406</span>
    <span class="token comment">//\u5982\u679C\u6709\u4E00\u4E2A\u591A\u6B65\u64CD\u4F5C\u975E\u5E38\u8017\u65F6\uFF0C\u91C7\u7528\u56DE\u8C03\u51FD\u6570\uFF0C\u53EF\u80FD\u4F1A\u5199\u6210\u4E0B\u9762\u8FD9\u6837\u3002</span>
      <span class="token function">step1</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span>value1<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">step2</span><span class="token punctuation">(</span>value1<span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span>value2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">step3</span><span class="token punctuation">(</span>value2<span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span>value3<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">step4</span><span class="token punctuation">(</span>value3<span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span>value4<span class="token punctuation">)</span> <span class="token punctuation">{</span>
              <span class="token comment">// Do something with value4</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// \u4F7F\u7528promise\u53EF\u4EE5\u5B9E\u73B0\u5728then\u91CC\u56DE\u8C03\uFF0C\u867D\u7136\u53EF\u4EE5\u81EA\u52A8\u6309\u987A\u5E8F\u6267\u884C\uFF0C\u4F46\u4F1A\u6709\u592A\u591A\u7684promise\u7684\u8BED\u6CD5\uFF0C\u6BCF\u4E00\u6B65\u90FD\u8981\u4F20\u5165resolve\u3001reject\u7B49</span>
      <span class="token builtin">Promise</span><span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>step1<span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>step2<span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>step3<span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>step4<span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span>value4<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token comment">// Do something with value4</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token comment">// Handle any error from step1 through step4</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">done</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// \u5229\u7528yield *\uFF0C\u867D\u7136\u5BA2\u89C2\u4EE3\u7801\u6574\u6D01\uFF0C\u4F46\u662F\u4E0D\u80FD\u81EA\u52A8\u6267\u884C\uFF0C\u9700\u8981\u624B\u52A8next</span>
      <span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">longRunningTask</span><span class="token punctuation">(</span>value1<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
          <span class="token keyword">var</span> value2 <span class="token operator">=</span> <span class="token keyword">yield</span> <span class="token function">step1</span><span class="token punctuation">(</span>value1<span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token keyword">var</span> value3 <span class="token operator">=</span> <span class="token keyword">yield</span> <span class="token function">step2</span><span class="token punctuation">(</span>value2<span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token keyword">var</span> value4 <span class="token operator">=</span> <span class="token keyword">yield</span> <span class="token function">step3</span><span class="token punctuation">(</span>value3<span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token keyword">var</span> value5 <span class="token operator">=</span> <span class="token keyword">yield</span> <span class="token function">step4</span><span class="token punctuation">(</span>value4<span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token comment">// Do something with value4</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token comment">// Handle any error from step1 through step4</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      <span class="token comment">//\u4F46\u662F\u53EF\u4EE5\u5B9E\u73B0\u4E00\u4E2A\u81EA\u52A8\u6267\u884C\u5668\uFF0C\u6765\u81EA\u52A8\u6267\u884C\u4E0A\u9762\u7684yield\u4EE3\u7801\uFF0C\u6838\u5FC3\u601D\u60F3\u662F\u9012\u5F52\u6267\u884Cnext</span>
      <span class="token comment">// \u4EC5\u9002\u7528\u4E8E\u540C\u6B65task\uFF0C\u56E0\u4E3A\u83B7\u53D6\u5230value\u5C31\u8FD4\u56DE\uFF0C\u6CA1\u5224\u65AD\u4EC0\u4E48\u65F6\u5019\u7ED3\u675F</span>
      <span class="token function">scheduler</span><span class="token punctuation">(</span><span class="token function">longRunningTask</span><span class="token punctuation">(</span>initialValue<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">function</span> <span class="token function">scheduler</span><span class="token punctuation">(</span>task<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">var</span> taskObj <span class="token operator">=</span> task<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span>task<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u540C\u6B65\u8C03\u7528next\uFF0C\u4E0D\u662F\u7B49\u5F85\u4E0A\u4E00\u4E2A\u5F02\u6B65\u5B8C\u6210\u624D\u8C03\u7528\uFF0C\u8FBE\u4E0D\u5230\u5F02\u6B65\u6548\u679C</span>
        <span class="token comment">// \u5982\u679CGenerator\u51FD\u6570\u672A\u7ED3\u675F\uFF0C\u5C31\u7EE7\u7EED\u8C03\u7528</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>taskObj<span class="token punctuation">.</span>done<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          task<span class="token punctuation">.</span>value <span class="token operator">=</span> taskObj<span class="token punctuation">.</span>value
          <span class="token function">scheduler</span><span class="token punctuation">(</span>task<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),o=[e];function c(l,i){return s(),a("div",null,o)}var k=n(p,[["render",c],["__file","generator.html.vue"]]);export{k as default};

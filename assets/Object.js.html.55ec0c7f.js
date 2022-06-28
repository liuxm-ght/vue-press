import{_ as n,o as s,c as a,f as e}from"./app.2eaca68b.js";const t={},p=e(`<div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * \u603B\u7ED3:
 *    Create: \u65B0\u6784\u9020\u51FD\u6570\u521B\u5EFA\u65B0\u5BF9\u8C61\uFF0C\u539F\u578B\u94FE\u6307\u5411\u7B2C\u4E00\u4E2A\u53C2\u6570\uFF1B\u7B2C\u4E8C\u4E2A\u53C2\u6570\u4E3A\u5BF9\u5BF9\u8C61\u7684\u4E00\u4E9B\u63CF\u8FF0\uFF0C\u662F\u5426\u53EF\u679A\u4E3E\u7B49
 *    Assign: \u904D\u5386\u5408\u5E76\u65B0\u65E7\u5BF9\u8C61
 * 
*/</span>


<span class="token comment">// \u5B9E\u73B0 Object.create</span>
<span class="token doc-comment comment">/**
 *  \u8BED\u6CD5
      Object.create(proto\uFF0C[propertiesObject])
    \u53C2\u6570
      proto
        \u65B0\u521B\u5EFA\u5BF9\u8C61\u7684\u539F\u578B\u5BF9\u8C61\u3002
      propertiesObject
        \u53EF\u9009\u3002\u9700\u8981\u4F20\u5165\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u8BE5\u5BF9\u8C61\u7684\u5C5E\u6027\u7C7B\u578B\u53C2\u7167Object.defineProperties()\u7684\u7B2C\u4E8C\u4E2A\u53C2\u6570\u3002
        \u5982\u679C\u8BE5\u53C2\u6570\u88AB\u6307\u5B9A\u4E14\u4E0D\u4E3A undefined\uFF0C\u8BE5\u4F20\u5165\u5BF9\u8C61\u7684\u81EA\u6709\u53EF\u679A\u4E3E\u5C5E\u6027(\u5373\u5176\u81EA\u8EAB\u5B9A\u4E49\u7684\u5C5E\u6027\uFF0C
        \u800C\u4E0D\u662F\u5176\u539F\u578B\u94FE\u4E0A\u7684\u679A\u4E3E\u5C5E\u6027)\u5C06\u4E3A\u65B0\u521B\u5EFA\u7684\u5BF9\u8C61\u6DFB\u52A0\u6307\u5B9A\u7684\u5C5E\u6027\u503C\u548C\u5BF9\u5E94\u7684\u5C5E\u6027\u63CF\u8FF0\u7B26\u3002
 * 
*/</span>
Object<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">myCreate</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>proto<span class="token punctuation">,</span>propertyObject <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> proto <span class="token operator">!==</span> <span class="token string">&#39;object&#39;</span> <span class="token operator">&amp;&amp;</span> <span class="token keyword">typeof</span> proto <span class="token operator">!==</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">TypeError</span><span class="token punctuation">(</span><span class="token string">&#39;Object prototype may only be an Object or null.&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>propertyObject <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">new</span> <span class="token class-name">TypeError</span><span class="token punctuation">(</span><span class="token string">&#39;Cannot convert undefined or null to object&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">function</span> <span class="token constant">F</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token constant">F</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> proto
  <span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token constant">F</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>propertyObject <span class="token operator">!=</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span>propertyObject<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>proto <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u521B\u5EFA\u4E00\u4E2A\u6CA1\u6709\u539F\u578B\u5BF9\u8C61\u7684\u5BF9\u8C61\uFF0CObject.create(null)</span>
    <span class="token comment">// obj.__proto__ = null</span>
    Object<span class="token punctuation">.</span><span class="token function">setPrototypeOf</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span><span class="token keyword">null</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> obj
<span class="token punctuation">}</span>



<span class="token comment">// \u5B9E\u73B0 Object.assign</span>
<span class="token doc-comment comment">/**
 * Object.assign() \u65B9\u6CD5\u7528\u4E8E\u5C06\u6240\u6709\u53EF\u679A\u4E3E\u5C5E\u6027\u7684\u503C\u4ECE\u4E00\u4E2A\u6216\u591A\u4E2A\u6E90\u5BF9\u8C61\u5206\u914D\u5230\u76EE\u6807\u5BF9\u8C61\u3002\u5B83\u5C06\u8FD4\u56DE\u76EE\u6807\u5BF9\u8C61\u3002
 *  \u8BED\u6CD5
      Object.assign(target, ...sources)
    \u53C2\u6570
      target
        \u76EE\u6807\u5BF9\u8C61\u3002
      sources
        \u6E90\u5BF9\u8C61\u3002
      \u8FD4\u56DE\u503C
        \u76EE\u6807\u5BF9\u8C61\u3002
*/</span>
Object<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">myAssign</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span><span class="token operator">...</span>sources<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>target <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">TypeError</span><span class="token punctuation">(</span><span class="token string">&#39;Cannot convert undefined or null to object&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">let</span> ret <span class="token operator">=</span> <span class="token function">Object</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span>
  sources<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>obj <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> key <span class="token keyword">in</span> obj<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          ret<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> ret
<span class="token punctuation">}</span>


<span class="token comment">// \u5B9E\u73B0 </span>
<span class="token comment">// \u5B9E\u73B0 </span>
<span class="token comment">// \u5B9E\u73B0 </span>
<span class="token comment">// \u5B9E\u73B0 </span>
<span class="token comment">// \u5B9E\u73B0 </span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),o=[p];function c(i,l){return s(),a("div",null,o)}var r=n(t,[["render",c],["__file","Object.js.html.vue"]]);export{r as default};

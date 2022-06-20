import{_ as n,o as s,c as a,g as p}from"./app.7b383bae.js";const t={},o=p(`<h3 id="umd" tabindex="-1"><a class="header-anchor" href="#umd" aria-hidden="true">#</a> UMD</h3><ol><li>\u6982\u5FF5\uFF1A \u662F\u4E00\u79CD\u601D\u60F3\uFF0C\u517C\u5BB9commonjs\u3001AMD\u3001CMD\u3002 \u5148\u5224\u65AD\u662F\u5426\u652F\u6301Nodejs\u6A21\u5757(exports\u662F\u5426\u5B58\u5728)\uFF0C\u5982\u679C\u5B58\u5728\u5C31\u4F7F\u7528Nodehs\u6A21\u5757\u3002\u4E0D\u652F\u6301\u7684\u8BDD\uFF0C\u518D\u5224\u65AD\u662F\u5426\u652F\u6301AMD/CMD(\u5224\u65ADdefine\u662F\u5426\u5B58\u5728)\u3002\u90FD\u4E0D\u884C\u5C31\u6302\u8F7D\u5728window\u5168\u5C40\u5BF9\u8C61\u4E0A</li><li>\u4F7F\u7528\uFF1A</li></ol><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>  <span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span>factory<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> define <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span> <span class="token operator">&amp;&amp;</span> define<span class="token punctuation">.</span>amd<span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">//\u662F\u5426\u652F\u6301AMD\\CMD</span>
      <span class="token function">define</span><span class="token punctuation">(</span><span class="token punctuation">[</span>module1<span class="token punctuation">,</span>module2<span class="token punctuation">]</span><span class="token punctuation">,</span>factory<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> exports <span class="token operator">===</span> <span class="token string">&#39;object&#39;</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">//\u662F\u5426\u652F\u6301CJS</span>
      module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">factory</span><span class="token punctuation">(</span><span class="token keyword">require</span><span class="token punctuation">(</span>module1<span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token keyword">require</span><span class="token punctuation">(</span>module2<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span> <span class="token comment">//\u90FD\u4E0D\u652F\u6301\uFF0C\u6302window</span>
      root<span class="token punctuation">.</span>requester <span class="token operator">=</span> <span class="token function">factory</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>module1<span class="token punctuation">,</span>root<span class="token punctuation">.</span>module2<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">(</span>window<span class="token operator">/</span><span class="token keyword">this</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span>module1<span class="token punctuation">,</span>module2<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">var</span> requester <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span>
    <span class="token keyword">return</span> requester
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li><p>\u4F18\u70B9\uFF1A</p><ol><li>\u662F\u4E00\u79CD\u601D\u60F3\uFF0C\u517C\u5BB9commonjs\u3001AMD\u3001CMD\u3002 \u5148\u5224\u65AD\u662F\u5426\u652F\u6301Nodejs\u6A21\u5757(exports\u662F\u5426\u5B58\u5728)\uFF0C\u5982\u679C\u5B58\u5728\u5C31\u4F7F\u7528Nodehs\u6A21\u5757\u3002\u4E0D\u652F\u6301\u7684\u8BDD\uFF0C\u518D\u5224\u65AD\u662F\u5426\u652F\u6301AMD/CMD(\u5224\u65ADdefine\u662F\u5426\u5B58\u5728)\u3002\u90FD\u4E0D\u884C\u5C31\u6302\u8F7D\u5728window\u5168\u5C40\u5BF9\u8C61\u4E0A</li><li>\u4E0E CJS \u6216 AMD \u4E0D\u540C\uFF0CUMD \u66F4\u50CF\u662F\u4E00\u79CD\u914D\u7F6E\u591A\u4E2A\u6A21\u5757\u7CFB\u7EDF\u7684\u6A21\u5F0F\u3002\u8FD9\u91CC\u53EF\u4EE5\u627E\u5230\u66F4\u591A\u7684\u6A21\u5F0F</li><li>\u5F53\u4F7F\u7528 Rollup/Webpack \u4E4B\u7C7B\u7684\u6253\u5305\u5668\u65F6\uFF0CUMD \u901A\u5E38\u7528\u4F5C\u5907\u7528\u6A21\u5757 \u5E94\u7528\uFF1A\u901A\u7528\u6A21\u5757\u5B9A\u4E49\uFF0C\u5728\u524D\u7AEF\u548C\u540E\u7AEF\u90FD\u9002\u7528\uFF08\u201C\u901A\u7528\u201D\u56E0\u6B64\u5F97\u540D\uFF09</li></ol></li><li><p>\u603B\u7ED3\uFF1A \u4F7F\u7528\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>  <span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span>factory<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> define <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span> <span class="token operator">&amp;&amp;</span> define<span class="token punctuation">.</span>amd<span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">//\u662F\u5426\u652F\u6301AMD\\CMD</span>
      <span class="token function">define</span><span class="token punctuation">(</span><span class="token punctuation">[</span>module1<span class="token punctuation">,</span>module2<span class="token punctuation">]</span><span class="token punctuation">,</span>factory<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> exports <span class="token operator">===</span> <span class="token string">&#39;object&#39;</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">//\u662F\u5426\u652F\u6301CJS</span>
      module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">factory</span><span class="token punctuation">(</span><span class="token keyword">require</span><span class="token punctuation">(</span>module1<span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token keyword">require</span><span class="token punctuation">(</span>module2<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span> <span class="token comment">//\u90FD\u4E0D\u652F\u6301\uFF0C\u6302window</span>
      root<span class="token punctuation">.</span>requester <span class="token operator">=</span> <span class="token function">factory</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>module1<span class="token punctuation">,</span>root<span class="token punctuation">.</span>module2<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">(</span>window<span class="token operator">/</span><span class="token keyword">this</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span>module1<span class="token punctuation">,</span>module2<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">var</span> requester <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span>
    <span class="token keyword">return</span> requester
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F18\u70B9\uFF1A</p><ol><li>\u662F\u4E00\u79CD\u601D\u60F3\uFF0C\u517C\u5BB9commonjs\u3001AMD\u3001CMD\u3002 \u5148\u5224\u65AD\u662F\u5426\u652F\u6301Nodejs\u6A21\u5757(exports\u662F\u5426\u5B58\u5728)\uFF0C\u5982\u679C\u5B58\u5728\u5C31\u4F7F\u7528Nodehs\u6A21\u5757\u3002\u4E0D\u652F\u6301\u7684\u8BDD\uFF0C\u518D\u5224\u65AD\u662F\u5426\u652F\u6301AMD/CMD(\u5224\u65ADdefine\u662F\u5426\u5B58\u5728)\u3002\u90FD\u4E0D\u884C\u5C31\u6302\u8F7D\u5728window\u5168\u5C40\u5BF9\u8C61\u4E0A</li><li>\u4E0E CJS \u6216 AMD \u4E0D\u540C\uFF0CUMD \u66F4\u50CF\u662F\u4E00\u79CD\u914D\u7F6E\u591A\u4E2A\u6A21\u5757\u7CFB\u7EDF\u7684\u6A21\u5F0F\u3002\u8FD9\u91CC\u53EF\u4EE5\u627E\u5230\u66F4\u591A\u7684\u6A21\u5F0F</li><li>\u5F53\u4F7F\u7528 Rollup/Webpack \u4E4B\u7C7B\u7684\u6253\u5305\u5668\u65F6\uFF0CUMD \u901A\u5E38\u7528\u4F5C\u5907\u7528\u6A21\u5757 \u5E94\u7528\uFF1A\u901A\u7528\u6A21\u5757\u5B9A\u4E49\uFF0C\u5728\u524D\u7AEF\u548C\u540E\u7AEF\u90FD\u9002\u7528\uFF08\u201C\u901A\u7528\u201D\u56E0\u6B64\u5F97\u540D\uFF09</li></ol></li></ol>`,4),e=[o];function c(l,u){return s(),a("div",null,e)}var k=n(t,[["render",c],["__file","UMD.html.vue"]]);export{k as default};
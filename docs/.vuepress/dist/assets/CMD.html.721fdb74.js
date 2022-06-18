import{_ as n,o as s,c as a,g as p}from"./app.c10353cc.js";const t={},e=p(`<h3 id="cmd" tabindex="-1"><a class="header-anchor" href="#cmd" aria-hidden="true">#</a> CMD</h3><ol><li><p>\u6982\u8FF0\uFF1A * \u4E3A\u89E3\u51B3AMDJS\u53EA\u80FD\u5F02\u6B65\u52A0\u8F7D\u7684\u95EE\u9898\uFF0CCMD\u51FA\u73B0\u4E86\uFF0CCommonJS\u4E0ErequireJS\u7684\u7ED3\u5408\u4F53 CMD\u63A8\u5D07\u7684\u662F\u5C31\u8FD1\u4F9D\u8D56\uFF0C\u5EF6\u8FDF\u52A0\u8F7D</p></li><li><p>\u4F7F\u7528\uFF1A</p><ol><li>\u5BFC\u51FA\uFF1A define(function(require,exports,module){exports.xxx = any \u6216 module.exports = any})</li><li>\u5F15\u7528\uFF1A \u540C\u6B65\uFF1Arequire()\uFF0C\u5F02\u6B65\uFF1Arequire.async([\u6A21\u5757\u540D],callback(\u6A21\u5757\u66B4\u9732\u7684\u5185\u5BB9){})</li></ol><p>/** CMD\u5199\u6CD5 **/</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token function">define</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token keyword">require</span><span class="token punctuation">,</span> exports<span class="token punctuation">,</span> module<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token keyword">require</span><span class="token punctuation">(</span><span class="token string">&#39;./a&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u5728\u9700\u8981\u65F6\u7533\u660E</span>
    a<span class="token punctuation">.</span><span class="token function">doSomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">var</span> b <span class="token operator">=</span> <span class="token keyword">require</span><span class="token punctuation">(</span><span class="token string">&#39;./b&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        b<span class="token punctuation">.</span><span class="token function">doSomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>/** sea.js **/ // \u5B9A\u4E49\u6A21\u5757 math.js</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token function">define</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token keyword">require</span><span class="token punctuation">,</span> exports<span class="token punctuation">,</span> module<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> $ <span class="token operator">=</span> <span class="token keyword">require</span><span class="token punctuation">(</span><span class="token string">&#39;jquery.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> <span class="token function-variable function">add</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span>b<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> a<span class="token operator">+</span>b<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    exports<span class="token punctuation">.</span>add <span class="token operator">=</span> add<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u52A0\u8F7D\u6A21\u5757</span>
seajs<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;math.js&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span>math<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">var</span> sum <span class="token operator">=</span> math<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token operator">+</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u4F18\u70B9\uFF1A</p><ol><li>\u5F02\u6B65\u52A0\u8F7D\uFF0C\u6709\u7F13\u5B58</li><li>\u4F9D\u8D56\u5C31\u8FD1\uFF0C\u5EF6\u8FDF\u6267\u884C</li></ol></li><li><p>\u7F3A\u70B9\uFF1A</p><ol><li>\u6A21\u5757\u5B9A\u4E49\u4E0D\u5982es6\u7B80\u6D01</li><li>\u53EA\u80FD\u5F02\u6B65\u52A0\u8F7D</li></ol></li><li><p>\u5E94\u7528\uFF1A\u4E3B\u8981\u7528\u4E8E\u6D4F\u89C8\u5668\uFF0CseaJS</p></li><li><p>\u539F\u7406\uFF1A Reqiurejs \u6A21\u5757\u52A0\u8F7D\u5B8C\u6BD5\u540E\u662F\u7ACB\u5373\u6267\u884C\uFF0C Seajs \u5728\u6A21\u5757\u52A0\u8F7D\u5B8C\u6BD5\u540E\u4FDD\u5B58 factory \u51FD\u6570\uFF0C\u5728\u6267\u884C\u5230 require \u65F6\u518D\u6267\u884C\u6A21\u5757\u5BF9\u5E94\u7684 factory \u51FD\u6570\u8FD4\u56DE\u6A21\u5757\u7684\u5BFC\u51FA\u7ED3\u679C\u3002</p></li><li><p>\u603B\u7ED3\uFF1A</p><ul><li>\u4E3A\u89E3\u51B3AMDJS\u53EA\u80FD\u5F02\u6B65\u52A0\u8F7D\u7684\u95EE\u9898\uFF0CCMD\u51FA\u73B0\u4E86\uFF0CCommonJS\u4E0ErequireJS\u7684\u7ED3\u5408\u4F53</li></ul><ol><li>\u4F7F\u7528\uFF1A \u5F15\u5165\u5E93\uFF1A \u52A0\u8F7DseaJS (\u5982src=&quot;lib/sea.js&quot;) \u5BFC\u51FA\uFF1A define(function(require,exports,module){exports.xxx = any \u6216 module.exports = any}) \u5F15\u7528\uFF1A \u540C\u6B65\uFF1Arequire()\uFF0C\u5F02\u6B65\uFF1Arequire.async([\u6A21\u5757\u540D],callback(\u6A21\u5757\u66B4\u9732\u7684\u5185\u5BB9){})</li><li>\u4F18\u70B9\uFF1A <ol><li>\u5F02\u6B65\u52A0\u8F7D\uFF0C\u6709\u7F13\u5B58</li><li>\u4F9D\u8D56\u5C31\u8FD1\uFF0C\u5EF6\u8FDF\u6267\u884C</li></ol></li><li>\u7F3A\u70B9\uFF1A <ol><li>\u6A21\u5757\u5B9A\u4E49\u4E0D\u5982es6\u7B80\u6D01</li></ol></li><li>\u5E94\u7528\uFF1A\u4E3B\u8981\u7528\u4E8E\u6D4F\u89C8\u5668\uFF0CseaJS</li></ol></li></ol>`,2),o=[e];function c(l,i){return s(),a("div",null,o)}var r=n(t,[["render",c],["__file","CMD.html.vue"]]);export{r as default};

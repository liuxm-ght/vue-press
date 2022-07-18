import{_ as n,o as s,c as a,e as t}from"./app.68e824a5.js";var e="/vue-press/assets/performance.cbb112bf.png";const i={},p=t('<h3 id="\u9996\u5C4F\u4F18\u5316" tabindex="-1"><a class="header-anchor" href="#\u9996\u5C4F\u4F18\u5316" aria-hidden="true">#</a> \u9996\u5C4F\u4F18\u5316</h3><h3 id="\u5173\u4E8E\u8BA1\u7B97\u9996\u5C4F\u65F6\u95F4" tabindex="-1"><a class="header-anchor" href="#\u5173\u4E8E\u8BA1\u7B97\u9996\u5C4F\u65F6\u95F4" aria-hidden="true">#</a> \u5173\u4E8E\u8BA1\u7B97\u9996\u5C4F\u65F6\u95F4</h3><ul><li>\u5229\u7528performance.timing\u63D0\u4F9B\u7684\u6570\u636E\uFF1A <img src="'+e+`" alt="performance"></li><li>\u901A\u8FC7DOMContentLoad\u6216\u8005performance\u6765\u8BA1\u7B97\u51FA\u9996\u5C4F\u65F6\u95F4</li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// \u65B9\u6848\u4E00\uFF1A</span>
document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;DOMContentLoaded&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>event<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;first contentful painting&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u65B9\u6848\u4E8C\uFF1A</span>
performance<span class="token punctuation">.</span><span class="token function">getEntriesByName</span><span class="token punctuation">(</span><span class="token string">&quot;first-contentful-paint&quot;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>startTime

<span class="token comment">// performance.getEntriesByName(&quot;first-contentful-paint&quot;)[0]</span>
<span class="token comment">// \u4F1A\u8FD4\u56DE\u4E00\u4E2A PerformancePaintTiming\u7684\u5B9E\u4F8B\uFF0C\u7ED3\u6784\u5982\u4E0B\uFF1A</span>
<span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&quot;first-contentful-paint&quot;</span><span class="token punctuation">,</span>
  entryType<span class="token operator">:</span> <span class="token string">&quot;paint&quot;</span><span class="token punctuation">,</span>
  startTime<span class="token operator">:</span> <span class="token number">507.80000002123415</span><span class="token punctuation">,</span>
  duration<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u52A0\u8F7D\u6162\u7684\u539F\u56E0" tabindex="-1"><a class="header-anchor" href="#\u52A0\u8F7D\u6162\u7684\u539F\u56E0" aria-hidden="true">#</a> \u52A0\u8F7D\u6162\u7684\u539F\u56E0</h3><ul><li>\u5728\u9875\u9762\u6E32\u67D3\u7684\u8FC7\u7A0B\uFF0C\u5BFC\u81F4\u52A0\u8F7D\u901F\u5EA6\u6162\u7684\u56E0\u7D20\u53EF\u80FD\u5982\u4E0B\uFF1A <ul><li>\u7F51\u7EDC\u5EF6\u65F6\u95EE\u9898</li><li>\u8D44\u6E90\u6587\u4EF6\u4F53\u79EF\u662F\u5426\u8FC7\u5927</li><li>\u8D44\u6E90\u662F\u5426\u91CD\u590D\u53D1\u9001\u8BF7\u6C42\u53BB\u52A0\u8F7D\u4E86</li><li>\u52A0\u8F7D\u811A\u672C\u7684\u65F6\u5019\uFF0C\u6E32\u67D3\u5185\u5BB9\u5835\u585E\u4E86</li></ul></li></ul><h3 id="\u89E3\u51B3\u65B9\u6848" tabindex="-1"><a class="header-anchor" href="#\u89E3\u51B3\u65B9\u6848" aria-hidden="true">#</a> \u89E3\u51B3\u65B9\u6848</h3><ul><li>\u5E38\u89C1\u7684\u51E0\u79CDSPA\u9996\u5C4F\u4F18\u5316\u65B9\u5F0F <ul><li><p>\u51CF\u5C0F\u5165\u53E3\u6587\u4EF6\u79EF</p></li><li><p>UI\u6846\u67B6\u6309\u9700\u52A0\u8F7D</p></li><li><p>\u7EC4\u4EF6\u91CD\u590D\u6253\u5305</p></li><li><p>\u9759\u6001\u8D44\u6E90\u672C\u5730\u7F13\u5B58</p></li><li><p>\u56FE\u7247\u8D44\u6E90\u7684\u538B\u7F29</p></li><li><p>\u5F00\u542FGZip\u538B\u7F29</p></li><li><p>\u4F7F\u7528SSR</p></li></ul></li></ul>`,8),l=[p];function c(o,u){return s(),a("div",null,l)}var d=n(i,[["render",c],["__file","\u9996\u5C4F\u4F18\u5316.html.vue"]]);export{d as default};

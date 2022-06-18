import{_ as s,o as n,c as a,g as e}from"./app.c10353cc.js";const t={},i=e(`<h3 id="tree-shaking" tabindex="-1"><a class="header-anchor" href="#tree-shaking" aria-hidden="true">#</a> Tree-Shaking</h3><ol><li><p>\u6982\u8FF0\uFF1A tree-shaking \u7B80\u79F0\u6447\u6811\u3002\u5B83\u7684\u4F5C\u7528\u662F \u80FD\u591F\u5728\u6A21\u5757\u7684\u5C42\u9762\u4E0A\u505A\u5230\u6253\u5305\u540E\u7684\u4EE3\u7801\u53EA\u5305\u542B\u88AB\u5F15\u7528\u5E76\u88AB\u6267\u884C\u7684\u6A21\u5757\uFF0C\u800C\u4E0D\u88AB\u5F15\u7528\u6216\u4E0D\u88AB\u6267\u884C\u7684\u6A21\u5757\u88AB\u5220\u9664\u6389\uFF0C\u4EE5\u8D77\u5230\u51CF\u5305\u7684\u6548\u679C\u3002</p><ul><li>Tree-Shaking \u4F9D\u8D56\u4E8E ES6 import \u548C export \u9759\u6001\u5206\u6790\u80FD\u529B\uFF0C\u5F53\u6A21\u5757\u662F\u901A\u8FC7 static \u65B9\u5F0F\u5F15\u7528\uFF0C\u5B83\u4F1A\u5C3D\u53EF\u80FD\u7684\u5220\u9664\u53EA\u5199\u4E0D\u8BFB\u7684\u53D8\u91CF\u548C\u51FD\u6570\u3002</li></ul></li><li><p>\u4F7F\u7528\uFF1A</p><ol><li>wabpack\u914D\u7F6E\uFF1A</li></ol><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>  optimization<span class="token operator">:</span> <span class="token punctuation">{</span>
    usedExports<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>package.json:</li></ol><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>  <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 
    sideEffects<span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span>   <span class="token comment">// \u5BF9\u6240\u6709\u7684\u6587\u4EF6\u90FD\u542F\u7528 tree_shaking</span>
  <span class="token operator">--</span><span class="token operator">&gt;</span>
    <span class="token operator">*</span> sideEffects <span class="token operator">:</span> \u4E0D\u9700\u8981tree_shaking\u7684\u6587\u4EF6\u6216\u76EE\u5F55\u6570\u7EC4
      <span class="token operator">*</span> <span class="token boolean">false</span>\uFF1A\u5BF9\u6240\u6709\u7684\u6587\u4EF6\u90FD\u542F\u7528 tree_shaking
      <span class="token operator">*</span> <span class="token punctuation">[</span>a<span class="token punctuation">.</span>js <span class="token punctuation">,</span> b<span class="token punctuation">]</span><span class="token operator">:</span>a\u6587\u4EF6 \u3001 b\u76EE\u5F55\u4E0D\u9700\u8981 tree_shaking
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>mode\uFF1A \u5F00\u53D1mode\u6A21\u5F0F\u4E0B\uFF1A</p><ol><li>development\uFF1A \u9ED8\u8BA4\u4E0D tree_shaking\uFF0C\u5C31\u662F\u914D\u7F6E\u4E86\u4E5F\u65E0\u6548tree_shaking\uFF0C\u4E3A\u4E86\u66F4\u597D\u7684\u5B9A\u4F4D\u9519\u8BEF</li><li>production\uFF1A \u9ED8\u8BA4\u5F00\u542F\u4E86 sideEffects:false\uFF0C\u6240\u4EE5\u4E0D\u9700\u8981\u5728package.json\u914D\u7F6E</li></ol></li><li><p>Tree-Shaking\u5C40\u9650\u6027\uFF1A</p><ol><li>\u53EA\u80FD\u662F\u9759\u6001\u58F0\u660E\u548C\u5F15\u7528\u7684 ES6 \u6A21\u5757\uFF0C\u4E0D\u80FD\u662F\u52A8\u6001\u5F15\u5165\u548C\u58F0\u660E\u7684\u3002(\u5373 require() \u5F15\u5165\u6A21\u5757\uFF0C\u4E0D\u80FD\u88ABtree-shaking) \u5728\u6253\u5305\u9636\u6BB5\u5BF9\u5197\u4F59\u4EE3\u7801 (uglify) \u8FDB\u884C\u5220\u9664\uFF0C\u5C31\u9700\u8981 webpack \u9700\u8981\u5728\u6253\u5305\u9636\u6BB5\u786E\u5B9A\u6A21\u5757\u6587\u4EF6\u7684\u5185\u90E8\u7ED3\u6784\uFF0C\u800C ES \u6A21\u5757\u7684\u5F15\u7528\u548C\u8F93\u51FA\u5FC5\u987B\u51FA\u73B0\u5728\u6587\u4EF6\u7ED3\u6784\u7684\u7B2C\u4E00\u7EA7 \uFF08&#39;import&#39; and &#39;export&#39; may only appear at the top level\uFF09\uFF0C\u5426\u5219\u4F1A\u62A5\u9519\u3002<div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>  <span class="token comment">// webpack\u7F16\u8BD1\u65F6\u4F1A\u62A5\u9519</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>condition<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">import</span> module1 <span class="token keyword">from</span> <span class="token string">&#39;./module1&#39;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">import</span> module2 <span class="token keyword">from</span> <span class="token string">&#39;./module2&#39;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u800C CommonJS \u6A21\u5757\u662F\u652F\u6301\u52A8\u6001\u7ED3\u6784\uFF0C\u5B83\u901A\u8FC7 require() \u5F15\u5165\u6A21\u5757\uFF0C\u6240\u4EE5\u662F\u4E0D\u80FD\u88AB tree-shaking \u8FDB\u884C\u5904\u7406\u7684\u3002</li></ul></li><li>\u53EA\u80FD\u5904\u7406\u6A21\u5757\u7EA7\u522B\uFF0C\u4E0D\u80FD\u5904\u7406\u51FD\u6570\u7EA7\u522B\u7684\u5197\u4F59\uFF1B \u56E0\u4E3A webpack \u7684 tree-shaking \u662F\u57FA\u4E8E\u6A21\u5757\u95F4\u7684\u4F9D\u8D56\u5173\u7CFB\uFF0C\u6240\u4EE5\u5E76\u4E0D\u80FD\u5BF9\u6A21\u5757\u5185\u90E8\u81EA\u8EAB\u7684\u65E0\u7528\u4EE3\u7801\u8FDB\u884C\u5220\u9664\u3002</li><li>\u53EA\u80FD\u5904\u7406 JS \u76F8\u5173\u5197\u4F59\u4EE3\u7801\uFF0C\u4E0D\u80FD\u5904\u7406 CSS \u5197\u4F59\u4EE3\u7801\u3002 \u76EE\u524D webpack \u53EA\u5BF9 JS \u6587\u4EF6\u7684\u4F9D\u8D56\u8FDB\u884C\u4E86\u5904\u7406\uFF0CCSS \u7684\u5197\u4F59\u5E76\u6CA1\u6709\u7ED9\u51FA\u5F88\u597D\u7684\u5DE5\u5177\u3002\u53EF\u4EE5\u501F\u52A9 PureCss \u6765\u5B8C\u6210\u8FD9\u4E2A\u76EE\u7684\u3002</li></ol></li></ol>`,2),p=[i];function o(l,c){return n(),a("div",null,p)}var d=s(t,[["render",o],["__file","Tree-Shaking.html.vue"]]);export{d as default};

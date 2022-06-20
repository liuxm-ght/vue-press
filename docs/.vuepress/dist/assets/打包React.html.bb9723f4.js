import{_ as s,o as n,c as a,g as e}from"./app.7b383bae.js";const t={},p=e(`<h3 id="babel-\u6253\u5305react" tabindex="-1"><a class="header-anchor" href="#babel-\u6253\u5305react" aria-hidden="true">#</a> Babel \u6253\u5305react</h3><ol><li>\u4F7F\u7528\uFF1A \u914D\u7F6E babel \u4E0B\u8F7D\u89E3\u6790 react \u4EE3\u7801\u7684 babel \u4F9D\u8D56</li></ol><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>  npm install <span class="token decorator"><span class="token at operator">@</span><span class="token function">babel</span></span><span class="token operator">/</span>preset<span class="token operator">-</span>react <span class="token operator">-</span><span class="token constant">D</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u4FEE\u6539 .babelrc \u6587\u4EF6
</code></pre><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">&quot;presets&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span>
      <span class="token string">&quot;@babel/preset-env&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;useBuiltIns&quot;</span><span class="token operator">:</span> <span class="token string">&quot;usage&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string">&quot;@babel/preset-react&quot;</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),c=[p];function o(i,l){return n(),a("div",null,c)}var u=s(t,[["render",o],["__file","\u6253\u5305React.html.vue"]]);export{u as default};

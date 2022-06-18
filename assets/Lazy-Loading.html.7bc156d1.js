import{_ as n,o as s,c as a,e as t}from"./app.6cfd3ac5.js";const p={},e=t(`<h3 id="lazy-loading-\u61D2\u52A0\u8F7D" tabindex="-1"><a class="header-anchor" href="#lazy-loading-\u61D2\u52A0\u8F7D" aria-hidden="true">#</a> Lazy-Loading \u61D2\u52A0\u8F7D</h3><ol><li><p>\u6982\u8FF0\uFF1A \u5C31\u662F\u4EE3\u7801\u7684\u5F02\u6B65\u5F15\u5165\uFF0C\u9700\u8981\u7684\u65F6\u5019\u624D\u52A0\u8F7D\uFF0C\u4E5F\u53EB\u6309\u9700\u52A0\u8F7D</p></li><li><p>\u76F8\u5173\u5EF6\u4F38\uFF1A</p><ol><li><p>react\u3001vue \u7684\u6846\u67B6 \u5982\u679C\u6211\u4EEC\u5199\u8FC7\u76F8\u5173\u7684 react\u3001vue \u7684\u6846\u67B6\u4EE3\u7801\u7684\u8BDD\uFF0C\u8FD9\u4E9B\u6846\u67B6\u90FD\u662F\u5355\u9875\u5E94\u7528\uFF0C\u91CC\u9762\u4F1A\u6709\u4E00\u4E2A\u8DEF\u7531\u5207\u6362\u7684\u6982\u5FF5\uFF0C\u4E00\u822C\u5F53\u6211\u4EEC\u8BBF\u95EE\u9996\u9875\u7684\u65F6\u5019\uFF0C\u5B83\u5176\u5B9E\u4F1A\u628A\u8BF8\u5982 \u8BE6\u60C5\u9875\u3001\u7F16\u8F91\u9875\u3001\u5217\u8868\u9875\u7B49\u9875\u9762\u90FD\u7ED9\u52A0\u8F7D\u5B8C\u6210\uFF0C\u8FD9\u4E2A\u65F6\u5019\u6211\u4EEC\u53EA\u9700\u8981\u9996\u9875\u7684\u4EE3\u7801\u5C31\u591F\u4E86\u3002\u53EF\u4EE5\u628A\u8FD9\u4E9B\u9875\u9762\u505A\u4E00\u4E2A\u4EE3\u7801\u5206\u5272\uFF0C\u7136\u540E\u7B49\u5230\u8DEF\u7531\u5207\u6362\u5230\u76F8\u5E94\u7684\u9875\u9762\u7684\u65F6\u5019\u5728\u5F02\u6B65\u8F7D\u5165\u76F8\u5E94\u7684\u4EE3\u7801\u5373\u53EF\uFF0C\u8FD9\u6837\u5C31\u4E00\u5B9A\u7A0B\u5EA6\u4E0A\u63D0\u9AD8\u9875\u9762\u7684\u52A0\u8F7D\u6548\u7387\u3002</p></li><li><p>\u662F ECMAScript \u7684\u8BED\u6CD5 \u61D2\u52A0\u8F7D\u5B9E\u9645\u4E0A\u5C31\u662F import \u7684\u8BED\u6CD5\uFF0C\u4ED6\u4E0D\u662F webpack \u7684\u529F\u80FD\uFF0C\u800C\u662F ECMAScript \u7684\u8BED\u6CD5\uFF0Cwebpack \u505A\u7684\u53EA\u662F\u8BC6\u522B\u8FD9\u79CD\u8BED\u6CD5\u5E76\u5E94\u7528\u3002</p></li><li><p>\u8FD4\u56DE\u7684\u662F promise \u7C7B\u578B import \u5B9E\u9645\u4E0A\u8FD4\u56DE\u7684\u662F\u4E00\u4E2A promise \u7684\u7C7B\u578B\uFF0C\u5982\u679C\u6211\u4EEC\u7684\u9879\u76EE\u5BF9\u4E8E\u4F4E\u7AEF\u6D4F\u89C8\u5668\u4E5F\u6709\u76F8\u5E94\u7684\u652F\u6301\uFF0C\u6211\u4EEC\u5C31\u9700\u8981\u5B89\u88C5 @babel/polyfill \u6765\u8BF8\u5982\u4E00\u4E9B\u517C\u5BB9\u4F4E\u7AEF\u6D4F\u89C8\u5668\u7684\u65B9\u6CD5\uFF1A\u4E0D\u8FC7\u6211\u4EEC\u4E5F\u53EF\u4EE5\u5728 .babelrc \u4E2D\u914D\u7F6E\u76F8\u5E94\u7684 useBuiltIns</p></li></ol><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>  <span class="token punctuation">{</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6211\u4EEC\u8FD8\u53EF\u4EE5\u4F7F\u7528 async await \u6765\u66F4\u52A0\u4F18\u96C5\u7684\u6539\u5199\u6211\u4EEC async.js \u4E2D\u7684\u6587\u4EF6\uFF1A</p><ul><li>\u5B9A\u4E49\u6A21\u5757\uFF1A</li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>  <span class="token keyword">const</span> <span class="token function-variable function">getComponent</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> <span class="token keyword">default</span><span class="token operator">:</span> _ <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token comment">/* webpackChunkName:&quot;lodash1&quot; */</span> <span class="token string">&#39;lodash&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> element <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    element<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> _<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;Hello&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Darrell&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">&#39;-&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> element<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">export</span> <span class="token keyword">default</span> getComponent<span class="token punctuation">;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u4F7F\u7528\u6A21\u5757\uFF1A</li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>  <span class="token keyword">import</span> getComponent <span class="token keyword">from</span> <span class="token string">&#39;./async&#39;</span><span class="token punctuation">;</span>
  document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">getComponent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>element <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol>`,2),o=[e];function c(i,l){return s(),a("div",null,o)}var r=n(p,[["render",c],["__file","Lazy-Loading.html.vue"]]);export{r as default};
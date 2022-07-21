import{_ as e,r as o,o as c,c as l,b as n,a,w as t,f as u,e as p}from"./app.f25adddd.js";const i={},k={class:"table-of-contents"},r=p("V3 \u66F4\u5FEB"),d=p("\u7F16\u8BD1\u9636\u6BB5"),m=p("diff\u7B97\u6CD5\u4F18\u5316"),v=p("\u9759\u6001\u63D0\u5347"),g=p("\u4E8B\u4EF6\u76D1\u542C\u7F13\u5B58"),b=p("SSR\u4F18\u5316"),_=u(`<h2 id="v3-\u66F4\u5FEB" tabindex="-1"><a class="header-anchor" href="#v3-\u66F4\u5FEB" aria-hidden="true">#</a> V3 \u66F4\u5FEB</h2><ul><li>\u91CD\u5199\u4E86\u865A\u62DFDom\u5B9E\u73B0</li><li>\u7F16\u8BD1\u6A21\u677F\u7684\u4F18\u5316</li><li>undate\u6027\u80FD\u63D0\u9AD81.3~2\u500D</li><li>SSR\u901F\u5EA6\u63D0\u9AD8\u4E862~3\u500D</li></ul><h2 id="\u7F16\u8BD1\u9636\u6BB5" tabindex="-1"><a class="header-anchor" href="#\u7F16\u8BD1\u9636\u6BB5" aria-hidden="true">#</a> \u7F16\u8BD1\u9636\u6BB5</h2><h3 id="diff\u7B97\u6CD5\u4F18\u5316" tabindex="-1"><a class="header-anchor" href="#diff\u7B97\u6CD5\u4F18\u5316" aria-hidden="true">#</a> diff\u7B97\u6CD5\u4F18\u5316</h3><ul><li>vue3\u5728diff\u7B97\u6CD5\u4E2D\u76F8\u6BD4vue2\u589E\u52A0\u4E86\u9759\u6001\u6807\u8BB0</li><li>\u9759\u6001\u6807\u8BB0\uFF0C\u4E3B\u8981\u662F\u7ED9\u4F1A\u53D1\u9001\u53D8\u5316\u7684\u5730\u65B9\u6DFB\u52A0\u4E00\u4E2Aflag\uFF0C\u4E0B\u6B21\u53D1\u9001\u53D8\u5316\u65F6\u76F4\u63A5\u627E\u8FD9\u4E2Aflag\u8FDB\u884C\u6BD4\u8F83</li></ul><p>\u4E0B\u56FE\u8FD9\u91CC\uFF0C\u5DF2\u7ECF\u6807\u8BB0\u9759\u6001\u8282\u70B9\u7684p\u6807\u7B7E\u5728diff\u8FC7\u7A0B\u4E2D\u5219\u4E0D\u4F1A\u6BD4\u8F83\uFF0C\u628A\u6027\u80FD\u8FDB\u4E00\u6B65\u63D0\u9AD8 <a href="./diff.png"></a></p><details class="custom-container details"><summary>\u5173\u4E8E\u9759\u6001\u7C7B\u578B\u679A\u4E3E\u5982\u4E0B</summary><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token keyword">enum</span> PatchFlags <span class="token punctuation">{</span>
  <span class="token constant">TEXT</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span><span class="token comment">// \u52A8\u6001\u7684\u6587\u672C\u8282\u70B9</span>
  <span class="token constant">CLASS</span> <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">&lt;&lt;</span> <span class="token number">1</span><span class="token punctuation">,</span>  <span class="token comment">// 2 \u52A8\u6001\u7684 class</span>
  <span class="token class-name"><span class="token constant">STYLE</span></span> <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">&lt;&lt;</span> <span class="token number">2</span><span class="token punctuation">,</span>  <span class="token comment">// 4 \u52A8\u6001\u7684 style</span>
  <span class="token constant">PROPS</span> <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">&lt;&lt;</span> <span class="token number">3</span><span class="token punctuation">,</span>  <span class="token comment">// 8 \u52A8\u6001\u5C5E\u6027\uFF0C\u4E0D\u5305\u62EC\u7C7B\u540D\u548C\u6837\u5F0F</span>
  <span class="token constant">FULL_PROPS</span> <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">&lt;&lt;</span> <span class="token number">4</span><span class="token punctuation">,</span>  <span class="token comment">// 16 \u52A8\u6001 key\uFF0C\u5F53 key \u53D8\u5316\u65F6\u9700\u8981\u5B8C\u6574\u7684 diff \u7B97\u6CD5\u505A\u6BD4\u8F83</span>
  <span class="token constant">HYDRATE_EVENTS</span> <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">&lt;&lt;</span> <span class="token number">5</span><span class="token punctuation">,</span>  <span class="token comment">// 32 \u8868\u793A\u5E26\u6709\u4E8B\u4EF6\u76D1\u542C\u5668\u7684\u8282\u70B9</span>
  <span class="token constant">STABLE_FRAGMENT</span> <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">&lt;&lt;</span> <span class="token number">6</span><span class="token punctuation">,</span>   <span class="token comment">// 64 \u4E00\u4E2A\u4E0D\u4F1A\u6539\u53D8\u5B50\u8282\u70B9\u987A\u5E8F\u7684 Fragment</span>
  <span class="token constant">KEYED_FRAGMENT</span> <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">&lt;&lt;</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token comment">// 128 \u5E26\u6709 key \u5C5E\u6027\u7684 Fragment</span>
  <span class="token constant">UNKEYED_FRAGMENT</span> <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">&lt;&lt;</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token comment">// 256 \u5B50\u8282\u70B9\u6CA1\u6709 key \u7684 Fragment</span>
  <span class="token constant">NEED_PATCH</span> <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">&lt;&lt;</span> <span class="token number">9</span><span class="token punctuation">,</span>   <span class="token comment">// 512</span>
  <span class="token constant">DYNAMIC_SLOTS</span> <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">&lt;&lt;</span> <span class="token number">10</span><span class="token punctuation">,</span>  <span class="token comment">// \u52A8\u6001 solt</span>
  <span class="token constant">HOISTED</span> <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span>  <span class="token comment">// \u7279\u6B8A\u6807\u5FD7\u662F\u8D1F\u6574\u6570\u8868\u793A\u6C38\u8FDC\u4E0D\u4F1A\u7528\u4F5C diff</span>
  <span class="token constant">BAIL</span> <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">2</span> <span class="token comment">// \u4E00\u4E2A\u7279\u6B8A\u7684\u6807\u5FD7\uFF0C\u6307\u4EE3\u5DEE\u5F02\u7B97\u6CD5</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="\u9759\u6001\u63D0\u5347" tabindex="-1"><a class="header-anchor" href="#\u9759\u6001\u63D0\u5347" aria-hidden="true">#</a> \u9759\u6001\u63D0\u5347</h3><p>Vue3\u4E2D\u5BF9\u4E0D\u53C2\u4E0E\u66F4\u65B0\u7684\u5143\u7D20\uFF0C\u4F1A\u505A\u9759\u6001\u63D0\u5347\uFF0C\u53EA\u4F1A\u88AB\u521B\u5EFA\u4E00\u6B21\uFF0C\u5728\u6E32\u67D3\u65F6\u76F4\u63A5\u590D\u7528</p><p>\u8FD9\u6837\u5C31\u514D\u53BB\u4E86\u91CD\u590D\u7684\u521B\u5EFA\u8282\u70B9\uFF0C\u5927\u578B\u5E94\u7528\u4F1A\u53D7\u76CA\u4E8E\u8FD9\u4E2A\u6539\u52A8\uFF0C\u514D\u53BB\u4E86\u91CD\u590D\u7684\u521B\u5EFA\u64CD\u4F5C\uFF0C\u4F18\u5316\u4E86\u8FD0\u884C\u65F6\u5019\u7684\u5185\u5B58\u5360\u7528</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>\u4F60\u597D<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>{{ message }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6CA1\u6709\u505A\u9759\u6001\u63D0\u5347\u4E4B\u524D</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">render</span><span class="token punctuation">(</span>_ctx<span class="token punctuation">,</span> _cache<span class="token punctuation">,</span> $props<span class="token punctuation">,</span> $setup<span class="token punctuation">,</span> $data<span class="token punctuation">,</span> $options<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token function">_openBlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">_createBlock</span><span class="token punctuation">(</span>_Fragment<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>
    <span class="token function">_createVNode</span><span class="token punctuation">(</span><span class="token string">&quot;span&quot;</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token string">&quot;\u4F60\u597D&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">_createVNode</span><span class="token punctuation">(</span><span class="token string">&quot;div&quot;</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token function">_toDisplayString</span><span class="token punctuation">(</span>_ctx<span class="token punctuation">.</span>message<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">1</span> <span class="token comment">/* TEXT */</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">64</span> <span class="token comment">/* STABLE_FRAGMENT */</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u505A\u4E86\u9759\u6001\u63D0\u5347\u4E4B\u540E</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> _hoisted_1 <span class="token operator">=</span> <span class="token comment">/*#__PURE__*/</span><span class="token function">_createVNode</span><span class="token punctuation">(</span><span class="token string">&quot;span&quot;</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token string">&quot;\u4F60\u597D&quot;</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token comment">/* HOISTED */</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">render</span><span class="token punctuation">(</span>_ctx<span class="token punctuation">,</span> _cache<span class="token punctuation">,</span> $props<span class="token punctuation">,</span> $setup<span class="token punctuation">,</span> $data<span class="token punctuation">,</span> $options<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token function">_openBlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">_createBlock</span><span class="token punctuation">(</span>_Fragment<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>
    _hoisted_1<span class="token punctuation">,</span>
    <span class="token function">_createVNode</span><span class="token punctuation">(</span><span class="token string">&quot;div&quot;</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token function">_toDisplayString</span><span class="token punctuation">(</span>_ctx<span class="token punctuation">.</span>message<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">1</span> <span class="token comment">/* TEXT */</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">64</span> <span class="token comment">/* STABLE_FRAGMENT */</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">// Check the console for the AST</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u9759\u6001\u5185\u5BB9_hoisted_1\u88AB\u653E\u7F6E\u5728render \u51FD\u6570\u5916\uFF0C\u6BCF\u6B21\u6E32\u67D3\u7684\u65F6\u5019\u53EA\u8981\u53D6 _hoisted_1 \u5373\u53EF</p><p>\u540C\u65F6 _hoisted_1 \u88AB\u6253\u4E0A\u4E86 PatchFlag \uFF0C\u9759\u6001\u6807\u8BB0\u503C\u4E3A -1 \uFF0C\u7279\u6B8A\u6807\u5FD7\u662F\u8D1F\u6574\u6570\u8868\u793A\u6C38\u8FDC\u4E0D\u4F1A\u7528\u4E8E Diff</p><h3 id="\u4E8B\u4EF6\u76D1\u542C\u7F13\u5B58" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u4EF6\u76D1\u542C\u7F13\u5B58" aria-hidden="true">#</a> \u4E8B\u4EF6\u76D1\u542C\u7F13\u5B58</h3><p>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u7ED1\u5B9A\u4E8B\u4EF6\u884C\u4E3A\u4F1A\u88AB\u89C6\u4E3A\u52A8\u6001\u7ED1\u5B9A\uFF0C\u6240\u4EE5\u6BCF\u6B21\u90FD\u4F1A\u53BB\u8FFD\u8E2A\u5B83\u7684\u53D8\u5316</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span> <span class="token attr-value"><span class="token punctuation attr-equals">=</span> <span class="token punctuation">&#39;</span>onClick<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span>\u70B9\u6211<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6CA1\u5F00\u542F\u4E8B\u4EF6\u76D1\u542C\u5668\u7F13\u5B58</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> render <span class="token operator">=</span> <span class="token comment">/*#__PURE__*/</span><span class="token function">_withId</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">render</span><span class="token punctuation">(</span>_ctx<span class="token punctuation">,</span> _cache<span class="token punctuation">,</span> $props<span class="token punctuation">,</span> $setup<span class="token punctuation">,</span> $data<span class="token punctuation">,</span> $options<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token function">_openBlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">_createBlock</span><span class="token punctuation">(</span><span class="token string">&quot;div&quot;</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>
    <span class="token function">_createVNode</span><span class="token punctuation">(</span><span class="token string">&quot;button&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> onClick<span class="token operator">:</span> _ctx<span class="token punctuation">.</span>onClick <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">&quot;\u70B9\u6211&quot;</span><span class="token punctuation">,</span> <span class="token number">8</span> <span class="token comment">/* PROPS */</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&quot;onClick&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
                                            <span class="token comment">// PROPS=1&lt;&lt;3,// 8 //\u52A8\u6001\u5C5E\u6027\uFF0C\u4F46\u4E0D\u5305\u542B\u7C7B\u540D\u548C\u6837\u5F0F</span>
  <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5F00\u542F\u4E8B\u4EF6\u4FA6\u542C\u5668\u7F13\u5B58\u540E</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">render</span><span class="token punctuation">(</span>_ctx<span class="token punctuation">,</span> _cache<span class="token punctuation">,</span> $props<span class="token punctuation">,</span> $setup<span class="token punctuation">,</span> $data<span class="token punctuation">,</span> $options<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token function">_openBlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">_createBlock</span><span class="token punctuation">(</span><span class="token string">&quot;div&quot;</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>
    <span class="token function">_createVNode</span><span class="token punctuation">(</span><span class="token string">&quot;button&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
      onClick<span class="token operator">:</span> _cache<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token punctuation">(</span>_cache<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>_ctx<span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">&quot;\u70B9\u6211&quot;</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u8FF0\u53D1\u73B0\u5F00\u542F\u4E86\u7F13\u5B58\u540E\uFF0C\u6CA1\u6709\u4E86\u9759\u6001\u6807\u8BB0\u3002\u4E5F\u5C31\u662F\u8BF4\u4E0B\u6B21diff\u7B97\u6CD5\u7684\u65F6\u5019\u76F4\u63A5\u4F7F\u7528</p><h3 id="ssr\u4F18\u5316" tabindex="-1"><a class="header-anchor" href="#ssr\u4F18\u5316" aria-hidden="true">#</a> SSR\u4F18\u5316</h3><p>\u5F53\u9759\u6001\u5185\u5BB9\u5927\u5230\u4E00\u5B9A\u91CF\u7EA7\u65F6\u5019\uFF0C\u4F1A\u7528createStaticVNode\u65B9\u6CD5\u5728\u5BA2\u6237\u7AEF\u53BB\u751F\u6210\u4E00\u4E2Astatic node\uFF0C\u8FD9\u4E9B\u9759\u6001node\uFF0C\u4F1A\u88AB\u76F4\u63A5innerHtml\uFF0C\u5C31\u4E0D\u9700\u8981\u521B\u5EFA\u5BF9\u8C61\uFF0C\u7136\u540E\u6839\u636E\u5BF9\u8C61\u6E32\u67D3</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>\u4F60\u597D<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  ...  // \u5F88\u591A\u4E2A\u9759\u6001\u5C5E\u6027
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>{{ message }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7F16\u8BD1\u540E</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> mergeProps <span class="token keyword">as</span> _mergeProps <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ssrRenderAttrs <span class="token keyword">as</span> _ssrRenderAttrs<span class="token punctuation">,</span> ssrInterpolate <span class="token keyword">as</span> _ssrInterpolate <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@vue/server-renderer&quot;</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">ssrRender</span><span class="token punctuation">(</span>_ctx<span class="token punctuation">,</span> _push<span class="token punctuation">,</span> _parent<span class="token punctuation">,</span> _attrs<span class="token punctuation">,</span> $props<span class="token punctuation">,</span> $setup<span class="token punctuation">,</span> $data<span class="token punctuation">,</span> $options<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> _cssVars <span class="token operator">=</span> <span class="token punctuation">{</span> style<span class="token operator">:</span> <span class="token punctuation">{</span> color<span class="token operator">:</span> _ctx<span class="token punctuation">.</span>color <span class="token punctuation">}</span><span class="token punctuation">}</span>
  <span class="token function">_push</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;div</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>
    <span class="token function">_ssrRenderAttrs</span><span class="token punctuation">(</span><span class="token function">_mergeProps</span><span class="token punctuation">(</span>_attrs<span class="token punctuation">,</span> _cssVars<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&gt;&lt;div&gt;&lt;span&gt;\u4F60\u597D&lt;/span&gt;...&lt;div&gt;&lt;span&gt;\u4F60\u597D&lt;/span&gt;&lt;div&gt;&lt;span&gt;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>
    <span class="token function">_ssrInterpolate</span><span class="token punctuation">(</span>_ctx<span class="token punctuation">.</span>message<span class="token punctuation">)</span>
  <span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/span&gt;&lt;/div&gt;&lt;/div&gt;</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,30);function h(f,y){const s=o("RouterLink");return c(),l("div",null,[n("nav",k,[n("ul",null,[n("li",null,[a(s,{to:"#v3-\u66F4\u5FEB"},{default:t(()=>[r]),_:1})]),n("li",null,[a(s,{to:"#\u7F16\u8BD1\u9636\u6BB5"},{default:t(()=>[d]),_:1}),n("ul",null,[n("li",null,[a(s,{to:"#diff\u7B97\u6CD5\u4F18\u5316"},{default:t(()=>[m]),_:1})]),n("li",null,[a(s,{to:"#\u9759\u6001\u63D0\u5347"},{default:t(()=>[v]),_:1})]),n("li",null,[a(s,{to:"#\u4E8B\u4EF6\u76D1\u542C\u7F13\u5B58"},{default:t(()=>[g]),_:1})]),n("li",null,[a(s,{to:"#ssr\u4F18\u5316"},{default:t(()=>[b]),_:1})])])])])]),_])}var x=e(i,[["render",h],["__file","v3\u66F4\u5FEB.html.vue"]]);export{x as default};

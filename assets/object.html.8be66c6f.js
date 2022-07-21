import{_ as p,r as o,o as c,c as l,b as n,a,w as e,f as i,e as t}from"./app.f25adddd.js";const u={},r={class:"table-of-contents"},d=t("ES6 Object \u65B0\u589E\u7279\u6027"),k=t("\u5C5E\u6027\u7B80\u5199"),b=t("\u5C5E\u6027\u540D\u8868\u8FBE\u5F0F"),m=t("super\u5173\u952E\u5B57"),v=t("\u6269\u5C55\u8FD0\u7B97\u7B26\u7684\u5E94\u7528"),g=t("\u5C5E\u6027\u7684\u904D\u5386"),y=t("\u5BF9\u8C61\u65B0\u589E\u7684\u65B9\u6CD5"),h=i(`<h2 id="es6-object-\u65B0\u589E\u7279\u6027" tabindex="-1"><a class="header-anchor" href="#es6-object-\u65B0\u589E\u7279\u6027" aria-hidden="true">#</a> ES6 Object \u65B0\u589E\u7279\u6027</h2><h3 id="\u5C5E\u6027\u7B80\u5199" tabindex="-1"><a class="header-anchor" href="#\u5C5E\u6027\u7B80\u5199" aria-hidden="true">#</a> \u5C5E\u6027\u7B80\u5199</h3><ol><li>\u5C5E\u6027\u3001\u65B9\u6CD5\u90FD\u80FD\u7B80\u5199</li></ol><ul><li>\u6CE8\u610F\uFF1A\u7B80\u5199\u7684\u5BF9\u8C61\u65B9\u6CD5\u4E0D\u80FD\u7528\u4F5C\u6784\u9020\u51FD\u6570\uFF0C\u5426\u5219\u4F1A\u62A5\u9519</li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> baz <span class="token operator">=</span> <span class="token punctuation">{</span>foo<span class="token operator">:</span>foo<span class="token punctuation">}</span>

<span class="token comment">// \u7B49\u540C\u4E8E</span>
<span class="token keyword">const</span> baz <span class="token operator">=</span> <span class="token punctuation">{</span>foo<span class="token punctuation">}</span>
<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>foo <span class="token operator">=</span> <span class="token string">&#39;bar&#39;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">new</span> <span class="token class-name">obj</span><span class="token punctuation">.</span><span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// \u62A5\u9519</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5C5E\u6027\u540D\u8868\u8FBE\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u5C5E\u6027\u540D\u8868\u8FBE\u5F0F" aria-hidden="true">#</a> \u5C5E\u6027\u540D\u8868\u8FBE\u5F0F</h3><ol><li>ES6 \u5141\u8BB8\u5B57\u9762\u91CF\u5B9A\u4E49\u5BF9\u8C61\u65F6\uFF0C\u5C06\u8868\u8FBE\u5F0F\u653E\u5728\u62EC\u53F7\u5185,\u8868\u8FBE\u5F0F\u8FD8\u53EF\u4EE5\u7528\u4E8E\u5B9A\u4E49\u65B9\u6CD5\u540D</li></ol><ul><li>\u6CE8\u610F\uFF0C\u5C5E\u6027\u540D\u8868\u8FBE\u5F0F\u5982\u679C\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u4F1A\u81EA\u52A8\u5C06\u5BF9\u8C61\u8F6C\u4E3A\u5B57\u7B26\u4E32[object Object]</li><li>\u6CE8\u610F\uFF0C\u5C5E\u6027\u540D\u8868\u8FBE\u5F0F\u4E0E\u7B80\u6D01\u8868\u793A\u6CD5\uFF0C\u4E0D\u80FD\u540C\u65F6\u4F7F\u7528\uFF0C\u4F1A\u62A5\u9519</li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> lastWord <span class="token operator">=</span> <span class="token string">&#39;last word&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token string-property property">&#39;first word&#39;</span><span class="token operator">:</span> <span class="token string">&#39;hello&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span>lastWord<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token string">&#39;world&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
a<span class="token punctuation">[</span><span class="token string">&#39;first word&#39;</span><span class="token punctuation">]</span> <span class="token comment">// &quot;hello&quot;</span>
a<span class="token punctuation">[</span>lastWord<span class="token punctuation">]</span> <span class="token comment">// &quot;world&quot;</span>
a<span class="token punctuation">[</span><span class="token string">&#39;last word&#39;</span><span class="token punctuation">]</span> <span class="token comment">// &quot;world&quot;</span>

<span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span><span class="token string">&#39;h&#39;</span> <span class="token operator">+</span> <span class="token string">&#39;ello&#39;</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">&#39;hi&#39;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
obj<span class="token punctuation">.</span><span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// hi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="super\u5173\u952E\u5B57" tabindex="-1"><a class="header-anchor" href="#super\u5173\u952E\u5B57" aria-hidden="true">#</a> super\u5173\u952E\u5B57</h3><ol><li>this\u5173\u952E\u5B57\u603B\u662F\u6307\u5411\u51FD\u6570\u6240\u5728\u7684\u5F53\u524D\u5BF9\u8C61\uFF0CES6 \u53C8\u65B0\u589E\u4E86\u53E6\u4E00\u4E2A\u7C7B\u4F3C\u7684\u5173\u952E\u5B57super\uFF0C\u6307\u5411\u5F53\u524D\u5BF9\u8C61\u7684\u539F\u578B\u5BF9\u8C61</li></ol><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> proto <span class="token operator">=</span> <span class="token punctuation">{</span>
  foo<span class="token operator">:</span> <span class="token string">&#39;hello&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  foo<span class="token operator">:</span> <span class="token string">&#39;world&#39;</span><span class="token punctuation">,</span>
  <span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">super</span><span class="token punctuation">.</span>foo<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

Object<span class="token punctuation">.</span><span class="token function">setPrototypeOf</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> proto<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u4E3Aobj\u8BBE\u7F6E\u539F\u578B\u5BF9\u8C61</span>
obj<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// &quot;hello&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6269\u5C55\u8FD0\u7B97\u7B26\u7684\u5E94\u7528" tabindex="-1"><a class="header-anchor" href="#\u6269\u5C55\u8FD0\u7B97\u7B26\u7684\u5E94\u7528" aria-hidden="true">#</a> \u6269\u5C55\u8FD0\u7B97\u7B26\u7684\u5E94\u7528</h3><ol><li>\u5728\u89E3\u6784\u8D4B\u503C\u4E2D\uFF0C\u672A\u88AB\u8BFB\u53D6\u7684\u53EF\u904D\u5386\u7684\u5C5E\u6027\uFF0C\u5206\u914D\u5230\u6307\u5B9A\u7684\u5BF9\u8C61\u4E0A\u9762</li></ol><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> <span class="token punctuation">{</span> x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> <span class="token operator">...</span>z <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token punctuation">{</span> x<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> a<span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> b<span class="token operator">:</span> <span class="token number">4</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
x <span class="token comment">// 1</span>
y <span class="token comment">// 2</span>
z <span class="token comment">// { a: 3, b: 4 }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6CE8\u610F\uFF1A\u89E3\u6784\u8D4B\u503C\u5FC5\u987B\u662F\u6700\u540E\u4E00\u4E2A\u53C2\u6570\uFF0C\u5426\u5219\u4F1A\u62A5\u9519</p><p>\u89E3\u6784\u8D4B\u503C\u662F\u6D45\u62F7\u8D1D</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span> a<span class="token operator">:</span> <span class="token punctuation">{</span> b<span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> <span class="token punctuation">{</span> <span class="token operator">...</span>x <span class="token punctuation">}</span> <span class="token operator">=</span> obj<span class="token punctuation">;</span>
obj<span class="token punctuation">.</span>a<span class="token punctuation">.</span>b <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span> <span class="token comment">// \u4FEE\u6539obj\u91CC\u9762a\u5C5E\u6027\u4E2D\u952E\u503C</span>
x<span class="token punctuation">.</span>a<span class="token punctuation">.</span>b <span class="token comment">// 2\uFF0C\u5F71\u54CD\u5230\u4E86\u7ED3\u6784\u51FA\u6765x\u7684\u503C</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5BF9\u8C61\u7684\u6269\u5C55\u8FD0\u7B97\u7B26\u7B49\u540C\u4E8E\u4F7F\u7528Object.assign()\u65B9\u6CD5</p><h3 id="\u5C5E\u6027\u7684\u904D\u5386" tabindex="-1"><a class="header-anchor" href="#\u5C5E\u6027\u7684\u904D\u5386" aria-hidden="true">#</a> \u5C5E\u6027\u7684\u904D\u5386</h3><ol><li>ES6 \u4E00\u5171\u6709 5 \u79CD\u65B9\u6CD5\u53EF\u4EE5\u904D\u5386\u5BF9\u8C61\u7684\u5C5E\u6027\u3002 <ul><li>for...in\uFF1A\u5FAA\u73AF\u904D\u5386\u5BF9\u8C61\u81EA\u8EAB\u7684\u548C\u7EE7\u627F\u7684\u53EF\u679A\u4E3E\u5C5E\u6027\uFF08\u4E0D\u542B Symbol \u5C5E\u6027\uFF09</li><li>Object.keys(obj)\uFF1A\u8FD4\u56DE\u4E00\u4E2A\u6570\u7EC4\uFF0C\u5305\u62EC\u5BF9\u8C61\u81EA\u8EAB\u7684\uFF08\u4E0D\u542B\u7EE7\u627F\u7684\uFF09\u6240\u6709\u53EF\u679A\u4E3E\u5C5E\u6027\uFF08\u4E0D\u542B Symbol \u5C5E\u6027\uFF09\u7684\u952E\u540D</li><li>Object.getOwnPropertyNames(obj)\uFF1A\u56DE\u4E00\u4E2A\u6570\u7EC4\uFF0C\u5305\u542B\u5BF9\u8C61\u81EA\u8EAB\u7684\u6240\u6709\u5C5E\u6027\uFF08\u4E0D\u542B Symbol \u5C5E\u6027\uFF0C\u4F46\u662F\u5305\u62EC\u4E0D\u53EF\u679A\u4E3E\u5C5E\u6027\uFF09\u7684\u952E\u540D</li><li>Object.getOwnPropertySymbols(obj)\uFF1A\u8FD4\u56DE\u4E00\u4E2A\u6570\u7EC4\uFF0C\u5305\u542B\u5BF9\u8C61\u81EA\u8EAB\u7684\u6240\u6709 Symbol \u5C5E\u6027\u7684\u952E\u540D</li><li>Reflect.ownKeys(obj)\uFF1A\u8FD4\u56DE\u4E00\u4E2A\u6570\u7EC4\uFF0C\u5305\u542B\u5BF9\u8C61\u81EA\u8EAB\u7684\uFF08\u4E0D\u542B\u7EE7\u627F\u7684\uFF09\u6240\u6709\u952E\u540D\uFF0C\u4E0D\u7BA1\u952E\u540D\u662F Symbol \u6216\u5B57\u7B26\u4E32\uFF0C\u4E5F\u4E0D\u7BA1\u662F\u5426\u53EF\u679A\u4E3E</li></ul></li></ol><div class="custom-container warning"><p class="custom-container-title">\u4E0A\u8FF0\u904D\u5386\uFF0C\u90FD\u9075\u5B88\u540C\u6837\u7684\u5C5E\u6027\u904D\u5386\u7684\u6B21\u5E8F\u89C4\u5219\uFF1A</p><ul><li>\u9996\u5148\u904D\u5386\u6240\u6709\u6570\u503C\u952E\uFF0C\u6309\u7167\u6570\u503C\u5347\u5E8F\u6392\u5217</li><li>\u5176\u6B21\u904D\u5386\u6240\u6709\u5B57\u7B26\u4E32\u952E\uFF0C\u6309\u7167\u52A0\u5165\u65F6\u95F4\u5347\u5E8F\u6392\u5217</li><li>\u6700\u540E\u904D\u5386\u6240\u6709 Symbol \u952E\uFF0C\u6309\u7167\u52A0\u5165\u65F6\u95F4\u5347\u5E8F\u6392</li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>Reflect<span class="token punctuation">.</span><span class="token function">ownKeys</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token punctuation">[</span><span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span> b<span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span> a<span class="token operator">:</span><span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// [&#39;2&#39;, &#39;10&#39;, &#39;b&#39;, &#39;a&#39;, Symbol()]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></div><h3 id="\u5BF9\u8C61\u65B0\u589E\u7684\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u5BF9\u8C61\u65B0\u589E\u7684\u65B9\u6CD5" aria-hidden="true">#</a> \u5BF9\u8C61\u65B0\u589E\u7684\u65B9\u6CD5</h3><p>\u5173\u4E8E\u5BF9\u8C61\u65B0\u589E\u7684\u65B9\u6CD5\uFF0C\u5206\u522B\u6709\u4EE5\u4E0B\uFF1A</p><ul><li><p>Object.is()</p><ul><li>\u4E25\u683C\u5224\u65AD\u4E24\u4E2A\u503C\u662F\u5426\u76F8\u7B49\uFF0C\u4E0E\u4E25\u683C\u6BD4\u8F83\u8FD0\u7B97\u7B26\uFF08===\uFF09\u7684\u884C\u4E3A\u57FA\u672C\u4E00\u81F4\uFF0C\u4E0D\u540C\u4E4B\u5904\u53EA\u6709\u4E24\u4E2A\uFF1A\u4E00\u662F+0\u4E0D\u7B49\u4E8E-0\uFF0C\u4E8C\u662FNaN\u7B49\u4E8E\u81EA\u8EAB</li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token operator">+</span><span class="token number">0</span> <span class="token operator">===</span> <span class="token operator">-</span><span class="token number">0</span> <span class="token comment">//true</span>
<span class="token number">NaN</span> <span class="token operator">===</span> <span class="token number">NaN</span> <span class="token comment">// false</span>

Object<span class="token punctuation">.</span><span class="token keyword">is</span><span class="token punctuation">(</span><span class="token operator">+</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token comment">// false</span>
Object<span class="token punctuation">.</span><span class="token keyword">is</span><span class="token punctuation">(</span><span class="token number">NaN</span><span class="token punctuation">,</span> <span class="token number">NaN</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Object.assign()</p><ul><li>Object.assign()\u65B9\u6CD5\u7528\u4E8E\u5BF9\u8C61\u7684\u5408\u5E76\uFF0C\u5C06\u6E90\u5BF9\u8C61source\u7684\u6240\u6709\u53EF\u679A\u4E3E\u5C5E\u6027\uFF0C\u590D\u5236\u5230\u76EE\u6807\u5BF9\u8C61target</li><li>Object.assign()\u65B9\u6CD5\u7684\u7B2C\u4E00\u4E2A\u53C2\u6570\u662F\u76EE\u6807\u5BF9\u8C61\uFF0C\u540E\u9762\u7684\u53C2\u6570\u90FD\u662F\u6E90\u5BF9\u8C61</li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> target <span class="token operator">=</span> <span class="token punctuation">{</span> a<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> b<span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> source1 <span class="token operator">=</span> <span class="token punctuation">{</span> b<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> c<span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> source2 <span class="token operator">=</span> <span class="token punctuation">{</span> c<span class="token operator">:</span> <span class="token number">3</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> source1<span class="token punctuation">,</span> source2<span class="token punctuation">)</span><span class="token punctuation">;</span>
target <span class="token comment">// {a:1, b:2, c:3}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6CE8\u610F\uFF1AObject.assign()\u65B9\u6CD5\u662F\u6D45\u62F7\u8D1D\uFF0C\u9047\u5230\u540C\u540D\u5C5E\u6027\u4F1A\u8FDB\u884C\u66FF\u6362</p></li><li><p>Object.getOwnPropertyDescriptors():\u8FD4\u56DE\u6307\u5B9A\u5BF9\u8C61\u6240\u6709\u81EA\u8EAB\u5C5E\u6027\uFF08\u975E\u7EE7\u627F\u5C5E\u6027\uFF09\u7684\u63CF\u8FF0\u5BF9\u8C61</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  foo<span class="token operator">:</span> <span class="token number">123</span><span class="token punctuation">,</span>
  <span class="token keyword">get</span> <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token string">&#39;abc&#39;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

Object<span class="token punctuation">.</span><span class="token function">getOwnPropertyDescriptors</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>
<span class="token comment">// { foo:</span>
<span class="token comment">//    { value: 123,</span>
<span class="token comment">//      writable: true,</span>
<span class="token comment">//      enumerable: true,</span>
<span class="token comment">//      configurable: true },</span>
<span class="token comment">//   bar:</span>
<span class="token comment">//    { get: [Function: get bar],</span>
<span class="token comment">//      set: undefined,</span>
<span class="token comment">//      enumerable: true,</span>
<span class="token comment">//      configurable: true } }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Object.setPrototypeOf()\uFF0CObject.getPrototypeOf()</p><ol><li>Object.setPrototypeOf\u65B9\u6CD5\u7528\u6765\u8BBE\u7F6E\u4E00\u4E2A\u5BF9\u8C61\u7684\u539F\u578B\u5BF9\u8C61</li></ol><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>Object<span class="token punctuation">.</span><span class="token function">setPrototypeOf</span><span class="token punctuation">(</span>object<span class="token punctuation">,</span> prototype<span class="token punctuation">)</span>

<span class="token comment">// \u7528\u6CD5</span>
<span class="token keyword">const</span> o <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">setPrototypeOf</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>\u7528\u4E8E\u8BFB\u53D6\u4E00\u4E2A\u5BF9\u8C61\u7684\u539F\u578B\u5BF9\u8C61 : Object.getPrototypeOf(obj);</li></ol></li><li><p>Object.keys(): \u8FD4\u56DE\u81EA\u8EAB\u7684\uFF08\u4E0D\u542B\u7EE7\u627F\u7684\uFF09\u6240\u6709\u53EF\u904D\u5386\uFF08enumerable\uFF09\u5C5E\u6027\u7684\u952E\u540D\u7684\u6570\u7EC4</p></li><li><p>Object.values():\u8FD4\u56DE\u81EA\u8EAB\u7684\uFF08\u4E0D\u542B\u7EE7\u627F\u7684\uFF09\u6240\u6709\u53EF\u904D\u5386\uFF08enumerable\uFF09\u5C5E\u6027\u7684\u952E\u5BF9\u5E94\u503C\u7684\u6570\u7EC4</p></li><li><p>Object.entries():\u8FD4\u56DE\u4E00\u4E2A\u5BF9\u8C61\u81EA\u8EAB\u7684\uFF08\u4E0D\u542B\u7EE7\u627F\u7684\uFF09\u6240\u6709\u53EF\u904D\u5386\uFF08enumerable\uFF09\u5C5E\u6027\u7684\u952E\u503C\u5BF9\u7684\u6570\u7EC4</p></li><li><p>Object.fromEntries():\u7528\u4E8E\u5C06\u4E00\u4E2A\u952E\u503C\u5BF9\u6570\u7EC4\u8F6C\u4E3A\u5BF9\u8C61</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>Object<span class="token punctuation">.</span><span class="token function">fromEntries</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
  <span class="token punctuation">[</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;bar&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token string">&#39;baz&#39;</span><span class="token punctuation">,</span> <span class="token number">42</span><span class="token punctuation">]</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment">// { foo: &quot;bar&quot;, baz: 42 }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul>`,25);function f(j,w){const s=o("RouterLink");return c(),l("div",null,[n("nav",r,[n("ul",null,[n("li",null,[a(s,{to:"#es6-object-\u65B0\u589E\u7279\u6027"},{default:e(()=>[d]),_:1}),n("ul",null,[n("li",null,[a(s,{to:"#\u5C5E\u6027\u7B80\u5199"},{default:e(()=>[k]),_:1})]),n("li",null,[a(s,{to:"#\u5C5E\u6027\u540D\u8868\u8FBE\u5F0F"},{default:e(()=>[b]),_:1})]),n("li",null,[a(s,{to:"#super\u5173\u952E\u5B57"},{default:e(()=>[m]),_:1})]),n("li",null,[a(s,{to:"#\u6269\u5C55\u8FD0\u7B97\u7B26\u7684\u5E94\u7528"},{default:e(()=>[v]),_:1})]),n("li",null,[a(s,{to:"#\u5C5E\u6027\u7684\u904D\u5386"},{default:e(()=>[g]),_:1})]),n("li",null,[a(s,{to:"#\u5BF9\u8C61\u65B0\u589E\u7684\u65B9\u6CD5"},{default:e(()=>[y]),_:1})])])])])]),h])}var _=p(u,[["render",f],["__file","object.html.vue"]]);export{_ as default};
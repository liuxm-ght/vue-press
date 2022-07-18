import{_ as e,r as t,o as l,c as i,a as n,d as c,b as s,e as a}from"./app.68e824a5.js";const o={},u=n("h3",{id:"_4-\u63D2\u4EF6-plugins",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_4-\u63D2\u4EF6-plugins","aria-hidden":"true"},"#"),s(" 4. \u63D2\u4EF6 plugins")],-1),r=a(`<li><p>\u6982\u5FF5</p><ul><li>\u7B2C\u4E09\u65B9\u63D2\u4EF6\u6765\u5B9E\u73B0\u6253\u5305\u4F18\u5316\u3001\u8D44\u6E90\u7BA1\u7406\u3001\u6CE8\u5165\u73AF\u5883\u53D8\u91CF\u7B49\u4EFB\u52A1\u3002 \u7B80\u5355\u7684\u53EF\u4EE5\u7406\u89E3\u4E3A\uFF1Aloader\u662F\u5728\u6253\u5305\u8FC7\u7A0B\u4E2D\u5904\u7406\u6587\u4EF6\uFF0Cplugin\u662F\u5728\u6253\u5305 \u524D \u548C \u540E \u5904\u7406\u3002</li></ul></li><li><p>\u539F\u7406</p><ol><li>webpack\u5728\u6253\u5305\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u83B7\u53D6\u5230\u6240\u6709\u6CE8\u518C\u7684plugins\uFF0C\u904D\u5386\u6267\u884C\u6240\u6709plugin\u7684apply\u51FD\u6570\uFF0C\u5E76\u4F20\u5165compiler\u6216compilation\u5B9E\u4F8B</li><li>\u63D2\u4EF6\u662F\u4E00\u4E2A\u7C7BClass\uFF0C\u63D0\u4F9B\u4E86apply\u65B9\u6CD5\uFF0C\u6765\u83B7\u53D6compiler\uFF08\u53EF\u5728\u6574\u4E2Awebpack\u7F16\u8BD1\u8FC7\u7A0B\u63D0\u4F9B\u751F\u547D\u5468\u671F\uFF09\u4E8B\u4EF6\u94A9\u5B50</li><li>\u901A\u8FC7compiler/compilation\u63D0\u4F9B\u7684hooks\u4E0B\u6302\u8F7D\u4E86\u5F88\u591A\u4E8B\u4EF6\u94A9\u5B50\uFF0C\u63D2\u4EF6\u901A\u8FC7\u8FD9\u4E9B\u94A9\u5B50\u6765\u6CE8\u518C\u81EA\u5B9A\u4E49\u7684\u4E8B\u4EF6\uFF0C\u5728webpack\u6267\u884C\u7684\u5404\u4E2A\u751F\u547D\u5468\u671F\uFF0C\u901A\u8FC7\u53D1\u5E03\u6765\u89E6\u53D1\u8FD9\u4E9B\u4E8B\u4EF6\uFF0C\u6267\u884C\u5176\u56DE\u8C03\u51FD\u6570\uFF0C\u6BCF\u4E2A\u94A9\u5B50\u90FD\u4F1A\u8FD4\u56DE\u4E00\u4E2Acompilation\u5BF9\u8C61\uFF08\u7F16\u8BD1\u4E0A\u4E0B\u6587\uFF09\uFF0C\u5728\u56DE\u8C03\u51FD\u6570\u91CC\u53EF\u4EE5\u62FF\u5230\u8FD9\u4E2Acompilation\u5BF9\u8C61\uFF0C\u505A\u4E00\u4E9B\u4E8B\u60C5\u3002</li></ol></li><li><p>\u4F7F\u7528\uFF1A</p><ul><li>plugins\u9009\u9879\u662F\u4E00\u4E2A\u6570\u7EC4\uFF0C\u91CC\u9762\u53EF\u4EE5\u653E\u5165\u591A\u4E2Aplugin\u63D2\u4EF6\u3002</li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token keyword">new</span> <span class="token class-name">htmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token keyword">new</span> <span class="token class-name">CleanWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token keyword">new</span> <span class="token class-name">miniCssExtractPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token keyword">new</span> <span class="token class-name">TxtWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>\u800C\u5BF9\u4E8Eplugins\u6570\u7EC4\u5BF9\u6392\u5E8F\u4F4D\u7F6E\u662F\u6CA1\u6709\u8981\u6C42\uFF0C\u56E0\u4E3A\u5728plugin\u7684\u5B9E\u73B0\u4E2D\uFF0Cwebpack\u4F1A\u901A\u8FC7\u6253\u5305\u8FC7\u7A0B\u7684\u751F\u547D\u5468\u671F\u94A9\u5B50\uFF0C\u56E0\u6B64\u5728\u63D2\u4EF6\u903B\u8F91\u4E2D\u5C31\u5DF2\u7ECF\u8BBE\u7F6E\u597D\u9700\u8981\u5728\u54EA\u4E2A\u751F\u547D\u5468\u671F\u6267\u884C\u54EA\u4E9B\u4EFB\u52A1\u3002</p></div></li><li><p>\u5E38\u7528 Plugin</p><ol><li><p>html-webpack-plugin</p><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>\u5F53\u6211\u4EEC\u662FWeb\u9879\u76EE\u7684\u65F6\u5019\uFF0C\u6211\u4EEC\u5FC5\u7136\u4F1A\u5B58\u5728html\u6587\u4EF6\u53BB\u5B9E\u73B0\u9875\u9762\u3002 \u800C\u5BF9\u4E8E\u5176\u4ED6\u7C7B\u578B\u7684\u6587\u4EF6\uFF0C\u6BD4\u5982css\u3001\u56FE\u7247\u3001\u6587\u4EF6\u7B49\u7B49\uFF0C\u6211\u4EEC\u662F\u53EF\u4EE5\u901A\u8FC7\u5F15\u5165\u5165\u53E3js\u6587\u4EF6\uFF0C\u7136\u540E\u901A\u8FC7loader\u8FDB\u884C\u89E3\u6790\u6253\u5305\u3002\u800C\u5BF9\u4E8Ehtml\u6587\u4EF6\uFF0C\u6211\u4EEC\u4E0D\u53EF\u80FD\u5C06\u5176\u5F15\u5165\u5230\u5165\u53E3\u6587\u4EF6\u7136\u540E\u89E3\u6790\u6253\u5305\uFF0C</p><ul><li>\u53CD\u800C\u6211\u4EEC\u8FD8\u9700\u8981\u5C06\u6253\u5305\u51FA\u6765\u7684bundle\u6587\u4EF6\u5F15\u5165html\u6587\u4EF6\u53BB\u4F7F\u7528</li></ul></div><p>\u56E0\u6B64\uFF0C\u6211\u4EEC\u9700\u8981\u5B9E\u73B0\u7684\u64CD\u4F5C\u53EA\u6709\u4E24\u4E2A\uFF0C 1. \u590D\u5236\u4E00\u4EFDhtml\u6587\u4EF6\u5230\u6253\u5305\u8DEF\u5F84\u4E0B 2. \u5C06\u6253\u5305\u51FA\u6765\u7684bundle\u6587\u4EF6\u81EA\u52A8\u5F15\u5165\u5230html\u6587\u4EF6\u4E2D</p><ol><li>\u4F7F\u7528:</li></ol><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>yarn add html<span class="token operator">-</span>webpack<span class="token operator">-</span>plugin <span class="token operator">-</span><span class="token constant">D</span>
<span class="token comment">// \u5F15\u5165htmlWebpackPlugin</span>
<span class="token keyword">const</span> htmlWebpackPlugin <span class="token operator">=</span> <span class="token keyword">require</span><span class="token punctuation">(</span><span class="token string">&#39;html-webpack-plugin&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   
plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token comment">// \u4F7F\u7528htmlWebpackPlugin\u63D2\u4EF6</span>
  <span class="token keyword">new</span> <span class="token class-name">htmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">// \u6307\u5B9Ahtml\u6A21\u677F</span>
      template<span class="token operator">:</span> <span class="token string">&#39;./src/index.html&#39;</span><span class="token punctuation">,</span>  
    <span class="token comment">// \u81EA\u5B9A\u4E49\u6253\u5305\u7684\u6587\u4EF6\u540D</span>
      filename<span class="token operator">:</span> <span class="token string">&#39;index.html&#39;</span>
      chunks<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;index&quot;</span><span class="token punctuation">]</span>  <span class="token comment">// \u53EA\u5F15\u5165index chunk</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">]</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u63A5\u4E0B\u6765\u6267\u884C\u4E00\u4E0B\u6253\u5305\uFF0C\u5C31\u4F1A\u53D1\u73B0dist\u6587\u4EF6\u4E0B\u4F1A\u751F\u6210\u4E00\u4E2Aindex.html\u3002\u6253\u5F00\u4F1A\u53D1\u73B0\uFF0Cwebpack\u4F1A\u81EA\u52A8\u5C06bundle\u6587\u4EF6\u5F15\u5165</p><details class="custom-container details"><summary>more : \u6709\u591A\u4E2Achunk\u7684\u65F6\u5019</summary><p>\u5982\u679C\u6211\u4EEC\u6709\u591A\u4E2Achunk\u7684\u65F6\u5019\uFF0C\u6211\u4EEC\u53EF\u4EE5\u6307\u5B9A\u8BE5html\u8981\u5F15\u5165\u54EA\u4E9Bchunk\u3002\u5728htmlWebpackPlugin\u914D\u7F6E\u4E2D\u6709\u4E00\u4E2Achunks\u9009\u9879\uFF0C\u662F\u4E00\u4E2A\u6570\u7EC4\uFF0C\u4F60\u53EA\u9700\u8981\u52A0\u5165\u4F60\u60F3\u5F15\u5165\u7684chunkName\u5373\u53EF\u3002</p><p>\u6253\u5305\u5B8C\u6210\u540E\uFF0Cdist\u6587\u4EF6\u4E0B\u4F1A\u51FA\u73B0index.html\u3001index.js\u548Cmain.js\uFF0C\u4F46\u662Findex.html\u53EA\u4F1A\u5F15\u5165index.js\u3002</p><p>\u5982\u679C\u6211\u4EEC\u9700\u8981\u5B9E\u73B0\u591A\u9875\u9762\u7684\u8BDD\uFF0C\u53EA\u9700\u8981\u518Dnew\u4E00\u4E2AhtmlWebpackPlugin\u5B9E\u4F8B\u5373\u53EF</p></details></li><li><p>clean-webpack-plugin \u6E05\u7406\u6253\u5305\u8DEF\u5F84</p><ol><li>\u5728\u6BCF\u6B21\u6253\u5305\u524D\uFF0C\u6211\u4EEC\u5176\u5B9E\u90FD\u9700\u8981\u53BB\u6E05\u7A7A\u4E00\u4E0B\u6253\u5305\u8DEF\u5F84\u7684\u6587\u4EF6\u3002</li></ol><p>\u5982\u679C\u6587\u4EF6\u91CD\u540D\u7684\u8BDD\uFF0Cwebpack\u8FD8\u4F1A\u81EA\u52A8\u8986\u76D6\uFF0C\u4F46\u662F\u5B9E\u9645\u4E2D\u6211\u4EEC\u90FD\u4F1A\u5728\u6253\u5305\u6587\u4EF6\u540D\u79F0\u4E2D\u52A0\u5165\u54C8\u5E0C\u503C\uFF0C\u56E0\u6B64\u6E05\u7A7A\u7684\u64CD\u4F5C\u4E0D\u5F97\u4E0D\u5B9E\u73B0\u3002</p><ol start="2"><li>\u4F7F\u7528\uFF1A</li></ol><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span>CleanWebpackPlugin<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">require</span><span class="token punctuation">(</span><span class="token string">&#39;clean-webpack-plugin&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token comment">// \u4F7F\u7528CleanWebpackPlugin</span>
    <span class="token keyword">new</span> <span class="token class-name">CleanWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token comment">// dry: true   // \u6253\u5F00\u53EF\u6D4B\u8BD5\uFF0C\u4E0D\u4F1A\u771F\u6B63\u6267\u884C\u5220\u9664\u52A8\u4F5C</span>
      cleanOnceBeforeBuildPatterns<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&#39;**/*&#39;</span><span class="token punctuation">,</span>  <span class="token comment">// \u5220\u9664dist\u8DEF\u5F84\u4E0B\u6240\u6709\u6587\u4EF6</span>
        <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">!package.json</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>  <span class="token comment">// \u4E0D\u5220\u9664dist/package.json\u6587\u4EF6</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6709\u4E9B\u60C5\u51B5\u4E0B\uFF0C\u6211\u4EEC\u4E0D\u9700\u8981\u5B8C\u5168\u6E05\u7A7A\u6253\u5305\u8DEF\u5F84\uFF0C\u8FD9\u65F6\u5019\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528\u5230\u4E00\u4E2A\u9009\u9879\uFF0C\u53EBcleanOnceBeforeBuildPatterns\uFF0C\u5B83\u662F\u4E00\u4E2A\u6570\u7EC4\uFF0C\u9ED8\u8BA4\u662F[**/*]\uFF0C\u4E5F\u5C31\u662F\u6E05\u7406output.path\u8DEF\u5F84\u4E0B\u6240\u6709\u4E1C\u897F\u3002\u800C\u4F60\u53EF\u4EE5\u5728\u91CC\u9762\u8F93\u5165\u53EA\u60F3\u5220\u9664\u7684\u6587\u4EF6\uFF0C\u540C\u65F6\u6211\u4EEC\u53EF\u4EE5\u8F93\u5165\u4E0D\u60F3\u5220\u9664\u7684\u6587\u4EF6\uFF0C\u53EA\u9700\u8981\u5728\u524D\u9762\u52A0\u4E0A\u4E00\u4E2A!\u3002</p></li><li><p>\u5176\u4ED6\u5E38\u7528\u7684 plugins</p><ul><li>mini-css-extract-plugin \uFF1AWebpack4.0 \u4E2D\u5C06 css \u4ECE bundle \u6587\u4EF6\u4E2D\u63D0\u53D6\u6210\u4E00\u4E2A\u72EC\u7ACB\u7684 css \u6587\u4EF6\uFF1B\u5728 3.0 \u7248\u672C\u4F7F\u7528 extract-text-webpack-plugin \u3002</li><li>terser-webpack-plugin \uFF1A\u538B\u7F29 js \u7684\u63D2\u4EF6\uFF0C\u652F\u6301\u538B\u7F29 es6 \u4EE3\u7801\uFF0Cwebpack4.0 \u9ED8\u8BA4\u4F7F\u7528\u7684\u4E00\u4E2A\u538B\u7F29\u63D2\u4EF6\uFF0C\u5728 3.0 \u7248\u672C\u4F7F\u7528 uglifyjs-webpack-plugin \u6765\u538B\u7F29 js \u4EE3\u7801\u3002</li><li>copy-webpack-plugin \uFF1A\u5C06\u6587\u4EF6\u6216\u8005\u6587\u4EF6\u5939\u62F7\u8D1D\u5230\u6784\u5EFA\u7684\u8F93\u51FA\u76EE\u5F55</li><li>zip-webpack-plugin \uFF1A\u5C06\u6253\u5305\u51FA\u7684\u8D44\u6E90\u751F\u6210\u4E00\u4E2A zip \u5305</li><li>optimize-css-assets-webpack-plugin \uFF1A\u538B\u7F29 css \u4EE3\u7801\u7684\u63D2\u4EF6</li><li>webpack.DefinePlugin \uFF1A\u521B\u5EFA\u4E00\u4E2A\u5728 \u7F16\u8BD1 \u65F6\u53EF\u4EE5\u914D\u7F6E\u7684\u5168\u5C40\u5E38\u91CF\uFF0C\u6BD4\u5982\u8BBE\u7F6E process .env .NODE_ENV\uFF0C\u53EF\u4EE5\u5728 js \u4E1A\u52A1\u4EE3\u7801\u4E2D\u4F7F\u7528\u3002</li><li>webpack.DllPlugin \uFF1A\u62BD\u53D6\u7B2C\u4E09\u65B9 js\uFF0C\u4F7F\u7528 dll \u6253\u5305\uFF0C\u7B14\u8005\u4F1A\u5728\u4E4B\u540E Webpack \u6027\u80FD\u4F18\u5316\u5C06\u5230\u3002</li></ul></li></ol></li>`,4),k=a(`<p>\u624B\u5199\u4E00\u4E2APlugin</p><ol><li>my-file-plugin</li></ol><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">/*
  \u5B9E\u73B0\u529F\u80FD\uFF1A
    \u8F93\u51FA\u4E00\u4E2A\u6587\u4EF6
    \u8BB0\u5F55\u8F93\u51FA\u6587\u4EF6\u7684\u540D\u79F0\u53CA\u5927\u5C0F
*/</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token keyword">class</span> <span class="token class-name">filePlugin</span> <span class="token punctuation">{</span>
  <span class="token function">apply</span><span class="token punctuation">(</span>compiler<span class="token punctuation">)</span><span class="token punctuation">{</span>
    compiler<span class="token punctuation">.</span>hooks<span class="token punctuation">.</span>emit<span class="token punctuation">.</span><span class="token function">tap</span><span class="token punctuation">(</span><span class="token string">&#39;filePlugin&#39;</span><span class="token punctuation">,</span><span class="token punctuation">(</span>compilation<span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>compilation<span class="token punctuation">.</span>assets<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> filename <span class="token keyword">in</span> compilation<span class="token punctuation">.</span>assets<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u83B7\u53D6\u6587\u4EF6\u540D\u79F0\u548C\u6587\u4EF6\u5927\u5C0F</span>
        str <span class="token operator">+=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>filename<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> -&gt; </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>compilation<span class="token punctuation">.</span>assets<span class="token punctuation">[</span>filename<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">&#39;size&#39;</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">1024</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">KB\\n</span><span class="token template-punctuation string">\`</span></span>
      <span class="token punctuation">}</span>
      <span class="token comment">// \u65B0\u5EFAfileSize.txt</span>
      compilation<span class="token punctuation">.</span>assets<span class="token punctuation">[</span><span class="token string">&#39;fileSize.txt&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u5185\u5BB9</span>
        <span class="token function-variable function">source</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> str
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),d={href:"https://mp.weixin.qq.com/s/2rUjUM6Zfu1I7cjRUDschg",target:"_blank",rel:"noopener noreferrer"},m=s("\u53C2\u8003\u6587\u7AE0");function v(b,g){const p=t("ExternalLinkIcon");return l(),i("div",null,[u,n("ol",null,[r,n("li",null,[k,n("p",null,[n("a",d,[m,c(p)])])])])])}var w=e(o,[["render",v],["__file","Plugins.html.vue"]]);export{w as default};

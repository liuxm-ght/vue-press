import{_ as n,o as s,c as a,g as e}from"./app.c10353cc.js";const p={},t=e(`<h3 id="webpack-dev-server" tabindex="-1"><a class="header-anchor" href="#webpack-dev-server" aria-hidden="true">#</a> Webpack-dev-server</h3><ol><li><p>\u6982\u8FF0\uFF1A \u5F53\u6211\u4EEC\u4F7F\u7528webpack\u7684\u65F6\u5019\uFF0C\u4E0D\u4EC5\u4EC5\u53EA\u662F\u7528\u4E8E\u6253\u5305\u6587\u4EF6\uFF0C\u5927\u90E8\u5206\u6211\u4EEC\u8FD8\u4F1A\u4F9D\u8D56webpack\u6765\u642D\u5EFA\u672C\u5730\u670D\u52A1\uFF0C\u540C\u65F6\u5229\u7528\u5176\u70ED\u66F4\u65B0\u7684\u529F\u80FD\uFF0C\u8BA9\u6211\u4EEC\u66F4\u597D\u7684\u5F00\u53D1\u548C\u8C03\u8BD5\u4EE3\u7801\u3002</p></li><li><p>\u4F7F\u7528\uFF1A</p></li></ol><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>  yarn add webpack<span class="token operator">-</span>dev<span class="token operator">-</span>server <span class="token operator">-</span><span class="token constant">D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u7136\u540E\u6267\u884C\u4E0B\u5217\u4EE3\u7801\u5F00\u542F\u670D\u52A1\uFF1A
</code></pre><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>  npx webpack serve
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>\u6216\u8005\u5728package.json\u914D\u7F6E\u4E00\u4E0B\uFF1A
</code></pre><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>  <span class="token string-property property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;serve&quot;</span><span class="token operator">:</span> <span class="token string">&quot;webpack serve --mode development&quot;</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>\u7136\u540E\u901A\u8FC7yarn serve\u8FD0\u884C\u3002
\u8FD9\u65F6\uFF0Cwebpack\u4F1A\u9ED8\u8BA4\u5F00\u542Fhttp://localhost:8080/\u670D\u52A1\uFF08\u5177\u4F53\u770B\u4F60\u4EEC\u8FD0\u884C\u8FD4\u56DE\u7684\u4EE3\u7801\uFF09\uFF0C\u800C\u8BE5\u670D\u52A1\u6307\u5411\u7684\u662Fdist/index.html\u3002
* \u4F46\u4F60\u4F1A\u53D1\u73B0\uFF0C\u4F60\u7684dist\u4E2D\u5176\u5B9E\u662F\u6CA1\u6709\u4EFB\u4F55\u6587\u4EF6\u7684\uFF0C\u8FD9\u662F\u56E0\u4E3Awebpack\u5C06\u5B9E\u65F6\u7F16\u8BD1\u540E\u7684\u6587\u4EF6\u90FD\u4FDD\u5B58\u5230\u4E86\u5185\u5B58\u5F53\u4E2D\u3002
</code></pre><ol start="3"><li><p>webpack-dev-server\u7684\u597D\u5904(\u53EF\u4EE5\u5B9E\u73B0\u70ED\u66F4\u65B0)</p><ol><li>\u5176\u5B9Ewebpack\u81EA\u5E26\u63D0\u4F9B\u4E86--watch\u547D\u4EE4\uFF0C\u53EF\u4EE5\u5B9E\u73B0\u52A8\u6001\u76D1\u542C\u6587\u4EF6\u7684\u6539\u53D8\u5E76\u5B9E\u65F6\u6253\u5305\uFF0C\u8F93\u51FA\u65B0\u7684\u6253\u5305\u6587\u4EF6\u3002 \u4F46\u8FD9\u79CD\u65B9\u6848\u5B58\u5728\u7740\u51E0\u4E2A\u7F3A\u70B9\uFF0C\u4E00\u5C31\u662F\u6BCF\u6B21\u4F60\u4E00\u4FEE\u6539\u4EE3\u7801\uFF0Cwebpack\u5C31\u4F1A\u5168\u90E8\u6587\u4EF6\u8FDB\u884C\u91CD\u65B0\u6253\u5305\uFF0C\u8FD9\u65F6\u5019\u6BCF\u6B21\u66F4\u65B0\u6253\u5305\u7684\u901F\u5EA6\u5C31\u4F1A\u6162\u4E86\u5F88\u591A\uFF1B\u5176\u6B21\uFF0C\u8FD9\u6837\u7684\u76D1\u542C\u65B9\u5F0F\u505A\u4E0D\u5230\u70ED\u66F4\u65B0\uFF0C\u5373\u6BCF\u6B21\u4F60\u4FEE\u6539\u4EE3\u7801\u540E\uFF0Cwebpack\u91CD\u65B0\u7F16\u8BD1\u6253\u5305\u540E\uFF0C\u4F60\u5C31\u5F97\u624B\u52A8\u5237\u65B0\u6D4F\u89C8\u5668\uFF0C\u624D\u80FD\u770B\u5230\u6700\u65B0\u7684\u9875\u9762\u7ED3\u679C\u3002</li><li>\u800Cwebpack-dev-server\uFF0C\u5374\u6709\u6548\u4E86\u5F25\u8865\u8FD9\u4E24\u4E2A\u95EE\u9898\u3002</li></ol><ul><li>\u5B83\u7684\u5B9E\u73B0\uFF0C\u662F\u4F7F\u7528\u4E86express\u542F\u52A8\u4E86\u4E00\u4E2Ahttp\u670D\u52A1\u5668\uFF0C\u6765\u4F3A\u5019\u8D44\u6E90\u6587\u4EF6\u3002\u7136\u540E\u8FD9\u4E2Ahttp\u670D\u52A1\u5668\u548C\u5BA2\u6237\u7AEF\u4F7F\u7528\u4E86websocket\u901A\u8BAF\u534F\u8BAE\uFF0C\u5F53\u539F\u59CB\u6587\u4EF6\u4F5C\u51FA\u6539\u52A8\u540E\uFF0Cwebpack-dev-server\u5C31\u4F1A\u5B9E\u65F6\u7F16\u8BD1\uFF0C\u7136\u540E\u5C06\u6700\u540E\u7F16\u8BD1\u6587\u4EF6\u5B9E\u65F6\u6E32\u67D3\u5230\u9875\u9762\u4E0A\u3002</li></ul></li><li><p>webpack-dev-server\u914D\u7F6E \u5728webpack.config.js\u4E2D\uFF0C\u6709\u4E00\u4E2AdevServer\u9009\u9879\u662F\u7528\u6765\u914D\u7F6Ewebpack-dev-server\uFF0C\u8FD9\u91CC\u7B80\u5355\u8BB2\u51E0\u4E2A\u6BD4\u8F83\u5E38\u7528\u7684\u914D\u7F6E\u3002</p><ul><li>contentBase: &#39;./dist&#39;, / / \u6307\u5B9A\u76EE\u5F55 \u8D77 \u670D\u52A1\u5668</li><li>port \u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7port\u6765\u8BBE\u7F6E\u670D\u52A1\u5668\u7AEF\u53E3\u53F7\u3002</li><li>open \u5728devServer\u4E2D\u6709\u4E00\u4E2Aopen\u9009\u9879\uFF0C\u9ED8\u8BA4\u662F\u4E3Afalse\uFF0C\u5F53\u4F60\u8BBE\u7F6E\u4E3Atrue\u7684\u65F6\u5019\uFF0C\u4F60\u6BCF\u6B21\u8FD0\u884Cwebpack-dev-server\u5C31\u4F1A\u81EA\u52A8\u5E2E\u4F60\u6253\u5F00\u6D4F\u89C8\u5668\u3002</li><li>proxy \u8FD9\u4E2A\u9009\u9879\u662F\u7528\u6765\u8BBE\u7F6E\u672C\u5730\u5F00\u53D1\u7684\u8DE8\u57DF\u4EE3\u7406\u7684\uFF0Cproxy\u7684\u503C\u5FC5\u987B\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u5728\u91CC\u9762\u6211\u4EEC\u53EF\u4EE5\u914D\u7F6E\u4E00\u4E2A\u6216\u591A\u4E2A\u8DE8\u57DF\u4EE3\u7406\u3002\u6700\u7B80\u5355\u7684\u914D\u7F6E\u5199\u6CD5\u5C31\u662F\u5730\u5740\u914D\u4E0Aapi\u5730\u5740\u3002</li><li>changeOrigin\uFF0C\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u4EE3\u7406\u65F6\u4F1A\u4FDD\u7559\u4E3B\u673A\u5934\u7684\u6765\u6E90\uFF0C\u5F53\u6211\u4EEC\u5C06\u5176\u8BBE\u7F6E\u4E3Atrue\u53EF\u4EE5\u8986\u76D6\u8FD9\u79CD\u884C\u4E3A</li><li>secure \uFF0C\u5F53\u4F60\u7684\u63A5\u53E3\u4F7F\u7528\u4E86https\u7684\u65F6\u5019\uFF0C\u9700\u8981\u5C06\u5176\u8BBE\u7F6E\u4E3Afalse</li><li>publicPath\uFF0C \u516C\u5171\u76EE\u5F55</li></ul><p>\u914D\u7F6E\u6587\u4EF6\u914D\u7F6E\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>  devServer<span class="token operator">:</span> <span class="token punctuation">{</span>
    contentBase<span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;static&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>    <span class="token comment">// \u544A\u8BC9\u670D\u52A1\u5668\u4ECE\u54EA\u91CC\u63D0\u4F9B\u5185\u5BB9(\u9ED8\u8BA4\u5F53\u524D\u5DE5\u4F5C\u76EE\u5F55)</span>
    openPage<span class="token operator">:</span> <span class="token string">&#39;views/index.html&#39;</span><span class="token punctuation">,</span>  <span class="token comment">// \u6307\u5B9A\u9ED8\u8BA4\u542F\u52A8\u6D4F\u89C8\u5668\u65F6\u6253\u5F00\u7684\u9875\u9762</span>
    index<span class="token operator">:</span> <span class="token string">&#39;views/index.html&#39;</span><span class="token punctuation">,</span>  <span class="token comment">// \u6307\u5B9A\u9996\u9875\u4F4D\u7F6E</span>
    watchContentBase<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// contentBase\u4E0B\u6587\u4EF6\u53D8\u52A8\u5C06reload\u9875\u9762(\u9ED8\u8BA4false)</span>
    host<span class="token operator">:</span> <span class="token string">&#39;localhost&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u9ED8\u8BA4localhost,\u60F3\u5916\u90E8\u53EF\u8BBF\u95EE\u7528&#39;0.0.0.0&#39;</span>
    inline<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u53EF\u4EE5\u76D1\u63A7js\u53D8\u5316</span>
    port<span class="token operator">:</span> <span class="token number">8888</span><span class="token punctuation">,</span>  <span class="token comment">// \u81EA\u5B9A\u4E49\u7AEF\u53E3\u53F7</span>
    open<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>   <span class="token comment">// \u81EA\u52A8\u6253\u5F00\u6D4F\u89C8\u5668\u7A97\u53E3</span>
    proxy<span class="token operator">:</span> <span class="token punctuation">{</span>  <span class="token comment">// \u8DE8\u57DF\u4EE3\u7406</span>
      <span class="token string-property property">&#39;/api&#39;</span><span class="token operator">:</span> <span class="token string">&#39;http://localhost:3000&#39;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&#39;/api2&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// \u8FD9\u65F6\u5019\uFF0C\u5F53\u4F60\u8BF7\u6C42/api2/users\u7684\u65F6\u5019\uFF0C\u5C31\u4F1A\u4EE3\u7406\u5230http://localhost:3000/users\u3002</span>
        target<span class="token operator">:</span> <span class="token string">&#39;http://localhost:3000&#39;</span><span class="token punctuation">,</span>  <span class="token comment">// \u4EE3\u7406\u5730\u5740</span>
        pathRewrite<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token string-property property">&#39;^/api2&#39;</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>   <span class="token comment">// \u91CD\u5199\u8DEF\u5F84</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    secure<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>  <span class="token comment">// \u4F7F\u7528https</span>
    changeOrigin<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>   <span class="token comment">// \u8986\u76D6\u4E3B\u673A\u6E90</span>
    compress<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u4E00\u5207\u670D\u52A1\u90FD\u542F\u7528gzip \u538B\u7F29</span>
    disableHostCheck<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// true\uFF1A\u4E0D\u8FDB\u884Chost\u68C0\u67E5</span>
    stats<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// \u8BBE\u7F6E\u63A7\u5236\u53F0\u7684\u63D0\u793A\u4FE1\u606F</span>
      chunks<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      children<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      modules<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      entrypoints<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// \u662F\u5426\u8F93\u51FA\u5165\u53E3\u4FE1\u606F</span>
      warnings<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      performance<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// \u662F\u5426\u8F93\u51FAwebpack\u5EFA\u8BAE\uFF08\u5982\u6587\u4EF6\u4F53\u79EF\u5927\u5C0F\uFF09</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    writeToDisk<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span><span class="token comment">//\u4E5F\u53EF\u4EE5\u5199\u5165\u786C\u76D8\uFF0C\u4EA7\u51FA\u5B9E\u4F53\u6587\u4EF6\uFF1A</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code> * publicPath
   \u5047\u8BBE\u670D\u52A1\u5668\u8FD0\u884C\u5728 http://localhost:8080 \u5E76\u4E14 output.filename \u88AB\u8BBE\u7F6E\u4E3A bundle.js\u3002\u9ED8\u8BA4 publicPath \u662F &quot;/&quot;\uFF0C\u6240\u4EE5\u4F60\u7684\u5305(bundle)\u53EF\u4EE5\u901A\u8FC7 http://localhost:8080/bundle.js \u8BBF\u95EE\u3002
   \u53EF\u4EE5\u4FEE\u6539 publicPath\uFF0C\u5C06 bundle \u653E\u5728\u4E00\u4E2A\u76EE\u5F55\uFF1A
     publicPath: &quot;/assets/&quot;
   \u4F60\u7684\u5305\u73B0\u5728\u53EF\u4EE5\u901A\u8FC7 http://localhost:8080/assets/bundle.js \u8BBF\u95EE\u3002
 
 * historyApiFallback
   \u5F53\u4F7F\u7528 HTML5 History API (opens new window)\u65F6\uFF0C\u4EFB\u610F\u7684 404 \u54CD\u5E94\u90FD\u53EF\u80FD\u9700\u8981\u88AB\u66FF\u4EE3\u4E3A index.html\u3002\u901A\u8FC7\u4F20\u5165\u4EE5\u4E0B\u542F\u7528\uFF1A
     historyApiFallback: true
   \u901A\u8FC7\u4F20\u5165\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u6BD4\u5982\u4F7F\u7528 rewrites \u8FD9\u4E2A\u9009\u9879\uFF0C\u6B64\u884C\u4E3A\u53EF\u8FDB\u4E00\u6B65\u5730\u63A7\u5236\uFF1A
    \`\`\`ts
     historyApiFallback: {
       rewrites: [
         { from: /^\\/$/, to: &#39;/views/landing.html&#39; },
         { from: /^\\/subpage/, to: &#39;/views/subpage.html&#39; },
         { from: /./, to: &#39;/views/404.html&#39; }
       ]
     }
    \`\`\`
 * hot
   \u542F\u7528 webpack \u7684\u6A21\u5757\u70ED\u66FF\u6362\u7279\u6027\uFF0C
   &lt;!-- \u8BE6\u60C5\u89C1\u300AHMR\u70ED\u66F4\u65B0\u300B --&gt;
</code></pre></li><li><p>\u5B9E\u73B0\u4E00\u4E2A\u7B80\u5355\u7684 webpack-dev-server\uFF1A</p><ol><li><p>\u5B9E\u73B0\u4E00\u4E2A\u6CA1\u6709\u70ED\u66F4\u65B0\u7684\u7B80\u5355\u7684webpack-dev-server\uFF0C\u5176\u539F\u7406\u662F\uFF1A</p></li><li><p>\u901A\u8FC7express\u6765\u542F\u52A8\u4E00\u4E2A\u670D\u52A1</p></li><li><p>\u5229\u7528webpack-dev-middleware\u6765\u76D1\u542C\u6587\u4EF6\u7684\u53D8\u5316\uFF0C\u5F53\u6587\u4EF6\u53D8\u5316\u65F6\u81EA\u52A8\u5237\u65B0\u670D\u52A1\u5668</p></li><li><p>\u5B9E\u73B0:</p></li><li><p>\u6839\u76EE\u5F55\u4E0B\u521B\u5EFA\u4E00\u4E2Aserver.js\u6587\u4EF6\uFF0C\u5E76\u5B89\u88C5\u4F9D\u8D56</p></li></ol><pre><code> &lt;!-- npm install express webpack-dev-middleware -D --&gt;
</code></pre><ol start="2"><li>\u7F16\u5199server.js\u6587\u4EF6<div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>  <span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token keyword">require</span><span class="token punctuation">(</span><span class="token string">&#39;express&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> webpack <span class="token operator">=</span> <span class="token keyword">require</span><span class="token punctuation">(</span><span class="token string">&#39;webpack&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// \u76D1\u542C\u6587\u4EF6\u53D8\u5316</span>
  <span class="token keyword">const</span> webpackDevMiddleware <span class="token operator">=</span> <span class="token keyword">require</span><span class="token punctuation">(</span><span class="token string">&#39;webpack-dev-middleware&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// \u5BFC\u5165\u914D\u7F6E\u6587\u4EF6</span>
  <span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token keyword">require</span><span class="token punctuation">(</span><span class="token string">&#39;./webpack.config.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// \u8FD4\u56DE webpack \u7684\u7F16\u8BD1\u5668</span>
  <span class="token comment">// complier \u7684\u610F\u601D\u5C31\u662F \u901A\u8FC7 webpack \u548C \u5176\u914D\u7F6E\u6587\u4EF6\uFF0C\u53EF\u4EE5\u968F\u65F6\u5BF9\u6587\u4EF6\u8FDB\u884C\u7F16\u8BD1</span>
  <span class="token keyword">const</span> complier <span class="token operator">=</span> <span class="token function">webpack</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// \u521B\u5EFA\u670D\u52A1\u5668\u7684\u5B9E\u4F8B</span>
  <span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// \u670D\u52A1\u6CE8\u518C\u4E2D\u95F4\u4EF6\uFF0C\u4E2D\u95F4\u4EF6\u529F\u80FD\u662F\u76D1\u542Cwebpack\u7684\u7F16\u8BD1\uFF0C\u4E2D\u95F4\u4EF6\u53EF\u4EE5\u63A5\u53D7\u4E24\u4E2A\u53C2\u6570\uFF0C\u7F16\u8BD1\u5668 \u548C \u5176\u4ED6\u7684\u914D\u7F6E\u53C2\u6570</span>
  app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">webpackDevMiddleware</span><span class="token punctuation">(</span>complier<span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// \u542F\u52A8\u4E00\u4E2A express \u670D\u52A1</span>
  app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;server is running&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>\u6267\u884Cserver.js\u6587\u4EF6 package.json \u6587\u4EF6\u7684 scripts<div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>  <span class="token string-property property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;bundle&quot;</span><span class="token operator">:</span> <span class="token string">&quot;webpack&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;start&quot;</span><span class="token operator">:</span> <span class="token string">&quot;webpack-dev-server&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;server&quot;</span><span class="token operator">:</span> <span class="token string">&quot;node server.js&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>\u8FD0\u884C npm run server\uFF0C\u6211\u4EEC\u53EF\u4EE5\u53D1\u73B0\u5728 localhost:3000 \u8D77\u4E86\u4E00\u4E2A\u670D\u52A1\uFF0C\u9875\u9762\u4E0A\u53EF\u4EE5\u770B\u5230 webpack-dev-server \u6587\u5B57</li><li>\u4FEE\u6539\u4EE3\u7801 \u4FEE\u6539\u4E00\u4E0B header.js \u6587\u4EF6\uFF0C\u4FEE\u6539\u5B8C\u670D\u52A1\u4F1A\u5237\u65B0\uFF0C\u4F46\u9875\u9762\u4E0D\u4F1A\u81EA\u52A8\u5237\u65B0\uFF0C\u6211\u4EEC\u9700\u8981\u81EA\u5DF1\u5237\u65B0\u4E00\u4E0B\u9875\u9762\u3002\u5176\u5B9E\u6548\u679C\u5C31\u8DDF webpack --watch \u4E00\u6837\u3002</li></ol></li></ol>`,9),o=[t];function c(l,i){return s(),a("div",null,o)}var u=n(p,[["render",c],["__file","WebpackDevServer.html.vue"]]);export{u as default};

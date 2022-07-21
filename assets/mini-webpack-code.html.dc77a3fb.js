import{_ as n,o as s,c as a,f as t}from"./app.f25adddd.js";const p={},e=t(`<h2 id="mini-webpack-\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#mini-webpack-\u4EE3\u7801" aria-hidden="true">#</a> mini webpack \u4EE3\u7801</h2><details class="custom-container details"><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token keyword">require</span><span class="token punctuation">(</span><span class="token string">&#39;fs&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token keyword">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> parser <span class="token operator">=</span> <span class="token keyword">require</span><span class="token punctuation">(</span><span class="token string">&#39;@babel/parser&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> traverse <span class="token operator">=</span> <span class="token keyword">require</span><span class="token punctuation">(</span><span class="token string">&#39;@babel/traverse&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>default
<span class="token keyword">const</span> babel <span class="token operator">=</span> <span class="token keyword">require</span><span class="token punctuation">(</span><span class="token string">&#39;@babel/core&#39;</span><span class="token punctuation">)</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token keyword">class</span> <span class="token class-name">Webpack</span> <span class="token punctuation">{</span>
   <span class="token doc-comment comment">/**
  *  \u6784\u9020\u51FD\u6570\uFF0C\u83B7\u53D6webpack\u914D\u7F6E
  *  <span class="token keyword">@param</span> <span class="token punctuation">{</span>*<span class="token punctuation">}</span> options
  */</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// console.log(options,&#39;webpack.config.js \u5185\u5BB9&#39;);</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span>entry<span class="token punctuation">,</span> output<span class="token punctuation">}</span> <span class="token operator">=</span> options<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>entry <span class="token operator">=</span> options<span class="token punctuation">.</span>refPath <span class="token operator">?</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>options<span class="token punctuation">.</span>refPath<span class="token punctuation">,</span>entry<span class="token punctuation">)</span> <span class="token operator">:</span> entry<span class="token punctuation">;</span>  <span class="token comment">// \u5165\u53E3\u6587\u4EF6</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>output <span class="token operator">=</span> output<span class="token punctuation">;</span>  <span class="token comment">// \u5BFC\u51FA\u914D\u7F6E</span>
  <span class="token punctuation">}</span>
  <span class="token doc-comment comment">/**
  *  webpack\u8FD0\u884C\u51FD\u6570
  */</span>
  <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u5F00\u59CB\u6267\u884CWebpack!&#39;</span><span class="token punctuation">)</span>
    <span class="token comment">//\u89E3\u6790\u5165\u53E3\u6587\u4EF6</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>depsGraph <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">parseModule</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>entry<span class="token punctuation">)</span>

    <span class="token comment">//\u6253\u5305\u8F93\u51FA</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">bundle</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">/*
  * \u89E3\u6790\u5165\u53E3\u6587\u4EF6\uFF0C\u5206\u6790\u5165\u53E3\u6587\u4EF6\u4FE1\u606F\uFF0C\u627E\u5230import\u5F15\u7528\u76F8\u5173\u7684\u8F6C\u4E3Acommonjs\u8BED\u6CD5\uFF0C\u5269\u4E0B\u7684\u8F6C\u4E3A\u5B57\u7B26\u4E32\uFF0C\u7528eval\u53BB\u6267\u884C\uFF0C\u7528\u533F\u540D\u51FD\u6570\u5305\u8D77\u6765
  */</span>
  <span class="token function">parseModule</span><span class="token punctuation">(</span>files<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">//\u5206\u6790\u6A21\u5757\u4FE1\u606F</span>
    <span class="token comment">/*
      \u505A\u4E86\u51E0\u4EF6\u4E8B
        1.\u5C06\u5F53\u524D\u6A21\u5757\u8F6C\u4E3AAST\uFF0C\u83B7\u53D6\u5F53\u524D\u6A21\u5757\u5F15\u7528\u6620\u5C04\u8868
        2.\u5229\u7528AST\u5C06ES6\u8BED\u6CD5\u8F6C\u4E3AES5
    */</span>
    <span class="token keyword">const</span> entry <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getModuleInfo</span><span class="token punctuation">(</span>files<span class="token punctuation">)</span>

    <span class="token comment">/*
      \u4FDD\u5B58\u6240\u6709\u6A21\u5757\u7684\u4FE1\u606F
        1.files \u6A21\u5757\u7684\u552F\u4E00\u6807\u8BC6id
        2.code \u6A21\u5757\u7684\u542Bcommonjs\u7684ES5\u4EE3\u7801
        3.deps \u6A21\u5757\u7684\u5F15\u7528\u6620\u5C04\u8868
    */</span>
    <span class="token keyword">const</span> temp <span class="token operator">=</span> <span class="token punctuation">[</span>entry<span class="token punctuation">]</span>

    <span class="token comment">//\u9012\u5F52\u904D\u5386,\u83B7\u53D6\u5F15\u5165\u6A21\u5757\u4EE3\u7801 </span>
    <span class="token comment">//\u6700\u7EC8\u5F97\u5230\u7684temp\u5C06\u5B58\u6709\u6240\u4EE5\u6A21\u5757\u7684\u4FE1\u606F\uFF0C\u5305\u62EC\u4ED6\u4EEC\u4E4B\u95F4\u7684\u5F15\u7528\u5173\u7CFB</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getDeps</span><span class="token punctuation">(</span>temp<span class="token punctuation">,</span>entry<span class="token punctuation">)</span>

    <span class="token keyword">const</span> depsGraph <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    temp<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span> m <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      depsGraph<span class="token punctuation">[</span>m<span class="token punctuation">.</span>files<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
        deps<span class="token operator">:</span> m<span class="token punctuation">.</span>deps<span class="token punctuation">,</span>
        code<span class="token operator">:</span> m<span class="token punctuation">.</span>code
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> depsGraph
  <span class="token punctuation">}</span>

  <span class="token function">getModuleInfo</span><span class="token punctuation">(</span>files<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">//\u8BFB\u53D6\u6587\u4EF6</span>
    <span class="token keyword">const</span> body <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span>files<span class="token punctuation">,</span><span class="token string">&#39;utf8&#39;</span><span class="token punctuation">)</span>
    <span class="token comment">// console.log(body,&#39;\u5165\u53E3\u6587\u4EF6\u5185\u5BB9&#39;);</span>

    <span class="token comment">//\u8F6C\u4E3AAST</span>
    <span class="token comment">//babel\u7684parse\u63D2\u4EF6\uFF0C\u901A\u8FC7\u5B83\u6765\u5C06JavaScript\u8F6C\u6210AST\u3002yarn add @babel/parser -D </span>
    <span class="token keyword">const</span> ast <span class="token operator">=</span> parser<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>body<span class="token punctuation">,</span><span class="token punctuation">{</span>
      sourceType<span class="token operator">:</span> <span class="token string">&#39;module&#39;</span> <span class="token comment">// \u8868\u793A\u6211\u4EEC\u89E3\u6790\u7684\u662FES\u6A21\u5757</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token comment">// console.log(ast,&#39;ast \u8BED\u6CD5\u6811&#39;);</span>

    <span class="token comment">//\u904D\u5386AST\u8BED\u6CD5\u6570</span>
    <span class="token comment">//\u9700\u8981\u4F7F\u7528@babel/traverse\u6765\u904D\u5386AST\uFF0C\u4ECE\u800C\u6765\u8BC6\u522B\u8BE5\u6587\u4EF6\u6709\u6CA1\u6709\u5F15\u5165\u5176\u4ED6\u6A21\u5757\uFF0C\u6709\u7684\u8BDD\u5C31\u5C06\u5176\u8BB0\u5F55\u4E0B\u6765 yarn add @babel/traverse -D</span>
    <span class="token comment">//traverse\u63A5\u53D7\u4E24\u4E2A\u53C2\u6570\uFF0C\u7B2C\u4E00\u4E2A\u662Fast\u8BED\u6CD5\u6811\uFF0C\u7B2C\u4E8C\u4E2A\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u5728\u5BF9\u8C61\u4E2D\u6211\u4EEC\u53EF\u4EE5\u8BBE\u7F6E\u89C2\u5BDF\u8005\u51FD\u6570\uFF0C\u5E76\u4E14\u53EF\u4EE5\u9488\u5BF9\u8BED\u6CD5\u6811\u4E2D\u7684\u7279\u5B9A\u8282\u70B9\u7C7B\u578B\u3002</span>
    <span class="token comment">//\u6BD4\u5982\u6211\u4EEC\u8FD9\u6B21\u53EA\u9700\u8981\u627E\u5230\u5F15\u5165\u6A21\u5757\u7684\u8BED\u53E5\uFF0C\u5BF9\u5E94\u7684\u8282\u70B9\u7C7B\u578B\u4E3AImportDeclaration\uFF0C\u6211\u4EEC\u5C31\u53EF\u4EE5\u8BBE\u7F6E\u5BF9\u5E94\u7684ImportDeclaration\u51FD\u6570\uFF0C\u5E76\u5728\u53C2\u6570\u503C\u83B7\u53D6\u5230\u8282\u70B9\u4FE1\u606F\u3002</span>
    
    <span class="token comment">//\u4F9D\u8D56\u6536\u96C6\uFF0C\u521B\u5EFA\u6620\u5C04\u8868\uFF0C\u7528\u4E8E\u8BB0\u5F55 \u5F15\u7528\u8DEF\u5F84 \u4E0E \u76F8\u5BF9\u9879\u76EE\u6839\u76EE\u5F55\u7684\u6587\u4EF6\u8DEF\u5F84 \u7684\u5173\u7CFB\uFF0C\u5F15\u7528\u8DEF\u5F84\u4E3Akey\uFF0C\u5C06\u6587\u4EF6\u76F8\u5BF9\u8DEF\u5F84\u4E3Avalue\uFF0C</span>
    <span class="token comment">//deps = { \u5F53\u524D\u6A21\u5757\u4E2D\u7684\u5F15\u7528\u8DEF\u5F84 : \u76F8\u5BF9\u9879\u76EE\u6839\u76EE\u5F55\u7684\u6587\u4EF6\u8DEF\u5F84 }</span>
    <span class="token keyword">const</span> deps <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token function">traverse</span><span class="token punctuation">(</span>ast<span class="token punctuation">,</span><span class="token punctuation">{</span>
      <span class="token comment">//visitor\u51FD\u6570 \u627E\u5230import \u8BED\u6CD5\u5E76\u5904\u7406\uFF0C</span>
      <span class="token function">ImportDeclaration</span><span class="token punctuation">(</span><span class="token punctuation">{</span>node<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">// console.log(node,&#39;\u627E\u5230\u4E86import \u8BED\u6CD5\u5B57\u7B26\u4E32&#39;);</span>
        <span class="token comment">//\u5165\u53E3\u6587\u4EF6\u8DEF\u5F84</span>
        <span class="token keyword">const</span> dirname <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">dirname</span><span class="token punctuation">(</span>files<span class="token punctuation">)</span> <span class="token comment">//\u6587\u4EF6\u76EE\u5F55\u7684\u7EDD\u5BF9\u8DEF\u5F84</span>
        <span class="token comment">//\u5F15\u5165\u6587\u4EF6\u8DEF\u5F84</span>
        <span class="token keyword">const</span> absPath <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>dirname<span class="token punctuation">,</span>node<span class="token punctuation">.</span>source<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
        deps<span class="token punctuation">[</span>node<span class="token punctuation">.</span>source<span class="token punctuation">.</span>value<span class="token punctuation">]</span> <span class="token operator">=</span> absPath
        <span class="token comment">// console.log(deps,&#39;deps&#39;);</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token comment">//\u6536\u96C6\u5B8C\u4F9D\u8D56\u540E\uFF0C\u6211\u4EEC\u9700\u8981\u5C06AST\u8F6C\u56DEJavaScript\u4EE3\u7801\uFF0C\u5E76\u4E14\u5C06\u5176\u8F6C\u6210ES5\u8BED\u6CD5\u3002\u8FD9\u65F6\u5019\u6211\u4EEC\u5C31\u4F1A\u7528\u5230@babel/core\u548C@babel/preset-env\u3002</span>
    <span class="token comment">//\u5C06ES6 \u8F6C\u4E3A ES5 -&gt; \u542Bcommonjs\u7684\u4EE3\u7801</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span>code<span class="token punctuation">}</span> <span class="token operator">=</span> babel<span class="token punctuation">.</span><span class="token function">transformFromAst</span><span class="token punctuation">(</span>ast<span class="token punctuation">,</span><span class="token keyword">null</span><span class="token punctuation">,</span><span class="token punctuation">{</span>
      presets<span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">&#39;@babel/preset-env&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token comment">// console.log(code ,&#39;code&#39;);</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      files<span class="token punctuation">,</span>
      deps<span class="token punctuation">,</span>
      code
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token function">getDeps</span><span class="token punctuation">(</span>temp<span class="token punctuation">,</span><span class="token punctuation">{</span>deps<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>deps<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>key <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token comment">//\u53BB\u91CD</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>temp<span class="token punctuation">.</span><span class="token function">some</span><span class="token punctuation">(</span>m <span class="token operator">=&gt;</span> m<span class="token punctuation">.</span>files <span class="token operator">===</span> deps<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u83B7\u53D6\u4F9D\u8D56\u6A21\u5757\u4EE3\u7801</span>
        <span class="token keyword">const</span> child <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getModuleInfo</span><span class="token punctuation">(</span>deps<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span>
        temp<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>child<span class="token punctuation">)</span>
        <span class="token comment">// \u9012\u5F52\u904D\u5386</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getDeps</span><span class="token punctuation">(</span>temp<span class="token punctuation">,</span>child<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">bundle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">const</span> content <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">(function (__webpack_modules__) {
      function __webpack_require__(moduleId) {
        function require(relPath) {
          return __webpack_require__(__webpack_modules__[moduleId].deps[relPath])
        }
        var exports = {}; 
        (function (require,exports,code) {
          eval(code)
        })(require,exports,__webpack_modules__[moduleId].code)
        return exports
      }
      __webpack_require__(&#39;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>entry<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&#39;)
    })(</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>depsGraph<span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">)</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
    <span class="token comment">//var exports = {};  \u6CE8\u610F\u8FD9\u4E2A\u5206\u53F7\uFF0C\u8FD9\u4E2A\u5206\u53F7\u53EF\u80FD\u5BFC\u81F4\u6253\u5305\u8F93\u51FA\u540E\u7684\u6587\u4EF6\u4E0D\u80FD\u6267\u884C\uFF0C\u62A5{}is not a function \u7684\u9519\u8BEF</span>
    <span class="token comment">//\u5148\u628A\u7B80\u5355\u7684\u90E8\u5206\u5B8C\u6210\u4E86\uFF0C\u5C31\u662F\u751F\u6210\u6253\u5305\u6587\u4EF6</span>
    <span class="token operator">!</span>fs<span class="token punctuation">.</span><span class="token function">existsSync</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>output<span class="token punctuation">.</span>path<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> fs<span class="token punctuation">.</span><span class="token function">mkdirSync</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>output<span class="token punctuation">.</span>path<span class="token punctuation">)</span>
    <span class="token keyword">const</span> filePath <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>output<span class="token punctuation">.</span>path<span class="token punctuation">,</span><span class="token keyword">this</span><span class="token punctuation">.</span>output<span class="token punctuation">.</span>filename<span class="token punctuation">)</span>
    fs<span class="token punctuation">.</span><span class="token function">writeFileSync</span><span class="token punctuation">(</span>filePath<span class="token punctuation">,</span>content<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,2),o=[e];function c(i,l){return s(),a("div",null,o)}var k=n(p,[["render",c],["__file","mini-webpack-code.html.vue"]]);export{k as default};

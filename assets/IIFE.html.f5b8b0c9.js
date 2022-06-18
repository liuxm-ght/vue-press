import{_ as n,o as s,c as a,e as t}from"./app.6cfd3ac5.js";const p={},o=t(`<h3 id="iife" tabindex="-1"><a class="header-anchor" href="#iife" aria-hidden="true">#</a> IIFE</h3><h4 id="\u5168\u5C40function\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u5168\u5C40function\u6A21\u5F0F" aria-hidden="true">#</a> \u5168\u5C40Function\u6A21\u5F0F</h4><ol><li>\u5168\u5C40Function\u6A21\u5F0F</li></ol><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>  eg<span class="token operator">:</span>
    module1<span class="token punctuation">.</span><span class="token function">js</span> <span class="token punctuation">(</span>\u5B9A\u4E49\u4E00\u4E2A\u6A21\u5757<span class="token number">1</span><span class="token punctuation">)</span>
      <span class="token comment">//\u6570\u636E</span>
      <span class="token keyword">let</span> data1 <span class="token operator">=</span> <span class="token string">&#39;module one data&#39;</span>
      <span class="token comment">//\u64CD\u4F5C\u6570\u636E\u7684\u51FD\u6570</span>
      <span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">foo() </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>data1<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">function</span> <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">bar() </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>data1<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>

    module2<span class="token punctuation">.</span><span class="token function">js</span> <span class="token punctuation">(</span>\u5B9A\u4E49\u4E00\u4E2A\u6A21\u5757<span class="token number">2</span><span class="token punctuation">)</span>
      <span class="token keyword">let</span> data2 <span class="token operator">=</span> <span class="token string">&#39;module two data&#39;</span><span class="token punctuation">;</span>
      <span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  <span class="token comment">//\u4E0E\u6A21\u57571\u4E2D\u7684\u51FD\u6570\u51B2\u7A81\u4E86</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">foo() </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>data2<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>

    test<span class="token punctuation">.</span><span class="token function">html</span> <span class="token punctuation">(</span>\u53BB\u4F7F\u7528\u5B9A\u4E49\u597D\u7684\u6A21\u5757<span class="token number">1</span>\u548C\u6A21\u5757<span class="token number">2</span><span class="token punctuation">)</span>
      <span class="token comment">//\u540C\u6B65\u5F15\u5165\uFF0C\u82E5\u51FD\u6570\u51B2\u7A81\uFF0C\u5219\u540E\u9762\u8986\u76D6\u524D\u9762</span>
      <span class="token operator">&lt;</span> script type<span class="token operator">=</span><span class="token string">&quot;text/javascript&quot;</span> src<span class="token operator">=</span><span class="token string">&quot;module1.js&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span> script type<span class="token operator">=</span><span class="token string">&quot;text/javascript&quot;</span> src<span class="token operator">=</span><span class="token string">&quot;module2.js&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span> script type<span class="token operator">=</span><span class="token string">&quot;text/javascript&quot;</span><span class="token operator">&gt;</span>
        <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>   <span class="token comment">//foo() module two data</span>
        <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span>   <span class="token comment">//bar() module one data</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>\u8BF4\u660E\uFF1A \u5168\u5C40\u51FD\u6570\u6A21\u5F0F: \u5C06\u4E0D\u540C\u7684\u529F\u80FD\u5C01\u88C5\u6210\u4E0D\u540C\u7684\u5168\u5C40\u51FD\u6570 \u95EE\u9898: Global\u88AB\u6C61\u67D3\u4E86, \u5F88\u5BB9\u6613\u5F15\u8D77\u547D\u540D\u51B2\u7A81\uFF08\u6BD4\u5982\u6A21\u5757\u4E2D\u7684data1 data2\u90FD\u662F\u5168\u5C40\u53D8\u91CF\uFF09</li></ol><h4 id="namespace\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#namespace\u6A21\u5F0F" aria-hidden="true">#</a> namespace\u6A21\u5F0F</h4><ol><li>namespace\u6A21\u5F0F</li></ol><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>  module1<span class="token punctuation">.</span><span class="token function">js</span> <span class="token punctuation">(</span>\u5B9A\u4E49\u4E00\u4E2A\u6A21\u5757<span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token keyword">let</span> moduleOne <span class="token operator">=</span> <span class="token punctuation">{</span>
      data<span class="token operator">:</span> <span class="token string">&#39;module one data&#39;</span><span class="token punctuation">,</span>
      <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">foo() </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">bar() </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    module2<span class="token punctuation">.</span><span class="token function">js</span> <span class="token punctuation">(</span>\u5B9A\u4E49\u4E00\u4E2A\u6A21\u5757<span class="token number">2</span><span class="token punctuation">)</span>
      <span class="token keyword">let</span> moduleTwo <span class="token operator">=</span> <span class="token punctuation">{</span>
        data<span class="token operator">:</span> <span class="token string">&#39;module two data&#39;</span><span class="token punctuation">,</span>
        <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">foo() </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">bar() </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    test<span class="token punctuation">.</span><span class="token function">html</span> <span class="token punctuation">(</span>\u53BB\u4F7F\u7528\u5B9A\u4E49\u597D\u7684\u6A21\u5757<span class="token number">1</span>\u548C\u6A21\u5757<span class="token number">2</span><span class="token punctuation">)</span>
      <span class="token operator">&lt;</span> script type<span class="token operator">=</span><span class="token string">&quot;text/javascript&quot;</span> src<span class="token operator">=</span><span class="token string">&quot;module1.js&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span> script type<span class="token operator">=</span><span class="token string">&quot;text/javascript&quot;</span> src<span class="token operator">=</span><span class="token string">&quot;module2.js&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span> script type<span class="token operator">=</span><span class="token string">&quot;text/javascript&quot;</span><span class="token operator">&gt;</span>
        moduleOne<span class="token punctuation">.</span><span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>   <span class="token comment">//foo() module one data</span>
        moduleOne<span class="token punctuation">.</span><span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span>   <span class="token comment">//bar() module one data</span>
        moduleTwo<span class="token punctuation">.</span><span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment">//foo() module two data</span>
        moduleTwo<span class="token punctuation">.</span><span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment">//bar() module two data</span>
        moduleOne<span class="token punctuation">.</span>data <span class="token operator">=</span> <span class="token string">&#39;update data&#39;</span> <span class="token comment">//\u80FD\u76F4\u63A5\u4FEE\u6539\u6A21\u5757\u5185\u90E8\u7684\u6570\u636E</span>
        moduleOne<span class="token punctuation">.</span><span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment">//foo() update data</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>\u8BF4\u660E\uFF1A namespace\u6A21\u5F0F: \u7B80\u5355\u5BF9\u8C61\u5C01\u88C5 \u4F5C\u7528: \u51CF\u5C11\u4E86\u5168\u5C40\u53D8\u91CF (\u5982\u4E24\u4E2A\u6A21\u5757\u7684 data \u90FD\u4E0D\u662F\u5168\u5C40\u53D8\u91CF\u4E86\uFF0C\u800C\u662F\u5BF9\u8C61\u7684\u67D0\u4E00\u4E2A\u5C5E\u6027 ) \u95EE\u9898: \u4E0D\u5B89\u5168\uFF0C\u53EF\u4EE5\u76F4\u63A5\u4FEE\u6539\u6A21\u5757\u5185\u90E8\u7684\u6570\u636E</li></ol><h4 id="iife\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#iife\u6A21\u5F0F" aria-hidden="true">#</a> IIFE\u6A21\u5F0F</h4><ol><li>IIFE\u6A21\u5F0F</li></ol><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>    module1<span class="token punctuation">.</span><span class="token function">js</span> <span class="token punctuation">(</span>\u5B9A\u4E49\u4E00\u4E2A\u6A21\u5757<span class="token number">1</span><span class="token punctuation">)</span>
      <span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span>window<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//\u6570\u636E</span>
        <span class="token keyword">let</span> data <span class="token operator">=</span> <span class="token string">&#39;IIFE module data&#39;</span>
        <span class="token comment">//\u64CD\u4F5C\u6570\u636E\u7684\u51FD\u6570</span>
        <span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//\u7528\u4E8E\u66B4\u9732\u7684\u51FD\u6570</span>
          <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">foo() </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>data<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">function</span> <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">//\u7528\u4E8E\u66B4\u9732\u7684\u51FD\u6570</span>
          <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">bar() </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>data<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
          <span class="token function">otherFun</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//\u5185\u90E8\u8C03\u7528</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">function</span> <span class="token function">otherFun</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//\u5185\u90E8\u79C1\u6709\u7684\u51FD\u6570</span>
          <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;privateFunction go otherFun()&#39;</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token comment">//\u66B4\u9732foo\u51FD\u6570\u548Cbar\u51FD\u6570</span>
        window<span class="token punctuation">.</span>moduleOne <span class="token operator">=</span> <span class="token punctuation">{</span>foo<span class="token punctuation">,</span> bar<span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span>window<span class="token punctuation">)</span>

    test<span class="token punctuation">.</span><span class="token function">html</span> <span class="token punctuation">(</span>\u53BB\u4F7F\u7528\u5B9A\u4E49\u597D\u7684\u6A21\u5757<span class="token number">1</span><span class="token punctuation">)</span>
      <span class="token operator">&lt;</span> script type<span class="token operator">=</span><span class="token string">&quot;text/javascript&quot;</span> src<span class="token operator">=</span><span class="token string">&quot;module1.js&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span> script type<span class="token operator">=</span><span class="token string">&quot;text/javascript&quot;</span><span class="token operator">&gt;</span>
        moduleOne<span class="token punctuation">.</span><span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment">//foo() IIFE module data</span>
        moduleOne<span class="token punctuation">.</span><span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment">//bar() IIFE module data    privateFunction go otherFun()</span>
        <span class="token comment">//moduleOne.otherFun()  //\u62A5\u9519\uFF0CmoduleOne.otherFun is not a function</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>moduleOne<span class="token punctuation">.</span>data<span class="token punctuation">)</span> <span class="token comment">//undefined \u56E0\u4E3A\u6211\u66B4\u9732\u7684moduleOne\u5BF9\u8C61\u4E2D\u65E0data</span>
        moduleOne<span class="token punctuation">.</span>data <span class="token operator">=</span> <span class="token string">&#39;xxxx&#39;</span> <span class="token comment">//\u4E0D\u662F\u4FEE\u6539\u7684\u6A21\u5757\u5185\u90E8\u7684data\uFF0C\u800C\u662F\u5728moduleOne\u65B0\u589Edata\u5C5E\u6027</span>
        moduleOne<span class="token punctuation">.</span><span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//\u9A8C\u8BC1\u5185\u90E8\u7684data\u6CA1\u6709\u6539\u53D8  \u8FD8\u662F\u4F1A\u8F93\u51FA foo() IIFE module data</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>\u8BF4\u660E\uFF1A IIFE\u6A21\u5F0F: \u533F\u540D\u51FD\u6570\u81EA\u8C03\u7528(\u95ED\u5305) IIFE : immediately-invoked function expression(\u7ACB\u5373\u8C03\u7528\u51FD\u6570\u8868\u8FBE\u5F0F) \u4F5C\u7528: \u6570\u636E\u662F\u79C1\u6709\u7684, \u5916\u90E8\u53EA\u80FD\u901A\u8FC7\u66B4\u9732\u7684\u65B9\u6CD5\u64CD\u4F5C \u95EE\u9898: \u5982\u679C\u5F53\u524D\u8FD9\u4E2A\u6A21\u5757\u4F9D\u8D56\u53E6\u4E00\u4E2A\u6A21\u5757\u600E\u4E48\u529E? \u89C1\u4E0B\u9762IIFE\u589E\u5F3A\u7248\u7684\uFF08\u6A21\u5757\u4F9D\u8D56\u4E8EjQuery\uFF09</li></ol><h4 id="iife\u6A21\u5F0F\u589E" tabindex="-1"><a class="header-anchor" href="#iife\u6A21\u5F0F\u589E" aria-hidden="true">#</a> IIFE\u6A21\u5F0F\u589E</h4><ol><li>IIFE\u6A21\u5F0F\u589E\u5F3A \u5F15\u5165jquery\u5230\u9879\u76EE\u4E2D</li></ol><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>module1<span class="token punctuation">.</span><span class="token function">js</span> <span class="token punctuation">(</span>\u5B9A\u4E49\u4E00\u4E2A\u6A21\u5757<span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span>window<span class="token punctuation">,</span>$<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//\u6570\u636E</span>
    <span class="token keyword">let</span> data <span class="token operator">=</span> <span class="token string">&#39;IIFE Strong module data&#39;</span>

    <span class="token comment">//\u64CD\u4F5C\u6570\u636E\u7684\u51FD\u6570</span>
    <span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//\u7528\u4E8E\u66B4\u9732\u7684\u51FD\u6570</span>
      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">foo() </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>data<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
      <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;body&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">css</span><span class="token punctuation">(</span><span class="token string">&#39;background&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;red&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">//\u7528\u4E8E\u66B4\u9732\u7684\u51FD\u6570</span>
      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">bar() </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>data<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
      <span class="token function">otherFun</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//\u5185\u90E8\u8C03\u7528</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">otherFun</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//\u5185\u90E8\u79C1\u6709\u7684\u51FD\u6570</span>
      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;privateFunction go otherFun()&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//\u66B4\u9732foo\u51FD\u6570\u548Cbar\u51FD\u6570</span>
    window<span class="token punctuation">.</span>moduleOne <span class="token operator">=</span> <span class="token punctuation">{</span>foo<span class="token punctuation">,</span> bar<span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span>window<span class="token punctuation">,</span>jQuery<span class="token punctuation">)</span>

test<span class="token punctuation">.</span><span class="token function">html</span> <span class="token punctuation">(</span>\u53BB\u4F7F\u7528\u5B9A\u4E49\u597D\u7684\u6A21\u5757<span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span>\u5F15\u5165\u7684js\u5FC5\u987B\u6709\u4E00\u5B9A\u987A\u5E8F<span class="token operator">--</span><span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span> script type<span class="token operator">=</span><span class="token string">&quot;text/javascript&quot;</span> src<span class="token operator">=</span><span class="token string">&quot;jquery-1.10.1.js&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span> script type<span class="token operator">=</span><span class="token string">&quot;text/javascript&quot;</span> src<span class="token operator">=</span><span class="token string">&quot;module1.js&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span> script type<span class="token operator">=</span><span class="token string">&quot;text/javascript&quot;</span><span class="token operator">&gt;</span>
    moduleOne<span class="token punctuation">.</span><span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment">//foo() IIFE Strong module data  \u800C\u4E14\u9875\u9762\u80CC\u666F\u4F1A\u53D8\u8272</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>\u8BF4\u660E\uFF1A IIFE\u6A21\u5F0F\u589E\u5F3A : \u5F15\u5165\u4F9D\u8D56 \u8FD9\u5C31\u662F\u73B0\u4EE3\u6A21\u5757\u5B9E\u73B0\u7684\u57FA\u77F3\u3002\u5176\u5B9E\u5F88\u50CF\u4E86\uFF0C\u6709\u5F15\u5165\u548C\u66B4\u9732\u4E24\u4E2A\u65B9\u9762\u3002 \u5B58\u5728\u7684\u95EE\u9898\uFF1A\u4E00\u4E2A\u9875\u9762\u9700\u8981\u5F15\u5165\u591A\u4E2AJS\u7684\u95EE\u9898</li></ol><pre><code>\`\`\`ts
    &lt; script type=&quot;text/javascript&quot; src=&quot;module1.js&quot;&gt;&lt;/&gt;
    &lt; script type=&quot;text/javascript&quot; src=&quot;module2.js&quot;&gt;&lt;/&gt;
    &lt; script type=&quot;text/javascript&quot; src=&quot;module3.js&quot;&gt;&lt;/&gt;
    &lt; script type=&quot;text/javascript&quot; src=&quot;module4.js&quot;&gt;&lt;/&gt;
\`\`\`
  \u8BF7\u6C42\u8FC7\u591A\uFF1A\u4E00\u4E2Ascript\u6807\u7B7E\u5C31\u662F\u4E00\u6B21\u8BF7\u6C42
  \u4F9D\u8D56\u6A21\u7CCA\uFF1A\u770B\u4E0D\u51FA\u6765\u8C01\u4F9D\u8D56\u7740\u8C01\uFF1F\u54EA\u4E9B\u6A21\u5757\u662F\u6709\u4F9D\u8D56\u5173\u7CFB\u7684\uFF0C\u5F88\u96BE\u770B\u51FA\u6765\u3002
  \u96BE\u4EE5\u7EF4\u62A4\uFF1A\u5185\u90E8\u4F9D\u8D56\u5173\u7CFB\u6DF7\u4E71\u4E5F\u5C31\u96BE\u4EE5\u7EF4\u62A4\u5566

&lt;!-- \u94FE\u63A5\uFF1Ahttps://juejin.cn/post/6844903792987602958 --&gt;
</code></pre><ol start="3"><li>\u603B\u7ED3\uFF1A IIFE\u533F\u540D\u51FD\u6570\u81EA\u6267\u884C \u5176\u6838\u5FC3\u662F\u95ED\u5305\uFF0C\u51FD\u6570\u5185\u90E8\u5C5E\u6027\u79C1\u6709\u5316\uFF0C\u901A\u8FC7return\u5411\u5916\u66B4\u9732\u6570\u636E \u5E76\u4E14module\u662F\u6302\u5728window\u4E0A\u7684\uFF0C\u6240\u4EE5\u53EF\u4EE5\u901A\u8FC7window\u62FF\u5230\u6240\u6709IIFE\u6A21\u5757</li></ol>`,19),e=[o];function c(l,i){return s(),a("div",null,e)}var r=n(p,[["render",c],["__file","IIFE.html.vue"]]);export{r as default};
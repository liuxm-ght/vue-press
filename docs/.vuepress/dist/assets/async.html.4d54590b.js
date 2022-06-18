import{_ as n,o as s,c as a,g as t}from"./app.c10353cc.js";const p={},e=t(`<div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>
<span class="token comment">// async \u51FD\u6570</span>
<span class="token doc-comment comment">/**
 * 1. \u4ECB\u7ECD
 * async \u51FD\u6570\u662F\u4EC0\u4E48\uFF1F\u4E00\u53E5\u8BDD\uFF0C\u5B83\u5C31\u662F Generator \u51FD\u6570\u7684\u8BED\u6CD5\u7CD6\u3002
 *    async\u51FD\u6570\u5C31\u662F\u5C06 Generator \u51FD\u6570\u7684\u661F\u53F7\uFF08*\uFF09\u66FF\u6362\u6210async\uFF0C\u5C06yield\u66FF\u6362\u6210await\uFF0C\u4EC5\u6B64\u800C\u5DF2\u3002
 * \u6539\u8FDB\uFF1A
 *  \uFF081\uFF09\u5185\u7F6E\u6267\u884C\u5668\u3002
 *      Generator \u51FD\u6570\u7684\u6267\u884C\u5FC5\u987B\u9760\u6267\u884C\u5668\uFF0C\u6240\u4EE5\u624D\u6709\u4E86co\u6A21\u5757\uFF0C\u800Casync\u51FD\u6570\u81EA\u5E26\u6267\u884C\u5668\u3002
 *  \uFF082\uFF09\u66F4\u597D\u7684\u8BED\u4E49\u3002
 *  \uFF083\uFF09\u66F4\u5E7F\u7684\u9002\u7528\u6027\u3002
 *  \uFF084\uFF09\u8FD4\u56DE\u503C\u662F Promise\u3002
 * 
 * \u6B63\u5E38\u60C5\u51B5\u4E0B\uFF0Cawait \u547D\u4EE4\u540E\u9762\u662F\u4E00\u4E2A Promise \u5BF9\u8C61\uFF0C\u8FD4\u56DE\u8BE5\u5BF9\u8C61\u7684\u7ED3\u679C\u3002\u5982\u679C\u4E0D\u662F Promise \u5BF9\u8C61\uFF0C\u5C31\u76F4\u63A5\u8FD4\u56DE\u5BF9\u5E94\u7684\u503C\u3002
 * 
 * await\u7B49\u7684\u662F\u53F3\u4FA7\u300C\u8868\u8FBE\u5F0F\u300D\u7684\u7ED3\u679C
 * 
 * await\u4E0B\u9762\u7684\u4EE3\u7801\u4F1A\u653E\u5230\u5176async\u521B\u9020\u7684promise\u7684then\u4E2D\u53BB
 *   
 * await Promise.resolve() \u7C7B\u4F3C\u4E8E Promise.resolve(undefined).then((undefined) =&gt; <span class="token punctuation">{</span><span class="token punctuation">}</span>)
*/</span>



<span class="token comment">// 2. \u539F\u7406</span>
<span class="token doc-comment comment">/**
 * async \u51FD\u6570\u7684\u5B9E\u73B0\u539F\u7406\uFF0C\u5C31\u662F\u5C06 Generator \u51FD\u6570\u548C\u81EA\u52A8\u6267\u884C\u5668\uFF0C\u5305\u88C5\u5728\u4E00\u4E2A\u51FD\u6570\u91CC\u3002
 * 
 * 
 * \u603B\u7ED3\uFF1Aasync-await\u5C31\u662F\u53EF\u4EE5\u81EA\u52A8\u6267\u884C\u7684generator\u751F\u6210\u5668\uFF0Cgenerator\u751F\u6210\u5668\u6267\u884C\u8FD4\u56DE\u4E00\u4E2A\u8FED\u4EE3\u5668\uFF0C\u4F7F\u8FED\u4EE3\u5668\u53EF\u81EA\u52A8\u5F80\u4E0B\u4E00\u6B65\u6267\u884C
 * 
*/</span>
  <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span>args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// \u7B49\u540C\u4E8E</span>
  <span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span>args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">spawn</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token operator">*</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// ...</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">//\u6240\u6709\u7684async\u51FD\u6570\u90FD\u53EF\u4EE5\u5199\u6210\u4E0A\u9762\u7684\u7B2C\u4E8C\u79CD\u5F62\u5F0F\uFF0C\u5176\u4E2D\u7684spawn\u51FD\u6570\u5C31\u662F\u81EA\u52A8\u6267\u884C\u5668\u3002</span>
  <span class="token comment">// \u4E0B\u9762\u7ED9\u51FAspawn\u51FD\u6570\u7684\u5B9E\u73B0\uFF0C\u57FA\u672C\u5C31\u662F\u524D\u6587\u81EA\u52A8\u6267\u884C\u5668\u7684\u7FFB\u7248\u3002</span>
  <span class="token keyword">function</span> <span class="token function">spawn</span><span class="token punctuation">(</span>genF<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//\u5C06\u751F\u6210\u5668\u4F20\u5165\uFF0C\u5373\u53EF\u751F\u6210\u8FED\u4EE3\u5668\uFF0C\u5E76\u81EA\u52A8\u6267\u884C</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token builtin">Promise</span></span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span>reject<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> gen <span class="token operator">=</span> <span class="token function">genF</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//\u83B7\u53D6\u5230\u8FED\u4EE3\u5668</span>
      <span class="token keyword">function</span> <span class="token function">step</span><span class="token punctuation">(</span>nextF<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// \u81EA\u6267\u884C\u51FD\u6570</span>
        <span class="token keyword">let</span> next
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
          next <span class="token operator">=</span> <span class="token function">nextF</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// \u6267\u884C\u4E00\u6B21next</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>next<span class="token punctuation">.</span>done<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token function">resolve</span><span class="token punctuation">(</span>next<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// \u5982\u679Cnext.value\u662Fpromise\u5B9E\u4F8B\uFF0C\u90A3\u4E48Promise.resolve(next.value)\u4E0D\u5904\u7406next.value</span>
        <span class="token builtin">Promise</span><span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>next<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">step</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> gen<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">step</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> gen<span class="token punctuation">.</span><span class="token function">throw</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// next.value().then(function(data) { //next.value()\u8FD4\u56DEpromise\u5B9E\u4F8B</span>
        <span class="token comment">//   step(function() {return gen.next(data)})</span>
        <span class="token comment">// }) </span>
      <span class="token punctuation">}</span>
      <span class="token function">step</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token keyword">return</span> gen<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// \u5F00\u542F\u8FED\u4EE3\u5668\uFF0C\uFF0C\u4F20\u540D\u5199\u6CD5</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">gPromise</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//\u751F\u6210\u5668 \u4F5C\u7528\uFF1A\u751F\u6210\u8FED\u4EE3\u5668</span>
    <span class="token keyword">var</span> f1 <span class="token operator">=</span> <span class="token keyword">yield</span> <span class="token function">readFileThunk</span><span class="token punctuation">(</span><span class="token string">&#39;fileA&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> f2 <span class="token operator">=</span> <span class="token keyword">yield</span> <span class="token function">readFileThunk</span><span class="token punctuation">(</span><span class="token string">&#39;fileB&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">spawn</span><span class="token punctuation">(</span>gPromise<span class="token punctuation">)</span>

        <span class="token comment">// Generator \u51FD\u6570\u7684\u5199\u6CD5 VS Async\u5199\u6CD5</span>
            <span class="token keyword">function</span> <span class="token function">chainAnimationsGenerator</span><span class="token punctuation">(</span>elem<span class="token punctuation">,</span> animations<span class="token punctuation">)</span> <span class="token punctuation">{</span>
              <span class="token keyword">return</span> <span class="token function">spawn</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token operator">*</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">let</span> ret <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
                <span class="token keyword">try</span> <span class="token punctuation">{</span>
                  <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> anim <span class="token keyword">of</span> animations<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    ret <span class="token operator">=</span> <span class="token keyword">yield</span> <span class="token function">anim</span><span class="token punctuation">(</span>elem<span class="token punctuation">)</span><span class="token punctuation">;</span>
                  <span class="token punctuation">}</span>
                <span class="token punctuation">}</span> <span class="token keyword">catch</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                  <span class="token comment">/* \u5FFD\u7565\u9519\u8BEF\uFF0C\u7EE7\u7EED\u6267\u884C */</span>
                <span class="token punctuation">}</span>
                <span class="token keyword">return</span> ret<span class="token punctuation">;</span>
              <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token comment">// vs</span>
            <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">chainAnimationsAsync</span><span class="token punctuation">(</span>elem<span class="token punctuation">,</span> animations<span class="token punctuation">)</span> <span class="token punctuation">{</span>
              <span class="token keyword">let</span> ret <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
              <span class="token keyword">try</span> <span class="token punctuation">{</span>
                <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> anim <span class="token keyword">of</span> animations<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                  ret <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">anim</span><span class="token punctuation">(</span>elem<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
              <span class="token punctuation">}</span> <span class="token keyword">catch</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">/* \u5FFD\u7565\u9519\u8BEF\uFF0C\u7EE7\u7EED\u6267\u884C */</span>
              <span class="token punctuation">}</span>
              <span class="token keyword">return</span> ret<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>


<span class="token comment">// 3. \u5E94\u7528\uFF1A</span>
  <span class="token comment">// \u7761\u7720\u51FD\u6570</span>
  <span class="token doc-comment comment">/**
   * JavaScript \u4E00\u76F4\u6CA1\u6709\u4F11\u7720\u7684\u8BED\u6CD5\uFF0C\u4F46\u662F\u501F\u52A9await\u547D\u4EE4\u5C31\u53EF\u4EE5\u8BA9\u7A0B\u5E8F\u505C\u987F\u6307\u5B9A\u7684\u65F6\u95F4\u3002\u4E0B\u9762\u7ED9\u51FA\u4E86\u4E00\u4E2A\u7B80\u5316\u7684sleep\u5B9E\u73B0\u3002
  */</span>
    <span class="token keyword">function</span> <span class="token function">sleep</span><span class="token punctuation">(</span>interval<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// await new Promise(resolve =&gt; {</span>
      <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token builtin">Promise</span></span><span class="token punctuation">(</span>resolve <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token function">setTimeout</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> interval<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// \u7528\u6CD5</span>
    <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">one2FiveInAsync</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">await</span> <span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token function">one2FiveInAsync</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


  <span class="token doc-comment comment">/**
   * \u4F7F\u7528\u6CE8\u610F\u70B9 
   */</span>
  <span class="token comment">// \u7B2C\u4E00\u70B9\uFF0C\u524D\u9762\u5DF2\u7ECF\u8BF4\u8FC7\uFF0Cawait\u547D\u4EE4\u540E\u9762\u7684Promise\u5BF9\u8C61\uFF0C\u8FD0\u884C\u7ED3\u679C\u53EF\u80FD\u662Frejected\uFF0C\u6240\u4EE5\u6700\u597D\u628Aawait\u547D\u4EE4\u653E\u5728try...catch\u4EE3\u7801\u5757\u4E2D\u3002</span>
      <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">myFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
          <span class="token keyword">await</span> <span class="token function">somethingThatReturnsAPromise</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      <span class="token comment">// \u53E6\u4E00\u79CD\u5199\u6CD5</span>
      <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">myFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">await</span> <span class="token function">somethingThatReturnsAPromise</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
  <span class="token comment">// \u7B2C\u4E8C\u70B9\uFF0C\u591A\u4E2Aawait\u547D\u4EE4\u540E\u9762\u7684\u5F02\u6B65\u64CD\u4F5C\uFF0C\u5982\u679C\u4E0D\u5B58\u5728\u7EE7\u53D1\u5173\u7CFB\uFF0C\u6700\u597D\u8BA9\u5B83\u4EEC\u540C\u65F6\u89E6\u53D1\u3002</span>
      <span class="token comment">//\u8017\u65F6</span>
      <span class="token keyword">let</span> foo <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getFoo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">let</span> bar <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getBar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token comment">//\u6B63\u786E\u5199\u6CD5</span>
        <span class="token comment">// \u5199\u6CD5\u4E00</span>
        <span class="token keyword">let</span> <span class="token punctuation">[</span>foo<span class="token punctuation">,</span> bar<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token builtin">Promise</span><span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token function">getFoo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">getBar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// \u5199\u6CD5\u4E8C</span>
        <span class="token keyword">let</span> fooPromise <span class="token operator">=</span> <span class="token function">getFoo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> barPromise <span class="token operator">=</span> <span class="token function">getBar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> foo <span class="token operator">=</span> <span class="token keyword">await</span> fooPromise<span class="token punctuation">;</span>
        <span class="token keyword">let</span> bar <span class="token operator">=</span> <span class="token keyword">await</span> barPromise<span class="token punctuation">;</span>

  <span class="token comment">//  \u7B2C\u4E09\u70B9\uFF0Cawait\u547D\u4EE4\u53EA\u80FD\u7528\u5728async\u51FD\u6570\u4E4B\u4E2D\uFF0C\u5982\u679C\u7528\u5728\u666E\u901A\u51FD\u6570\uFF0C\u5C31\u4F1A\u62A5\u9519\u3002</span>
      <span class="token comment">// \u9519\u8BEF\u60C5\u51B5\uFF0C\u539F\u56E0\u662F\u8FD9\u65F6\u4E09\u4E2Adb.post()\u64CD\u4F5C\u5C06\u662F\u5E76\u53D1\u6267\u884C\uFF0C\u4E5F\u5C31\u662F\u540C\u65F6\u6267\u884C\uFF0C\u800C\u4E0D\u662F\u7EE7\u53D1\u6267\u884C\u3002</span>
      <span class="token keyword">function</span> <span class="token function">dbFuc</span><span class="token punctuation">(</span>db<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//\u8FD9\u91CC\u4E0D\u9700\u8981 async</span>
        <span class="token keyword">let</span> docs <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

        <span class="token comment">// \u53EF\u80FD\u5F97\u5230\u9519\u8BEF\u7ED3\u679C</span>
        docs<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>doc<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">await</span> db<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span>doc<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token comment">//\u6B63\u786E\u7684\u5199\u6CD5\u662F\u91C7\u7528for\u5FAA\u73AF\u3002</span>
      <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">dbFuc</span><span class="token punctuation">(</span>db<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> docs <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
      
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> doc <span class="token keyword">of</span> docs<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">await</span> db<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span>doc<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>

  <span class="token comment">//  \u7B2C\u56DB\u70B9\uFF0Casync \u51FD\u6570\u53EF\u4EE5\u4FDD\u7559\u8FD0\u884C\u5806\u6808\u3002</span>
    <span class="token doc-comment comment">/**
     * \u4E0B\u9762\u4EE3\u7801\u4E2D\uFF0C\u51FD\u6570a\u5185\u90E8\u8FD0\u884C\u4E86\u4E00\u4E2A\u5F02\u6B65\u4EFB\u52A1b()\u3002\u5F53b()\u8FD0\u884C\u7684\u65F6\u5019\uFF0C\u51FD\u6570a()\u4E0D\u4F1A\u4E2D\u65AD\uFF0C\u800C\u662F\u7EE7\u7EED\u6267\u884C\u3002
     * \u7B49\u5230b()\u8FD0\u884C\u7ED3\u675F\uFF0C\u53EF\u80FDa()\u65E9\u5C31\u8FD0\u884C\u7ED3\u675F\u4E86\uFF0Cb()\u6240\u5728\u7684\u4E0A\u4E0B\u6587\u73AF\u5883\u5DF2\u7ECF\u6D88\u5931\u4E86\u3002
     * \u5982\u679Cb()\u6216c()\u62A5\u9519\uFF0C\u9519\u8BEF\u5806\u6808\u5C06\u4E0D\u5305\u62ECa()\u3002
    */</span>
    <span class="token keyword">const</span> <span class="token function-variable function">a</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token function">b</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">c</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
      * \u4E0B\u9762\u4EE3\u7801\u4E2D\uFF0Cb()\u8FD0\u884C\u7684\u65F6\u5019\uFF0Ca()\u662F\u6682\u505C\u6267\u884C\uFF0C\u4E0A\u4E0B\u6587\u73AF\u5883\u90FD\u4FDD\u5B58\u7740\u3002\u4E00\u65E6b()\u6216c()\u62A5\u9519\uFF0C\u9519\u8BEF\u5806\u6808\u5C06\u5305\u62ECa()\u3002
    */</span>
    <span class="token keyword">const</span> <span class="token function-variable function">a</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">await</span> <span class="token function">b</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token function">c</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  


    <span class="token comment">//\u5E94\u7528 </span>
      <span class="token comment">//\u5E76\u53D1\u53D1\u51FA\u8FDC\u7A0B\u8BF7\u6C42,\u6309\u6B21\u5E8F\u8F93\u51FA</span>
        <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">logInOrder</span><span class="token punctuation">(</span>urls<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token comment">// \u5E76\u53D1\u8BFB\u53D6\u8FDC\u7A0BURL</span>
          <span class="token keyword">const</span> textPromises <span class="token operator">=</span> urls<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token keyword">async</span> url <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token comment">// textPromises\u5B58\u4E86urls.length\u4E2Apromise\uFF0C\u8FD9\u4E9Bpromise\u90FD\u662Fasync\u8FD4\u56DE\u7684promise\uFF0C\u7B49\u5F85\u5F02\u6B65\u6267\u884C\u5B8C\u6BD5\u72B6\u6001\u7684promise</span>
            <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u6BCF\u4E2Aasync-await\u90FD\u53EA\u6709\u4E00\u4E2Aawait\uFF0C\uFF0C\uFF0Cfetch(url)\u8BF7\u6C42\u6210\u529F\u540E\u81EA\u52A8resolve(data)\uFF0C\uFF0C\uFF0Cdata\u5C31\u662Fawait\u8FD4\u56DE\u7684\u503C</span>
            <span class="token keyword">return</span> response<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u6709return\uFF0Creturn\u7684\u503C\u5C31\u662Fdone\u4E3Atrue\u65F6\u7684next.value\uFF0C\uFF0C\u81F3\u6B64\u5F53\u524D\u8FD9\u4E2AtextPromise\uFF0Cresolve(response.text())\uFF0C\uFF0C\uFF0C</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token comment">// \u6309\u6B21\u5E8F\u8F93\u51FA</span>
          <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> textPromise <span class="token keyword">of</span> textPromises<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// \u4E00\u4E2Aasync\u4E0Burls.length\u4E2Aawait\uFF0C\u8FD9\u4E9Bawati\u4F1A\u6309textPromises\u7684promises\u987A\u5E8F\u8F93\u51FA</span>
            <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">await</span> textPromise<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u7B49\u5F85\u8FD9\u4E2Apromise\u7684\u72B6\u6001\u6539\u4E3Aresolve\u540E\uFF0C\u624D\u6267\u884Cgen.next(v)</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token doc-comment comment">/**
         * \u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C\u867D\u7136map\u65B9\u6CD5\u7684\u53C2\u6570\u662Fasync\u51FD\u6570\uFF0C\u4F46\u5B83\u662F\u5E76\u53D1\u6267\u884C\u7684\uFF0C\u56E0\u4E3A\u53EA\u6709async\u51FD\u6570\u5185\u90E8\u662F\u7EE7\u53D1\u6267\u884C\uFF0C\u5916\u90E8\u4E0D\u53D7\u5F71\u54CD\u3002
         * \u540E\u9762\u7684for..of\u5FAA\u73AF\u5185\u90E8\u4F7F\u7528\u4E86await\uFF0C\u56E0\u6B64\u5B9E\u73B0\u4E86\u6309\u987A\u5E8F\u8F93\u51FA\u3002
         * 
         * 
         * 
         * \u8FD9\u91CC\u8981\u8054\u5408 async\u7684\u539F\u7406spawn \u5373 map\u7684\u539F\u7406\u6765\u7406\u89E3
         * textPromises \u5B58\u4E86urls.length\u4E2A url_async_promise, 
         *    url_async_promise\u6267\u884C\u542F\u52A8\u4E86\u8FED\u4EE3\u5668\u7684\u81EA\u6267\u884C\uFF0C\u6267\u884C\u7B2C\u4E00\u4E2Anext\uFF0C\u9047\u5230await\uFF0C\u6267\u884Cfetch(url),\u8FD4\u56DEpending_fetch_promise,\u5B58\u5165next.value
         *    \u540C\u65F6\u6267\u884Cpending_fetch_promise.then(()=&gt;<span class="token punctuation">{</span>gen.next<span class="token punctuation">}</span>),\u7531\u4E8E\u662Fpending\u72B6\u6001\uFF0C()=&gt;<span class="token punctuation">{</span>gen.next<span class="token punctuation">}</span>\u5B58\u5728fulledCallbak\u6570\u7EC4\u91CC\uFF0C\u7B49\u5F85\u8BF7\u6C42\u6210\u529F\u6267\u884Cresolve\u540E\u624D\u6267\u884C\u5B83
         * 
         * for...of... textPromises\u65F6\uFF0C\u7B2C\u4E00\u4E2Aurl_async_promise\u662Fbig_async_promise\u7684\u7B2C\u4E00\u4E2Anext.value\uFF0C
         *    \u76F8\u5F53\u4E8E\u662F url_async_promise .url_async_then .big_async_then
         *    \u5F53fetch\u6210\u529F\uFF0C\u6539\u53D8url_async_promise\u4E3Afulled\uFF0C\u6267\u884Curl_async_then\uFF0C\u4E4B\u540E\u6267\u884Cbig_async_then\uFF0C\u7136\u540Enext_big_async
         * */</span>
    

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),c=[e];function o(i,l){return s(),a("div",null,c)}var k=n(p,[["render",o],["__file","async.html.vue"]]);export{k as default};

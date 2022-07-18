import{_ as i,r as c,o as l,c as u,a as n,d as s,w as p,e,b as a}from"./app.68e824a5.js";const k={},r={class:"table-of-contents"},d=a("Async \u6D4B\u8BD5\u4EE3\u7801"),v=a("\u4F8B\u5B501"),m=a("\u4F8B\u5B50\u4E8C"),b=a("\u5E94\u7528"),g=a("\u9519\u8BEF\u5904\u7406"),y=e(`<h2 id="async-\u6D4B\u8BD5\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#async-\u6D4B\u8BD5\u4EE3\u7801" aria-hidden="true">#</a> Async \u6D4B\u8BD5\u4EE3\u7801</h2><h3 id="\u4F8B\u5B501" tabindex="-1"><a class="header-anchor" href="#\u4F8B\u5B501" aria-hidden="true">#</a> \u4F8B\u5B501</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">//async await \u6267\u884C\u987A\u5E8F eventloop</span>
<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">async1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;async1 start&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">await</span> <span class="token function">async2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;async1 end&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">async2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;async2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// \u5982\u679C\u8FD4\u56DE\u7684\u4E0D\u662Fpromise \uFF0C\u5236\u9020\u4E00\u4E2Apromise\uFF0C\u5E76\u76F4\u63A5\u628Aawait \u540E\u9762\u7684\u4EE3\u7801\u653E\u5230\u5176then\u4E2D\u53BB ,\u5E76\u4E14\u6267\u884Cresovle\uFF0C\u5C06\u540E\u9762\u7684\u4EE3\u7801\u653E\u5165\u5FAE\u89C2\u961F\u5217\u53BB\uFF08\u5E76\u643A\u5E26\u4E00\u4E2Aresolve\u51FD\u6570\u7B49\u5F85cb\u6267\u884C\u5B8C\u6210\u540E\u6267\u884C\uFF09</span>

  <span class="token comment">// \u5982\u679C\u8FD4\u56DE\u7684\u662Fpromise \u4F1A\u5148\u6267\u884Crutrun\u7684\u7ED3\u679C\uFF0C\u628A\u2018async2 promise\u2019\u5148push\u8FDB\u5FAE\u89C2\u961F\u5217\u53BB\uFF08\u5E76\u643A\u5E26\u4E00\u4E2Aresolve\u51FD\u6570\u7B49\u5F85cb\u6267\u884C\u5B8C\u6210\u540E\u6267\u884C\uFF09, </span>
  <span class="token comment">// \u5E76\u628Aawait \u540E\u9762\u7684\u4EE3\u7801\u5305\u88C5\u6210then\uFF0C\u63A5\u5230\u5F53\u524Dp.then\u540E\u53BB\uFF0C\u4E0B\u9762\u7684\u4EE3\u7801\u76F8\u5F53\u4E8E p.then.then(()=&gt;{await\u540E\u9762\u7684\u4EE3\u7801})</span>
  <span class="token comment">// return new Promise(function(resolve) {</span>
  <span class="token comment">//   console.log(&quot;async2 promise retrun&quot;);</span>
  <span class="token comment">//   resolve()</span>
  <span class="token comment">// }).then(()=&gt;{</span>
  <span class="token comment">//   console.log(&quot;async2 promise&quot;);</span>
  <span class="token comment">// })</span>
<span class="token punctuation">}</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;script start&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;setTimeout&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">async1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">new</span> <span class="token class-name"><span class="token builtin">Promise</span></span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span>resolve<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;promise1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;promise2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;script end&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),f={href:"https://juejin.cn/post/6844903734321872910#heading-18",target:"_blank",rel:"noopener noreferrer"},h=a("\u53C2\u8003\u6587\u7AE0\uFF1A"),_=e(`<h3 id="\u4F8B\u5B50\u4E8C" tabindex="-1"><a class="header-anchor" href="#\u4F8B\u5B50\u4E8C" aria-hidden="true">#</a> \u4F8B\u5B50\u4E8C</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">async1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">async2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;3&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> data<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">async2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token builtin">Promise</span></span><span class="token punctuation">(</span><span class="token punctuation">(</span>resolve<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;4&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&quot;async2\u7684\u7ED3\u679C&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;5&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> data<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">async1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;6&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">new</span> <span class="token class-name"><span class="token builtin">Promise</span></span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span>resolve<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;7&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">//   resolve()</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token comment">//\u7ED3\u679C\uFF1A 2 4 7 5 3 6 async2\u7ED3\u679C 1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details class="custom-container details"><summary>\u5177\u4F53\u8FC7\u7A0B\uFF1A</summary><ul><li>\u6267\u884C\u6808[],\u5B8F[],\u5FAE[],resolve\u5185\u5B58[]</li><li>1.\u5F00\u59CB\uFF0C\u9047\u5230settimeout\uFF0C\u5806\u5165\u5B8F[setimeout()=&gt;{0},],\u7EE7\u7EED\uFF0C\u9047\u5230async1()</li><li>2.\u6267\u884Casync1()\uFF0C\u6253\u53702\uFF0C\u9047\u5230await\uFF0C\u5148\u6267\u884Cawait\u540E\u9762\u7684\u4EE3\u7801async2()\uFF0C\u6362\u884C\u7684\u4EE3\u7801\u5148\u4E0D\u6267\u884C</li><li>3.\u6267\u884Casync2()\uFF0C\u9047\u5230\u5B9E\u529B\u5316promise4\uFF0C\u6253\u53704\uFF0C\u540E\u6267\u884Cresolve(xxx)\uFF0C\u5C06promise4\u72B6\u6001\u7F6E\u4E3Afulled\uFF0C</li><li>\u6267\u884C\u540E\u9762\u7684then\u5E76\u751F\u6210promise5\uFF0C\u7531\u4E8Epromise4\u72B6\u6001\u4E3Afulled\uFF0C\u5C06then\u7684\u7B2C\u4E00\u4E2A\u56DE\u8C03\u51FD\u6570\u5806\u5165\u5FAE[{()=&gt;{5};promise5\u7684resolve}\uFF0C]</li><li>\u7EE7\u7EED\uFF0C\u5904\u7406 await\u6362\u884C \u7684\u4EE3\u7801()=&gt;3\uFF0C\u5B9E\u9645\u4E0A\u7531\u4E8Easync2()\u8FD4\u56DE\u7684\u662Fpromise4\uFF0C\u6240\u4EE5\u4F1A\u5C06()=&gt;3\u5F53\u6210promise4\u7684\u6700\u540E\u4E00\u4E2Athen\u5904\u7406\uFF0C</li><li>\u7531\u4E8E\u5012\u6570\u7B2C\u4E8C\u4E2Athen\u8FD4\u56DE\u7684\u662Fpromise5\uFF0C\u4F46\u5176\u72B6\u6001\u4E3Apending\uFF0C\u6267\u884Cthen\u751F\u6210promise3\uFF0C\u6240\u4EE5\u4F1A\u6682\u65F6\u5C06promise3\u7684\u56DE\u8C03\u5373()=&gt;3\uFF0C\u5806\u5165resolve\u5185\u5B58P5[()=&gt;3\uFF0C]\uFF0C</li><li>\u5E76\u751F\u6210promise3\u8FD4\u56DE\u51FA\u53BB\uFF0C\u5176\u72B6\u6001\u4E5F\u662Fpending</li><li>4.\u7EE7\u7EED\uFF0Casync1().then,\u7531\u4E8Easync\u51FD\u6570\u8FD4\u56DE\u7684\u662Fpromise3\uFF0C\u5176\u72B6\u6001\u4E3Apending\uFF0C\u6267\u884Cthen\u751F\u6210promise6\uFF0C\u6240\u4EE5\u4F1A\u6682\u65F6\u5C06promise6\u7684\u56DE\u8C03\u5373()=&gt;6\uFF0C\u5806\u5165resolve\u5185\u5B58P3[()=&gt;6\uFF0C]\uFF0C</li><li>5.\u9047\u5230promise7\u5B9E\u4F8B\uFF0C\u6253\u53707\uFF0C\u7531\u4E8E\u6CA1\u6709\u6267\u884Cresolve()\uFF0C\u72B6\u6001\u4E3Apending\uFF0C\u6267\u884Cthen\u751F\u6210promise8\uFF0C\u6682\u65F6\u5C06promise8\u7684\u56DE\u8C03\u5373()=&gt;8\uFF0C\u5806\u5165resolve\u5185\u5B58P7[()=&gt;8\uFF0C]\uFF0C</li><li>6.\u6B64\u65F6\uFF0C\u4E3B\u6267\u884C\u6808\u5DF2\u7ECF\u6267\u884C\u5B8C\u6210\u4E86\uFF0C\u6839\u636E\u6D4F\u89C8\u5668\u7684eventloop\uFF08\u4E8B\u4EF6\u5FAA\u73AF\u673A\u5236\uFF09\uFF0C\u5F00\u59CB\u6267\u884C\u5FAE\u89C2\u4EFB\u52A1\uFF0C</li><li>7.\u6B64\u65F6\uFF0C\u5FAE\u89C2\u4EFB\u52A1\u4E3A\u5FAE[{()=&gt;{5};promise5\u7684resolve}\uFF0C]\uFF0C\u6267\u884C\uFF0C\u6253\u53705\uFF0C\u5E76\u6267\u884Cp5\u7684resolve\uFF0C\u72B6\u6001\u7F6E\u4E3Afulled\uFF0C\u5C06resolve\u5185\u5B58P5[()=&gt;3\uFF0C]\u4E2D\u7684()=&gt;3\u5806\u5165\u5FAE[{()=&gt;{3};promise3\u7684resolve}\uFF0C]</li><li>8.\u7EE7\u7EED\u68C0\u67E5\u5FAE\u89C2\u4EFB\u52A1\u961F\u5217\uFF0C\u53D1\u73B0[{()=&gt;{5};promise5\u7684resolve}\uFF0C]\uFF0C\u7EE7\u7EED\u6267\u884C\uFF0C\u6253\u53703\uFF0C\u5E76\u6267\u884Cp3\u7684resolve\uFF0C\u72B6\u6001\u7F6E\u4E3Afulled\uFF0C\u5C06resolve\u5185\u5B58P3[()=&gt;6\uFF0C]\u4E2D\u7684()=&gt;6\u5806\u5165\u5FAE[{()=&gt;{6}\uFF0C()=&gt;{&quot;async2\u7684\u7ED3\u679C&quot;};promise6\u7684resolve}\uFF0C]</li><li>9.\u7EE7\u7EED\u68C0\u67E5\u5FAE\u89C2\u4EFB\u52A1\u961F\u5217\uFF0C\u53D1\u73B0[{()=&gt;{6};promise6\u7684resolve}\uFF0C]\uFF0C\u7EE7\u7EED\u6267\u884C\uFF0C\u6253\u53706\uFF0C\u6253\u5370&quot;async2\u7684\u7ED3\u679C&quot;\uFF0C\u5E76\u6267\u884Cp6\u7684resolve\uFF0C\u72B6\u6001\u7F6E\u4E3Afulled\uFF0Cp6\u6CA1\u6709\u6682\u5B58\u6808\uFF0C</li><li>10\uFF0C\u7EE7\u7EED\u68C0\u67E5\u5FAE\u89C2\u4EFB\u52A1\u961F\u5217\uFF0C\u53D1\u73B0\u65E0\u4EFB\u52A1\u53EF\u6267\u884C\uFF0C\u7ED3\u675F\u4E00\u8F6E\u4E8B\u4EF6\u5FAA\u73AF\uFF0C</li><li>11\uFF0C\u5F00\u59CB\u4E0B\u4E00\u8F6E\u4E8B\u4EF6\u5FAA\u73AF\uFF0C\u68C0\u67E5\u5B8F\u89C2\u4EFB\u52A1\u961F\u5217\uFF0C\u6253\u53701</li></ul></details>`,3),w={href:"https://juejin.cn/post/7004638318843412493",target:"_blank",rel:"noopener noreferrer"},q=a("\u53C2\u8003\u6587\u7AE0\uFF1A"),x=e(`<h3 id="\u5E94\u7528" tabindex="-1"><a class="header-anchor" href="#\u5E94\u7528" aria-hidden="true">#</a> \u5E94\u7528</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>  <span class="token comment">//\u5E76\u53D1\u53D1\u51FA\u8FDC\u7A0B\u8BF7\u6C42,\u6309\u6B21\u5E8F\u8F93\u51FA</span>
  <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">logInOrder</span><span class="token punctuation">(</span>urls<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5E76\u53D1\u8BFB\u53D6\u8FDC\u7A0BURL</span>
    <span class="token keyword">const</span> textPromises <span class="token operator">=</span> urls<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token keyword">async</span> url <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token comment">// \u5B58\u4E86urls.length\u4E2Apromise\uFF0C\u8FD9\u4E9Bpromise\u90FD\u662F\u7B49\u5F85\u5F02\u6B65\u6267\u884C\u5B8C\u6BD5\u72B6\u6001\u7684promise</span>
      <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u6BCF\u4E2Aasync-await\u90FD\u53EA\u6709\u4E00\u4E2Aawait\uFF0C\u53EA\u6267\u884C\u4E00\u4E2Anext\u4E4B\u540Edone\u4E3Atrue\u8FD4\u56DE\u4E00\u4E2Apromise</span>
      <span class="token keyword">return</span> response<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// \u6309\u6B21\u5E8F\u8F93\u51FA</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> textPromise <span class="token keyword">of</span> textPromises<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// \u4E00\u4E2Aasync\u4E0Burls.length\u4E2Aawait\uFF0C\u8FD9\u4E9Bawati\u4F1A\u6309textPromises\u7684promises\u987A\u5E8F\u8F93\u51FA</span>
      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">await</span> textPromise<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u7B49\u5F85\u8FD9\u4E2Apromise\u7684\u72B6\u6001\u6539\u4E3Aresolve\u540E\uFF0C\u624D\u6267\u884Cgen.next(v)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token doc-comment comment">/**
   * \u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C\u867D\u7136map\u65B9\u6CD5\u7684\u53C2\u6570\u662Fasync\u51FD\u6570\uFF0C\u4F46\u5B83\u662F\u5E76\u53D1\u6267\u884C\u7684\uFF0C\u56E0\u4E3A\u53EA\u6709async\u51FD\u6570\u5185\u90E8\u662F\u7EE7\u53D1\u6267\u884C\uFF0C\u5916\u90E8\u4E0D\u53D7\u5F71\u54CD\u3002
   * \u540E\u9762\u7684for..of\u5FAA\u73AF\u5185\u90E8\u4F7F\u7528\u4E86await\uFF0C\u56E0\u6B64\u5B9E\u73B0\u4E86\u6309\u987A\u5E8F\u8F93\u51FA\u3002
   * */</span>
  <span class="token comment">//  \u53C2\u8003\u6587\u7AE0\uFF1Ahttps://es6.ruanyifeng.com/#docs/async-iterator</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),P={href:"https://juejin.cn/post/7004638318843412493",target:"_blank",rel:"noopener noreferrer"},j=a("\u53C2\u8003\u6587\u7AE0\uFF1A"),L=e(`<h3 id="\u9519\u8BEF\u5904\u7406" tabindex="-1"><a class="header-anchor" href="#\u9519\u8BEF\u5904\u7406" aria-hidden="true">#</a> \u9519\u8BEF\u5904\u7406</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>  <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">async1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
      <span class="token keyword">await</span> <span class="token builtin">Promise</span><span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>error<span class="token punctuation">,</span><span class="token string">&#39;dddd&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">throw</span> <span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&#39;xxxx&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;???\u8FD8\u6267\u884C\uFF1F&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">async1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;6&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),N={class:"custom-container tip"},T=n("p",{class:"custom-container-title"},"Js\u9519\u8BEF\u5904\u7406",-1),V=n("ol",null,[n("li",null,"try...catch...\u6355\u83B7\u540C\u6B65\u5F02\u5E38\uFF1B"),n("li",null,"promise\u7684reject\u6355\u83B7\u5B8F\u89C2\u4EFB\u52A1\u5F02\u6B65\u5F02\u5E38\uFF1B"),n("li",null,"promise\u7684catch\u6355\u83B7\u5F02\u6B65\u5F02\u5E38\uFF1B")],-1),B={href:"https://juejin.cn/post/6844903462002491399#heading-10",target:"_blank",rel:"noopener noreferrer"},E=a("\u53C2\u8003");function I(R,A){const t=c("RouterLink"),o=c("ExternalLinkIcon");return l(),u("div",null,[n("nav",r,[n("ul",null,[n("li",null,[s(t,{to:"#async-\u6D4B\u8BD5\u4EE3\u7801"},{default:p(()=>[d]),_:1}),n("ul",null,[n("li",null,[s(t,{to:"#\u4F8B\u5B501"},{default:p(()=>[v]),_:1})]),n("li",null,[s(t,{to:"#\u4F8B\u5B50\u4E8C"},{default:p(()=>[m]),_:1})]),n("li",null,[s(t,{to:"#\u5E94\u7528"},{default:p(()=>[b]),_:1})]),n("li",null,[s(t,{to:"#\u9519\u8BEF\u5904\u7406"},{default:p(()=>[g]),_:1})])])])])]),y,n("p",null,[n("a",f,[h,s(o)])]),_,n("p",null,[n("a",w,[q,s(o)])]),x,n("p",null,[n("a",P,[j,s(o)])]),L,n("div",N,[T,V,n("p",null,[n("a",B,[E,s(o)])])])])}var U=i(k,[["render",I],["__file","async-use.js.html.vue"]]);export{U as default};

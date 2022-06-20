import{_ as n,o as s,c as a,g as p}from"./app.02f2fcbd.js";const t={},e=p(`<div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// \u6811\u7ED3\u6784\u3001\u6241\u5E73\u5316\u6570\u7EC4\u76F8\u4E92\u8F6C\u6362</span>

  <span class="token comment">// \u6D4B\u8BD5\u6570\u636E</span>
  <span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>id<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token string">&#39;\u90E8\u95E81&#39;</span><span class="token punctuation">,</span> pid<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>id<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token string">&#39;\u90E8\u95E82&#39;</span><span class="token punctuation">,</span> pid<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>id<span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token string">&#39;\u90E8\u95E83&#39;</span><span class="token punctuation">,</span> pid<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>id<span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token string">&#39;\u90E8\u95E84&#39;</span><span class="token punctuation">,</span> pid<span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>id<span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token string">&#39;\u90E8\u95E85&#39;</span><span class="token punctuation">,</span> pid<span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span>
  <span class="token comment">// \u76EE\u6807</span>
  <span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
    id<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    name<span class="token operator">:</span> <span class="token string">&quot;\u90E8\u95E81&quot;</span><span class="token punctuation">,</span>
    pid<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    children<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        id<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        name<span class="token operator">:</span> <span class="token string">&quot;\u90E8\u95E82&quot;</span><span class="token punctuation">,</span>
        pid<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        children<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        id<span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
        name<span class="token operator">:</span> <span class="token string">&quot;\u90E8\u95E83&quot;</span><span class="token punctuation">,</span>
        pid<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        children<span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            id<span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
            name<span class="token operator">:</span> <span class="token string">&quot;\u90E8\u95E84&quot;</span><span class="token punctuation">,</span>
            pid<span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
            children<span class="token operator">:</span> <span class="token punctuation">[</span>
              <span class="token punctuation">{</span>
                id<span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
                name<span class="token operator">:</span> <span class="token string">&quot;\u90E8\u95E85&quot;</span><span class="token punctuation">,</span>
                pid<span class="token operator">:</span><span class="token number">4</span><span class="token punctuation">,</span>
                children<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// array to tree \u3010\u751F\u6210\u6811\u7ED3\u6784\u3011</span>
    <span class="token comment">// \u9012\u5F52\u601D\u8DEF \u65F6\u95F4\u590D\u6742\u5EA6 O(2^n)</span>
    <span class="token keyword">function</span> <span class="token function">getChildren</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span>parentId <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> item <span class="token keyword">of</span> arr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>pid <span class="token operator">===</span> parentId<span class="token punctuation">)</span><span class="token punctuation">{</span>
          res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token operator">...</span>item<span class="token punctuation">,</span>children<span class="token operator">:</span><span class="token function">getChildren</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span>item<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> res
    <span class="token punctuation">}</span>
    <span class="token keyword">var</span> tree <span class="token operator">=</span> <span class="token function">getChildren</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>tree<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// Hash\u601D\u8DEF \u65F6\u95F4\u590D\u6742\u5EA6 O(n)</span>
    <span class="token keyword">function</span> <span class="token function">hashToTree</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> hashMap <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
      <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
      arr<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>item <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        hashMap<span class="token punctuation">[</span>item<span class="token punctuation">.</span>id<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
          <span class="token operator">...</span>item<span class="token punctuation">,</span>children<span class="token operator">:</span>item<span class="token punctuation">.</span>children <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>id <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
          res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>hashMap<span class="token punctuation">[</span>item<span class="token punctuation">.</span>id<span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
          <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>hashMap<span class="token punctuation">[</span>item<span class="token punctuation">.</span>pid<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            hashMap<span class="token punctuation">[</span>item<span class="token punctuation">.</span>pid<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
              children<span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
          hashMap<span class="token punctuation">[</span>item<span class="token punctuation">.</span>pid<span class="token punctuation">]</span><span class="token punctuation">.</span>children<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>hashMap<span class="token punctuation">[</span>item<span class="token punctuation">.</span>id<span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> res
    <span class="token punctuation">}</span>
    <span class="token keyword">var</span> tree2 <span class="token operator">=</span> <span class="token function">hashToTree</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>tree2<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// tree to array \u3010\u6241\u5E73\u5316\u6570\u636E\u3011</span>
    <span class="token comment">// \u6808\u601D\u8DEF \u65F6\u95F4\u590D\u6742\u5EA6 O(n)</span>
    <span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> stack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>         <span class="token comment">// \u58F0\u660E\u6808\uFF0C\u7528\u6765\u5B58\u50A8\u5F85\u5904\u7406\u5143\u7D20</span>
      <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>           <span class="token comment">// \u63A5\u6536\u7ED3\u679C</span>
      stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>          <span class="token comment">// \u5C06\u521D\u59CB\u5143\u7D20\u538B\u5165\u6808</span>
      <span class="token keyword">while</span><span class="token punctuation">(</span>stack<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>     <span class="token comment">// \u6808\u4E0D\u4E3A\u7A7A\u5219\u5FAA\u73AF\u6267\u884C</span>
        <span class="token keyword">const</span> item <span class="token operator">=</span> stack<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>  <span class="token comment">// \u53D6\u51FA\u6808\u9876\u5143\u7D20</span>
        res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span>         <span class="token comment">// \u5143\u7D20\u672C\u8EAB\u538B\u5165\u7ED3\u679C\u6570\u7EC4</span>
        stack<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>          <span class="token comment">// \u5C06\u5F53\u524D\u5143\u7D20\u5F39\u51FA\u6808</span>
        <span class="token comment">// \u903B\u8F91\u5904\u7406\uFF0C\u5982\u679C\u5F53\u524D\u5143\u7D20\u5305\u542B\u5B50\u5143\u7D20\uFF0C\u5219\u5C06\u5B50\u5143\u7D20\u538B\u5165\u6808</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>item<span class="token punctuation">.</span>children <span class="token operator">&amp;&amp;</span> item<span class="token punctuation">.</span>children<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token operator">...</span>item<span class="token punctuation">.</span>children<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> res<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">fn</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// \u9012\u5F52\u601D\u8DEF \u65F6\u95F4\u590D\u6742\u5EA6 O(2^n)</span>
    <span class="token keyword">function</span> <span class="token function">fn2</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// \u9ED8\u8BA4\u521D\u59CB\u7ED3\u679C\u6570\u7EC4\u4E3A[]</span>
      res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u5F53\u524D\u5143\u7D20\u5165\u6808</span>
      <span class="token comment">// \u82E5\u5143\u7D20\u5305\u542Bchildren\uFF0C\u5219\u904D\u5386children\u5E76\u9012\u5F52\u8C03\u7528\u4F7F\u6BCF\u4E00\u4E2A\u5B50\u5143\u7D20\u5165\u6808</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>obj<span class="token punctuation">.</span>children <span class="token operator">&amp;&amp;</span> obj<span class="token punctuation">.</span>children<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">const</span> item <span class="token keyword">of</span> obj<span class="token punctuation">.</span>children<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">fn</span><span class="token punctuation">(</span>item<span class="token punctuation">,</span> res<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> res<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">fn2</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),o=[e];function c(i,l){return s(),a("div",null,o)}var k=n(t,[["render",c],["__file","ArrayToTree.js.html.vue"]]);export{k as default};

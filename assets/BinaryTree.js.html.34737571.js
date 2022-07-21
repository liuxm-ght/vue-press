import{_ as n,o as s,c as a,f as t}from"./app.f25adddd.js";const p={},e=t(`<div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// \u53C2\u8003\u6587\u7AE0\uFF1Ahttps://juejin.cn/post/6844903656865677326#heading-26</span>
<span class="token comment">/* 
  \u4E8C\u5206\u67E5\u627E
    \u4E8C\u5206\u67E5\u627E\uFF0C\u662F\u5728\u4E00\u4E2A \u6709\u5E8F \u7684\u5E8F\u5217\u91CC\u67E5\u627E\u67D0\u4E00\u4E2A\u503C\uFF0C\u4E0E\u5C0F\u65F6\u5019\u73A9\u7684\u731C\u6570\u5B57\u6E38\u620F\u975E\u5E38\u76F8\u5566\uFF1A
    A: 0 ~ 100 \u731C\u4E00\u4E2A\u6570\u5B57
    B: 50
    A: \u5927\u4E86
    B: 25
    A: \u5BF9\u5934\uFF0C\u5C31\u662F25
    \u56E0\u6B64\uFF0C\u601D\u8DEF\u4E5F\u5C31\u975E\u5E38\u6E05\u695A\u4E86\uFF0C\u8FD9\u91CC\u6709\u9012\u5F52\u548C\u975E\u9012\u5F52\u4E24\u79CD\u5199\u6CD5\uFF0C\u5148\u8BF4\u4E0B\u9012\u5F52\u7684\u65B9\u6CD5\u5427\uFF1A

    \u8BBE\u5B9A\u533A\u95F4,low\u548Chigh
    \u627E\u51FA\u53E3\uFF1A \u627E\u5230target\uFF0C\u8FD4\u56DEtarget\uFF1B
    \u5426\u5219\u5BFB\u627E\uFF0C\u5F53\u524D\u6B21\u5E8F\u6CA1\u6709\u627E\u5230\uFF0C\u628A\u533A\u95F4\u7F29\u5C0F\u540E\u9012\u5F52
*/</span>
  <span class="token comment">/* 
    \u9012\u5F52\u65B9\u6CD5  
  */</span>  
    <span class="token keyword">function</span> <span class="token function">binaryRecurrenceFind</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span>target<span class="token punctuation">,</span>low <span class="token operator">=</span> <span class="token number">0</span> <span class="token punctuation">,</span>high <span class="token operator">=</span> arr<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> n <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span>high <span class="token operator">+</span> low<span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">)</span>
      <span class="token keyword">let</span> cur <span class="token operator">=</span> arr<span class="token punctuation">[</span>n<span class="token punctuation">]</span>
      <span class="token keyword">if</span><span class="token punctuation">(</span>cur <span class="token operator">===</span> target<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;target \u5728\u4E0B\u6807&#39;</span> <span class="token operator">+</span> <span class="token function">Number</span><span class="token punctuation">(</span>n<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>cur <span class="token operator">&gt;</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">binaryRecurrenceFind</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span>target<span class="token punctuation">,</span>low<span class="token punctuation">,</span> n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>cur <span class="token operator">&lt;</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">binaryRecurrenceFind</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span>target<span class="token punctuation">,</span>n <span class="token operator">+</span> <span class="token number">1</span> <span class="token punctuation">,</span>high<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token comment">// \u505C\u6B62\u6761\u4EF6\u662F\u9012\u5F52\u5B8C\u6210</span>
    <span class="token punctuation">}</span>
    <span class="token function">binaryRecurrenceFind</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">,</span><span class="token number">9</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">15</span><span class="token punctuation">,</span><span class="token number">28</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">)</span>

    <span class="token comment">/* 
      \u5FAA\u73AF\u65B9\u6CD5
    */</span>
    <span class="token keyword">function</span> <span class="token function">binarySortFind</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span>target<span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">var</span> low <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
          high <span class="token operator">=</span> arr<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span>
          mid<span class="token punctuation">;</span>
      <span class="token keyword">while</span> <span class="token punctuation">(</span>low<span class="token operator">&lt;=</span>high<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// \u505C\u6B62\u6761\u4EF6\u662F high \u5C0F\u4E8E low</span>
        mid <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span>low<span class="token operator">+</span>high<span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">==</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;target \u5728\u4E0B\u6807&#39;</span> <span class="token operator">+</span> <span class="token function">Number</span><span class="token punctuation">(</span>mid<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">&gt;</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          high <span class="token operator">=</span> mid <span class="token operator">-</span> <span class="token number">1</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">&lt;</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          low <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token function">binarySortFind</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">,</span><span class="token number">9</span><span class="token punctuation">,</span><span class="token number">11</span><span class="token punctuation">,</span><span class="token number">15</span><span class="token punctuation">,</span><span class="token number">28</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token number">12</span><span class="token punctuation">)</span>


<span class="token comment">/* \u4E8C\u53C9\u6811 */</span>
  <span class="token keyword">class</span> <span class="token class-name"><span class="token constant">BST2</span></span><span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>root <span class="token operator">=</span> <span class="token keyword">null</span>
    <span class="token punctuation">}</span>
    <span class="token function">insert</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">//\u63D2\u5165\u503C</span>
      <span class="token keyword">let</span> node <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TreeNode</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span><span class="token keyword">null</span><span class="token punctuation">,</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>root<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>root <span class="token operator">=</span> node
        <span class="token keyword">return</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">let</span> current <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>root
      <span class="token keyword">while</span> <span class="token punctuation">(</span>current<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>data <span class="token operator">&lt;</span> current<span class="token punctuation">.</span>data<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>current<span class="token punctuation">.</span>left<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            current<span class="token punctuation">.</span>left <span class="token operator">=</span> node
            <span class="token keyword">return</span>
          <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
            current <span class="token operator">=</span> current<span class="token punctuation">.</span>left
          <span class="token punctuation">}</span> 
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>current<span class="token punctuation">.</span>right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            current<span class="token punctuation">.</span>right <span class="token operator">=</span> node
            <span class="token keyword">return</span>
          <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
            current <span class="token operator">=</span> current<span class="token punctuation">.</span>right
          <span class="token punctuation">}</span> 
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      <span class="token comment">// while (current) {</span>
      <span class="token comment">//   parent = current</span>
      <span class="token comment">//   if(data &gt; current.data){</span>
      <span class="token comment">//     current = current.left</span>
      <span class="token comment">//     if (!current) {</span>
      <span class="token comment">//       current = parent.left</span>
      <span class="token comment">//       return</span>
      <span class="token comment">//     }</span>
      <span class="token comment">//   } else {</span>
      <span class="token comment">//     current = current.right</span>
      <span class="token comment">//     if (!current) {</span>
      <span class="token comment">//       current = parent.right</span>
      <span class="token comment">//       return</span>
      <span class="token comment">//     }</span>
      <span class="token comment">//   }</span>
      <span class="token comment">// }</span>
    <span class="token punctuation">}</span>
    <span class="token function">_removeNode</span><span class="token punctuation">(</span>node<span class="token punctuation">,</span>data<span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>node <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">null</span>
      <span class="token punctuation">}</span> 
      <span class="token keyword">if</span> <span class="token punctuation">(</span>data <span class="token operator">===</span> node<span class="token punctuation">.</span>data<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>left <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> node<span class="token punctuation">.</span>right <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span> <span class="token comment">//\u4E0D\u5B58\u5728\u5DE6\u53F3\u8282\u70B9\uFF0Cnull</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>left <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> node<span class="token punctuation">.</span>right <span class="token comment">//\u4E0D\u5B58\u5728\u5DE6\u8282\u70B9\uFF0C\u53F3\u8282\u70B9\u9876\u4E0A\u53BB</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>right <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> node<span class="token punctuation">.</span>left <span class="token comment">//\u4E0D\u5B58\u5728\u53F3\u8282\u70B9\uFF0C\u5DE6\u8282\u70B9\u9876\u4E0A\u53BB</span>
        <span class="token comment">//\u5DE6\u53F3\u90FD\u4E3A\u975E\u53F6\u5B50\u8282\u70B9</span>
        <span class="token comment">//\u65B9\u6CD51 \u53D6\u53F3\u8282\u70B9\u6811\u4E0A\u6700\u5C0F\u53F6\u5B50\u8282\u70B9\u66FF\u6362 \u88AB\u5220\u9664\u7684\u8282\u70B9</span>
        <span class="token keyword">let</span> rightMinNode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">findMin</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span>
        node<span class="token punctuation">.</span>data <span class="token operator">=</span> rightMinNode<span class="token punctuation">.</span>data
        node<span class="token punctuation">.</span>right <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">_removeNode</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">,</span>rightMinNode<span class="token punctuation">.</span>data<span class="token punctuation">)</span>
        <span class="token comment">//\u65B9\u6CD52 \u53D6\u5DE6\u8282\u70B9\u6811\u4E0A\u6700\u5927\u53F6\u5B50\u8282\u70B9\u66FF\u6362 \u88AB\u5220\u9664\u7684\u8282\u70B9</span>
        <span class="token comment">// let leftMaxNode = this.findMax(node.left)</span>
        <span class="token comment">// node.data = leftMaxNode.data</span>
        <span class="token comment">// node.left = this._removeNode(node.left,leftMaxNode.data)</span>
        <span class="token keyword">return</span> node
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>data <span class="token operator">&lt;</span> node<span class="token punctuation">.</span>data<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        node<span class="token punctuation">.</span>left <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">_removeNode</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">,</span>data<span class="token punctuation">)</span>
        <span class="token keyword">return</span> node
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>data <span class="token operator">&gt;</span> node<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">{</span>
        node<span class="token punctuation">.</span>right <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">_removeNode</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">,</span>data<span class="token punctuation">)</span>
        <span class="token keyword">return</span> node
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token function">remove</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">//\u5220\u9664node</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>root <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">_removeNode</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>root<span class="token punctuation">,</span>data<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token function">find</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">//\u67E5\u503C</span>
      <span class="token keyword">let</span> current <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>root
      <span class="token keyword">while</span> <span class="token punctuation">(</span>current<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>data <span class="token operator">===</span> current<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">{</span>
          <span class="token keyword">return</span> current
        <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>data <span class="token operator">&lt;</span> current<span class="token punctuation">.</span>data<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          current <span class="token operator">=</span> current<span class="token punctuation">.</span>left
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          current <span class="token operator">=</span> current<span class="token punctuation">.</span>right
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> <span class="token keyword">null</span> 
    <span class="token punctuation">}</span>
    <span class="token function">findMin</span><span class="token punctuation">(</span>node <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>root<span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">//\u67E5\u6700\u5C0F\u503Cnode</span>
      <span class="token keyword">let</span> current <span class="token operator">=</span> node
      <span class="token keyword">while</span> <span class="token punctuation">(</span>current<span class="token punctuation">.</span>left<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        current <span class="token operator">=</span> current<span class="token punctuation">.</span>left
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> current
    <span class="token punctuation">}</span>
    <span class="token function">findMax</span><span class="token punctuation">(</span>node <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>root<span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">//\u67E5\u6700\u5927\u503Cnode</span>
      <span class="token keyword">let</span> current <span class="token operator">=</span> node
      <span class="token keyword">while</span> <span class="token punctuation">(</span>current<span class="token punctuation">.</span>right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        current <span class="token operator">=</span> current<span class="token punctuation">.</span>right
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> current
    <span class="token punctuation">}</span>
    <span class="token function">inOrder</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">//\u4E2D\u5E8F\u904D\u5386 (\u5DE6\u6839\u53F3)</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">inOrder</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">)</span>
        node<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">inOrder</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token comment">/* 
      \u975E\u9012\u5F52\u5199\u6CD5
      \u53D6\u8DDF\u8282\u70B9\u4E3A\u76EE\u6807\u8282\u70B9\uFF0C\u5F00\u59CB\u904D\u5386
      1.\u5DE6\u5B69\u5B50\u5165\u6808 -&gt; \u76F4\u81F3\u5DE6\u5B69\u5B50\u4E3A\u7A7A\u7684\u8282\u70B9
      2.\u8282\u70B9\u51FA\u6808 -&gt; \u8BBF\u95EE\u8BE5\u8282\u70B9
      3.\u4EE5\u53F3\u5B69\u5B50\u4E3A\u76EE\u6807\u8282\u70B9\uFF0C\u518D\u4F9D\u6B21\u6267\u884C1\u30012\u30013
    */</span>
    <span class="token function">inOrder2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">let</span> current <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>root<span class="token punctuation">,</span>
          stack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
      <span class="token keyword">while</span> <span class="token punctuation">(</span>current <span class="token operator">||</span> stack<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>current<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>current<span class="token punctuation">)</span>
          current <span class="token operator">=</span> current<span class="token punctuation">.</span>left
        <span class="token punctuation">}</span>
        current <span class="token operator">=</span> stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        current<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        current <span class="token operator">=</span> current<span class="token punctuation">.</span>right
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token function">preOrder</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">//\u524D\u5E8F\u904D\u5386 (\u6839\u5DE6\u53F3)</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        node<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">inOrder</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">)</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">inOrder</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token function">preOrder2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">//\u524D\u5E8F\u904D\u5386 (\u6839\u5DE6\u53F3)</span>
      <span class="token keyword">let</span> current <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>root<span class="token punctuation">,</span>
        stack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
      <span class="token keyword">while</span> <span class="token punctuation">(</span>current <span class="token operator">||</span> stack<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>current<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          current<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
          stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>current<span class="token punctuation">)</span>
          current <span class="token operator">=</span> current<span class="token punctuation">.</span>left
        <span class="token punctuation">}</span>
        current <span class="token operator">=</span> stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        current <span class="token operator">=</span> current<span class="token punctuation">.</span>right
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token function">postOrder</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">//\u540E\u5E8F\u904D\u5386 (\u5DE6\u53F3\u6839)</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">inOrder</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">)</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">inOrder</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span>
        node<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token function">postOrder2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">//\u524D\u5E8F\u904D\u5386 (\u6839\u5DE6\u53F3)</span>
      <span class="token keyword">var</span> current <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>root
      <span class="token keyword">var</span> stack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
      <span class="token keyword">var</span> last <span class="token operator">=</span> <span class="token keyword">null</span>

      <span class="token comment">//\u51FA\u6808</span>
      <span class="token keyword">while</span> <span class="token punctuation">(</span>current <span class="token operator">||</span> stack<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//\u5165\u6808</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>current<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>current<span class="token punctuation">)</span>
          current <span class="token operator">=</span> current<span class="token punctuation">.</span>left
        <span class="token punctuation">}</span>

        current <span class="token operator">=</span> stack<span class="token punctuation">[</span>stack<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>current<span class="token punctuation">.</span>right <span class="token operator">||</span> current<span class="token punctuation">.</span>right <span class="token operator">==</span> last<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          current <span class="token operator">=</span> stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
          current<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
          last <span class="token operator">=</span> current
          current <span class="token operator">=</span> <span class="token keyword">null</span> <span class="token comment">//\u7EE7\u7EED\u5F39\u6808</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          current <span class="token operator">=</span> current<span class="token punctuation">.</span>right
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token comment">/* 
      \u5E7F\u5EA6\u904D\u5386
        \u5E7F\u5EA6\u904D\u5386\u662F\u4ECE\u4E8C\u53C9\u6811\u7684\u6839\u7ED3\u70B9\u5F00\u59CB\uFF0C\u81EA\u4E0A\u800C\u4E0B\u9010\u5C42\u904D\u5386\uFF1B\u5728\u540C\u4E00\u5C42\u4E2D\uFF0C\u6309\u7167\u4ECE\u5DE6\u5230\u53F3\u7684\u987A\u5E8F\u5BF9\u7ED3\u70B9\u9010\u4E00\u8BBF\u95EE
    */</span>
    <span class="token function">levelOrder</span><span class="token punctuation">(</span>node<span class="token punctuation">,</span>que <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>root<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      node <span class="token operator">=</span> que<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        node<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">)</span> que<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span> que<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">levelOrder</span><span class="token punctuation">(</span>node<span class="token punctuation">,</span>que<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token function">levelOrder2</span><span class="token punctuation">(</span>node <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>root<span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">//\u975E\u9012\u5F52\u5199\u6CD5</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> que <span class="token operator">=</span> <span class="token punctuation">[</span>node<span class="token punctuation">]</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>que<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          node <span class="token operator">=</span> que<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            node<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">)</span> que<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">)</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span> que<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">levelOrder</span><span class="token punctuation">(</span>node<span class="token punctuation">,</span>que<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token function">getDeep</span><span class="token punctuation">(</span>node<span class="token punctuation">,</span>deep<span class="token punctuation">)</span><span class="token punctuation">{</span>
      deep <span class="token operator">=</span> deep <span class="token operator">||</span> <span class="token number">0</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>node<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> deep
      <span class="token punctuation">}</span>
      deep<span class="token operator">++</span>
      <span class="token keyword">var</span> ldeep <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getDeep</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">,</span>deep<span class="token punctuation">)</span>
      <span class="token keyword">var</span> rdeep <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getDeep</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">,</span>deep<span class="token punctuation">)</span>
      <span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>ldeep<span class="token punctuation">,</span>rdeep<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token function">getNode</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">let</span> current <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>root
      <span class="token keyword">while</span> <span class="token punctuation">(</span>current<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>data <span class="token operator">===</span> current<span class="token punctuation">.</span>data<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> current
        <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>data <span class="token operator">&lt;</span> current<span class="token punctuation">.</span>data<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          current <span class="token operator">=</span> current<span class="token punctuation">.</span>left
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          current <span class="token operator">=</span> current<span class="token punctuation">.</span>right
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> current
    <span class="token punctuation">}</span>
    <span class="token function">getNode2</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span>node <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>root<span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>node<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">null</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>data <span class="token operator">===</span> node<span class="token punctuation">.</span>data<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> node
      <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>data <span class="token operator">&lt;</span> node<span class="token punctuation">.</span>data<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getNode2</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span>node<span class="token punctuation">.</span>left<span class="token punctuation">)</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getNode2</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">class</span> <span class="token class-name">TreeNode</span><span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span>left<span class="token punctuation">,</span>right<span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>data <span class="token operator">=</span> data<span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>left <span class="token operator">=</span> left<span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>right <span class="token operator">=</span> right<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">let</span> tree <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token constant">BST2</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  tree<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span>
  tree<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span>
  tree<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">)</span>
  tree<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token number">9</span><span class="token punctuation">)</span>
  tree<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span>
  tree<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>
  tree<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
  tree<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
  tree<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>
  tree<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>

  <span class="token comment">// console.log(tree.root);</span>
  <span class="token comment">// tree.inOrder2(tree.root)</span>
  <span class="token comment">// tree.preOrder2(tree.root)</span>
  <span class="token comment">// tree.postOrder2(tree.root)</span>
  <span class="token comment">// tree.levelOrder2(tree.root)</span>
  <span class="token comment">// tree.remove(8)</span>
  <span class="token comment">// tree.remove(9)</span>
  <span class="token comment">// tree.remove(10)</span>
  <span class="token comment">// console.log(tree.root);</span>
  <span class="token comment">// console.log(tree.getNode2(7));</span>
  <span class="token comment">// console.log(tree.getDeep(tree.root));</span>

  <span class="token comment">/* 
    \u4E8C\u53C9\u6811\u91CD\u5EFA
      \u8F93\u5165\u67D0\u4E8C\u53C9\u6811\u7684\u524D\u5E8F\u904D\u5386\u548C\u4E2D\u5E8F\u904D\u5386\u7684\u7ED3\u679C\uFF0C\u8BF7\u91CD\u5EFA\u51FA\u8BE5\u4E8C\u53C9\u6811\u3002\u5047\u8BBE\u8F93\u5165\u7684\u524D\u5E8F\u904D\u5386\u548C\u4E2D\u5E8F\u904D\u5386\u7684\u7ED3\u679C\u4E2D\u90FD\u4E0D\u542B\u91CD\u590D\u7684\u6570\u5B57\u3002
      \u4F8B\u5982\u8F93\u5165\u524D\u5E8F\u904D\u5386\u5E8F\u5217{1,2,4,7,3,5,6,8}\u548C\u4E2D\u5E8F\u904D\u5386\u5E8F\u5217{4,7,2,1,5,3,8,6}\uFF0C\u5219\u91CD\u5EFA\u4E8C\u53C9\u6811\u5E76\u8FD4\u56DE\u3002
      // \u53C2\u8003\u6587\u7AE0\uFF1Ahttps://zhuanlan.zhihu.com/p/143781444


      \u4E8C\u53C9\u6811\u5148\u5230\u6B64\u544A\u4E00\u6BB5\u843D\u4E86\uFF0C\u540E\u7EED\u6DF1\u5165\u7B97\u6CD5\u540E\u53EF\u4EE5\u56DE\u6765\u7EE7\u7EED
  */</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),o=[e];function c(l,i){return s(),a("div",null,o)}var k=n(p,[["render",c],["__file","BinaryTree.js.html.vue"]]);export{k as default};

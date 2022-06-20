import{_ as n,o as s,c as a,g as t}from"./app.7b383bae.js";const p={},e=t(`<div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">//1. \u539F\u578B\u94FE\u7EE7\u627F</span>
  <span class="token keyword">function</span> <span class="token function">Animal</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>colors <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;black&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;white&#39;</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
  Animal<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">getColor</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>colors
  <span class="token punctuation">}</span>
  <span class="token keyword">function</span> <span class="token function">Dog</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  Dog<span class="token punctuation">.</span>prototype <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Animal</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token keyword">let</span> dog1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Dog</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  dog1<span class="token punctuation">.</span>colors<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&#39;blue&#39;</span><span class="token punctuation">)</span>
  <span class="token keyword">let</span> dog2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Dog</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>dog2<span class="token punctuation">.</span>colors<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [&#39;black&#39;, &#39;white&#39;, &#39;blue&#39;]</span>
  <span class="token comment">// \u7F3A\u70B9\uFF1A</span>
    <span class="token comment">// 1. \u539F\u578B\u4E2D\u5305\u542B\u7684\u5F15\u7528\u7C7B\u578B\u5C5E\u6027\u5C06\u88AB\u6240\u6709\u5B9E\u4F8B\u5171\u4EAB\uFF1B</span>
    <span class="token comment">// 2. \u5B50\u7C7B\u5728\u5B9E\u4F8B\u5316\u7684\u65F6\u5019\u4E0D\u80FD\u7ED9\u7236\u7C7B\u6784\u9020\u51FD\u6570\u4F20\u53C2\uFF1B</span>
    <span class="token comment">// \u628Aanimal\u5F53\u6210\u516C\u5171\u5C5E\u6027\u548C\u65B9\u6CD5\u6765\u7EE7\u627F\u4E86\uFF0C\u4E0D\u80FD\u7EE7\u627F\u5B83\u7684\u79C1\u6709\u5C5E\u6027\u548C\u65B9\u6CD5</span>
  


<span class="token comment">//2. \u501F\u7528\u6784\u9020\u51FD\u6570\u7EE7\u627F</span>
  <span class="token keyword">function</span> <span class="token function">Animal</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">getName</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">function</span> <span class="token function">Cat</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//\u7EE7\u627F\u4E86\u79C1\u6709\u5C5E\u6027</span>
    <span class="token function">Animal</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span>name<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  Cat<span class="token punctuation">.</span>prototype <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Animal</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 
    <span class="token comment">// \u4F18\u70B9</span>
      <span class="token comment">//\u501F\u7528\u6784\u9020\u51FD\u6570\u5B9E\u73B0\u7EE7\u627F\u89E3\u51B3\u4E86\u539F\u578B\u94FE\u7EE7\u627F\u7684 2 \u4E2A\u95EE\u9898\uFF1A\u5F15\u7528\u7C7B\u578B\u5171\u4EAB\u95EE\u9898 \u4EE5\u53CA \u4F20\u53C2\u95EE\u9898\u3002</span>
    <span class="token comment">// \u7F3A\u70B9\uFF1A</span>
      <span class="token comment">// \u53EA\u7EE7\u627F\u4E86\u79C1\u6709\u5C5E\u6027\u548C\u65B9\u6CD5</span>
      <span class="token comment">//\u4F46\u662F\u7531\u4E8E\u65B9\u6CD5\u5FC5\u987B\u5B9A\u4E49\u5728\u6784\u9020\u51FD\u6570\u4E2D\uFF0C\u6240\u4EE5\u4F1A\u5BFC\u81F4\u6BCF\u6B21\u521B\u5EFA\u5B50\u7C7B\u5B9E\u4F8B\u90FD\u4F1A\u521B\u5EFA\u4E00\u904D\u65B9\u6CD5\u3002</span>



<span class="token comment">//3. \u7EC4\u5408\u7EE7\u627F</span>
  <span class="token doc-comment comment">/**
   * \u7EC4\u5408\u7EE7\u627F\u7ED3\u5408\u4E86\u539F\u578B\u94FE\u548C\u76D7\u7528\u6784\u9020\u51FD\u6570\uFF0C\u5C06\u4E24\u8005\u7684\u4F18\u70B9\u96C6\u4E2D\u4E86\u8D77\u6765\u3002
   *    \u57FA\u672C\u7684\u601D\u8DEF\u662F\u4F7F\u7528\u539F\u578B\u94FE\u7EE7\u627F\u539F\u578B\u4E0A\u7684\u5C5E\u6027\u548C\u65B9\u6CD5\uFF0C
   *    \u800C\u901A\u8FC7\u76D7\u7528\u6784\u9020\u51FD\u6570\u7EE7\u627F\u5B9E\u4F8B\u5C5E\u6027\u3002
   * \u8FD9\u6837\u65E2\u53EF\u4EE5\u628A\u65B9\u6CD5\u5B9A\u4E49\u5728\u539F\u578B\u4E0A\u4EE5\u5B9E\u73B0\u91CD\u7528\uFF0C\u53C8\u53EF\u4EE5\u8BA9\u6BCF\u4E2A\u5B9E\u4F8B\u90FD\u6709\u81EA\u5DF1\u7684\u5C5E\u6027\u3002
  */</span>
  <span class="token keyword">function</span> <span class="token function">Animal</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
    <span class="token keyword">this</span><span class="token punctuation">.</span>colors <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;black&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;white&#39;</span><span class="token punctuation">]</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">getAnimalColors</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>colors<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  Animal<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">getName</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name
  <span class="token punctuation">}</span>
  <span class="token keyword">function</span> <span class="token function">Dog</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> age<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">Animal</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> name<span class="token punctuation">)</span> <span class="token comment">//\u7EE7\u627F\u79C1\u6709 \u5C5E\u6027\u548C\u65B9\u6CD5</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age
  <span class="token punctuation">}</span>
  Dog<span class="token punctuation">.</span>prototype <span class="token operator">=</span>  <span class="token keyword">new</span> <span class="token class-name">Animal</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//\u7EE7\u627F\u516C\u5171 \u5C5E\u6027\u548C\u65B9\u6CD5</span>
  Dog<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>constructor <span class="token operator">=</span> Dog <span class="token comment">//\u6307\u56DE\u539F\u578B\u5BF9\u8C61\u7684\u6784\u9020\u51FD\u6570\u5C5E\u6027</span>

  <span class="token keyword">let</span> dog1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Dog</span><span class="token punctuation">(</span><span class="token string">&#39;\u5976\u6614&#39;</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
  dog1<span class="token punctuation">.</span>colors<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&#39;blue&#39;</span><span class="token punctuation">)</span>
  <span class="token keyword">let</span> dog2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Dog</span><span class="token punctuation">(</span><span class="token string">&#39;\u54C8\u8D64&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>dog2<span class="token punctuation">)</span> 
  <span class="token comment">// { name: &quot;\u54C8\u8D64&quot;, colors: [&quot;black&quot;, &quot;white&quot;], age: 1 }</span>



<span class="token comment">//4. \u5BC4\u751F\u7EE7\u627F</span>
  <span class="token doc-comment comment">/**
   * \u7EC4\u5408\u7EE7\u627F\u5DF2\u7ECF\u76F8\u5BF9\u5B8C\u5584\u4E86\uFF0C\u4F46\u8FD8\u662F\u5B58\u5728\u95EE\u9898\uFF0C
   *  \u5B83\u7684\u95EE\u9898\u5C31\u662F\u8C03\u7528\u4E86 2 \u6B21\u7236\u7C7B\u6784\u9020\u51FD\u6570\uFF0C
   *    \u7B2C\u4E00\u6B21\u662F\u5728 new Animal()\uFF0C
   *    \u7B2C\u4E8C\u6B21\u662F\u5728 Animal.call() \u8FD9\u91CC\u3002
   * 
   * \u6240\u4EE5\u89E3\u51B3\u65B9\u6848\u5C31\u662F\u4E0D\u76F4\u63A5\u8C03\u7528\u7236\u7C7B\u6784\u9020\u51FD\u6570\u7ED9\u5B50\u7C7B\u539F\u578B\u8D4B\u503C\uFF0C\u800C\u662F\u901A\u8FC7\u521B\u5EFA\u7A7A\u51FD\u6570 F \u83B7\u53D6\u7236\u7C7B\u539F\u578B\u7684\u526F\u672C\u3002
   * \u5BC4\u751F\u5F0F\u7EC4\u5408\u7EE7\u627F\u5199\u6CD5\u4E0A\u548C\u7EC4\u5408\u7EE7\u627F\u57FA\u672C\u7C7B\u4F3C\uFF0C\u533A\u522B\u662F\u5982\u4E0B\u8FD9\u91CC\uFF1A
  */</span>
  <span class="token keyword">function</span> <span class="token function">Animal</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
    <span class="token keyword">this</span><span class="token punctuation">.</span>colors <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;black&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;white&#39;</span><span class="token punctuation">]</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">getAnimalColors</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>colors<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  Animal<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">getName</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name
  <span class="token punctuation">}</span>
  <span class="token keyword">function</span> <span class="token function">Dog</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> age<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">Animal</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> name<span class="token punctuation">)</span> <span class="token comment">//\u7EE7\u627F\u79C1\u6709 \u5C5E\u6027\u548C\u65B9\u6CD5</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age
  <span class="token punctuation">}</span>
  <span class="token comment">// function F() {}</span>
  <span class="token comment">// F.prototype = Animal.prototype</span>
  <span class="token comment">// Dog.prototype =  new F() //\u539F\u578B\u94FE\u7EE7\u627F</span>
  Dog<span class="token punctuation">.</span>prototype <span class="token operator">=</span>  Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>Animal<span class="token punctuation">.</span>prototype<span class="token punctuation">)</span> <span class="token comment">//\u539F\u578B\u94FE\u7EE7\u627F</span>
  Dog<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>constructor <span class="token operator">=</span> Dog <span class="token comment">//\u6307\u56DE\u539F\u578B\u5BF9\u8C61\u7684\u6784\u9020\u51FD\u6570\u5C5E\u6027</span>
    
  <span class="token keyword">let</span> dog1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Dog</span><span class="token punctuation">(</span><span class="token string">&#39;\u5976\u6614&#39;</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
  dog1<span class="token punctuation">.</span>colors<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&#39;blue&#39;</span><span class="token punctuation">)</span>
  <span class="token keyword">let</span> dog2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Dog</span><span class="token punctuation">(</span><span class="token string">&#39;\u54C8\u8D64&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>dog2<span class="token punctuation">)</span> 
  <span class="token comment">// { name: &quot;\u54C8\u8D64&quot;, colors: [&quot;black&quot;, &quot;white&quot;], age: 1 }</span>




<span class="token comment">// class \u5B9E\u73B0\u7EE7\u627F</span>
  <span class="token keyword">class</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
    <span class="token punctuation">}</span> 
    <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">class</span> <span class="token class-name">Dog</span> <span class="token keyword">extends</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> age<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">super</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),o=[e];function c(l,i){return s(),a("div",null,o)}var k=n(p,[["render",c],["__file","inherit.html.vue"]]);export{k as default};

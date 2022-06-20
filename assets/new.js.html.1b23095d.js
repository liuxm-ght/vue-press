import{_ as n,o as s,c as a,g as e}from"./app.7b383bae.js";const t={},o=e(`<div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// \u624B\u5199\u4E00\u4E2Anew</span>
<span class="token doc-comment comment">/**
 * \u603B\u7ED3\uFF1A 
 * new\uFF1A
 *   1. \u521B\u5EFA\u4E00\u4E2A\u5BF9\u8C61
 *   2. \u539F\u578B\u94FE\u7EE7\u627F\u516C\u5171\u5C5E\u6027 Object.create(proto)
 *   3. call\u7EE7\u627F\u79C1\u6709\u5C5E\u6027
 *   4. \u51FD\u6570\u8FD4\u56DE\u503C\u4E14\u662F\u5BF9\u8C61\uFF0C\u8FD4\u56DE\u6307\u5B9A\u5BF9\u8C61\uFF1B\u5426\u5219\u8FD4\u56DE\u65B0\u5BF9\u8C61
 * 
*/</span>

<span class="token doc-comment comment">/**
 * \u539F\u7406\uFF1A
    1.\u521B\u5EFA\u4E00\u4E2A\u65B0\u5BF9\u8C61\uFF1B
        \u5BF9\u8C61\u5B57\u9762\u91CF\uFF1Aobj = <span class="token punctuation">{</span><span class="token punctuation">}</span>
        obj = new Object()
        obj = Obejct.create() \u3002\u6027\u80FD\u66F4\u597D\uFF0C\u63A8\u8350
    2. \u8FD9\u4E2A\u5BF9\u8C61\u7EE7\u627F\u4E86\u6784\u9020\u51FD\u6570\u7684\u539F\u578B\u94FE\uFF08\u516C\u5171\u5C5E\u6027\u548C\u65B9\u6CD5\uFF09\uFF1B
        \u5C06obj\u7684\u539F\u578B\u6307\u5411\u6784\u9020\u51FD\u6570\u7684\u539F\u578B\u5BF9\u8C61\uFF0C\u5373\uFF1Aobj.__proto__ = Constructor.prototype \uFF08\u8BE5\u65B9\u5F0F\u4E0D\u63A8\u8350\uFF09
    3. \u8FD9\u4E2A\u5BF9\u8C61\u7EE7\u627F\u4E86\u6784\u9020\u51FD\u6570\u7684\u79C1\u6709\u5C5E\u6027\u548C\u65B9\u6CD5\uFF1B
        \u6784\u9020\u51FD\u6570\u7ED1\u5B9Athis\u5230obj(\u5373\u6784\u9020\u51FD\u6570\u7684this\u6307\u5411obj)\uFF0C\u5E76\u6267\u884C
    4. \u5224\u65AD\u6784\u9020\u51FD\u6570\u8FD4\u56DE\u503C\uFF0C\u5982\u679C\u6709\u8FD4\u56DE\u503Cres\u4E14\u4E3A\u5BF9\u8C61\u7C7B\u578B\uFF0C\u5219\u76F4\u63A5\u8FD4\u56DEres\uFF1B\u5426\u5219\u8FD4\u56DE\u65B0\u5BF9\u8C61
        \u56E0\u6B64\u6784\u9020\u51FD\u6570\u4E5F\u53EF\u4EE5\u5E26\u6709\u8FD4\u56DE\u503C\uFF0C\u4F46\u662F\u8FD9\u4F1A\u5BFC\u81F4new\u7684\u7ED3\u679C\u4E0D\u540C\u3002
**/</span>  

<span class="token comment">// \u5B9E\u73B0\uFF1A</span>
<span class="token comment">//\u65B9\u6848\u4E00\uFF1A </span>
  <span class="token keyword">function</span> <span class="token function">new_operator</span><span class="token punctuation">(</span>_constructor<span class="token punctuation">,</span> <span class="token operator">...</span>args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u2460 \u521B\u5EFA\u65B0\u5BF9\u8C61</span>
    <span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    
    <span class="token comment">// \u2461 \u6784\u5EFAobj\u7684\u539F\u578B</span>
    obj<span class="token punctuation">.</span>__proto__ <span class="token operator">=</span> _constructor<span class="token punctuation">.</span>prototype
    
    <span class="token comment">// \u2462 \u7ED1\u5B9Athis\u5230obj</span>
    <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token function">_constructor</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> args<span class="token punctuation">)</span>
    
    <span class="token comment">// \u2463 \u8FD4\u56DE\u503C\u5224\u65AD\u3002\uFF08\u6CE8\uFF1Ares\u503C\u4E3A\u5BF9\u8C61\uFF0C\u5373 Object, Array, Function \u7C7B\u578B\uFF0C\u624D\u53EF\u88AB\u8FD4\u56DE\uFF09</span>
    <span class="token keyword">return</span> res <span class="token keyword">instanceof</span> <span class="token class-name">Object</span> <span class="token operator">?</span> res <span class="token operator">:</span> obj
  <span class="token punctuation">}</span>
  <span class="token comment">//\u7F3A\u70B9\uFF1A</span>
    <span class="token comment">// \u4EE5\u4E0A\u5B9E\u73B0\uFF0C\u5728\u6784\u5EFA\u65B0\u5BF9\u8C61obj\u7684\u539F\u578B\u5F15\u7528\u65F6\uFF0C\u76F4\u63A5\u64CD\u4F5Cobj\u4E0A\u7684 __proto__\u3002\u4F1A\u5B58\u5728\u4EE5\u4E0B\u95EE\u9898\uFF1A</span>
    <span class="token comment">// __proto__ \u5C5E\u6027\u5DF2\u7ECF\u5728\u6700\u65B0\u7684Web\u6807\u51C6\u4E2D\u5220\u9664\uFF0C\u8003\u8651\u64CD\u4F5C\u5B89\u5168\uFF0C\u4E0D\u63A8\u8350\u4F7F\u7528\u3002\u5982\u679C\u60F3\u76F4\u63A5\u64CD\u4F5C\u539F\u578B\u5F15\u7528\uFF0C\u63A8\u8350\u4F7F\u7528 Object.getPrototypeOf/Reflect.getPrototypeOf \u548CObject.setPrototypeOf/Reflect.setPrototypeOf</span>
    <span class="token comment">// 1\u4E2D\u4E24\u79CD\u65B9\u5F0F\u64CD\u4F5C\u5BF9\u8C61\u7684\u539F\u578B[[Prototype]]\u90FD\u662F\u4E00\u4E2A\u7F13\u6162\u7684\u64CD\u4F5C\u3002\u8003\u8651\u6027\u80FD\uFF0C\u5E94\u907F\u514D\u3002\u63A8\u8350\u4F7F\u7528Ojbect.create() \u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u4E14\u53EF\u4EE5\u7EE7\u627F[[Prototype]]\u7684\u5BF9\u8C61\u3002</span>

<span class="token comment">//\u65B9\u6848\u4E8C\uFF1A</span>
  <span class="token comment">//\u7528Object.create()\u6765\u4EE3\u66FFobj.__proto__\u6765\u7EE7\u627F\u539F\u578B\u5BF9\u8C61</span>
  <span class="token keyword">function</span> <span class="token function">new_operator_2</span><span class="token punctuation">(</span>_constructor<span class="token punctuation">,</span> <span class="token operator">...</span>args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u2460 \u521B\u5EFA\u65B0\u5BF9\u8C61obj\uFF0C\u5E76\u5173\u8054obj\u539F\u578B\u5230\u6784\u9020\u51FD\u6570\u539F\u578B\u5BF9\u8C61\u4E0A</span>
    <span class="token keyword">let</span> obj <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>_constructor<span class="token punctuation">.</span>prototype<span class="token punctuation">)</span>
    
    <span class="token comment">// \u2461 \u6267\u884C\u6784\u9020\u51FD\u6570\uFF0C\u4E14\u7ED1\u5B9Athis\u5230\u65B0\u5BF9\u8C61Obj\u4E0A\uFF0C\u5B9E\u73B0\u7EE7\u627F\u3002\u540C\u65F6\u63A5\u53D7\u8FD4\u56DE\u503Cres</span>
    <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token function">_constructor</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> args<span class="token punctuation">)</span>
    
    <span class="token comment">// \u2462 \u8FD4\u56DE\u503C\u5224\u65AD</span>
    <span class="token keyword">return</span> res <span class="token keyword">instanceof</span> <span class="token class-name">Object</span> <span class="token operator">?</span> res <span class="token operator">:</span> obj
  <span class="token punctuation">}</span>

<span class="token comment">//\u65B9\u6848\u4E09\uFF1A</span>
<span class="token comment">// function createObj(_constructor) {</span>
<span class="token keyword">function</span> <span class="token function">createObj</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u5148\u521B\u5EFA\u4E00\u4E2A\u7A7A\u5BF9\u8C61</span>
  <span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// \u83B7\u5F97\u6784\u9020\u51FD\u6570</span>
  <span class="token keyword">var</span> constructorFn <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>arguments<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u5229\u7528\u6570\u7EC4\u7684shift\u65B9\u6CD5\uFF0C\uFF0C\uFF0C\u53C2\u6570\u6570\u7EC4\u7B2C\u4E00\u4E2A\u5373\u4E3A\u6784\u9020\u51FD\u6570_constructor</span>
  <span class="token comment">//\u94FE\u63A5\u5230\u6784\u9020\u51FD\u6570\u7684\u539F\u578B</span>
  obj<span class="token punctuation">.</span>__proto__ <span class="token operator">=</span> constructorFn<span class="token punctuation">.</span>prototype<span class="token punctuation">;</span> <span class="token comment">// obj\u53EF\u4EE5\u8BBF\u95EE\u5230\u6784\u9020\u51FD\u6570\u539F\u578B\u4E2D\u7684\u5C5E\u6027</span>
  <span class="token comment">// Object.setPrototypeOf(obj, constructorFn.prototype);</span>
  <span class="token keyword">var</span> result <span class="token operator">=</span> <span class="token function">constructorFn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> arguments<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u6539\u53D8this\u6307\u5411\u4E3A\u65B0\u521B\u5EFA\u7684obj\uFF0C \u8FD9\u6837\u53EF\u4EE5\u8BBF\u95EE\u5230\u6784\u9020\u51FD\u6570\u4E2D\u7684\u5C5E\u6027</span>
  <span class="token comment">// \u5982\u679C\u6784\u9020\u51FD\u6570\u4E2D\u6CA1\u6709\u8FD4\u56DE\u5176\u5B83\u5BF9\u8C61\uFF0C\u90A3\u4E48\u8FD4\u56DEthis\uFF0C\u5373\u521B\u5EFA\u7684\u8FD9\u4E2A\u7684\u65B0\u5BF9\u8C61\uFF1B</span>
  <span class="token comment">// \u5426\u5219\uFF0C\u8FD4\u56DE\u6784\u9020\u51FD\u6570\u4E2D\u8FD4\u56DE\u7684\u5BF9\u8C61</span>
  <span class="token keyword">return</span> <span class="token keyword">typeof</span> result <span class="token operator">==</span> <span class="token string">&quot;object&quot;</span> <span class="token operator">&amp;&amp;</span> result <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">?</span> result <span class="token operator">:</span> obj<span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token doc-comment comment">/**
 * \u5173\u8054
    Object.create(Obj.prototype)\u548Cnew Obj()\u7684\u533A\u522B\uFF1F
      \u5148\u8BF4\u7ED3\u8BBA\uFF1A	
      1. Object.create(Obj.prototype) \uFF1A\u521B\u5EFA\u4E86\u4E00\u4E2A\u7A7A\u5BF9\u8C61\uFF0C\u5E76\u4E14\u7A7A\u5BF9\u8C61obj\u7684\u539F\u578B\u6307\u5411\u4E86Obj\u7684\u539F\u578B\u5BF9\u8C61\uFF0C\u4E5F\u5C31\u662F\u8BF4obj\u7EE7\u627F\u4E86Obj\u7684\u539F\u578B\u94FE\uFF08\u62E5\u6709\u7236\u7EA7/\u516C\u5171\u7684\u5C5E\u6027\u548C\u65B9\u6CD5\uFF09\uFF0C\u4F46\u662F\u6CA1\u6709\u7EE7\u627F\u6784\u9020\u51FD\u6570Obj\uFF08\u6BCD\u7EA7/\u79C1\u6709\uFF09\u7684\u5C5E\u6027\u548C\u65B9\u6CD5\uFF1B
      \u8FD9\u4E2Aobj\u4E00\u5B9A\u662F\u7A7A\u5BF9\u8C61
      2. new Obj(): \u521B\u5EFA\u4E86\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u5E76\u4E14\u539F\u578B\u6307\u5411\u4E86Obj\u7684\u539F\u578B\u5BF9\u8C61\uFF0C\u4E5F\u5C31\u662F\u8BF4obj\u7EE7\u627F\u4E86Obj\u7684\u539F\u578B\u94FE\uFF08\u62E5\u6709\u7236\u7EA7/\u516C	\u5171
      \u7684\u5C5E\u6027\u548C\u65B9\u6CD5\uFF09\uFF0C\u540C\u65F6\u7EE7\u627F\u6784\u9020\u51FD\u6570Obj\uFF08\u6BCD\u7EA7/\u79C1\u6709\uFF09\u7684\u5C5E\u6027\u548C\u65B9\u6CD5\uFF1B
      \u8FD9\u4E2Aobj\u4E0D\u4E00\u5B9A\u662F\u7A7A\u5BF9\u8C61\uFF0C\u53EF\u4EE5\u6709\u5C5E\u6027\u548C\u65B9\u6CD5\uFF08\u7EE7\u627F\u81EA\u6784\u9020\u51FD\u6570\uFF09
 * 
*/</span>


<span class="token doc-comment comment">/**
 * Object.create\u7684\u5B9E\u73B0\u65B9\u6CD5
 *  \u4ECEObject.create\u4E0Enew\u7684\u5B9E\u73B0\u65B9\u5F0F\u53EF\u4EE5\u770B\u51FA
      Object.create\u7684\u6BCD\u7C7B\u662F\u4E00\u4E2A\u65B0\u7684\u7A7A\u7684\u6784\u9020\u51FD\u6570\uFF0C\u7236\u7C7B\u662F\u4F20\u8FDB\u6765\u7684\u5BF9\u8C61\uFF1B\u6240\u4EE5\u5B83\u6CA1\u6709\u7EE7\u627F\u6BCD\u7C7B\uFF0C\u4F46\u7EE7\u627F\u4E86\u7236\u7C7B
      new\u7684\u6BCD\u7C7B\u662F\u6307\u5B9A\u6784\u9020\u51FD\u6570\uFF0C\u7236\u7C7B\u662F\u8BE5\u6784\u9020\u51FD\u6570\u7684\u539F\u578B\u5BF9\u8C61\uFF1B\u6240\u4EE5\u5B83\u7EE7\u627F\u4E86\u6BCD\u7C7B\uFF0C\u540C\u65F6\u7EE7\u627F\u4E86\u7236\u7C7B
 **/</span> 
Object<span class="token punctuation">.</span><span class="token function-variable function">create</span> <span class="token operator">=</span>  <span class="token keyword">function</span> <span class="token punctuation">(</span>o<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> <span class="token function-variable function">F</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token constant">F</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> o
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token constant">F</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>


<span class="token doc-comment comment">/**
 * \u6784\u9020\u51FD\u6570\u4E3A\u7BAD\u5934\u51FD\u6570\u7684new\uFF1F
    \u666E\u901A\u51FD\u6570\u521B\u5EFA\u65F6\uFF0C\u5F15\u64CE\u4F1A\u6309\u7167\u7279\u5B9A\u7684\u89C4\u5219\u4E3A\u8FD9\u4E2A\u51FD\u6570\u521B\u5EFA\u4E00\u4E2Aprototype\u5C5E\u6027\uFF08\u6307\u5411\u539F\u578B\u5BF9\u8C61\uFF09\u3002
    \u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u6240\u6709\u539F\u578B\u5BF9\u8C61\u81EA\u52A8\u83B7\u5F97\u4E00\u4E2A\u540D\u4E3A constructor \u7684\u5C5E\u6027\uFF0C\u6307\u56DE\u4E0E\u4E4B\u5173\u8054\u7684\u6784\u9020\u51FD\u6570\u3002
*/</span>
<span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">18</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
Person<span class="token punctuation">.</span>prototype
<span class="token doc-comment comment">/**
<span class="token punctuation">{</span>
  constructor: \u0192 Foo()
  __proto__: Object
<span class="token punctuation">}</span>
**/</span>

<span class="token doc-comment comment">/**
 * \u521B\u5EFA\u7BAD\u5934\u51FD\u6570\u65F6\uFF0C\u5F15\u64CE\u4E0D\u4F1A\u4E3A\u5176\u521B\u5EFAprototype\u5C5E\u6027\uFF0C\u7BAD\u5934\u51FD\u6570\u6CA1\u6709constructor\u4F9Bnew\u8C03\u7528\uFF0C\u56E0\u6B64\u4F7F\u7528new\u8C03\u7528\u7BAD\u5934\u51FD\u6570\u4F1A\u62A5\u9519\uFF01
 * \u6784\u9020\u51FD\u6570\u6CA1\u6709prototype\u5C5E\u6027\uFF0C\u987E\u4E0D\u80FD\u7EE7\u627F\uFF0C\u6240\u4EE5\u5E94\u8BE5\u62A5\u9519
*/</span>
<span class="token keyword">const</span> <span class="token function-variable function">Person</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment">//TypeError: Foo is not a constructor</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),c=[o];function p(i,l){return s(),a("div",null,c)}var u=n(t,[["render",p],["__file","new.js.html.vue"]]);export{u as default};

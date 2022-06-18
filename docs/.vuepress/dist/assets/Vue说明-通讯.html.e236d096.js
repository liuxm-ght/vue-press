import{_ as e,o as t,c as s,g as n}from"./app.c10353cc.js";const o={},r=n('<h4 id="vuexbus" tabindex="-1"><a class="header-anchor" href="#vuexbus" aria-hidden="true">#</a> VuexBus</h4><p>\u539F\u7406\uFF1A \u521B\u5EFA\u4E00\u4E2A\u5168\u5C40\u5BB9\u5668\uFF0C\u7528\u6765\u88C5\u6CE8\u518C\u4E86\u7684\u4E8B\u4EF6\uFF0C\u8FD9\u6837\u5728\u5168\u5C40\u5404\u5904\u90FD\u80FD\u89E6\u53D1\u8C03\u7528 \u4F5C\u7528\uFF1A \u6CE8\u518C\u5168\u5C40\u4E8B\u4EF6\uFF0C\u5728\u5404\u7EC4\u4EF6\u90FD\u53EF\u4EE5\u89E6\u53D1 \u4EE3\u7801\uFF1A VuexEvent = function(store) { // \u6CE8\u518C\u4E00\u4E2A\u65B0\u7684store\u6A21\u5757 store.registerModule(&#39;EventBus&#39;,{ mutations: { setEvent(){} //\u4F5C\u7528\u662F\u7528\u4E8E\u6807\u8BB0\u4E8B\u4EF6\u7684\u89E6\u53D1\uFF0C\u65B9\u4FBF\u8DDF\u8E2A } }) store.$events = {} //store\u5168\u5C40\u4E0A\u6302\u8F7D$events store.$on = function(evt,fn) { store.$events[&#39;$&#39;+evt] = fn } store.$off = function(evt) { store.$events[&#39;$&#39;+evt] = null } store.$emit = function(evt,data) { if(!store.$events[&#39;$&#39;+evt]) return store.$events<a href="data">&#39;$&#39;+evt</a> this.commit(&#39;setEvent&#39;) } } VuexEvent(store) \u8BF4\u660E\uFF1A \u5229\u7528store\u7684\u72B6\u6001\u53EF\u8DDF\u8E2A\u539F\u7406\uFF0C\u5F80store\u5B9E\u4F8B\u4E0A\u6302\u8F7D$events\u5BF9\u8C61\u4FDD\u5B58\u4E8B\u4EF6\u548C$on\u3001$emit\u65B9\u6CD5\u7528\u4E8E\u64CD\u4F5C\uFF0C$emit\u63D0\u4EA4\u540C\u65F6commit(&#39;setEvent&#39;)\u53BB\u8BB0\u5F55\u63D0\u4EA4 \u540C\u65F6\u4E8B\u4EF6\u540D\u79F0\u540C\u6837\u4E0D\u80FD\u91CD\u590D\uFF0C\u5426\u5219\u4F1A\u88AB\u8986\u76D6</p><h4 id="eventbus" tabindex="-1"><a class="header-anchor" href="#eventbus" aria-hidden="true">#</a> EventBus</h4><p>\u539F\u7406\uFF1A \u8DDFVuexBus\u5F88\u7C7B\u4F3C\uFF0C\u4E0D\u8FC7\u4F7F\u7528\u7684\u662F\u65B0\u7684Vue\u5B9E\u4F8B\u6765\u521B\u9020\u5BB9\u5668 \u4F5C\u7528\uFF1A \u6CE8\u518C\u5168\u5C40\u4E8B\u4EF6\uFF0C\u5728\u5404\u7EC4\u4EF6\u90FD\u53EF\u4EE5\u89E6\u53D1 \u4EE3\u7801\uFF1A var EventBus = new Vue() EventBus.$emit(&#39;message&#39;, &#39;hello&#39;); EventBus.$on(&#39;message&#39;, (e) =&gt; { console.log(e) }) \u8BF4\u660E\uFF1A Vue\u5185\u90E8\u6709$emit\u3001$on\u7684\u65B9\u6CD5\uFF0C\u540C\u65F6\u4E5F\u5728initEvent\u63D0\u4F9B\u4E86vm._events\u5BB9\u5668 \u4F46\u662F\u7F3A\u70B9\u5C31\u662F\u4E0D\u80FD\u8DDF\u8E2A\u63D0\u4EA4\u72B6\u6001 \u540C\u65F6\u4E8B\u4EF6\u540D\u79F0\u540C\u6837\u4E0D\u80FD\u91CD\u590D\uFF0C\u5426\u5219\u4F1A\u88AB\u8986\u76D6</p><h4 id="\u7EC4\u5408\u7EC4\u4EF6-on-emit" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u5408\u7EC4\u4EF6-on-emit" aria-hidden="true">#</a> \u7EC4\u5408\u7EC4\u4EF6$on$emit</h4><p>\u539F\u7406\uFF1A \u4F5C\u7528\uFF1A \u4EE3\u7801\uFF1A \u8BF4\u660E\uFF1A \u603B\u7ED3\uFF1A</p><h4 id="\u7236\u5B50\u7EC4\u4EF6props" tabindex="-1"><a class="header-anchor" href="#\u7236\u5B50\u7EC4\u4EF6props" aria-hidden="true">#</a> \u7236\u5B50\u7EC4\u4EF6props</h4><p>\u539F\u7406\uFF1A \u4F5C\u7528\uFF1A \u4EE3\u7801\uFF1A \u8BF4\u660E\uFF1A \u603B\u7ED3\uFF1A</p>',8),a=[r];function i(u,v){return t(),s("div",null,a)}var c=e(o,[["render",i],["__file","Vue\u8BF4\u660E-\u901A\u8BAF.html.vue"]]);export{c as default};

import{_ as a,o as l,c as o,a as e,h as i,j as n,K as c,b as s,e as d}from"./app.68e824a5.js";const p={},u=e("h3",{id:"keep-alive",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#keep-alive","aria-hidden":"true"},"#"),s(" Keep-Alive")],-1),r=e("p",null,"\u4F7F\u7528\uFF1A",-1),v=e("li",null,[e("p",null,"keep-alive\u662Fvue\u4E2D\u7684\u5185\u7F6E\u7EC4\u4EF6\uFF0C\u80FD\u5728\u7EC4\u4EF6\u5207\u6362\u8FC7\u7A0B\u4E2D\u5C06\u72B6\u6001\u4FDD\u7559\u5728\u5185\u5B58\u4E2D\uFF0C\u9632\u6B62\u91CD\u590D\u6E32\u67D3DOM")],-1),_=e("li",null,[e("p",null,"keep-alive \u5305\u88F9\u52A8\u6001\u7EC4\u4EF6\u65F6\uFF0C\u4F1A\u7F13\u5B58\u4E0D\u6D3B\u52A8\u7684\u7EC4\u4EF6\u5B9E\u4F8B\uFF0C\u800C\u4E0D\u662F\u9500\u6BC1\u5B83\u4EEC")],-1),h=e("li",null,[e("p",null,"keep-alive\u53EF\u4EE5\u8BBE\u7F6E\u4EE5\u4E0Bprops\u5C5E\u6027\uFF1A include - \u5B57\u7B26\u4E32\u6216\u6B63\u5219\u8868\u8FBE\u5F0F\u3002\u53EA\u6709\u540D\u79F0\u5339\u914D\u7684\u7EC4\u4EF6\u4F1A\u88AB\u7F13\u5B58 exclude - \u5B57\u7B26\u4E32\u6216\u6B63\u5219\u8868\u8FBE\u5F0F\u3002\u4EFB\u4F55\u540D\u79F0\u5339\u914D\u7684\u7EC4\u4EF6\u90FD\u4E0D\u4F1A\u88AB\u7F13\u5B58 max - \u6570\u5B57\u3002\u6700\u591A\u53EF\u4EE5\u7F13\u5B58\u591A\u5C11\u7EC4\u4EF6\u5B9E\u4F8B")],-1),k=e("p",null,"\u5173\u4E8Ekeep-alive\u7684\u57FA\u672C\u7528\u6CD5\uFF1A",-1),m=e("li",null,[e("p",null,"\u65B0\u589E\u4E86\u4E24\u4E2A\u94A9\u5B50"),e("ul",null,[e("li",null,"actived"),e("li",null,"deactivated")])],-1),f=d("<li><p>\u539F\u7406\uFF1A</p><ol><li>keepalive\u4F7F\u7528render\u6765\u6E32\u67D3\u7EC4\u4EF6\uFF0C\u901A\u8FC7this.$slots.default\u6765\u83B7\u53D6\u69FD\u5B50\u7EC4\u4EF6</li><li>\u7EC4\u4EF6\u5185\u90E8\u7EF4\u62A4\u4E00\u4E2Acache\u6570\u7EC4\u6765\u7F13\u5B58\u4F7F\u7528\u7B26\u5408\u89C4\u5219include...\u7684\u7EC4\u4EF6</li><li>\u901A\u8FC7\u69FD\u5B50\u7EC4\u4EF6\u7684name\u6216tag\u6765\u5F53\u505Acache\u7684key\uFF0C\u5F53updated\u662F\u5C31\u4F1A\u6267\u884CcacheVNode\u67E5\u627E\u7F13\u5B58</li><li>\u5F53\u7F13\u5B58\u8D85\u8FC7\u6700\u591A\u5B58\u50A8\u6570\u91CF\u65F6\uFF0C\u5220\u9664\u6700\u8001\u7684\u7EC4\u4EF6\uFF0C\u5373\u4E0B\u6807\u4E3A0\u7684\u7EC4\u4EF6</li><li>keepalive\u7EC4\u4EF6\u9500\u6BC1\u7684\u65F6\u5019\uFF0C\u6E05\u7A7Acache</li></ol></li><li><p>\u7F13\u5B58\u7EC4\u4EF6\u5982\u4F55\u83B7\u53D6\u6700\u65B0\u6570\u636E</p><ol><li><p>beforeRouteEnter \u6BCF\u6B21\u7EC4\u4EF6\u6E32\u67D3\u7684\u65F6\u5019\uFF0C\u90FD\u4F1A\u6267\u884CbeforeRouteEnter beforeRouteEnter(to, from, next){ next(vm=&gt;{ console.log(vm) // \u6BCF\u6B21\u8FDB\u5165\u8DEF\u7531\u6267\u884C vm.getData() // \u83B7\u53D6\u6570\u636E }) },</p></li><li><p>actived \u5728keep-alive\u7F13\u5B58\u7684\u7EC4\u4EF6\u88AB\u6FC0\u6D3B\u7684\u65F6\u5019\uFF0C\u90FD\u4F1A\u6267\u884Cactived\u94A9\u5B50 activated(){ this.getData() // \u83B7\u53D6\u6570\u636E }, \u6CE8\u610F\uFF1A\u670D\u52A1\u5668\u7AEF\u6E32\u67D3\u671F\u95F4avtived\u4E0D\u88AB\u8C03\u7528</p></li></ol></li>",2);function x(t,b){return l(),o("div",null,[u,e("ol",null,[e("li",null,[r,e("ul",null,[v,_,h,e("li",null,[k,(l(),i(c,null,[(l(),i(n(t.view)))],1024))]),m])]),f])])}var B=a(p,[["render",x],["__file","keepalive.html.vue"]]);export{B as default};

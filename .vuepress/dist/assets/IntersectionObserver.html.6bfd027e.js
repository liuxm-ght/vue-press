import{_ as s,r as t,o,c as a,b as e,a as i,d as n,g as c}from"./app.c10353cc.js";const l={},d=e("h3",{id:"intersectionobserver",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#intersectionobserver","aria-hidden":"true"},"#"),n(" IntersectionObserver")],-1),v=n("\u7B80\u4ECB * \u5728\u79FB\u52A8\u7AEF\uFF0C\u6709\u4E2A\u5F88\u91CD\u8981\u7684\u6982\u5FF5\uFF0C\u53EB\u505A\u61D2\u52A0\u8F7D\uFF0C\u9002\u7528\u4E8E\u4E00\u4E9B\u56FE\u7247\u8D44\u6E90\u7279\u522B\u591A\uFF0Cajax\u6570\u636E\u7279\u522B\u591A\u7684\u9875\u9762\u4E2D\uFF0C\u7ECF\u5E38\u4F1A\u6709\u52A8\u6001\u52A0\u8F7D\u6570\u636E\u7684\u573A\u666F\u4E2D\uFF0C\u8FD9\u4E2A\u65F6\u5019\uFF0C\u6211\u4EEC\u901A\u5E38\u662F\u4F7F\u7528\u76D1\u542Cscroll\u6216\u8005\u4F7F\u7528setInterval\u6765\u5224\u65AD\uFF0C\u5143\u7D20\u662F\u5426\u8FDB\u5165\u89C6\u56FE\uFF0C\u5176\u4E2Dscroll\u7531\u4E8E\u5176\u7279\u522B\u5927\u7684\u8BA1\u7B97\u91CF\uFF0C\u4F1A\u6709\u6027\u80FD\u95EE\u9898\uFF0C\u800CsetInterval\u7531\u4E8E\u5176\u6709\u95F4\u6B47\u671F\uFF0C\u4E5F\u4F1A\u51FA\u73B0\u4F53\u9A8C\u95EE\u9898\u3002 * \u6D4F\u89C8\u5668\u7684\u5F00\u53D1\u5546\uFF0C\u4F30\u8BA1\u4E5F\u53D1\u73B0\u4E86\u8FD9\u4E2A\u95EE\u9898\uFF0C\u6240\u4EE5\u57282016\u5E74\u521D\uFF0Cchrome51\u7387\u5148\u63D0\u4F9B\u4E86\u4E00\u4E2A\u65B0\u7684API\uFF0C\u5C31\u662FIntersectionObserver\uFF0C\u5B83\u53EF\u4EE5\u7528\u6765\u76D1\u542C\u5143\u7D20\u662F\u5426\u8FDB\u5165\u4E86\u8BBE\u5907\u7684\u53EF\u89C6\u533A\u57DF\u4E4B\u5185\uFF0C\u800C\u4E0D\u9700\u8981\u9891\u7E41\u7684\u8BA1\u7B97\u6765\u505A\u8FD9\u4E2A\u5224\u65AD\u3002 "),b={href:"https://www.jianshu.com/p/7c06669ed98e",target:"_blank",rel:"noopener noreferrer"},_=n("[\u94FE\u63A5\uFF1A]"),u=e("li",null,[e("p",null,"\u4F7F\u7528\uFF1A callback\u662F\u5F53\u88AB\u76D1\u542C\u5143\u7D20\u7684\u53EF\u89C1\u6027\u53D8\u5316\u65F6\uFF0C\u89E6\u53D1\u7684\u56DE\u8C03\u51FD\u6570 options\u662F\u4E00\u4E2A\u914D\u7F6E\u53C2\u6570\uFF0C\u53EF\u9009\uFF0C\u6709\u9ED8\u8BA4\u7684\u5C5E\u6027\u503C")],-1),m=c(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>  var observer = new IntersectionObserver(callback,options);
    // \u5BF9\u5143\u7D20target\u6DFB\u52A0\u76D1\u542C\uFF0C\u5F53target\u5143\u7D20\u53D8\u5316\u65F6\uFF0C\u5C31\u4F1A\u89E6\u53D1\u4E0A\u8FF0\u7684\u56DE\u8C03
  observer.observe(target);
    // \u79FB\u9664\u4E00\u4E2A\u76D1\u542C\uFF0C\u79FB\u9664\u4E4B\u540E\uFF0Ctarget\u5143\u7D20\u7684\u53EF\u89C6\u533A\u57DF\u53D8\u5316\uFF0C\u5C06\u4E0D\u518D\u89E6\u53D1\u524D\u9762\u7684\u56DE\u8C03\u51FD\u6570
  observer.unobserve(target);
    // \u505C\u6B62\u6240\u6709\u7684\u76D1\u542C
  observer.disconnect();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function h(p,x){const r=t("ExternalLinkIcon");return o(),a("div",null,[d,e("ol",null,[e("li",null,[e("p",null,[v,e("a",b,[_,i(r)])])]),u]),m])}var f=s(l,[["render",h],["__file","IntersectionObserver.html.vue"]]);export{f as default};

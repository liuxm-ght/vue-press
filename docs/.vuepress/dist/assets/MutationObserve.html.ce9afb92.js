import{_ as e,o,c as a,b as t,d as r}from"./app.7b383bae.js";const n={},s=t("h3",{id:"mutationobserve",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#mutationobserve","aria-hidden":"true"},"#"),r(" MutationObserve")],-1),i=t("p",null,"\u4ECB\u7ECD\uFF1A \u76D1\u542CDom\u8282\u70B9\u7684API MutationObserver \u662F\u4E00\u4E2A\u5185\u5EFA\u5BF9\u8C61\uFF0C\u5B83\u89C2\u5BDF DOM \u5143\u7D20\uFF0C\u5E76\u5728\u68C0\u6D4B\u5230\u66F4\u6539\u65F6\u89E6\u53D1\u56DE\u8C03\u3002",-1),c=t("p",null,"\u7528\u6CD5\uFF1A // \u9009\u62E9\u9700\u8981\u89C2\u5BDF\u53D8\u52A8\u7684\u8282\u70B9 const targetNode = document.getElementById('some-id'); // \u89C2\u5BDF\u5668\u7684\u914D\u7F6E\uFF08\u9700\u8981\u89C2\u5BDF\u4EC0\u4E48\u53D8\u52A8\uFF09 const config = { attributes: true, childList: true, subtree: true }; // \u5F53\u89C2\u5BDF\u5230\u53D8\u52A8\u65F6\u6267\u884C\u7684\u56DE\u8C03\u51FD\u6570 const callback = function(mutationsList, observer) { // Use traditional 'for loops' for IE 11 for(let mutation of mutationsList) { if (mutation.type === 'childList') { console.log('A child node has been added or removed.'); } else if (mutation.type === 'attributes') { console.log('The ' + mutation.attributeName + ' attribute was modified.'); } } }; // \u521B\u5EFA\u4E00\u4E2A\u89C2\u5BDF\u5668\u5B9E\u4F8B\u5E76\u4F20\u5165\u56DE\u8C03\u51FD\u6570 const observer = new MutationObserver(callback); // \u4EE5\u4E0A\u8FF0\u914D\u7F6E\u5F00\u59CB\u89C2\u5BDF\u76EE\u6807\u8282\u70B9 observer.observe(targetNode, config); // \u4E4B\u540E\uFF0C\u53EF\u505C\u6B62\u89C2\u5BDF observer.disconnect();",-1),d=t("p",null,"config\uFF1A config \u662F\u4E00\u4E2A\u5177\u6709\u5E03\u5C14\u9009\u9879\u7684\u5BF9\u8C61\uFF0C\u8BE5\u5E03\u5C14\u9009\u9879\u8868\u793A\u201C\u5C06\u5BF9\u54EA\u4E9B\u66F4\u6539\u505A\u51FA\u53CD\u5E94\u201D\uFF1A childList \u2014\u2014 node \u7684\u76F4\u63A5\u5B50\u8282\u70B9\u7684\u66F4\u6539\uFF0C subtree \u2014\u2014 node \u7684\u6240\u6709\u540E\u4EE3\u7684\u66F4\u6539\uFF0C attributes \u2014\u2014 node \u7684\u7279\u6027\uFF08attribute\uFF09\uFF0C attributeFilter \u2014\u2014 \u7279\u6027\u540D\u79F0\u6570\u7EC4\uFF0C\u53EA\u89C2\u5BDF\u9009\u5B9A\u7684\u7279\u6027\u3002 characterData \u2014\u2014 \u662F\u5426\u89C2\u5BDF node.data\uFF08\u6587\u672C\u5185\u5BB9\uFF09",-1),u=t("pre",null,[t("code",null,`\u5176\u4ED6\u51E0\u4E2A\u9009\u9879\uFF1A
  attributeOldValue \u2014\u2014 \u5982\u679C\u4E3A true\uFF0C\u5219\u5C06\u7279\u6027\u7684\u65E7\u503C\u548C\u65B0\u503C\u90FD\u4F20\u9012\u7ED9\u56DE\u8C03\uFF08\u53C2\u89C1\u4E0B\u6587\uFF09\uFF0C\u5426\u5219\u53EA\u4F20\u65B0\u503C\uFF08\u9700\u8981 attributes \u9009\u9879\uFF09\uFF0C
  characterDataOldValue \u2014\u2014 \u5982\u679C\u4E3A true\uFF0C\u5219\u5C06 node.data \u7684\u65E7\u503C\u548C\u65B0\u503C\u90FD\u4F20\u9012\u7ED9\u56DE\u8C03\uFF08\u53C2\u89C1\u4E0B\u6587\uFF09\uFF0C\u5426\u5219\u53EA\u4F20\u65B0\u503C\uFF08\u9700\u8981 characterData \u9009\u9879\uFF09\u3002
`)],-1),l=[s,i,c,d,u];function b(_,h){return o(),a("div",null,l)}var f=e(n,[["render",b],["__file","MutationObserve.html.vue"]]);export{f as default};
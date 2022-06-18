import{_ as l,o as i,c as e,g as o}from"./app.c10353cc.js";const p={},t=o(`<h3 id="\u52A8\u6001\u52A0\u8F7Dimport-\u8BE6\u89E3" tabindex="-1"><a class="header-anchor" href="#\u52A8\u6001\u52A0\u8F7Dimport-\u8BE6\u89E3" aria-hidden="true">#</a> \u52A8\u6001\u52A0\u8F7Dimport()\u8BE6\u89E3</h3><ol><li><p>\u7B80\u4ECB\uFF1A \u4E3A\u4E86\u4F18\u5316\u9879\u76EE\u53CA\u6253\u5305\u901F\u5EA6\uFF0C\u8FDB\u884C\u6A21\u5757\u7684\u6309\u9700\u52A0\u8F7D/\u61D2\u52A0\u8F7D</p></li><li><p>\u4F7F\u7528\uFF1A 1. import(&#39;xxx\u76F8\u5BF9\u8DEF\u5F84&#39;) 2. \u5B9A\u4E49\u52A8\u6001\u52A0\u8F7D\u7684\u6587\u4EF6\u8F93\u51FA\u540D\u79F0\uFF1A</p><ol><li>output.chunkFileName</li><li>import(/* webpackChunkName: &quot;MyFile&quot; */<code>../containers/MyFile</code>)</li><li>import(/* webpackChunkName: &quot;[request]&quot; */<code>../containers/\${pathName}</code>) \u52A8\u6001\u8DEF\u5F84</li></ol></li><li><p>\u539F\u7406\u51C6\u5907\uFF1A \u51E0\u4E2A\u91CD\u8981\u6982\u5FF5\uFF1A</p><ol><li>modules\uFF1A\u7F13\u5B58module\u4EE3\u7801\u5757\uFF0C\u6BCF\u4E2Amodule \u6709\u4E00\u4E2Aid\uFF0C\u5F00\u53D1\u73AF\u5883\u9ED8\u8BA4\u4EE5module \u6240\u5728\u6587\u4EF6\u7684\u6587\u4EF6\u540D\u6807\u8BC6\uFF0C\u751F\u4EA7\u73AF\u5883\u9ED8\u8BA4\u4EE5\u4E00\u4E2A\u6570\u5B57\u6807\u8BC6\u3002modules \u662F\u4E00\u4E2Aobject\uFF0Ckey \u4E3Amodule id\uFF0Cvalue \u4E3A\u5BF9\u5E94module \u7684\u6E90\u4EE3\u7801\u5757\u3002</li><li>installedModules\uFF1A\u7F13\u5B58\u5DF2\u7ECF\u52A0\u8F7D\u8FC7\u7684 module</li><li>installedChunks\uFF1A\u7F13\u5B58\u5DF2\u7ECF\u52A0\u8F7D\u8FC7\u7684 chunk</li></ol><ul><li>undefined\uFF1Achunk not loaded</li><li>null\uFF1Achunk preloaded/prefetched</li><li>Promise\uFF1Achunk loading</li><li>0\uFF1Achunk loaded</li></ul></li><li><p>\u539F\u7406\uFF1A</p><ol><li><p>webpack\u89E3\u6790\u5230import()\u8BED\u6CD5\u540E\uFF0C\u4F1A\u5BF9\u5B83\u8FDB\u884C\u6807\u8BB0\uFF0C\u5E76\u6700\u7EC8\u5C06import\u52A0\u8F7D\u7684\u6587\u4EF6\u6253\u5305\u5230\u5355\u72EC\u7684\u6587\u4EF6\u4E2D\u53BB\uFF1B\u540C\u65F6\u6253\u5305\u540E\u7684import()\u51FD\u6570\u5C06\u88AB\u6253\u5305\u6210\uFF1A <strong>webpack_require</strong>.e(/* import() | title */ 1).then(<strong>webpack_require</strong>.t.bind(null, 1, 7))</p></li><li><p>\u89E6\u53D1\u5F02\u6B65\u52A0\u8F7D\u65F6(\u5373\u6267\u884C\u5230import\u51FD\u6570\u65F6)\uFF0C\u5C06\u6267\u884C\u6A21\u5757\u52A0\u8F7D\uFF1A</p></li><li><p><strong>webpack_require</strong>.e\uFF0C\u8FD9\u4E2A\u51FD\u6570\u505A\u4E86\u54EA\u4E9B\u4E8B\u60C5\uFF1F 1. \u68C0\u67E5\u7F13\u5B58: \u4ECEinstalledChunks(\u5DF2\u7ECF\u5B89\u88C5\u4E86\u7684chunks)\u4E2D\u68C0\u67E5\uFF0C\u6CA1\u6709\u7F13\u5B58\u8FDB\u51652 2. \u68C0\u67E5\u6A21\u5757\u72B6\u6001: installedChunkData(\u5F15\u7528\u6A21\u5757\u7684\u72B6\u6001\uFF0C\u53EF\u5206\u4E3A\uFF1Aundefined \u672A\u52A0\u8F7D null \u9884\u52A0\u8F7D Promise \u4EE3\u7801\u5757\u52A0\u8F7D\u4E2D 0 \u52A0\u8F7D\u5B8C\u6210 )</p><ol><li>\u5982\u679C\u662Fundefined \u672A\u52A0\u8F7D \u6216 null \u9884\u52A0\u8F7D\uFF1A</li><li>\u751F\u6210promise\uFF0C\u7528\u6765\u8BA2\u9605\u6A21\u5757 installedChunkData = installedChunks[chunkId] =[resolve, reject, promise]</li><li>\u521B\u5EFAscript\u6807\u7B7E\uFF0Csrc\u6307\u5411\u6A21\u5757\u8DEF\u5F84(\u6253\u5305\u540E\u7684\u8DEF\u5F84)\uFF0Cscript\u6807\u7B7E\u63D2\u5165\u9875\u9762document</li><li>\u6700\u7EC8\u5C06\u5BFC\u51FA\u4E00\u4E2APromise.all</li></ol></li><li><p>\u7B49\u5F85\u6A21\u5757\u52A0\u8F7D\u5B8C\u6210\uFF0C\u5F53\u6A21\u5757\u52A0\u8F7D\u5B8C\u6210\uFF0C\u6267\u884C\u6A21\u5757\u4EE3\u7801</p></li><li><p>webpack \u5982\u4F55\u77E5\u9053\u6A21\u5757\u52A0\u8F7D\u5B8C\u4E86\uFF1F\u6216\u8005\u8BF4\u5F53\u524D\u6A21\u5757\u5982\u4F55\u77E5\u9053\u5F15\u7528\u6A21\u5757\u52A0\u8F7D\u5B8C\u4E86\uFF1F 1. \u5229\u7528jsonp\u56DE\u8C03\u539F\u7406\uFF0C\u6A21\u5757\u4EE3\u7801\u4E2D\u5305\u542B\u4E86\u56DE\u8C03\u51FD\u6570\uFF0C</p><p>window[&quot;webpackJsonp&quot;].push\u88ABwebpack\u91CD\u5199\u4E86\uFF0C\u6700\u7EC8\u6267\u884C\u7684\u662F webpackJsonpCallback\u51FD\u6570 \u5373\u5F53\u6A21\u5757\u52A0\u8F7D\u5B8C\u5C31\u6267\u884C\u8FD9\u4E2A\u56DE\u8C03\u51FD\u6570 webpackJsonpCallback</p></li><li><p>webpackJsonpCallback\u505A\u4E86\u4EC0\u4E48\uFF1F 1. \u6839\u636E\u5F15\u7528\u6A21\u5757\u7684\u6807\u8BC6\uFF0C\u4ECE installedChunks \u4E2D\u67E5\u627E\u5BF9\u5E94\u7684 installedChunkData \uFF0C\u62FF\u5230resolve\uFF1B \u540C\u65F6\u5C06\u5F15\u7528\u6A21\u5757\u5B58\u5165 modules \u7F13\u5B58\u4E2D\uFF1B 2. \u6700\u540E\u6267\u884C\u6240\u6709resolves</p></li><li><p>Promise.all\u7684\u72B6\u6001\u6539\u53D8\uFF0C\u5982\u679C\u662F\u6210\u529F\uFF0C\u5C06\u6267\u884C <strong>webpack_require</strong>.t.bind(null, 1, 7)</p><ol><li><strong>webpack_require</strong>.t \u505A\u4E86\u4EC0\u4E48\uFF1F\u5176\u5B9E\u5C31\u662F\u540C\u6B65\u52A0\u8F7D\u6A21\u5757\u7684\u8FC7\u7A0B\uFF1A</li><li>\u6267\u884C <strong>webpack_require</strong> \u52A0\u8F7D\u6A21\u5757 \u52A0\u8F7D\u8FC7\u7A0B\u662F\uFF1A 1. \u4ECE installedModules \u67E5\u627E\u662F\u5426\u5DF2\u5B89\u88C5\u6A21\u5757 2. \u6CA1\u6709\u5B89\u88C5\uFF0C\u751F\u6210module\uFF0C\u5E76\u5B58\u5165 installedModules \u7F13\u5B58\u4E2D 3. \u7136\u540E\uFF0C\u5B89\u88C5\u5F15\u7528\u6A21\u5757(\u5373\u6267\u884C\u6A21\u5757\u4EE3\u7801)\uFF0C\u6807\u8BB0\u6A21\u5757\u5B89\u88C5\u6210\u529F 4. \u8FD4\u56DE\u6A21\u5757\u5BFC\u51FA\u7684\u6570\u636E</li><li>\u5224\u65AD\u662F\u53D1\u4E3Aes\u6A21\u5757\uFF0C\u662F\u76F4\u63A5\u8FD4\u56DEmodule\uFF0C\u4E0D\u662F\uFF0C\u751F\u6210\u4E00\u4E2A\u5BF9\u8C61ns\uFF0C\u8BB0\u5F55 \u8FD4\u56DE\u6570\u636E value\uFF0C\u6DFB\u52A0\u4E00\u4E9B\u6A21\u5757\u6807\u8BC6\u5C5E\u6027\uFF0C</li><li>\u8FD4\u56DE\u8FD9\u4E2A\u5BF9\u8C61ns</li></ol><ul><li>\u5176\u4E2D\u5229\u7528\u4E86\u4E8C\u8FDB\u5236\u7684 \u4F4D\u8FD0\u7B97&amp; \u6765\u5339\u914D\u662F\u5426\u8981\u6267\u884C\u67D0\u4E9B\u6B65\u9AA4</li></ul></li><li><p>\u6700\u540E\uFF0C\u5F53\u524D\u6A21\u5757\u62FF\u5230\u8FD4\u56DE\u7684ns\u6570\u636E\u540E\uFF0C\u5904\u7406\u6570\u636E</p></li></ol></li><li><p>\u603B\u7ED3\uFF1A</p><ol><li>\u9047\u5230import()\u51FD\u6570\uFF0Cwebpack\u4F1A\u5355\u72EC\u6253\u5305\u5F15\u7528\u7684\u6587\u4EF6\uFF0C\u5E76\u4E14\u6587\u4EF6\u7528webpackJsonpCallbackJsonp\u56DE\u8C03\u51FD\u6570\u5305\u88F9\u8D77\u6765\uFF1B</li><li>\u5728\u89E6\u53D1\u5F02\u6B65\u52A0\u8F7D\u7684\u65F6\u5019\uFF0C\u901A\u8FC7\u751F\u6210script\u6807\u7B7E\u6765\u52A0\u8F7D\u5F02\u6B65\u6A21\u5757\uFF0C\u5F53\u6A21\u5757\u52A0\u8F7D\u5B8C\u6210\u4F1A\u7ACB\u5373\u6267\u884C\u5F15\u7528\u6A21\u5757\uFF0C \u901A\u8FC7webpackJsonpCallback\u51FD\u6570\u6765\u901A\u77E5\u5F53\u524D\u6A21\u5757\uFF0C\u5F02\u6B65\u6A21\u5757\u52A0\u8F7D\u5B8C\u6210\u4E86(\u5F02\u6B65\u6A21\u5757\u5DF2\u7ECF\u5B58\u5165\u672C\u5730\u7F13\u5B58)\uFF0C\u4F46\u8FD8\u672A\u6267\u884C</li><li>webpack\u901A\u8FC7\u8C03\u7528\u540C\u6B65\u6A21\u5757\u52A0\u8F7D\u65B9\u6CD5\u6765\u52A0\u8F7D\uFF0C\u5DF2\u7ECF\u52A0\u8F7D\u597D\u7684\u5F02\u6B65\u6A21\u5757\uFF0C\u5E76\u6267\u884C\u4EE3\u7801</li><li>\u81F3\u6B64\uFF0C\u6A21\u5757\u52A0\u8F7D\u3001\u6267\u884C\u5B8C\u6210</li></ol><ul><li><p>\u5982\u4F55\u5B9E\u73B0\u4E0E\u5F02\u6B65\u6A21\u5757\u7684\u4EE3\u7801\u6C9F\u901A\uFF1F\u901A\u8FC7Jsonp\u6765\u5B9E\u73B0\u3002\u5F53\u524D\u6A21\u5757\u901A\u8FC7script\u52A0\u8F7D\u5F02\u6B65\u6A21\u5757\uFF0C\u5F02\u6B65\u6A21\u5757\u901A\u8FC7callback\u6765\u6267\u884C\u5F53\u524D\u6A21\u5757\u7684\u51FD\u6570</p></li><li><p>\u5F53\u524D\u6A21\u5757\u662F\u5982\u4F55\u7EF4\u62A4\u5F02\u6B65\u6D41\u7A0B\u7684\uFF1F\u5373\u5F53\u524D\u6A21\u5757\u52A0\u8F7D\u4E86\u5F02\u6B65\u4EE3\u7801\uFF0C\u5E76\u4E0D\u77E5\u9053\u4EC0\u4E48\u65F6\u5019\u52A0\u8F7D\u5B8C\u6210\uFF0C\u9700\u8981\u7B49\u5F85\u5B83\u52A0\u8F7D\u5B8C\u6210\u3002</p><ul><li>\u901A\u8FC7promise\u7684\u673A\u5236\uFF0C\u5F53\u6A21\u5757\u52A0\u8F7D\u5B8C\u6210\u6539\u53D8promise\u7684\u72B6\u6001\uFF0C\u6765\u8FDB\u5165\u4E0B\u4E00\u6B65</li></ul></li></ul></li></ol><pre><code>&lt;!-- \u8BE6\u7EC6\u4EE3\u7801\u89C1 webpack\u76EE\u5F55/\u300Aimport-webpack\u300B\u76EE\u5F55 --&gt;
&lt;!-- \u53C2\u8003\u6587\u7AE0 \uFF1A https://juejin.cn/post/6899640414446780430 --&gt;
</code></pre>`,3),n=[t];function a(s,r){return i(),e("div",null,n)}var c=l(p,[["render",a],["__file","\u52A8\u6001\u52A0\u8F7Dimport()\u8BE6\u89E3.html.vue"]]);export{c as default};

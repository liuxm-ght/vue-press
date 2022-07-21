import{_ as l,o as i,c as e,f as a}from"./app.f25adddd.js";const p={},s=a(`<h3 id="sourcemap" tabindex="-1"><a class="header-anchor" href="#sourcemap" aria-hidden="true">#</a> SourceMap</h3><ol><li><p>\u6982\u8FF0\uFF1A</p><ul><li>SourceMap \u662F\u4E00\u4E2A\u6620\u5C04\u5173\u7CFB\u3002\u80FD\u591F\u5E2E\u6211\u4EEC\u66F4\u597D\u7684\u5B9A\u4F4D\u6E90\u7801\u7684\u9519\u8BEF\u3002</li></ul><div class="custom-container tip"><p class="custom-container-title">\u4F8B\u5982\uFF1A</p><ol><li><p>SourceMap \u662F\u6253\u5305\u6587\u4EF6\u548C\u6E90\u7801\u7684\u4E00\u4E2A\u6620\u5C04\u5173\u7CFB\uFF0C\u5B83\u77E5\u9053 dist \u76EE\u5F55\u4E0B main.js \u6587\u4EF6\u7684 97 \u884C \u5B9E\u9645\u4E0A\u5BF9\u5E94\u7684 src \u76EE\u5F55\u4E0B\u7684 index.js \u6587\u4EF6\u7684\u7B2C\u4E00\u884C\uFF0C\u8FD9\u6837\u6211\u4EEC\u5C31\u80FD\u591F\u5FEB\u901F\u5B9A\u4F4D\u95EE\u9898\uFF0C\u5E76\u8FDB\u884C\u4FEE\u590D\u4E86\u3002</p></li><li><p>\u8FD0\u884C npm run bundle\uFF0C\u6211\u4EEC\u4F1A\u53D1\u73B0\u5728 dist \u76EE\u5F55\u4E0B\u9762\uFF0C\u9664\u4E86 index.html \u548C main.js \uFF0C\u8FD8\u989D\u5916\u7684\u751F\u6210\u4E86 \u4E00\u4E2A main.js.map \u6587\u4EF6\u3002</p></li></ol></div></li><li><p>\u4F7F\u7528\uFF1A</p><ol><li><p>\u6982\u8FF0</p><p>\u6B64\u9009\u9879\u63A7\u5236\u662F\u5426\u751F\u6210\uFF0C\u4EE5\u53CA\u5982\u4F55\u751F\u6210 source map\u3002</p></li><li><p>\u6BD4\u8F83\u5E38\u7528\u7684\u9009\u9879\u3002</p><ul><li>\u914D\u7F6E\uFF1A\u5F00\u53D1\u5DE5\u5177 devtool (\u914D\u7F6Esource Map)</li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>devtool\uFF1A<span class="token string">&#39;source-map&#39;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>none\uFF1A\u4E0D\u4F1A\u751F\u6210sourceMap\uFF1B</li><li>eval\uFF1A\u6BCF\u4E2A\u6A21\u5757\u90FD\u4F1A\u4F7F\u7528eval()\u6267\u884C\uFF0C\u4E0D\u5EFA\u8BAE\u751F\u6210\u73AF\u5883\u4E2D\u4F7F\u7528\uFF1B</li><li>cheap-source-map\uFF1A\u751F\u6210sourceMap\uFF0C\u4F46\u662F\u6CA1\u6709\u5217\u6620\u5C04\uFF0C\u5219\u53EA\u4F1A\u63D0\u9192\u662F\u5728\u4EE3\u7801\u7684\u7B2C\u51E0\u884C\uFF0C\u4E0D\u4F1A\u63D0\u793A\u5230\u7B2C\u51E0\u5217\uFF1B</li><li>inline-source-map\uFF1A\u4F1A\u751F\u6210sourceMap\uFF0C\u4F46\u4E0D\u4F1A\u751F\u6210map\u6587\u4EF6\uFF0C\u800C\u662F\u5C06sourceMap\u653E\u5728\u6253\u5305\u6587\u4EF6\u4E2D\u3002</li></ul></li><li><p>\u6309\u73AF\u5883\u5206\u7C7B</p><ol><li><p>\u751F\u4EA7\u73AF\u5883\uFF1A</p><ul><li>none: \u6253\u5305\u540E\u7684\u4EE3\u7801 +++ +++</li><li>source-map\uFF1A\u539F\u59CB\u6E90\u4EE3\u7801 -- --</li><li>hidden-source-map\uFF1A\u539F\u59CB\u6E90\u4EE3\u7801 -- --</li><li>nosources-source-map\uFF1A\u65E0\u6E90\u4EE3\u7801\u5185\u5BB9 -- --</li><li>cheap-module-source-map\uFF1A\u539F\u59CB\u6E90\u4EE3\u7801\uFF08\u4EC5\u9650\u884C\uFF09 o -</li></ul><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>\u4E00\u822C\u5173\u6389source-map,\u6CA1\u5FC5\u8981\u5F00\u542F</p></div></li><li><p>\u975E\u751F\u4EA7\u73AF\u5883\uFF1A</p><ul><li>eval\uFF1A \u751F\u6210\u540E\u7684\u4EE3\u7801 +++ +++</li><li>cheap-source-map\uFF1A\u8F6C\u6362\u8FC7\u7684\u4EE3\u7801\uFF08\u4EC5\u9650\u884C\uFF09 + o</li><li>inline-source-map\uFF1A\u539F\u59CB\u6E90\u4EE3\u7801 -- --</li><li>cheap-module-eval-source-map\uFF1A \u539F\u59CB\u6E90\u4EE3\u7801\uFF08\u4EC5\u9650\u884C\uFF09 o ++</li></ul><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>\u4E00\u822C\u914D\u7F6Echeap-module-eval-source-map,</p></div></li></ol></li><li><p>\u5404\u914D\u7F6E\u5B57\u6BB5\u8BF4\u660E\uFF1A</p><ol><li><p>inline\uFF1A</p><ul><li>\u6709\u8FD9\u4E2A\u7684\u914D\u7F6E\uFF0C\u76F4\u63A5\u4F1A\u5C06 .map \u6587\u4EF6\u76F4\u63A5\u6253\u5305\u5230\u5BF9\u5E94\u7684 js \u4E2D\u53BB\uFF0C\u4ECE\u800C\u52A0\u5FEB\u76F8\u5E94\u7684\u901F\u5EA6</li><li>\u4F7F\u7528\u8FD9\u4E2A\u6211\u4EEC\u4F1A\u53D1\u73B0\uFF0C\u6253\u5305\u51FA\u6765\u7684\u6587\u4EF6\u6CA1\u6709 .map \u6587\u4EF6\u4E86\uFF0C\u800C\u662F\u4EE5 base64 \u7684\u5F62\u5F0F\u653E\u5165\u4E86\u6253\u5305\u7684\u6587\u4EF6\u4E2D\u4E86\u3002</li></ul><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>\u6253\u5305\u8FDB\u8F93\u51FA\u6587\u4EF6\uFF0C\u6CA1\u6709.map\u6587\u4EF6</p></div></li><li><p>cheap\uFF1A</p><ul><li>\u6709\u8FD9\u4E2A\u7684\u914D\u7F6E\uFF0C\u610F\u601D\u662F map \u6587\u4EF6\u53EA\u4F1A\u5E2E\u4F60\u5B9A\u4E3A\u5230\u5177\u4F53\u7684 \u67D0\u4E00\u884C\uFF0C\u5E76\u4E0D\u4F1A\u628A\u4EE3\u7801\u5B9A\u4F4D\u5230 \u5177\u4F53\u7684 \u67D0\u4E00\u884C \u67D0\u4E00\u5217\uFF0C\u4ECE\u800C\u52A0\u5FEB\u901F\u5EA6\uFF1B</li><li>cheap \u8FD8\u6709\u4E00\u4E2A\u4F5C\u7528\uFF0C\u5C31\u662F\u8FD9\u4E2A\u9009\u9879\u53EA\u4F7F\u9488\u5BF9\u4E1A\u52A1\u4EE3\u7801\uFF0C\u4E5F\u5C31\u662F\u8BF4\u53EA\u80FD\u5B9A\u4F4D\u5230\u4E1A\u52A1\u4EE3\u7801\u91CC\u9762\u7684\u9519\u8BEF\uFF0C\u5E76\u4E0D\u80FD\u5B9A\u4F4D\u5230\u6211\u4EEC\u5F15\u7528\u7684\u7B2C\u4E09\u65B9\u6587\u4EF6\uFF08\u6BD4\u5982\u8BF4 loader\uFF0C\u7B2C\u4E09\u65B9\u6A21\u5757\uFF09\u7684\u9519\u8BEF\u3002</li></ul><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>\u5B9A\u4F4D\u884C\uFF0C\u540C\u65F6\u4E0D\u5B9A\u4F4D\u7B2C\u4E09\u65B9\u4EE3\u7801</p></div></li><li><p>module\uFF1A</p><ul><li>\u6709\u8FD9\u4E2A\u7684\u914D\u7F6E\uFF0C\u610F\u601D\u662F \u5B83\u4E0D\u4EC5\u4F1A\u5E2E\u6211\u4EEC\u5B9A\u4F4D \u81EA\u5DF1\u7684\u4E1A\u52A1\u4EE3\u7801\u4E2D\u7684\u9519\u8BEF\uFF0C\u8FD8\u4F1A\u540C\u65F6\u5E2E\u6211\u4EEC\u5B9A\u4F4D\u7B2C\u4E09\u65B9\u6A21\u5757\u7684\u9519\u8BEF\u3002</li></ul><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>\u5B9A\u4F4D\u7B2C\u4E09\u65B9\u4EE3\u7801</p></div></li><li><p>eval\uFF1A</p><ul><li>\u6709\u8FD9\u4E2A\u7684\u914D\u7F6E\uFF0C\u4F7F\u7528eval\u5305\u88F9\u6A21\u5757\u4EE3\u7801\uFF0C\u5E76\u4E14\u5B58\u5728 //@sourceURL\uFF0C\u8FD9\u4E2A\u662F\u6253\u5305\u901F\u5EA6\u6700\u5FEB\uFF0C\u6027\u80FD\u6700\u597D\u7684\u7684\u4E00\u79CD\u65B9\u5F0F\uFF0C\u4F46\u662F\u6709\u7684\u65F6\u5019\uFF0C\u5BF9\u4E8E\u4EE3\u7801\u6BD4\u8F83\u590D\u6742\u7684\u60C5\u51B5\uFF0C\u5B83\u63D0\u793A\u51FA\u6765\u7684\u9519\u8BEF\u53EF\u80FD\u4E0D\u591F\u5168\u9762\u3002</li></ul><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>\u7528eval\u5305\u88F9\u4EE3\u7801\uFF0C//@sourceURL\u5907\u6CE8\u4EE3\u7801\u6587\u4EF6\uFF0C\u901F\u5EA6\u6700\u5FEB</p></div></li></ol></li></ol></li></ol>`,2),c=[s];function o(n,r){return i(),e("div",null,c)}var u=l(p,[["render",o],["__file","SourceMap.html.vue"]]);export{u as default};
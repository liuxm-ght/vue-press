import{_ as e,o as l,c as i,g as t}from"./app.c10353cc.js";const n={},a=t('<h4 id="js\u4E2D\u7684\u6808\u5185\u5B58\u5806\u5185\u5B58" tabindex="-1"><a class="header-anchor" href="#js\u4E2D\u7684\u6808\u5185\u5B58\u5806\u5185\u5B58" aria-hidden="true">#</a> JS\u4E2D\u7684\u6808\u5185\u5B58\u5806\u5185\u5B58</h4><p>JS\u7684\u5185\u5B58\u7A7A\u95F4\u5206\u4E3A\u6808(stack)\u3001\u5806(heap)\u3001\u6C60(\u4E00\u822C\u4E5F\u4F1A\u5F52\u7C7B\u4E3A\u6808\u4E2D)\u3002 \u5176\u4E2D\u6808\u5B58\u653E\u53D8\u91CF\uFF0C\u5806\u5B58\u653E\u590D\u6742\u5BF9\u8C61\uFF0C\u6C60\u5B58\u653E\u5E38\u91CF\uFF0C\u6240\u4EE5\u4E5F\u53EB\u5E38\u91CF\u6C60\u3002</p><ol><li><p>\u6808\u6570\u636E\u7ED3\u6784 \u6808\u662F\u4E00\u79CD\u7279\u6B8A\u7684\u5217\u8868\uFF0C\u6808\u5185\u7684\u5143\u7D20\u53EA\u80FD\u901A\u8FC7\u5217\u8868\u7684\u4E00\u7AEF\u8BBF\u95EE\uFF0C\u8FD9\u4E00\u7AEF\u79F0\u4E3A\u6808\u9876\u3002 \u6808\u88AB\u79F0\u4E3A\u662F\u4E00\u79CD\u540E\u5165\u5148\u51FA\uFF08LIFO\uFF0Clast-in-first-out\uFF09\u7684\u6570\u636E\u7ED3\u6784\u3002 \u7531\u4E8E\u6808\u5177\u6709\u540E\u5165\u5148\u51FA\u7684\u7279\u70B9\uFF0C\u6240\u4EE5\u4EFB\u4F55\u4E0D\u5728\u6808\u9876\u7684\u5143\u7D20\u90FD\u65E0\u6CD5\u8BBF\u95EE\u3002 \u4E3A\u4E86\u5F97\u5230\u6808\u5E95\u7684\u5143\u7D20\uFF0C\u5FC5\u987B\u5148\u62FF\u6389\u4E0A\u9762\u7684\u5143\u7D20\u3002</p></li><li><p>\u5806\u6570\u636E\u7ED3\u6784 \u5806\u662F\u4E00\u79CD\u7ECF\u8FC7\u6392\u5E8F\u7684\u6811\u5F62\u6570\u636E\u7ED3\u6784\uFF0C\u6BCF\u4E2A\u7ED3\u70B9\u90FD\u6709\u4E00\u4E2A\u503C\u3002 \u901A\u5E38\u6211\u4EEC\u6240\u8BF4\u7684\u5806\u7684\u6570\u636E\u7ED3\u6784\uFF0C\u662F\u6307\u4E8C\u53C9\u5806\u3002 \u5806\u7684\u7279\u70B9\u662F\u6839\u7ED3\u70B9\u7684\u503C\u6700\u5C0F\uFF08\u6216\u6700\u5927\uFF09\uFF0C\u4E14\u6839\u7ED3\u70B9\u7684\u4E24\u4E2A\u5B50\u6811\u4E5F\u662F\u4E00\u4E2A\u5806\u3002 \u7531\u4E8E\u5806\u7684\u8FD9\u4E2A\u7279\u6027\uFF0C\u5E38\u7528\u6765\u5B9E\u73B0\u4F18\u5148\u961F\u5217\uFF0C\u5806\u7684\u5B58\u53D6\u662F\u968F\u610F\uFF0C\u8FD9\u5C31\u5982\u540C\u6211\u4EEC\u5728\u56FE\u4E66\u9986\u7684\u4E66\u67B6\u4E0A\u53D6\u4E66\uFF0C \u867D\u7136\u4E66\u7684\u6446\u653E\u662F\u6709\u987A\u5E8F\u7684\uFF0C\u4F46\u662F\u6211\u4EEC\u60F3\u53D6\u4EFB\u610F\u4E00\u672C\u65F6\u4E0D\u5FC5\u50CF\u6808\u4E00\u6837\uFF0C\u5148\u53D6\u51FA\u524D\u9762\u6240\u6709\u7684\u4E66\uFF0C \u6211\u4EEC\u53EA\u9700\u8981\u5173\u5FC3\u4E66\u7684\u540D\u5B57\u3002</p></li><li><p>\u53D8\u91CF\u7C7B\u578B\u4E0E\u5185\u5B58\u7684\u5173\u7CFB 1. \u57FA\u672C\u6570\u636E\u7C7B\u578B(7\u79CD) Sting Number Boolean null undefined Symbol Bigint \u57FA\u672C\u6570\u636E\u7C7B\u578B\u4FDD\u5B58\u5728\u6808\u5185\u5B58\u4E2D\uFF0C\u56E0\u4E3A\u57FA\u672C\u6570\u636E\u7C7B\u578B\u5360\u7528\u7A7A\u95F4\u5C0F\u3001\u5927\u5C0F\u56FA\u5B9A\uFF0C\u901A\u8FC7\u6309\u503C\u6765\u8BBF\u95EE\uFF0C\u5C5E\u4E8E\u88AB\u9891\u7E41\u4F7F\u7528\u7684\u6570\u636E\u3002 PS: \u9700\u8981\u6CE8\u610F\u7684\u662F\u95ED\u5305\u4E2D\u7684\u57FA\u672C\u6570\u636E\u7C7B\u578B\u53D8\u91CF\u4E0D\u4FDD\u5B58\u5728\u6808\u5185\u5B58\u4E2D\uFF0C\u800C\u662F\u4FDD\u5B58\u5728\u5806\u5185\u5B58\u4E2D\u3002\u8FD9\u4E2A\u95EE\u9898\uFF0C\u6211\u4EEC\u540E\u6587\u518D\u8BF4\u3002 2. \u5F15\u7528\u6570\u636E\u7C7B\u578B Array Function Object Date RegExp ... \u53EF\u4EE5\u8BA4\u4E3A\u9664\u4E86\u4E0A\u6587\u63D0\u5230\u7684\u57FA\u672C\u6570\u636E\u7C7B\u578B\u4EE5\u5916\uFF0C\u6240\u6709\u7C7B\u578B\u90FD\u662F\u5F15\u7528\u6570\u636E\u7C7B\u578B\u3002 \u5F15\u7528\u6570\u636E\u7C7B\u578B\u5B58\u50A8\u5728\u5806\u5185\u5B58\u4E2D\uFF0C\u56E0\u4E3A\u5F15\u7528\u6570\u636E\u7C7B\u578B\u5360\u636E\u7A7A\u95F4\u5927\u3001\u5927\u5C0F\u4E0D\u56FA\u5B9A\u3002 \u5982\u679C\u5B58\u50A8\u5728\u6808\u4E2D\uFF0C\u5C06\u4F1A\u5F71\u54CD\u7A0B\u5E8F\u8FD0\u884C\u7684\u6027\u80FD\uFF1B \u5F15\u7528\u6570\u636E\u7C7B\u578B\u5728\u6808\u4E2D\u5B58\u50A8\u4E86\u6307\u9488\uFF0C\u8BE5\u6307\u9488\u6307\u5411\u5806\u4E2D\u8BE5\u5B9E\u4F53\u7684\u8D77\u59CB\u5730\u5740\u3002 \u5F53\u89E3\u91CA\u5668\u5BFB\u627E\u5F15\u7528\u503C\u65F6\uFF0C\u4F1A\u9996\u5148\u68C0\u7D22\u5176\u5728\u6808\u4E2D\u7684\u5730\u5740\uFF0C\u53D6\u5F97\u5730\u5740\u540E\u4ECE\u5806\u4E2D\u83B7\u5F97\u5B9E\u4F53</p><ul><li>\u5F15\u7528\u6570\u636E\u7C7B\u578B\u7684\u590D\u5236\uFF1A \u6808\u5185\u5B58\u4E2D\u5B58\u653E\u5730\u5740\u6307\u5411\u5806\u5185\u5B58\u4E2D\u7684\u5BF9\u8C61\uFF0C \u5F15\u7528\u7C7B\u578B\u7684\u590D\u5236\u4F1A\u4E3A\u65B0\u7684\u53D8\u91CF\u81EA\u52A8\u5206\u914D\u4E00\u4E2A\u65B0\u7684\u503C\u4FDD\u5B58\u5728\u53D8\u91CF\u4E2D\uFF0C \u4F46\u53EA\u662F\u5F15\u7528\u7C7B\u578B\u7684\u4E00\u4E2A\u5730\u5740\u6307\u9488\u800C\u5DF2\uFF0C\u5B9E\u9645\u6307\u5411\u7684\u662F\u540C\u4E00\u4E2A\u5BF9\u8C61</li></ul></li><li><p>\u6808\u5185\u5B58\u548C\u5806\u5185\u5B58\u7684\u4F18\u7F3A\u70B9 \u5728JS\u4E2D\uFF0C\u57FA\u672C\u6570\u636E\u7C7B\u578B\u53D8\u91CF\u5927\u5C0F\u56FA\u5B9A\uFF0C\u5E76\u4E14\u64CD\u4F5C\u7B80\u5355\u5BB9\u6613\uFF0C\u6240\u4EE5\u628A\u5B83\u4EEC\u653E\u5165\u6808\u4E2D\u5B58\u50A8\u3002 \u5F15\u7528\u7C7B\u578B\u53D8\u91CF\u5927\u5C0F\u4E0D\u56FA\u5B9A\uFF0C\u6240\u4EE5\u628A\u5B83\u4EEC\u5206\u914D\u7ED9\u5806\u4E2D\uFF0C\u8BA9\u4ED6\u4EEC\u7533\u8BF7\u7A7A\u95F4\u7684\u65F6\u5019\u81EA\u5DF1\u786E\u5B9A\u5927\u5C0F\uFF0C\u8FD9\u6837\u628A\u5B83\u4EEC\u5206\u5F00\u5B58\u50A8\u80FD\u591F\u4F7F\u5F97\u7A0B\u5E8F\u8FD0\u884C\u8D77\u6765\u5360\u7528\u7684\u5185\u5B58\u6700\u5C0F\u3002 \u6808\u5185\u5B58\u7531\u4E8E\u5B83\u7684\u7279\u70B9\uFF0C\u6240\u4EE5\u5B83\u7684\u7CFB\u7EDF\u6548\u7387\u8F83\u9AD8\u3002 \u5806\u5185\u5B58\u9700\u8981\u5206\u914D\u7A7A\u95F4\u548C\u5730\u5740\uFF0C\u8FD8\u8981\u628A\u5730\u5740\u5B58\u5230\u6808\u4E2D\uFF0C\u6240\u4EE5\u6548\u7387\u4F4E\u4E8E\u6808\u3002</p></li><li><p>\u6808\u5185\u5B58\u548C\u5806\u5185\u5B58\u7684\u5783\u573E\u56DE\u6536 \u6808\u5185\u5B58\u4E2D\u53D8\u91CF\u4E00\u822C\u5728\u5B83\u7684\u5F53\u524D\u6267\u884C\u73AF\u5883\u7ED3\u675F\u5C31\u4F1A\u88AB\u9500\u6BC1\u88AB\u5783\u573E\u56DE\u6536\u5236\u56DE\u6536\uFF0C \u800C\u5806\u5185\u5B58\u4E2D\u7684\u53D8\u91CF\u5219\u4E0D\u4F1A\uFF0C\u56E0\u4E3A\u4E0D\u786E\u5B9A\u5176\u4ED6\u7684\u5730\u65B9\u662F\u4E0D\u662F\u8FD8\u6709\u4E00\u4E9B\u5BF9\u5B83\u7684\u5F15\u7528\u3002 \u5806\u5185\u5B58\u4E2D\u7684\u53D8\u91CF\u53EA\u6709\u5728\u6240\u6709\u5BF9\u5B83\u7684\u5F15\u7528\u90FD\u7ED3\u675F\u7684\u65F6\u5019\u624D\u4F1A\u88AB\u56DE\u6536\u3002</p></li><li><p>\u95ED\u5305\u4E0E\u5806\u5185\u5B58 \u95ED\u5305\u4E2D\u7684\u53D8\u91CF\u5E76\u4E0D\u4FDD\u5B58\u4E2D\u6808\u5185\u5B58\u4E2D\uFF0C\u800C\u662F\u4FDD\u5B58\u5728\u5806\u5185\u5B58\u4E2D\u3002 \u8FD9\u4E5F\u5C31\u89E3\u91CA\u4E86\u51FD\u6570\u8C03\u7528\u4E4B\u540E\u4E4B\u540E\u4E3A\u4EC0\u4E48\u95ED\u5305\u8FD8\u80FD\u5F15\u7528\u5230\u51FD\u6570\u5185\u7684\u53D8\u91CF\u3002 \u6211\u4EEC\u5148\u6765\u770B\u4EC0\u4E48\u662F\u95ED\u5305\uFF1A function A() { let a = 1; function B() { console.log(a); } return B; } let res = A(); \u51FD\u6570 A \u8FD4\u56DE\u4E86\u4E00\u4E2A\u51FD\u6570 B\uFF0C\u5E76\u4E14\u51FD\u6570 B \u4E2D\u4F7F\u7528\u4E86\u51FD\u6570 A \u7684\u53D8\u91CF\uFF0C\u51FD\u6570 B \u5C31\u88AB\u79F0\u4E3A\u95ED\u5305\u3002 \u51FD\u6570 A \u5F39\u51FA\u8C03\u7528\u6808\u540E\uFF0C\u51FD\u6570 A \u4E2D\u7684\u53D8\u91CF\u8FD9\u65F6\u5019\u662F\u5B58\u50A8\u5728\u5806\u4E0A\u7684(\u539F\u7406\u662FB\u62F7\u8D1D\u4E86A\u4F5C\u7528\u57DF\u94FE\u5230B\u7684\u4F5C\u7528\u57DF\u94FE\u4E0A\u53BB\u4E86)\uFF0C\u6240\u4EE5\u51FD\u6570B\u4F9D\u65E7\u80FD\u5F15\u7528\u5230\u51FD\u6570A\u4E2D\u7684\u53D8\u91CF\u3002 \u73B0\u5728\u7684 JS \u5F15\u64CE\u53EF\u4EE5\u901A\u8FC7\u9003\u9038\u5206\u6790\u8FA8\u522B\u51FA\u54EA\u4E9B\u53D8\u91CF\u9700\u8981\u5B58\u50A8\u5728\u5806\u4E0A\uFF0C\u54EA\u4E9B\u9700\u8981\u5B58\u50A8\u5728\u6808\u4E0A\u3002</p></li><li><p>JS \u5F15\u64CE\u53EF\u4EE5\u901A\u8FC7\u9003\u9038\u5206\u6790\u8FA8\u522B\u51FA\u54EA\u4E9B\u53D8\u91CF\u9700\u8981\u5B58\u50A8\u5728\u5806\u4E0A</p></li></ol><p>\u53C2\u8003\uFF1A JS\u4E2D\u7684\u6808\u5185\u5B58\u5806\u5185\u5B58 </p>',4),o=[a];function _(r,c){return l(),i("div",null,o)}var s=e(n,[["render",_],["__file","2-\u5185\u5B58\u7684\u5206\u7C7B-\u6808\u5806\u6C60.html.vue"]]);export{s as default};

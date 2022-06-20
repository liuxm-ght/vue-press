import{_ as n,o as i,c as e,g as l}from"./app.85e25c47.js";const d={},s=l(`<h1 id="how-do-it-work" tabindex="-1"><a class="header-anchor" href="#how-do-it-work" aria-hidden="true">#</a> how do it work?</h1><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>  vue-cli-tmx templateName targetName 
  vue-cli-tmx ?\u547D\u4EE4 \u662F\u5982\u4F55\u5DE5\u4F5C\u7684\uFF1F
    \u5982\u4F55\u521B\u5EFA\u4E00\u4E2Ashell\u547D\u4EE4\uFF1F 
      \u9700\u8981\u5728package.json\u4E2D\u914D\u7F6Ebin  &quot;vue-cli-tmx&quot;: &quot;bin/vue-init&quot;\uFF0C
      \u7136\u540E npm link \u5C06\u9879\u76EE\u4EF6\u6620\u5C04\u5230node\u8FD0\u884C\u7684\u73AF\u5883\u76EE\u5F55\u4E2D\u53BB\uFF0C\u5E76\u5C06bin\u6DFB\u52A0\u5230node bin\u4E2D\u53BB\u3002(\u6267\u884Cnpm link \u4F1A\u5C06\u5F53\u524D\u9879\u76EE\u94FE\u63A5\u5230\u5168\u5C40\u53BB\uFF0C\u5730\u5740\u662Fnode\u7684\u8FD0\u884C\u73AF\u5883{profix}/lib/node_modules/&lt;project-name&gt; ) (npm config get prefix\u67E5\u770B prefix )( project-name \u4E3Apackage.name)
      \u5C31\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528vue-cli-tmx\u547D\u4EE4\u4E86(\u5728\u7EC8\u7AEF\u8FD0\u7528\u547D\u4EE4\u65F6\uFF0C\u4F1A\u81EA\u52A8\u52A0\u4E0A\u73AF\u5883\u53D8\u91CF$PATH)
      \u5F53\u6267\u884C\u8FD9\u4E2A\u547D\u4EE4\u65F6\uFF0C\u4F1A\u6267\u884C\u8FD9\u4E2Abin\u811A\u672Cvue-init

  \u770B\u4E0B\u8FD9\u4E2A\u6587\u4EF6 vue-init
    \u6700\u9876\u90E8\u58F0\u660E\u4E86 #!/usr/bin/env node \uFF0C\u610F\u601D\u662F\u4F7F\u7528node \u6765\u89E3\u91CA\u8FD9\u4E2A\u811A\u672Cbin/vue-init
    \u505A\u4E86\u51E0\u4EF6\u4E8B\u60C5\uFF1A
      \u4E00
        \u547D\u4EE4\u884C\u5904\u7406  
          commander \u547D\u4EE4\u884C\u63A7\u5236\u63D2\u4EF6
            \u4F7F\u7528commander\u6765\u5904\u7406\u547D\u4EE4
              usage\u63D0\u793A\u7528\u6237\u5982\u4F55\u8F93\u5165\uFF0C\u4E24\u4E2A\u53C2\u6570 \u6A21\u677F\u540D\u79F0\u5FC5\u586B \u9879\u76EE\u540D\u79F0\u9009\u586B 
              option\u53EF\u8F93\u5165\u9009\u9879 clone \u662F\u5426git clone\uFF0C offile \u662F\u5426\u4F7F\u7528\u7F13\u5B58
              \u89E3\u6790node\u53C2\u6570\uFF0C\u65E0\u53C2\u6570\u5C55\u793A\u7528\u6237\u63D0\u793A\u4FE1\u606F\uFF0C\u6709\u8FDB\u884C\u53C2\u6570\u5904\u7406
              \u53C2\u65701 \u6A21\u7248\u540D\u79F0 \u5E26/ . : \u4E3A\u672C\u5730\u8DEF\u5F84\uFF0C\u4ECE\u672C\u5730\u62FF\u6A21\u677F\u6587\u4EF6\uFF0C\u5426\u5219\u4ECE\u8FDC\u7A0B\u62FF\uFF0C\u8FDC\u7A0B\u6709\u5B98\u65B9/\u79C1\u6709
              \u53C2\u65702 \u9879\u76EE\u540D\u79F0 . / \u4E0D\u586B :\u4E3A\u5F53\u524D\u76EE\u5F55\uFF0C\u540D\u79F0\u7528\u5F53\u524D\u76EE\u5F55\u540D\uFF0C \u5426\u5219\u5B58\u5230\u6307\u5B9A\u76EE\u5F55\u53BB
      \u4E8C 
        \u6A21\u677F\u6765\u6E90\u786E\u5B9A
          run \u8FDB\u884C\u4E0A\u9762\u5224\u65AD\u5904\u7406\u51FD\u6570
            \u672C\u5730 \u5B58\u5728 \u76F4\u63A5\u5904\u7406\u7F13\u5B58\u6587\u4EF6
            \u8FDC\u7A0B \u4F7F\u7528 download-git-repo \u4E0B\u8F7D
      \u4E09
        \u4E0B\u8F7D\u6A21\u677F
          \u4F7F\u7528 download-git-repo \u4E0B\u8F7D \u53C2\u6570\u4E00 git repo \u5730\u5740\uFF0C\u53C2\u6570\u4E8C \u672C\u5730\u4FDD\u5B58\u5730\u5740 \uFF0C\u53C2\u6570\u4E09 \u9009\u9879 \u5982\uFF1A\u662F\u5426clone
          \u4E0B\u8F7D\u5B8C\u6210 \u6B63\u5F0F\u8FDB\u884C\u6A21\u677F\u5904\u7406 generate
  
  \u770B\u770Bgenerate\u6587\u4EF6
    generate \u51FD\u65704\u4E2A\u53C2\u6570 name\u6A21\u677F\u540D\u79F0 src\u6765\u6E90\u76EE\u5F55 to\u8F93\u51FA\u76EE\u5F55 callback\u56DE\u8C03\u51FD\u6570
    \u505A\u4E862\u4EF6\u4E8B\u60C5
      \u4E00
        \u83B7\u53D6\u914D\u7F6E  \u53BB\u6A21\u677F\u76EE\u5F55\u62FF\u914D\u7F6E\u6587\u4EF6\u4FE1\u606F
          read-metadata\u63D2\u4EF6 \u8BFB\u53D6meta\u6587\u4EF6\u4FE1\u606F\uFF08\u6A21\u677F\u76EE\u5F55\u7684meta\u6587\u4EF6\uFF09 opts
      \u4E8C 
        \u5904\u7406\u6A21\u677F\u6587\u4EF6  \u6839\u636Emeta\u4FE1\u606F\u5904\u7406\u6A21\u677F
          metalsmith \u63D2\u4EF6 
          metalsmith \u8F93\u5165\u6E90\u76EE\u5F55 \u4E2D\u95F4\u4EF6\u64CD\u4F5C \u8F93\u51FA\u76EE\u6807\u76EE\u5F55
            \u83B7\u53D6\u6E90\u76EE\u5F55metadata \u5143\u6570\u636E \u5E76\u6269\u5C55
        \u5982\u4F55\u5904\u7406\uFF1F
          \u7528\u6237\u4EA4\u4E92
            inquirer \u63D2\u4EF6
              inquirer\u6839\u636E opts \u914D\u7F6E\u7684prompt\u8FDB\u884C\u7528\u6237\u4EA4\u4E92
              \u5C06\u4EA4\u4E92\u7ED3\u679C\u4FDD\u5B58\u5230 metadata \u4E2D
          \u6587\u4EF6\u8FC7\u6EE4
            minimatch \u63D2\u4EF6 
              \u6839\u636E opts \u914D\u7F6E\u7684 filters \u8FC7\u6EE4\u6587\u4EF6
          \u6E32\u67D3\u6587\u4EF6
            handlebars \u63D2\u4EF6
              render \u6E32\u67D3\u6587\u4EF6
                \u6839\u636E\u4EA4\u4E92\u7ED3\u679C metadata \u9010\u4E2A\u7F16\u8BD1\u9700\u8981\u7F16\u8BD1\u7684\u6587\u4EF6


  \u5DE5\u4F5C\u6D41\u7A0B
    1.vue-cli \u5224\u65AD\u662F\u4F7F\u7528\u8FDC\u7A0B\u6A21\u677F\uFF0C\u8FD8\u662F\u4F7F\u7528\u672C\u5730\u6A21\u677F
    2.\u5982\u679C\u4F7F\u7528\u8FDC\u7A0B\u6A21\u677F\uFF0C\u4E0B\u8F7D\u8FDC\u7A0B\u6A21\u677F\uFF0C\u4FDD\u5B58\u5230\u672C\u5730.vue-templates\u6587\u4EF6\u5939\u4E0B
    3.\u5982\u679C\u4F7F\u7528\u672C\u5730\u6A21\u677F\uFF0C\u8BFB\u53D6\u6A21\u677F\u4E0B\u7684meta.js\u6216meta.json\u6587\u4EF6\uFF0C\u6839\u636E\u91CC\u9762\u7684\u5185\u5BB9\u8BE2\u95EE\u5F00\u53D1\u8005\uFF0C\u8FC7\u6EE4\u6587\u4EF6
    4.\u6839\u636E\u6A21\u677F\u5185\u5BB9\u53CA\u56DE\u7B54\uFF0C\u6E32\u67D3\u51FA\u76EE\u5F55\u7ED3\u6784\u5E76\u751F\u6210\u5230\u6307\u5B9A\u76EE\u5F55


  \u6CE8\u610F\uFF1A
    \u6A21\u677F\u53EF\u4EE5\u662F\u4EFB\u4F55\u9879\u76EE\uFF0C\u6216\u76EE\u5F55\uFF0C\u4E0D\u4E00\u5B9A\u662Fvue\u9879\u76EE\u3002
    


    







npm link
  (\u6267\u884Cnpm link \u4F1A\u5C06\u5F53\u524D\u9879\u76EE\u94FE\u63A5\u5230\u5168\u5C40\u53BB\uFF0C\u5730\u5740\u662F\u5168\u5C40node\u7684\u8FD0\u884C\u73AF\u5883{profix}/lib/node_modules/&lt;project-name&gt; ) (npm config get prefix\u67E5\u770B prefix )( project-name \u4E3Apackage.name)
  \u5F53\u524D\u9879\u76EE\u4F1A\u5728\u5168\u5C40\u5730\u5740\u5907\u4EFD\u4E00\u4EFD\uFF0C\u5E76\u4E14\u5C06\u9879\u76EEbin\u4E5F\u94FE\u63A5\u5230node\u8FD0\u884C\u73AF\u5883bin\u6587\u4EF6


vue build 
  runtime-compiler (\u8FD0\u884C\u8FC7\u7A0B) \uFF1A template -&gt; ast -&gt; render -&gt; vdom -&gt; UI
  runtime-only : render -&gt; vdom -&gt; UI (.vue \u6587\u4EF6\u7684\u7F16\u8BD1\u4EA4\u7ED9vue-template-compiler,\u5C06template -&gt; ast -&gt; render)
   
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),v=[s];function a(r,m){return i(),e("div",null,v)}var u=n(d,[["render",a],["__file","vuecli.html.vue"]]);export{u as default};

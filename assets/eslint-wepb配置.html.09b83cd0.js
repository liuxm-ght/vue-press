import{_ as e,o as l,c as s,a as n,b as t}from"./app.68e824a5.js";const i={},a=n("h3",{id:"\u4F7F\u7528-eslint-\u89C4\u8303\u6784\u5EFA\u811A\u672C",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u4F7F\u7528-eslint-\u89C4\u8303\u6784\u5EFA\u811A\u672C","aria-hidden":"true"},"#"),t(" \u4F7F\u7528 ESlint \u89C4\u8303\u6784\u5EFA\u811A\u672C")],-1),c=n("ol",null,[n("li",null,[n("p",null,"\u4E4B\u524D\u8BB2\u5230 Eslint \u7684\u65F6\u5019\uFF0C\u6211\u4EEC\u4F7F\u7528 eslint-config-airbnb \u6765\u8FDB\u884C Eslint \u7684\u89C4\u8303\u8BBE\u8BA1\uFF0C\u8FD9\u91CC\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528 eslint-config-airbnb-base\uFF0C\u5B83\u63D0\u4F9B\u4E86 Airbnb \u7684\u57FA\u7840 .eslintrc\uFF08\u65E0 React \u63D2\u4EF6\uFF09\u7684\u914D\u7F6E\u3002")]),n("li",null,[n("p",null,"\u5B89\u88C5\u914D\u7F6E npm install eslint babel-eslint eslint-config-airbnb-base -D #\u914D\u7F6E .eslintrc.js")])],-1),r=n("pre",null,[n("code",null,`#\u589E\u52A0 package.json
  <!-- 
    cripts": {
      // ...
      "lint": "eslint --fix ./lib",
    }, 
  -->
\u6211\u4EEC\u8FD0\u884C\u4E00\u4E0B npm run lint\uFF0C\u53EF\u4EE5\u770B\u5230\u76F8\u5E94\u7684\u9519\u8BEF\u4EE3\u7801\uFF1A

\u6211\u4EEC\u4FBF\u53EF\u4EE5\u6839\u636E\u9519\u8BEF\u8FDB\u884C\u76F8\u5E94\u7684\u4FEE\u590D\u3002

#\u5F53\u524D\u76EE\u5F55\u7ED3\u6784
.
\u251C\u2500\u2500 lib  // webpack \u914D\u7F6E\u6587\u4EF6\u5939
    \u251C\u2500\u2500 webpack.common.js  // \u57FA\u7840\u914D\u7F6E\u6587\u4EF6
    \u251C\u2500\u2500 webpack.dev.js     // \u5F00\u53D1\u73AF\u5883\u914D\u7F6E\u6587\u4EF6
    \u251C\u2500\u2500 webpack.prod.js    // \u751F\u4EA7\u73AF\u5883\u914D\u7F6E\u6587\u4EF6
    \u251C\u2500\u2500 webpack.ssr.js     // SSR \u73AF\u5883\u914D\u7F6E\u6587\u4EF6
    \u251C\u2500\u2500 ...
    \u2514\u2500\u2500 webpack.dll.js     // dll \u914D\u7F6E\u6587\u4EF6
\u251C\u2500\u2500 test  // \u6D4B\u8BD5\u6587\u4EF6\u5939
\u251C\u2500\u2500 .eslintrc.js  // eslint \u7684\u914D\u7F6E\u6587\u4EF6
\u251C\u2500\u2500 .babelrc      // babel \u914D\u7F6E\u6587\u4EF6
\u251C\u2500\u2500 README.md     // \u9879\u76EE README \u6587\u4EF6
\u251C\u2500\u2500 .gitignore    // git \u5FFD\u7565\u6587\u4EF6
\u2514\u2500\u2500 package.json  // \u5F53\u524D\u6574\u4E00\u4E2A\u9879\u76EE\u7684\u4F9D\u8D56
\u63A5\u4E0B\u53BB\u6211\u4EEC\u4F1A\u8BB2\u9879\u76EE\u7684\u6D4B\u8BD5\u76F8\u5173\u7684\u4EE3\u7801\u3002
`)],-1),o=[a,c,r];function b(_,d){return l(),s("div",null,o)}var u=e(i,[["render",b],["__file","eslint-wepb\u914D\u7F6E.html.vue"]]);export{u as default};

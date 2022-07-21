import{_ as l,r as o,o as p,c as i,a,w as e,b as n,e as s}from"./app.f25adddd.js";const u={},r=n("h3",{id:"\u7C7B\u578B\u5224\u65AD",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u7C7B\u578B\u5224\u65AD","aria-hidden":"true"},"#"),s(" \u7C7B\u578B\u5224\u65AD")],-1),k=n("ol",null,[n("li",null,[n("p",null,"\u603B\u7ED3\uFF1A"),n("ul",null,[n("li",null,"instanceof\uFF1A\u7528\u4E8E\u5224\u65AD\u6570\u636E\u662F\u5426\u5728\u67D0\u79CD\u7C7B\u578B\u7684\u539F\u578B\u94FE\u4E0A\uFF0C\u8FD4\u56DE ture \u6216 false"),n("li",null,"typeof\u7684\u5B9E\u73B0\uFF1A\u53EA\u80FD\u5224\u65AD\u9664\u4E86null\u7684\u57FA\u7840\u7C7B\u578B\uFF0C\u5F15\u7528\u7C7B\u578B\u9664function\u5176\u4ED6\u5224\u65AD\u4E3Aobject\uFF1B\u539F\u56E0\u662Ftypeof\u4F1A\u5224\u65AD\u673A\u5668\u7801\u5B58\u50A8\u4FE1\u606F\u524D\u4E09\u4F4D\uFF0C\u4E3A000\u7684\u662F\u5BF9\u8C61\uFF0Cnull\u7684\u673A\u5668\u7801\u5B58\u50A8\u4FE1\u606F\u4E5F\u662F000"),n("li",null,"\u901A\u7528\u7C7B\u578B\u5224\u65AD\uFF1A\u901A\u7528Object.prototype.toString.call(xxx).slice(8,-1)\u51C6\u786E\u83B7\u53D6\u6570\u636E\u7C7B\u578B")])]),n("li",null,[n("p",null,"\u539F\u7406\uFF1A")])],-1),m=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token doc-comment comment"},`/**
 * \u5B9E\u73B0 instanceof
 *  \u4E3B\u8981\u7528\u4E8E \u5224\u65AD\u6570\u636E\u662F\u5426\u5728\u67D0\u79CD\u7C7B\u578B\u7684\u539F\u578B\u94FE\u4E0A
 */`),s(` 
`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"myInstanceof"),n("span",{class:"token punctuation"},"("),s("left"),n("span",{class:"token punctuation"},","),s("right"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// let proto = left.__proto__"),s(`
  `),n("span",{class:"token keyword"},"let"),s(" proto "),n("span",{class:"token operator"},"="),s(" Object"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getPrototypeOf"),n("span",{class:"token punctuation"},"("),s("left"),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"if"),n("span",{class:"token punctuation"},"("),s("proto "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"false"),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("proto "),n("span",{class:"token operator"},"==="),s(" right"),n("span",{class:"token punctuation"},"."),s("prototype"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"true"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token comment"},"// proto = proto.__proto__"),s(`
    proto `),n("span",{class:"token operator"},"="),s(" Object"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getPrototypeOf"),n("span",{class:"token punctuation"},"("),s("proto"),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),d=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token doc-comment comment"},`/**
 * \u5B9E\u73B0 typeof
 *  typeof \u4E00\u822C\u88AB\u7528\u4E8E\u5224\u65AD\u4E00\u4E2A\u53D8\u91CF\u7684\u7C7B\u578B\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5229\u7528 typeof \u6765\u5224\u65ADnumber, string, object, boolean, function, undefined, symbol \u8FD9\u4E03\u79CD\u7C7B\u578B\uFF1B
 * 
 *  \u4E3B\u8981\u7528\u4E8E \u57FA\u7840\u6570\u636E\u7C7B\u578B\u7684 \u5224\u65AD
 *      \u5BF9\u4E8E \u5F15\u7528\u7C7B\u578B \u9664function, \u5176\u4ED6\u5224\u65AD\u90FD\u662Fobject \uFF0C\u540C\u65F6 null \u4E5F\u662F\u5224\u65AD\u4E3Aobject\uFF08\u8FD9\u70B9\u53EF\u4ECEMdn\u6587\u6863\u53EF\u77E5\u9053\uFF09
 * 
 *  null \u4E5F\u662F\u5224\u65AD\u4E3Aobject\uFF0C \u539F\u7406\u662F\uFF1A
 *    js\u5728\u5B58\u50A8\u53D8\u91CF\u7684\u65F6\u5019\uFF0C\u5E95\u5C42\u903B\u8F91\u662F\u5728\u53D8\u91CF\u8F6C\u4E3A\u673A\u5668\u7801\u540E\u76841-3\u4F4D\u5B58\u50A8\u76F8\u5E94\u7684\u4FE1\u606F\uFF1A
        000\uFF1A\u5BF9\u8C61
        010\uFF1A\u6D6E\u70B9\u6570
        100\uFF1A\u5B57\u7B26\u4E32
        110\uFF1A\u5E03\u5C14
        1\uFF1A\u6574\u6570
 *    \u5BF9\u4E8Enull\u7684\u5B58\u50A8\u662F\u51680\uFF0C\u6240\u4EE5\u4F1A\u88AB\u5224\u65AD\u4E3Aobject
 *    \u5BF9\u4E8Eundefined \u7684\u5B58\u50A8\u662F \u7528 \u22122^30 \u6574\u6570\u6765\u8868\u793A
*       \u53C2\u8003\u6587\u7AE0\uFF1Ahttps://juejin.cn/post/6844903613584654344
*       \u53C2\u8003\u6587\u7AE0\uFF1Ahttps://juejin.cn/post/6991653255847772167
 */`),s(` 

`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"myTypeOf"),n("span",{class:"token punctuation"},"("),s("data"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"var"),s(" type "),n("span",{class:"token operator"},"="),s(" Object"),n("span",{class:"token punctuation"},"."),s("prototype"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toString"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"call"),n("span",{class:"token punctuation"},"("),s("data"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"slice"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"8"),n("span",{class:"token punctuation"},","),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toLowerCase"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token keyword"},"var"),s(" map "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token string-property property"},"'number'"),n("span",{class:"token operator"},":"),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token string-property property"},"'string'"),n("span",{class:"token operator"},":"),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token string-property property"},"'boolean'"),n("span",{class:"token operator"},":"),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token string-property property"},"'undefined'"),n("span",{class:"token operator"},":"),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token string-property property"},"'bigint'"),n("span",{class:"token operator"},":"),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token string-property property"},"'symbol'"),n("span",{class:"token operator"},":"),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token string-property property"},"'function'"),n("span",{class:"token operator"},":"),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token keyword"},"return"),s(" map"),n("span",{class:"token punctuation"},"["),s("res"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"?"),s(" type "),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'object'"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),b=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[s(`
`),n("span",{class:"token doc-comment comment"},`/**
 * \u901A\u7528 \u7C7B\u578B\u5224\u65AD 
 * \u53EF\u4EE5\u5224\u65AD\u6240\u6709\u7C7B\u578B
 *  Number String Boolean Null Undefined Symbol bigint
 *  Object Array Date RegExp Function 
 * */`),s(` 
`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"isType"),n("span",{class:"token punctuation"},"("),s("obj"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// if (typeof obj !== 'object') return false"),s(`
  `),n("span",{class:"token comment"},"// const typeString = Object.prototype.toString.call(obj)"),s(`
  `),n("span",{class:"token comment"},"// let flag"),s(`
  `),n("span",{class:"token comment"},"// switch (type) {"),s(`
  `),n("span",{class:"token comment"},"//   case 'Array':"),s(`
  `),n("span",{class:"token comment"},"//     flag = typeString === '[object Array]' "),s(`
  `),n("span",{class:"token comment"},"//     break;"),s(`
  `),n("span",{class:"token comment"},"//   case 'Date':"),s(`
  `),n("span",{class:"token comment"},"//     flag = typeString === '[object Date]' "),s(`
  `),n("span",{class:"token comment"},"//     break;"),s(`
  `),n("span",{class:"token comment"},"//   case 'RegExp':"),s(`
  `),n("span",{class:"token comment"},"//     flag = typeString === '[object RegExp]' "),s(`
  `),n("span",{class:"token comment"},"//     break;"),s(`
  `),n("span",{class:"token comment"},"//   default:"),s(`
  `),n("span",{class:"token comment"},"//     flag = false"),s(`
  `),n("span",{class:"token comment"},"//     break;"),s(`
  `),n("span",{class:"token comment"},"// }"),s(`
  `),n("span",{class:"token comment"},"// return flag"),s(`
  `),n("span",{class:"token keyword"},"return"),s(" Object"),n("span",{class:"token punctuation"},"."),s("prototype"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toString"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"call"),n("span",{class:"token punctuation"},"("),s("obj"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"slice"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"8"),n("span",{class:"token punctuation"},","),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toLowerCase"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"// \u7C7B\u578B\u5224\u65AD - curry\u67EF\u529B\u5316\u51FD\u6570"),s(`
`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"isType_curry"),n("span",{class:"token punctuation"},"("),s("type"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token keyword"},"function"),n("span",{class:"token punctuation"},"("),s("obj"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"return"),s(" Object"),n("span",{class:"token punctuation"},"."),s("prototype"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toString"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"call"),n("span",{class:"token punctuation"},"("),s("obj"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"[object "),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),n("span",{class:"token keyword"},"type"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"]"),n("span",{class:"token template-punctuation string"},"`")]),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token keyword"},"let"),s(" isArray "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"isType_curry"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'Array'"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token keyword"},"let"),s(" isNumber "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"isType_curry"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'Number'"),n("span",{class:"token punctuation"},")"),s(`

`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function v(y,f){const t=o("CodeGroupItem"),c=o("CodeGroup");return p(),i("div",null,[r,k,a(c,null,{default:e(()=>[a(t,{title:"instanceof"},{default:e(()=>[m]),_:1}),a(t,{title:"typeof"},{default:e(()=>[d]),_:1}),a(t,{title:"\u7C7B\u578B\u5224\u65AD"},{default:e(()=>[b]),_:1})]),_:1})])}var _=l(u,[["render",v],["__file","typeOf.js.html.vue"]]);export{_ as default};

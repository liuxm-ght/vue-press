const path = require('path')
const { defaultTheme } = require('@vuepress/theme-default')
const routerJson1 = require('../../vuePressMap1.json')
const routerJson2 = require('../../vuePressMap2.json')
const routerJson3 = require('../../vuePressMap3.json')
const { mediumZoomPlugin } = require('@vuepress/plugin-medium-zoom')
module.exports = {
  lang: 'zh-CN',
  title: 'Symon の blog',
  base:'/vue-press/',
  description: '不管开始于哪个时刻,都是对的时刻。',
  port: 8004,
  theme: defaultTheme({
    // 默认主题配置
    navbar: [
      {
        text: '首页',
        link: '/',
      },
      {
        text: '个人',
        link: '/person/intro.md',
      },
      {
        text: '项目',
        link: '/project/intro.md',
      },
      {
        text: '博客',
        link: '/source/intro.md',
      },
    ],
    sidebar: {
      '/source/':routerJson1,
      '/project/':routerJson2,
      '/person/':routerJson3,
    }
    // [
    //   {
    //     text: '代码规范',
    //     link: '/代码规范/',
    //     collapsable: true,
    //     children: [
    //       {
    //         text: '单元测试',
    //         link: '单元测试',
    //         collapsable: false,
    //       },
    //       {
    //         text: '构建包测试',
    //         link: '构建包测试',
    //         collapsable: true,
    //         children: [
    //           {
    //             text: '测试流程',
    //             link: '/source/代码规范/构建包测试/测试流程.md',
    //           }
    //         ],
    //       },
    //     ],
    //   // 字符串 - 页面文件路径
    //   // '/foo/bar.md',
    //   },
    // ]
  }),
  plugins: [
    'demo-container',
    mediumZoomPlugin({
      // 配置项
    }),
  ], // 配置插件
}
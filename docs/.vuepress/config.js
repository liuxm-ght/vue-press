const path = require('path')
const { defaultTheme } = require('@vuepress/theme-default')
const routerJson1 = require('../../vuePressMap1.json')
const routerJson2 = require('../../vuePressMap2.json')
const routerJson3 = require('../../vuePressMap3.json')
const { mediumZoomPlugin } = require('@vuepress/plugin-medium-zoom')
const { backToTopPlugin } = require('@vuepress/plugin-back-to-top')

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
        children: [
          { text: "介绍", link: '/project/intro.md' },
          { 
            text: "个人项目", 
            children: [
              { text: "前端自动化部署", link: '/project/个人项目/前端自动化部署.md' },
              { text: "文件上传项目", link: '/project/个人项目/文件上传项目.md' }
            ] 
          },
          { 
            text: "公司项目", 
            children: [
              { text: "TMX-UI库项目", link: '/project/公司项目/TMX-UI库项目.md' },
              { text: "TMXIot核心SaaS系统", link: '/project/公司项目/TMXIot核心SaaS系统.md' },
              { text: "TMX文档中心Node项目", link: '/project/公司项目/TMX文档中心Node项目.md' },
              { text: "包活干SaaS系统", link: '/project/公司项目/包活干SaaS系统.md' },
              { text: "包活干小程序项目", link: '/project/公司项目/包活干小程序项目.md' },
              { text: "鲸鱼阅读APP", link: '/project/公司项目/鲸鱼阅读APP.md' },
            ] 
          },
        ]
      },
      {
        text: '博客',
        children: [
          { text: "介绍", link: '/source/intro.md' },
          { text: "技术文档", link: '/source/intro.md' },
        ],
      },
    ],
    sidebar: {
      '/source/':routerJson1,
      '/project/':routerJson2,
      '/person/':routerJson3,
    },
    lastUpdated:false,
    backToHome:'Home'
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
    backToTopPlugin(),
  ], // 配置插件
}
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
import ElementPlus from 'element-plus'
import './style/index.css'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import { defineClientConfig } from '@vuepress/client'

export default defineClientConfig({
  enhance({ app }) {
    app.use(ElementPlus)
  },
})

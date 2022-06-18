// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { defineClientConfig } from '@vuepress/client'

export default defineClientConfig({
  enhance({ app }) {
    app.use(ElementPlus)
  },
})

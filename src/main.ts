/*
 * @Author: hy yinvia1018@163.com
 * @Date: 2023-11-17 18:23:09
 * @LastEditors: hy yinvia1018@163.com
 * @LastEditTime: 2023-12-06 10:08:01
 * @FilePath: \IFRAME-tree -使用本地的html\src\main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import store from './store'
const app = createApp(App)
app.use(router)
app.use(ElementPlus)
app.use(store)
app.mount('#app')


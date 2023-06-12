import { createApp } from 'vue'
import { createPinia } from 'pinia'
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import 'normalize.css'
import 'element-plus/dist/index.css'
import './style.css'
import App from './App.vue'
import router  from './router'
const app = createApp(App)
// 注册elementplus图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
}
app.use(createPinia())
app.use(router);
app.mount('#app')

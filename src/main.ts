import { createApp } from 'vue'
import App from './App'
import router from './router'
import store from './store'
// 这里引入 them的index.css会报错
import "element-plus/dist/index.css";
import elementPlus from 'element-plus'

createApp(App).use(router).use(store).use(elementPlus).mount('#app')
// 配置文件改变需重启项目
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import getVant from '@/plugins/index';

const app = createApp(App)
app.use(store)
getVant(app)
app.use(router).mount('#app')

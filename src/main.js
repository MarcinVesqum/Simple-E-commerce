import { createApp } from 'vue'
import App from './App.vue'
import VueAxios from 'vue-axios'
import router from './router/index'
import './assets/index.css'


const app = createApp(App)
    app.use(router)
    app.use(VueAxios, axios)
    app.mount('#app')

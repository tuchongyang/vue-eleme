import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/rem/rem'
import './assets/css/main.scss'

const app = createApp(App)

app.use(store)
.use(router)
.mount('#app')

import './assets/style.css'

import { createApp } from 'vue'
import App from './App.vue'
import Vue3Toastify from 'vue3-toastify'

const app = createApp(App)

app.use(Vue3Toastify)
app.mount('#app')

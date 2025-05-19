import { createApp } from 'vue'
import uindow from '@uindow/components'
import "./styles/index.scss"
import router from './router'
import App from './App.vue'

const app = createApp(App)

app.use(uindow)
app.use(router)
app.mount('#app')
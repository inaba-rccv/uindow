import uindow from '@uindow/components'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './styles/index.scss'

const app = createApp(App)

app.use(uindow)
app.use(router)
app.mount('#app')

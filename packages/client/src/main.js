import uindow from 'uindow/src'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './styles/index.scss'

const app = createApp(App)

const modules = import.meta.glob('./components/*.vue', { eager: true })
Object.entries(modules).forEach(([path, module]) => {
  const componentName = path
    .split('/')
    .pop()
    .replace(/\.\w+$/, '')
  app.component(componentName, module.default)
})

app.use(uindow)
app.use(router)
app.mount('#app')

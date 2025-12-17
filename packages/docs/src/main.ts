// import { install as uindow } from '@uindow/components'
import uindow from 'uindow'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'uindow/style'
import './styles/index.scss'

const app = createApp(App)

const modules = import.meta.glob('./components/*.vue', { eager: true })
Object.entries(modules).forEach(([path, module]: [string, any]) => {
  const componentName = path.split('/').pop()!.replace(/\.\w+$/, '')
  app.component(componentName, module.default)
})

app.use(uindow)
app.use(router)
app.mount('#app')

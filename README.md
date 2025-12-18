# uindow

Vue3 component library

## What is uindow

Uindow is the OPENING visual style imitation component library used by the famous LOLI KAMI YOUTUBER "しぐれうい" live broadcast

## Usage

```bash
pnpm add uindow
```

```js
// main.js
import uindow from 'uindow'
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

app.use(uindow)
app.mount('#app')
```

## TODO

Add component animation effects

## Thanks

- [vite](https://github.com/vitejs/vite)
- [vueuse](https://github.com/vueuse/vueuse)

## Update

### 1.1.2

Fixed the issue of global configuration loading failure

### 1.1.5

Fix the bug of type error when introducing ts

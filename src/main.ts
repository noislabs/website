import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Particles from 'vue3-particles'

import './styles/main.scss'

const app = createApp(App)

// sadly needed
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
app.use(Particles)
app.use(router)

app.mount('#app')

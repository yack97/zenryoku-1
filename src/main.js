import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'


const pinia = createPinia()
// Crear la aplicación Vue
const app = createApp(App)

// Usar el enrutador
app.use(router)

app.use(pinia)
// Montar la aplicación en el elemento con id 'app'
app.mount('#app')
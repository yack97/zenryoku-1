import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

// Crear la aplicación Vue
const app = createApp(App)

// Usar el enrutador
app.use(router)

// Montar la aplicación en el elemento con id 'app'
app.mount('#app')
/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'
//import 'vuetify/styles'
import './scss/main.scss'

// Composables
import { createApp } from 'vue'
import router from './router'

// Plugins
import { registerPlugins } from '@/plugins'
import vuetify from './plugins/vuetify'
const app = createApp(App)

app.config.globalProperties.$serverIP = 'https://e503-150-254-4-72.eu.ngrok.io/api';

registerPlugins(app)

app
  .use(vuetify).use(router)
  .mount('#app')

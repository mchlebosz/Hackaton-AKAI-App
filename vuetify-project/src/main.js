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

// Plugins
import { registerPlugins } from '@/plugins'
import vuetify from './plugins/vuetify'
const app = createApp(App)

registerPlugins(app)

app
  .use(vuetify)
  .mount('#app')

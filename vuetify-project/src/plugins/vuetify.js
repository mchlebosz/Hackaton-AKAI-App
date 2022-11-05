/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

 import { createApp } from 'vue'

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import colors from 'vuetify/lib/util/colors'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'dark',
    themes: {
      dark: {
        colors: {
          background: "#282828",
          primary: "#F2F2F2", // #FFCDD2
          secondary: "#D0BCFF",
          accent: "#381E72",
          error: '#F2B8B5',
          info: '#2196F3',
          success: '#94D48F',
          warning: '#FFC107',
        }
      },
      light: {
        colors: {
          background: "#F2F2F2",
          primary: "#282828", // #FFCDD2
          secondary: "#D0BCFF",
          accent: "#381E72",
          error: '#F2B8B5',
          info: '#2196F3',
          success: '#94D48F',
          warning: '#FFC107',

        }
      },
    },
  },
})

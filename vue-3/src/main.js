import { createApp } from "vue";
import App from "./App.vue";
//import "../src/sass/main.scss";
import "mdb-vue-ui-kit/css/mdb.min.css";

import "./assets/main.css";
import "./sass/main.scss";

import "bootstrap-icons/font/bootstrap-icons.css";
/*
Bootstrap Icons usage:
<i class="bi bi-alarm"></i>

*/

//Fontawesome
/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(faUserSecret);

/*
Fontawesome usage:
<fa-icon icon="fa-solid fa-user-secret" />
*/

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const vuetify = createVuetify({
  components,
  directives,
});

createApp(App).use(vuetify).component("fa-icon", FontAwesomeIcon).mount("#app");

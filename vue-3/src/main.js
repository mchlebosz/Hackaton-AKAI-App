import { createApp } from "vue";
import App from "./App.vue";

import "bootstrap/dist/css/bootstrap.css";
import "./assets/main.css";

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

createApp(App).component("fa-icon", FontAwesomeIcon).mount("#app");

import "bootstrap/dist/js/bootstrap.js";
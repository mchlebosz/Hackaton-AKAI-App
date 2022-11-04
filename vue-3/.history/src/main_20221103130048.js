import { createApp } from "vue";
import App from "./App.vue";

import "bootstrap/dist/css/bootstrap.css";
import "./assets/main.css";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";

import "bootstrap-icons/font/bootstrap-icons.css";

/* add icons to the library */
library.add(faUserSecret);

createApp(App).component("fa-icon", FontAwesomeIcon).mount("#app");

import "bootstrap/dist/js/bootstrap.js";
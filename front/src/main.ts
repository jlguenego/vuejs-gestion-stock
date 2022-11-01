import "./assets/main.scss";

import { createPinia } from "pinia";
import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";
import { vFocus } from "@gestionstock/common";
import { FontAwesomeIcon } from "./icons/icons";
import { DynamicTitle } from "@gestionstock/common-front";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.directive("focus", vFocus);
app.component("dynamic-title", DynamicTitle);
app.component("fa-icon", FontAwesomeIcon);

app.mount("#app");

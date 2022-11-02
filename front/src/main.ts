import "./assets/main.scss";

import { createPinia } from "pinia";
import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";
import { FontAwesomeIcon } from "./icons/icons";
import { commonFrontPlugin } from "@gestionstock/common-front";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(commonFrontPlugin, {});
app.component("fa-icon", FontAwesomeIcon);

app.mount("#app");

import "./assets/main.scss";

import { createPinia } from "pinia";
import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";
import { vFocus } from "@gestionstock/common";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.directive("focus", vFocus);

app.mount("#app");

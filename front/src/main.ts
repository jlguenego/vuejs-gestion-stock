import "./assets/main.scss";

import { createPinia } from "pinia";
import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";
import { FontAwesomeIcon } from "./icons/icons";
import {
  commonFrontPlugin,
  type CommonFrontPluginOptions,
} from "@gestionstock/common-front";

const app = createApp(App);

app.use(createPinia());
app.use(router);

const commonFrontPluginOptions: CommonFrontPluginOptions = {
  defaultTitlePrefix: "Gestion Stock",
};
app.use(commonFrontPlugin, commonFrontPluginOptions);

app.component("fa-icon", FontAwesomeIcon);

app.mount("#app");

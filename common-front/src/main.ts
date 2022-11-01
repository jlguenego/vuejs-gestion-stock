import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import DynamicTitle from "./components/DynamicTitle.vue";

const app = createApp(App);
app.component("dynamic-title", DynamicTitle);
app.mount("#app");

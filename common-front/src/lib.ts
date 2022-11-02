import { App, Plugin } from "vue";
import DynamicTitle from "./components/DynamicTitle.vue";
import { vFocus } from "./directives/v-focus";

const commonFrontPlugin = (app: App<Element>, options: {}) => {
  app.directive("focus", vFocus);
  app.component("dynamic-title", DynamicTitle);
};

export { DynamicTitle, vFocus, commonFrontPlugin };

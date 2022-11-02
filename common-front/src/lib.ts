import { App, Plugin } from "vue";
import DynamicTitle from "./components/DynamicTitle.vue";
import { vFocus } from "./directives/v-focus";
import { currency } from "./filters/currency";
import { DEFAULT_TITLE_PREFIX_KEY } from "./keys";

interface CommonFrontPluginOptions {
  defaultTitlePrefix?: string;
}

const commonFrontPlugin = (
  app: App<Element>,
  options: CommonFrontPluginOptions
) => {
  app.directive("focus", vFocus);
  app.component("dynamic-title", DynamicTitle);
  options.defaultTitlePrefix &&
    app.provide(DEFAULT_TITLE_PREFIX_KEY, options.defaultTitlePrefix);

  app.config.globalProperties.$appName =
    options.defaultTitlePrefix ?? "Nice App";

  app.config.globalProperties.$currency = currency;
};

export {
  DynamicTitle,
  vFocus,
  commonFrontPlugin,
  type CommonFrontPluginOptions,
};

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $appName: string;
    $currency: typeof currency;
  }
}

import { createApp } from "vue";
import { createPinia } from "pinia";
import { MotionPlugin } from "@vueuse/motion";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import App from "./App.vue";
import router from "./router";
import ElementPlus from "element-plus";
import Api from "@/api";
import VueDOMPurifyHTML from "vue-dompurify-html";

import "element-plus/dist/index.css";
import "@/assets/styles/reset.css";
import "@/assets/styles/var.css";
import "@/assets/styles/element-plus.less";
import "@/styles/var.css";
import "@/styles/reset.less";
import "@/styles/common.less";
import "@/styles/custom.less";

import "vant/es/toast/style";
import "vant/es/dialog/style";
import "vant/es/notify/style";
import "vant/es/image-preview/style";
// console.log(Api, "---");
const app = createApp(App);
window["GAPI"] = Api;
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
app.use(VueDOMPurifyHTML);
app.use(pinia);
app.use(router);
app.use(MotionPlugin);
app.use(ElementPlus);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.mount("#app");

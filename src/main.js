import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

// Icon librarys
import { Icon } from "@iconify/vue";
import "@fortawesome/fontawesome-free/js/all";

// Global css file
import "@/assets/css/main.css";
import "./assets/tailwind.css";

import "flowbite";

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

const app = createApp(App).use(pinia).use(router);

app.component("Icon", Icon);

app.mount("#app");

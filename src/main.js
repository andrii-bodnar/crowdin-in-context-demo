import { createApp } from "vue";
import { createI18n } from "vue-i18n";
import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

import { languages } from "@/locales";
import { defaultLocale } from "@/locales";

const i18n = createI18n({
  locale: defaultLocale,
  messages: languages,
});

const app = createApp(App);

app.use(router);
app.use(i18n);

app.mount("#app");

import { createI18n } from "vue-i18n";
import uz from "../locales/uz.json";
import ru from "../locales/ru.json";

let lang = localStorage.getItem('language') 
export default defineNuxtPlugin(({ vueApp }) => {
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale:lang,
    messages: {
      uz,
      ru,
    },
  });

  vueApp.use(i18n);
});

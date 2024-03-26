import { createI18n } from "vue-i18n";
import ru from "../locales/ru.json";
import uz from "../locales/uz.json";



export default defineNuxtPlugin(({ vueApp }) => {

  let langData 
if (process.client) {
  let storogeData = window.localStorage.getItem('language');
  if (storogeData) {
    langData = storogeData
  } else {
    langData = 'uz'
  }
}
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: 'uz',
    fallbackLocale: 'uz',
    formatFallbackMessages:true,
    messages: {
      uz,
      ru,
    },
  });

  vueApp.use(i18n);
});

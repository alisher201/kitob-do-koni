import { defineStore } from "pinia";
import { useRuntimeConfig } from "nuxt/app";

// console.log(config.public.siteUrl);
export const useTestTStore = defineStore("home", {

  state: () => ({
    url: useRuntimeConfig().public.siteUrl,
    banner: {},
    site_bar: {},
    category: {},
    books: {},
  }),

  actions: {
    fechData() {
      $fetch(`${this.url}/book/category`)
        .then((res) => {
          this.category = res.result.result;
          console.log(res.result.result);
        })
    },
    async fechBooks() {
      return await $fetch(`${this.url}/carusel-books`)
        .then((res) => {
          this.books = res;
          console.log(res);
        })
    },
    async fechBanner() {
      return await $fetch(`${this.url}/blog`)
        .then(res => {
          let banner = res.filter(el => el.is_banner === 1)
          let site_bar = res.filter(el => el.is_banner === 0)
          this.banner = banner
          this.site_bar = site_bar
        })
    }
  }
})
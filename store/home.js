  import { defineStore } from "pinia";
  import { useRuntimeConfig } from "nuxt/app";
  // import {getData} from '../api'
  import { book_category } from "../utils/home"

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
      async fechData() {
        return await book_category.get()
          .then((res) => {
            this.category = res.result.result;
          })
      },
      async fechBooks() {
        return await $fetch(`${this.url}/carusel-books`)
          .then((res) => {
            this.books = res;
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
      },
      

    }
  })
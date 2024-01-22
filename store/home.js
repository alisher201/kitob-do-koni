import { defineStore } from "pinia";
import { useRuntimeConfig } from "nuxt/app";
import { register } from "../utils/home"
import { book_category } from "../utils/home"
export const useTestTStore = defineStore("home", {
  state: () => ({
    url: useRuntimeConfig().public.siteUrl,
    banner: {},
    site_bar: {},
    word: {},
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
    async registerUser(data) {
      return await register.create(data)
        .then(res => {
          localStorage.setItem('jwtToken', res.result.token)
          localStorage.setItem('userFullName', res.result.full_name)
        })
    }
  }
})

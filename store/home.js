import { defineStore } from "pinia";
import { useRuntimeConfig } from "nuxt/app";
import { register, book_category, searchTop, search } from "../utils/home"
export const useTestTStore = defineStore("home", {
  state: () => ({
    url: useRuntimeConfig().public.siteUrl,
    banner: {},
    site_bar: {},
    word: {},
    category: {},
    books: {},
    serchResult: null,
    searchValue: null,
    Searchhistory: null,
    bookSearchdata: null,
    productSearch: null

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
    },
    async fechSearchTop() {
      return await searchTop.get()
        .then(res => {
          // console.log(res);    
          this.word = res
        })
    },

    async searchData(data) {
      return await $fetch(`${this.url}/product/search?name=${data}`)
        .then(res => {
          this.productSearch = res
        })

    },
    async searchProductData(data) {
      return await $fetch(`${this.url}/product/search?name=${data}`)
        .then(res => {
          this.serchResult = res
        })


    },
    async SearchHistoryBook() {
      return await search.get()
        .then(res => {
          if (res.success) {
            this.Searchhistory = res

          }
        })
    },
    async createHistoryBook(data) {
      return await search.create(data)
    },
    async dealteSearch(id) {
      return await search.delate(id)
    },
    async fetchBookSearch(data) {
      return await $fetch(`${this.url}/book/search?name=${data}`)
        .then(res => {
          if (res.success) {
            this.bookSearchdata = res
            console.log(res);

          }
        })
    }
  }
})

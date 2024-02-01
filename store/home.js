import { defineStore } from "pinia";
import { useRuntimeConfig } from "nuxt/app";
import { register, book_category, searchTop, search, uuId } from "../utils/home"
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

    // book Category get
    async fechData() {
      return await book_category.get()
        .then((res) => {
          this.category = res.result.result;
        })
    },

    // book carousel get
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

    // user register 
    async registerUser(data) {
      return await register.create(data)
        .then(res => {
          localStorage.setItem('jwtToken', res.result.token)
          localStorage.setItem('userFullName', res.result.full_name)
        })
    },

    // search top
    async fechSearchTop() {
      return await searchTop.get()
        .then(res => {
          this.word = res
        })
    },

    // product serach data watch
    async searchData(data) {
      return await $fetch(`${this.url}/product/search?name=${data}`)
        .then(res => {
          this.productSearch = res
        })

    },

    // enter search book product
    async searchProductData(data) {
      return await $fetch(`${this.url}/product/search?name=${data}`)
        .then(res => {
          this.serchResult = res
        })
    },

    // search history get 
    async SearchHistoryBook() {
      return await search.get()
        .then(res => {
          if (res.success) {
            this.Searchhistory = res
          }
        })
    },

    // History post method
    async createHistoryBook(data) {
      return await search.create(data)
    },
        
    // delate history
    async dealteSearch(id) {
      return await search.delate(id)
    },

    // book Search  api 
    async fetchBookSearch(data) {
      return await $fetch(`${this.url}/book/search?name=${data}`)
        .then(res => {
          if (res.success) {
            this.bookSearchdata = res
          }
        })
    },

    //uuId guest post method
    async uuIdPost(data) {
      return await uuId.create(data)
      .then(res => {
        if(res?.success) {
          localStorage.setItem('jwtToken', res.result.token)
          localStorage.setItem('userFullName', res.result.full_name)
          localStorage.setItem('type', res.result.type)

        }
      })
    }
  }
})

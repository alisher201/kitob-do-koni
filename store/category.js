import { defineStore } from "pinia";
import { useRuntimeConfig } from "nuxt/app";
import { book_category } from "../utils/home"
export const useCategory = defineStore("category", {

  state: () => ({
    url: useRuntimeConfig().public.siteUrl,
    category: {},
    katalog: {},
    katalogpic: {},
  }),
  actions: {
    async fetchCategory() {
      return await book_category.get()
        .then((res) => {
          this.category = res.result.result;
        })
    },
     fetchKatalog(id) {
       $fetch(`${this.url}/category/parent/kytab/${id}`)
        .then((res) => {
          this.katalog = res;
          // console.log(res);
        })
    },
     fetchKatalogPic(id) {
       $fetch(`${this.url}/category/books/${id}`)
        .then((res) => {
          this.katalogpic = res.result;
          console.log(res);
        })
    },
  }
})
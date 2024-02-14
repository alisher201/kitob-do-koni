import { defineStore } from "pinia";
import { useRuntimeConfig } from "nuxt/app";
import { book_category } from "../utils/home"
import { categoryParent } from '@/utils/category'
export const useCategory = defineStore("category", {

  state: () => ({
    url: useRuntimeConfig().public.siteUrl,
    category: {},
    katalog: {},
    katalogpic: {},
    catologType: null,
    errorCategory: null

  }),
  actions: {
    async fetchCategory() {
      return await book_category.get()
        .then((res) => {
          this.category = res.result.result;
        })
    },


    async fetchKatalog(id) {
      return await categoryParent.getOne(id)
        .then((res) => {
          this.katalog = res;
        })
    },



    fetchKatalogPic(id) {
      $fetch(`${this.url}/category/books/${id}`)
        .then((res) => {
          this.katalogpic = res.result;
        })
    },
    // kitob type bo'ycha so'rov
    async fetchCategoryType(id, type) {
      let request = type == 'all' ? `${this.url}/category/books/${id}` : `${this.url}/category/books/${id}?type=${type}`
      return await $fetch(request)
        .then((res) => {
          console.log(res, 'res');
          this.catologType = res.result;
        })
        .catch(error => {
          if (error.response.status == 404) {
            this.errorCategory = error.response.status
          }
          else {
            this.errorCategory = 'ABDULLOHNI XATOSI  :))))'
          }
        })

    },

  }
})
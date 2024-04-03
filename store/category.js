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

    //   bita categorga so'rov yuboraish
    async fetchKatalog(id) {
      return await categoryParent.getOne(id)
        .then((res) => {
          this.katalog = res;
        })
    },


    // bu category ga oid kitoblar ga slo'rov yuboradi
    fetchCatgoryBooks(id) {
      $fetch(`${this.url}/category/books/${id}`)
        .then((res) => {
          this.errorCategory = null
          this.catologType = res.result;

        })
        .catch(error => {
          if (error.response?.status == 404) {
            this.errorCategory = error.response.status
          }
          else {
            this.errorCategory = 'Malumot topilmadi'
          }
        })

    },

    async fetchCategoryType(id, type, lang, price_from, price_to) {

      let request = null

      if (type == 'all' && lang == 'all') {
        // request = `${this.url}/category/books/${id}?price_from=${price_from}&price_to=${price_to}`
        request = `${this.url}/category/books/${id}`

      }
      else if (type == 'all') {
        // request = `${this.url}/category/books/${id}?lang=${lang}&price_from=${price_from}&price_to=${price_to}`
        request = `${this.url}/category/books/${id}`

      }
      else if(lang == 'all'){
        // request = `${this.url}/category/books/${id}?type=${type}&price_from=${price_from}&price_to=${price_to}`
        request = `${this.url}/category/books/${id}`

      }
      else {
        // request = `${this.url}/category/books/${id}?type=${type}&lang=${lang}&price_from=${price_from}&price_to=${price_to}`
        request = `${this.url}/category/books/${id}`


      }


      return await $fetch(request)
        .then((res) => {
          this.errorCategory = null
          this.catologType = res.result;
        })
        .catch(error => {
          if (error.response?.status == 404) {
            this.errorCategory = error.response.status
          }
          else {
            this.errorCategory = 'ABDULLOHNI XATOSI  :))))'
          }
        })

    },

  }
})
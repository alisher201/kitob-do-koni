import { defineStore } from "pinia";
import { useRuntimeConfig } from "nuxt/app";
import { book_category } from "../utils/home"
export const useCategory = defineStore("home", {

  state: () => ({
    url: useRuntimeConfig().public.siteUrl,
    category: {},
  }),
  actions: {
    async fechCategory() {
      return await book_category.get()
        .then((res) => {
          this.category = res.result.result;

        })
    }
  }
})
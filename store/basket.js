import { defineStore } from "pinia";
import { useRuntimeConfig } from "nuxt/app";

export const useBasketStore = defineStore("test", {
  state: () => ({
    url: useRuntimeConfig().public.siteUrl
  }),
  
  actions: {
      async basketData(){
        return await $fetch(`${this.url}/cart`)
        .then(res => {
            console.log(res);
        })
     },
  }
});
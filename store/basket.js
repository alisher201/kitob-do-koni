import { defineStore } from "pinia";
import { useRuntimeConfig } from "nuxt/app";

export const useTestStore = defineStore("test", {
  state: () => ({
    url: useRuntimeConfig().public.siteUrl
  }),
  
  actions: {
    async fetchData() {
        try {
          const response = await fetch(`${this.url}/cart`);
          const data = await response.json();
          console.log(data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
  }
});
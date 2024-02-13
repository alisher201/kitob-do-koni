import { defineStore } from "pinia";
import { useRuntimeConfig } from "nuxt/app";
import { cart, getCart } from "../utils/basket";

export const useBasketStore = defineStore("basket", {
  state: () => ({
    url: useRuntimeConfig().public.siteUrl,
    basket:'data'
  }),
  
  actions: {
    // async basketData() {
    //     try {
    //       const response = await $fetch(`${this.url}/cart`);
    //       const data = await response.json();
    //       console.log(data);
    //     } catch (error) {
    //       console.error("Error fetching data:", error);
    //     }
    //   }
      async basketAdd(data){
        return await cart.create(data)
        .then((res) => {
          this.basket = res;
        })
     },
     async basketGet(data) {
      return await getCart.get(data)
      .then((res) => {
        this.basket = res;
      })
     }
  }
});
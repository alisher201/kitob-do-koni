import { defineStore } from "pinia";
import { useRuntimeConfig } from "nuxt/app";
import { cart, getCart } from "../utils/basket";
export const useBasketStore = defineStore("basket", {
  state: () => ({
    url: useRuntimeConfig().public.siteUrl,
    basket:'data'
  }),
  
  actions: {
      async basketAdd(data){
        return await cart.create(data)
        .then((res) => {
          this.basket = res;
          console.log(res);
        })
     },
     async basketGet(data) {
      return await getCart.get(data)
      .then((res) => {
        this.basket = res;
        console.log(res);
      })
     }
  }
});
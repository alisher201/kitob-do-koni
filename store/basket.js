import {
  defineStore
} from "pinia";
import {
  useRuntimeConfig
} from "nuxt/app";
import {
  allDelete,
  cart,
  getCart,
  getLike,
  likeAdd
} from "../utils/basket";

export const useBasketStore = defineStore("basket", {
  state: () => ({
    url: useRuntimeConfig().public.siteUrl,
    basket: null,
    like: null,
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
    async basketAdd(data) {
      return await cart.create(data)
    },
    
    async basketDelete(data) {
      return await cartDelete.delate(data)
    },
    
    async removeCarts(data) {
      return await allDelete.deleteAll(data)
    },
    async basketGet(data) {
      return await getCart.get(data)
        .then((res) => {
          this.basket = res.result;
        })
    },
    async addFavourite(data) {
      return await likeAdd.create(data)
    },
    async favourite(data) {
      return await getLike.get(data)
        .then((res) => {
          this.like = res.result
        })
    },
    async favouriteDelete(id, type) {
      return await likeDelete.likeDelete(id, type)
    },
  }
});
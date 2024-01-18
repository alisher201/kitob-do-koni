import { defineStore } from "pinia";
import { useRuntimeConfig } from "nuxt/app";
// import {getData} from '../api'
import { getData, createData, delateJson, getUserId } from "../utils/home"

// console.log(config.public.siteUrl);
export const useTestTStore = defineStore("home", {

  state: () => ({
    url: useRuntimeConfig().public.siteUrl,
    banner: {
    },
    site_bar: {},
    word: {},
  }),
  // getters: {
  //     banner_data: (state) => state.banner,
  //   },

  actions: {
    fechData() {
      $fetch(` ${this.url}/book/category`)
    },

    async placeholder() {
      return await getData.get()
    },

    async dataFetchfor(data) {
      return await createData.create(data)
    },
    async delateUser(id) {
      return await delateJson.delate(id)
    },
    async getUserData(id) {
      return getUserId.getOne(id)
    }



  }
})
import { defineStore } from "pinia";
import { useRuntimeConfig } from "nuxt/app";
import { register } from "../utils/home"
// import {jwtAuth} from "../utils/authServece"



export const useTestTStore = defineStore("home", {

  state: () => ({
    url: useRuntimeConfig().public.siteUrl,
    banner: {
    },
    site_bar: {},
    word: {},
    token: 'tokenbor'
    
  }),


  actions: {
    fechData() {
      $fetch(` ${this.url}/book/category`)
    },

    placeholder() {
      return $fetch(`${this.url}/todos`)
    },





    async registerUser(data) {
      return await register.create(data)
        .then(res => {
          localStorage.setItem('jwtToken', res.result.token)
          localStorage.setItem('userFullName', res.result.full_name)




        })
    }




  }
})
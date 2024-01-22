import { defineStore } from "pinia";
import { useRuntimeConfig } from "nuxt/app";
import { register } from "../utils/home"
// import {jwtAuth} from "../utils/authServece"

// console.log(config.public.siteUrl);
export const useTestTStore = defineStore ("home",{
    
    state:() => ({
        url: useRuntimeConfig().public.siteUrl,
        banner: {
        },
        site_bar: {},
        word:{},
        students:{}
    }),
    // getters: {
    //     banner_data: (state) => state.banner,
    //   },
    
    actions: {


      async registerUser(data) {
        return await register.create(data)
          .then(res => {
            localStorage.setItem('jwtToken', res.result.token)
            localStorage.setItem('userFullName', res.result.full_name)
          })
      },

      
        fechData() {
          $fetch(` ${this.url}/book/category`)
        },
        async fechBanner(){
           return await $fetch(`${this.url}/blog`)
           .then(res => {
                let banner = res.filter(el => el.is_banner === 1)
                let site_bar = res.filter(el => el.is_banner === 0)          
                this.banner = banner
                this.site_bar = site_bar
           })
        },


        async fechSearch(){
            return await $fetch(`${this.url}/search-history`)
            .then(res => {
                console.log(res);    
            })
         },


         async fechSearchTop(){
            return await $fetch(`${this.url}/top-search`)
            .then(res => {
                // console.log(res);    
                this.word= res
            })
         },

         async SearchHistory() {
            return await $fetch(`${this.url}/search-history/create`)
            .then(res => {
                // console.log(res);     
                                    
                // this.students = res
            })
        }
         
    }
    
})
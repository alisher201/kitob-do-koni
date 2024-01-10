import { defineStore } from "pinia";
import { useRuntimeConfig } from "nuxt/app";


// console.log(config.public.siteUrl);
export const useTestTStore = defineStore ("home",{
    
    
    state:() => ({
        url: useRuntimeConfig().public.siteUrl
       
    }),
    actions: {
        fechData() {
          $fetch(` ${this.url}/book/category`)
        }

      
    }

    

})
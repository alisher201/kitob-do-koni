import { defineStore } from "pinia";
import { useRuntimeConfig } from "nuxt/app";


export const useLogin = defineStore ("login",{
    
    state:() => ({
        url: useRuntimeConfig().public.siteUrl      
        
    }),
  
    
    actions: {
        async loginRegistr() {
            await $fetch(`${this.url}/login`, {
                method: Post
            })
        }
       
      
      
      
    }
})
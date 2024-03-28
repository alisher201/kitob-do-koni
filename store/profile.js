import { defineStore } from "pinia";
import { profile_history, profile_image, profile_get,profile_setting,profile_password,profile_notification,profile_my_books } from '../utils/profile'
import { useRuntimeConfig } from "nuxt/app";

export const ProfileHistory = defineStore("test", {
  state: () => ({
    profile: {},
    settings: {},
    notifications: {},
    books: {},
    url: useRuntimeConfig().public.siteUrl,


  }),
  actions: {
    async OrderHistory() {
      return await profile_history.get()
        .then((res) => {
          this.profile = res;
        })
    },
    async Settings(data) {
      return await profile_setting.create(data)
    },
    async Setting() {
      return await profile_get.get()
        .then((res) => {
          this.settings = res.result
        })
    },
    async Images(data) {
      //  await  profile_image.create(data,)
      $fetch(`${this.url}/profile/image-save
      `, {
        method: 'POST',
        body: data
      //  headers: {'Content-Type': 'form-data' }
    })
    },
    async Password(data){
      return await profile_password.create(data)
    },
    async Notification(){
      return await profile_notification.get()
        .then((res)=>{
          this.notifications = res
        })
    },
    async Book(){
      return await profile_my_books.get()
      .then((res)=>{
        this.books = res
      })
    },
   
  }
})
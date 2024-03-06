import { defineStore } from "pinia";
import { useRuntimeConfig } from "nuxt/app";
import { login, forgetpassword } from '@/utils/login'


export const useLogin = defineStore("login", {

    state: () => ({
        url: useRuntimeConfig().public.siteUrl,
    }),


    actions: {
        async loginRegistr(data) {
            await $fetch(`${this.url}/login`, {
                method: 'Post',
                body: {
                    data
                }
            })
        },
        async loginUser(data) {
            return await login.create(data)
        },
        async forgetPassword(data) {
            return await forgetpassword.create(data)
        },
        async checkforgetpassword(data) {
            return await checkforgetpassword.create(data)
        }
    }
})
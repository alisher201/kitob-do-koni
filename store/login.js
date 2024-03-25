import { defineStore } from "pinia";
import { useRuntimeConfig } from "nuxt/app";
import { login, forgetpassword,checkforgetpassword,changepassword } from '@/utils/login'


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
                .then(res => {
                    if (res?.success) {
                        localStorage.setItem('jwtToken', res.result.token)
                        localStorage.setItem('userFullName', res.result.full_name)
                        localStorage.setItem('type', res.result.type)
                        localStorage.setItem('refreshToken', res.result.refresh_token)

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
        },
        async changepassword(data) {
            return await changepassword.create(data)
        }
    }
})
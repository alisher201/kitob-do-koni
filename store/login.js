import { defineStore } from "pinia";
import { useRuntimeConfig } from "nuxt/app";
import { login } from '@/utils/login'


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
                .then(res => {
                    if (res?.success) {
                        localStorage.setItem('jwtToken', res.result.token)
                        localStorage.setItem('userFullName', res.result.full_name)
                        localStorage.setItem('type', res.result.type)
                        localStorage.setItem('refreshToken', res.result.refresh_token)

                    }
                })
        }
    }
})
import {
  ofetch
} from 'ofetch'
import {
  useTestTStore
} from '@/store/home'

let jwtToken = localStorage.getItem('jwtToken')

export default defineNuxtPlugin((_nuxtApp) => {
  globalThis.$fetch = ofetch.create({
    onRequest({
      request,
      options
    }) {

      if (jwtToken) {
        options.headers = {
          Authorization: `Bearer ${jwtToken}`,
          accept: 'application/json'
        }

        // options.headers = {refresh: refreshToken}
      } else {
        console.log('Not authenticated')
        // options.headers = { Authorization: `Bearer ${refreshToken}` }
      }
    },
    onResponseError({
      response
    }) {
      const statusCode = response.status;
      if (statusCode === 401) {
        // localStorage.removeItem('jwtToken')

        jwtToken = localStorage.getItem('refreshToken')

        useTestTStore().refreshToken()

      }
    }
  })
})
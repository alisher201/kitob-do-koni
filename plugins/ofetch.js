import {
  ofetch
} from 'ofetch'
import {
  useTestTStore
} from '@/store/home'

// let jwtToken = localStorage.getItem('jwtToken')

export default defineNuxtPlugin((_nuxtApp) => {
  let jwtToken = null

  if (process.client) {
    // Check if code is running in the client-side environment
    jwtToken = localStorage.getItem('jwtToken');
  }
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

        if (process.client) {
          // Check if code is running in the client-side environment
          // jwtToken = localStorage.getItem('jwtToken');
          jwtToken = localStorage.getItem('refreshToken')
          useTestTStore().refreshToken()
        }


        useTestTStore().refreshToken()

      }
    }
  })
})
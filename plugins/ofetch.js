
import { ofetch } from 'ofetch'

export default defineNuxtPlugin((_nuxtApp) => {
  globalThis.$fetch = ofetch.create({
    onRequest ({ _request, options }) {
    //  const authStore = useTestTStore()
     const jwtToken = localStorage.getItem('jwtToken')

      if (jwtToken) {
        options.headers = { Authorization: `Bearer ${jwtToken}` }
      } else {
        console.log('Not authenticated')
      }
    },
    onRequestError ({ error }) {
      console.error(error)
    }
  })
})

// import { ofetch } from 'ofetch'

// export default defineNuxtPlugin((_nuxtApp) => {
//   globalThis.$fetch = ofetch.create({
//     onRequest ({ request, options }) {
//       console.log(request);
//     //  const authStore = useTestTStore()
//      const jwtToken = localStorage.getItem('jwtToken')

//       if (jwtToken) {
//         options.headers = { Authorization: `Bearer ${jwtToken}` }
//       } else {
//         console.log('Not authenticated')
//       }
//     },
//     onResponseError ({ error }) {
//       // console.error(error.response, 'eror')
//       console.log('fgfghhghjghjghj');
//     }
//   })
// })














import { ofetch } from 'ofetch'
import { useTestTStore } from '@/store/home'

export default defineNuxtPlugin((_nuxtApp) => {
  globalThis.$fetch = ofetch.create({
    onRequest({ request, options }) {
      const jwtToken = localStorage.getItem('jwtToken')
      const refreshToken = localStorage.getItem('refreshToken')

      if (jwtToken) {
        options.headers = {
          Authorization: `Bearer ${jwtToken}`,
        }

        // options.headers = {refresh: refreshToken}
      } else {
        console.log('Not authenticated')
        options.headers = { Authorization: `Bearer ${refreshToken}` }
      }
    },
    onResponseError({ response }) {
      const statusCode = response.status;
      if (statusCode === 401) {
        // localStorage.removeItem('jwtToken')

        useTestTStore().refreshToken()

      }
    }
  })
})

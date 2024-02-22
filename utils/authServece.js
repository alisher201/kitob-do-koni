import { ofetch } from 'ofetch'
export const jwtAuth = (token) => {
    
  globalThis.$fetch = ofetch.create({
    onRequest ({ _request, options }) {
        options.headers = { Authorization: `Bearer${token}` }
    },
    onRequestError ({ error }) {
      console.error(error)
    }
  })
}








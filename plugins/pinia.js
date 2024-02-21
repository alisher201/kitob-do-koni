import { useMainStore } from '~/store'
import{useTestTStore} from '~/store/home'
import {useLogin} from '~/store/login'

export default defineNuxtPlugin(({ $pinia }) => {
  const mainStore = useMainStore($pinia);
  const testTStore = useTestTStore($pinia);
  const register = useLogin
  
  return {
    provide: {
      mainStore,
      testTStore,
      register
          }
  }
})

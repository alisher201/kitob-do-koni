import { useMainStore } from '~/store'
import{useTestTStore} from '~/store/home'
import {ProfileHistory} from '~/store/profile'
import {useLogin} from '~/store/login'
import {usePayment} from '~/store/payment'


export default defineNuxtPlugin(({ $pinia }) => {
  const mainStore = useMainStore($pinia);
  const testTStore = useTestTStore($pinia);
  const profileStore = ProfileHistory($pinia);
  const register = useLogin
  
  return {
    provide: {
      mainStore,
      testTStore,
      profileStore,
      register,
      usePayment
          }
  }
})

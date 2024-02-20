import { useMainStore } from '~/store'
import{useTestTStore} from '~/store/home'
import {ProfileHistory} from '~/store/profile'

export default defineNuxtPlugin(({ $pinia }) => {
  const mainStore = useMainStore($pinia);
  const testTStore = useTestTStore($pinia);
  const profileStore = ProfileHistory($pinia);
  
  return {
    provide: {
      mainStore,
      testTStore,
      profileStore
          }
  }
})

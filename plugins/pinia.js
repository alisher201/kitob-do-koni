import { useMainStore } from '~/store'
import{useTestTStore} from '~/store/home'

export default defineNuxtPlugin(({ $pinia }) => {
  const mainStore = useMainStore($pinia);
  const testTStore = useTestTStore($pinia);
  
  return {
    provide: {
      mainStore,
      testTStore
          }
  }
})

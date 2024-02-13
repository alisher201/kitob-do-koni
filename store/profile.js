import { defineStore } from "pinia";
import {profile_history} from '../utils/profile'

export const PtofileHistory = defineStore("test", {
  state: () => ({
    
  }),
  
  actions: {
    async  OrderHistory() {
    return  await profile_history.get()
    }
  }
});
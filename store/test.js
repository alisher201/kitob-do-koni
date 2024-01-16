import { defineStore } from "pinia";
export const useTestStore = defineStore ("testfrom",{
    state:() => ({
        list: 'piniaaaa',
    })
})
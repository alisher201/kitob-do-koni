import { defineStore } from "pinia";
import { book } from '@/utils/payment'

export const usePayment = defineStore('payment', {
    stor: () => ({
        book: null

    }),
    actions: {
        async fetch_book_one(data) {
            return await book.getOne(data)
                .then(res => {
                    if (res.succes) {
                        this.book = res.result
                    }
                })
        }
    }

})

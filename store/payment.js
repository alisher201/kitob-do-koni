import { defineStore } from "pinia";
import { book, rating,popular_recent } from '@/utils/payment'

export const usePayment = defineStore('payment', {
    stor: () => ({
        book: null,
        recent: {}

    }),
    actions: {
        async fetch_book_one(data) {
            return await book.getOne(data)
                .then(res => {
                    if (res.succes) {
                        this.book = res.result
                    }
                })
        },
        async create_commit(data) {
            return await rating.create(data)
        },
        async Popular_recent(){
            return await popular_recent.get()
                .then(res => {
                    this.recent = res
                })
        }
    }

})

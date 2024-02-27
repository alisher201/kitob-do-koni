import { defineStore } from "pinia";
import {order_invoices,order_status, order_transaction,order_complete,order_token,order_payment,order_exists} from "../utils/order"
import { useRuntimeConfig} from "nuxt/app";


export const OrderPayment = defineStore("order",{
    state:() =>({
        url: useRuntimeConfig().public.siteUrl,
        invoices:{},
    }),
    actions:{
        async Order_invoices(){
            return await order_invoices.get()
            .then((res)=>{
                this.invoices = res
            })
        },
        async Order_Status(data){
            return await order_status.put(data)
        },
        async Order_Transaction(data){
            return await order_transaction.create(data)
        },
        async Order_Complete(data){
            return await order_complete.create(data)
        },
        async Order_Token(data){
            return await order_token.create(data)
        },
        async Order_Payment(data){
            return await order_payment.create(data)
        },
        async Order_Exists(data){
            return await order_exists.create(data)
        }
    }
})
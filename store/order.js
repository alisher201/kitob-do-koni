import { defineStore } from "pinia";
import {order_invoices,order_status, order_transaction,order_complete,order_token,order_payment,order_exists,order_delivery,order_check,order_forget} from "../utils/order"
import { useRuntimeConfig} from "nuxt/app";


export const OrderPayment = defineStore("order",{
    state:() =>({
        url: useRuntimeConfig().public.siteUrl,
        invoices:{},
        delivery:{},
        check:{},
        token:{},
        invoic_id:{},
        exists:{},
        forget:{},

    }),
    actions:{
        async Order_invoices(){
            return await order_invoices.get()
            .then((res)=>{
                this.invoices = res
            })
        },
        async Order_delivery(){
            return await order_delivery.get()
            .then((res)=>{
                this.delivery = res.result
            })
        },
        async Order_check(data){
            return await order_check.create(data)
            // .then((res)=>{
            //     this.check = res.result
            // })
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
            .then((res)=>{
                this.token = res?.result
               
                // this.token = JSON.Stringify(res)
            });
        },
        async Order_Payment(data){
            return await order_payment.create(data)
            .then((res)=>{
                this.invoic_id = res?.result
               
            })
        },
        async Order_Exists(data){
            return await order_exists.create(data)
            .then((res)=>{
                this.exists = res?.result
            })
        },
        async Order_Forget(data){
            return await order_forget.create(data)
            .then((res)=>{
                this.forget = res?.result
            });
        }

    }
})
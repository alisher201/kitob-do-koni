import {FechData} from './api.service'
export const order_invoices = new FechData('payment/invoices')
export const order_status = new FechData('payment/status/update/{id}                      ')
export const order_transaction = new FechData('payment/create/transaction')
export const order_complete = new FechData('payment/complete/transaction')
export const order_token = new FechData('payment/token')
export const order_payment = new FechData('payment/store')
export const order_exists = new FechData('payment/token-exists')

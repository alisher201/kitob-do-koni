import {FechData} from './api.service'

export const cart = new FechData('cart/store')
export const cartDelete = new FechData('cart/delete')
export const allDelete = new FechData('cart/delete-all ')
export const getCart = new FechData('cart')
export const getLike = new FechData('like')
export const likeAdd = new FechData('like/store')
export const likeDelete = new FechData('like/delete')
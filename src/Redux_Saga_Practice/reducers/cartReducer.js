//1. Add Data in Cart
//2. Remove Data in cart
//3. Edit Data in cart

import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from "../utils/const"

export const cartData = (data = [], action) => {

    switch (action.type) {
        case ADD_TO_CART:
            console.log('Add to cart condition', action.data)
            return [action.data, ...data]
        case REMOVE_FROM_CART:
            console.log('remove called',action)
            //data.length = data.length ? data.length - 1 : []
            const remainingItem = data.filter((item) => item.id !== action.data)

            console.warn("Remaining data",remainingItem)
            if(data.length == 0){
                alert('cart is empty')
            }
            return [...remainingItem]
        case EMPTY_CART:
            console.log('empty reducer called',action)
            data = []
            return [...data]
        default:
            return data
    }
}
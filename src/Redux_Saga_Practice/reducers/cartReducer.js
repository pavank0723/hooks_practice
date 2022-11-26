//1. Add Data in Cart
//2. Remove Data in cart
//3. Edit Data in cart

import { ADD_TO_CART } from "../utils/const"


export const cartData = (initCartData = [], action) => {
    // if(action.type === ADD_TO_CART){
    //     console.warn("Cart Reducer called ",action)
    //     return action.data
    // }else{
    //     return 'no action matched'
    // }
    switch (action.type) {
        case ADD_TO_CART:
            console.log('Add to cart condition',action.data)
            return 1 + 1
        default:
            return 'no condition matched'
    }
}
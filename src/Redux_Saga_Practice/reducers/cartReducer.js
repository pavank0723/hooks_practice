//1. Add Data in Cart
//2. Remove Data in cart
//3. Edit Data in cart

import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from "../utils/const"


export const cartData = (initCartData = [], action) => {
    // if(action.type === ADD_TO_CART){
    //     console.warn("Cart Reducer called ",action)
    //     return action.data
    // }else{
    //     return 'no action matched'
    // }
    switch (action.type) {
        case ADD_TO_CART:
            console.log('Add to cart condition', action.initCartData)
            return [action.initCartData, ...initCartData]
        case REMOVE_FROM_CART:
            initCartData.length = initCartData.length ? initCartData.length - 1 : []
            if(initCartData.length == 0){
                alert('cart is empty')
            }
            return [...initCartData]
        case EMPTY_CART:
            console.log('empty reducer called',action)
            initCartData = []
            return [...initCartData]
        default:
            return initCartData
    }
}
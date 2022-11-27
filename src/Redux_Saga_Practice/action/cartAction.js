import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from "../utils/const"

export const addToCart = (data) =>{
    console.log(`Action called successfully`)
    console.table(data)
    return{
        type : ADD_TO_CART,
        data
    }
}

export const removeFromCart = (data) =>{
    console.log('Remove action called')
    return{
        type: REMOVE_FROM_CART,
        data
    }
}

export const emptyCart = (data) =>{
    console.log('empty action called')
    return{
        type:EMPTY_CART,
        data
    }
}
import { ADD_TO_CART } from "../utils/const"

export const addToCart = (data) =>{
    console.log(`Action called successfully`)
    console.table(data)
    return{
        type : ADD_TO_CART,
        data
    }
}

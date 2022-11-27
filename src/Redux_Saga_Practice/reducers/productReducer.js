import { GET_PRODUCT_LIST, SET_PRODUCT_LIST } from "../utils/const";

export const productData = (data = [],action) =>{
    switch(action.type){        
        case SET_PRODUCT_LIST:
            console.log('Product set Reducer called', action)
            return [...action.data] // convert to array formate
        default:
            return data
    }

}
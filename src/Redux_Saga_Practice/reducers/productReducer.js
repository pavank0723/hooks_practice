import { PRODUCT_LIST } from "../utils/const";

export const productData = (data = [],action) =>{
    switch(action.type){
        case PRODUCT_LIST:
            console.log('Product Reducer called', action)
            return [action.data]
        default:
            return data
    }

}
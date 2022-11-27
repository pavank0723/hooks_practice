import { PRODUCT_LIST } from "../utils/const"

export const productList = () =>{
    let data = ''
    console.log('product action called',data)
    return{
        type:PRODUCT_LIST,
        data
    }

}
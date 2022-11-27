import { PRODUCT_LIST } from "../utils/const"

export const productList = async() =>{
    let data = await 'https://jsonplaceholder.typicode.com/todos/1'
    data = await data.json
    console.log('product action called',data)
    return{
        type:PRODUCT_LIST,
        data
    }

}
import React from "react"
import { addToCart,removeFromCart,emptyCart } from "../action/cartAction"
import { productList } from "../action/productAction"
import { useDispatch, useSelector } from "react-redux"

const MainComp = () => {
    const ProductData = {
        name: "iPhone Max Pro",
        price: "₹85000",
        category: "mobile",
        color: "black"
    }
    const dispatch = useDispatch()
    // const result = useSelector((state) => state) //show all state data i.e. cartData & productData
    const result = useSelector((state) => state.productData)
    console.log('Main component',result)
    return (
        <>
            <h1>Main Component</h1>
            <button onClick={() => dispatch(addToCart(ProductData))}>Add cart</button><br />
            <button onClick={() => dispatch(removeFromCart(ProductData.name))}>Remove cart</button><br />
            <button onClick={() => dispatch(emptyCart(ProductData))}>Empty cart</button><br />
            <button onClick={() => dispatch(productList())}>Get product list</button><br />
            
        </>
    )
}


export default MainComp
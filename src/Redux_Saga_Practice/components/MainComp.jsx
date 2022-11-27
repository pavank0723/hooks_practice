import React from "react"
import { addToCart,removeFromCart,emptyCart } from "../action"
import { useDispatch } from "react-redux"

const MainComp = () => {
    const ProductData = {
        name: "iPhone Max Pro",
        price: "₹85000",
        category: "mobile",
        color: "black"
    }
    const dispatch = useDispatch()
    return (
        <>
            <h1>Main Component</h1>
            <button onClick={() => dispatch(addToCart(ProductData))}>Add cart</button><br />
            <button onClick={() => dispatch(removeFromCart(ProductData.name))}>Remove cart</button><br />
            <button onClick={() => dispatch(emptyCart(ProductData))}>Empty cart</button><br />
            
        </>
    )
}


export default MainComp
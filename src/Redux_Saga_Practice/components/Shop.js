import React from "react"
import { addToCart } from "../action"
import { useDispatch } from "react-redux"

const Shop = () => {
    const ProductData = {
        name: "iPhone Max Pro",
        price: "₹85000",
        category: "mobile",
        color: "black"
    }
    const dispatch = useDispatch()
    return (
        <>
            <h1>Hello Saga</h1>
            <button onClick={() => dispatch(addToCart(ProductData))}>Add cart</button>
        </>
    )
}

export default Shop
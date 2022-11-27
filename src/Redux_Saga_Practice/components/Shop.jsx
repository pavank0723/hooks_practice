import React from "react"
import Header from "./Header"
import MainComp from "./MainComp"
import {Routes,Route} from 'react-router-dom'
import Cart from "./Cart"

const Shop = () => {

    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<MainComp />} />
                <Route path="/cart" element={<Cart />}/>
            </Routes>
            
        </>
    )
}

export default Shop
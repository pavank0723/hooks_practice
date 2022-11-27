import React, { useEffect } from "react"
import { addToCart, removeFromCart, emptyCart } from "../action/cartAction"
import { getProductList } from "../action/productAction"
import { useDispatch, useSelector } from "react-redux"

const MainComp = () => {
    const dispatch = useDispatch()
    // const result = useSelector((state) => state) //show all state data i.e. cartData & productData
    const result = useSelector((state) => state.productData)
    console.log('Main component data from saga', result)

    useEffect(() => {
        dispatch(getProductList())
    },[])
    return (
        <>
            <h1>Main Component</h1>
            <button onClick={() => dispatch(emptyCart())}>Empty cart</button><br />            

            <div className="product_container">
                {
                    result.map((item) => {
                        const { id, name, photo, price, color, brand, category } = item
                        return (
                            <div key={id} className='product_container'>
                                <div className="produc_main">
                                    <div className="product_img" style={{ margin: "50px" }}>
                                        <img src={photo} style={{ width: "150px" }} />
                                    </div>
                                    <div className="product_detail" style={{ color: "black" }}>
                                        <h2>{name}</h2>
                                        <h4>Price: ₹{price}</h4>
                                        <p>Color: <span>{color}</span></p><br />
                                        <p>Brand: <span>{brand}</span></p><br />
                                        <p>Category: <span>{category}</span></p>
                                    </div>
                                    <div className="product_action">
                                        <button className="btn_1" onClick={() => dispatch(addToCart(item))}>Add to cart</button>
                                        <button className="btn_2" onClick={() => dispatch(removeFromCart(id))}>Remove to cart</button>
                                    </div>
                                </div>
                            </div>
                        )

                    })
                }
            </div>
        </>
    )
}


export default MainComp
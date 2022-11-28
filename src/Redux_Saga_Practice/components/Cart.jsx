import { useDispatch, useSelector } from 'react-redux'
import { emptyCart } from '../action/cartAction'
import '../style.css'

const Cart = () => {
    const data = useSelector((state) => state.cartData)
    const dispatch = useDispatch()
    console.warn('Cart data ==>>>', data)

    const amount = data.length && data.map((item) => item.price).reduce((prev, next) => prev + next)
    return (
        <>
            <div className='cart_header'>
                <h2>Cart Page</h2>
                <h3>2 Items</h3>
            </div>
            <button onClick={() => dispatch(emptyCart())}>Empty cart</button><br />
            <div className='cart_container'>
                <table className="cart_data" border={{ border: "1px solid grey" }}>
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th colSpan='3'>Qty</th>
                            <th>Price</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((item) => {
                                const { id, name, photo, price } = item
                                return (
                                    <tr key={id}>
                                        <td className='cart_product_data'>
                                            <img src={photo} alt={`product ${id}`} />
                                            {name}
                                        </td>
                                        <td>
                                            <button>-</button>
                                        </td>
                                        <td>1</td>
                                        <td>
                                            <button>+</button>
                                        </td>
                                        <td>₹{price}</td>
                                        <td>₹{price}</td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>
                <div className='cart_price_detail'>
                    <div className='cart_price_adjust'>
                        <p>Amount</p><span>₹{amount}</span>
                    </div>
                    <div className='cart_price_adjust'>
                        <p>Discount</p><span>₹{amount / 10}</span>
                    </div>
                    <div className='cart_price_adjust'>
                        <p>Tax</p><span>₹0</span>
                    </div>
                    <div className='cart_price_adjust'>
                        <p>Grand Total</p><span>₹{amount - (amount / 10)}</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart
import { useSelector } from 'react-redux'
import '../style.css'

const Cart = () => {
    const data = useSelector((state) => state.cartData)
    console.warn('Cart data ==>>>',data)
    return (
        <>
            <div className='cart_header'>
                <h2>Cart Page</h2>
                <h3>2 Items</h3>
            </div>
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
                                        <td>₹1000</td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>
            </div>

        </>
    )
}

export default Cart
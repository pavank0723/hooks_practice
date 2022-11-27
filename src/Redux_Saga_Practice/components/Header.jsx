import '../style.css'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../action/cartAction'

import CartIcon from '../../assets/logo192.png'
import { Link } from 'react-router-dom'
const Header = () => {
    const result = useSelector((state) => state.cartData)
    const dispatch = useDispatch()
    return (
        <>
            <div className="header_wrapper">
                <Link to='/' className='logo'>
                    <h1>P_Shop</h1>
                </Link>
                <div className="header_main">
                    <Link to='/cart'>
                        <span>{result.length}</span>
                        <img src={CartIcon} alt='cartIcon' />
                    </Link>
                </div>
            </div>

        </>
    )
}

export default Header
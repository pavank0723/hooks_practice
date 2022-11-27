import '../style.css'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../action'

import CartIcon from '../../assets/logo192.png'
const Header = () => {
    const result = useSelector((state) => state.cartData)
    const dispatch = useDispatch()
    return (
        <>
            <div className="header_wrapper">
                <div className="header_main">
                    <span>{result.length}</span>
                    <img src={CartIcon} alt='cartIcon'/>
                </div>
            </div>

        </>
    )
}

export default Header
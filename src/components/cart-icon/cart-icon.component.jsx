import { useContext } from 'react'

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'

import { CartContext } from "../../contexts/cart.context";

import './cart-icon.styles.scss'

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen, cartNumber } = useContext(CartContext);

    const toggleIsCartOpen = () => {
        setIsCartOpen(!isCartOpen);
    }
    return (
        <div className='cart-icon-container'>
            <ShoppingIcon onClick={toggleIsCartOpen} className='shopping-icon' />
            <span className='item-count'>{cartNumber}</span>
        </div>)
}

export default CartIcon;
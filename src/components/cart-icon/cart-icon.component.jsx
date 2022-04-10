import { useContext } from 'react'

import { CartContext } from "../../contexts/cart.context";

import { CartIconContainer, StyledShoppingIcon, ItemCount } from './cart-icon.styles'

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen, cartNumber } = useContext(CartContext);

    const toggleIsCartOpen = () => {
        setIsCartOpen(!isCartOpen);
    }
    return (
        <CartIconContainer>
            <StyledShoppingIcon onClick={toggleIsCartOpen} />
            <ItemCount>{cartNumber}</ItemCount>
        </CartIconContainer>)
}

export default CartIcon;
import { useContext } from 'react';

import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

import { CartContext } from '../../contexts/cart.context';

import { CartDropdownContainer, EmptyMessage, CartItems } from './cart-dropdown.styles';

import { Navigate, useNavigate } from 'react-router-dom';


const CartDropdown = () => {

    const { cartItems } = useContext(CartContext);

    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        navigate('checkout')
    }

    return (
        <CartDropdownContainer>
            <CartItems>
                {cartItems.length < 1 && <EmptyMessage>No items in cart</EmptyMessage>}
                {cartItems.map(item => <CartItem cartItem={item} key={item.id} />)}
            </CartItems>

            <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
        </CartDropdownContainer>
    );
};

export default CartDropdown;
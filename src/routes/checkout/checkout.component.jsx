import React from "react";

import CheckoutItem from "../../components/checkout-item/checkout-item";

import { CartContext } from "../../contexts/cart.context";
import { useContext } from "react";

import { CheckoutContainer, CheckoutHeader, HeaderBlock, Total } from './checkout.styles'


const Checkout = () => {
    const { cartItems, totalCost } = useContext(CartContext);

    return (
        <CheckoutContainer>
            <CheckoutHeader>
                <HeaderBlock>
                    <span>Product</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Description</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Quantity</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Price</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Remove</span>
                </HeaderBlock>
            </CheckoutHeader>
            {cartItems.map(
                cartItem => <CheckoutItem cartItem={cartItem} key={cartItem.id} />)}
            {totalCost ?
                <Total>TOTAL: £{totalCost}</Total>
                :
                <Total>Empty basket</Total>
            }
        </CheckoutContainer>
    )
}

export default Checkout;
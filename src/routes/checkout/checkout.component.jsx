import React from "react";

import CheckoutItem from "../../components/checkout-item/checkout-item";

import { CartContext } from "../../contexts/cart.context";
import { useContext } from "react";

import './checkout.styles.scss'


const Checkout = () => {
    const { cartItems, totalCost } = useContext(CartContext);

    return (
        <div className="checkout-container">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            {cartItems.map(
                cartItem => <CheckoutItem cartItem={cartItem} key={cartItem.id} />)}
                <span className="total">TOTAL: £{totalCost}</span>
        </div>
    )
}

export default Checkout;
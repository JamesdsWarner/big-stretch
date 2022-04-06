import { CartContext } from "../../contexts/cart.context";
import { useContext } from "react";

import './checkout-item.styles.scss'


const CheckoutItem = ({ cartItem }) => {
    const { addItemToCart, removeItemFromCart, removeWholeItemFromCart } = useContext(CartContext);

    const { name, quantity, imageUrl, price } = cartItem;

    const increaseItemQuantity = () => addItemToCart(cartItem)
    const decreaseItemQuantity = () => removeItemFromCart(cartItem)
    const removeItem = () => removeWholeItemFromCart(cartItem)



    return (
        <div className="checkout-item-container">
            <div className="image-container">
                <img src={imageUrl} alt={`${name}`} />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={decreaseItemQuantity}>
                    &#10094;
                </div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={increaseItemQuantity}>
                    &#10095;
                </div>
            </span>
            <span className="price">{quantity * price}</span>
            <div className="remove-button"><i onClick={removeItem}>&#10005;</i></div>

        </div>
    )
}

export default CheckoutItem;
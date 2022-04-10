import { CartContext } from "../../contexts/cart.context";
import { useContext } from "react";

import {
    CheckoutItemContainer, 
    ImageContainer, 
    Image, 
    ItemName, 
    ItemQuantity, 
    ItemPrice, 
    Arrow, 
    Value, 
    RemoveButton
} from './checkout-item.styles'


const CheckoutItem = ({ cartItem }) => {
    const { addItemToCart, removeItemFromCart, removeWholeItemFromCart } = useContext(CartContext);

    const { name, quantity, imageUrl, price } = cartItem;

    const increaseItemQuantity = () => addItemToCart(cartItem)
    const decreaseItemQuantity = () => removeItemFromCart(cartItem)
    const removeItem = () => removeWholeItemFromCart(cartItem)



    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <Image src={imageUrl} alt={`${name}`} />
            </ImageContainer>
            <ItemName>{name}</ItemName>
            <ItemQuantity>
                <Arrow onClick={decreaseItemQuantity}>
                    &#10094;
                </Arrow>
                <Value>{quantity}</Value>
                <Arrow onClick={increaseItemQuantity}>
                    &#10095;
                </Arrow>
            </ItemQuantity>
            <ItemPrice>{quantity * price}</ItemPrice>
            <RemoveButton><i onClick={removeItem}>&#10005;</i></RemoveButton>

        </CheckoutItemContainer>
    )
}

export default CheckoutItem;
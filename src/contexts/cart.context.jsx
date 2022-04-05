import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productToAdd, setCartNumber) => {
    //find if cartItems contains productToAdd
    const found = cartItems.find(product => product.id === productToAdd.id)

    console.log(cartItems)
   
    //if found increment quantity,
    if (found) {
        return cartItems.map((cartItem) =>
            cartItem.id === productToAdd.id ?
                { ...cartItem, quantity: cartItem.quantity + 1 }
                :
                cartItem
        )
    } else {
        return [...cartItems, { ...productToAdd, quantity: 1 }];
    }
}



export const CartContext = createContext({
    isCartOpen: null,
    setIsCartOpen: () => { },
    cartItems: [],
    addItemToCart: () => { },
    cartNumber: 0,
})



export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartNumber, setCartNumber] = useState(0);

    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
        setCartNumber(newCartCount);
    }, [cartItems])

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd, setCartNumber))
    }

    const value = { isCartOpen, setIsCartOpen, addItemToCart, cartItems, cartNumber }

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}


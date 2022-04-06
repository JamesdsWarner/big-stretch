import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productToAdd) => {
    const found = cartItems.find(product => product.id === productToAdd.id)

    console.log(cartItems)

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

const removeCartItem = (cartItems, productToRemove) => {

    const found = cartItems.find(product => product.id === productToRemove.id)

    if (found.quantity > 1) {
        return cartItems.map((cartItem) =>
            cartItem.id === productToRemove.id ?
                { ...cartItem, quantity: cartItem.quantity - 1 }
                :
                cartItem
        )
    } else {
        return cartItems.filter(cartItem =>
            productToRemove.id !== cartItem.id
        )
    }
}

const removeWholeItem = (cartItems, productToRemove) => {
    return cartItems.filter(cartItem =>
        productToRemove.id !== cartItem.id
    )
}




export const CartContext = createContext({
    isCartOpen: null,
    setIsCartOpen: () => { },
    cartItems: [],
    addItemToCart: () => { },
    cartNumber: 0,
    removeItemFromCart: () => { },
    totalCost: 0,
    removeWholeItemFromCart: () => { }
})




export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartNumber, setCartNumber] = useState(0);
    const [totalCost, setTotalCost] = useState(0);

    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
        setCartNumber(newCartCount);
    }, [cartItems])

    useEffect(() => {
        const newTotalCost = cartItems.reduce((cost, cartItem) => cost + (cartItem.quantity * cartItem.price), 0);
        setTotalCost(newTotalCost);
    }, [cartItems])

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd))
    }

    const removeItemFromCart = (productToRemove) => {
        setCartItems(removeCartItem(cartItems, productToRemove))
    }

    const removeWholeItemFromCart = (productToRemove) => {
        setCartItems(removeWholeItem(cartItems, productToRemove))
    }

    const value = { isCartOpen, setIsCartOpen, addItemToCart, removeItemFromCart, cartItems, cartNumber, totalCost, removeWholeItemFromCart }

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}


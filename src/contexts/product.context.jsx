import { createContext, useState, useEffect } from "react";

import { onAuthStateChangedListener } from "../utils/firebase/firebase.utils";

import SHOP_DATA from '../shop-data.json'


//actual value we want to access
export const ProductsContext = createContext({
    products: [],
})

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState(SHOP_DATA);
    const value = { products }


    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((product) => { })

        return unsubscribe;
    }, []);

    return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
}

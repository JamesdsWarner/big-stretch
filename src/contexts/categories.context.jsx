import { createContext, useState, useEffect } from "react";

import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";

import { onAuthStateChangedListener } from "../utils/firebase/firebase.utils";



//actual value we want to access
export const CategoriesContext = createContext({
    categoriesMap: {},
})

export const CategoriesProvider = ({ children }) => {
    const [categoriesMap, setCategoriesMap] = useState({});
    const value = { categoriesMap }

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            setCategoriesMap(categoryMap);
        }
        getCategoriesMap();
    }, []);

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((product) => { })
        return unsubscribe;
    }, []);


    return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
}

import { createContext, useEffect, useState } from "react";
import { getAllProducts } from '../services/products';
import { getAllCarts } from "../services/carts";

const FakeShopContext = createContext();

// eslint-disable-next-line react/prop-types
const FakeShopProvider = ({ children }) => {

    const [products, setProducts] = useState([])
    const [carts, setCarts] = useState([]);

    useEffect( () => {
        getAllProducts().then((response) => setProducts(response));
        getAllCarts().then( response => setCarts(response))
    }, [])

    return (
        <FakeShopContext.Provider value={{
            products,
            carts
        }} >
            {children}
        </FakeShopContext.Provider>
    )
}

export { FakeShopContext, FakeShopProvider }
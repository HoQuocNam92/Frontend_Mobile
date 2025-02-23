import axios from 'axios';
import { createContext, useEffect, useState } from 'react';
export const ProductList = createContext();
export function AuthProducts({ children }) {
    const [products, setProducts] = useState([]);
    useEffect(async () => {
        const getItems = await axios.get('http://localhost:8080/api/routes/items');
        if (getItems.status === 200) {
            setProducts(getItems.data);
        } else {
            console.error('Error fetching items:', getItems.error);
        }
    }, [setProducts]);

    return <ProductList.Provider value={{ products }}>{children}</ProductList.Provider>;
}

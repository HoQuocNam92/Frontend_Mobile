import { createContext, useState } from 'react';

export const CartList = createContext();

export function AuthCart({ children }) {
    const [cart, setCart] = useState([]);
    const AddCart = product => {
        setCart(product);
    };

    return <CartList.Provider value={{ AddCart, cart }}>{children}</CartList.Provider>;
}

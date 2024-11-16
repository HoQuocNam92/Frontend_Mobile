import axios from 'axios';
import { createContext, useState } from 'react';
import { toast } from 'react-toastify';

export const CartList = createContext();

export function AuthCart({ children }) {
    const [cart, setCart] = useState([]);
    const AddCart = product => {
        setCart(product);
    };

    return (
        <CartList.Provider value={{ AddCart, cart }}>
            {children}
        </CartList.Provider>
    );
}

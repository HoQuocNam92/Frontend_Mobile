import axios from "axios";
import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const CartList = createContext();

export function AuthCart({ children }) {
    const [cart, setCart] = useState([]);

    console.log(cart._id);

    const AddCart = (product) => {
        setCart(product);
    };
    const RemovoProduct = async (productId) => {
        try {
            await axios.post(`http://localhost:8080/api/routes/delete/${productId}`)
            toast.success("Xoa san pham thanh cong ");
            setCart(cart.filter((item) => {
                return item._id !== productId
            }));



        }
        catch (err) {
            console.log("Delete error", err);
        }



    };
    return (
        <CartList.Provider value={{ RemovoProduct, AddCart, cart }}>
            {children}
        </CartList.Provider>
    );
}

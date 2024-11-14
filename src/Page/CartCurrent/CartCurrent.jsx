import { useContext, useEffect } from 'react';
import { CartList } from '../../Context/CartProvider/CartProvider';
import Styles from './Cart.module.scss';
import axios from 'axios';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import { json, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux'; // Import useSelector

export default function CartCurrent() {
    const { cart, RemovoProduct, AddCart } = useContext(CartList);
    const { islogin } = useContext(AuthContext);
    const navigate = useNavigate();
    const addItems = useSelector(state => state.addItems); // Lấy giỏ hàng từ Redux store

    useEffect(() => {
        const fetchDataProduct = async () => {
            const response = await axios.get(
                'http://localhost:8080/api/routes/Productcart'
            );
            const product = response.data;

            return AddCart(response.data);
        };

        fetchDataProduct();
    }, [islogin]);

    // const calculateQuantities = () => {
    //     return cart.reduce((accumulator, item) => {
    //         const existingProduct = accumulator.find(
    //             prod => prod.id === item.id
    //         );
    //         if (existingProduct) {
    //             existingProduct.quantity += 1;
    //         } else {
    //             accumulator.push({ ...item, quantity: 1 });
    //         }
    //         return accumulator;
    //     }, []);
    // };

    // const productQuantities = calculateQuantities();

    const removeProduct = id => {
        RemovoProduct(id);
    };

    return (
        <div className="cart__Current">
            <h1>Danh sách đơn hàng</h1>
            {addItems.length === 0 ? (
                <h5>Chưa có đơn hàng</h5>
            ) : (
                <>
                    <h5>Số lượng đơn hàng của bạn: {addItems.length}</h5>
                    <table>
                        <thead>
                            <tr>
                                <th>Tên sản phẩm</th>
                                <th>Giá sản phẩm</th>
                                <th>Số lượng</th>
                                <th>Xóa sản phẩm</th>
                            </tr>
                        </thead>
                        <tbody>
                            {addItems.map(item => (
                                <tr key={item.id}>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td>{item.quantity}</td>
                                    <td>
                                        <button
                                            onClick={() =>
                                                removeProduct(item.id)
                                            }
                                        >
                                            Xóa sản phẩm
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </>
            )}
        </div>
    );
}

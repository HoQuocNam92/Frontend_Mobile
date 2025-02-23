import { useContext, useEffect } from 'react';
import Styles from './Cart.module.scss';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '@Reduxtoolkit/ReduxSlice';
export default function CartCurrent() {
    const addItems = useSelector(state => state.cart.cartItems);

    const dispatch = useDispatch();

    useEffect(() => {
        const fetchDataProduct = async () => {
            try {
                const token = await localStorage.getItem('token');
                const response = await axios.get('http://localhost:8080/api/routes/cartItems', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                if (response.status === 200 && response.data) {
                    return dispatch(addToCart(response.data));
                }
            } catch (err) {
                console.log('Fetch error', err);
            }
        };
        fetchDataProduct();
    }, [dispatch]);

    const RemovoProduct = async productId => {
        try {
            const token = await localStorage.getItem('token');
            const responve = await axios.delete(`http://localhost:8080/api/routes/delete/${productId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            if (responve.status === 200 && responve.data) {
                return dispatch(removeFromCart(productId));
            }
        } catch (err) {
            console.log('Delete error', err);
        }
    };

    return (
        <div className="cart__Current">
            <h1>Danh sách đơn hàng</h1>
            {addItems.length === 0 ? (
                <>
                    <h5>Chưa có sản phẩm </h5>
                </>
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
                            {addItems.map((item, index) => (
                                <tr>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td>{item.quantity}</td>
                                    <td>
                                        <button onClick={() => RemovoProduct(item.id)}>Xóa sản phẩm</button>
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

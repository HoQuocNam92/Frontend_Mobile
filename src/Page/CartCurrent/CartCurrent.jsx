import { useContext, useEffect } from 'react';
import Styles from './Cart.module.scss';
import axios from 'axios';
import { useSelector } from 'react-redux'; // Import useSelector
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../../Redux_tookit/ReduxSlice';
export default function CartCurrent() {
    const addItems = useSelector(state => state.cart.cartItems);
    console.log('Check data tu redux ', addItems); // Lấy giỏ hàng từ Redux store
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchDataProduct = async () => {
            const response = await axios.get('http://localhost:8080/api/routes/Productcart');

            return dispatch(addToCart(response.data));
        };
        fetchDataProduct();
    }, [dispatch]);

    const RemovoProduct = async productId => {
        try {
            console.log('Check ID remove', productId);
            await axios.post(`http://localhost:8080/api/routes/delete/${productId}`);
            dispatch(removeFromCart(productId));
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
                                        <button onClick={() => RemovoProduct(item._id)}>Xóa sản phẩm</button>
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

import axios from 'axios';
import { useEffect, useState } from 'react';
import { dashBoard, removeFromCart } from '@Reduxtoolkit/ReduxSlice';

import { useDispatch, useSelector } from 'react-redux';
const Dashboard = () => {
    const dispatch = useDispatch();
    const dash = useSelector(state => state.cart.dashBoard);
    const [status, setStatus] = useState(false);
    console.log('CHeck status ', status);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = await localStorage.getItem('token');
                const response = await axios.get('http://localhost:8080/api/routes/dashboard', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                console.log(response);
                if (response.data) {
                    dispatch(dashBoard(response.data));
                    setStatus(true);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
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
        <>
            {status ? (
                <>
                    <div className="cart__Current">
                        <h1>Danh sách đơn hàng</h1>
                        {dash.length === 0 ? (
                            <>
                                <h5>Chưa có sản phẩm </h5>
                            </>
                        ) : (
                            <>
                                <h5>Số lượng đơn hàng của bạn: {dash.length}</h5>
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
                                        {dash.map((item, index) => (
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
                </>
            ) : (
                <>
                    <div>
                        <h1>ADMIN mới xem quyền được </h1>
                    </div>
                </>
            )}
        </>
    );
};
export default Dashboard;

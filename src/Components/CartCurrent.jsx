import { useContext, useEffect } from 'react';
import { CartList } from './AuthCart';
import '../Components/css/Cart.css';
import axios from 'axios';
import { AuthContext } from '../Components/AuthProvider';
import { useNavigate } from 'react-router-dom';

export default function CartCurrent() {
    const { cart, RemovoProduct, AddCart } = useContext(CartList);
    const { islogin } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchDataProduct = async () => {
            if (islogin) {
                try {
                    const response = await axios.get('http://localhost:8080/api/routes/Productcart');
                    AddCart(response.data);
                } catch (err) {
                    console.log("Error fetching product data:", err);
                }
            } else {
                alert("Đăng nhập rồi mới thêm giỏ hàng");
                navigate('/login');
            }
        };

        fetchDataProduct();
    }, [islogin, AddCart]);

    const calculateQuantities = () => {
        return cart.reduce((accumulator, item) => {
            const existingProduct = accumulator.find(prod => prod._id === item._id);
            if (existingProduct) {
                existingProduct.quantity += 1;
            } else {
                accumulator.push({ ...item, quantity: 1 });
            }
            return accumulator;
        }, []);
    };

    const productQuantities = calculateQuantities();

    const removeProduct = (id) => {
        RemovoProduct(id);
    };

    return (
        <div className="cart__Current">
            <h1>Danh sách đơn hàng</h1>
            {cart.length === 0 ? (
                <h5>Chưa có đơn hàng</h5>
            ) : (
                <>
                    <h5>Số lượng đơn hàng của bạn: {cart.length}</h5>
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
                            {productQuantities.map(item => (
                                <tr key={item._id}>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td>{item.quantity}</td>
                                    <td>
                                        <button onClick={() => removeProduct(item._id)}>Xóa sản phẩm</button>
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

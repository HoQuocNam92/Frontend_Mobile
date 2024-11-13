import { useContext, useEffect } from 'react';
import { ProductList } from '../../../Context/ProductProvider/ProductProvider';
import { useParams } from 'react-router-dom';
import Styles from './Chuot.module.scss';
import { Link } from 'react-router-dom';
import { CartList } from '../../../Context/CartProvider/CartProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Chuot() {
    const YourComponent = () => {
        useEffect(() => {
            window.scrollTo({ top: 0, behavior: 'instant' }); // Cuộn về đầu trang khi component được mount
        }, []);
    };
    YourComponent();

    const { AddCart } = useContext(CartList);
    const { products } = useContext(ProductList);
    const { id } = useParams();
    const product = products.find(prod => prod.id === Number(id));

    const handleAddcart = () => {
        toast.success('Them san pham thanh cong');
        AddCart(product);
    };
    return (
        <>
            <div className={Styles.container__addCart}>
                <ToastContainer />
                <div className={Styles.wrapper}>
                    <div className={Styles.title__product}>{products.name}</div>
                    <div className={Styles.wrapper__box}>
                        <div className={Styles.product}>
                            <div className={Styles.product__left}>
                                {products && <img src={products.img} alt={products.name} />}
                            </div>
                            <div className={Styles.product__right}>
                                <div className={Styles.product__info}>
                                    <div className={Styles.product__info}>
                                        <h4 className={Styles.products__sale}>Online giá rẻ quá</h4>
                                        <h4 className={Styles.price__list}>{products.price}</h4>
                                        <h4 className={Styles.price__list}>{products.oldPrice}</h4>
                                    </div>
                                </div>
                                <div className={Styles.product__option}>
                                    <div className={Styles.khuyenmai}>
                                        <h5>Khuyến mãi</h5>
                                    </div>
                                    <div className={Styles.list__sale}>
                                        <p className={Styles.list__sale_vanban}>
                                            Cơ hội trúng 10 xe máy Yamaha Sirius mỗi tháng, tổng giải thưởng lên đến 390
                                            T
                                        </p>
                                        <p className={Styles.list__sale_vanban}>
                                            Nhập mã VNPAYTGDD4 giảm từ 50,000đ đến 100,000đ (áp dụng tùy giá trị đơn
                                            hàng) khi thanh toán qua VNPAY-QR{' '}
                                        </p>
                                        <p className={Styles.list__sale_vanban}>
                                            Cơ hội nhận ngay Phiếu mua hàng trị giá 1,000,000đ khi tham gia Trả góp
                                            Duyệt qua điện thoại, giao hàng tận nhà{' '}
                                        </p>
                                    </div>
                                    <div className={Styles.box__handle}>
                                        <div className={Styles.add__to__cart}>
                                            <Link onClick={handleAddcart}>Thêm vào giỏ hàng</Link>
                                        </div>
                                        <div className={Styles.add__to__cart}>
                                            <Link to={`/product/addCart/${products.id}`}>Mua ngay</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

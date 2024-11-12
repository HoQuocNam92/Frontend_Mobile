import { useContext, useEffect } from 'react';
import { ProductList } from '../../../Context/AuthProducts/AuthProducts';
import { useParams } from 'react-router-dom';
import Styles from '../Accessory/Phukien.module.scss';
import { Link } from 'react-router-dom';
import { CartList } from '../../../Context/AuthCart/AuthCart';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Phukien() {
    const YourComponent = () => {
        useEffect(() => {
            window.scrollTo({ top: 0, behavior: 'instant' }); // Cuộn về đầu trang khi component được mount
        }, []);
    };
    YourComponent();

    const { AddCart } = useContext(CartList);
    const { products_phukien } = useContext(ProductList);
    const { id } = useParams();
    const product_phukien = products_phukien.find(prod => prod.id === Number(id));

    const handleAddcart = () => {
        toast.success('Them san pham thanh cong');
        AddCart(product_phukien);
    };
    return (
        <>
            <div className="container__addCart">
                <ToastContainer />
                <div className="wrapper">
                    <div className="title__product">{product_phukien.name}</div>
                    <div className="wrapper__box">
                        <div className="product product__box">
                            <div className="product__left">
                                {product_phukien && <img src={product_phukien.img} alt={product_phukien.name} />}
                            </div>
                            <div className="product__right">
                                <div className="product__info">
                                    <div className="product__info--price">
                                        <h4 className="products__sale">Online giá rẻ quá</h4>
                                        <h4 className="price__list-new">{product_phukien.price}</h4>
                                        <h4 className="price__list-old">{product_phukien.oldPrice}</h4>
                                    </div>
                                </div>
                                <div className="product__option-list">
                                    <div className="khuyenmai">
                                        <h5>Khuyến mãi</h5>
                                    </div>
                                    <div className="list__sale">
                                        <p className="list__sale_vanban">
                                            Cơ hội trúng 10 xe máy Yamaha Sirius mỗi tháng, tổng giải thưởng lên đến 390
                                            T
                                        </p>
                                        <p className="list__sale_vanban">
                                            Nhập mã VNPAYTGDD4 giảm từ 50,000đ đến 100,000đ (áp dụng tùy giá trị đơn
                                            hàng) khi thanh toán qua VNPAY-QR{' '}
                                        </p>
                                        <p className="list__sale_vanban">
                                            Cơ hội nhận ngay Phiếu mua hàng trị giá 1,000,000đ khi tham gia Trả góp
                                            Duyệt qua điện thoại, giao hàng tận nhà{' '}
                                        </p>
                                    </div>
                                    <div className="box__handle">
                                        <div className="add__to__cart">
                                            <Link onClick={handleAddcart}>Thêm vào giỏ hàng</Link>
                                        </div>
                                        <div className="add__to__cart">
                                            <Link to={`/product/addCart/${product_phukien.id}`}>Mua ngay</Link>
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

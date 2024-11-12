import { useContext, useEffect, useState } from 'react';
import { ProductList } from '../../../Context/ProductProvider/ProductProvider';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Styles from '../Mobile/Mobile.module.scss';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import one from '../../../Components/Image/Điện thoại vivo V30e/vivo-v30e-12gb638534624570011180.jpg';
import two from '../../../Components/Image/Điện thoại vivo V30e/vivo-v30e-12gb638534624573591252.jpg';
import three from '../../../Components/Image/Điện thoại vivo V30e/vivo-v30e-12gb638534624571971200.jpg';
import four from '../../../Components/Image/Điện thoại vivo V30e/vivo-v30e-12gb638534624574511216.jpg';

export default function Mobile() {
    const Img = [one, two, three, four];
    const [SlideShow, setSlideShow] = useState([one]);
    const [currentIndex, setCurentIndex] = useState(1);
    const slideShowRight = () => {
        setCurentIndex(currentIndex + 1);
        setSlideShow(Img[currentIndex]);
        if (Img.length - 2 < currentIndex) {
            setCurentIndex(3);
        }
    };
    const slideShowLeft = () => {
        setCurentIndex(currentIndex - 1);
        setSlideShow(Img[currentIndex]);
        if (0 === currentIndex) {
            setCurentIndex(0);
        }
    };

    const YourComponent = () => {
        useEffect(() => {
            window.scrollTo({ top: 0, behavior: 'instant' }); // Cuộn về đầu trang khi component được mount
        }, []);
    };
    YourComponent();
    const { islogin } = useContext(AuthContext);
    const { products_mobile } = useContext(ProductList);
    const { id } = useParams();
    const navigate = useNavigate();

    // Lấy sản phẩm theo id
    const product_mobile = products_mobile?.find(prod => prod.id === Number(id));

    const handleAddcart = async e => {
        e.preventDefault();

        if (!product_mobile) {
            alert('Sản phẩm không tồn tại.');
            return;
        }

        if (!islogin) {
            alert('Đăng nhập rồi mới thêm giỏ hàng');
            navigate('/login');
        } else {
            try {
                await axios.post('http://localhost:8080/api/routes/cart', {
                    id: product_mobile.id,
                    name: product_mobile.name,
                    price: product_mobile.price,
                    oldPrice: product_mobile.oldPrice,
                });

                toast.success('Thêm sản phẩm thành công!');
            } catch (err) {
                console.error('Lỗi xảy ra:', err);
                alert('Không thể thêm sản phẩm vào giỏ hàng.');
            }
        }
    };

    if (!product_mobile) {
        return <p>Sản phẩm không tồn tại.</p>;
    }

    return (
        <>
            <div className={Styles.container__addCart}>
                <ToastContainer />
                <div className={Styles.wrapper}>
                    <div className={Styles.title__product}>
                        <h1>{product_mobile.name}</h1>
                    </div>
                    <div className={Styles.wrapper__box}>
                        <div className={Styles.product}>
                            <div className={Styles.left_slideShow}>
                                <i id="left" onClick={slideShowLeft} class="fa-solid fa-caret-left"></i>
                            </div>
                            <div className={Styles.product__left}>
                                <img className={Styles.img_products_mobile} src={SlideShow} alt={product_mobile.name} />
                                <div className={Styles.product_details}>
                                    <div className={Styles.info_details}>
                                        <div className={Styles.titile_store}>
                                            <h1>Quốc Nam Store Cam Kết</h1>
                                        </div>
                                        <div className={Styles.info_product_safe}>
                                            <i class="fa-solid fa-shield"></i>Bảo hành chính hãng điện thoại 1 năm tại
                                            các trung tâm bảo hành hãng
                                        </div>
                                        <div className={Styles.info_product_box}>
                                            <i class="fa-solid fa-box"></i> Bộ sản phẩm gồm: Hộp, Sách hướng dẫn ,Cây
                                            lấy sim, Ốp lưng, Củ sạc nhanh
                                        </div>
                                        <div className={Styles.info_product_changeError}>
                                            <i class="fa-solid fa-bolt"></i> Hư gì đổi nấy 12 tháng tại 2966 siêu thị
                                            toàn quốc (miễn phí tháng đầu)
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={Styles.right_slideShow}>
                                <i id="right" onClick={slideShowRight} class="fa-solid fa-caret-right"></i>
                            </div>
                            <div className={Styles.product__right}>
                                <div className={Styles.product__right}>
                                    <div className={Styles.product__info}>
                                        <div className={Styles.product__info}>
                                            <h4 className={Styles.products__sale}>Online giá rẻ quá</h4>
                                            <h4 className={Styles.price__list}>{product_mobile.price}</h4>
                                            <h4 className={Styles.price__list}>{product_mobile.oldPrice}</h4>
                                        </div>
                                    </div>
                                    <div className={Styles.product__option}>
                                        <div className={Styles.product__option}>
                                            <div className={Styles.khuyenmai}>
                                                <h5>Khuyến mãi</h5>
                                                <p>Giá và khuyến mãi có thể kết thúc hơn dự kiến</p>
                                            </div>
                                            <div className={Styles.list__sale}>
                                                <p className={Styles.list__sale_vanban}>
                                                    1.Cơ hội trúng 10 xe máy Yamaha Sirius mỗi tháng, tổng giải thưởng
                                                    lên đến 5 Tỷ
                                                </p>
                                                <p className={Styles.list__sale_vanban}>
                                                    2.Nhập mã VNPAYTGDD4 giảm từ 50,000đ đến 100,000đ (áp dụng tùy giá
                                                    trị đơn hàng) khi thanh toán qua VNPAY-QR
                                                </p>
                                                <p className={Styles.list__sale_vanban}>
                                                    3.Cơ hội nhận ngay Phiếu mua hàng trị giá 1,000,000đ khi tham gia
                                                    Trả góp Duyệt qua điện thoại, giao hàng tận nhà
                                                </p>
                                            </div>
                                        </div>
                                        <div className={Styles.info_transport}>
                                            <h5>Thông tin vận chuyển</h5>
                                            <p>Giao từ 12h-14h , ngày mai miễn phí</p>
                                        </div>
                                        <div className={Styles.box__handle}>
                                            <div className={Styles.add_cart}>
                                                <Link to="#" onClick={handleAddcart}>
                                                    Thêm vào giỏ{' '}
                                                </Link>
                                            </div>
                                            <div className={Styles.buy_installment}>
                                                <Link to="#" onClick={handleAddcart}>
                                                    Mua trả góp{' '}
                                                </Link>
                                            </div>

                                            <div className={Styles.buy_now}>
                                                <Link to={`/product/addCart/${product_mobile._id}`}>Mua ngay</Link>
                                            </div>
                                            <div className={Styles.installment_by_card}>
                                                <Link to={`/product/addCart/${product_mobile._id}`}>
                                                    Trả góp mua thẻ
                                                </Link>
                                            </div>
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

import { useContext, useEffect, useState } from 'react';
import { ProductList } from '../../../Context/ProductProvider/ProductProvider';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Styles from '../Laptop/Laptop.module.scss';
import { CartList } from '../../../Context/CartProvider/CartProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import one from '../../../Components/Image/Asus Vivobook 19/seven.jpg';
import two from '../../../Components/Image/Asus Vivobook 19/two.jpg';
import three from '../../../Components/Image/Asus Vivobook 19/three.jpg';
import four from '../../../Components/Image/Asus Vivobook 19/four.jpg';
import five from '../../../Components/Image/Asus Vivobook 19/five.jpg';
import six from '../../../Components/Image/Asus Vivobook 19/six.jpg';
import seven from '../../../Components/Image/Asus Vivobook 19/one.jpg';
import detailspro from '../../../Components/Image/Asus Vivobook 19/asus-vivobook-15-oled-a1505va-i5-l1341w-note.jpg';
export default function Laptop() {
    const Img = [one, two, three, four, five, six, seven];
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

    const { AddCart } = useContext(CartList);
    const { products_laptap } = useContext(ProductList);
    const { id } = useParams();
    const product_laptop = products_laptap.find(prod => prod.id === Number(id));
    const YourComponent = () => {
        useEffect(() => {
            window.scrollTo({ top: 0, behavior: 'instant' }); // Cuộn về đầu trang khi component được mount
        }, []);
    };
    YourComponent();

    const handleAddcart = () => {
        toast.success('Them san pham thanh cong');
        AddCart(product_laptop);
    };
    return (
        <>
            <div className={Styles.container__addCart}>
                <ToastContainer />
                <div className={Styles.wrapper}>
                    <div className={Styles.title__product}>{product_laptop.name}</div>
                    <div className={Styles.wrapper__box}>
                        <div className={Styles.product__box}>
                            <div className={Styles.left_slideShow}>
                                <i id="left" onClick={slideShowLeft} class="fa-solid fa-caret-left"></i>
                            </div>
                            <div className={Styles.product__left_laptop}>
                                <img className={Styles.img_products_laptop} src={SlideShow} alt={product_laptop.name} />
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
                                <div className={Styles.info_details_skill}>
                                    <div className={Styles.img_details_skill}>
                                        <img src={detailspro} />
                                    </div>
                                    <div className={Styles.process_details}>
                                        <ul>
                                            <li>
                                                <aside>
                                                    <strong>Công nghệ CPU : </strong>
                                                </aside>{' '}
                                                <aside>
                                                    <span>Intel Core i5 Raptor Lake - 13500H</span>{' '}
                                                </aside>
                                            </li>
                                            <li>
                                                <aside>
                                                    {' '}
                                                    <strong>Số nhân : </strong>
                                                </aside>{' '}
                                                <aside>
                                                    <span className={Styles.sonhan}></span>12
                                                </aside>
                                            </li>
                                            <li>
                                                <aside>
                                                    {' '}
                                                    <strong>Số luồng : </strong>
                                                </aside>{' '}
                                                <aside>
                                                    <span className={Styles.sonhan1}></span>16
                                                </aside>
                                            </li>
                                            <li>
                                                <aside>
                                                    <strong>Tốc độ CPU :</strong>
                                                </aside>{' '}
                                                <aside>
                                                    <span className={Styles.sonhan2}></span>2.6GHz
                                                </aside>
                                            </li>
                                            <li>
                                                <aside>
                                                    <strong>Tốc độ tối đa :</strong>{' '}
                                                </aside>{' '}
                                                <aside>
                                                    <span className={Styles.sonhan3}> Turbo Boost 4.7 GHz</span>
                                                </aside>
                                            </li>
                                            <li>
                                                <aside>
                                                    <strong>Bộ nhớ đệm : </strong>{' '}
                                                </aside>{' '}
                                                <aside>
                                                    <span className={Styles.sonhan4}>18 MB</span>
                                                </aside>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className={Styles.right_slideShow}>
                                <i id="right" onClick={slideShowRight} class="fa-solid fa-caret-right"></i>
                            </div>
                            <div className={Styles.product__right}>
                                <div className={Styles.product__rightlist}>
                                    <div className={Styles.product__info}>
                                        <div className={Styles.product__info__size} div>
                                            <h4 className={Styles.products__sale}>Online giá rẻ quá</h4>
                                            <h4 className={Styles.price__listnew}>{product_laptop.price}</h4>
                                            <h4 className={Styles.price__listold}>{product_laptop.oldPrice}</h4>
                                        </div>
                                    </div>
                                    <div className={Styles.product__optionlist}>
                                        <div className={Styles.product__optiontop}>
                                            <div className={Styles.khuyenmai}>
                                                <h5>Khuyến mãi</h5>
                                                <p>Giá và khuyến mãi có thể kết thúc hơn dự kiến</p>
                                            </div>
                                            <div className={Styles.list__sale}>
                                                <p className={Styles.list__sale_vanban}>
                                                    1. Cơ hội trúng 10 xe máy Yamaha Sirius mỗi tháng, tổng giải thưởng
                                                    lên đến 5 Tỷ
                                                </p>
                                                <p className={Styles.list__sale_vanban}>
                                                    2. Nhập mã VNPAYTGDD4 giảm từ 50,000đ đến 100,000đ (áp dụng tùy giá
                                                    trị đơn hàng) khi thanh toán qua VNPAY-QR
                                                </p>
                                                <p className={Styles.list__sale_vanban}>
                                                    3. Cơ hội nhận ngay Phiếu mua hàng trị giá 1,000,000đ khi tham gia
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
                                                <Link to={`/product/addCart/${product_laptop._id}`}>Mua ngay</Link>
                                            </div>
                                            <div className={Styles.installment_by_card}>
                                                <Link to={`/product/addCart/${product_laptop._id}`}>
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

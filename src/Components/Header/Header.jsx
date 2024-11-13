import { Link } from 'react-router-dom';
import Styles from './Header.module.scss';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '@Context/AuthProvider/AuthProvider';
import { SlideBarContext } from '@Context/SliderBarProvider/SliderBarProvider';
export default function Navbar() {
    const { islogin, userName } = useContext(AuthContext);
    const [searchs, setSeachs] = useState('Mobile Quoc Nam');
    const { isOpen, setIsOpen } = useContext(SlideBarContext);
    console.log(isOpen);
    useEffect(() => {
        document.title = searchs;
    }, [searchs]);

    return (
        <div className={Styles.navbar}>
            <div className={Styles.navbar__top}>
                <div className={Styles.logo}>
                    <h1 className={Styles.logo_icons}>
                        <Link to="/"> Quốc Nam Store</Link>
                    </h1>
                </div>
                <div className={Styles.search}>
                    <input
                        type="text"
                        className={Styles.search_mobile}
                        onChange={e => setSeachs(e.target.value)}
                        placeholder="Bạn tìm gì..."
                    />
                    <button>
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </button>
                </div>
                <div className={Styles.intro}>
                    <div className={Styles.login_box}>
                        {islogin ? (
                            <>
                                <h6 className={Styles.login_box_box}>
                                    <Link>
                                        <i class="fa-regular fa-user"></i>
                                        {userName}
                                    </Link>
                                </h6>
                            </>
                        ) : (
                            <>
                                <h6 className={Styles.login_box_box}>
                                    <Link
                                        onClick={() => {
                                            setIsOpen(!isOpen);
                                        }}
                                    >
                                        <i class="fa-regular fa-user"></i>Đăng
                                        nhập
                                    </Link>
                                </h6>
                            </>
                        )}
                    </div>
                </div>

                <div className={Styles.intro}>
                    <div className={Styles.login_box}>
                        <h6 className={Styles.cart_box_box}>
                            <Link to="/cart">
                                <i class="fa-solid fa-cart-shopping"></i>Giỏ
                                hàng
                            </Link>
                        </h6>
                    </div>
                </div>
            </div>
        </div>
    );
}

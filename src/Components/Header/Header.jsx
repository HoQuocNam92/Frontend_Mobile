import { Link } from 'react-router-dom';
import './Navbar.css';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import { ThemeContext } from '../ThemeMode/ThemeMode';
export default function Navbar() {
    const { isDarkModes, toggleTheme } = useContext(ThemeContext);
    const { islogin, userName } = useContext(AuthContext);
    const [searchs, setSeachs] = useState('Mobile Quoc Nam');
    useEffect(() => {
        document.title = searchs;
    }, [searchs]);

    return (
        <div className={isDarkModes ? 'dark' : 'light'}>
            <div className="navbar">
                <div className="navbar__top">
                    <div className="logo">
                        <h1 className="logo_icons">
                            <Link to="/"> Quốc Nam Store</Link>
                        </h1>
                    </div>
                    <div className="intro">
                        <h6 className="tutorial">
                            Hướng dẫn <br /> mua hàng trả góp
                        </h6>
                    </div>
                    <div className="intro">
                        <h6 className="shipper">
                            Vận chuyển <br /> vận chuyển toàn quốc{' '}
                        </h6>
                    </div>
                    <div className="intro">
                        <div className="login_box--box">
                            {islogin ? (
                                <>
                                    <h6 className="login_box">
                                        <Link to="/login">
                                            <i class="fa-regular fa-user"></i>
                                            {userName}
                                        </Link>
                                    </h6>
                                </>
                            ) : (
                                <>
                                    <h6 className="login_box">
                                        <Link to="/login">
                                            <i class="fa-regular fa-user"></i>Đăng nhập
                                        </Link>
                                    </h6>
                                </>
                            )}
                        </div>
                    </div>

                    <div className="intro">
                        <div className="login_box--box">
                            <h6 className="cart_box">
                                <Link to="/cart">
                                    <i class="fa-solid fa-cart-shopping"></i>Giỏ hàng
                                </Link>
                            </h6>
                        </div>
                    </div>

                    <button onClick={toggleTheme}>Changed Theme Click </button>
                    <div className="search">
                        <input
                            type="text"
                            className="search_mobile"
                            onChange={e => setSeachs(e.target.value)}
                            placeholder="Tìm kiếm"
                        />
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </div>
                </div>
            </div>
        </div>
    );
}

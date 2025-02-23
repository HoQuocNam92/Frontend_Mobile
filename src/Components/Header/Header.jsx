import { Link, useNavigate } from 'react-router-dom';
import './Header.css';
import { useContext, useEffect, useState } from 'react';
import { SlideBarContext } from '@Context/SliderBarProvider/SliderBarProvider';
import { logOut } from '@Reduxtoolkit/ReduxSlice';

import { useDispatch, useSelector } from 'react-redux';
export default function Navbar() {
    const dispatch = useDispatch();
    const isLogin = useSelector(state => state.cart.isLogin);
    const [searchs, setSeachs] = useState('Mobile Quoc Nam');
    const { Login, setLogin } = useContext(SlideBarContext);
    const Navigate = useNavigate();
    const handleChangeStatus = () => {
        dispatch(logOut());
    };
    const handleCartItems = () => {
        if (!isLogin) {
            alert('You must login after add Items');
            return;
        } else {
            Navigate('/cart');
        }
    };
    const handleSearch = () => {};
    useEffect(() => {
        document.title = searchs;
    }, [searchs]);

    return (
        <div >
            <div >
                <div >
                    <h1 >
                        <Link to="/"> Quốc Nam Store</Link>
                    </h1>
                </div>
                <div >
                    <input
                        type="text"
                        
                        onChange={e => setSeachs(e.target.value)}
                        placeholder="Bạn tìm gì..."
                    />
                    <button onClick={handleSearch}>
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </button>
                </div>
                <div >
                    <div >
                        {isLogin ? (
                            <>
                                <h6 >
                                    <button onClick={handleChangeStatus}>
                                        <i class="fa-regular fa-user"></i>
                                        Đăng xuất
                                    </button>
                                </h6>
                            </>
                        ) : (
                            <>
                                <h6 >
                                    <button
                                        onClick={() => {
                                            setLogin(!Login);
                                        }}
                                    >
                                        <i class="fa-regular fa-user"></i>Đăng nhập
                                    </button>
                                </h6>
                            </>
                        )}
                    </div>
                </div>

                <div >
                    <div >
                        <h6 >
                            <button onClick={handleCartItems}>
                                <i class="fa-solid fa-cart-shopping"></i>Giỏ hàng
                            </button>
                        </h6>
                    </div>
                </div>
            </div>
        </div>
    );
}

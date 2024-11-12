import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Styles from './Login.module.scss';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import axios from 'axios';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
export default function Login() {
    const { islogin, login, logout } = useContext(AuthContext);
    const [fromLogin, setFromLogin] = useState({
        username: '',
        password: '',
    });

    const navigare = useNavigate();

    const handleShowPassword = () => {
        const password_check = document.getElementById('user__password');
        const checkPassword = password_check.getAttribute('type');
        if (checkPassword === 'password') {
            password_check.setAttribute('type', 'text');
        } else {
            password_check.setAttribute('type', 'password');
        }
    };
    const hadleChangeLogin = e => {
        const { name, value } = e.target;
        setFromLogin({ ...fromLogin, [name]: value });
    };

    const submitLogin = async e => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8080/api/routes/login', fromLogin);
            toast.success('Success Login');
            localStorage.setItem('token', response.data.token);
            setTimeout(() => {
                navigare('/');
            }, 1000);
            login(fromLogin.username);
        } catch (err) {
            toast.error('Error Login');
        }
    };

    return (
        <div className="container">
            <ToastContainer />
            <div className="content">
                <div className="content__box">
                    {islogin ? (
                        <>
                            <button onClick={logout}>Đăng xuất</button>
                        </>
                    ) : (
                        <>
                            <div className="content__left">
                                <h1 className="title">No. 1 reputation in Vietnam</h1>
                                <h1 className="future">Welcome Quoc Nam Mobile!</h1>
                                <p className="introduce">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    <br /> Exercitationem, animi sapiente laborum dolore beatae
                                    <br /> repellendus ad fuga! Eligendi,
                                </p>
                            </div>
                            <div className="content__right">
                                <div className="welcome-login">
                                    <h3 className="welcome__back">Welcome Back</h3>
                                    <h1 className="login__account">Log In to your Account</h1>
                                </div>

                                <form className="login-form" onSubmit={submitLogin}>
                                    <input
                                        type="text"
                                        className="username"
                                        name="username"
                                        value={fromLogin.username}
                                        id="user__name"
                                        placeholder="Username"
                                        onChange={hadleChangeLogin}
                                    />
                                    <input
                                        type="password"
                                        id="user__password"
                                        className="password"
                                        name="password"
                                        value={fromLogin.password}
                                        placeholder="Password"
                                        onChange={hadleChangeLogin}
                                    />
                                    <label className="show-password">
                                        <input type="checkbox" id="show__password" onChange={handleShowPassword} />
                                        Show password
                                    </label>
                                    <div className="forgot-remember">
                                        <label className="remember">
                                            <input className="remember__checkbox" type="checkbox" />
                                            Remember me
                                        </label>
                                        <Link to="/forgot-password" className="forgot-password">
                                            Forgot Password?
                                        </Link>
                                    </div>

                                    <button type="submit" className="login-button">
                                        Log In
                                    </button>
                                </form>

                                <div className="social-login">
                                    <button className="google-login">
                                        <i className="fab fa-google"></i>
                                        Log In with Google
                                    </button>
                                    <button className="facebook-login">
                                        <i className="fab fa-facebook"></i>
                                        Log In with Facebook
                                    </button>
                                </div>

                                <div className="sign-up">
                                    <p>I don't have an account</p>
                                    <Link to="/SingUp" className="create-account">
                                        Create Account
                                    </Link>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

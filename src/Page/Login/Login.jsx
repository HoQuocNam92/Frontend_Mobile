import React, { useContext, useReducer, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Styles from './Login.module.scss';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import axios from 'axios';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
const Reducer = (state, action) => {
    switch (action.type) {
        case 'userAndpass':
            return { ...state, [action.name]: action.value };
        default:
            return state;
    }
};

export default function Login() {
    const [fromLogin, setFromLogin] = useReducer(Reducer, {
        username: '',
        password: '',
    });
    const { islogin, login, logout } = useContext(AuthContext);

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

    const submitLogin = async e => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8080/api/routes/login', fromLogin);
            toast.success('Success Login');
            console.log(response.data.Accesstoken);
            localStorage.setItem('token', response.data.Accesstoken);
            setTimeout(() => {
                navigare('/');
            }, 1000);
            login(fromLogin.username);
        } catch (err) {
            toast.error('Error Login');
        }
    };
    const handleChange = e => {
        const { name, value } = e.target;
        setFromLogin({ type: 'userAndpass', name, value });
    };

    return (
        <div className={Styles.container}>
            <ToastContainer />
            <div className={Styles.content}>
                <div className={Styles.content__box}>
                    {islogin ? (
                        <>
                            <button onClick={logout}>Đăng xuất</button>
                        </>
                    ) : (
                        <>
                            <div className={Styles.content__left}>
                                <h1 className={Styles.title}>No. 1eputation in Vietnam</h1>
                                <h1 className={Styles.future}>Welcoe Quoc Nam Mobile!</h1>
                                <p className={Styles.introduce}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    <br /> Exercitationem, animi sapiente laborum dolore beatae
                                    <br /> repellendus ad fuga! Eligendi,
                                </p>
                            </div>
                            <div className={Styles.content__righ}>
                                <div className={Styles.welcome - login}>
                                    <h3 className={Styles.welcome__back}>Welcome Back</h3>
                                    <h1 className={Styles.login__accoun}>Log In to your Account</h1>
                                </div>

                                <form className={Styles.login} Submit={submitLogin}>
                                    <input
                                        type="text"
                                        className={Styles.username}
                                        name="username"
                                        value={fromLogin.username}
                                        id="user__name"
                                        placeholder="Username"
                                        onChange={handleChange}
                                    />
                                    <input
                                        type="password"
                                        id="user__password"
                                        className={Styles.password}
                                        name="password"
                                        value={fromLogin.password}
                                        placeholder="Password"
                                        onChange={handleChange}
                                    />
                                    <label className={Styles.show}>
                                        <input type="checkbox" id="show__password" onChange={handleShowPassword} />
                                        Show password
                                    </label>
                                    <div className={Styles.forgot}>
                                        <label className={Styles.remember}>
                                            <input className={Styles.remember__che} type="checkbox" />
                                            Remember me
                                        </label>
                                        <Link to="/forgot-password" className={Styles.forgot}>
                                            Forgot Password?
                                        </Link>
                                    </div>

                                    <button type="submit" className={Styles.login} onClick={submitLogin}>
                                        Log In
                                    </button>
                                </form>

                                <div className={Styles.social}>
                                    <button className={Styles.google}>Log In with Google</button>
                                    <button className={Styles.facebook}>
                                        <i className={Styles}></i>
                                        Log In with Facebook
                                    </button>
                                </div>

                                <div className={Styles.sign}>
                                    <p>I don't have an account</p>
                                    <Link to="/SingUp" className={Styles.create}>
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

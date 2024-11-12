import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './register.css';
import axios from 'axios';

export default function Login() {
    const [formData, setFormData] = useState({
        email: '',
        username: '',
        password: '',
    });
    const navigare = useNavigate();

    console.log(formData);
    const handleChange = e => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleSubmit = async e => {
        e.preventDefault(); // Ngăn trình duyệt refresh trang
        console.log('Check data', formData);
        try {
            await axios.post('http://localhost:8080/api/routes/register', formData);
            navigare('/Login');
        } catch {
            alert('Đăng ký thất bại');
        }
    };
    return (
        <div className="container">
            <div className="content">
                <div className="content__box">
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
                            <h1 className="login__account">Sing Up to your Account </h1>
                        </div>

                        <form className="login-form" onSubmit={handleSubmit}>
                            <input
                                type="text"
                                className="username"
                                id="user__email"
                                name="email"
                                value={formData.email}
                                placeholder="Email"
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="text"
                                className="username"
                                id="user__name"
                                name="username"
                                value={formData.userName}
                                placeholder="Username"
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="password"
                                className="password"
                                id="user__password"
                                placeholder="Password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                            />

                            <div className="forgot-remember">
                                <label className="remember">
                                    <input type="checkbox" className="remember__checkbox" />
                                    Remember me
                                </label>
                                <Link to="/forgot-password" className="forgot-password">
                                    Forgot Password?
                                </Link>
                            </div>
                            <input type="submit" className="login-button" value={'Sign Up'} />
                        </form>

                        <div className="social-login">
                            <button className="google-login">
                                <i className="fab fa-google"></i>
                                Sign Up with Google
                            </button>
                            <button className="facebook-login">
                                <i className="fab fa-facebook"></i>
                                Sign Up with Facebook
                            </button>
                        </div>

                        <div className="sign-up">
                            <p>I do have aa account</p>
                            <Link to="/login" className="create-account">
                                Login Account
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

import Styles from '@Components/SignUp/SignUp.module.scss';
import classNames from 'classnames';
import { SlideBarContext } from '@Context/SliderBarProvider/SliderBarProvider';
import { useContext, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { useFormik } from 'formik';
import * as Yup from 'yup';
function Slider() {
    const { container, overlay, content, slider } = Styles;
    const { SignUp, setSignUp, Login, setLogin } = useContext(SlideBarContext);
    const handleToggle = () => {
        setSignUp(!SignUp);
    };
    const handleToggleLogIn = () => {
        setLogin(!Login);
        setSignUp(!SignUp);
        console.log('Check login va sign', Login, SignUp);
    };
    const formik = useFormik({
        initialValues: { email: '', username: '', password: '' },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email').required('Email is required'),
            username: Yup.string().min(3, 'Username must be at least 3 characters').required('Username is required'),
            password: Yup.string().min(2, 'Password must be at least 8 characters').required('Password is required'),
        }),
        onSubmit: async values => {
            console.log('Check Values ', values);
            try {
                const response = await axios.post('http://localhost:8080/api/routes/register', values);
                if (response.status === 200 && response.data) {
                    // toast.success('Successfully registered');
                    handleToggleLogIn();
                } else {
                    // toast.error(response.data?.message || 'Failed to register');
                }
            } catch (err) {
                // toast.error('Failed to register');
                console.error(err);
            }
        },
    });

    return (
        <div className={container}>
            <ToastContainer />
            <div
                className={classNames({
                    [overlay]: SignUp,
                })}
                onClick={handleToggle}
            />

            <div
                className={classNames(content, {
                    [slider]: SignUp,
                })}
            >
                <div className="px-[20px] pt-[30px] ">
                    <div className="text-[18px] mb-[30px] mx-[120px]  ">SIGN UP</div>
                    <form onSubmit={formik.handleSubmit}>
                        <div>
                            <div>
                                <label>Email *</label>
                            </div>
                            <input
                                className="w-[310px]  h-[40px] p-[10px] border-2 border-solid border-[#ccc]  "
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                name="email"
                                type="email"
                            />
                        </div>
                        <div>
                            <div>
                                <label>Username *</label>
                            </div>
                            <input
                                className="w-[310px]  h-[40px] p-[10px]  border-2 border-solid border-[#ccc]  "
                                name="username"
                                value={formik.values.username}
                                onChange={formik.handleChange}
                                type="text"
                            />
                        </div>
                        <div>
                            <div>
                                <label>Password *</label>
                            </div>
                            <input
                                className="w-[310px]  h-[40px] p-[10px] border-2 border-solid border-[#ccc] "
                                name="password"
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                type="password"
                            />
                        </div>
                        <div className="mt-[20px]">
                            <input type="checkbox" />
                            <label className="ml-[10px]">Remember me</label>
                        </div>
                        <div className="my-[20px]">
                            <button
                                className="w-[310px] h-[40px] bg-[#333333] text-white font-bold rounded-md   "
                                type="submit"
                            >
                                SIGN UP
                            </button>
                        </div>
                    </form>
                    <div className="my-[20px]" onClick={handleToggleLogIn}>
                        <button className="w-[310px] h-[40px] border-2 border-solid border-[#ccc] text-black font-bold rounded-md">
                            You have a Account !
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Slider;

import Styles from '@Components/LogIn/LogIn.module.scss';
import classNames from 'classnames';
import { SlideBarContext } from '@Context/SliderBarProvider/SliderBarProvider';
import { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '@Reduxtoolkit/ReduxSlice';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { useFormik } from 'formik';
import * as Yup from 'yup';
function Slider() {
    const dispatch = useDispatch();
    const { SignUp, setSignUp, Login, setLogin } = useContext(SlideBarContext);
    const handleToggle = () => {
        setLogin(!Login);
    };
    const handleToggleLogIn = () => {
        setLogin(!Login);
        setSignUp(!SignUp);
    };
    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        validationSchema: Yup.object({
            username: Yup.string()
                .required('Username is required')
                .min(1, 'Username must be at least 3 characters long'),
            password: Yup.string()
                .required('Password is required')
                .min(1, 'Password must be at least 6 characters long'),
        }),
        onSubmit: async value => {
            const { username, password } = value;
            console.log(username, password);
            try {
                const response = await axios.post('http://localhost:8080/api/routes/login', {
                    username: username,
                    password: password,
                });
                localStorage.setItem('token', response.data);
                if (response.data) {
                    dispatch(logIn());
                    handleToggle();
                }
            } catch (err) {
                toast.error('Invalid credentials');
            }
        },
    });

    const { container, overlay, content, slider } = Styles;

    return (
        <div className={container}>
            <ToastContainer />
            <div
                className={classNames({
                    [overlay]: Login,
                })}
                onClick={handleToggle}
            />

            <div
                className={classNames(content, {
                    [slider]: Login,
                })}
            >
                <div className="px-[20px] pt-[30px] ">
                    <div className="text-[18px] mb-[30px] mx-[120px]  ">LOG IN</div>
                    <form onSubmit={formik.handleSubmit}>
                        <div>
                            <div>
                                <label htmlFor="">Username *</label>
                            </div>
                            <input
                                className="w-[310px]  h-[40px] p-[10px]  border-2 border-solid border-[#ccc]  "
                                type="text"
                                onChange={formik.handleChange}
                                name="username"
                                value={formik.values.username}
                                required
                            />
                        </div>
                        <div>
                            <div>
                                <label htmlFor="">Password *</label>
                            </div>
                            <input
                                className="w-[310px]  h-[40px] p-[10px] border-2 border-solid border-[#ccc] "
                                type="password"
                                name="password"
                                onChange={formik.handleChange}
                                value={formik.values.password}
                                required
                            />
                        </div>

                        <div className="mt-[20px]">
                            <input type="checkbox" />
                            <label className="ml-[10px]" htmlFor="">
                                Remember me
                            </label>
                        </div>
                        <div className="my-[20px]">
                            <button
                                className="w-[310px] h-[40px] bg-[#333333] text-white font-bold rounded-md   "
                                type="submit"
                            >
                                LOG IN
                            </button>
                        </div>
                    </form>
                    <div className="my-[20px]" onClick={handleToggleLogIn}>
                        <button className="w-[310px] h-[40px] border-2 border-solid border-[#ccc] text-black font-bold rounded-md   ">
                            You are not have a Account !
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Slider;

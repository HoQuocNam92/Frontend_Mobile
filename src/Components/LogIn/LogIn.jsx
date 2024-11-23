import Styles from '@Components/LogIn/LogIn.module.scss';
import classNames from 'classnames';
import { SlideBarContext } from '@Context/SliderBarProvider/SliderBarProvider';
import { useContext } from 'react';

function Slider() {
    const { isOpen, setIsOpen, isLogin, setIsLogin } = useContext(SlideBarContext);

    const { container, overlay, content, slider } = Styles;
    const handleToggle = () => {
        setIsLogin(!isLogin);
    };
    const handleToggleLogIn = () => {
        setIsLogin(!isLogin);
        setIsOpen(!isOpen);
    };
    return (
        <div className={container}>
            <div
                className={classNames({
                    [overlay]: isLogin,
                })}
                onClick={handleToggle}
            />

            <div
                className={classNames(content, {
                    [slider]: isLogin,
                })}
            >
                <div className="px-[20px] pt-[30px] ">
                    <div className="text-[18px] mb-[30px] mx-[120px]  ">LOG IN</div>

                    <div>
                        <div>
                            <label htmlFor="">Username *</label>
                        </div>
                        <input
                            className="w-[310px]  h-[40px] p-[10px]  border-2 border-solid border-[#ccc]  "
                            type="text"
                        />
                    </div>
                    <div>
                        <div>
                            <label htmlFor="">Password *</label>
                        </div>
                        <input
                            className="w-[310px]  h-[40px] p-[10px] border-2 border-solid border-[#ccc] "
                            type="text"
                        />
                    </div>
                    <div className="mt-[20px]">
                        <input type="checkbox" />
                        <label className="ml-[10px]" htmlFor="">
                            Remember me
                        </label>
                    </div>
                    <div className="my-[20px]">
                        <button className="w-[310px] h-[40px] bg-[#333333] text-white font-bold rounded-md   ">
                            LOG IN
                        </button>
                    </div>
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

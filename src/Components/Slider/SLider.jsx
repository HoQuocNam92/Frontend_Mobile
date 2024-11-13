import Styles from '@Components/Slider/Slider.module.scss';
import classNames from 'classnames';
import { SlideBarContext } from '@Context/SliderBarProvider/SliderBarProvider';
import { useContext } from 'react';
function Slider() {
    const { isOpen } = useContext(SlideBarContext);
    const { container, overlay, content, slider } = Styles;
    return (
        <div className={container}>
            <div
                className={classNames({
                    [overlay]: isOpen,
                })}
            />
            <div
                className={classNames(content, {
                    [slider]: isOpen,
                })}
            >
                Content
            </div>
        </div>
    );
}

export default Slider;

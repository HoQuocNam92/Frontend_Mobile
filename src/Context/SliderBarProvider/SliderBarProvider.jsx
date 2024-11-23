import { createContext, useState } from 'react';

export const SlideBarContext = createContext();
export const SliderBarProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isLogin, setIsLogin] = useState(false);
    return (
        <SlideBarContext.Provider value={{ isOpen, setIsOpen, isLogin, setIsLogin }}>
            {children}
        </SlideBarContext.Provider>
    );
};

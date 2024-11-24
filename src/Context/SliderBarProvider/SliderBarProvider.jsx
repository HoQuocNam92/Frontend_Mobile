import { createContext, useState } from 'react';

export const SlideBarContext = createContext();
export const SliderBarProvider = ({ children }) => {
    const [SignUp, setSignUp] = useState(false);
    const [Login, setLogin] = useState(false);
    return (
        <SlideBarContext.Provider value={{ SignUp, setSignUp, Login, setLogin }}>{children}</SlideBarContext.Provider>
    );
};

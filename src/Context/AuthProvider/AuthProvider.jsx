import { createContext, useState } from 'react';
export const AuthContext = createContext();
export function AuthProvider({ children }) {
    const [islogin, setIsLogin] = useState(false);
    const [userName, setuserName] = useState('');

    const login = name => {
        setIsLogin(true);
        setuserName(name);
    };
    const logout = () => {
        setIsLogin(false);
        setuserName('');
    };
    return <AuthContext.Provider value={{ islogin, userName, login, logout }}>{children}</AuthContext.Provider>;
}

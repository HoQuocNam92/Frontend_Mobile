import { createContext, useState } from 'react';
export const ThemeContext = createContext();
export const ThemeProvider = ({ children }) => {
    const [isDarkModes, setIsDarkMode] = useState(false);
    const toggleTheme = () => {
        setIsDarkMode(!isDarkModes);
    };
    return <ThemeContext.Provider value={{ isDarkModes, toggleTheme }}>{children}</ThemeContext.Provider>;
};

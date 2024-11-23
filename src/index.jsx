import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'; // Thêm import này
import { AuthProvider } from '@Context/AuthProvider/AuthProvider';
import { AuthProducts } from '@Context/ProductProvider/ProductProvider';
import { AuthCart } from '@Context/CartProvider/CartProvider';
import { SliderBarProvider } from '@Context/SliderBarProvider/SliderBarProvider';
import App from './App';
import '@styles/main.scss';
import SignUp from '@Components/SignUp/SignUp';
import LogIn from '@Components/LogIn/LogIn';
import store from './Redux_tookit/Store';
import { Provider } from 'react-redux';

const Providers = ({ children }) => (
    <SliderBarProvider>
        <SignUp />
        <LogIn />
        <AuthProvider>
            <AuthProducts>
                <AuthCart>{children}</AuthCart>
            </AuthProducts>
        </AuthProvider>
    </SliderBarProvider>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <Providers>
            <App />
        </Providers>
    </Provider>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import { AuthProvider } from '@Context/AuthProvider/AuthProvider';
import { AuthProducts } from '@Context/ProductProvider/ProductProvider';
import { AuthCart } from '@Context/CartProvider/CartProvider';
import { SliderBarProvider } from '@Context/SliderBarProvider/SliderBarProvider';
import App from './App';
import '@styles/main.scss';
import Slider from '@Components/Slider/SLider';
const Providers = ({ children }) => (
    <SliderBarProvider>
        <Slider />
        <AuthProvider>
            <AuthProducts>
                <AuthCart>{children}</AuthCart>
            </AuthProducts>
        </AuthProvider>
    </SliderBarProvider>
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Providers>
        <App />
    </Providers>
);

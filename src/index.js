import React from 'react';
import ReactDOM from 'react-dom/client';
import { AuthProvider } from './Context/AuthProvider/AuthProvider';
import { AuthProducts } from './Context/ProductProvider/ProductProvider';
import { AuthCart } from './Context/CartProvider/CartProvider';

import App from './App';
import '@styles/main.scss';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AuthProvider>
        <AuthProducts>
            <AuthCart>
                <App />
            </AuthCart>
        </AuthProducts>
    </AuthProvider>
);

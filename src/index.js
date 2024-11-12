import React from 'react';
import ReactDOM from 'react-dom/client';
import { AuthProvider } from './Context/AuthProvider/AuthProvider';
import { AuthProducts } from './Context/ProductProvider/ProductProvider';
import { AuthCart } from './Context/CartProvider/CartProvider';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';

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

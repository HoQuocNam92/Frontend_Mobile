import ReactDOM from 'react-dom/client';
import Contact from './Page/Contact/Contact';
import Login from './Components/Login/login';
import Register from './Page/Register/Register';
import CartCurrent from './Components/CartCurrent/CartCurrent';
import Mobile from './Components/Products/Mobile/Mobile';
import Laptop from './Components/Products/Laptop/Laptop';
import Phukien from './Components/Products/Accessory/Phukien';
import Home from './Page/HomePage/Home';
import { AuthProvider } from './Context/AuthProvider/AuthProvider';
import { AuthProducts } from './Context/AuthProducts/AuthProducts';
import { AuthCart } from './Context/AuthCart/AuthCart';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from './Components/ThemeMode/ThemeMode';

// Tạo router với cấu trúc route mới
const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/product/:id',
        element: <Mobile />,
    },
    {
        path: '/product/laptop/:id',
        element: <Laptop />,
    },
    {
        path: '/product/phukien/:id',
        element: <Phukien />,
    },
    {
        path: '/product/addCart/:id',
        element: <CartCurrent />,
    },
    {
        path: '/contact',
        element: <Contact />,
    },
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/signup',
        element: <Register />,
    },
    {
        path: '/cart',
        element: <CartCurrent />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AuthProvider>
        <ThemeProvider>
            <AuthProducts>
                <AuthCart>
                    <RouterProvider router={router} />
                </AuthCart>
            </AuthProducts>
        </ThemeProvider>
    </AuthProvider>
);

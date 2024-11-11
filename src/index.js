import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Content from "./Components/Contens/Content";
import Contact from "./Components/Contact/Contact";
import Login from "./Components/Login/login";
import Register from "./Components/Register/Register";
import CartCurrent from './Components/CartCurrent/CartCurrent';
import Mobile from './Components/Products/Mobile/Mobile';
import Laptop from './Components/Products/Laptop/Laptop';
import Phukien from './Components/Products/Accessory/Phukien';
import { AuthProvider } from './Components/AuthProvider/AuthProvider';
import { AuthProducts } from './Components/AuthProducts/AuthProducts';
import { AuthCart } from './Components/AuthCart/AuthCart';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Tạo router với cấu trúc route mới
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Content /> },
      { path: "product/:id", element: <Mobile /> },
      { path: "product/laptop/:id", element: <Laptop /> },
      { path: "product/phukien/:id", element: <Phukien /> },
      { path: "product/addCart/:id", element: <CartCurrent /> },
      { path: "Contact", element: <Contact /> },
      { path: "Login", element: <Login /> },
      { path: "SignUp", element: <Register /> },
      { path: "cart", element: <CartCurrent /> }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
    <AuthProducts>
      <AuthCart>
        <RouterProvider router={router} />
      </AuthCart>
    </AuthProducts>
  </AuthProvider>
);

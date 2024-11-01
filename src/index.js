import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Content from "./Components/Content";
import Contact from "./Components/Contact";
import Login from "./Components/Login/login";
import Register from "./Components/register/Register";
import CartCurrent from './Components/CartCurrent';
import Mobile from './Components/product_mobile/Mobile';
import Laptop from './Components/product_mobile/Laptop';
import Phukien from './Components/product_mobile/Phukien';
import ScrollToTop from './Components/ScrollToTop';
import { AuthProvider } from './Components/AuthProvider';
import { AuthProducts } from './Components/AuthProducts';
import { AuthCart } from './Components/AuthCart';
import { BrowserRouter, Route, Routes } from "react-router-dom"; // Import Route và Routes

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter basename="/mobileUI"> {/* Chỉ sử dụng một BrowserRouter duy nhất */}
    <AuthProvider>
      <AuthProducts>
        <AuthCart>
          <ScrollToTop /> {/* Đặt ScrollToTop ở đây */}
          <Routes>
            <Route path="/" element={<App />}>
              <Route index element={<Content />} /> {/* Trang chính */}
              <Route path="product/:id" element={<Mobile />} />
              <Route path="product/laptop/:id" element={<Laptop />} />
              <Route path="product/phukien/:id" element={<Phukien />} />
              <Route path="product/addCart/:id" element={<CartCurrent />} />
              <Route path="Contact" element={<Contact />} />
              <Route path="Login" element={<Login />} />
              <Route path="SingUp" element={<Register />} />
              <Route path="cart" element={<CartCurrent />} />

            </Route>
          </Routes>

        </AuthCart>
      </AuthProducts>
    </AuthProvider>
  </BrowserRouter>
);

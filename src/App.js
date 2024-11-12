import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Page/HomePage/Home';
import Layout from './Routes/LayoutPage/Layout';
import { PublicRouter } from './Routes/PublicRouter/PublicRouter';
function App() {
    return (
        <BrowserRouter>
            <Routes>
                {PublicRouter.map((items, index) => {
                    const Layoust = Layout;
                    const Page = items.components;
                    return (
                        <Route
                            path={items.path}
                            key={index}
                            element={
                                <Layoust>
                                    <Page />
                                </Layoust>
                            }
                        />
                    );
                })}
            </Routes>
        </BrowserRouter>
    );
}

export default App;

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Routes/LayoutPage/Layout';
import { PublicRouter } from './Routes/PublicRouter/PublicRouter';
function App() {
    return (
        <BrowserRouter>
            <Routes>
                {PublicRouter.map((items, index) => {
                    const Layoust = items.layout || Layout;
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

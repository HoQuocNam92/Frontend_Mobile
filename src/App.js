import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

function App() {
    return (
        <div>
            <Navbar />
            <main>
                <Outlet /> {/* Các trang con sẽ được render ở đây */}
            </main>
            <Footer />
        </div>
    );
}

export default App;

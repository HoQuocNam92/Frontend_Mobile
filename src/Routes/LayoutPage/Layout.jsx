import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Header/Header';

const Layout = ({ children }) => {
    return (
        <div>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </div>
    );
};
export default Layout;

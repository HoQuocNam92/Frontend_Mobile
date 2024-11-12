import Contact from '../../Page/Contact/Contact';
import Login from '../../Page/Login/Login';
import Register from '../../Page/Register/Register';
import CartCurrent from '../../Page/CartCurrent/CartCurrent';
import Phukien from '../../Page/Products/Accessory/Phukien';
import Laptop from '../../Page/Products/Laptop/Laptop';
import Mobile from '../../Page/Products/Mobile/Mobile';
import Home from '../../Page/HomePage/Home';

const PublicRouter = [
    {
        path: '/',
        components: Home,
    },
    {
        path: '/login',
        components: Login,
    },
];
export { PublicRouter };

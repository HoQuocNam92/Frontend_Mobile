import Contact from '../../Page/Contact/Contact';
import Login from '../../Page/Login/Login';
import Register from '../../Page/Register/Register';
import CartCurrent from '../../Page/CartCurrent/CartCurrent';
import Phukien from '../../Page/Products/Accessory/Phukien';
import Laptop from '../../Page/Products/Laptop/Laptop';
import Mobile from '../../Page/Products/Mobile/Mobile';
import Content from '../../Page/Contens/Content';

const PublicRouter = [
    {
        path: '/',
        components: Content,
    },
    {
        path: '/contact',
        components: Contact,
    },
    {
        path: '/register',
        components: Register,
    },
    {
        path: '/cart',
        components: CartCurrent,
    },
    {
        path: '/product/phukien/:id',
        components: Phukien,
    },
    {
        path: '/product/laptop/:id',
        components: Laptop,
    },
    {
        path: '/product/mobile/:id',
        components: Mobile,
    },
    {
        path: '/login',
        components: Login,
    },
];
export { PublicRouter };

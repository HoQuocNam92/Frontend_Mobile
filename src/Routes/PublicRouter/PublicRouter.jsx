import Contact from '@page/Contact/Contact';
import Register from '@page/Register/Register';
import CartCurrent from '@page/CartCurrent/CartCurrent';
import Chuot from '@page/Products/Chuot/Chuot';
import Laptop from '@page/Products/Laptop/Laptop';
import Mobile from '@page/Products/Mobile/Mobile';
import Content from '@page/Contens/Content';
import Info from '@Components/Infomation/Infomation';
import SignUp from '@Components/SignUp/SignUp';
const PublicRouter = [
    {
        path: '/',
        components: Content,
    },
    {
        path: '/Info',
        components: Info,
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
        paht: 'product/list/:id',
        components: Content,
    },
    {
        path: '/product/chuot/:id',
        components: Chuot,
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
        path: '/SignUp',
        components: SignUp,
    },
];
export { PublicRouter };

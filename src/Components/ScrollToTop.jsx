import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        if (pathname.startsWith('/product/')) {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'instant', // Cuộn ngay lập tức lên đầu
            });
        }
    }, [pathname]);

    return null;
};

export default ScrollToTop;

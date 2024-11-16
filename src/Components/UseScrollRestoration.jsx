import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useScrollRestoration = () => {
    const location = useLocation();

    useEffect(() => {
        const handleBeforeUnload = () => {
            sessionStorage.setItem(
                `scrollPosition-${location.pathname}`,
                window.scrollY
            );
        };

        const storedScrollPosition = sessionStorage.getItem(
            `scrollPosition-${location.pathname}`
        );
        if (storedScrollPosition !== null) {
            window.scrollTo(0, parseInt(storedScrollPosition, 10));
        }

        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
            sessionStorage.setItem(
                `scrollPosition-${location.pathname}`,
                window.scrollY
            );
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, [location]);
};

export default useScrollRestoration;

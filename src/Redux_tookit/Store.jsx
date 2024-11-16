import { configureStore } from '@reduxjs/toolkit';
import ReduxSlice from './ReduxSlice';
const store = configureStore({
    reducer: {
        cart: ReduxSlice,
    },
});
export default store;

// store.js
import { configureStore } from '@reduxjs/toolkit';
import RootReducer from './RootReducer';

const store = configureStore({
    reducer: RootReducer, // Truyền vào reducer của bạn
    // Optional: you can also add middleware, devTools, preloadedState, etc.
});

export default store;

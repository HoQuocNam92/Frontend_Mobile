import { createSlice } from '@reduxjs/toolkit';
const CartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: [],
        isLogin: false,
        dashBoard: [],
    },
    reducers: {
        addToCart: (state, action) => {
            console.log('Cehck ac tion', action.payload);
            const item = action.payload;
            item.forEach(t => {
                console.log('Check ID item', t.id);
                console.log(state.cartItems[0]);
                const existingItem = state.cartItems.findIndex(i => i.id === t.id);
                console.log('Check ID', existingItem);
                if (existingItem !== -1) {
                    state.cartItems[existingItem].quantity += 1;
                } else {
                    state.cartItems.push({ ...t, quantity: 1 });
                }
            });
        },
        removeFromCart: (state, action) => {
            const itemId = action.payload;

            state.cartItems = state.cartItems.filter(item => item.id !== itemId);
        },
        clearCart: state => {
            state.cartItems = [];
        },
        logOut: state => {
            state.isLogin = false;
        },
        logIn: state => {
            state.isLogin = true;
        },
        dashBoard: (state, action) => {
            state.dashBoard = action.payload;
        },
    },
});
export const { addToCart, removeFromCart, clearCart, logOut, logIn, dashBoard } = CartSlice.actions;
export default CartSlice.reducer;

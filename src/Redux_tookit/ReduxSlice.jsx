import { createSlice } from '@reduxjs/toolkit';
const CartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: [],
        CartOK: 0,
    },
    reducers: {
        addToCart: (state, action) => {
            console.log('Cehck ac tion', action.payload);
            const item = action.payload;
            console.log('Check ID', item);
            console.log('Check gio hang ', state.cartItems);
            console.log('Check gio hang 1', state);
            const ID = state.cartItems.filter(items => items._id !== item._id);
            console.log('Cehck id ', ID);
            console.log('Check Iems', item._id);
            const existingItem = state.cartItems.find(i => i._id === item._id);
            console.log(typeof existingItem);

            let quantity = 0;
            if (existingItem) {
                item.quantity = existingItem.quantity + quantity;
            } else {
                state.cartItems = item;
            }
        },
        removeFromCart: (state, action) => {
            const itemId = action.payload;
            state.cartItems = state.cartItems.filter(item => item._id !== itemId);
        },
        clearCart: state => {
            state.cartItems = [];
        },
    },
});
export const { addToCart, removeFromCart, clearCart } = CartSlice.actions;
export default CartSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

export const ecommerceSlice = createSlice({
    name: 'ecommerce',
    initialState: {
        cart: []
    },
    reducers: {
        increment: ( state, payload ) => {
            state.cart += 1;
        },
    },
});
export const { increment } = ecommerceSlice.actions;
import { configureStore } from "@reduxjs/toolkit";
import { ecommerceSlice } from "./ecommerce/ecommerceSlice";
import { authSlice } from "./auth";

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        ecommerce: ecommerceSlice.reducer,
    }
})
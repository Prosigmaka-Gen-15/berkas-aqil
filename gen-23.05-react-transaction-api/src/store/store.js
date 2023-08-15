import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import AuthSlice from "./AuthSlice";

const store = configureStore({
    reducer: {
        carts: cartSlice,
        auth: AuthSlice
    }
})

export default store
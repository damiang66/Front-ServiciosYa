import { configureStore } from "@reduxjs/toolkit";
import { usuarioSlice } from "./slices/usuarioSlice";
import { authSlice } from "./slices/authSlice";

export const store = configureStore({
    reducer: {
        usuarios:usuarioSlice.reducer,
        auth:authSlice.reducer
    }
})
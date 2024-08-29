import { configureStore } from "@reduxjs/toolkit";
import { usuarioSlice } from "./slices/usuarioSlice";
import { authSlice } from "./slices/authSlice";
import { vendedorSlice } from "./slices/vendedorSlice";

export const store = configureStore({
    reducer: {
        usuarios:usuarioSlice.reducer,
        auth:authSlice.reducer,
        vendedores:vendedorSlice.reducer,
    }
})
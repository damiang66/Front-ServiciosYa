import { configureStore } from "@reduxjs/toolkit";
import { usuarioSlice } from "./slices/usuarioSlice";

export const store = configureStore({
    reducer: {
        usuarios:usuarioSlice.reducer
    }
})
import { createSlice } from "@reduxjs/toolkit";

const initialLogin = JSON.parse(sessionStorage.getItem('login')) || {
    isAuth: false,
    isAdmin: false,
    user: null,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState: initialLogin,
    reducers: {
        onLogin: (state, action) => {
            console.log(action);
            state.isAuth = true;
            state.isAdmin = action.payload.isAdmin;
            state.user = action.payload.user;
        },
        onLogout: (state) => {
            state.isAuth = false;
            state.isAdmin = false;
            state.user = null; // Mejor usar `null` en lugar de `undefined` para consistencia
        }
    }
});

export const { onLogin, onLogout } = authSlice.actions;

export default authSlice.reducer; // Exporta el reducer para agregarlo al store
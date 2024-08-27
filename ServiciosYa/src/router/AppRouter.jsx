import React from 'react'
import { useAuth } from '../auth/hooks/useAuth';
import { Navigate, Route, Routes } from 'react-router-dom';
import { UseRouter } from './UseRouter';
import { LoginPage } from '../auth/pages/LoginPage';

export const AppRouter = () => {
    const { login } = useAuth();

    return (
        <Routes>
            {
                login.isAuth
                    ? (
                        <Route path='/*' element={<UseRouter />} />
                    )
                    : <>
                        <Route path='/login' element={<LoginPage />} />
                        <Route path='/*' element={<Navigate to="/login" /> } />
                    </>
                    
            }
        </Routes>
    );
}

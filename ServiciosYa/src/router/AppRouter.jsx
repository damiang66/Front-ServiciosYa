import React from 'react'
import { useAuth } from '../auth/hooks/useAuth';
import { Route, Routes } from 'react-router-dom';

import Home from '../views/home';

export const AppRouter = () => {
    const { login } = useAuth();

    return (
    <Routes>
              
                        <Route path='/*' element={<Home />} />
                  
      
          
        </Routes>
    );
}

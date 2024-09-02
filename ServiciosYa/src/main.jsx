import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { PrimeReactProvider } from 'primereact/api'
import 'primereact/resources/themes/saga-blue/theme.css';  // O el tema que prefieras
import 'primereact/resources/primereact.min.css';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PrimeReactProvider />
    {/* esto se utiliza con context <AuthProvider> */}
    <App />
    {/* </AuthProvider>*/}
  </React.StrictMode>
)

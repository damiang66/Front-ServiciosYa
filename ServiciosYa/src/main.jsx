import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      {/* esto se utiliza con context <AuthProvider> */}
      <App />
      {/* </AuthProvider>*/}
  </React.StrictMode>
)

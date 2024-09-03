import { useState } from "react";
import Swal from "sweetalert2";

import { useAuth } from '../hooks/useAuth.jsx';
// import { GoogleLogin } from "@react-oauth/google";

const initialLoginForm = {
    email: '',
    password: '',
}

export const LoginPage = () => {
    const handleLoginSuccess = (response) => {
        // Aquí puedes manejar el token de Google y realizar autenticaciones adicionales si es necesario
        console.log('Login successful:', response);
    };

    const handleLoginFailure = (error) => {
        console.error('Login failed:', error);
    };
    const { handlerLogin } = useAuth();;

    const [loginForm, setLoginForm] = useState(initialLoginForm);
    const { email, password } = loginForm;

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setLoginForm({
            ...loginForm,
            [name]: value,
        })
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (!email || !password) {
            Swal.fire('Error de validacion', 'Email y contraseña requeridos', 'error');
        }

        // aca implementamos el login
        handlerLogin({ email, password });

        setLoginForm(initialLoginForm);
    }
    return (
        <div className="modal" style={{ display: 'block' }} tabIndex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Login Page</h5>
                    </div>
                    <form onSubmit={onSubmit}>
                        <div className="modal-body">
                            <input
                                className="form-control my-3 w-75"
                                placeholder="nombre@email.com"
                                name="email"
                                value={email}
                                onChange={onInputChange}
                            />

                            <input
                                className="form-control my-3 w-75"
                                placeholder="Password"
                                type="password"
                                name="password"
                                value={password}
                                onChange={onInputChange}
                            />
                        </div>
                        <div className="modal-footer">
                            <button
                                className="btn btn-primary"
                                type="submit">
                                Login
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );

}
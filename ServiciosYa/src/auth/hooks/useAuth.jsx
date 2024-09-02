import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../service/authService";
import Swal from "sweetalert2";
import { onLogin, onLogout } from "../../store/slices/authSlice";

export const useAuth = () => {
    const dispatch = useDispatch();
 const { user, isAdmin, isAuth } = useSelector(state => state.auth || { user: null, isAdmin: false, isAuth: false });
    const navigate = useNavigate();

    const handlerLogin = async ({ nombreDeUsuario, password }) => {
        try {
            const response = await loginUser({ nombreDeUsuario, password });
            const token = response.data.token;
            const claims = JSON.parse(window.atob(token.split(".")[1]));
            console.log(claims);

            const user = { nombreDeUsuario: claims.sub };
            dispatch(onLogin({ user, isAdmin: claims.isAdmin }));

            sessionStorage.setItem('login', JSON.stringify({
                isAuth: true,
                isAdmin: claims.isAdmin,
                user,
            }));
            sessionStorage.setItem('token', `Bearer ${token}`);

            navigate('/usuarios');
        } catch (error) {
            if (error.response?.status === 401) {
                Swal.fire('Error Login', 'Username o password inválidos', 'error');
            } else if (error.response?.status === 403) {
                Swal.fire('Error Login', 'No tiene acceso al recurso o permisos!', 'error');
            } else {
                Swal.fire('Error', 'Ocurrió un error inesperado.', 'error');
                console.error(error);
            }
        }
    };

    const handlerLogout = () => {
        dispatch(onLogout());
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('login');
        sessionStorage.clear();
        navigate('/login'); // Redirigir a la página de login o inicio
    };

    return {
        login: { user, isAdmin, isAuth },
        handlerLogin,
        handlerLogout,
    };
};
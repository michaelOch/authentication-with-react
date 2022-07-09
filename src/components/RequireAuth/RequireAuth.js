import { Navigate, useLocation, Outlet } from 'react-router-dom';
import useAuth from '../../services/auth';

function RequireAuth() {

    const { auth } = useAuth();
    const location = useLocation();

    return auth?.token ? (
        <Outlet />
    ) : (
        <Navigate to='/login' replace state={{ path: location.pathname }} />
    )
}

export default RequireAuth;
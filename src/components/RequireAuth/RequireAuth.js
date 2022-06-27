import { Navigate, useLocation, Outlet } from 'react-router-dom';
import useAuth from '../../services/auth';

function RequireAuth() {

    const { authed } = useAuth();
    const location = useLocation();

    
    console.log(authed);

    return authed?.user ? (
        <Outlet />
    ) : (
        <Navigate to='/login' replace state={{ path: location.pathname }} />
    )
}

export default RequireAuth;
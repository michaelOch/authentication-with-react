import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../services/auth';

function RequireAuth({ children }) {

    const { authed } = useAuth();
    const location = useLocation();

    return authed?.user ? (
        children
    ) : (
        <Navigate to='/login' replace state={{ path: location.pathname }} />
    )
}

export default RequireAuth;
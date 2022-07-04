import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import useAuth from '../../services/auth';

const PersistLogin = () => {
    const [isLoading, setIsLoading] = useState(true);
    const { auth } = useAuth();

    return (
        <>
            {isLoading
                ? <p>Loading...</p>
                : <Outlet />
            }
        </>
    )
}

export default PersistLogin;
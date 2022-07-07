import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import useAuth from '../../services/auth';
import useRefreshToken from '../../hooks/useRefreshToken';

const PersistLogin = () => {
    const [isLoading, setIsLoading] = useState(true);
    const { auth, persist } = useAuth();
    const refresh = useRefreshToken();

    useEffect(() => {
        let isMounted = true;

        const verifyRefreshToken = async () => {
            try {
                await refresh();
            } catch (error) {
                console.log(error);
            } finally {
                isMounted && setIsLoading(false);
            }
        }

        !auth?.token ? verifyRefreshToken() : setIsLoading(false);

        return () => isMounted = false;

    }, []);

    useEffect(() => {
        console.log(`isLoading: ${isLoading}`);
        console.log(`Auth: ${JSON.stringify(auth)}`);
        console.log(`Token: ${auth?.token}`);
    }, [isLoading]);

    return (
        <>
            {!persist 
                ? <Outlet />
                : isLoading
                    ? <p>Loading...</p>
                    : <Outlet />
            }
        </>
    )
}

export default PersistLogin;
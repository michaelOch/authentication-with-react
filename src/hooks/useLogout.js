import axios from '../api/axios';
import useAuth from '../services/auth';

function useLogout() {

    const { setAuth } = useAuth();

    const logout = async () => {
        setAuth({});
        try {
            const response = await axios('/user/logout', {
                withCredentials: true
            });
        } catch (error) {
            // console.error(error);
        }
    }

    return logout;
}

export default useLogout;
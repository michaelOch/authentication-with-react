import axios from '../api/axios';
import useAuth from '../services/auth';

const useRefreshToken = () => {

    const { auth, setAuth } = useAuth();

    const refresh = async () => {
        
        const response = await axios.get('/user/refresh', {
            withCredentials: true
        });

        setAuth(prev => {
            
            return {
                ...prev,
                user: response.data.user,
                token: response.data.token
            }
        });

        return response.data.token;
    }

    return refresh;
}

export default useRefreshToken;
import axios from '../api/axios';
import useAuth from '../services/auth';

const useRefreshToken = () => {

    const { setAuth } = useAuth();

    const refresh = async () => {
        console.log('Refreshing...')
        const response = await axios.get('/user/refresh', {
            withCredentials: true
        });

        setAuth(prev => {
            console.log(prev, 1);
            console.log(response.data, 2);
            return {
                ...prev,
                token: response.data.token
            }
        });

        return response.data.token;
    }

    return refresh;
}

export default useRefreshToken;
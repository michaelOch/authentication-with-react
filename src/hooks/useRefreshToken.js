import axios from '../api/axios';
import useAuth from '../services/auth';

const useRefreshToken = () => {

    const { auth, setAuth } = useAuth();

    const refresh = async () => {
        console.log('Refreshing...')
        const response = await axios.get('/user/refresh', {
            withCredentials: true
        });
        console.log(`From useRefreshToken, auth = ${JSON.stringify(auth)}`);

        setAuth(prev => {
            console.log(prev, 1);
            console.log(response.data, 2);
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
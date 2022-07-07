import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import useAuth from '../../services/auth';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import useLogout from '../../hooks/useLogout';

function Profile() {

    const [user, setUser] = useState();
    const axiosPrivate = useAxiosPrivate();

    const { auth } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const logout = useLogout();

    useEffect(() => {
        let isMounted = true;

        const getUser = async () => {
            try {
                const response = await axiosPrivate.get('/user');
                console.log(response.data);
                isMounted && setUser(response.data);
            } catch (error) {
                console.error(error);
                navigate('/login', { state: { path: location.pathname }, replace: true });
            }
        }

        getUser();

        return () => {
            isMounted = false;
        }
    }, []);

    const handleLogout = async (e) => {
        await logout();
        navigate('/login');
    }

    return (
        <section className='profile-section'>
            <div className='p-5'>
                <h2 className='text-primary'>Profile Page</h2>
                {auth?.user && <button className='btn btn-primary' onClick={handleLogout}>Logout</button>}
                <ul className='list-group'>
                    <li className='list-group-item'>
                        <Link className='' to='/home'>Home</Link>
                    </li>
                    <li className='list-group-item'>
                        <Link className='' to='/profile'>Profile</Link>
                    </li>
                    <li className='list-group-item'>
                        <Link className='' to='/login'>Login</Link>
                    </li>
                    <li className='list-group-item'>
                        <Link className='' to='/register'>Register</Link>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Profile;
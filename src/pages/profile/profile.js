import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import useAuth from '../../services/auth';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import Navbar from '../../components/Navbar/Navbar';

import './profile.css';

function Profile() {

    const [user, setUser] = useState();
    const axiosPrivate = useAxiosPrivate();

    const { auth } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        let isMounted = true;

        const getUser = async () => {
            try {
                const response = await axiosPrivate.get(`/user/${auth?.user?._id}`);
                isMounted && setUser(response.data.user);
            } catch (error) {
                // console.error(error);
                navigate('/login', { state: { path: location.pathname }, replace: true });
            }
        }

        getUser();

        return () => {
            isMounted = false;
        }
    }, []);

    return (
        <div className=''>
            <Navbar />
            <div className='container'>
                <section className='home-section'>
                    <div className='pt-5'>
                        <h2 className='text-primary'>Profile Page</h2>
                        <table className='table'>
                            <tbody>
                                <tr>
                                    <th scope='row'>Name:</th>
                                    <td>
                                        { user?.name }
                                    </td>
                                </tr>
                                <tr>
                                    <th scope='row'>Email:</th>
                                    <td>
                                        { user?.email }
                                    </td>
                                </tr>
                                <tr>
                                    <th scope='row'>Date Registered:</th>
                                    <td>
                                        { (new Date(user?.date)).toDateString() }
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Profile;
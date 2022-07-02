import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../services/auth';
import useRefreshToken from '../../hooks/useRefreshToken';

function Profile() {

    const { authed, logout } = useAuth();
    const refresh = useRefreshToken();
    const navigate = useNavigate();

    const handleLogout = (e) => {
        logout();
        navigate('/');
    }

    return (
        <section className='profile-section'>
            <div className='p-5'>
                <h2 className='text-primary'>Profile Page</h2>
                {authed?.user && <button className='btn btn-primary' onClick={handleLogout}>Logout</button>}
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
                <button className='btn btn-secondary' onClick={() => refresh()}>Refresh</button>
            </div>
        </section>
    )
}

export default Profile;
import React from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../services/auth';

function Profile() {

    const { authed, logout } = useAuth();
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
                        <a className='' href='/home'>Home</a>
                    </li>
                    <li className='list-group-item'>
                        <a className='' href='/profile'>Profile</a>
                    </li>
                    <li className='list-group-item'>
                        <a className='' href='/login'>Login</a>
                    </li>
                    <li className='list-group-item'>
                        <a className='' href='/register'>Register</a>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Profile;
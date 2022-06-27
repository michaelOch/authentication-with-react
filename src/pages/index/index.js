import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../services/auth';

function Index() {

    const { authed, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = (e) => {
        logout();
        navigate('/');
    }

    return (
        <section className='home-section'>
            <div className='p-5'>
                <h2 className='text-primary'>Home Page</h2>
                <h2 className='text-success'>Welcome!!!</h2>
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
            </div>
        </section>
    )
}

export default Index;
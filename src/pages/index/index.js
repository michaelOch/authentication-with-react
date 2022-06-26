import React from 'react';
import { useNavigate } from 'react-router-dom';
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
                <h2 className='text-success'>Welcome!!!</h2>
                {authed && <button className='btn btn-primary' onClick={handleLogout}>Logout</button>}
                <ul className='list-group'>
                    <li className='list-group-item'>
                        <a className='' href='/home'>Home</a>
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

export default Index;
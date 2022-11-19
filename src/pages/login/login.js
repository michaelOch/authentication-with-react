import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import axios from '../../api/axios';
import useAuth from '../../services/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import './login.css';

const LOGIN_URL = '/user/login';

function Login() {

    const initialState = {
        email: '',
        password: '',
        displayPassword: false,
        errorMessage: null,
        isSubmitting: false
    }

    const [data, setData] = useState(initialState);
    const navigate = useNavigate();
    const { login, persist, setPersist } = useAuth();
    const { state } = useLocation();

    useEffect(() => {
        localStorage.setItem('persist', persist);
    }, [persist]);

    const handleChange = (e) => {
        e.preventDefault();

        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const togglePersist = () => {
        setPersist(prev => !prev);
    }

    const toggleDisplayPassword = (e) => {
        e.preventDefault();

        setData({
            ...data,
            displayPassword: !data.displayPassword
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        setData({
            ...data,
            errorMessage: null,
            isSubmitting: true
        })

        if(data.email !== '' && data.password !== '') {

            axios.post(LOGIN_URL,{
                email: data.email,
                password: data.password
            },
            {
                headers: { 'Content-Type': 'application/json' },
                withCredentials: true
            })
            .then(res => {

                setData({
                    ...data,
                    isSubmitting: false,
                    errorMessage: null
                })

                login(res.data).then(() => {
                    navigate(state?.path || '/home');
                });
            })
            .catch(error => {

                setData({
                    ...data,
                    isSubmitting: false,
                    errorMessage: (error?.response?.data?.msg) ? (error?.response?.data?.msg) : 'Sign in failed!'
                })
            })
        } else {

            setData({
                ...data,
                errorMessage: 'Empty field(s)',
                isSubmitting: false
            })
        }
    }

    return (
        <div className=''>
            <nav className='navbar navbar-expand-lg'>
                <div className='container-fluid'>
                    <Link to='/' className='navbar-brand d-flex align-items-center'><div className='logo d-inline-block'></div> &nbsp; Auth App</Link>
                </div>
            </nav>
            <div className='container'>
                <div className='d-flex justify-content-center align-items-center login-wrapper'>
                    <section className='login-section d-flex flex-column justify-content-center px-4 py-5'>
                        <h6 className=''>Welcome back!</h6>
                        <h2 className=''>Sign in to your account<span className='text-primary'>.</span></h2>
                        <p className=''>Don't have an account? &nbsp;
                            <Link to='/register' className=''>Create Account</Link>
                        </p>
                        {
                            data.errorMessage && (
                                <div className="alert alert-danger p-1" role='alert'>{data.errorMessage}</div>
                            )
                        }
                        <form className='' onSubmit={handleSubmit}>
                            <div className="form-group mb-3">
                                <input 
                                    type="email" 
                                    name="email" 
                                    className="form-control" 
                                    placeholder="Email" 
                                    value={data.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="input-group mb-4">
                                <input 
                                    type={ data.displayPassword ? 'text' : 'password' } 
                                    name="password" 
                                    className="form-control" 
                                    placeholder="Password" 
                                    onChange={handleChange} 
                                    value={data.password} 
                                />
                                <div className="input-group-append">
                                    <span className="input-group-text h-100" onClick={toggleDisplayPassword}>
                                        {
                                            data.displayPassword 
                                                ? <FontAwesomeIcon icon={faEyeSlash} />
                                                : <FontAwesomeIcon icon={faEye} />
                                        }
                                    </span>
                                </div>
                            </div>
                            <div className="">
                                <button 
                                    type='submit' 
                                    className='btn btn-primary btn-block' 
                                    disabled={data.isSubmitting ? true : false}
                                >
                                    {data.isSubmitting ? 'Submitting...' : 'Sign In'}
                                </button>
                            </div>
                            <div className='form-check mt-3'>
                                <input 
                                    type="checkbox" 
                                    id='persist'
                                    name='persist' 
                                    className='form-check-input'
                                    onChange={togglePersist}
                                    checked={persist}
                                />
                                <label htmlFor='persist' className='form-check-label'>Trust This Device</label>
                            </div>
                        </form>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Login;
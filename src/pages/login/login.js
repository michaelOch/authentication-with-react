import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from '../../api/axios';
import useAuth from '../../services/auth';

const LOGIN_URL = '/user/login';

function Login() {

    const initialState = {
        email: '',
        password: '',
        errorMessage: null,
        successMessage: null,
        isSubmitting: false
    }

    const [data, setData] = useState(initialState);
    const navigate = useNavigate();
    const { login, persist, setPersist } = useAuth();
    const { state } = useLocation();

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

    useEffect(() => {
        localStorage.setItem('persist', persist);
    }, [persist]);

    const handleSubmit = (e) => {
        e.preventDefault();

        setData({
            ...data,
            errorMessage: null,
            successMessage: null,
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
                    successMessage: 'Successful sign in',
                    errorMessage: null
                })

                login(res.data).then(() => {
                    navigate(state?.path || '/home');
                });
            })
            .catch(error => {
                console.error(error);

                setData({
                    ...data,
                    isSubmitting: false,
                    errorMessage: 'Sign in failed!',
                    successMessage: null
                })
            })
        } else {

            setData({
                ...data,
                errorMessage: 'Empty field',
                successMessage: null,
                isSubmitting: false
            })
        }
    }

    return (
        <section className='login-section d-flex flex-column justify-content-center align-items-center'>
            {console.log(data)}
            <h3 className='text-center'>Sign In</h3>
            <form className='w-75' onSubmit={handleSubmit}>
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
                <div className="form-group mb-3">
                    <input 
                        type="password" 
                        name="password" 
                        className="form-control" 
                        placeholder="Password" 
                        value={data.password}
                        onChange={handleChange}
                    />
                </div>
                <div className="">
                    <button 
                        type='submit' 
                        className='btn btn-primary btn-block' 
                        disabled={data.isSubmitting ? true : false}
                    >
                        {data.isSubmitting ? 'Submitting...' : 'Log In'}
                    </button>
                </div>
                <div className=''>
                    <input 
                        type="checkbox" 
                        id='persist'
                        name='persist' 
                        className=''
                        onChange={togglePersist}
                        checked={persist}
                    />
                    <label htmlFor='persist'>Trust This Device</label>
                </div>
            </form>
        </section>
    )
}

export default Login;
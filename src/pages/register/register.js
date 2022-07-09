import React, { useState } from 'react';
import axios from '../../api/axios';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import './register.css';

const REGISTER_URL = '/user/register';

function Register() {

    const initialState = {
        name: '',
        email: '',
        password: '',
        displayPassword: false,
        errorMessage: null,
        successMessage: null,
        isSubmitting: false
    }

    const [data, setData] = useState(initialState);

    const handleChange = (e) => {
        e.preventDefault();

        setData({
            ...data,
            [e.target.name]: e.target.value
        })
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
            successMessage: null,
            isSubmitting: true
        })

        if(data.name !== '' && data.email !== '' && data.password !== '') {

            axios.post(REGISTER_URL, {
                name: data.name,
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
                    successMessage: 'Account created successfully.',
                    errorMessage: null,
                    isSubmitting: false
                })
            })
            .catch(error => {

                setData({
                    ...data,
                    isSubmitting: false,
                    errorMessage: 'Sign up failed!',
                    successMessage: null
                })
            })
        } else {

            setData({
                ...data,
                errorMessage: 'Empty field(s)',
                successMessage: null,
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
                <section className='register-section d-flex flex-column justify-content-center'>
                    <h6 className=''>Start for free!</h6>
                    <h2 className=''>Create new account<span className='text-primary'>.</span></h2>
                    <p className=''>Already a member? &nbsp;
                        <Link to='/login' className=''>Log In</Link>
                    </p>
                    {
                        data.successMessage && (
                            <div className="alert alert-success p-1" role='alert'>{data.successMessage}</div>
                        )
                    }
                    {
                        data.errorMessage && (
                            <div className="alert alert-danger p-1" role='alert'>{data.errorMessage}</div>
                        )
                    }
                    <form className='' onSubmit={handleSubmit}>
                        <div className='form-group mb-3'>
                            <input 
                                type='text' 
                                name='name' 
                                className='form-control' 
                                placeholder='Name' 
                                value={data.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='form-group mb-3'>
                            <input 
                                type='email' 
                                name='email' 
                                className='form-control' 
                                placeholder='Email' 
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
                        <div className=''>
                            <button 
                                type='submit' 
                                className='btn btn-primary'
                                disabled={data.isSubmitting ? true : false}
                            >
                                {data.isSubmitting ? 'Submitting...' : 'Create account'}
                            </button>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    )
}

export default Register;
import React, { useState } from 'react';
import axios from '../../api/axios';
import { apiUrl } from '../../services/util';

const REGISTER_URL = '/user/register';

function Register() {

    const initialState = {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
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

    const handleSubmit = (e) => {
        e.preventDefault();

        setData({
            ...data,
            errorMessage: null,
            successMessage: null,
            isSubmitting: true
        })

        if(data.name !== '' && data.email !== '' && data.password !== '' && data.confirmPassword !== '') {

            if(data.password === data.confirmPassword) {

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
                    console.log(res);

                    setData({
                        ...data,
                        successMessage: 'Account created successfully.',
                        errorMessage: null,
                        isSubmitting: false
                    })
                })
                .catch(error => {
                    
                    console.error(error);

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
                    errorMessage: "Passwords don't match. Confirm password.",
                    successMessage: null,
                    isSubmitting: false
                })
            }
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
        <section className='register-section d-flex flex-column justify-content-center align-items-center'>
            {console.log(data)}
            <h3 className='text-center'>Sign Up</h3>
            <form className='w-75' onSubmit={handleSubmit}>
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
                <div className='form-group mb-3'>
                    <input 
                        type='password' 
                        name='password' 
                        className='form-control' 
                        placeholder='Password' 
                        value={data.password}
                        onChange={handleChange}
                    />
                </div>
                <div className='form-group mb-3'>
                    <input 
                        type='password' 
                        name='confirmPassword' 
                        className='form-control' 
                        placeholder='Confirm Password' 
                        value={data.confirmPassword}
                        onChange={handleChange}
                    />
                </div>
                <div className=''>
                    <button 
                        type='submit' 
                        className='btn btn-primary'
                        disabled={data.isSubmitting ? true : false}
                    >
                        {data.isSubmitting ? 'Submitting...' : 'Register'}
                    </button>
                </div>
            </form>
        </section>
    )
}

export default Register;
import React, { useState } from 'react';

function Login() {

    const initialState = {
        email: '',
        password: ''
    }

    const [data, setData] = useState(initialState);

    const handleChange = (e) => {
        e.preventDefault();

        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    return (
        <section className='login-section d-flex flex-column justify-content-center align-items-center'>
            {console.log(data)}
            <h3 className='text-center'>Sign In</h3>
            <form className='w-75'>
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
                    <button type='submit' className='btn btn-primary btn-block'>Log In</button>
                </div>
            </form>
        </section>
    )
}

export default Login;
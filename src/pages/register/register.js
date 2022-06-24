import React from 'react';

function register() {
  return (
    <section className='register-section d-flex flex-column justify-content-center align-items-center'>
        <h3 className='text-center'>Sign Up</h3>
        <form className='w-75'>
            <div className='form-group mb-3'>
                <input type='email' name='email' className='form-control' placeholder='Email' />
            </div>
            <div className='form-group mb-3'>
                <input type='password' name='password' className='form-control' placeholder='Password' />
            </div>
            <div className='form-group mb-3'>
                <input type='password' name='password' className='form-control' placeholder='Confirm Password' />
            </div>
            <div className=''>
                <button type='submit' className='btn btn-primary'>Register</button>
            </div>
        </form>
    </section>
  )
}

export default register;
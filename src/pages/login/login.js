import React from 'react';

function login() {
  return (
    <section className='login-section d-flex flex-column justify-content-center align-items-center'>
        <h3 className='text-center'>Sign In</h3>
        <form className='w-75'>
            <div className="form-group mb-3">
                <input type="email" name="email" className="form-control" placeholder="Email" />
            </div>
            <div className="form-group mb-3">
                <input type="password" name="password" className="form-control" placeholder="Password" />
            </div>
            <div className="">
                <button type='submit' className='btn btn-primary btn-block'>Log In</button>
            </div>
        </form>
    </section>
  )
}

export default login;
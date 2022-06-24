import React from 'react';

function login() {
  return (
    <section className='login-section d-flex flex-column justify-content-center align-items-center'>
        <form className='w-75'>
            <div className="form-group">
                <input type="email" name="email" className="form-control" placeholder="Email" />
            </div>
            <div className="form-group">
                <input type="password" name="password" className="form-control" placeholder="Password" />
            </div>
            <div className="">
                <button className='btn btn-primary'>Log In</button>
            </div>
        </form>
    </section>
  )
}

export default login;
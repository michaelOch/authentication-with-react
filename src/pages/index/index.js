import React from 'react';

function index() {
  return (
    <section className='home-section'>
        <div className='p-5'>
            <h2 className='text-success'>Welcome!!!</h2>
            <ul className='list-group'>
                <li className='list-group-item'>
                    <a className='' href='/home'>Home</a>
                </li>
                <li className='list-group-item'>
                    <a className='' href='/'>Login</a>
                </li>
                <li className='list-group-item'>
                    <a className='' href='/register'>Register</a>
                </li>
            </ul>
        </div>
    </section>
  )
}

export default index;
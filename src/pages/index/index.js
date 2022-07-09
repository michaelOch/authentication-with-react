import React from 'react';
import Navbar from '../../components/Navbar/Navbar';

import './index.css';

function Index() {

    return (
        <div className=''>
            <Navbar />
            <div className='container'>
                <section className='home-section'>
                    <div className='pt-5'>
                        <h2 className='text-primary'>Home Page</h2>
                        <h2 className='text-success'>Welcome!!!</h2>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Index;
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <nav className='container d-flex  nav-container mt-3'>
           <div>
            <h3 className='fw-bold'>Carrier Hub</h3>
           </div>

           <div>
        <Link className='fw-bold text-dark' to='/'>Home</Link>
        <Link className='fw-bold text-dark' to='AppliedJobs'>Applied Jobs</Link>
        <Link className='fw-bold text-dark' to='Statistics'>Statistics</Link>
        <Link className='fw-bold text-dark' to='blog'>Blog</Link>
           </div>

           <div>
            <button className='star-btn'>Apply Now</button>
           </div>
        </nav>
    );
};

export default Header;


import React, { useState } from 'react';
import './AppliedJobs.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee , faCircleDollarToSlot, faLocationDot} from '@fortawesome/free-solid-svg-icons'
import Dropdown from 'react-bootstrap/Dropdown';

const AppliedJobs = () => {
    const jobDetails = JSON.parse(localStorage.getItem('jobDetails')) || [];
    const [filterOption, setFilterOption] = useState('all'); // Initialize filter option state

    // Filter job details based on filter option selected by the user
    const filteredJobDetails = jobDetails.filter(details => {
        if (filterOption === 'all') {
            return true;
        } else if (filterOption === 'Full-time') {
            return details.job_type === 'Full-time';
        } else if (filterOption === 'Part-time') {
            return details.job_type === 'Part-time';
        }
    });

    return (
        <div>
            <div className='d-flex justify-content-center mt-5 '>
                <div className='filter'>
                    <h1 className='fw-bold'>Applied Jobs</h1>
                </div>
                <div className='d-flex justify-content-end mt-2 mb-5 '>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Filter By
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item onClick={() => setFilterOption('all')}>Show All Jobs</Dropdown.Item>
                            <Dropdown.Item onClick={() => setFilterOption('Full-time')}>Show Full Time Jobs</Dropdown.Item>
                            <Dropdown.Item onClick={() => setFilterOption('Part-time')}>Show Part Time Jobs</Dropdown.Item>      
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>

            <div className="parent-container">
                <div className="centered-div">
                    {filteredJobDetails.map((details, index) => (
                        <span key={index}>
                            <div className='d-flex total'>
                                <div className='mt-5 '>
                                    <img className='logos' src={details.logo} alt="" />
                                </div>
                                <div >
                                    <h3 className='taitals fw-bold'>{details.title}</h3>
                                    <h5>{details.company}</h5>
                                    <Link className='text-decoration-none' to=''><p className='job'>{details.job_type}</p></Link>
                                    <div className='d-flex gap-3 ms-3'>
                                        <p className='gap-5'><FontAwesomeIcon icon={faLocationDot} /> {details.location}</p>
                                        <p className='gap-5'><FontAwesomeIcon icon={faCircleDollarToSlot} />
                                            {details.salary}</p>
                                    </div>
                                </div>
                                <Link className='fw-bold text-decoration-none star-btn p-1 text-center mx-auto my-auto'  to={`/details/${details.id}`}>View Details</Link>
                            </div>
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AppliedJobs;

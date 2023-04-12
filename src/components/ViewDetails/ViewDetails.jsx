


import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import './ViewDetails.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee , faCircleDollarToSlot, faLocationDot, faCalendarDays, faPhone, faEnvelope} from '@fortawesome/free-solid-svg-icons'

const ViewDetails = ({params}) => {
    const details = useLoaderData(); 
    const {company,job_responsibility,educational_requirements,experience_years,job_description,title,salary,phone,email,location} = details;

  
const handleApplyNowClick = () => {
    // Retrieve existing data from local storage
    const existingDetails = JSON.parse(localStorage.getItem('jobDetails')) || [];

    // Find the index of the existing details in the array
    const existingIndex = existingDetails.findIndex(detail => detail.id === details.id);

    if (existingIndex !== -1) {
        // Update the existing details in the array
        existingDetails[existingIndex] = details;
    } else {
        // Add the new details to the existing array
        existingDetails.push(details);
    }

    // Store updated data in local storage
    localStorage.setItem('jobDetails', JSON.stringify(existingDetails));
}

    return (
        <div className='mb-5'>
            <section style={{
                width: '100%',
                height: '100px'
            }} className='Details-container '>
                {/* Add content for the section here */}
                <h1 className='fw-bold d-flex justify-content-center p-4'>Job Details</h1>
            </section>

            <div className="detail mt-5">
                <div className="row">
                    <div className="col-md-6 d-flex justify-content-center  p-5">
                        <div className="text-center">
                            <p><span className='fw-bold'>Job Description:</span>  {job_description}</p>
                            <p><span className='fw-bold'>Job Responsibility:</span> {job_responsibility}</p>
                            <p><span className='fw-bold'>Educational Requirements:</span> {educational_requirements} </p>
                            <p> <span className='fw-bold'>Experiences:</span>{experience_years} </p>
                        </div>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center cart-container">
                        <div className="text-center pt-3">
                            <h5 className='fw-bold'>Job Details</h5>
                            <p><span className='fw-bold'><FontAwesomeIcon icon={faCircleDollarToSlot} /> Salary :</span> {salary}</p>
                            <p><span className='fw-bold'> <FontAwesomeIcon icon={faCalendarDays} /> Job Title :</span> {title}</p>
                            <div>
                                <h5 className='fw-bold'>Contact Information</h5>
                            </div>
                            <hr />
                            <div className='mt-3'>
                                <p><span  className='fw-bold'> <FontAwesomeIcon icon={faPhone} /> Phone :</span>{phone}</p>
                                <p><span className='fw-bold'> <FontAwesomeIcon icon={faEnvelope} /> Email :</span>{email}</p>
                                <p><span className='fw-bold'><FontAwesomeIcon icon={faLocationDot} /> Address :</span>{location}</p>
                            </div>
                            <div>
                                <Link className='apply' to="" onClick={handleApplyNowClick}>Apply Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;



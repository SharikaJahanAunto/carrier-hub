import React from 'react';
import './CompanyData.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee , faCircleDollarToSlot, faLocationDot} from '@fortawesome/free-solid-svg-icons'

const CompanyData = ({companys}) => {
    
    const {logo, title,company,job_type,location,salary,id}=companys


    return (
        <div className='company-containers'>
            <img src={logo} alt="" />
            <h4 className='fw-bold'>{title}</h4>
            <h5>{company}</h5>
           <Link className='text-decoration-none' to=''><h5 className='job'>{job_type}</h5></Link>
         <div className='d-flex gap-3 ms-3'>
             <h5 className='gap-5'><FontAwesomeIcon icon={faLocationDot} /> {location}</h5>
             <h5 className='gap-5'><FontAwesomeIcon icon={faCircleDollarToSlot} />
                 {salary}</h5>
         </div>
            <Link to={`/details/${id}`} className='details'>View Details</Link>
        </div>
    );
};

export default CompanyData;
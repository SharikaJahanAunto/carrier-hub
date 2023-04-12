
import './Home.css'
import Category from '../category/Category';
import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import CompanyData from '../CompanyData/CompanyData';



const Home = () => {

    const companyDatas = useLoaderData() || [];

   

    const [categorys, setCategorys] = useState([]);
     // State to track whether to show all jobs
    const [showAllJobs, setShowAllJobs] = useState(false); 

    useEffect(()=>{
        fetch('Category.json')
        .then(res=>res.json())
        .then(data => setCategorys(data))
    },[])

    const handleSeeAllJobs = () => {
         // Update state to show all jobs
        setShowAllJobs(true);    
    }

    return (
        <div className=' d-flex mt-5 row'>


            <div className='col-md-7 p-5 '>
                <h1 className='fw-bold'>One Step <br /> Closer To Your <br /> <span className='dreaming'>Dream Job</span></h1>
                <p>Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all <br /> your job application from start to finish.</p>
                <button className='star-btn'>Start Now</button>
            </div>

            <div className='person col-md-5'>
                <img className='img-fluid' src="https://burst.shopifycdn.com/photos/coding-on-laptop_1200x.progressive.jpg" alt="" />
            </div>

            <div className='container mt-5'>
                <div className='d-flex justify-content-center'>
            <h2 className='fw-bold'>Job Category List</h2>
                </div>
                <div className='d-flex justify-content-center'>
                 <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
                </div>


               <div className='info-container'>
               {
                    categorys.map(catagory=><Category
                    key={catagory.id}
                    catagory={catagory}
                    ></Category>)
                }
               </div>

               <section className=' mt-5'>
               <div className='d-flex justify-content-center'>    <h2 className='fw-bold'>Featured Jobs</h2></div>
            <div className='d-flex justify-content-center'>  <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
               </div>
               </section>
               <div className='mt-5 container company-container'>
                 {/* Render all 6 cards if showAllJobs is true, otherwise render only first 4 cards */}
                   {showAllJobs ? (
          companyDatas.map(companys => (
            <CompanyData
              key={companys.id}
              companys={companys}
            ></CompanyData>
          ))
        ) : (
          companyDatas.slice(0, 4).map(companys => (
            <CompanyData
              key={companys.id}
              companys={companys}
            ></CompanyData>
          ))
        )}
               </div>

               {!showAllJobs && (
  // Render the "See All Jobs" button only if showAllJobs is false
  <div className='d-flex justify-content-center'>
    <button className='star-btn mb-5 mt-4' onClick={handleSeeAllJobs}>
      See All Jobs
    </button>
  </div>
)}
             
            </div>
        </div>
    );
};

export default Home;


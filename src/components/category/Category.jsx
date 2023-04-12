import React from 'react';
import './Category.css'

const Category = ({catagory}) => {
const {name,img,feature, id}=catagory
    


    return (
        <div className='category-container  '>
           
              <div>
              <img src={img} alt="" /> 
              </div>
              <h4>{name}</h4>
              <p>{feature}</p>
        </div>
    );
};

export default Category;

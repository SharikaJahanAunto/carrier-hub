import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <section className='mt-5'>
  
  <h4> <span className='fw-bold'>Question-1: when context api is used?</span></h4> 
    <p><span className='fw-bold'>Answer:</span> The React Context API is utilized when there is a requirement to distribute information, functionality, or state between components in an application that are not directly connected in the component tree but still need to access the same data. Instead of passing the data through intermediate components as props, this technique is frequently used for managing global state, theming and styling, localization and internationalization, and authentication and authorization. This approach allows for a more effective and expandable means of distributing data and managing state in complex React applications.</p>

    <h4><span className='fw-bold'>Question-2: what is custom hook?</span></h4>
    <p><span className='fw-bold'>Answer: </span>Custom hooks are a useful capability in React that permits you to extract and reuse logic in a flexible manner, without the need for higher-order components (HOCs) or render props, which can enhance the modularity, readability, and maintainability of your code.</p>

    
    <h4><span className='fw-bold'>Question-3: when purpose useRef is used?</span></h4>
    <p><span className='fw-bold'>Answer: </span>In React, useRef is utilized to handle changeable references to DOM elements, stockpiling values that do not result in re-renders, and storing costly computations. It is an effective method for communicating with the DOM and controlling non-visual state in React components.</p>

    
    <h4><span className='fw-bold'>Question-4: what is useMemo and why is this used?</span></h4>
    <p><span className='fw-bold'>Answer: </span>Custom hooks in React allow you to extract and reuse logic in a flexible manner, without having to use higher-order components (HOCs) or render props. This approach can enhance the modularity, readability, and maintainability of your code.</p>
        </section>
    );
};

export default Blog;
import React from 'react';

const Blog = () => {
    return (
        <section className='mt-5'>
  
  <h4> <span className='fw-bold'>Question No 1= when context api is used?? </span></h4> 
    <p><span className='fw-bold'>Answer:</span> The Context API in React is used when you need to share data, state, or functionality between components in your application that are not directly related in the component tree, but need to access the same information without passing it down as props through intermediate components. It is commonly used for managing global state, theming and styling, localization and internationalization, and authentication and authorization. It allows for a more efficient and scalable way of sharing data and managing state in complex React applications. </p>

    <h4><span className='fw-bold'>Question No 2=what is custom hook ?? </span></h4>
    <p><span className='fw-bold'>Answer: </span>Custom hooks are a powerful feature in React that enables you to extract and reuse logic in a composable way, without having to resort to higher-order components (HOCs) or render props, which can make your code more modular, readable, and maintainable.</p>

    
    <h4><span className='fw-bold'>Question No 3=when purpose useRef is used?? </span></h4>
    <p><span className='fw-bold'>Answer: </span> useRef is used in React for managing mutable references to DOM elements, storing values that do not trigger re-renders, and caching expensive computations. It is a useful tool for interacting with the DOM and managing non-visual state in React components.</p>

    
    <h4><span className='fw-bold'>Question No 4=what is useMemo and why is this used ?? </span></h4>
    <p><span className='fw-bold'>Answer: </span>Custom hooks are a powerful feature in React that enables you to extract and reuse logic in a composable way, without having to resort to higher-order components (HOCs) or render props, which can make your code more modular, readable, and maintainable.</p>
        </section>
    );
};

export default Blog;
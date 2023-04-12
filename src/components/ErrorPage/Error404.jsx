import React from 'react';
import './Error404.css'
import { Link } from 'react-router-dom';

const Error404 = () => {
    return (
        <div className="error-container">
      <h1 className="error-title">404 - Page Not Found</h1>
      <p className="error-description">Oops! The page you are looking for does not exist.</p>
      {/* You can add additional custom content, such as a link back to the homepage */}
      <Link to="/" className="error-link">Go back to homepage</Link>
    </div>
    );
};

export default Error404;

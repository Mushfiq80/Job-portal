import React from 'react';
import { Link } from 'react-router-dom';
import './Headers.css';

const Headers = () => {
    return (
        <nav>
            <h4>Dream Quest</h4>
            <div>
                <Link to="/">Home</Link>
                <Link to="/">Statistics</Link>
                <Link to="/JobDetails">Applied Job</Link>
                <Link to="/">Blog</Link>
            </div>
            <button className='btn-primary'>Start Applying</button>
        </nav>
    );
};

export default Headers;
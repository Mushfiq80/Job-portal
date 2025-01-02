import React from 'react';
import './FeatureJob.css';
import { useNavigate } from 'react-router-dom';

const FeatureJob = ({ jobList }) => {

    const { id, companyLogo, jobTitle, companyName, remoteOrOnsite, location, fullTimeOrPartTime, salary } = jobList;

    const navigate = useNavigate();

    const handleViewDetails = () => {
        navigate(`/JobDetails/${id}`);
    }

    return (

        <div className='feature-job-cards'>
            <img src={companyLogo} alt="" />
            <h3>{jobTitle}</h3>
            <p>{companyName}</p>
            <div className='category'>
                <h5>{remoteOrOnsite}</h5>
                <h5>{fullTimeOrPartTime}</h5>
            </div>
            <div className='location-salary'>
                <h5><span className='small-logo'><img src="/public/Icons/Frame-4.png" /></span> {location}</h5>
                <h5><span className='small-logo'><img src="/public/Icons/Frame.png" /></span>Salary{salary}</h5>

            </div>
            <button onClick={handleViewDetails} className='btn-primary'>View Details</button>




        </div>

    );
};

export default FeatureJob;
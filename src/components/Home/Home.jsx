import React from 'react';
import './Home.css';
import { BriefcaseIcon, Cog6ToothIcon, ScaleIcon, ComputerDesktopIcon } from '@heroicons/react/24/solid'
import FeatureJob from '../FeatureJob/FeatureJob';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const jobLists = useLoaderData();
    return (
        <div>
            <div className='Home-container'>
                <div className='Home-details'>
                    <h2>One Step Closer To Your <span className='title-purple'>Dream Job</span></h2>
                    <p>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className='btn-primary'>Get Started</button>
                </div>
                <div className='home-img'>
                    <img src="/public/Job.jpg" />
                </div>
            </div>
            <div className="job-category-list">
                <h2>Job Category List</h2>
                <p>Find your dream job in one of the following categories:</p>
                <div className='job-flex'>
                    <div className="job-box account-finance">
                        <img src="/public/Icons/accounts 1.png" alt="" />
                        <h3>Account &amp; Finance</h3>
                        <p>200+ Jobs Available</p>
                    </div>
                    <div className="job-box creative-design">
                        <img src="/public/Icons/social-media 1.png" alt="" />
                        <h3>Creative Design</h3>
                        <p>150+ Jobs Available</p>
                    </div>
                    <div className="job-box marketing-sales">
                        <img src="/public/Icons/business 1.png" alt="" />
                        <h3>Marketing Sales</h3>
                        <p>300+ Jobs Available</p>
                    </div>
                    <div className="job-box engineering">
                        <img src="/public/Icons/chip 1.png" alt="" />
                        <h3>Engineering</h3>
                        <p>100+ Jobs Available</p>
                    </div>
                </div>
            </div>
            <div>
                <div className='feature-job'>
                    <h3 className='feature-job-title'>Featured Job</h3>
                    <p className='featured-job-subtitle'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                </div>
                <div className='feature-job-body'>
                {
                    jobLists.map(jobList => <FeatureJob 
                        key={jobList.id}
                        jobList={jobList}></FeatureJob>)
                }
                </div>
                
            </div>
            <div className='btn-center'>
            <button className='btn-primary'>See All</button>
            </div>
            


        </div>
    );
};

export default Home;
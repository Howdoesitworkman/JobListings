import React from 'react'
import Hero from '../components/Hero'                   // we want the Hero component only shows on Homepage
import HomeCards from '../components/HomeCards'         // we want the HomeCards component only shows on Homepage
import JobListings from '../components/JobListings'
import ViewAllJobs from '../components/ViewAllJobs'

const HomePage = () => {
    
    return (
        <>
            <Hero title='Become a React Dev' subtitle='Find the React job fits your skill set'/>
            <HomeCards />
            <JobListings />
            <ViewAllJobs />
        </>
    )
}

export default HomePage
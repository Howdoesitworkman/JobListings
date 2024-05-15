import React from 'react'
import {useState, useEffect} from 'react'           // we need a state hook to create a side effect and fetch data by that
import JobListing from './JobListing'
import Spinner from './Spinner'

const JobListings = ({isHome = false}) => {         // here it means the variable 'isHome' is false by default
    const [jobs, setJobs] = useState([]);           // by default this is empty. When the component loads, we will make a request and fill the array
    const [loading, setloading] = useState(true)    // this is used to show something when we are fetching data

    // 'use effect' is a 'fetch on render' way to fetch data. There are many other ways to fetch data, such as 'Suspense', which is a fetch while render method
    useEffect(()=> {
        const fetchJobs = async () => {             // async makes a function return a Promise
            const apiUrl = isHome ? '/api/jobs?_limit=3' : '/api/jobs'     // if it is HomePage, only show 3 jobs. Any time we want to use backend, we use '/api' because we set it in vite.config.js
            try{
                const res = await fetch(apiUrl)           // await is to wait for a Promise and get its fulillment value
                const data = await res.json()
                setJobs(data)                       // after this line, 'jobs' is the same as 'data'
            }catch(error){
                console.log('Error fetching data', error)
            }finally{
                setloading(false)                   // after this line, loadind becomes false
            }
        }
        fetchJobs()
    }, [])              // useEffect() takes in two parameters, one function and one array. When the array changes, the function will be run.
                        // Here, since the array is empty, this is an infinite loop where the function will keep running

    return (
    <section className="bg-blue-50 px-4 py-10">
        <div className="container-xl lg:container m-auto">
            <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
                {isHome ? 'Recent Jobs' : 'All Jobs'}
            </h2>
            {loading ? (
                <Spinner loading={loading}/>              
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {
                    jobs.map((job)=>(
                        <JobListing key={job.id} job={job} />
                    ))
                }
                </div>
            )}
        </div>
        </section>
    )
}

export default JobListings
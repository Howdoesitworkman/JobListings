import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Spinner from '../components/Spinner'

//here we can also use 'use effect' to fetch data but we choose to use a data loader
const JobPage = () => {
    const {id} = useParams()        // this is how we get the id of a job
    const [job, setJob] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        const fetchJob = async ()=>{
            try{
                const res = await fetch(`/api/jobs/${id}`)           // await is to wait for a Promise and get its fulillment value
                const data = await res.json()
                setJob(data)                             // after this line, 'jobs' is the same as 'data'
            }catch(error){
                console.log('Error fetching data', error)
            }finally{
                setLoading(false)                         // after this line, loadind becomes false
            }
        }
        fetchJob()

    }, [])

    return loading ? <Spinner /> :(
        <h1>{job.title}</h1>
    )
}

export default JobPage

import React from 'react'
import { useParams, useLoaderData} from 'react-router-dom'

//here we can also use 'use effect' to fetch data but we choose to use a data loader
const JobPage = () => {
    const {id} = useParams()        // this is how we get the id of a job
    const job = useLoaderData()

    return <h1>{job.title}</h1>
}

const jobLoader = async({params})=>{
    const res = await fetch(`/api/jobs/${params.id}`)
    const data = await res.json()
    return data
}


export {JobPage as default, jobLoader}

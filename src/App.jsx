import React from 'react'
import HomePage from './pages/HomePage'
import MainLayout from './layouts/MainLayout'
import JobsPage from './pages/JobsPage'
import NotFoundPage from './pages/NotFoundPage'
import JobPage, {jobLoader} from './pages/JobPage'
import AddJobPage from './pages/AddJobPage'

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'     // we need these to create routers and add multiple pages. For each page, there should be a router


const App = () => {

  //add new job
  const addJob = async (newJob) => {
    const res = await fetch('/api/jobs', {                    // this is to add the new job to the json backend. After this, we can find the new job in the '/jobs' and the backend API page
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newJob)
    })

    return
  }
  
  // delete Job

  const deleteJob = async(id) =>{
    console.log('delete', id)
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>                {/*with this, all pages closed by '<Route path...>' share the MainLayout*/}
        <Route index element={<HomePage />} />                 {/*the 'index' can be replaced by any path we need*/}
        <Route path='/jobs' element={<JobsPage />}/>           {/*one page, one router */}
        <Route path='/add-job' element={<AddJobPage addJobSubmit={addJob}/>} />   {/*the function 'addJob' will play as 'addJobSubmit' in the AddJobPage.jsx file*/}
        <Route path='/jobs/:id' element={<JobPage deleteJob={deleteJob}/>} loader={jobLoader}/>        {/*':' means the 'id' is dynamic and loader is a built-in property*/}
        <Route path='*' element={<NotFoundPage />} />          {/*The '*' will cover all pages that we don't define and then show 404 */}
      </Route>
    )                           
  )

  return <RouterProvider router={router}/>      
}

export default App
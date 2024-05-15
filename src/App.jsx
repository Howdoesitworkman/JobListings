import React from 'react'
import HomePage from './pages/HomePage'
import MainLayout from './layouts/MainLayout'
import JobsPage from './pages/JobsPage'
import NotFoundPage from './pages/NotFoundPage'
import JobPage from './pages/JobPage'

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'     // we need these to create routers and add multiple pages. For each page, there should be a router

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>                {/*with this, all pages closed by '<Route path...>' share the MainLayout*/}
      <Route index element={<HomePage />} />                 {/*the 'index' can be replaced by any path we need*/}
      <Route path='/jobs' element={<JobsPage />}/>           {/*one page, one router */}
      <Route path='/jobs/:id' element={<JobPage />}/>        {/*':' means the 'id' is dynamic */}
      <Route path='*' element={<NotFoundPage />} />          {/*The '*' will cover all pages that we don't define and then show 404 */}
    </Route>
  )                           
)

const App = () => {
  return <RouterProvider router={router}/>      
}

export default App
// this file is to provide layouts that show up in every page
import React from 'react'
import {Outlet} from 'react-router-dom'
import Navbar from '../components/Navbar'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const MainLayout = () => {
  return (
    <>
      <Navbar />        {/*by this line, every page has a Navbar */}
      <Outlet />
      <ToastContainer />      {/*with this, when we delete something, we can see a message saying that we delete it successfully */}
    </>
  )
}

export default MainLayout





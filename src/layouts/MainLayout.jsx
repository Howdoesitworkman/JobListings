// this file is to provide layouts that show up in every page
import React from 'react'
import {Outlet} from 'react-router-dom'
import Navbar from '../components/Navbar'

const MainLayout = () => {
  return (
    <>
      <Navbar />        {/*by this line, every page has a Navbar */}
      <Outlet />
    </>
  )
}

export default MainLayout





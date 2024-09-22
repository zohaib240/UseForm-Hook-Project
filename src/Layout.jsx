import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Pages/Components/Navbar'

const Layout = () => {
  return (
    <>
    <Navbar />
    <Outlet />
    </>
  )
}

export default Layout
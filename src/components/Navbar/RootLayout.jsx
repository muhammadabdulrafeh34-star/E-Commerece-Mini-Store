import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

function RootLayout() {
  return (
    <div className="bg-gray-100 min-h-screen py-2 h-10">
        <Navbar/>
        <Outlet/>
    </div>
  )
}
export default RootLayout
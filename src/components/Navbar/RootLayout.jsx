import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import { useState } from 'react';

function RootLayout() {
  const [inputValue, setInputValue] = useState('');
const [sortOption, setSortOption] = useState(null);
  return (
    <div className="bg-gray-100 min-h-screen py-2 h-10">
        <Navbar inputValue={inputValue} setInputValue={setInputValue} sortOption={sortOption} setSortOption={setSortOption}/>
        <Outlet context={{ inputValue, sortOption}} />
    </div>
  )
}
export default RootLayout
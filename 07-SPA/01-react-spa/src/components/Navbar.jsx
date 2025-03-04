import React from 'react'
import clgLogo from '../assets/pvpsitlogo.png'
import { Link } from 'react-router-dom'

function Navbar () {
  return (
    <div className='flex flex-col md:flex-row justify-between px-3 py-4'>
      <div className='flex justify-center md:justify-start items-center gap-2'>
        <Link to="/">
          <img src={clgLogo} className='w-14' alt='' />
        </Link>
        <Link to="/">
          <h1 className='text-3xl font-semibold'>PVPSIT</h1>
        </Link>
      </div>
      <nav className='px-3 bg-white mt-2 items-center gap-4 justify-center md:justify-end text-lg font-semibold flex'>
        <Link to='/departments' className='hover:text-blue-700'>
          Departments
        </Link>
        <Link to='/placements' className='hover:text-blue-700'>
          Placements
        </Link>
        <Link to='/visionmission' className='hover:text-blue-700'>
          Vision & Mission
        </Link>
      </nav>
    </div>
  )
}

export default Navbar

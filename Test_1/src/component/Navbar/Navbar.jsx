import React from 'react'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className='flex justify-around  bg-red-200'>
      <NavLink  className={(e)=>{return e.isActive?"bg-red-700 p-4":"p-4"}} to="/">Home</NavLink>
      <NavLink className={(e)=>{return e.isActive?"bg-red-700 p-4":"p-4"}} to="/dashboard">Dashboard</NavLink>
      </nav>
    </div>
  )
}

export default Navbar
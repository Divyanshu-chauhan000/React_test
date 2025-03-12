import React from 'react'
import Home from './component/Home/Home.jsx'
import Dashboard from './component/Dashboard/Dashboard.jsx'
import Navbar from './component/Navbar/Navbar.jsx'
import {  createBrowserRouter , RouterProvider } from 'react-router-dom'
const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <><Navbar/><Home/></>,
    },
    {
      path: '/dashboard',
      element: <><Navbar/><Dashboard/></>,
    }
  ])
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
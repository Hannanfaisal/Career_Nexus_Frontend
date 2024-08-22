
import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'

const Navbar = () => {
  return (
  
<nav className="bg-white shadow sticky w-full">
  <div className="lg:px-5 flex flex-wrap items-center justify-between mx-auto p-4">
    <NavLink to='/' className="flex items-center space-x-3 rtl:space-x-reverse">
        <img src={logo} className="h-10" alt="logo" />
        <span className="self-center text-2xl font-semibold whitespace-nowrap text-purple">CareerNexus</span>
    </NavLink>
    <button data-collapse-toggle="navbar-dropdown" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-dropdown" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
      <ul className="flex flex-col justify-center items-center font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <NavLink to='/' className="block py-2 px-3 text-white bg-lightPurple rounded md:bg-transparent md:text-lightPurple md:p-0 " aria-current="page">Home</NavLink>
        </li>
        {/* <li>
             <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Dropdown <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
  </svg></button>
            
            <div id="dropdownNavbar" className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                <ul className="py-2 text-sm text-gray-700 " aria-labelledby="dropdownLargeButton">
                  <li>
                    <NavLink to='' className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</NavLink>
                  </li>
                  <li>
                    <NavLink to='' className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</NavLink>
                  </li>
                  <li>
                    <NavLink to='' className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</NavLink>
                  </li>
                </ul>
                <div className="py-1">
                  <NavLink to='' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</NavLink>
                </div>
            </div> 
        </li> */}
        <li>
          <NavLink to='/jobs' className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-lightPurple md:p-0">Find Jobs</NavLink>
        </li>

        <li>
          <NavLink to='/blogs' className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-lightPurple md:p-0">Blogs</NavLink>
        </li>

        <li>
          <NavLink to='/contact-us' className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-lightPurple md:p-0">Contact Us</NavLink>
        </li>
        
        <li className='md:bg-lightPurple md:rounded-[6px] md:p-2 md:hover:bg-purple '>
          <NavLink to='/register' title='Go to Register' className="block py-2 px-3 text-gray-900 md:text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0">Register</NavLink>
        </li>
 
        {/* 6px or 16px */}
        <li className='md:bg-lightPurple md:rounded-[6px] md:p-2 md:hover:bg-purple'> 
          <NavLink to='/user/dashboard' title='Go to Dashboard' className="block py-2 px-3 text-gray-900 md:text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0">Dashboard</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>


  )
}

export default Navbar
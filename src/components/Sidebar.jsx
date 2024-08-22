import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'
import { BiBriefcase, BiLogOutCircle, BiSearch } from 'react-icons/bi'
import image from '../assets/my_image.png'
import { internalApi } from '../api/internal'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { resetUser } from '../redux/slices/userSlice'
import Toast from './Toast'

const Sidebar = ({Component, menu}) => {

  const dispatch = useDispatch()

  const handleLogout = async() =>{
    let response = await internalApi.logout();
    if(response.status == 200){
      toast.success(response.data.message)

      setTimeout(()=>{
        dispatch(resetUser())
      },2000)

     
    }
  }

  return (
    <div>
        
    <nav className="fixed shadow top-0 z-50 w-full bg-white border-b border-gray-200 ">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start rtl:justify-end">
            <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                <span className="sr-only">Open sidebar</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                   <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                </svg>
             </button>
            <NavLink to='' className="flex ms-2 md:me-24">
              <img src={logo} className="h-10 me-3" alt="FlowBite Logo" />
              <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">Career Nexus</span>
            </NavLink>
          </div>
          <div className="flex items-center">
              <div className="flex items-center ms-3">
                <div>
                  <button type="button" className="flex text-sm p-[0.5px] h-8 w-8 bg-lightPurple rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" aria-expanded="false" data-dropdown-toggle="dropdown-user">
                    <span className="sr-only">Open user menu</span>
                    <img className="w-full h-full rounded-full object-cover" src={image} alt="user photo"/>
                  </button>
                </div>
                <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600" id="dropdown-user">
                  <div className="px-4 py-3" role="none">
                    <p className="text-sm text-gray-900 dark:text-white" role="none">
                     Abdul Hannan Faisal
                    </p>
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-gray-300" role="none">
                      ahannan2016@outlook.com
                    </p>
                  </div>
                  <ul className="py-1" role="none">
                    <li>
                      <NavLink to={null} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Dashboard</NavLink>
                    </li>
                    <li>
                      <NavLink to='/profile' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Profile</NavLink>
                    </li>
                  
                    <li>
                      <NavLink to={null} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Sign out</NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
        </div>
      </div>
    </nav>
    
    <aside id="logo-sidebar" className=" fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white shadow-lg border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar">
       <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
          <ul className="space-y-2 font-medium">

            {
              menu.map((value, index)=>{
                return (<li>
                   <NavLink to={value.to} className={ ({isActive})=> ` ${isActive  && 'bg-lightPurple text-white hover:bg-lightPurple'}   flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group`} >
                       <div className='text-2xl'>{value.icon}</div>   
                       <span className="flex-1 ms-3 whitespace-nowrap font-semibold">{value.title}</span>
                   </NavLink>
                </li>)
               
              })
            }
            
             <li>
                <NavLink className= ' flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group' onClick={handleLogout}>
                <div className='text-2xl'> <BiLogOutCircle/></div>   
                   <span className="flex-1 ms-3 whitespace-nowrap font-semibold">Logout</span>
                </NavLink>
             </li>
        
          </ul>
       </div>
    </aside>
    
   
      <div className=" sm:ml-64 relative">
        <div class=" pt-4 p-3  mt-16 min-h-screen xl:w-[1000px] 2xl:w-[1300px] mx-auto">
          <Component/>
        </div>      
       
       
        <div className='absolute mt-2.5 w-full  bg-white border-t-2 py-4 text-center shadow-inner'>
           <small className='font-semibold text-purple'>&copy; 2024 CareerNexus - All Rights Reserved</small>
        </div>

      </div>

   
    
   
    <Toast/>
        </div>
  )
}

export default Sidebar
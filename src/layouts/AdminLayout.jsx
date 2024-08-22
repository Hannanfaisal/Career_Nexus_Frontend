


import React from 'react'
import Sidebar from '../components/Sidebar'
import { Outlet } from 'react-router-dom'

import { BiBriefcase, BiLogOutCircle, BiSearch } from 'react-icons/bi'
import { RiDashboardHorizontalLine } from "react-icons/ri";
import { CgProfile } from 'react-icons/cg'
import { VscOrganization } from "react-icons/vsc";
import { VscFeedback } from 'react-icons/vsc'



const Menu = [

  {
    icon: <RiDashboardHorizontalLine/>,
    title: 'Dashboard',
    to: 'dashboard'
  },

  
  {
    icon: <VscOrganization/>,
    title: 'Companies',
    to: 'companies'
  },

  {
    icon: <RiDashboardHorizontalLine/>,
    title: 'Users',
    to: 'users'
  },

  {
    icon: <BiBriefcase/>,
    title: 'Active jobs',
    to: 'Jobs'
  },



  {
    icon: <VscFeedback />,
    title: 'Feedbacks',
    to: 'feedbacks'
  },
  
  
  {
    icon: <CgProfile/>,
    title: 'My Profile',
    to: 'profile'
  },
 
]

const AdminLayout = () => {

  return (
    <>
     <Sidebar Component={Outlet} menu={Menu} />
    </>
  )
}

export default AdminLayout



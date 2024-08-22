



import React from 'react'
import Sidebar from '../components/Sidebar'
import { Outlet } from 'react-router-dom'

import { BiBriefcase, BiLogOutCircle, BiSearch } from 'react-icons/bi'
import { RiDashboardHorizontalLine } from "react-icons/ri";
import { CgProfile } from 'react-icons/cg'
import { CgFileDocument } from "react-icons/cg";



const Menu = [

  {
    icon: <RiDashboardHorizontalLine/>,
    title: 'Dashboard',
    to: 'dashboard'
  },
  {
    icon: <BiSearch/>,
    title: 'Search Jobs',
    to: '/jobs'
  },
  {
    icon: <BiBriefcase/>,
    title: 'My Jobs',
    to: 'my-jobs'
  },
  {
    icon: <BiBriefcase/>,
    title: 'My Interviews',
    to: 'my-interviews'
  },
  {
    icon: <CgProfile/>,
    title: 'My Profile',
    to: 'my-profile'
  },
  {
    icon: <CgFileDocument/>,
    title: 'My CV',
    to: 'my-cv'
  }
]

const UserLayout = () => {

  return (
    <>
     <Sidebar Component={Outlet} menu={Menu} />
    </>
  )
}

export default UserLayout



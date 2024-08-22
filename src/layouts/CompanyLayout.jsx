
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import React from 'react'
import { RiDashboardHorizontalLine } from "react-icons/ri";
import { CgAdd, CgProfile } from 'react-icons/cg'
import { LuEye } from "react-icons/lu";
import { SiGotomeeting } from "react-icons/si";
import { TbBusinessplan } from "react-icons/tb";
import { FaUsers } from "react-icons/fa6";
import { LiaBlogSolid } from "react-icons/lia";

const Menu = [

    {
      icon: <RiDashboardHorizontalLine/>,
      title: 'Dashboard',
      to: 'dashboard'
    },
    {
      icon: <LuEye/>,
      title: 'View Jobs',
      to: 'jobs'
    },
    {
      icon: <CgAdd/>,
      title: 'Post Job',
      to: 'post-job'
    },
    {
      icon: <FaUsers/>,
      title: 'Applicants',
      to: 'applicants'
    },
    {
        icon: <SiGotomeeting/>,
        title: 'Interviews',
        to: 'interviews'
    },
    {
      icon: <TbBusinessplan />,
      title: 'Subscription',
      to: 'subscription'
    },
    {
      icon: <LiaBlogSolid />,
      title: 'Post Blog',
      to: 'blogs'
    },
    {
      icon: <CgProfile/>,
      title: 'Profile',
      to: 'profile'
    }
  ]
const CompanyLayout = () => {
  return (
    <div>
        <Sidebar Component={Outlet} menu={Menu}/>
    </div>
  )
}

export default CompanyLayout
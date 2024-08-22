import React from 'react'
import TitleBar from '../../components/TitleBar'

import { FaBriefcase } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";
import { FaCheckDouble } from "react-icons/fa6";
import { FcUpload } from "react-icons/fc";
import { SiGotomeeting } from "react-icons/si";
import { useSelector } from 'react-redux';

const Analytics = [
    {
        icon: <FcUpload size={30} color='blue'/>,
        title: 'Jobs Posted'
    },
    {
        icon:  <FaBriefcase size={30} color='green'/>,
        title: 'Jobs Active'
    },
    {
        icon: <SiGotomeeting  size={30} color='grey'/>,
        title: 'Interviews'
    },
    {
        icon: <FaUsers size={30} color='lime'/>,
        title: 'Hired Candidates'
    },

    
]

const CompanyDashboard = () => {

    const profile = useSelector((state)=>state.user)
    console.log(profile)

    return (
       <div>
        <TitleBar title='Dashboard'/>
        <div className='grid lg:grid-cols-2 xl:grid-cols-3 mt-5 gap-5'>
            {
                Analytics.map((value,index)=>{
                    return <div className='p-4 rounded bg-slate-50 shadow-md cursor-pointer shadow-slate-300 hover:bg-slate-200 '>
                             <div className='flex justify-between items-center'>
                                <h2 className='text-xl font-semibold'>{value.title}</h2>
                                <div className='rounded bg-slate-200 p-2'>
                                    {value.icon}
                                </div>
                             </div>
                             <h1 className='font-semibold text-2xl mt-8'>2</h1>
                           </div>
                })
            }
        </div>
       </div> 
    )
}

export default CompanyDashboard
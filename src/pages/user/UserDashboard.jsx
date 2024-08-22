import React from 'react'
import TitleBar from '../../components/TitleBar'
import { TiCancel, TiMediaEject } from 'react-icons/ti'
import { FaBriefcase } from "react-icons/fa";
import { IoTimeOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { FaCheckDouble } from "react-icons/fa6";

const Analytics = [
    {
        icon: <FaBriefcase size={30} color='blue'/>,
        title: 'Jobs Applied'
    },
    {
        icon:  <FaBriefcase size={30} color='grey'/>,
        title: 'Jobs Pending'
    },
    {
        icon: <FaBriefcase size={30} color='grey'/>,
        title: 'Scheduled Interviews'
    },
    {
        icon: <FaCheckDouble size={30} color='green'/>,
        title: 'Acceptances'
    },
    {
        icon: <RxCross2 size={30} color='red'/>,
        title: 'Rejections'
    },
    
    
]

const UserDashboard = () => {
    return (
       <div>
        <TitleBar title='Dashboard'/>
        <div className='grid lg:grid-cols-2 xl:grid-cols-3 mt-5 gap-5'>
            {
                Analytics.map((value,index)=>{
                    return <div className='p-4 rounded bg-slate-50  shadow-md cursor-pointer shadow-slate-300 hover:bg-slate-200 '>
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

export default UserDashboard
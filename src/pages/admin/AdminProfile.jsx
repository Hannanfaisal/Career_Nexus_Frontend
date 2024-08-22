import React from 'react'
import TitleBar from '../../components/TitleBar'
import my_image from '../../assets/my_image.png'
import { MdModeEditOutline, MdTitle } from "react-icons/md";

const AdminProfile = () => {
  return (
    <div>
      <TitleBar title='Admin Profile' />
      <div className='rounded shadow flex flex-col xl:flex-row p-5 gap-5 items-center xl:items-start  xl:gap-0 bg-slate-50 mt-5 r'>
        <div className='basis-1/5 '>
          
            <div className='rounded-full w-32 h-32 bg-slate-300 p-0.5 relative'>
              <img src={my_image} className='w-full h-full rounded-full object-cover' />
              <div className='rounded-full w-6 h-6 bg-lightPurple flex justify-center items-center text-white absolute right-0.5 top-2/3'>
              <MdModeEditOutline/>
                   
              </div>

        
          </div>


        </div>
        <div className='basis-4/5 w-full p-2'>
            <form >
            <div className='w-full flex flex-col xl:flex-row gap-5 mb-3'>
               <div className='w-full'>
                 <label htmlFor=''>Name</label>
                <input type='text' className='w-full  rounded focus:ring-lightPurple placeholder:text-slate-500' placeholder='Name'/>
               </div>

               <div className='w-full'>
               <label htmlFor=''>Email</label>
               <input type='text' className='w-full  rounded focus:ring-lightPurple placeholder:text-slate-500' placeholder='Email'/>
               </div>         
              </div>

              <div className='w-full flex flex-col xl:flex-row gap-5 mb-3'>
               <div className='w-full'>
                 <label htmlFor=''>Phone</label>
                <input type='text' className='w-full  rounded focus:ring-lightPurple placeholder:text-slate-500' placeholder='Phone'/>
               </div>

               <div className='w-full'>
               <label htmlFor=''>Role</label>
               <input type='text' className='w-full  rounded focus:ring-lightPurple placeholder:text-slate-500' placeholder='Administrator' disabled={true}/>
               </div>      
              </div>

              <div>
                <button className='bg-green-500 p-1 rounded text-white'>UPDATE</button>
               </div>
            </form>
        </div>
      </div>
    </div>
  )
}

export default AdminProfile
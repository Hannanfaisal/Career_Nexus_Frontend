
import React, { useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const FilterSearch = () => {
    const [toggle, setToggle] = useState({
        id: "",
        show: false,
        default: true
    })

    const reset = () =>{

    }

    const handleToggle = (id) =>{
        setToggle({...toggle, id, show: !toggle.show})

    }

  return (
    <div className='flex justify-center p-5 sticky top-0 bottom-0'>
        <div className='w-full flex flex-col gap-5'>
            <div className='flex justify-between items-center rounded p-5 border '>
                <h2 className='text-lg font-semibold'>Filter Search</h2>
                <div className=' cursor-pointer text-lightPurple font-semibold'><small>Reset All</small></div>
            </div>

            <div className='flex flex-col justify-between p-5 border rounded'>
               <div className='flex justify-between items-center'>
                    <h2 className='text-lg font-semibold'>Location</h2>
                    <div className=' cursor-pointer rounded-full p-1 duration-200 hover:bg-lightPurple hover:text-white' onClick={()=>handleToggle('location')}>
                    { toggle.id == 'location' && toggle.show ? <IoIosArrowUp /> : <IoIosArrowDown/> }  
                    </div>
                 
                </div>
                {
                   toggle.id == 'location' && toggle.show  && (
                        <> <div className='flex items-center gap-3 mt-2 '>
                        <input type='checkbox' value='onsite' /> <label className='text-sm'>Onsite</label>
                     </div>
                     <div className='flex items-center gap-3 mt-2'>
                        <input type='checkbox' value='remote' /> <label className='text-sm'>Remote</label>
                     </div> </>
                    )
                }
                              
            </div>

            
            <div className='flex flex-col justify-between p-5 border rounded'>
                <div className='flex justify-between items-center'>
                    <h2 className='text-lg font-semibold'>Experience Level</h2>
                    <div className=' cursor-pointer rounded-full p-1 duration-200 hover:bg-lightPurple hover:text-white' onClick={()=>handleToggle('experience_level')}>
                    {  toggle.id == 'experience_level' && toggle.show  ? <IoIosArrowUp /> : <IoIosArrowDown/> }  
                    </div>
                </div>

                {
                  toggle.id == 'experience_level' &&  toggle.show && (
                        <>    <div className='flex items-center gap-3 mt-2'>
                        <input type='checkbox' value='fresher' /> <label className='text-sm'>Fresher</label>
                     </div>
                     <div className='flex items-center gap-3 mt-2'>
                        <input type='checkbox' value='intermediate' /> <label className='text-sm'>Intermediate</label>
                     </div>
                     <div className='flex items-center gap-3 mt-2'>
                        <input type='checkbox' value='experienced' /> <label className='text-sm'>Experienced</label>
                     </div></>
                    )
                }
            
                
                
            </div>

            <div className='flex flex-col justify-between p-5 border rounded'>
                <div className='flex justify-between items-center'>
                    <h2 className='text-lg font-semibold'>Job Type</h2>
                    <div className=' cursor-pointer rounded-full p-1 duration-200 hover:bg-lightPurple hover:text-white' onClick={()=>handleToggle('job_type')}>
                    {  toggle.id == 'job_type' && toggle.show  ? <IoIosArrowUp /> : <IoIosArrowDown/> }  
                    </div>
                </div>

                {
                    toggle.id == 'job_type' &&  toggle.show && (
                        <>
                <div className='flex items-center gap-3 mt-2'>
                   <input type='checkbox' value='fulltime' /> <label className='text-sm'>Full-Time</label>
                </div>
                <div className='flex items-center gap-3 mt-2'>
                   <input type='checkbox' value='parttime' /> <label className='text-sm'>Part-Time</label>
                </div>
                <div className='flex items-center gap-3 mt-2'>
                   <input type='checkbox' value='freelance' /> <label className='text-sm'>Freelance</label>
                </div>
                <div className='flex items-center gap-3 mt-2'>
                   <input type='checkbox' value='internship' /> <label className='text-sm'>Internship</label>
                </div>

                </>
                    )
                }
                
                
            </div>

        </div>
    </div>
  )
}

export default FilterSearch
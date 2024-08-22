import React, {useState} from 'react'
import { BiBriefcase } from 'react-icons/bi'
import { FaBusinessTime } from "react-icons/fa6";
import { GrLocation, GrUserExpert } from 'react-icons/gr';
import { SiHyperskill } from "react-icons/si";
import { MdCancel } from "react-icons/md";
import { FaUserPlus } from "react-icons/fa";
import { PiSeatFill } from "react-icons/pi";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const EditJobForm = () => {
    const [formData, setFormData] = useState({
        name:'', job_type: ''
    })
    const [skills, setSkills] = useState([])
    const [skill, setSkill] = useState()

    const [value, setValue] = useState('');
  return (
    <div>
      <form>
                    <div className='flex flex-col lg:flex-row gap-3'>
                        <div className='w-full relative'>
                            <input type='text' className='w-full pl-9 rounded focus:ring-lightPurple placeholder:text-black ' placeholder='Job title' />
                            <span className='absolute top-[12px] left-2 text-xl text-slate-500'><BiBriefcase /></span>
                        </div>

                        <div className='w-full relative'>
                            <span className='absolute top-[11px] left-2 text-xl text-slate-500'>< FaBusinessTime /></span>
                            <select className='w-full rounded pl-9 focus:ring-lightPurple'>
                                <option value=''>Full-Time</option>
                                <option value=''>Part-Time</option>
                                <option value=''>Freelance</option>
                                <option value=''>Internship</option>
                            </select>
                        </div>
                    </div>

                    <div className='flex flex-col lg:flex-row gap-3 mt-3'>

                        <div className='w-full relative'>
                            <span className='absolute top-[11px] left-2 text-xl text-slate-500'><GrLocation /></span>
                            <select className='w-full rounded pl-9 focus:ring-lightPurple' >
                                <option value=''>Onsite</option>
                                <option value=''>Remote</option>
                                <option value=''>Hybrid</option>
                            </select>
                        </div>

                        <div className='w-full relative'>
                            <span className='absolute top-[11px] left-2 text-xl text-slate-500'><GrUserExpert /></span>
                            <select className='w-full rounded pl-9 focus:ring-lightPurple'>
                                <option value=''>Fresher</option>
                                <option value=''>Intermediate</option>
                                <option value=''>Expert</option>
                            </select>
                        </div>
                    </div>

                    <div className='flex flex-col lg:flex-row gap-3 mt-3'>

                        <div className='w-full relative'>
                            <input type='text' className='w-full pl-9 rounded placeholder:text-black focus:ring-lightPurple' placeholder='Skills' onChange={(e) => setSkill(e.target.value)} />
                            <span className='absolute top-[12px] left-2 text-xl text-slate-500'><SiHyperskill /></span>
                            {skill && <p className='absolute bg-slate-300 right-2 top-[10px] px-2 rounded cursor-pointer' onClick={addSkill}>Add</p>}
                        </div>

                        <div className='w-full relative '>
                            <div className='outline-1 outline outline-slate-600 rounded p-2  bg-white'>
                                <div className='flex flex-wrap gap-2'>


                                    {
                                        skills.length != 0 ? skills.map((value, index) => {
                                            return <div className='rounded-md bg-slate-200 py-1 px-2 '> <div className='text-red-600 flex justify-end text-xs '><MdCancel className='cursor-pointer hover:scale-125 duration-300' onClick={() => { setSkills(skills.filter((val) => val !== value)) }} /></div> <div className='px-4 font-semibold'>{value}</div> </div>
                                        })

                                            :
                                            <div className='text-slate-500 '>First add skills</div>
                                    }


                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='mt-3 flex gap-3'>

                        <div className='lg:w-1/2 w-full relative'>
                            <input type='number' className='w-full pl-9 rounded focus:ring-lightPurple placeholder:text-black' placeholder='Experience in years' />
                            <span className='absolute top-[12px] left-2 text-xl text-slate-500'><FaUserPlus /></span>
                        </div>
                        <div className='lg:w-1/2 w-full relative'>
                            <input type='number' className='w-full pl-9 rounded focus:ring-lightPurple placeholder:text-black' placeholder='Number of seats' />
                            <span className='absolute top-[12px] left-2 text-xl text-slate-500'><PiSeatFill /></span>
                        </div>

                    </div>

                    <h2 className='font-semibold mt-3 text-slate-700 text-lg'>Description</h2>
                    <div className='mt-3 w-full bg-white'>
                        
                        <div className=' outline outline-1 outline-slate-600  '>
                            <ReactQuill theme="snow" value={value} onChange={setValue} />
                        </div>

                    </div>

                    <div className='mt-3'>
                        <button className='bg-green-400 rounded text-white px-2 py-1.5' onClick={(e) => e.preventDefault()}>POST</button>
                    </div>


                </form>

    </div>
  )
}

export default EditJobForm
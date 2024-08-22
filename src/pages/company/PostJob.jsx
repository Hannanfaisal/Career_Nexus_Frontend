import React, { useState } from 'react'
import TitleBar from '../../components/TitleBar'
import { BiBriefcase } from 'react-icons/bi'
import { FaBusinessTime } from "react-icons/fa6";
import { GrLocation, GrUserExpert } from 'react-icons/gr';
import { SiHyperskill } from "react-icons/si";
import { MdCancel } from "react-icons/md";
import { FaUserPlus } from "react-icons/fa";
import { PiSeatFill } from "react-icons/pi";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import useDisable from '../../hooks/useDisable';
import useLoader from '../../hooks/useLoader';
import { toast } from 'react-toastify';
import { internalApi } from '../../api/internal';
import { useFormik } from 'formik';
import jobSchema from '../../schema/jobSchema';
import Toast from '../../components/Toast'
import Spinner from '../../components/Spinner';

const PostJob = () => {
    const [skills, setSkills] = useState([])
    const [skill, setSkill] = useState()


    const addSkill = (value) => {
        if (skills.includes(skill.toUpperCase())) {
            return;
        }
        setSkills([...skills, skill.toUpperCase()])
        setFieldValue('skills', skills)
    }

    
    const [loading, showLoader, hideLoader] = useLoader()
    const [disable, disabledButton] = useDisable()
    const initialValues = {
        title: '',
        type: '', 
        location: '',
        level: '', 
        vacancy: 0, 
        experience: 0, 
        description: '',
      };

  


  
    const handleDescriptionChange = (value) => {
        setFieldValue('description', value); 
    };



const handleJob = async (state,action) => {

    showLoader()
    disabledButton()
    console.log(state)

    const data = {
            "title": state.title,
            "type":  state.type,
            "location": state.location,
            "level":  state.level,
            "skills": skills,
            "vacancy": state.vacancy,  
            "experience": state.experience,
            "description": state.description,
            "company": "64e8f993ef9fbb1eabb5ad8b"
    }
    let response = await internalApi.postJob(data)
    if (response.status == 201) {

        toast.success(response.data.message)
        
        
        setTimeout(() => {
            action.resetForm()
            setSkill('')
            setSkills([])
            hideLoader()
        }, 1000)

    } else if (response.code == 'ERR_BAD_REQUEST') {
        toast.error(response.response.data.message)
        hideLoader()
    }
}

    const {values, errors,touched, handleBlur, handleChange, handleSubmit, setFieldValue } = useFormik({
        initialValues,
        validationSchema: jobSchema,
        onSubmit: (state,action) => {
           
            handleJob(state, action)
        }
    })





    return (
        <div>
            <TitleBar title='Post Job' />
            <div className='mt-5 p-5 rounded shadow-md bg-slate-50'>
                <form onSubmit={handleSubmit}>
                    <div className='flex flex-col lg:flex-row gap-3'>
                        <div className='w-full relative'>
                            <input type='text' className='w-full pl-9 rounded focus:ring-lightPurple placeholder:text-black ' placeholder='Job title' value={values.title} name='title' onChange={handleChange}  />
                            <span className='absolute top-[12px] left-2 text-xl text-slate-500'><BiBriefcase /></span>
                            <small className='text-red-500'>{errors.title}</small>
                        </div>

                        <div className='w-full relative'>
                            <span className='absolute top-[11px] left-2 text-xl text-slate-500'>< FaBusinessTime /></span>
                            <select className='w-full rounded pl-9  focus:ring-lightPurple' name='type' value={values.type} onChange={handleChange} >
                                <option value=''>Select type</option>
                                <option value='fullTime'>Full-Time</option>
                                <option value='partTime'>Part-Time</option>
                                <option value='freelance'>Freelance</option>
                                <option value='internship'>Internship</option>
                            </select>
                            <small className='text-red-500'>{errors.type}</small>
                        </div>
                    </div>

                    <div className='flex flex-col lg:flex-row gap-3 mt-3'>

                        <div className='w-full relative'>
                            <span className='absolute top-[11px] left-2 text-xl text-slate-500'><GrLocation /></span>
                            <select className='w-full rounded pl-9 focus:ring-lightPurple' name='location' value={values.location}  onChange={handleChange} >
                                <option value=''>Select location</option>
                                <option value='onsite'>Onsite</option>
                                <option value='remote'>Remote</option>
                                <option value='hybrid'>Hybrid</option>
                            </select>
                            <small className='text-red-500'>{errors.location}</small>
                        </div>

                        <div className='w-full relative'>
                            <span className='absolute top-[11px] left-2 text-xl text-slate-500'><GrUserExpert /></span>
                            <select className='w-full rounded pl-9 focus:ring-lightPurple' name='level' value={values.level}  onChange={handleChange}>
                                <option value=''>Select experience level</option>
                                <option value='fresher'>Fresher</option>
                                <option value='intermediate'>Intermediate</option>
                                <option value='expert'>Expert</option>
                            </select>
                            <small className='text-red-500'>{errors.level}</small>
                        </div>
                    </div>

                    <div className='flex flex-col lg:flex-row gap-3 mt-3'>

                        <div className='w-full relative'>
                            <input type='text' className='w-full pl-9 rounded placeholder:text-black focus:ring-lightPurple' placeholder='Skills' onChange={(e) => setSkill(e.target.value)} />
                            <span className='absolute top-[12px] left-2 text-xl text-slate-500'><SiHyperskill /></span>
                            {skill && <p className='absolute bg-slate-300 right-2 top-[10px] px-2 rounded cursor-pointer' onClick={addSkill}>Add</p>}
                            {touched.title &&   <small className='text-red-500'>{ skills.length <=0 && 'Skills required'}</small>}
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
                            <input type='number' className='w-full pl-9 rounded focus:ring-lightPurple placeholder:text-black' placeholder='Experience in years' name='experience' value={values.experience}  onChange={handleChange} />
                            <span className='absolute top-[12px] left-2 text-xl text-slate-500'><FaUserPlus /></span>
                            <small className='text-red-500'>{errors.experience}</small>
                        </div>
                        <div className='lg:w-1/2 w-full relative'>
                            <input type='number' className='w-full pl-9 rounded focus:ring-lightPurple placeholder:text-black' placeholder='Number of seats'  name='vacancy' value={values.vacancy}  onChange={handleChange} />
                            <span className='absolute top-[12px] left-2 text-xl text-slate-500'><PiSeatFill /></span>
                            <small className='text-red-500'>{errors.vacancy}</small>
                        </div>

                    </div>

                    <h2 className='font-semibold mt-3 text-slate-700 text-lg'>Description</h2>
                    <div className='mt-3 w-full bg-white'>
                        
                        <div className=' outline outline-1 outline-slate-600  '>
                           <ReactQuill theme="snow"  value={values.description} name='description' onChange={handleDescriptionChange}  />
                        </div>
                        <small className='text-red-500'>{errors.description}</small>
                        

                    </div>

                    <div className='mt-3'>
                        <button className='bg-green-400 rounded text-white px-5 py-1.5' type='submit' disabled={disable}> {loading ? <div className='flex gap-2 items-center'> <Spinner/> Posting...</div> : 'POST' }</button>
                    </div>


                </form>

            </div>
            <Toast/>
        </div>
    )
}

export default PostJob


import React, { useState } from 'react'
import { MdTitle } from "react-icons/md";
import { TbLogs } from "react-icons/tb";
import { MdCategory } from "react-icons/md";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import placeholder from '../assets/placeholder.png'
import { internalApi } from '../api/internal';
import useLoader from '../hooks/useLoader';
import useDisable from '../hooks/useDisable';
import Toast from './Toast';
import { toast } from 'react-toastify';
import { useFormik } from 'formik';
import blogSchema from '../schema/blogSchema';
import Spinner from './Spinner';


const BlogForm = () => {
  

    const [loading, showLoader, hideLoader] = useLoader()
    const [disable, disabledButton] = useDisable()
    const initialValues = {
        title: '',
        photo: '', 
        category: '', 
        shortDescription: '', 
        description: ''
    }

  

    const uploadPhoto = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
           
            setFieldValue('photo', reader.result);
      
        };

    }

  
    const handleDescriptionChange = (value) => {
        setFieldValue('description', value); 
    };





const handleBlog = async (state,action) => {

    showLoader()
    disabledButton()

    const data = {
        "title": state.title,
        "category": state.category,
        "photo": state.photo,
        "shortDescription": state.shortDescription,
        "description": state.description,
        "user": "66c0d7857373f539e0ea16ce"
    }
    let response = await internalApi.postBlog(data)
    if (response.status == 201) {

        toast.success(response.data.message)
        
        setTimeout(() => {
            action.resetForm()
            hideLoader()
        }, 1000)

    } else if (response.code == 'ERR_BAD_REQUEST') {
        toast.error(response.response.data.message)
        hideLoader()
    }
}

    const {values, errors, touched, handleBlur, handleChange, handleSubmit, setFieldValue } = useFormik({
        initialValues,
        validationSchema: blogSchema,
        onSubmit: (state,action) => {
           
            handleBlog(state, action)
        }
    })


    return (
        <div>
            <form onSubmit={handleSubmit}>


                <div className='flex flex-col lg:flex-row gap-3'>
                    <div className='w-full relative'>
                        <input type='text' className='w-full pl-9 rounded focus:ring-lightPurple placeholder:text-black' placeholder='Blog title' name='title' value={values.title} onChange={handleChange} />
                        <span className='absolute top-[12px] left-2 text-xl text-slate-500'><MdTitle /></span>
                    </div>

                    <div className='w-full relative'>
                        <span className='absolute top-[11px] left-2 text-xl text-slate-500'><MdCategory /></span>
                        <select className='w-full rounded pl-9 focus:ring-lightPurple' name='category' value={values.category} onChange={handleChange}>
                            <option value=''>Category</option>
                            <option value='SoftwareEngineering'>Software Engineering</option>
                            <option value='HumanResource'>Human Resource</option>
                            <option value='ComputerScience'>Computer Science</option>
                            <option value='Technology'>Technology</option>
                            <option value='Design'>Design</option>
                            <option value='Science'>Science</option>
                            <option value='Medical'>Design</option>
                        </select>
                    </div>
                </div>


                <div className='flex flex-col lg:flex-row gap-3 mt-3'>

                    <div className=' w-full relative'>
                        <input type='text' className='w-full pl-9 rounded placeholder:text-black focus:ring-lightPurple' placeholder='Short Description' name='shortDescription' value={values.shortDescription} onChange={handleChange}  />
                        <span className='absolute top-[12px] left-2 text-xl text-slate-500'><TbLogs /></span>
                    </div>
                </div>



                <div className='mt-3 w-full bg-white'>
                    <div className=' outline outline-1 outline-slate-600  '>
                        <ReactQuill theme="snow"  value={values.description} name='description' onChange={handleDescriptionChange}  />
                    </div>

                </div>

                <div className='flex flex-col lg:flex-row gap-3 justify-center items-center mt-3 '>

                    <div className={`rounded w-[85px] h-[54px] ${values.photo && 'border-lightPurple'} border p-0.5`}>
                            <img src={values.photo ? values.photo : placeholder} className={`w-full h-full rounded object-scale-down  ${!values.photo && 'opacity-10'}`} />
                    </div>

                    <div className='w-full relative'>
                        <input type='file' className=' file:rounded 
                        file:border-none file:cursor-pointer outline-slate-950 border-2 border-dashed pl-6 py-1 rounded-md'  accept="image/*" onChange={uploadPhoto} />
                    </div>




                </div>

                <div className='mt-3 flex justify-end'>
                    <button className='bg-green-400  rounded text-white px-5 py-2 hover:bg-green-700' type='submit' disabled={disable} > {loading ? <div className='flex items-center gap-2'><Spinner/> Posting...</div> : 'POST' }</button>
                </div>


            </form>
            <Toast/>
        </div>
    )
}

export default BlogForm
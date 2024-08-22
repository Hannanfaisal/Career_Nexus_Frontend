

import React from 'react'
import { BsGoogle } from 'react-icons/bs'
import Button from '../components/Botton'
import { IoBookmarkOutline, IoMapOutline } from "react-icons/io5";
import { IoArrowForward } from "react-icons/io5";
import { GrLocation } from 'react-icons/gr';
import { FaRegCalendar } from "react-icons/fa";
import { HiOutlineSquare3Stack3D } from "react-icons/hi2";
import { BsBriefcase } from "react-icons/bs";
import { GrUserExpert } from "react-icons/gr";

const overview = [
    {
        icon: <FaRegCalendar/>,
        title: 'Job Posted',
        value: '14 Aug, 2024'
    },
    {
        icon: <HiOutlineSquare3Stack3D/>,
        title: 'Job Level',
        value: 'Entry Level'
    },
    {
        icon: <GrUserExpert/>,
        title: 'Experience',
        value: '2+ years'
    },
    {
        icon: <BsBriefcase/>,
        title: 'Education',
        value: 'Graduation'
    },
    
    
]

const JobDetail = () => {


    return (
        <div>
            <div className='bg-slate-200 px-5 py-3 w-full '>
                <h2 className='text-lg font-semibold'>Job Details</h2>
            </div>
            <div className='flex flex-col justify-center w-full lg:w-[75%] mx-auto mt-5'>
                <div className='flex flex-col gap-5 sm:gap-0 sm:flex-row justify-between w-full p-5'>
                    <div className='flex items-center gap-3'>
                        <div className='rounded-full bg-slate-200 w-10 h-10 sm:w-20 sm:h-20 flex justify-center items-center'>
                            <BsGoogle size={30} />
                        </div>
                        <div>
                            <h1 className='text-xl font-semibold'>Senior Software Engineer</h1>
                            <p className='text-slate-600'>at Google <span className='ml-1 px-3 py-1 bg-lime-700 text-white rounded'>Onsite</span> </p>
                        </div>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <div className='rounded text-2xl box-border p-3 text-lightPurple bg-slate-200  flex justify-center items-center' >
                            <IoBookmarkOutline />
                        </div>
                        <div><button className='flex items-center rounded gap-2 bg-lightPurple px-6 py-3 text-white'>Apply Now <IoArrowForward /></button></div>
                    </div>
                </div>

                <div className='flex flex-col lg:flex-row justify-between '>
                    <div className='basis-3/5'>
                        <div className='px-5 py-2'>
                            <h2 className='text-lg font-semibold'>Job Description</h2>
                            <p className='text-justify'>Here at Velstar, we don't just make websites, we create exceptional digital experiences that consumers love. Our team of designers, developers, strategists, and creators work together to push brands to the next level. From Platform Migration, User Experience & User Interface Design, to Digital Marketing, we have a proven track record in delivering outstanding eCommerce solutions and driving sales for our clients.</p>
                        </div>

                        <div className='px-5 py-2'>
                            <h2 className='text-lg font-semibold'>Job Requirements</h2>
                            <p className='text-justify'>
                                <ul className=' list-inside list-disc'>
                                    <li>Great troubleshooting and analytical skills combined with the desire to tackle challenges head-on</li>
                                    <li>3+ years of experience in back-end development working either with multiple smaller projects simultaneously or large-scale applications </li>
                                    <li>Experience with HTML, JavaScript, CSS, PHP, Symphony and/or Laravel </li>
                                    <li>Working regularly with APIs and Web Services (REST, GrapthQL, SOAP, etc)</li>
                                    <li>Have experience/awareness in Agile application development, commercial off-the-shelf software, middleware, servers and storage, and database management.</li>
                                    <li>Familiarity with version control and project management systems (e.g., Github, Jira)</li>
                                    <li>Great troubleshooting and analytical skills combined with the desire to tackle challenges head-on</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                    <div className='basis-2/5 p-5 lg:p-0'>
                        <div className='border rounded flex p-5 justify-between'>
                            <div className='text-center  basis-1/2'>
                                <p className='font-semibold'>Salary (USD)</p>
                                <p className='text-lime-600'>$100000 - $120000</p>
                                <small>Monthly salary</small>
                            </div>
                            <div className='h-auto bg-slate-200 w-0.5'></div>
                            <div className='text-center basis-1/2'>
                                <IoMapOutline className='mx-auto text-lightPurple' size={25} />
                                <p className='font-semibold'>Job Location</p>
                                <p>Dhaka</p>
                            </div>
                        </div>

                        <div className='border rounded flex p-5 justify-center  mt-5'>
                            <div className=''>
                                <p className='font-semibold text-center'>Job Overview</p>
                                <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-x-20 sm:gap-x-10 gap-y-5 mt-8 '>
                                
                                {
                                    overview.map((value,index)=>{
                                        return <div className=''>
                                                 <div className='text-2xl text-lightPurple mb-1.5 '>
                                                 {value.icon}
                                                    </div>
                                                

                                                <small className='text-darkSlate'>{value.title.toUpperCase()}</small>
                                                <br/>
                                                <small className='font-semibold text-darkSlate'>{value.value}</small>
                                               </div>
                                    })
                                }

                                
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

                <hr />

                <div className='mt-10 flex justify-center items-center'>
                   
                    <div className=''>
                    <h1 className='text-2xl font-semibold text-center'>Related Jobs</h1>
                        <div className='grid sm:grid-cols-2 xl:grid-cols-3 gap-5 mt-10 px-1'>
                            {[1, 2, 3, 4,5,6].map((value, index) => {
                                return <div className='p-5 rounded-xl border flex flex-col justify-center sm:w-[300px] cursor-pointer bg-slate-50 hover:bg-slate-100'>
                                    <div>
                                        <h2 className='font-semibold'>Associate Software Engineer</h2>
                                        <div className='flex justify-start gap-3'>
                                            <div className=' rounded-sm bg-slate-100 px-1'>
                                                <small className='text-darkGreen font-semibold'>PART-TIME</small>
                                            </div>
                                            <p className='text-darkSlate'>Salary: $2000 - $3000</p>
                                        </div>
                                    </div>
                                    <div className='flex items-center gap-3 mt-5'>
                                        <div className='rounded-md bg-slate-200 w-10 h-10 sm:w-14 sm:h-14 flex justify-center items-center'>
                                            <BsGoogle size={20}/>
                                        </div>
                                        <div>
                                            <h1 className=' font-semibold'>Google</h1>
                                            <p className='text-slate-600 flex items-center gap-1'> <GrLocation color='text-orange-500'  /> Dhaka, Bangladesh </p>
                                        </div>
                                    </div>
                                </div>
                            })}
                        </div>
                    </div>
                </div>





            </div>


        </div>
    )
}

export default JobDetail
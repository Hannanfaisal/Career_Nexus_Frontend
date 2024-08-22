

import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import TitleBar from '../../components/TitleBar'
import my_image from '../../assets/my_image.png'
import placeholder from '../../assets/user.png'

const ApplicantDetail = () => {

    const location = useLocation()
    const {state: value} = location

    return (
        <div>
            <TitleBar title='Applicant Details' />
            <div className='mt-5 p-4 flex flex-col lg:flex-row bg-slate-50 rounded shadow min-h-[500px]'>
                <div className='basis-1/4  flex justify-center p-5'>
                   <div>
                    <div className='h-40 w-40 rounded-full p-0.5 bg-slate-100 mb-5'>
                        <img src={ value?.applicantId['photo'] ? my_image : placeholder} className={` ${!value?.applicantId['photo'] && 'opacity-10'} h-full w-full rounded-full object-cover `} />
                        <div className='text-xl mt-5'><h2 className='font-semibold text-center'>{value?.applicantId['name']}</h2></div>   
                    </div>
                    

                    </div>
                </div>
                <div className='basis-3/4 p-5 lg:border-l-2  border-slate-600'>
                    <div className=''>


                        <div className="mt-8 ">
                            <h2 className="text-xl font-semibold text-gray-900">Contact Information</h2>
                            <ul className="mt-4 space-y-2 text-gray-600">
                                <li>Email: {value?.applicantId['email'] }</li>
                                <li>Phone: {value?.applicantId['phone'] || '----'}</li>
                                <li>Location: {value?.applicantId['address'] || '----'}</li>
                                <li>LinkedIn: linkedin.com/in/abdul-hannan-faisal-079044282</li>
                                <li>GitHub: https://github.com/Hannanfaisal</li>
                            </ul>
                            
                        </div>
                        
                        <div className='w-full h-[1px] bg-slate-700 mt-5'></div>

                        <div className="mt-8">
                            <h2 className="text-xl font-semibold text-gray-900">Experience</h2>
                            <div className="mt-4 space-y-4">
                       

                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800">Software Engineer Intern</h3>
                                    <p className="text-gray-600">IIFA - July 2024 - Aug 2024</p>
                                    <ul className="mt-2 text-gray-600 list-disc list-inside">
                                        <li>Designed and implemented UI components with React.js and Tailwind CSS.</li>
                                        <li>Worked closely with designers to translate wireframes into functional code.</li>
                                        <li>Ensured responsive design and cross-browser compatibility.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className='w-full h-[1px] bg-slate-700 mt-5'></div>

                        <div className="mt-8">
                            <h2 className="text-xl font-semibold text-gray-900">Education</h2>
                            <div className="mt-4 space-y-4">
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800">Bachelor of Science in Computer Science</h3>
                                    <p className="text-gray-600">University of Lahore - Graduated: 2024</p>
                                </div>

                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800">Intermediate</h3>
                                    <p className="text-gray-600">Unique College - Graduated: 2019</p>
                                </div>
                            </div>
                        </div>

                        <div className='w-full h-[1px] bg-slate-700 mt-5'></div>

                        <div className="mt-8">
                            <h2 className="text-xl font-semibold text-gray-900">Skills</h2>
                            <div className="mt-4 flex flex-wrap gap-2">
                                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">Flutter</span>
                                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">React</span>
                                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">Node.js</span>
                                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">MongoDB</span>
                                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">Tailwind CSS</span>
                                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">SQL</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default ApplicantDetail
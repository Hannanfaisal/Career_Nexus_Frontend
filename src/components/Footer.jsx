

import React from 'react'
import { FaFacebook, FaLink } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { NavLink } from 'react-router-dom';


const links = [
    <FaFacebook title='Follow us on Facebook'/> ,  <FaInstagramSquare title='Follow us on Instagram'/>, <FaTwitter title='Follow us on Twitter'/> ,<FaLinkedin title='Follow us on Linkedin'/>
]

const Footer = () => {
  return (
    <div className='bg-lightPurple w-full mt-10 text-white '>
        <div className='lg:flex  p-10'>
            <div className='basis-1/2 flex justify-center flex-col '>
                <h1 className='font-semibold text-2xl lg:text-3xl text-center lg:text-start'>CareerNexus</h1>
                <div className='flex gap-3 cursor-pointer text-xl lg:text-2xl mt-1.5 mx-auto lg:mx-0'>

                    {
                        links.map((value,index)=>{
                            return <div key={index} className='hover:scale-125 duration-300 '>{value}</div>
                        })
                    }

                </div>
            </div>
            <div className=' text-center lg:text-start basis-1/2  lg:flex  mt-5 lg:mt-0'>
            <div className='basis-1/2'>
            <h2 className='font-semibold text-xl'>Product</h2>
            
            <ul className=' leading-loose text-slate-200 lg:text-white'>
                <li className=' font-extraligh hover:underline'><NavLink to={null}>IT Jobs</NavLink> </li>
                <li className=' font-extralight  hover:underline'><NavLink to={null}>Job Seekers</NavLink> </li>
                <li className=' font-extralight  hover:underline'><NavLink to='/blogs'>Blogs</NavLink> </li>
            </ul>
            </div>
            <hr className='w-1/2 mx-auto mb-5 lg:hidden '/>
            <div className='basis-1/2 '>
            <h2 className='font-semibold text-xl '>Company</h2>
            <ul className='leading-loose  text-slate-200 lg:text-white'>
                <li className=' font-extralight hover:underline'><NavLink to='/about-us'>About us</NavLink> </li>
                <li className=' font-extralight hover:underline'><NavLink to='/contact-us'>Contact us</NavLink> </li>
                <li className=' font-extralight hover:underline'><NavLink to={null}>Send Feedback</NavLink> </li>
            </ul>
            </div>
            <hr className='w-1/2 mx-auto mb-5 lg:hidden'/>
            <div className='basis-1/2'>
            <h2 className='font-semibold text-xl '>Get in Touch</h2>
            <ul className='leading-loose  text-slate-200 lg:text-white'>
                <li className='font-extralight hover:underline'><NavLink to={null}>info@CareerNexus.in</NavLink></li>
                <li className='font-extralight hover:underline'><NavLink to={null}>+92-3370408845</NavLink></li>
            </ul>
            </div>

            </div>
        </div>

        <hr/>
        <div className='p-4'>
            <ul className=' list-disc list-inside flex flex-col sm:flex-row gap-5 items-center justify-center'>
                <li className='font-extralight hover:underline'><NavLink to={null}>Privacy Policy</NavLink></li>
                <li className='font-extralight hover:underline'><NavLink to={null}>Terms & Conditions</NavLink></li>
                <li className='font-extralight hover:underline'><NavLink to={null}>User Agreement</NavLink></li>
            </ul>
        </div>
        <hr />
        <div className='text-center p-4 '>
            <small>&copy; 2024 CareerNexus - All Rights Reserved</small>
        </div>
    </div>
  )
}

export default Footer
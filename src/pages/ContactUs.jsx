

import React from 'react'
import { FaPhone } from "react-icons/fa";
import Button from '../components/Botton'
import { MdEmail } from 'react-icons/md'
import { IoLocationSharp } from "react-icons/io5";
import { motion } from 'framer-motion';


const ContactUs = () => {


    const Contacts = [
        {
            icon: <FaPhone />,
            title: "Telephone",
            content: "+92-3370408845",
            delay: 0.1
        },
        {
            icon: <MdEmail />,
            title: "Mail",
            content: "ahannan2016@outlook.com",
            delay: 0.2
        },
        {
            icon: <IoLocationSharp />,
            title: "Address",
            content: "+92-3370408845",
            delay: 0.3
        },
    ]
    

    return (
        <div>
            <div className='flex  items-center justify-center  min-h-[100vh]'>
                <div>
                <div className='text-center mb-10 mt-10 2xl:mt-0'>
                    <motion.h1 initial={{x:-100, opacity:0}} animate={{x:0, opacity: 1}} transition={{delay:0.3, x:{type: "spring", opacity: {duration: 1}}}}  className='font-semibold text-3xl text-purple'>Contact Us</motion.h1>
                    <motion.p initial={{x:100, opacity:0}} animate={{x:0, opacity: 1}} transition={{delay: 0.4, x:{type: "spring", opacity: {duration: 1}}}} className='text-slate-500'>We're here to help—reach out to us anytime!</motion.p>
                </div>
                <div className='grid sm:grid-cols-2  lg:grid-cols-3  gap-5 mb-10 justify-items-center'>
                    {
                        Contacts.map((value, index) => {
                            return <motion.div initial={{y:50, opacity:0}} animate={{y:0, opacity: 1}} transition={{delay: value.delay, y:{type:"spring"}}} key={index} className='flex-col  w-[250px] bg-slate-100 p-5 rounded shadow hover:shadow-lg duration-300 cursor-pointer'>
                                <div className='flex items-center gap-3'>
                                    <div className='rounded-full bg-lightPurple p-3 text-lg text-white'>
                                        {value.icon}
                                    </div>
                                    <h2 className='font-semibold'>{value.title}</h2>
                                </div>

                                <div className='flex justify-end mt-2'>
                                  
                                    <small className=''>{value.content}</small>
                                </div>

                            </motion.div>
                        })
                    }

                </div>

                <motion.div initial={{x:200, opacity:0.5}} whileInView={{x:0, opacity: 1}} transition={{delay: 0.3, x:{type: "spring", opacity: {duration: 1}}}} className='rounded shadow-md bg-slate-50 p-5'>
                    <h1 className='text-purple font-semibold text-xl my-4'>Write us a message</h1>
                    <form>
                        <div className='flex flex-col lg:flex-row gap-5 mb-2'>
                            <div className='w-full'>
                                <label htmlFor='' className='text-slate-600 text-sm'>Full Name</label>
                                <input type='text' className='w-full rounded focus:ring-lightPurple placeholder:text-black ' placeholder='Full name' />
                            </div>
                            <div className='w-full'>
                                <label htmlFor='' className='text-slate-600 text-sm'>Email  Address</label>
                                <input type='text' className='w-full rounded focus:ring-lightPurple placeholder:text-black ' placeholder='Email' />
                            </div>
                        </div>


                        <div className='flex flex-col lg:flex-row gap-5 mb-2'>
                            <div className='w-full'>
                                <label htmlFor='' className='text-slate-600 text-sm'>Phone</label>
                                <input type='text' className='w-full rounded focus:ring-lightPurple placeholder:text-black ' placeholder='Phone' />
                            </div>
                            <div className='w-full'>
                                <label htmlFor='' className='text-slate-600 text-sm'>Subject</label>
                                <input type='text' className='w-full  rounded focus:ring-lightPurple placeholder:text-black ' placeholder='Subject' />
                            </div>
                        </div>

                        
                            <div className='w-full mb-2'>
                                <label htmlFor='' className='text-slate-600 text-sm'>Message</label>
                                <textarea type='text' rows={5} className='w-full  rounded focus:ring-lightPurple placeholder:text-black ' placeholder='Message' />
                            </div>
                     

                        <div className='flex justify-center'>
                            <Button title='send' width='1/3' />
                        </div>
                    </form>
                </motion.div>
            </div>
            </div>
        </div>
    )
}

export default ContactUs
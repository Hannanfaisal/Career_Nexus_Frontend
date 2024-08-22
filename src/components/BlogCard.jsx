import React from 'react'
import image from '../assets/company1.jpg'
import my_image from '../assets/my_image.png'
import { MdArrowOutward } from "react-icons/md";
import { motion } from 'framer-motion';

const BlogCard = ({click}) => {
  return (
    <motion.div initial={{y: 100, opacity: 0}} animate={{y:0,opacity: 1}} transition={{delay: 0.3, y: {type: 'spring', stiffness: 60}}}  className=' shadow-md  rounded-lg w-full bg-slate-50 hover:shadow-xl   duration-200 cursor-pointer'>
        <div className='flex flex-col gap-3'>

      
        <div className='w-full h-52 rounded-t-lg p-3 hover:p-0 duration-500'>
            <img src={image} className='h-full w-full rounded-t-lg object-cover hover:brightness-150 '/>
        </div>

        <div className='px-4 py-2 flex flex-col gap-2'>
        <div className='bg-pink-500 w-fit px-2 flex items-center  rounded-xl'>
            <small className='text-white'>Design</small>
        </div>

        <div className='flex justify-between items-center'>
            <h1 className='text-xl font-semibold font-cursive'>UX review</h1>
            <div className='cursor-pointer text-lg rounded-full hover:bg-lightPurple hover:text-white hover:scale-150 duration-300' onClick={click}>
              <MdArrowOutward />
            </div>
         
        </div>
        <p className=' text-justify  font-serif  leading-5 '>How do you create compelling presentations that wow your colleagues and impress your managers?</p>
        </div>

        <div className='flex items-center gap-4 px-4 py-3'>
          <div className='rounded-full h-10 w-10'><img className='w-full h-full rounded-full object-cover' src={my_image}/></div>
          <div className='text-xs'><p className='font-semibold'>Abdul Hannan</p><p className='text-slate-600'>12 Jan 2024</p></div>
        </div>

        </div>
    </motion.div>
  )
}

export default BlogCard
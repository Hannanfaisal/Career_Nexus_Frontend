import React from 'react'
import BlogCard from '../components/BlogCard'
import { BsSearch } from 'react-icons/bs';
import imagee from '../assets/lines.png'
import PostBlog from './company/PostBlog';
import BlogForm from '../components/BlogForm';
import { useNavigate } from 'react-router-dom';
import {motion} from 'framer-motion'

const Blogs = () => {

  const navigate = useNavigate()

  const navigateToDetails = () =>{
    navigate('/blog/details')
  }

  return (
    <div className=''>

      <div className=''>

        

{/* <div id="default-carousel" className="relative w-full" data-carousel="slide">
    
    <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src={imagee} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
      
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src={imagee} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
    
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src={imagee} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src={imagee} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src={imagee} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
       
    </div>
   
    <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
    </div>
    
    <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span className="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span className="sr-only">Next</span>
        </span>
    </button>
</div> */}


      </div>

      <div className=' my-10 '>

        <div className='text-center flex flex-col items-center gap-5 '>
          <motion.h1 initial={{x:-150, opacity:0.5}} animate={{x:0, opacity: 1}} transition={{delay: 0.3, x:{type: "spring", opacity: {duration: 1}}}} className='text-purple text-3xl font-semibold'>Resources and insights</motion.h1>
          <motion.p initial={{x:150, opacity:0.5}} animate={{x:0, opacity: 1}} transition={{delay: 0.4, x:{type: "spring", opacity: {duration: 1}}}} className='text-lightPurple text-lg'>The latest industry news, interviews, technologies, and resources.</motion.p>
          <motion.div initial={{y:100, opacity:0}} animate={{y:0, opacity: 1}} transition={{delay: 0.2, x:{type: "just", opacity: {duration: 5}}}} className='w-3/4 lg:w-1/4 2xl:w-1/6 relative'>
            <input type='text' className='w-full pl-10 rounded-full placeholder:text-slate-500 focus:ring-lightPurple' placeholder='Search Blogs' onChange={null} />
            <span className='absolute top-[11px] left-3 text-xl text-slate-500'><BsSearch /></span>
          </motion.div>
        </div>
      </div>


      <div className=' mx-auto flex flex-col justify-center xl:w-[1000px] px-5 xl:px-0 '>

        <div className="  grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
          {[1, 2, 3, 4, 5].map((value, index) => {
            return (

              <BlogCard click={ navigateToDetails}/>

            );
          })}
        </div>

        <div className='mt-10 text-center'> <h1 className='text-purple text-3xl font-semibold'>Post New Blog</h1></div>

        <motion.div initial={{y: 50, opacity: 0}} animate={{y:0,opacity:1}} transition={{delay:0.3, y: {type: "spring"}}} className='mt-5 bg-slate-100 rounded p-10'>
         <BlogForm/>
        </motion.div>
       
      </div>


    </div>
  )
}

export default Blogs
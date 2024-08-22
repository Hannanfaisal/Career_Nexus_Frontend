import React from 'react'
import Navbar from '../components/Navbar'
import lines from '../assets/lines.png'
import hand from '../assets/hand.png'
import vacancy from '../assets/vacancy.png'
import support from '../assets/support.png'
import image1 from '../assets/image1.png'
import { FaArrowRightLong } from 'react-icons/fa6'
import { BiCalendar, BiLocationPlus, BiSearch } from 'react-icons/bi'
import Button from '../components/Botton'
import { GrDocumentUser } from "react-icons/gr";
import { BsGoogle } from 'react-icons/bs'
import { GrLocation } from "react-icons/gr";
import { Link, useNavigate } from 'react-router-dom'
import { FaLocationArrow } from "react-icons/fa6";
import { BsRocketFill } from "react-icons/bs";
import { easeIn, motion } from 'framer-motion'

const services = [
    {
        image: hand,
        title: 'Easy Applying',
        description: 'The process fo applying for job is easy and fast'     
    },
    {
        image: vacancy,
        title: 'Many Vacancies',
        description: 'There are many job vacancies from various company'    
    },
    {
        image: support,
        title: 'Best Support',
        description: 'We provide full support for job seeker to achieve better result'      
    }
]



const steps = [
    {
        icon: <GrDocumentUser/>,
        step: 'Complete Profile',
        description: 'Once you are registered, we showcase you to leading technology startups'  ,
        color: 'bg-teal-500'   
    },
    {
        icon: <FaLocationArrow/>,
        step: 'Apply Jobs',
        description: 'Search and apply for Jobs that are more suitable for you',
        color: 'bg-purple'   
    },
    {
        icon: <BsRocketFill/>,
        step: 'Receive Job Offers',
        description: 'Companies start sending interview requests. Talk to only the ones you like',
        color: 'bg-teal-900'  
    }
]

const Home = () => {

    const navigate = useNavigate()

    const goToJobDetails = () =>{
        navigate('/job/details')
    }

  return (
    <div>
        <section className=' lg:h-[65vh] w-full flex justify-center items-center bg-purple' style={{backgroundImage: `url(${lines})`,backgroundSize:'contain', backgroundRepeat: 'no-repeat'}}>
         
                <div className='flex flex-col basis-3/4 justify-center items-center p-10'>
                    <motion.div initial={{x:-150, opacity:0.5}} animate={{x:0, opacity: 1}} transition={{delay:0.2, x:{type: "spring",stiffness: 60, opacity: {duration: 1}}}} className='text-[25px] lg:text-[50px] text-center'>
                        <p className='text-[#FFA000] font-Lora '>“Discover Your Path to Success:</p>
                        <p className='font-Lora text-center text-[#00AEFF] font-bold'>Find the Perfect Job <p className='underline text-[#F412D8]'> Today!”</p></p>
                    </motion.div>
                    <motion.div initial={{x:150, opacity:0.5}} animate={{x:0, opacity:1}} transition={{delay:0.3, x:{type: "spring", stiffness: 60}}} className='search w-[120%] lg:w-[75%] 2xl:w-[50%] rounded-2xl shadow-lg h-[3rem] mt-5'>
                            <div className='flex rounded-2xl border h-full bg-slate-300  items-center justify-center'>
                                <div className='icon  pl-1 lg:px-[2%] text-slate-600'>
                                    <BiSearch className='w-8'/>
                                </div>
                            <input type='text' className='w-full bg-transparent border-none focus:outline-none focus:ring-0' placeholder='job title or keywords'/>
                            <div className='vertical-line w-0.5 h-9 bg-slate-400'></div>
                            <select className='bg-slate-300 border-none cursor-pointer font-bold text-purple focus:ring-0 '>
                                <option>Country</option>
                                <option>Pakistan</option>
                            </select>
                            <button className=' bg-lightPurple bg-gradient-to-r from-lightPurple to-purple h-full text-white px-[5%] rounded-e-2xl text-sm basis-1/4 flex justify-center items-center hover:bg-gradient-to-br '><FaArrowRightLong/></button>
                            </div>
                        </motion.div>    
                </div>
                {/* <div className=' basis-1/4 h-full hidden lg:flex justify-center items-center bg-[#e2ccf2] p-0'>
                    <div className='container rounded-3xl bg-lightPurple w-[200px] h-[200px] flex items-center justify-center'>
                        <div>
                            <img src={lines} className='mx-auto w-[100px] h-[100px]'/>
                            <h1 className='text-white text-2xl font-semibold'>CareerNexus</h1>
                        </div>
                    </div> 

                    
                </div> */}
          
            
       
        </section>

        <section className='flex justify-center items-center mt-10'>
            <div className=''>
                <motion.h1 initial={{y:100, opacity: 0}} animate={{y:0, opacity: 1}} transition={{delay: 0.2, y: {type: "spring"}}}  className='text-3xl mx-auto text-center text-purple font-semibold  w-[60%]'>More Easier to find a job with our platform</motion.h1>
                <div className='grid lg:grid-cols-3 gap-5 lg:gap-0 mt-5 p-5'>

                    {
                        services.map((value,index)=>{
                            return <motion.div initial={{y:100, opacity: 0.5}} whileInView={{y:0, opacity: 1}} transition={{delay: 0.3, y: {type: "spring"}}}  className='container text-center'>

                                
                            <img src={value.image} className='w-[50%] lg:h-[55%] mx-auto hover:scale-105 duration-300 cursor-pointer '/>
                            <div className='mt-4'>
                            <h2 className='font-bold text-purple'>{value.title}</h2>
                            <p className='text-slate-600 mt-2 w-[75%] mx-auto'>{value.description}</p>
                            </div>
                        
                        </motion.div>
                        })
                    }
              

        
                   
                </div>
            </div>
        </section>


        <section className='job-section bg-slate-100 flex justify-center items-center py-10'>
            <div className=''>
                <div className='text-center'>
                    <h1 className='sm:text-3xl font-semibold text-purple'>Available Jobs</h1>
                    <p className='text-slate-500'>Find the following job that suits you and apply now</p>
                </div>
                <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10'>
                    {
                        [1,2,3,4,5].map((value,index)=>{
                            return <motion.div initial={{y:30, opacity: 0.5}} whileInView={{y:0, opacity: 1}} transition={{delay: 0.3, y: {type: "spring"}}} className='shadow rounded-xl bg-white w-full sm:w-[300px] p-5 cursor-pointer hover:bg-slate-100 mx-auto'>
                                <div className='upper flex justify-between items-center'>
                                    <div className='flex items-center gap-2'>
                                    <div className='rounded-full bg-slate-100 w-10 h-10 flex justify-center items-center'>
                                        <BsGoogle/>
                                    </div>
                                    <div>
                                        <h2 className='font-semibold'>Google</h2>
                                        <div className='flex items-center gap-1'><GrLocation className='text-orange-500'/><p className='text-sm'>Berlin</p></div>
                                    </div>
                                    </div>
                                    <div><button className='rounded-full border text-lightPurple border-lightPurple px-1.5'>save</button></div>
                                </div>
                                <hr className='mt-4'/>
                                <div className='middle mt-5'>
                                    <h2 className='text-lg text-purple font-semibold'>Senior Software Engineer</h2>
                                    <ul className=' list-disc list-inside marker:text-orange-500'>
                                        <li className='text-xs'>Onsite</li>
                                    </ul>
                                </div>
                                <div className='lower flex justify-between mt-5'>
                                    <div className='flex gap-2 items-center text-sm'><BiCalendar className='text-lightPurple'/> August 6, 2024</div>
                                    <div><button className='rounded-full border bg-lightPurple text-white border-lightPurple px-2 py-1 text-sm hover:animate-pulse ' onClick={goToJobDetails}>Apply Now</button></div>
                                </div>
                            </motion.div>
                        })
                    }
                </div>
                <motion.small initial={{x: -100, opacity: 0}} animate={{x:0, opacity:1}} transition={{type: "spring"}}  className=' flex justify-center mt-10 text-purple hover:underline font-semibold'>
                   <Link to='' className='flex items-center gap-3'>Show all jobs< FaArrowRightLong /></Link> 
                </motion.small>
                
            </div>
        </section>



        <section className='flex justify-center items-center  bg-[#e2ccf2] py-10'>
            <div className=''>
                <motion.h1 initial={{y:50, opacity: 0.5}} animate={{y:0, opacity: 1}} transition={{delay: 0.3, y: {type: "spring"}}} className='text-2xl mx-auto text-center text-purple font-semibold  w-[60%]'>How We Do?</motion.h1>
                <div className='grid lg:grid-cols-3 gap-7 lg:gap-0 mt-5 p-5'>

                    {
                        steps.map((value,index)=>{
                            return <motion.div initial={{y:50, opacity: 0.5}} whileInView={{y:0, opacity: 1}} transition={{delay: 0.3, y: {type: "spring"}}} className='container text-center flex flex-col justify-center items-center'>
                                <div className=' ring-1 ring-green-600 rounded-full p-1 w-14 h-14 text-white cursor-pointer hover:scale-110 duration-300'>
                                  <div className={`${value.color} text-lg w-full h-full rounded-full flex items-center justify-center`}>
                                    {value.icon} 
                                  </div>
                                </div>

                            <div className='mt-4'>
                            <h2 className='font-bold text-purple'> {`STEP ${index+1}:`} {value.step.toUpperCase()}</h2>
                            <p className='text-slate-600 mt-2 w-[75%] mx-auto'>{value.description}</p>
                            </div>
                        
                        </motion.div>
                        })
                    }
              

        
                   
                </div>
            </div>
        </section>




        <section className='flex justify-end mt-10'>
            <div className=' bg-lightPurple   lg:basis-4/5 lg:rounded-s-full  p-10 lg:flex justify-center items-center'>
                <motion.div initial={{x:-200, opacity: 0}} whileInView={{x:0, opacity: 1}} transition={{delay: 0.1, y: {type: "spring", stiffness: 60}}} className='container rounded-3xl w-[100px] h-[100px] lg:w-[180px] lg:h-[180px] bg-white flex justify-center items-center tr mx-auto'>
                    <h1 className=' lg:text-2xl text-lightPurple '>CarrerNexus</h1>
                </motion.div>
                <motion.div initial={{y:100, opacity: 0.5}} whileInView={{y:0, opacity: 1}} transition={{delay: 0.3, y: {type: "spring"}}} className='text-white w-full lg:w-[65%] p-5  text-center  mx-auto'>
                    <h1 className='text-[20px] lg:text-[50px] 2xl:text-[80px] text-center '>Let’s start joining us and get a job</h1>
                    <p className='text-sm text-slate-300 lg:text-lg'>Let’s join our platform at jobs me for an experience in finding a job that is easier and matches what you are looking for.</p>
                    <Button title='Join now' round='full' borderWidth='2'  borderColor='orange-700' marginTop='5'/>
                </motion.div>
            </div>
           
        </section>

        
    </div>
  )
}

export default Home
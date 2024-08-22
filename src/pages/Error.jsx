

import React from 'react'
import logo from '../assets/logo.png'
import error from '../assets/error.png' 
import Button from '../components/Botton'
import { Navigate, useNavigate } from 'react-router-dom'

const Error = () => {
  const navigate = useNavigate()
  const goToHome = () =>{
    navigate('/')
  }
  return (
    <div>
        <div className='flex items-center gap-2 p-5'>
          <img src={logo} className='h-8'/>
          <h1 className='font-semibold text-2xl text-purple'>CarrerNexus</h1>
        </div>
        <div className='flex items-center h-[calc(100vh-100px)] justify-center'>
        
        <div className='content'>
            <div className=' w-[300px] 2xl:w-[450px]'>
               <img  src={error}/> 
               <h1 className='text-2xl 2xl:text-4xl font-bold mt-4'>Oops! the page not found</h1> 
               <div className=' flex justify-center mt-5'>
               <Button  title='Go Home' click={goToHome}/>
               </div>
             
            </div>
        </div>


     
        </div>
    </div>
  )
}

export default Error

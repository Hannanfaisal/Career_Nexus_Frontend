import React from 'react'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const Toast = () => {
  return (
    
    <ToastContainer autoClose={1000} hideProgressBar={true} position='top-center'/>
  )
}

export default Toast
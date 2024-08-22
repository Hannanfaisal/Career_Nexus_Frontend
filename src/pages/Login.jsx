import React, { useState } from 'react'
import logo from '../assets/logo.png'
import background2 from '../assets/background2.jpg'
import { HiEyeSlash } from "react-icons/hi2"
import { HiMiniEye } from "react-icons/hi2";
import Button from '../components/Botton'
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik';
import loginSchema from '../schema/loginSchema';
import { toast } from 'react-toastify';
import Toast from '../components/Toast';
import { internalApi } from '../api/internal';
import Spinner from '../components/Spinner';
import { motion } from 'framer-motion';
import useLoader from '../hooks/useLoader';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/slices/userSlice';
import useDisable from '../hooks/useDisable';

const Login = () => {

    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate()
    const [loading, showLoader, hideLoader] = useLoader()
    const [disable, disabledButton] = useDisable()
    const dispatch = useDispatch()

    const togglePassword = () => {
        setShowPassword(!showPassword)
    }


    const handleLogin = async (state, action) => {

        showLoader()
        disabledButton()
        let response = await internalApi.login(state)
        if (response.status == 200) {

            toast.success(response.data.message)
            dispatch(setUser(response.data.user))

            setTimeout(() => {
                action.resetForm()
                hideLoader()

                if (state.role === 'user') {
                    navigate('/user/dashboard')
                }
                else {
                    navigate('/company/dashboard')
                }

            }, 1000)

        } else if (response.code == 'ERR_BAD_REQUEST') {
            toast.error(response.response.data.message)
            hideLoader()
        }
    }

    const { values, errors, touched, handleChange, handleBlur, handleSubmit } = useFormik({
        initialValues: {
            email: '',
            password: '',
            role: ''
        },
        validationSchema: loginSchema,
        onSubmit: (state, action) => {
            handleLogin(state, action)
        }

    })



    return (
        <div className='min-h-screen  bg-cover bg-center bg-no-repeat ' style={{ backgroundImage: `url(${background2})`, backgroundAttachment: 'fixed' }}>
            <div className='relative'>
                <div className='flex gap-2 items-center absolute left-10 top-5'>
                    <img src={logo} className='h-10' />
                    <h1 className='text-white text-sm xl:text-2xl 2xl:text-3xl font-bold'>CareerNexus</h1>
                </div>
                <div className=' flex justify-center items-center min-h-[600px] lg:min-h-[100vh] '>
                    <motion.div initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2, x: { type: "spring", opacity: { duration: 1 } } }} className='p-5 w-[75%] lg:w-[40%] xl:w-[30%] 2xl:w-[25%] rounded  backdrop-blur-md bg-white/20'>
                        <form onSubmit={handleSubmit}>
                            <div className='mb-3 text-center'>
                                <h1 className='text-2xl xl:text-3xl font-bold text-white '>Sign in</h1>
                                <small className='text-white'>Welcome back to CareerNexus.</small>
                            </div>
                            <div className='mb-3'>

                                <input type='text' className='w-full p-2 rounded border border-slate-300 focus:border-none focus:ring-purple-800 focus:ring-2 ' placeholder='Email' name='email' value={values.email} onBlur={handleBlur} onChange={handleChange} />
                                <small className='text-red-500 font-semibold '>{errors.email && touched.email && errors.email}</small>
                            </div>

                            <div className='mb-3'>
                                <div className='relative'>
                                    <input type={showPassword ? 'text' : 'password'} className='w-full p-2 rounded border border-slate-300 focus:border-none focus:ring-purple-800 focus:ring-2' placeholder='Password' name='password' value={values.password} onBlur={handleBlur} onChange={handleChange} />
                                    {showPassword ? <HiEyeSlash className='absolute top-1/2 right-2 transform -translate-y-1/2 cursor-pointer text-slate-500' onClick={togglePassword} /> : <HiMiniEye className='absolute top-1/2 right-2 transform -translate-y-1/2 cursor-pointer text-slate-500' onClick={togglePassword} />}
                                </div>
                                <small className='text-red-500 font-semibold '>{errors.password && touched.password && errors.password}</small>
                            </div>

                            <div className='mb-3 text-center'>
                                <div className='flex justify-center gap-5'>
                                    <div className='flex items-center gap-2 text-white'><input type='radio' name='role' value='user' onChange={handleChange} /> User </div>
                                    <div className='flex items-center gap-2 text-white'><input type='radio' name='role' value='company' onChange={handleChange} /> Company </div>
                                </div>
                                <small className='text-red-400 font-semibold '>{errors.role && touched.role && errors.role}</small>
                            </div>
                            <div className='mb-3'>
                                <Button title={loading ? 'Please wait...' : 'Sign in'} width='full' disabled={disable ? true : false} />

                            </div>
                            <div className='text-center'>
                                <div><small className='text-slate-200'>Need an account? <Link to='/register' className='underline cursor-pointer font-semibold text-purple'>Create one</Link></small></div>
                            </div>
                        </form>
                    </motion.div>
                </div>



            </div>
            <Toast />
        </div>
    )
}

export default Login
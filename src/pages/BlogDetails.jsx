
import React from 'react'
import image from '../assets/my_image.png'
import companyImage from '../assets/company1.jpg'
import BlogCard from '../components/BlogCard'
import { motion } from 'framer-motion'

const BlogDetails = () => {
    return (
        <div>
            <div className='flex flex-col items-center justify-start gap-5 mt-10'>

                <div className='w-full flex flex-col justify-center items-center gap-5'><h1 className='text-center font-bold  text-[18px] lg:text-[25px] xl:text-[45px]  xl:w-1/2 '>5 Tip for staying motivated when working remotely</h1>
                    <div className='flex gap-3 items-center text-slate-400 text-xs font-semibold'>
                        <div className='rounded-full w-10 h-10 bg-slate-100 p-0.5'><img className='rounded-full w-full h-full object-cover' src={image} /></div>
                        <p>Abdul Hannan Faisal</p>
                        <div className='h-8 w-0.5 bg-slate-200'></div>
                        <p>April 26, 2024</p>
                    </div>
                </div>
                <div className='w-full 2xl:w-3/4 flex justify-center lg:px-20 px-5'>
                    <motion.img initial={{x:-150, opacity: 0.5}} animate={{x:0, opacity: 1}}   transition={{delay:0.3, x: {type:"spring", stiffness: 60}}} src={companyImage} className='rounded-xl lg:w-4/5 w-full h-[400px] object-cover ' />
                </div>
                <div className='p-5 lg:w-1/2 2xl:w-1/3 leading-7'>
                    <p className='text-justify font-serif'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                    </p>
                    <p className='text-justify font-serif'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.

                    </p>
                </div>

            </div>
            <div className='bg-slate-200 w-full  lg:px-3 py-10 flex flex-col items-center'>
                <h2 className='font-semibold text-2xl'>Similar Articles</h2>
                <div className='lg:w-[1000px] flex justify-center mt-5'>
                    <div className=' grid sm:grid-cols-2 lg:grid-cols-3  gap-5 px-5 lg:px-0'>

                        {[1, 2, 3].map((value, index) => {
                            return  <BlogCard /> 
                        })}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default BlogDetails
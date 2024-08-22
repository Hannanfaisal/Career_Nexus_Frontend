import React, { useRef } from 'react'
import TitleBar from '../../components/TitleBar'
import { useLocation } from 'react-router-dom'
import { formatDate } from '../../utils/date'

const desc = "What is Lorem Ipsum?Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Why do we use it?It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).Where does it come from?Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.. comes from a line in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from  by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."

const CompanyJobDetails = () => {
 
  const location  = useLocation()
  const {state: value} = location

  return (
    <div>
     
        <TitleBar title='Job Details'/>
        <div className='bg-slate-50 shadow rounded flex min-h-[100vh] mt-5 p-5'>
            <div  className='basis-1/5  p-5 border-r-2'>
               <div className='font-semibold mb-3'>
                <h2>JOB TITLE</h2>
               </div>
               <div className='font-semibold mb-3'>
                <h2>POSTED ON</h2>
               </div>
               <div className='font-semibold mb-3'>
                <h2>STATUS</h2>
               </div>
               <div className='font-semibold mb-3'>
                <h2>DESCRIPTION</h2>
               </div>
            </div>
            <div className='basis-4/5  p-5 '>
               <div className='mb-3'>
                <h2 className='font-semibold text-purple'>{value?.title}</h2>
               </div>
               <div className='mb-3'>
                <h2>{formatDate(value?.createdAt)}</h2>
               </div>
               <div className='mb-3'>
                <h2 className={` ${value?.status ? 'bg-green-500' : 'bg-red-500'}  w-fit text-white text-sm px-1.5 py-0.5 rounded-full`}>{!value?.status ? 'Active' : 'In active'}</h2>
               </div>
               <div className='mb-3'>
                <p className='text-justify'>{value?.description}</p>
               </div>
            </div>
        </div>
    </div>
  )
}

export default CompanyJobDetails
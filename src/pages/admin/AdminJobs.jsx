

import React, {useEffect, useState} from 'react'
import TitleBar from '../../components/TitleBar'
import { FaBriefcase } from "react-icons/fa";
import Pagination from '../../components/Pagination';


const data = [
  {
    title: 'Mern Developer',
    company: 'IIFA TECH',
    date: '8 Aug, 2024',
    status: 'Active',
    action: 'View'
  },
  {
    title: 'Mern Developer',
    company: 'IIFA TECH',
    date: '8 Aug, 2024',
    status: 'Active',
    action: 'View'
  },
  {
    title: 'Mern Developer',
    company: 'IIFA TECH',
    date: '8 Aug, 2024',
    status: 'Active',
    action: 'View'
  }
]

const AdminJobs = () => {

  const [currentPage, setCurrentPage] = useState(1)
  const [postPerPage, setPostPerPage] = useState(2)
  const lastPostIndex = currentPage * postPerPage
  const firstPostIndex = lastPostIndex - postPerPage
   const currentJobs = data.slice(firstPostIndex, lastPostIndex)
  

  return (
    <div>
      <TitleBar title='Jobs'/>
      <div className='border mt-5'>
        <div className=' overflow-y-auto overflow-x-auto  w-full '>
                <table className='table-auto w-[200%] xl:w-full'>
                    <thead className='bg-lightPurple  h-10 shadow-md'>
                        <tr className='text-md text-white text-start'>
                            <th className=' font-semibold px-2' >No.</th>       
                            <th className=' font-semibold px-2'>Job</th>
                            <th className=' font-semibold px-2'>Company</th>
                            <th className=' font-semibold px-2'>Date</th>
                       
                            <th className=' font-semibold px-2'>Status</th>
                            <th className=' font-semibold px-2'>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        
                        {
                          currentJobs.map((value, index)=>{
                            return (
                              <tr className='border-b-2 border-lightPurple'>
                            <td className='text-center p-2'>{index+1}.</td>        
                            <td className='text-center p-2'>{value.title}</td> 
                            <td className='text-center p-2'>{value.company}</td> 
                            <td className='text-center p-2 '>{value.date}</td> 
                         
                            <td className='text-center p-2'>{value.status}</td> 
                           
                            <td className='text-center p-2'><button className='bg-green-400 p-1 rounded text-white' onClick={null}> {value.action} </button></td> 
                        </tr>   
                        
                            )
                          })
                        }
                        
                        


                        
                                          
                    </tbody>
                </table>

                <Pagination totalPosts={data.length} postsPerPage={postPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
            </div>
        </div>
    </div>
  )
}

export default AdminJobs
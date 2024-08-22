

import React, {useEffect, useState} from 'react'
import TitleBar from '../../components/TitleBar'
import { FaBriefcase } from "react-icons/fa";
import Pagination from '../../components/Pagination';


const data = [
  {
    name: 'Abdul Hannan Faisal',
    email: 'ahannan2016@outlook.com',
    contact: '03370408845',
    action: 'View'
  },
  {
    name: 'Abdul Hannan Faisal',
    email: 'ahannan2016@outlook.com',
    contact: '03370408845',
    action: 'View'
  },
  {
    name: 'Abdul Hannan Faisal',
    email: 'ahannan2016@outlook.com',
    contact: '03370408845',
    action: 'View'
  },
  {
    name: 'Abdul Hannan Faisal',
    email: 'ahannan2016@outlook.com',
    contact: '03370408845',
    action: 'View'
  },
  {
    name: 'Abdul Hannan Faisal',
    email: 'ahannan2016@outlook.com',
    contact: '03370408845',
    action: 'View'
  },
  {
    name: 'Abdul Hannan Faisal',
    email: 'ahannan2016@outlook.com',
    contact: '03370408845',
    action: 'View'
  },
  {
    name: 'Abdul Hannan Faisal',
    email: 'ahannan2016@outlook.com',
    contact: '03370408845',
    action: 'View'
  },
  {
    name: 'Abdul Hannan Faisal',
    email: 'ahannan2016@outlook.com',
    contact: '03370408845',
    action: 'View'
  },
  {
    name: 'Abdul Hannan Faisal',
    email: 'ahannan2016@outlook.com',
    contact: '03370408845',
    action: 'View'
  }
]

const Users = () => {

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
                            <th className=' font-semibold px-2'>Name</th>
                            <th className=' font-semibold px-2'>Email</th>
                            <th className=' font-semibold px-2'>Contact</th>
                            <th className=' font-semibold px-2'>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        
                        {
                          currentJobs.map((value, index)=>{
                            return (
                              <tr className='border-b-2 border-lightPurple'>
                            <td className='text-center p-2'>{index+1}.</td>        
                            <td className='text-center p-2'>{value.name}</td> 
                            <td className='text-center p-2'>{value.email}</td> 
                            <td className='text-center p-2 '>{value.contact}</td> 
                         
                        
                           
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

export default Users
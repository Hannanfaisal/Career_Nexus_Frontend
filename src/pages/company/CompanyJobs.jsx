

import React, { useEffect, useState } from 'react'
import TitleBar from '../../components/TitleBar'
import { BsEye } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import Modal from '../../components/Modal'
import EditJobForm from '../../components/EditJobForm'
import { internalApi } from '../../api/internal'
import { formatDate } from '../../utils/date'
import Pagination from '../../components/Pagination'
import usePagination from '../../hooks/usePagination'
import { useSelector } from 'react-redux'


const CompanyJobs = () => {

    const [jobs, setJobs] = useState([])
    const navigate = useNavigate()
    const [currentPage, postPerPage, setCurrentPage, currentRecords] = usePagination(jobs)
  
    const navigateToDetails = (value) =>{
       navigate('details', {state: value})  
    }

    const userId = useSelector((state=>state.user.user._id))
    console.log(userId)

    const getJobs = async () => {
        try {
            let response = await internalApi.getCompanyJobs('64e8f993ef9fbb1eabb5ad8b');
            if (response.status === 200) {
                setJobs(response.data.jobs);
                
            } else {
                console.log('Error fetching jobs');
            }
        } catch (error) {
            console.error('Error fetching jobs', error);
        }
    };

    
    useEffect(()=>{
        getJobs()
    },[jobs])


  return (
    <div>
        <TitleBar title='My Jobs'/>
        <div className='border mt-5'>
        <div className=' overflow-y-auto overflow-x-auto  w-full '>
                <table className='table-auto  w-[200%] xl:w-full'>
                    <thead className='bg-lightPurple  h-10 shadow-md'>
                        <tr className='text-md text-white text-start'>
                            <th className=' font-semibold px-2' >No.</th>
                            <th className=' font-semibold px-2'>Job</th>        
                            
                            <th className=' font-semibold px-2'>Application Date</th>
                            <th className=' font-semibold px-2'>Status</th>
                            <th className=' font-semibold px-2'>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            currentRecords.map((value,index)=>{
                                return  <tr className='border-b-2 border-lightPurple'>
                                <td className='text-center p-2'>{index+1}.</td>
                                <td className='text-center p-2 '>{value?.title}</td> 
                               
                                <td className='text-center p-2'> {formatDate(value?.createdAt)}</td> 
                                <td className='text-center p-2 '>{!value?.status ? <span className='px-2 py-1 rounded-full bg-green-600 text-white'>Active</span> : <span className='px-2 py-1 rounded-full bg-red-600 text-white'>In Active</span>}</td> 
                             
                                <td className='text-center p-2'> <button data-modal-target="edit-job" data-modal-toggle="edit-job" className='bg-green-400 p-1 px-2 rounded text-white'  onClick={null}>EDIT</button> <button className='bg-green-400 p-1 px-2 rounded text-white'  onClick={()=>navigateToDetails(value) }>DETAILS</button></td> 
    
    
                                <Modal id='edit-job' title='Edit Job' form={<EditJobForm/>} />
    
                            </tr> 
                            })
                        }
                         
                                  
                    </tbody>
                </table>
                
            </div>
            <Pagination totalPosts={jobs.length} postsPerPage={postPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
        </div>
    </div>
  )
}

export default CompanyJobs
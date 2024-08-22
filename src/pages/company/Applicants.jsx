
import React, { useEffect, useState } from 'react'
import TitleBar from '../../components/TitleBar'
import { Outlet, useNavigate } from 'react-router-dom'
import { BiCheck } from 'react-icons/bi'
import { GiCancel } from 'react-icons/gi'
import { internalApi } from '../../api/internal'
import { formatDate } from '../../utils/date'
import { toast } from 'react-toastify'
import Toast from '../../components/Toast'

const Applicants = () => {

    const navigate = useNavigate()

    const [applications, setApplications] = useState([])
    const [accept, setAccept] = useState(false)

    const navigateToDetails = (value) => {
        navigate('/company/applicant/details', {state: value})
    }

    const navigateToScheduleInterview = () => {
        navigate('/company/schedule/interview')
    }


    const getJobApplications = async () => {
        try {
            let response = await internalApi.getCompanyJobApplications('66c1f734e14aa43d091a34fc');
            if (response.status === 200) {
                setApplications(response.data.applications);

            

            } else {
                console.log('Error fetching jobs');
            }
        } catch (error) {
            console.error('Error fetching jobs', error);
        }
    };

    useEffect(() => {
        getJobApplications()
    }, [accept])


   
    const updateJobApplication = async (data) => {

      
    
 
        let response = await internalApi.updateCompanyJobApplication(data)
        console.log(response)
        if (response.status == 200) {
    
            console.log('updated')
             toast.success(response.data.message)
             setAccept(true)
            
        } else if (response.code == 'ERR_BAD_REQUEST') {
            toast.error(response.response.data.message)
         
            console.log('error')
        }
    }
    

    return (
        <div>
            <TitleBar title='Applicants' />
            <div className='border mt-5'>
                <div className=' overflow-y-auto overflow-x-auto w-full  '>
                    <table className='table-auto w-[200%] xl:w-full'>
                        <thead className='bg-lightPurple  h-10 shadow-md'>
                            <tr className='text-md text-white text-start'>
                                <th className='font-semibold px-2'>No.</th>
                                <th className='font-semibold px-2'>Applicant Name</th>
                                <th className='font-semibold px-2'>Job</th>

                                <th className='font-semibold px-2'>Application Date</th>
                                <th className='font-semibold px-2'>Status</th>
                                <th className='font-semibold px-2'>Details</th>
                                <th className='font-semibold px-2'>Interview</th>
                                <th className='font-semibold px-2'>Actions</th>
                            </tr>
                        </thead>

                        <tbody className=' '>
                            {
                                applications?.map((value, index) => {
                                    return <tr className='border-b-2 border-lightPurple'>
                                        <td className='text-center p-2 font-semibold'>{index+1}.</td>
                                        <td className='text-center p-2 '>{value?.applicantId['name']}</td>
                                        <td className='text-center p-2'>{value?.jobId['title']}</td>
                                        <td className='text-center p-2'>{ formatDate(value?.createdAt)}</td>
                                        <td className='text-center p-2'>{value?.status}</td>
                                        <td className='text-center p-2'> <button className='bg-green-400 px-2 py-0.5 rounded-sm text-md text-white' onClick={()=>navigateToDetails(value)}> Details </button> </td>
                                        <td className='text-center p-2'>  <button className={` ${value?.status === 'approved' ? 'bg-red-500' : 'bg-red-200'} px-2 py-0.5 rounded-sm  text-white`} onClick={navigateToScheduleInterview} disabled={value?.status === 'approved' ? false : true}> Schedule Interview </button> </td>

                                        <td className='text-center p-2 '> <div className='flex gap-1 justify-center'> {value?.status === 'pending' ?  <button className='bg-red-500 px-2 py-0.5  rounded-sm text-md text-white'  onClick={()=>updateJobApplication({'status':'rejected', 'id':'66c45ef0aef1b1a74e0f05cd'})}>Reject </button> : '--'} 
                                        {value?.status === 'pending' ? <button className='bg-green-400 px-2 py-0.5 rounded-sm text-white' onClick={()=>updateJobApplication({'status':'approved', 'id':'66c45ef0aef1b1a74e0f05cd'})}> Accept </button> : '--'} </div>  </td>
                                    </tr>

                                })
                            }





                        </tbody>
                    </table>

                </div>
            </div>
            <Toast/>
        </div>
    )
}

export default Applicants


import React, { useEffect, useState } from 'react'
import TitleBar from '../../components/TitleBar'
import { internalApi } from '../../api/internal';
import { formatDate } from '../../utils/date';

const MyInterviews = () => {

    const [interviews, setInterviews] = useState([])

    
    const getUserJobApplications = async () => {
        try {
            let response = await internalApi.getUserJobApplications('66c0309ffe92400386beb115');
            if (response.status === 200) {
                setInterviews(response.data.applications);
            } else {
                console.log('Error fetching interviews');
            }
        } catch (error) {
            console.error('Error fetching interviews', error);
        }
    };

    useEffect(()=>{
        getUserJobApplications()
    },[])



  return (
    <div>
        <TitleBar title='My Interviews'/>
        <div className='border mt-5'>
        <div className=' overflow-y-auto overflow-x-auto  w-full '>
                <table className='table-auto  w-[200%] xl:w-full'>
                    <thead className='bg-lightPurple  h-10 shadow-md'>
                        <tr className='text-md text-white text-start'>
                            <th className=' font-semibold px-2' >No.</th>       
                            <th className=' font-semibold px-2'>Job</th>
                            <th className=' font-semibold px-2'>Company</th>
                            <th className=' font-semibold px-2'>Date</th>
                            <th className=' font-semibold px-2'>Time</th>
                            <th className=' font-semibold px-2'>Interview Status</th>
                            <th className=' font-semibold px-2'>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            interviews?.map((value,index)=>{
                                return  <tr className='border-b-2 border-lightPurple'>
                                <td className='text-center p-2'>{index+1}.</td>        
                                <td className='text-center p-2'>{value?.jobId['title']}</td> 
                                <td className='text-center p-2'>{value?.companyId['name']}</td> 
                                <td className='text-center p-2 '>{formatDate(value?.createdAt)}</td> 
                                <td className='text-center p-2 '>11:00 AM</td> 
                                <td className='text-center p-2'>{value?.status}</td> 
                               
                                <td className='text-center p-2'><button className='bg-green-400 p-1 rounded text-white' onClick={null}> JOIN INTERVIEW </button></td> 
                            </tr>   
                            
                            })
                        }
                       
                        


                        
                                          
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default MyInterviews
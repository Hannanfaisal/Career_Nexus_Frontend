

import React from 'react'
import TitleBar from '../../components/TitleBar'

const Companies = () => {
  return (
    <div>
        <TitleBar title='All Companies'/>
        <div className='border mt-5'>
        <div className=' overflow-y-auto overflow-x-auto  w-full '>
                <table className='table-auto w-[200%] xl:w-full'>
                    <thead className='bg-lightPurple  h-10 shadow-md'>
                        <tr className='text-md text-white text-start'>
                            <th className=' font-semibold px-2' >No.</th>      
                            <th className=' font-semibold px-2'>Company Name</th>
                            <th className=' font-semibold px-2'>Email</th>
                            <th className=' font-semibold px-2'>Status</th>
                            <th className=' font-semibold px-2'>Contact</th>
                            <th className=' font-semibold px-2'>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr className='border-b-2 border-lightPurple'>
                            <td className='text-center p-2'>1.</td>
                            <td className='text-center p-2'>IIFA Tech</td> 
                            <td className='text-center p-2'>IIFATECH@gmail.com</td> 
                            <td className='text-center p-2'>03370408845</td> 
                            <td className='text-center p-2'>7 August, 2024</td> 
                            
                            <td className='text-center p-2'><button className='bg-green-400 p-1 rounded text-white'>Company Details</button></td> 
                        </tr>   
                        
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default Companies

import React from 'react'
import TitleBar from '../../components/TitleBar'
import { NavLink } from 'react-router-dom'

const Interviews = () => {


  const handleClick = (e) => {
    e.preventDefault(); // Prevent the default link behavior
    window.open('https://us04web.zoom.us/j/78028958141?pwd=03qp6cR8wH1U5Ej3aaJtG2FRoIIBf3.1', '_blank', 'noopener,noreferrer');
  };

  return (
    <div>
      <TitleBar title='Interviews'/>
      <div className='border mt-5'>
        <div className=' overflow-y-auto overflow-x-auto  w-full '>
                <table className='table-auto w-full'>
                    <thead className='bg-lightPurple  h-10 shadow-md'>
                        <tr className='text-md text-white text-start'>
                            <th className=' font-semibold px-2' >No.</th>
                            <th className=' font-semibold px-2'>Applicant Name</th>        
                            <th className=' font-semibold px-2'>Job</th>
                            <th className=' font-semibold px-2'>Date</th>
                            <th className=' font-semibold px-2'>Time</th>
                            <th className=' font-semibold px-2'>Interview Status</th>
                            <th className=' font-semibold px-2'>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr className='border-b-2 border-lightPurple'>
                            <td className='text-center p-2'>1.</td>
                            <td className='text-center p-2 '>Abdul Hannan Faisal</td> 
                            <td className='text-center p-2'>Mern Developer</td> 
                            <td className='text-center p-2'>7 Aug, 2024</td> 
                            <td className='text-center p-2'>11:00 AM</td> 
                            <td className='text-center p-2'> Pending</td> 
                            <td className='text-center p-2'><button className='bg-green-400 p-1 rounded text-white' onClick={handleClick}> START INTERVIEW </button></td> 
                        </tr>   
                        
                        


                        
                                          
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default Interviews
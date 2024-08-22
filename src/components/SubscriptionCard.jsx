import React from 'react'
import { FaCheckCircle } from "react-icons/fa";

const SubscriptionCard = ({selected}) => {
  return (
    <div className={`rounded-lg shadow w-1/3 p-4 shadow-purple  ${!selected && 'scale-90'}`}>
        <div className='flex justify-between font-semibold'>
             <h2>Monthly</h2>
             {selected &&  <FaCheckCircle color='green'/>}
        </div>
        <h1 className='text-2xl font-bold'>
            $9.99
        </h1>
        <p className='mt-5 font-semibold'>Billed Monthly</p>
    </div>
  )
}

export default SubscriptionCard
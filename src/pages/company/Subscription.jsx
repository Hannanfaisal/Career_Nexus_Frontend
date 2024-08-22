
import React from 'react'
import TitleBar from '../../components/TitleBar'
import SubscriptionCard from '../../components/SubscriptionCard'
import { useNavigate } from 'react-router-dom'

const Subscription = () => {

  // const navigate = useNavigate()
  // const navigateToPayment = () =>{
  //   navigate('/subscribe')
  // }

  const navigateToPayment = (plan) => {
   
    window.location.href = `http://localhost:5000/subscribe?plan=${plan}`;
  };

  return (
    <div>
        <TitleBar title='Subscription '/>
        <div className='mt-5 p-5 shadow rounded'>
            <div>
                <h1 className='font-semibold'>Subscription Plan</h1>
                <small className='text-slate-500'>Choose your perfect Subscription plan and pay easily</small>
                <div className='mt-5 flex justify-center'>
                  <div className='w-full' onClick={()=>navigateToPayment('pro')}>
                  <SubscriptionCard selected={false}/>
                  </div>
                    
                    <SubscriptionCard selected={true}/>
                </div>
               
            </div>
        </div>
    </div>
  )
}

export default Subscription
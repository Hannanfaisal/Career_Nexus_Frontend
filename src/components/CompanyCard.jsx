import React from 'react'
import company1 from '../assets/company1.jpg'
import { motion } from 'framer-motion'

const CompanyCard = () => {
  return (

  <motion.div initial={{y: 100, opacity: 0}} animate={{y:0, opacity: 1}} transition={{delay: 0.2, y: {type: "spring"}}}  className="border rounded-md w-full h-[235px]">
    <img src={company1} className="h-1/3 w-full object-cover" />
    <div className="p-5">
      <h1 className="text-lg font-semibold">Notion Company</h1>
      <p className="text-sm text-darkSlate">
        Notion is located in the sunny mission district of San Francisco
      </p>
      <button className="outline outline-lightPurple w-full mt-2 p-1 rounded text-lightPurple hover:bg-lightPurple hover:text-white duration-300">
        Browse Jobs
      </button>
    </div>
  </motion.div>
    
  )
}

export default CompanyCard
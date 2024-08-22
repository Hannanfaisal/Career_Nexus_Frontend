

import React from 'react'

const TitleBar = ({title, radius='rounded'}) => {
  return (
    <div className={`bg-slate-200 px-5 py-3 ${radius}`}>
       <h1 className='text-lg font-semibold'>{title}</h1> 
    </div>
  )
}

export default TitleBar
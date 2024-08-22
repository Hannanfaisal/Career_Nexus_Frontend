
import React from 'react'

const Botton = ({title, click, round='lg',color='white', marginTop='0',width, borderColor, borderWidth, disabled=false}) => {
  return (
    <button type="submit" className={`w-${width} text-${color} border-${borderWidth} border-${borderColor} mt-${marginTop} bg-gradient-to-r from-lightPurple to-purple hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300  shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-semibold  rounded-${round} text-sm px-5 py-3 text-center`} onClick={click} disabled={disabled}>{title.toUpperCase()}</button>
  )
}

export default Botton


import React from 'react'

const Pagination = ({totalPosts,postsPerPage, setCurrentPage, currentPage}) => {
    let pages = []
    for (let i = 1; i <= Math.ceil(totalPosts/postsPerPage); i++) {
        pages.push(i)
        
    }

  return (
    <div className='my-2  w-fit p-1 flex gap-1 mx-auto flex-wrap'>
        {
            pages.map((page,index)=>{
                return <button key={index} className={`rounded  w-8 py-0.5  ${page == currentPage ? 'bg-lightPurple text-white scale-110': 'bg-slate-200'} `} onClick={()=>setCurrentPage(page)}>{page}</button>
            })
        }
    </div>
  )
}

export default Pagination
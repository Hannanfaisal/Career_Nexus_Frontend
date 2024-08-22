import React, {useState} from 'react'
import JobCard from '../../components/JobCard'
import  Pagination  from '../../components/Pagination'

const data = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

const AllJobs = ({click}) => {

  const [currentPage, setCurrentPage] = useState(1)
  const [postPerPage, setPostPerPage] = useState(15)
  const lastPostIndex = currentPage * postPerPage
  const firstPostIndex = lastPostIndex - postPerPage
   const currentJobs = data.slice(firstPostIndex, lastPostIndex)


   

  return (
    <div>
      
                   <div className=' border shadow bg-slate-100 flex justify-between  rounded-md  px-5 py-5'>
                      <h2 className='font-semibold text-xl'>Latest Jobs</h2>
                      <div className="cursor-pointer text-lightPurple font-semibold" onClick={click}>
                        <small>See Less</small>
                      </div>
                   </div>
                   <div className='w-full '>
                   <div className='grid   lg:grid-cols-2 xl:grid-cols-3 mt-5 gap-5'>
                   {
                    currentJobs.map((value,index)=>{
                      return  <JobCard />
                    })
                   }
                   </div>
                   <Pagination totalPosts={data.length} postsPerPage={postPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
                   </div>  
    </div>
  )
}

export default AllJobs
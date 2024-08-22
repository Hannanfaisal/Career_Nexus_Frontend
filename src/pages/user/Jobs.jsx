
// import React from 'react'
// import TitleBar from '../../components/TitleBar'
// import company1 from '../../assets/company1.jpg'
// import FilterSearch from '../../components/FilterSearch'

// import { BiSearch } from 'react-icons/bi'

// import AllJobs from './AllJobs'
// import {motion} from 'framer-motion'

// const Jobs = () => {
//   return (
//     <div>
//         <div className='flex justify-center items-center'>
//             <div className='w-full '>
//               <TitleBar title='Find Jobs'/>    

//               <div className='mx-auto  xl:w-[1200px]'>
//               <div className=' 2xl:h-[15vh] border p-5 m-5 rounded flex flex-col items-center justify-center'>
//                 <motion.h1 initial={{x:-150, opacity: 0}} animate={{x:0, opacity: 1}} transition={{delay: 0.2, x: {type: "spring"}}} className='font-semibold text-xl '>Search Jobs</motion.h1>
//                 <motion.div initial={{x:150, opacity: 0}} animate={{x:0, opacity: 1}} transition={{delay: 0.2, x: {type: "spring"}}} className='search w-full lg:w-[75%] 2xl:w-[50%] rounded-2xl shadow-lg h-[3rem] mt-2'>
//                             <div className='flex rounded border h-full bg-slate-100  items-center justify-center my-1'>
//                                 <div className='icon  pl-1 lg:px-[2%] text-slate-600'>
//                                     <BiSearch className='w-8'/>
//                                 </div>
//                             <input type='text' className='w-full bg-transparent border-none focus:outline-none focus:ring-0' placeholder='job title or keywords'/>
//                             <div className='vertical-line w-0.5 h-9 bg-slate-400'></div>
//                             <input type='text' className='w-full bg-transparent border-none focus:outline-none focus:ring-0' placeholder='Location'/>
//                             <button className=' bg-lightPurple bg-gradient-to-r from-lightPurple to-purple h-full text-white px-[5%] rounded-e-sm text-sm basis-1/4 flex justify-center items-center hover:bg-gradient-to-br '><BiSearch size={30n}/></button>
//                             </div>
//                         </motion.div>    
//               </div>

//               <div className='  flex flex-col-reverse lg:flex-row-reverse '>
//                 <div className='basis-3/4 p-5'>

//                 <AllJobs/>
                
//                    {/* <div className='border shadow bg-slate-100 flex justify-between  rounded-md px-5 py-5 '>
//                       <h2 className='font-semibold text-xl'>Bonafides Companies</h2>
//                       <div className=' cursor-pointer text-lightPurple font-semibold'><small>See All</small></div>
//                    </div>
//                    <div className='w-full flex justify-center'>
//                    <div className='grid lg:grid-cols-2 xl:grid-cols-3 mt-5 gap-5'>
//                    {
//                     [1,2,3].map((value,index)=>{
//                       return <div className='border rounded-md w-full h-[235px]'>
//                         <img src={company1} className='h-1/3 w-full object-cover'/>
//                         <div className='p-5' >
//                           <h1 className='text-lg font-semibold'>Notion Company</h1>
//                           <p className='text-sm text-darkSlate'>Notion is located in the sunny mission district of San Francisco</p>
//                           <button className='outline outline-lightPurple w-full mt-2 p-1 rounded text-lightPurple hover:bg-lightPurple hover:text-white duration-300 '>Browse Jobs</button>
//                         </div>

//                       </div>
//                     })
//                    }
//                    </div>
//                    </div> 




//                    <div className=' border shadow bg-slate-100 flex justify-between  rounded-md mt-5 px-5 py-5'>
//                       <h2 className='font-semibold text-xl'>Latest Jobs</h2>
//                       <div className=' cursor-pointer text-lightPurple font-semibold'><small>See All</small></div>
//                    </div>
//                    <div className='w-full '>
//                    <div className='grid   lg:grid-cols-2 xl:grid-cols-3 mt-5 gap-5'>
//                    {
//                     [1,2,3,4,5].map((value,index)=>{
//                       return <JobCard/>
//                     })
//                    }
//                    </div>
//                    </div>  */}
//                 </div>
//                 <div className='basis-1/4'>
//                   <FilterSearch/>
//                 </div>
//               </div>

            
//               </div>
               
              
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Jobs

// import React, { useState } from 'react';
// import TitleBar from '../../components/TitleBar';
// import company1 from '../../assets/company1.jpg';
// import FilterSearch from '../../components/FilterSearch';
// import { BiSearch } from 'react-icons/bi';
// import AllJobs from './AllJobs';
// import JobCard from '../../components/JobCard'; // Assuming you have a JobCard component
// import { motion } from 'framer-motion';

// const Jobs = () => {
//   const [showAllJobs, setShowAllJobs] = useState(false);
//   const [showAllCompanies, setshowAllCompanies] = useState(false);

//   const handleSeeAllClick = () => {
//     setShowAllJobs(true);
//   };

//   return (
//     <div>
//       <div className="flex justify-center items-center">
//         <div className="w-full">
//           <TitleBar title="Find Jobs" />

//           <div className="mx-auto xl:w-[1200px]">
//             <div className="2xl:h-[15vh] border p-5 m-5 rounded flex flex-col items-center justify-center">
//               <motion.h1
//                 initial={{ x: -150, opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 transition={{ delay: 0.2, x: { type: 'spring' } }}
//                 className="font-semibold text-xl"
//               >
//                 Search Jobs
//               </motion.h1>
//               <motion.div
//                 initial={{ x: 150, opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 transition={{ delay: 0.2, x: { type: 'spring' } }}
//                 className="search w-full lg:w-[75%] 2xl:w-[50%] rounded-2xl shadow-lg h-[3rem] mt-2"
//               >
//                 <div className="flex rounded border h-full bg-slate-100 items-center justify-center my-1">
//                   <div className="icon pl-1 lg:px-[2%] text-slate-600">
//                     <BiSearch className="w-8" />
//                   </div>
//                   <input
//                     type="text"
//                     className="w-full bg-transparent border-none focus:outline-none focus:ring-0"
//                     placeholder="Job title or keywords"
//                   />
//                   <div className="vertical-line w-0.5 h-9 bg-slate-400"></div>
//                   <input
//                     type="text"
//                     className="w-full bg-transparent border-none focus:outline-none focus:ring-0"
//                     placeholder="Location"
//                   />
//                   <button className="bg-lightPurple bg-gradient-to-r from-lightPurple to-purple h-full text-white px-[5%] rounded-e-sm text-sm basis-1/4 flex justify-center items-center hover:bg-gradient-to-br">
//                     <BiSearch size={30} />
//                   </button>
//                 </div>
//               </motion.div>
//             </div>

//             <div className="flex flex-col-reverse lg:flex-row-reverse">
//               <div className="basis-3/4 p-5">
//                 {showAllJobs ? (
//                   <AllJobs click={()=>setShowAllJobs(false)}/>
//                 ) : (
//                   <>
//                     <div className="border shadow bg-slate-100 flex justify-between rounded-md px-5 py-5">
//                       <h2 className="font-semibold text-xl">Bonafides Companies</h2>
//                       <div className="cursor-pointer text-lightPurple font-semibold">
//                         <small>See All</small>
//                       </div>
//                     </div>
//                     <div className="w-full flex justify-center">
//                       <div className="grid lg:grid-cols-2 xl:grid-cols-3 mt-5 gap-5">
//                         {[1, 2, 3].map((value, index) => (
//                           <div key={index} className="border rounded-md w-full h-[235px]">
//                             <img src={company1} className="h-1/3 w-full object-cover" />
//                             <div className="p-5">
//                               <h1 className="text-lg font-semibold">Notion Company</h1>
//                               <p className="text-sm text-darkSlate">
//                                 Notion is located in the sunny mission district of San Francisco
//                               </p>
//                               <button className="outline outline-lightPurple w-full mt-2 p-1 rounded text-lightPurple hover:bg-lightPurple hover:text-white duration-300">
//                                 Browse Jobs
//                               </button>
//                             </div>
//                           </div>
//                         ))}
//                       </div>
//                     </div>

//                     <div className="border shadow bg-slate-100 flex justify-between rounded-md mt-5 px-5 py-5">
//                       <h2 className="font-semibold text-xl">Latest Jobs</h2>
//                       <div
//                         className="cursor-pointer text-lightPurple font-semibold"
//                         onClick={handleSeeAllClick}
//                       >
//                         <small>See All</small>
//                       </div>
//                     </div>
//                     <div className="w-full">
//                       <div className="grid lg:grid-cols-2 xl:grid-cols-3 mt-5 gap-5">
//                         {[1, 2, 3, 4, 5].map((value, index) => (
//                           <JobCard key={index} />
//                         ))}
//                       </div>
//                     </div>
//                   </>
//                 )}
//               </div>
//               <div className="basis-1/4">
//                 <FilterSearch />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Jobs;


import React, { useEffect, useState } from 'react';
import TitleBar from '../../components/TitleBar';
import company1 from '../../assets/company1.jpg';
import FilterSearch from '../../components/FilterSearch';
import { BiSearch } from 'react-icons/bi';
import AllJobs from './AllJobs';
import AllCompanies from './AllCompanies'; // Assuming you have an AllCompanies component
import JobCard from '../../components/JobCard';
import { motion } from 'framer-motion';
import { internalApi } from '../../api/internal';

const Jobs = () => {
  const [showAllJobs, setShowAllJobs] = useState(false);
  const [showAllCompanies, setShowAllCompanies] = useState(false);
  const [jobs, setJobs] = useState();
  const [companies, setCompanies] = useState();

  const handleSeeAllJobsClick = () => {
    setShowAllJobs(true);
    setShowAllCompanies(false);
  };

  const handleSeeAllCompaniesClick = () => {
    setShowAllCompanies(true);
    setShowAllJobs(false);
  };

  const getAllJobs = async () => {
    try {
        let response = await internalApi.getAllJobs();
        if (response.status === 200) {
            setJobs(response.data.jobs);
        } else {
            console.log('Error fetching interviews');
        }
    } catch (error) {
        console.error('Error fetching interviews', error);
    }
};

const getAllCompanies = async () => {
  try {
      let response = await internalApi.getAllCompanies();
      if (response.status === 200) {
          setCompanies(response.data.companies);
      } else {
          console.log('Error fetching interviews');
      }
  } catch (error) {
      console.error('Error fetching interviews', error);
  }
};

useEffect(()=>{
  getAllJobs()
  getAllCompanies()
},[])


  return (
    <div>
      <div className="flex justify-center items-center">
        <div className="w-full">
          <TitleBar title="Find Jobs" />

          <div className="mx-auto xl:w-[1200px]">
            <div className="2xl:h-[15vh] border p-5 m-5 rounded flex flex-col items-center justify-center">
              <motion.h1
                initial={{ x: -150, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2, x: { type: 'spring' } }}
                className="font-semibold text-xl"
              >
                Search Jobs
              </motion.h1>
              <motion.div
                initial={{ x: 150, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2, x: { type: 'spring' } }}
                className="search w-full lg:w-[75%] 2xl:w-[50%] rounded-2xl shadow-lg h-[3rem] mt-2"
              >
                <div className="flex rounded border h-full bg-slate-100 items-center justify-center my-1">
                  <div className="icon pl-1 lg:px-[2%] text-slate-600">
                    <BiSearch className="w-8" />
                  </div>
                  <input
                    type="text"
                    className="w-full bg-transparent border-none focus:outline-none focus:ring-0"
                    placeholder="Job title or keywords"
                  />
                  <div className="vertical-line w-0.5 h-9 bg-slate-400"></div>
                  <input
                    type="text"
                    className="w-full bg-transparent border-none focus:outline-none focus:ring-0"
                    placeholder="Location"
                  />
                  <button className="bg-lightPurple bg-gradient-to-r from-lightPurple to-purple h-full text-white px-[5%] rounded-e-sm text-sm basis-1/4 flex justify-center items-center hover:bg-gradient-to-br">
                    <BiSearch size={30} />
                  </button>
                </div>
              </motion.div>
            </div>

            <div className="flex flex-col-reverse lg:flex-row-reverse">
              <div className="basis-3/4 p-5">
                {showAllJobs ? (
                  <AllJobs click={()=>setShowAllJobs(false)} />
                ) : showAllCompanies ? (
                  <AllCompanies click={() => setShowAllCompanies(false)} />
                ) : (
                  <>
                    <div className="border shadow bg-slate-100 flex justify-between rounded-md px-5 py-5">
                      <h2 className="font-semibold text-xl">Bonafides Companies</h2>
                      <div
                        className="cursor-pointer text-lightPurple font-semibold"
                        onClick={handleSeeAllCompaniesClick}
                      >
                        <small>See All</small>
                      </div>
                    </div>
                    <div className="w-full flex justify-center">
                      <div className="grid lg:grid-cols-2 xl:grid-cols-3 mt-5 gap-5">
                        {
                          companies?.slice(0,3).map((value, index) => (
                          <div key={index} className="border rounded-md w-full h-[235px]">
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
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="border shadow bg-slate-100 flex justify-between rounded-md mt-5 px-5 py-5">
                      <h2 className="font-semibold text-xl">Latest Jobs</h2>
                      <div
                        className="cursor-pointer text-lightPurple font-semibold"
                        onClick={handleSeeAllJobsClick}
                      >
                        <small>See All</small>
                      </div>
                    </div>
                    <div className="w-full">
                      <div className="grid lg:grid-cols-2 xl:grid-cols-3 mt-5 gap-5">
                        {jobs?.slice(0,6).map((value, index) => (
                          <JobCard key={index} job={value?.title} company={value?.company?.name} job_type={value?.type} location={value?.location} address={value?.company?.address.slice(0,5)}/>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </div>
              <div className="basis-1/4">
                <FilterSearch />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;

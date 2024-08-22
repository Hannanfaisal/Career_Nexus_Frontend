import React, {useRef} from 'react';
import { useReactToPrint } from 'react-to-print';
import { MdDownloadForOffline } from 'react-icons/md';
import placeholder from '../../assets/user.png'
import { useSelector } from 'react-redux';

const CV = () => {

    const componentRef = useRef();
    
    const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    });

const user = useSelector((state)=>state.user.user)

    return (
        <div className="bg-gray-100 min-h-screen px-12 flex flex-col items-center justify-center py-12">
            
          <div className='flex justify-start w-full '>
          <button className=' p-1 rounded mb-5 bg-lightPurple text-white flex items-center gap-1' onClick={handlePrint}><MdDownloadForOffline/>Download CV</button>

          </div>
           
            <div ref={componentRef} className="bg-white  flex flex-col rounded-lg   h-[200%] w-[100%]">
                <div className="text-center bg-slate-700 flex py-3 justify-around items-center">
                    <div>
                        <h1 className="text-md lg:text-3xl font-bold text-white">{user?.name}</h1>
                        <p className="text-gray-300">Full Stack Developer</p>
                    </div>
                    <div className="rounded-full bg-slate-200 w-10 h-10 lg:h-24 lg:w-24">
                            <img src={user?.photo || placeholder } className="object-cover rounded-full w-full h-full" alt="Profile" />
                    </div>
                    
                </div>
                

                 <div className='p-5'>


                 <div className="mt-8">
                    <h2 className="text-xl font-semibold text-gray-900">Contact Information</h2>
                    <ul className="mt-4 space-y-2 text-gray-600 text-sm lg:text-md">
                        <li>Email: {user?.email}</li>
                        <li>Phone: {user?.phone}</li>
                        <li>Location: {user?.address}</li>
                        <li>LinkedIn: linkedin.com/in/abdul-hannan-faisal-079044282</li>
                        <li>GitHub: https://github.com/Hannanfaisal</li>
                    </ul>
                </div>

                <div className="mt-8">
                    <h2 className="text-xl font-semibold text-gray-900">Experience</h2>
                    <div className="mt-4 space-y-4 text-sm lg:text-md">
                        {
                            user?.experience.map((value,index)=>{
                                return   <div>
                                <h3 className="text-lg font-semibold text-gray-800"> Associate Software Engineer</h3>
                                <p className="text-gray-600">Systems Limited - Aug 2024 - Present</p>
                                <ul className="mt-2 text-gray-600 list-disc list-inside">
                                    <li>Developed and maintained web applications using MERN stack.</li>
                                    <li>Collaborated with cross-functional teams to define project requirements.</li>
                                    <li>Improved application performance by 30% through optimization techniques.</li>
                                </ul>
                            </div>
                            })
                        }
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800"> Associate Software Engineer</h3>
                            <p className="text-gray-600">Systems Limited - Aug 2024 - Present</p>
                            <ul className="mt-2 text-gray-600 list-disc list-inside">
                                <li>Developed and maintained web applications using MERN stack.</li>
                                <li>Collaborated with cross-functional teams to define project requirements.</li>
                                <li>Improved application performance by 30% through optimization techniques.</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-gray-800">Software Engineer Intern</h3>
                            <p className="text-gray-600">IIFA - July 2024 - Aug 2024</p>
                            <ul className="mt-2 text-gray-600 list-disc list-inside">
                                <li>Designed and implemented UI components with React.js and Tailwind CSS.</li>
                                <li>Worked closely with designers to translate wireframes into functional code.</li>
                                <li>Ensured responsive design and cross-browser compatibility.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mt-8">

                    <h2 className="text-xl font-semibold text-gray-900">Education</h2>
                    <div className="mt-4 space-y-4">
                        {
                            user?.education.map((value,index)=>{
                                return  <div>
                                <h3 className="text-lg font-semibold text-gray-800">{value.title}</h3>
                                <p className="text-gray-600">{value.institute} - Graduated: 2024</p>
                            </div>
                            })
                        }
                       

                        <div>
                            <h3 className="text-lg font-semibold text-gray-800">Intermediate</h3>
                            <p className="text-gray-600">Unique College - Graduated: 2019</p>
                        </div>
                    </div>
                </div>

                <div className="mt-8">
                    <h2 className="text-xl font-semibold text-gray-900">Skills</h2>
                    <div className="mt-4 flex flex-wrap gap-2">
                        {
                            user?.skills.map((value,index)=>{
                                return <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">{value}</span>
                            })
                        }
                     
                    </div>
                </div> 

                 </div>
            
            </div>
        </div>
    );
};

export default CV;

// import React, {useRef} from 'react';
// import { useReactToPrint } from 'react-to-print';
// import { MdDownloadForOffline } from 'react-icons/md';
// import my_image from '../../assets/my_image.png';



// const CV = () => {
//     const componentRef = useRef();

//     const handlePrint = useReactToPrint({
//         content: () => componentRef.current,
//         documentTitle: 'My CV',
//         pageStyle: `
//             @page {
//                 size: A2; /* Set the size to A4 */
//                 margin: 0; /* Remove default margin */
//             }
//             body {
//                 margin: 0;
//                 padding: 0;
//                 -webkit-print-color-adjust: exact;
//             }
//             .bg-slate-800 {
//                 background-color: #333 !important;
//                 color: white;
//             }
//             .container {
//                 width: 100%;
//                 height: 100%;
//                 display: flex;
//                 flex-direction: column;
//                 align-items: center;
//                 justify-content: center;
//             }
//             .full-page {
//                 width: 100%;
//                 height: 100vh; /* Full height for the viewport */
//                 display: flex;
//                 flex-direction: row;
//                 align-items: stretch;
//                 justify-content: space-between;
//             }
//             .section {
//                 flex: 1;
//                 padding: 20px;
//             }
//         `
//     });

//     return (
//         <div className="container bg-gray-100 min-h-screen px-12 flex flex-col items-center justify-center py-12">
//             <div className="flex justify-start w-full">
//                 <button 
//                     className="p-1 rounded mb-5 bg-lightPurple text-white flex items-center gap-1" 
//                     onClick={handlePrint}>
//                     <MdDownloadForOffline />Download CV
//                 </button>
//             </div>

//             <div ref={componentRef} className="full-page bg-white flex rounded-lg max-w-4xl w-full">
//                 <div className="section bg-slate-800 p-5">
//                     <div className="flex flex-col items-center">
//                         <div className="rounded-full bg-slate-200 h-28 w-28">
//                             <img src={my_image} className="object-cover rounded-full w-full h-full" alt="Profile" />
//                         </div>
//                         <div className="mt-5">
//                             <h1 className="text-white font-semibold">Contact</h1>
//                             <hr className="border-white"/>
//                             <ul className="text-white text-xs leading-5 mt-2">
//                                 <li className="flex justify-between gap-5"><small className="font-semibold">Phone:</small><small>+92 3370408845</small></li>
//                                 <li className="flex justify-between gap-5"><small className="font-semibold">Email:</small><small>ahannan2016@outlook.com</small></li>
//                             </ul>
//                         </div>
//                         <div className="mt-5">
//                             <h1 className="text-white font-semibold">Education</h1>
//                             <hr className="border-white"/>
//                             <ul className="text-white text-xs leading-5 mt-2">
//                                 <li className="flex justify-between gap-5 mb-2">
//                                     <div>
//                                         <h1 className="font-bold">BSCS</h1>
//                                         <h2 className="font-semibold">University of Lahore</h2>
//                                         <small className="text-slate-100"> 2020-2024 CGPA: 3.49 </small>
//                                     </div>
//                                 </li>
//                                 <li className="flex justify-between gap-5 mb-2">
//                                     <div>
//                                         <h1 className="font-bold">Intermediate</h1>
//                                         <h2 className="font-semibold">Unique College</h2>
//                                         <small className="text-slate-100"> 2017-2019</small>
//                                     </div>
//                                 </li>
//                             </ul>
//                         </div>
//                         <div className="mt-5">
//                             <h1 className="text-white font-semibold">Skills</h1>
//                             <hr className="border-white"/>
//                             <ul className="text-white text-xs leading-5 mt-2 list-disc list-inside">
//                                 <li>Flutter</li>
//                                 <li>Nodejs</li>
//                                 <li>NextJs</li>
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="section bg-slate-300 p-5">
//                     {/* Additional Content Here */}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default CV;





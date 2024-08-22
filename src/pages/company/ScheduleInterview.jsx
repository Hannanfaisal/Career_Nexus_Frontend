

import React, { useState, useEffect } from 'react'
import TitleBar from '../../components/TitleBar'
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import Toast from '../../components/Toast';
import { useFormik } from 'formik';
import InterviewSchema from '../../schema/InterviewSchema';

const ScheduleInterview = () => {
    
    const [time,setTime] = useState("00:00")

    const initialValues = {
      topic: '',
      agenda: '',
      duration: '',
      date: '',
    
    }


     const handleInterview = async (state, action) => {
    
    
        const data = {
            
    
                "topic": state.topic,
                "type": 2,
                "start_time": "2024-08-20T5:02:00Z",
                "duration": state.duration,
                "timezone": "Asia/Dubai",
                "agenda": state.agenda
    
        }

        try {
          const result = await axios.post('/api/meetings', data, {withCredentials: true});

          if(result.status == 200){
            toast.success('Interview Scheduled')
          }

           toast.success(result.data)
        console.log(result.data)
        
        } catch (err) {
          toast.error(err)
        console.log(err)
        
        }
      };

      const {values, errors,touched, handleBlur, handleChange, handleSubmit, setFieldValue } = useFormik({
        initialValues,
        validationSchema: InterviewSchema,
        onSubmit: (state,action) => {
           
            handleInterview(state, action)
        }
    })


    return (
        <div>
            <TitleBar title='Schedule Interview' />
            <div className='mt-5 p-5 rounded shadow-md bg-slate-50'>
                <form onSubmit={handleSubmit}>
                    <div className=''>

                        <div className='flex items-center mb-3'>

                            <div className='basis-1/5'>
                                <label className='font-semibold text-lg'>Title:</label>
                            </div>

                            <div className='basis-3/4 '>
                                <div className=' w-full lg:w-1/2'>
                                    <input type='text' className='w-full rounded focus:ring-lightPurple placeholder:text-slate-600 ' placeholder='Title' name='topic' value={values.topic} onChange={handleChange} />
                                    <small className='text-red-500'>{errors.topic}</small>
                                </div>
                            </div>

                        </div>

                        <div className='flex items-center mb-3'>

                            <div className='basis-1/5'>
                                <label className='font-semibold text-lg'>Agenda:</label>
                            </div>

                            <div className='basis-3/4 '>
                                <div className='w-full lg:w-1/2'>
                                    <input type='text' className='w-full  rounded focus:ring-lightPurple placeholder:text-slate-600 ' placeholder='Agenda'  name='agenda' value={values.agenda} onChange={handleChange} />
                                    <small  className='text-red-500'>{errors.agenda}</small>
                                </div>
                            </div>
                        </div>


                        <div className='flex items-center mb-3'>

                            <div className='basis-1/5'>
                                <label className='font-semibold text-lg'>Duration:</label>
                            </div>

                            <div className='basis-3/4 '>
                                <div className='w-full lg:w-1/2'>
                                    <input type='number' className='w-full  rounded focus:ring-lightPurple placeholder:text-slate-600 ' placeholder='Duration (minutes)'  name='duration' value={values.duration} onChange={handleChange} />
                                    <small className='text-red-500'>{errors.duration}</small>
                                </div>
                            </div>
                        </div>


                        <div className='flex items-center mb-3'>

                            <div className='basis-1/5'>
                                <label className='font-semibold text-lg'>Start Date:</label>
                            </div>

                            <div className='basis-3/4 '>
                                <div className='w-full lg:w-1/2'>
                                <input type='date' className='w-full  rounded focus:ring-lightPurple text-slate-600 ' placeholder='Duration (minutes)'  name='date' value={values.date} onChange={handleChange} />
                                <small className='text-red-500'>{errors.date}</small>
                                </div>
                            </div>
                        </div>

                        
                        <div className='flex items-center mb-3'>

                            <div className='basis-1/5'>
                                <label className='font-semibold text-lg'>Start Time:</label>
                            </div>

                            <div className='basis-3/4 '>
                                <div className='w-full lg:w-1/2'>
                                <input type='time' className='w-full  rounded focus:ring-lightPurple text-slate-600 ' placeholder='Duration (minutes)'   value={time} onChange={(e)=>setTime(e.target.value)}   />
                                </div>
                            </div>
                        </div>

                        <div className='mt-3'>
                            <button className='bg-lightPurple rounded text-white px-2 py-1.5' type='submit' >SCHEDULE</button>
                        </div>

                    </div>

                </form>

            </div>
            <Toast/>
        </div>
    )


    // const [meetings, setMeetings] = useState([]);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);
  
    // useEffect(() => {
    //   const fetchMeetings = async () => {
    //     try {
    //       const response = await axios.get('/api/meetings');
    //       setMeetings(response.data.meetings);
    //       console.log(response.data.meetings)
    //     } catch (err) {
    //       setError(err.message);
    //     } finally {
    //       setLoading(false);
    //     }
    //   };
  
    //   fetchMeetings();
    // }, []);
  
    // if (loading) return <p>Loading...</p>;
    // if (error) return <p>Error: {error}</p>;
  


    // const handleSubmit = async () => {
  
    
    //     // const meetingData = {
    //     //   topic : 'Full stack interview',
    //     //   type: 2, // Scheduled meeting
    //     //   start_time: startTime,
    //     //   duration,
    //     //   timezone,
    //     //   agenda,
    //     // };
    
    //     const meetingData = {
            
    
    //             "topic": "Interviewdgggdg",
    //             "type": 2,
    //             "start_time": "2024-08-20T5:02:00Z",
    //             "duration": 10,
    //             "timezone": "Asia/Dubai",
    //             "agenda": "Meeting"
    
    //     }

    //     try {
    //       const result = await axios.post('/api/meetings', meetingData);
    //     //   setResponse(result.data);
    //     //   toast.success(result.data)
    //     console.log(result.data)
    //     //   setError(null);
    //     } catch (err) {
    //     //   setError(err.message);
    //     console.log(err)
    //     //   setResponse(null);
    //     }
    //   };


    // return (
    //   <div>
    //     <h1>My Zoom Meetings</h1>
    //     <button className='bg-green-400 p-1' onClick={handleSubmit}>Create interview</button>
    //     <ul>
    //       {meetings?.map(meeting => (
    //         <li key={meeting.id}>
    //           {meeting.topic} - {meeting.start_time}
    //         </li>
    //       ))}
    //     </ul>
    //     <ToastContainer/>
    //   </div>
    // );
    
    






}

export default ScheduleInterview
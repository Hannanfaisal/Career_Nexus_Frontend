import React, { useState } from 'react'
import TitleBar from '../../components/TitleBar'
import { FaBriefcase } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { MdAddCircle } from "react-icons/md";
import myimage from '../../assets/company1.jpg'
import { BiEdit, BiPhone, BiSolidEditAlt } from "react-icons/bi";
import Modal from '../../components/Modal';
import { internalApi } from '../../api/internal';
import axios from 'axios';
import Toast from '../../components/Toast';
import { toast } from 'react-toastify';
import useDisable from '../../hooks/useDisable';
import useLoader from '../../hooks/useLoader';
import Spinner from '../../components/Spinner';
import { useDispatch, useSelector } from 'react-redux';
import placeholder from '../../assets/user.png'
import { updateUser } from '../../redux/slices/userSlice';

const Profile = () => {

    const [loading, showLoader, hideLoader] = useLoader()
    const [disable, disabledButton] = useDisable()

    const user = useSelector((state) => state.user.user)
    const dispatch = useDispatch()

    const [formData, setFormData] = useState({
        photo: user?.photo || placeholder, phone: user?.phone || '', address: user?.address || '', description: user?.description || ''
    })

    const handleChange = (e) => {
        const { value, name } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const uploadPhoto = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {

            setFormData({ ...formData, photo: reader.result })
        };

    }

    const handleUpdate = async (data) => {

        showLoader()
        disabledButton()
        let response = await internalApi.updateCompanyProfile(
            data
        )

        if (response.status == 200) {

            toast.success(response.data.message)

            hideLoader()
            setFormData({ ...formData, description: '' })
            dispatch(updateUser(response.data.company))


        } else if (response.code == 'ERR_BAD_REQUEST') {
            toast.error(response.response.data.message)
            hideLoader()
            console.log(response.code)
        }
    }

    return (
        <div>
            <TitleBar title='Profile' />
            <div className='mt-5'>
                <div className='border rounded p-5'>
                    <div>
                        <div className='flex justify-end'>

                            <div className='flex gap-2'>
                                <button data-modal-target="edit-description-modal" data-modal-toggle="edit-description-modal" className="block text-white bg-lightPurple hover:bg-slate-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-1 text-center" type="button">
                                    <BiEdit size={20} />
                                </button>

                                <Modal id='edit-description-modal' title='Edit description' form={<div className='flex flex-col gap-2'>
                                    <div className='flex items-center gap-2'> <BiPhone size={20} /> <input type='text' className='w-full  rounded placeholder:text-black focus:ring-lightPurple' placeholder='phone' name='phone' value={formData.phone} onChange={handleChange} /> </div>
                                    <div className='flex items-center gap-2'> < IoLocationSharp size={20} /> <input type='text' className='w-full  rounded placeholder:text-black focus:ring-lightPurple' placeholder='address' name='address' value={formData.address} onChange={handleChange} /> </div>
                                    <div className='flex gap-2 mt-3 justify-end'>

                                        <button className='   bg-slate-300 hover:bg-slate-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ' data-modal-hide="edit-description-modal">CANCEL</button>
                                        <button type="submit" className="  text-white bg-lightPurple hover:bg-purple focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center" onClick={() => handleUpdate({ 'phone': formData?.phone, 'address': formData?.address, 'id': '66c1f734e14aa43d091a34fc' })} disabled={disable}> {loading ? <div className='flex gap-2'> <Spinner /> Updating... </div> : 'UPDATE'} </button>
                                    </div>
                                </div>} />



                            </div>
                        </div>

                        <div className='flex flex-col items-center lg:flex-row gap-5 justify-between'>

                            <div className='left items-center gap-3'>

                                <div className='flex items-center gap-5'>
                                    <div className='relative'>
                                        <div className='h-28 w-28 rounded-full bg-slate-100 p-1 flex justify-center items-center'>
                                            <img src={formData?.photo} className='rounded-full h-full w-full object-cover' />
                                        </div>
                                        <div className='flex gap-2 absolute top-2/3 right-1'>


                                            {/* <!-- Modal toggle --> */}
                                            <button data-modal-target="edit-image-modal" data-modal-toggle="edit-image-modal" className="block text-white bg-lightPurple hover:bg-slate-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-1 text-center" type="button">
                                                <MdAddCircle size={20} />
                                            </button>

                                            <Modal id='edit-image-modal' title='Edit description' form={<div>

                                                <input type='file' className=' file:rounded file:p-2
                           file:border-none file:cursor-pointer outline-slate-950 border-2 border-dashed pl-6 py-2 rounded-md'  accept="image/*" onChange={uploadPhoto} />
                                                <div className='flex gap-2 mt-3 justify-end'>
                                                    <button className='bg-slate-300 hover:bg-slate-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ' data-modal-hide="edit-image-modal">CANCEL</button>
                                                    <button type="submit" className="  text-white bg-lightPurple hover:bg-purple focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center" onClick={() => handleUpdate({ 'photo': formData.photo, 'id': '66c1f734e14aa43d091a34fc' })} disabled={disable}> {loading ? <div className='flex gap-2'> <Spinner /> Updating... </div> : 'UPDATE'} </button>
                                                </div>
                                            </div>} />



                                        </div>
                                    </div>



                                </div>

                                <div>
                                    <h1 className='text-xl lg:text-2xl font-semibold mt-3 text-purple'>{user?.name}</h1>

                                </div>

                            </div>
                            <div className='right'>

                                <div className='flex items-center gap-3'>
                                    < FaBriefcase />
                                    <h2 className=''> {user?.role}</h2>
                                </div>

                                <div className='flex items-center gap-3'>
                                    < MdEmail />
                                    <h2 className=''>{user?.email}</h2>
                                </div>

                                <div className='flex items-center gap-3'>
                                    < FaBriefcase />
                                    <h2 className=''> {user?.phone}</h2>
                                </div>

                                <div className='flex items-center gap-3'>
                                    < IoLocationSharp />
                                    <h2 className=''> {user?.address}</h2>
                                </div>



                            </div>
                        </div>

                    </div>
                </div>


                <div className='border rounded p-5 mt-5'>

                    <div className='flex justify-between'>
                        <h2 className='font-semibold text-xl'>Description</h2>
                        <div className='flex gap-2'>


                            {/* <!-- Modal toggle --> */}
                            <button data-modal-target="edit-profile-modal" data-modal-toggle="edit-profile-modal" className="block text-white bg-lightPurple hover:bg-slate-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-1 text-center" type="button">
                                <MdAddCircle size={20} />
                            </button>

                            <Modal id='edit-profile-modal' title='Edit description' form={<div>

                                <textarea rows={5} type='text' className='w-full  rounded placeholder:text-black focus:ring-lightPurple' placeholder='Description' name='description' value={formData.description} onChange={handleChange} />
                                <div className='flex gap-2 mt-3 justify-end'>

                                    <button className='   bg-slate-300 hover:bg-slate-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ' data-modal-hide="edit-profile-modal">CANCEL</button>
                                    <button type="submit" className="  text-white bg-lightPurple hover:bg-purple focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center" onClick={() => handleUpdate({ 'description': formData.description, 'id': '66c1f734e14aa43d091a34fc' })} disabled={disable}> {loading ? <div className='flex gap-2'> <Spinner /> Updating... </div> : 'UPDATE'} </button>
                                </div>
                            </div>} />



                        </div>
                    </div>

                    <div className='mt-3 w-3/4 text-justify'>
                        <p>{user?.description}</p>
                    </div>

                </div>


            </div>
            <Toast />
        </div>
    )
}

export default Profile
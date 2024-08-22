import React, { useState } from "react";
import TitleBar from "../../components/TitleBar";
import myimage from "../../assets/my_image.png";
import { FaBriefcase } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { MdAddCircle } from "react-icons/md";
import { BiEdit, BiLink, BiPhone, BiSolidEditAlt } from "react-icons/bi";
import Modal from "../../components/Modal";
import { useDispatch, useSelector } from "react-redux";
import useDisable from "../../hooks/useDisable";
import useLoader from "../../hooks/useLoader";
import { internalApi } from "../../api/internal";
import placeholder from "../../assets/user.png";
import { toast } from "react-toastify";
import Spinner from "../../components/Spinner";
import { updateUser } from "../../redux/slices/userSlice";
import { formatDate } from "../../utils/date";
import LanguageForm from "../../components/ProfileForms/LanguageForm";
import ExperienceForm from "../../components/ProfileForms/ExperienceForm";
import SkillForm from "../../components/ProfileForms/SkillForm";

const MyProfile = () => {
    const [selectedExperienceIndex, setSelectedExperienceIndex] = useState(null);
    const [loading, showLoader, hideLoader] = useLoader();
    const [disable, disabledButton] = useDisable();
    const [selectedExperience, setSelectedExperience] = useState(null);
    const user = useSelector((state) => state.user.user);
    const dispatch = useDispatch();
    console.log(user);

    const [formData, setFormData] = useState({
        photo: user?.photo || placeholder,
        phone: user?.phone || "",
        address: user?.address || "",
        link: user?.link || [""],
        description: user?.description || "",
        experience: user?.experience || [
            { title: "", company: "", location: "", startDate: "", endDate: "" },
        ],
        skills: user?.skills || [""],
        languages: user?.languages || [""],
    });



    const handleChange = (e) => {
        const { value, name } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleExperienceChange = (index, e) => {
        const { name, value } = e.target;
        const updatedExperience = formData.experience.map((exp, expIndex) =>
            expIndex === index ? { ...exp, [name]: value } : exp
        );
        setFormData({
            ...formData,
            experience: updatedExperience,
        });
    };

    const handleAddExperience = () => {
        setFormData({
            ...formData,
            experience: [
                ...formData.experience,
                {
                    title: '',
                    company: '',
                    location: '',
                    startDate: '',
                    endDate: '',
                },
            ],
        });
    };
    const formatDateToInput = (date) => {
        if (!date) return '';
        const d = new Date(date);
        const year = d.getFullYear();
        const month = String(d.getMonth() + 1).padStart(2, '0'); // Months are 0-based
        const day = String(d.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };


    const uploadPhoto = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setFormData({ ...formData, photo: reader.result });
        };
    };

    const handleUpdate = async (data) => {
        showLoader();
        disabledButton();
        let response = await internalApi.updateUserProfile(data);

        if (response.status == 200) {
            toast.success(response.data.message);

            hideLoader();
            dispatch(updateUser(response.data.user));
        } else if (response.code == "ERR_BAD_REQUEST") {
            toast.error(response.response.data.message);
            hideLoader();
            console.log(response.code);
        }
    };

    console.log(formData.experience)



    return (
        <div>
            <TitleBar title="My Profile" />
            <div className="mt-5">
                <div className="border rounded p-5">
                    <div>
                        <div className="flex justify-end">
                            <div className="flex gap-2">
                                <button
                                    data-modal-target="edit-description-modal"
                                    data-modal-toggle="edit-description-modal"
                                    className="block text-white bg-lightPurple hover:bg-slate-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-1 text-center"
                                    type="button"
                                >
                                    <BiEdit size={20} />
                                </button>

                                <Modal
                                    id="edit-description-modal"
                                    title="Edit description"
                                    form={
                                        <div className="flex flex-col gap-2">
                                            <div className="flex items-center gap-2">
                                                {" "}
                                                <BiPhone size={20} />{" "}
                                                <input
                                                    type="text"
                                                    className="w-full  rounded placeholder:text-black focus:ring-lightPurple"
                                                    placeholder="phone"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                />{" "}
                                            </div>
                                            <div className="flex items-center gap-2">
                                                {" "}
                                                <IoLocationSharp size={20} />{" "}
                                                <input
                                                    type="text"
                                                    className="w-full  rounded placeholder:text-black focus:ring-lightPurple"
                                                    placeholder="address"
                                                    name="address"
                                                    value={formData.address}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="flex gap-2 mt-3 justify-end">
                                                <button
                                                    className="   bg-slate-300 hover:bg-slate-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                                                    data-modal-hide="edit-description-modal"
                                                >
                                                    CANCEL
                                                </button>
                                                <button
                                                    type="submit"
                                                    className="  text-white bg-lightPurple hover:bg-purple focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                                    onClick={() =>
                                                        handleUpdate({
                                                            phone: formData?.phone,
                                                            address: formData?.address,
                                                            id: "66c0309ffe92400386beb115",
                                                        })
                                                    }
                                                    disabled={disable}
                                                >

                                                    {loading ? (
                                                        <div className="flex gap-2">
                                                            {" "}
                                                            <Spinner /> Updating...{" "}
                                                        </div>
                                                    ) : (
                                                        "UPDATE"
                                                    )}{" "}
                                                </button>
                                            </div>
                                        </div>
                                    }
                                />
                            </div>
                        </div>
                        <div className="flex flex-col lg:flex-row gap-5 justify-between">
                            <div className="left flex items-center gap-3">
                                <div className="relative">
                                    <div className="h-28 w-28 rounded-full bg-slate-100 p-0.5 flex justify-center items-center">
                                        <img
                                            src={formData?.photo}
                                            className="rounded-full h-full w-full object-cover"
                                        />
                                    </div>

                                    <div className="flex gap-2 absolute top-2/3 right-1">
                                        {/* <!-- Modal toggle --> */}
                                        <button
                                            data-modal-target="edit-image-modal"
                                            data-modal-toggle="edit-image-modal"
                                            className="block text-white bg-lightPurple hover:bg-slate-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-1 text-center"
                                            type="button"
                                        >
                                            <MdAddCircle size={20} />
                                        </button>

                                        <Modal
                                            id="edit-image-modal"
                                            title="Edit description"
                                            form={
                                                <div>
                                                    <input
                                                        type="file"
                                                        className=" file:rounded file:p-2 file:border-none file:cursor-pointer outline-slate-950 border-2 border-dashed pl-6 py-2 rounded-md"
                                                        accept="image/*"
                                                        onChange={uploadPhoto}
                                                    />
                                                    <div className="flex gap-2 mt-3 justify-end">
                                                        <button
                                                            className="bg-slate-300 hover:bg-slate-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                                                            data-modal-hide="edit-image-modal"
                                                        >
                                                            CANCEL
                                                        </button>
                                                        <button
                                                            type="submit"
                                                            className="  text-white bg-lightPurple hover:bg-purple focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                                            onClick={() =>
                                                                handleUpdate({
                                                                    photo: formData.photo,
                                                                    id: "66c0309ffe92400386beb115",
                                                                })
                                                            }
                                                            disabled={disable}
                                                        >
                                                            {" "}
                                                            {loading ? (
                                                                <div className="flex gap-2">
                                                                    {" "}
                                                                    <Spinner /> Updating...{" "}
                                                                </div>
                                                            ) : (
                                                                "UPDATE"
                                                            )}{" "}
                                                        </button>
                                                    </div>
                                                </div>
                                            }
                                        />
                                    </div>
                                </div>

                                <div>
                                    <h1 className="text-xl lg:text-2xl font-semibold mt-3 text-purple">
                                        {user?.name}
                                    </h1>
                                </div>
                            </div>
                            {/* here */}
                            <div className="right">
                                <div className="flex items-center gap-3">
                                    <FaBriefcase />
                                    <h2> {user?.role}</h2>
                                </div>
                                <div className="flex items-center gap-3">
                                    <MdEmail />
                                    <h2 >{user?.email}</h2>
                                </div>

                                <div className="flex items-center gap-3">
                                    <FaBriefcase />
                                    <h2>{user?.phone}</h2>
                                </div>

                                <div className="flex items-center gap-3">
                                    <IoLocationSharp />
                                    <h2>{user?.address}</h2>
                                </div>

                                <div className="flex  gap-4">
                                    <BiLink />
                                    <div className="flex-col">
                                        {
                                            user?.link?.map((value, index) => {
                                                return <h2>
                                                    {value}
                                                </h2>
                                            })
                                        }
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border rounded p-5 mt-5">
                    <div className="flex justify-between">
                        <h2 className="font-semibold text-xl">Description</h2>
                        <div className="flex gap-2">
                            <button
                                data-modal-target="edit-modal"
                                data-modal-toggle="edit-modal"
                                className="block text-white bg-lightPurple hover:bg-slate-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-1 text-center"
                                type="button"
                            >
                                <BiEdit size={20} />
                            </button>

                            <Modal
                                id="edit-modal"
                                title="Edit description"
                                form={
                                    <div>
                                        <textarea
                                            rows={5}
                                            type="text"
                                            className="w-full  rounded placeholder:text-black focus:ring-lightPurple"
                                            placeholder="Description"
                                            name="description"
                                            value={formData.description}
                                            onChange={handleChange}
                                        />
                                        <div className="flex gap-2 mt-3 justify-end">
                                            <button
                                                className="   bg-slate-300 hover:bg-slate-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                                                data-modal-hide="edit-modal"
                                            >
                                                CANCEL
                                            </button>
                                            <button
                                                type="submit"
                                                className="  text-white bg-lightPurple hover:bg-purple focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                                onClick={() =>
                                                    handleUpdate({
                                                        description: formData.description,
                                                        id: "66c0309ffe92400386beb115",
                                                    })
                                                }
                                                disabled={disable}
                                            >
                                                {" "}
                                                {loading ? (
                                                    <div className="flex gap-2">
                                                        {" "}
                                                        <Spinner /> Updating...{" "}
                                                    </div>
                                                ) : (
                                                    "UPDATE"
                                                )}{" "}
                                            </button>
                                        </div>
                                    </div>
                                }
                            />
                        </div>
                    </div>

                    <div className="mt-3 w-3/4 text-justify">{user?.description}</div>
                </div>

                <div className="border rounded p-5 mt-5">
                    <div className="flex justify-between">
                        <h2 className="font-semibold text-xl">Experience</h2>
                        <div className="flex gap-2">
                            {/* <!-- Modal toggle --> */}
                            <button
                                data-modal-target="add-experience-modal"
                                data-modal-toggle="add-experience-modal"
                                className="block text-white bg-lightPurple hover:bg-slate-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-1 text-center"
                                type="button"
                            >
                                <MdAddCircle size={20} />
                            </button>

                            <Modal
                                id="add-experience-modal"
                                title="Add Experience"
                                form={
                                    <ExperienceForm formData={formData} />
                                }
                            />

                        </div>
                    </div>

                    <div className="flex-col justify-between mt-3">
                        {user?.experience?.map((exp, index) => (
                            <div key={index} className="flex justify-between mt-3 mb-4">
                                <div>
                                    <h2 className="font-semibold">{exp.title}</h2>
                                    <p>{exp.company} - {exp.location}</p>
                                    <small>{formatDate(exp.startDate)} To {formatDate(exp.endDate)}</small>
                                </div>
                                <div>
                                    <button
                                        data-modal-target="edit-experience-modal"
                                        data-modal-toggle="edit-experience-modal"
                                        className="block text-white bg-lightPurple hover:bg-slate-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-1 text-center"
                                        type="button"
                                        onClick={()=>setSelectedExperienceIndex(index)}
                                    >
                                        <BiEdit size={20} />
                                    </button>
                                    <Modal
                                        id="edit-experience-modal"
                                        title="Edit Experience"
                                        form={
                                            <div>
                                                <input type="text" className="border p-2" value={formData.experience[selectedExperienceIndex]?.title}
                                                    onChange={(e) => {
                                                        const updatedExperience = [...formData.experience];
                                                        updatedExperience[index] = { ...updatedExperience[index], title: e.target.value };
                                                        setFormData({ ...formData, experience: updatedExperience });
                                                    }} />

                                                <input type="text" className="border p-2" value={formData.experience[selectedExperienceIndex]?.company}
                                                    onChange={(e) => {
                                                        const updatedExperience = [...formData.experience];
                                                        updatedExperience[selectedExperienceIndex] = { ...updatedExperience[selectedExperienceIndex], company: e.target.value };
                                                        setFormData({ ...formData, experience: updatedExperience });
                                                    }} />

                                                <input type="date" className="border p-2" value={formatDateToInput(formData.experience[selectedExperienceIndex]?.startDate)}
                                                    onChange={(e) => {
                                                        const updatedExperience = [...formData.experience];
                                                        updatedExperience[selectedExperienceIndex] = { ...updatedExperience[selectedExperienceIndex], startDate: e.target.value };
                                                        setFormData({ ...formData, experience: updatedExperience });
                                                    }} />

                                                <input type="date" className="border p-2" value={formatDateToInput(formData.experience[selectedExperienceIndex]?.endDate)}
                                                    onChange={(e) => {
                                                        const updatedExperience = [...formData.experience];
                                                        updatedExperience[selectedExperienceIndex] = { ...updatedExperience[selectedExperienceIndex], endDate: e.target.value };
                                                        setFormData({ ...formData, experience: updatedExperience });
                                                    }} />

                                                 <button                        
                                                    type="submit"
                                                    className="  text-white bg-lightPurple hover:bg-purple focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                                    onClick={() =>
                                                        handleUpdate({
                                                            experience: formData?.experience,
                                                            id: "66c0309ffe92400386beb115",
                                                        })
                                                    }
                                                    disabled={disable}
                                                >Update</button>


                                            </div>
                                            //   <ExperienceForm/>
                                        }
                                    />

                                </div>
                            </div>
                        ))}


                        <div>
                            <button
                                data-modal-target="edit-experience-modal"
                                data-modal-toggle="edit-experience-modal"
                                className="block text-white bg-lightPurple hover:bg-slate-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-1 text-center"
                                type="button"
                            >
                                <BiEdit size={20} />
                            </button>

                            <Modal id="edit-experience-modal" form={null} />
                        </div>
                    </div>
                </div>

                <div className="border rounded p-5 mt-5">
                    <div className="flex justify-between">
                        <h2 className="font-semibold text-xl">Education</h2>
                        <div className="flex gap-2">
                            {/* <!-- Modal toggle --> */}
                            <button
                                data-modal-target="add-education-modal"
                                data-modal-toggle="add-education-modal"
                                className="block text-white bg-lightPurple hover:bg-slate-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-1 text-center"
                                type="button"
                            >
                                <MdAddCircle size={20} />
                            </button>

                            <Modal
                                id="add-education-modal"
                                title="Add Education"
                                form={
                                    <div>
                                        <textarea
                                            rows={5}
                                            type="text"
                                            className="w-full  rounded placeholder:text-black focus:ring-lightPurple"
                                            placeholder="Description"
                                            name="description"
                                            value={formData.description}
                                            onChange={handleChange}
                                        />
                                        <div className="flex gap-2 mt-3 justify-end">
                                            <button
                                                className="   bg-slate-300 hover:bg-slate-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                                                data-modal-hide="edit-modal"
                                            >
                                                CANCEL
                                            </button>
                                            <button
                                                type="submit"
                                                className="  text-white bg-lightPurple hover:bg-purple focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                                onClick={() =>
                                                    handleUpdate({
                                                        description: formData.description,
                                                        id: "66c0309ffe92400386beb115",
                                                    })
                                                }
                                                disabled={disable}
                                            >
                                                {" "}
                                                {loading ? (
                                                    <div className="flex gap-2">
                                                        {" "}
                                                        <Spinner /> Updating...{" "}
                                                    </div>
                                                ) : (
                                                    "UPDATE"
                                                )}{" "}
                                            </button>
                                        </div>{" "}
                                    </div>
                                }
                            />
                        </div>
                    </div>

                    {
                        user?.education?.map((value, index) => {
                            return <div className="flex justify-between mt-3">

                                <div>
                                    <h2 className="font-semibold">{value?.title}</h2>
                                    <small>{value?.institute}</small>
                                    <br />
                                    <small className=""> {formatDate(value?.startDate)} To{formatDate(value?.endDate)} </small>
                                </div>

                                <div>
                                    <button
                                        data-modal-target="edit-education-modal"
                                        data-modal-toggle="edit-education-modal"
                                        className="block text-white bg-lightPurple hover:bg-slate-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-1 text-center"
                                        type="button"
                                    >
                                        <BiEdit size={20} />
                                    </button>

                                    <Modal id="edit-education-modal" form={null} />
                                </div>
                            </div>
                        })
                    }

                </div>

                <div className="border rounded p-5 mt-5">
                    <div className="flex justify-between">
                        <h2 className="font-semibold text-xl">Skills</h2>
                        <div className="flex gap-2">
                            {/* <!-- Modal toggle --> */}
                            <button
                                data-modal-target="add-skill-modal"
                                data-modal-toggle="add-skill-modal"
                                className="block text-white bg-lightPurple hover:bg-slate-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-1 text-center"
                                type="button"
                            >
                                <MdAddCircle size={20} />
                            </button>

                            <Modal id="add-skill-modal" form={<SkillForm/>} />
                        </div>
                    </div>

                    <div className="flex justify-between mt-3">
                        <div>
                            <ul>
                                {user?.skills.map((value, index) => {
                                    return (
                                        <li className="px-5 bg-slate-200 rounded-lg mb-2 ">
                                            {value}
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>

                       
                    </div>
                </div>

                <div className="border rounded p-5 mt-5">
                    <div className="flex justify-between">
                        <h2 className="font-semibold text-xl">Languages</h2>
                        <div>
                            <button
                                data-modal-target="edit-language-modal"
                                data-modal-toggle="edit-language-modal"
                                className="block text-white bg-lightPurple hover:bg-slate-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-1 text-center"
                                type="button"
                            >
                                <BiEdit size={20} />
                            </button>

                            <Modal id="edit-language-modal" form={<LanguageForm />} />
                        </div>
                    </div>

                    <div className="flex justify-between mt-3">
                        <div>
                            <ul>
                                {user?.languages?.map((value, index) => {
                                    return (
                                        <li className="px-5 bg-slate-200 rounded-lg mb-2 ">
                                            {value}
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>

                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;

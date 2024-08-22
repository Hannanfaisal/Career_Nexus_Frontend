import React, { useState } from 'react';
import { internalApi } from '../../api/internal';
import { toast } from 'react-toastify';
import useLoader from '../../hooks/useLoader';
import { useDispatch } from 'react-redux';
import { updateUser } from '../../redux/slices/userSlice';

const ExperienceForm = ({formData}) => {

  const [showLoader, hideLoader] = useLoader()
  const dispatch = useDispatch()

  const [newExperience, setNewExperience] = useState({
    title: '',
    company: '',
    location: '',
    startDate: '',
    endDate: '',
});

  // // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setNewExperience({
  //     ...newExperience,
  //     [name]: value,
  //   });
  // };

  // const handleAddExperience = () => {
  //   setExperiences([...experiences, newExperience]);
  //   setNewExperience({
  //     title: '',
  //     company: '',
  //     location: '',
  //     startDate: '',
  //     endDate: '',
  //   });
  // };

  const handleAddNewExperience = async () => {
    // showLoader();
    // disabledButton();
    

    const updatedExperienceList = [...formData?.experience, newExperience];

    const sanitizedExperience = updatedExperienceList.map(exp => {
        const { _id, ...rest } = exp; // In case the existing experiences have `_id`, remove it.
        return rest;
    });

    let response = await internalApi.updateUserProfile({
        experience: sanitizedExperience,
        id: "66c0309ffe92400386beb115",
    });

    if (response.status === 200) {
        toast.success("Experience added successfully");
        // hideLoader();
        dispatch(updateUser(response.data.user));
        setNewExperience({ title: '', company: '', location: '', startDate: '', endDate: '' }); // Clear form
    } else if (response.code === "ERR_BAD_REQUEST") {
        toast.error(response.response.data.message);
        // hideLoader();
        console.log(response.code);
    }
};


  return (
   <div>
    <div>
            <input
                type="text"
                className="border p-2"
                placeholder="Job Title"
                value={newExperience.title}
                onChange={(e) =>
                    setNewExperience({ ...newExperience, title: e.target.value })
                }
            />

            <input
                type="text"
                className="border p-2"
                placeholder="Company"
                value={newExperience.company}
                onChange={(e) =>
                    setNewExperience({ ...newExperience, company: e.target.value })
                }
            />

            <input
                type="text"
                className="border p-2"
                placeholder="Location"
                value={newExperience.location}
                onChange={(e) =>
                    setNewExperience({ ...newExperience, location: e.target.value })
                }
            />

            <input
                type="date"
                className="border p-2"
                placeholder="Start Date"
                value={newExperience.startDate}
                onChange={(e) =>
                    setNewExperience({ ...newExperience, startDate: e.target.value })
                }
            />

            <input
                type="date"
                className="border p-2"
                placeholder="End Date"
                value={newExperience.endDate}
                onChange={(e) =>
                    setNewExperience({ ...newExperience, endDate: e.target.value })
                }
            />

            <button
                type="submit"
                className="text-white bg-lightPurple hover:bg-purple focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                onClick={() => handleAddNewExperience()}
            >
                Add Experience
            </button>
        </div>
   </div>
  );
};

export default ExperienceForm;

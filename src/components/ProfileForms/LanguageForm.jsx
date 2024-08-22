

import React, { useState } from 'react'
import { BiCross } from 'react-icons/bi'
import { MdCancel, MdDelete } from 'react-icons/md'
import { internalApi } from '../../api/internal'
import Toast from '../Toast'
import { toast } from 'react-toastify'
import useLoader from '../../hooks/useLoader'
import useDisable from '../../hooks/useDisable'
import { useDispatch, useSelector } from 'react-redux'
import { updateUser } from '../../redux/slices/userSlice'
import Spinner from '../Spinner'



const LanguageForm = () => {

    const [language, setLanguage] = useState("");
    const [languages, setLanguages] = useState([]);

    const [loading, showLoader, hideLoader] = useLoader();
    const [disable, disabledButton] = useDisable();

    const user = useSelector((state) => state.user.user);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setLanguage(e.target.value);
    };

    const addLanguage = () => {
        if (languages.includes(language.toLowerCase())) {
            return;
        }
        setLanguages([...languages, language]);
    };

    const handleUpdate = async () => {
        showLoader();
        disabledButton();

        const updatedLanguages = [...new Set([...user.languages, ...languages.map(lang => lang.toLowerCase())])];

        let data = {
            languages: updatedLanguages,
            id: user._id,
        };

        let response = await internalApi.updateUserProfile(data);

        if (response.status === 200) {
            toast.success(response.data.message);
            hideLoader();
            dispatch(updateUser(response.data.user));
            setLanguage('')
        } else if (response.code === "ERR_BAD_REQUEST") {
            toast.error(response.response.data.message);
            hideLoader();
            console.log(response.code);
        }
    };

    const handleDeleteLanguage = async (languageToDelete) => {
        showLoader();
        disabledButton();

        const updatedLanguages = user.languages.filter(lang => lang !== languageToDelete);

        let data = {
            languages: updatedLanguages,
            id: user._id,
        };

        let response = await internalApi.updateUserProfile(data);

        if (response.status === 200) {
            toast.success(response.data.message);
            hideLoader();
            dispatch(updateUser(response.data.user));
        } else if (response.code === "ERR_BAD_REQUEST") {
            toast.error(response.response.data.message);
            hideLoader();
            console.log(response.code);
        }
    };

    return (
        <div>
            <div className="flex flex-col gap-2">
                {user?.languages.map((value, index) => (
                    <div key={index} className='bg-slate-50 p-2 flex items-center justify-between'>
                        {value}
                        <MdDelete
                            color='red'
                            className='cursor-pointer'
                            onClick={() => handleDeleteLanguage(value)}
                        />
                    </div>
                ))}
                <div className="flex items-center gap-2">
                    <input
                        type="text"
                        className="w-full rounded placeholder:text-black focus:ring-lightPurple"
                        placeholder="Language"
                        name="languages"
                        value={language}
                        onChange={handleChange}
                    />
                    <button className='bg-lightPurple p-2 text-white rounded' onClick={addLanguage}>Add</button>
                </div>

                {languages.length !== 0 && <div className='border-2 rounded px-3 py-2 flex gap-2 flex-wrap bg-white'>
                    {languages.map((value, index) => (
                        <div key={index} className='bg-slate-200 rounded-2xl text-center min-w-14 px-2 p-1 flex items-center gap-2'>
                            {value}
                            <div className='cursor-pointer' onClick={() => setLanguages(languages.filter((val) => val !== value))}>
                                <MdCancel size={15} />
                            </div>
                        </div>
                    ))}
                </div>}

                <div className="flex gap-2 mt-3 justify-end">
                    <button 
                        className="bg-slate-300 hover:bg-slate-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                        data-modal-hide="edit-description-modal"
                    >
                        CANCEL
                    </button>
                    {   languages.length > 0 &&  <button
                        type="submit"
                        className="text-white bg-lightPurple hover:bg-purple focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                        onClick={handleUpdate}
                        disabled={disable}
                    >
                        {loading ? (
                            <div className="flex gap-2">
                                <Spinner /> Updating...
                            </div>
                        ) : (
                            "UPDATE"
                        )}
                    </button> }
                </div>
            </div>
            <Toast />
        </div>
    );
};




export default LanguageForm

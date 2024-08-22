

import * as yup from 'yup';

const blogSchema = yup.object().shape({
    title: yup.string().required('Title is required'),
    photo: yup.string().required('Photo is required'),
    category: yup.string().required('Category is required'),
    shortDescription: yup.string().required('Short Description is required'),
    description: yup.string().required('Description is required'),
});

export default blogSchema;
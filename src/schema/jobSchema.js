

import * as yup from 'yup';

const jobSchema = yup.object().shape({
    title: yup.string().required('Title is required'),
    location: yup.string()
        .oneOf(['onsite', 'remote', 'hybrid'])
        .required('Location is required'),
    type: yup.string()
        .oneOf(['fullTime', 'partTime', 'freelance', 'internship'])
        .required('Type is required'),
    level: yup.string()
        .oneOf(['fresher', 'intermediate', 'expert'], 'Invalid level')
        .required('Level is required'),
    // skills: yup.array()
    //     .of(yup.string().required('Skill is required'))
    //     .required('At least one skill is required'),
    vacancy: yup.number()
        .typeError('Vacancy must be a number').min(1,'Vacancy is required')
        .required('Vacancy is required'),
    experience: yup.number()
        .typeError('Experience must be a number')
        .optional(),
    description: yup.string().required('Description is required')
});

export default jobSchema;
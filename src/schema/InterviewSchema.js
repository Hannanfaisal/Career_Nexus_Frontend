import * as Yup from 'yup';

const InterviewSchema = Yup.object().shape({
    topic: Yup.string()
        .required('Topic is required')
        .min(3, 'Topic must be at least 3 characters long'),

    agenda: Yup.string()
        .required('Agenda is required')
        .min(5, 'Agenda must be at least 5 characters long'),

    duration: Yup.number()
        .required('Duration is required')
        .positive('Duration must be a positive number')
        .integer('Duration must be an integer'),

    date: Yup.date()
        .required('Date is required')
        .min(new Date(), 'Date cannot be in the past')
});

export default InterviewSchema;

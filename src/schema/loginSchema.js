import * as yup from 'yup';

const loginSchema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(10).required(),
    role: yup.string().oneOf(['user', 'company']).required()
});

export default loginSchema;
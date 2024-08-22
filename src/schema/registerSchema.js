import * as yup from 'yup';
import { passwordRegex } from '../utils';

const registerSchema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(10).matches(passwordRegex, 'Must contain 1 number, 1 lowercase, 1 uppercase and 1 special character').required(),
    confirmPassword: yup.string().oneOf([yup.ref('password')], 'password does not match').required('confirm password is a required field'),
    role: yup.string().oneOf(['user', 'company']).required()
});

export default registerSchema;
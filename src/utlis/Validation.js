import * as yup from 'yup';

const loginSchema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});
const forgetPasswordSchema = yup.object().shape({
  username: yup.string().email('Invalid email').required('Email is required'),
});
const registrationSchema = yup.object().shape({
  first_name: yup
    .string()
    .required('First Name is required')
    .min(3, 'At least 3 characters')
    .max(30, 'At most 30 characters'),

  last_name: yup
    .string()
    .required('Last Name is required')
    .min(3, 'At least 3 characters')
    .max(30, 'At most 30 characters'),

  email: yup.string().email('Invalid email').required('Email is Required'),

  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
  employee_number: yup.string().required('Employee Number is required'),

  station: yup.string().required('Station is required'),
});
const otpCode = yup.object().shape({
  otp: yup
    .string()
    .required('OTP is required')
    .matches(/^[0-9]{4}$/, 'OTP must be exactly 4 digits'),
});

const createPasswordSchema = yup.object({
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'at least 8 digit')
    .max(20, 'at most 20 digit'),

  confirmPassword: yup
    .string()
    .required('Password is required')
    .oneOf([yup.ref('password')], 'Passwords must match'),
});

export {
  loginSchema,
  forgetPasswordSchema,
  registrationSchema,
  otpCode,
  createPasswordSchema,
};

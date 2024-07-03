import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import axios from 'axios';

const SignUp = () => {
    const navigator = useNavigate();

    return (
        <div className='w-[100%] h-[100%] flex justify-center items-center'>
            <div className='w-[30%] min-w-[450px] bg-white border-2 shadow-md rounded-lg px-10 py-10'>
                <Formik initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    password: '',
                    confirmPassword: ''
                }}
                    validationSchema={
                        Yup.object().shape({
                            firstName: Yup.string().max(255).required('First Name is required'),
                            lastName: Yup.string().max(255).required('Last Name is required'),
                            email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
                            password: Yup.string().min(6, 'Password must be at least 6 characters').max(255).required('Password is requried'),
                            confirmPassword: Yup.string()
                                .oneOf([Yup.ref('password'), undefined], 'Passwords must match')
                                .required('Confirm password is required')
                        })
                    }
                    onSubmit={async (values, { setSubmitting }) => {
                        const formData = new FormData();
                        formData.append('first_name', values.firstName);
                        formData.append('last_name', values.lastName);
                        formData.append('email', values.email);
                        formData.append('password', values.password);
                        await axios({
                            method: 'post',
                            url: `${process.env.REACT_APP_API_URL}/auth/signup/`,
                            data: formData,
                            headers: { 'Content-Type': 'multipart/form-data' }
                        }).then((res) => {
                            if (res.status === 200) {
                                setSubmitting(false);
                                navigator('/auth/signin');
                                toast.success("User registered successfully");
                            }
                        })
                    }}>
                    {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
                        <form noValidate onSubmit={handleSubmit}>
                            <div className='flex justify-between items-center'>
                                <span className='text-[#009585] text-2xl font-bold'>Sign up</span>
                                <Link to="/auth/signin"><span className='text-[#009585]'>Already have an account?</span></Link>
                            </div>
                            <div className='mt-8 flex flex-col items-start'>
                                <span>First Name*</span>
                                <Input
                                    name='firstName'
                                    type="text"
                                    placeholder='John'
                                    value={values.firstName}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                />
                                <div className='mt-1'>
                                    {touched.firstName && errors.firstName && (
                                        <span className='text-sm text-red-700'>
                                            {errors.firstName}
                                        </span>
                                    )}
                                </div>
                            </div>
                            <div className='mt-5 flex flex-col items-start'>
                                <span>Last Name *</span>
                                <Input
                                    name='lastName'
                                    type="text"
                                    placeholder='Doe'
                                    value={values.lastName}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                />
                                <div className='mt-1'>
                                    {touched.lastName && errors.lastName && (
                                        <span className='text-sm text-red-700'>
                                            {errors.lastName}
                                        </span>
                                    )}
                                </div>
                            </div>
                            <div className='mt-5 flex flex-col items-start'>
                                <span>Email Address</span>
                                <Input
                                    name='email'
                                    type="text"
                                    placeholder='Enter your email'
                                    value={values.email}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                />
                                <div className='mt-1'>
                                    {touched.email && errors.email && (
                                        <span className='text-sm text-red-700'>
                                            {errors.email}
                                        </span>
                                    )}
                                </div>
                            </div>
                            <div className='mt-5 flex flex-col items-start'>
                                <span>Password</span>
                                <Input
                                    name='password'
                                    type="password"
                                    placeholder='Enter your password'
                                    value={values.password}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                />
                                <div className='mt-1'>
                                    {touched.password && errors.password && (
                                        <span className='text-sm text-red-700'>
                                            {errors.password}
                                        </span>
                                    )}
                                </div>
                            </div>
                            <div className='mt-5 flex flex-col items-start'>
                                <span>Confirm Password</span>
                                <Input
                                    name='confirmPassword'
                                    type="password"
                                    placeholder='Confirm your password'
                                    value={values.confirmPassword}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                />
                                <div className='mt-1'>
                                    {touched.confirmPassword && errors.confirmPassword && (
                                        <span className='text-sm text-red-700'>
                                            {errors.confirmPassword}
                                        </span>
                                    )}
                                </div>
                            </div>
                            <div className='w-full my-7'>
                                <button disabled={isSubmitting} className='w-full bg-[#009788] rounded-md inline-flex items-center justify-center py-3 px-7 text-center text-base font-medium text-white hover:bg-body-color hover:border-body-color disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5'>
                                    Create Account
                                </button>
                            </div>
                            <div className='flex justify-center border relative'>
                                <span className='text-black absolute -translate-y-1/2 bg-white px-4 text-sm'>Sign up with</span>
                            </div>
                            <div className='mt-8'>
                                <button className='w-full rounded-md inline-flex items-center border justify-center py-2 px-7 text-center text-base font-medium hover:bg-body-color hover:border-body-color disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5'>
                                    <img src="/images/google.png" alt="" className="w-[30px]" />
                                    <span className='ml-3'>Google</span>
                                </button>
                            </div>
                        </form>
                    )}
                </Formik>
            </div>
        </div>
    )
}

const Input = ({ name, type, placeholder, value, onBlur, onChange }) => {
    return (
        <>
            <input
                name={name}
                type={type}
                placeholder={placeholder}
                value={value}
                onBlur={onBlur}
                onChange={onChange}
                className='w-full mt-2 bg-transparent rounded-md border py-[10px] px-5 text-dark-6 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 disabled:border-gray-2'
            />
        </>
    )
}

export default SignUp;
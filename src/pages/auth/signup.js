import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import axios from 'axios';

const SignUp = () => {
    const navigator = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className='w-screen h-screen 2xl:flex'>
            <img src="/images/login_bg.png" className='h-full 2xl:w-[60%] hidden 2xl:block' alt="login background" />
            <div className='w-[100%] 2xl:w-[40%] grow h-full flex justify-center items-center'>
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
                            .catch((err) => {
                                toast.error(err.response.data.error);
                                setSubmitting(false);
                            })
                    }}>
                    {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
                        <form noValidate onSubmit={handleSubmit} className='w-full h-full'>
                            <div className='w-[100%] h-[100%] flex justify-center items-center overflow-auto'>
                                <div className='w-[40%] 2xl:w-[80%] min-w-[400px] bg-white rounded-lg px-10 py-10 border shadow-md 2xl:border-none 2xl:shadow-none'>
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
                                        <div className='relative mt-2 w-full'>
                                            <input placeholder='Enter your password' type={showPassword ? 'text' : 'password'} name="password" value={values.password} onBlur={handleBlur} onChange={handleChange} error={Boolean(touched.password)} className='w-full bg-transparent rounded-md border py-[10px] px-5 text-dark-6 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 disabled:border-gray-2' />
                                            <div className='cursor-pointer absolute top-1/2 right-[5%] -translate-y-1/2' onClick={() => { setShowPassword(!showPassword) }}>{!showPassword ? <i className="fa-solid fa-eye"></i> : <i className="fa-solid fa-eye-slash"></i>}</div>
                                        </div>
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
                                            type={showPassword ? 'text' : 'password'}
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
                                </div>
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
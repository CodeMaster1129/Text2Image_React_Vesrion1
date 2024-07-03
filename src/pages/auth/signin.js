import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useAuthStore } from '../../store';

const Signin = () => {
    const { logIn } = useAuthStore();
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    return (
    <div className='w-screen h-screen flex '>
        <img src="/images/login_bg.png" className='h-full w-[60%]' alt="login background" />
        <div className='w-[40%] flex-grow justify-center items-center'>
            <Formik initialValues={{ email: '', password: '' }} validationSchema={Yup.object().shape({
                email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
                password: Yup.string().max(255).required('Password is required')
            })}
            onSubmit={async (values, {setSubmitting}) => {
                const formData = new FormData();
                formData.append('email', values.email);
                formData.append('password', values.password);
                await axios({
                    method: 'post',
                    url: `${process.env.REACT_APP_API_URL}/auth/signin/`,
                    data: formData,
                    headers: { 'Content-Type': 'multipart/form-data' }
                })
                .then((res) => {
                    if (res.status === 200) {
                        setSubmitting(false);
                        logIn();
                        navigate("/dashboard");
                        toast.success("User logged in successfully");
                    }
                })
                .catch((err) => {
                    toast.error('Something went wrong');
                    console.error(err)
                    setSubmitting(false);
                });
            }}>
            {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
                <form noValidate onSubmit={handleSubmit} className='h-full'>
                <div className='w-[100%] h-[100%] flex justify-center items-center'>
                <div className='w-[25%] min-w-[400px] bg-white rounded-lg px-10 py-10'>
                <div className='flex justify-between items-center'>
                <span className='text-[#009585] text-2xl font-bold'>Sign in</span>
                <Link to="/auth/signup"><span className='text-[#009585]'>Don't have an account?</span></Link>
                </div>
                <div className='mt-8 flex flex-col items-start'>
                <span>Email Address</span>
                <input id="email-login" type="email" placeholder='Enter your email' name="email" value={values.email} onBlur={handleBlur} onChange={handleChange} error={Boolean(touched.email && errors.email)} className='w-full mt-2 bg-transparent rounded-md border py-[10px] px-5 text-dark-6 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 disabled:border-gray-2' />
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
                    </div>
                    <div className='relative mt-2'>
                    <input id="password-login" placeholder='Enter your password' type={showPassword ? 'text' : 'password'} name="password" value={values.password} onBlur={handleBlur} onChange={handleChange} error={Boolean(touched.password)} className='w-full bg-transparent rounded-md border py-[10px] px-5 text-dark-6 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 disabled:border-gray-2' />
                    <div className='cursor-pointer absolute top-1/2 right-[5%] -translate-y-1/2' onClick={() => { setShowPassword(!showPassword) }}><i className="fa-solid fa-eye"></i></div>
                    </div>
                        <div className='mt-2 flex flex-col items-start'>
                        {touched.password && errors.password && (
                        <span className='text-sm text-red-700'>
                        {errors.password}
                        </span>
                        )}
                        </div>
                        <div className='w-full my-7'>
                            <button disabled={isSubmitting} className='w-full bg-[#009788] rounded-md inline-flex items-center justify-center py-3 px-7 text-center text-base font-medium text-white hover:bg-body-color hover:border-body-color disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5' type='submit'>
                            Get Started
                            </button>
                        </div>
                        </div>
                        </div>
                        </form>
                        )
                    }
            </Formik >
        </div >
    </div >
    )
}

export default Signin;
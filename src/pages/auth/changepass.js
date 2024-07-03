import TextInput from "../../components/ui/auth/TextInput";
import Button from "../../components/ui/auth/Button";


import { useNavigate } from 'react-router-dom'
import { useEffect } from "react";

import { useLayoutStore } from "../../store";
const ChangePass = () => {
    const navigate = useNavigate();
    const { setIsHeaderVisible } = useLayoutStore();

    useEffect(() => {
        setIsHeaderVisible(false);
        return (() => {
            setIsHeaderVisible(true);
        });
    }, [setIsHeaderVisible]);
    return (
        <div className="h-full pt-10 flex flex-col justify-center">
            <div>
                <div className='text-[50px] font-bold'>Welcome to Chatting with Anna</div>

                <div className='flex gap-3 mt-10 m-auto w-1/2'>
                    <span className='flex-1 text-left w-1/4 text-lg'>Email Address</span>
                    <div className="w-3/4">
                        <TextInput />
                    </div>
                </div>

                <div className='flex gap-3 m-auto w-1/2 mt-10'>
                    <span className='flex-1 text-left w-1/4 text-lg'>New Password</span>
                    <div className="w-3/4">
                        <TextInput />
                    </div>
                </div>

                <div className='flex gap-3 m-auto w-1/2 mt-10'>
                    <span className='flex-1 text-left w-2/5 text-lg'>Confirm Password</span>
                    <div className="w-3/4">
                        <TextInput />
                    </div>
                </div>

                <div className="w-[300px] m-auto flex justify-center gap-5 mt-10">
                    <Button text={"Change"} handleClick={() => {
                        navigate('/auth/signin');
                    }} />
                </div>
            </div>
        </div>
    )
}

export default ChangePass;
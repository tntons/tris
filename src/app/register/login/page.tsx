'use client'

import TextBox from '../../../components/TextBox';
import { useRouter } from "next/navigation";
import Image from 'next/image';

export default function Login(){
    const router = useRouter();

    const handleLogin = () => {
        // router.push("/register/signup");
    }

    return(
        <div className="min-h-screen bg-warm-yellow flex items-center justify-center">
            <div className="flex py-[60px] flex-col items-center h-full gap-3">
                <Image src="/full_logo.svg" alt="full logo" width={74} height={44}></Image>
                <h1 className="font-bold text-3xl">Welcome Back</h1>
                <p className="text-center text-gray-600 px-[10px] text-xs">
                Please login and find the company lists hat suite you and location your desired location!
                </p>
                <div className='w-[85%] flex flex-col gap-3'>
                    <TextBox label="Email" placeholder="Somjaijaidee@gmail.com" type="text"></TextBox>
                    <TextBox label="Password" placeholder="" type="password"></TextBox>
                </div>
                <div className="flex flex-row justify-between w-[90%]">
                    <div className="flex items-center gap-2">
                        <label htmlFor="remember" className="inline-flex relative items-center cursor-pointer">
                            <input type="checkbox" id="remember" name="remember" className="sr-only peer" />
                            <div className="w-4 h-4 bg-gray-400 rounded peer-checked:bg-gray-700 peer-checked:after:content-['✓'] peer-checked:after:text-white after:font-bold after:text-xs after:flex after:items-center after:justify-center"></div>
                            <label htmlFor="remember" className='ml-2 text-xs text-gray-400'>Remember me</label>
                        </label>
                    </div>
                    <div>
                        <a href="/forgot-password" className="text-xs">Forgot Password?</a>
                    </div>
                </div>
                <button className="bg-primary-light-green w-[266px] h-[50px] text-white px-4 py-2 rounded font-semibold text-sm tracking-wide">LOGIN</button>
                <p className='text-xs text-gray-600'>You don't have an account yet? <a href="/register" className="text-blue-900">Sign up</a></p>
                {/* <SignUpButton onClick={handleSignUp}></SignUpButton> */}
            </div>
        </div>
    )
}
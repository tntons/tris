'use client'

import TextBox from "../../components/TextBox"
import SignUpButton from './components/SignUpButton';
import { useRouter } from "next/navigation";
import Image from 'next/image';

export default function Register(){
    const router = useRouter();

    const handleSignUp = () => {
        router.push("/register/signup");
    }

    return(
        <div className="min-h-screen bg-warm-yellow flex items-center justify-center">
            <div className="flex py-[80px] flex-col items-center h-full gap-3">
                <Image src="/full_logo.svg" alt="full logo" width={74} height={44}></Image>
                <h1 className="font-bold text-3xl">Account Creation</h1>
                <p className="text-center text-gray-600 px-[10px] text-xs">
                    Welcome to our website in order to find and apply for a job, please register the account!
                </p>
                <TextBox label="Email" placeholder="Somjaijaidee@gmail.com" type="text"></TextBox>
                <TextBox label="Full name" placeholder="Somjai Jaidee" type="text"></TextBox>
                <TextBox label="Password" placeholder="" type="password"></TextBox>
                <TextBox label="Password Confirmation" placeholder="" type="password"></TextBox>
                <SignUpButton onClick={handleSignUp}></SignUpButton>
            </div>
        </div>
    )
}
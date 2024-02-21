'use client'

import Image from "next/image"
import { useState } from "react"
import SideBar from './SideBar';


export default function NavBar(){
    const [isOpen, setIsOpen] = useState(false);

    const toggleSlide = () => {
        setIsOpen(!isOpen);
    };

    const closeSlide = () => {
        setIsOpen(false);
    };

    return(
        <>
            <div className="bg-nav-bar h-[56px] w-full absolute top-0 flex items-center pl-[10px] justify-between">
                <div className="flex items-center ml-[20px]">
                    <Image src="/logo.svg" alt="logo" width={13} height={28}></Image>
                    <div className="flex flex-row ml-[10px] text-white text-[13px] font-semibold">
                        <p className="mr-[10px] ml-[10px]">Start up</p>
                        <p className="mr-[10px]">SME</p>
                        <p className="">Community</p>
                    </div>
                </div>
                <div className="flex items-center mr-[20px]">
                    <button className="mr-[10px] bg-white w-[70px] h-[25px] rounded-[12.5px]">
                        <p className="text-[13px] font-semibold">Register</p>
                    </button>
                    <div onClick={toggleSlide}>
                        <Image src="/hamburger_icon.svg" alt="hamburger icon" width={20} height={20}></Image>
                    </div>
                </div>

            </div>

            {isOpen && (
                <>
                    <SideBar onClose={closeSlide} />
                    <div className="fixed inset-0 bg-black opacity-50 z-40" onClick={closeSlide}></div>
                </>
            )}
        </>
    )
}
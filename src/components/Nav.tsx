'use client'

import Image from "next/image"
import { useState } from "react"
import SideBar from './SideBar';
import { useRouter } from '@/navigation';
import { useTranslations } from "next-intl"; // Import useTranslations

export default function NavBar(){
    const [isOpen, setIsOpen] = useState(false);
    const t = useTranslations('NavBar'); // Use translations from 'NavBar'
    const router = useRouter();

    const toggleSlide = () => {
        setIsOpen(!isOpen);
    };

    const closeSlide = () => {
        setIsOpen(false);
    };

    return(
        <>
            <div className="bg-nav-bar h-[56px] w-full absolute top-0 flex items-center pl-[10px] justify-between mb-[56px] z-[2]">
                <div className="flex items-center ml-[20px]">
                    <Image src="/logo.svg" alt="logo" width={13} height={28} onClick={() => router.push("/")}></Image>
                    <div className="flex flex-row ml-[10px] text-white text-[13px] font-semibold">
                        <p className="mr-[10px] ml-[10px]" onClick={() => router.push("/")}>{t('home')}</p>
                        <p className="mr-[10px]" onClick={() => router.push("/jobs")}>{t('jobs')}</p>
                        <p className="" onClick={() => router.push("/visa")}>{t('visa')}</p>
                    </div>
                </div>
                <div className="flex items-center mr-[20px]">
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
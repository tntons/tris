'use client'

import { useState } from 'react';
import TextBox from "@/components/TextBox";
import Image from 'next/image';
import { Page3Props } from "../props";
import { useTranslations } from "next-intl";

export default function Page3({ 
    firstName, 
    lastName, 
    email, 
    phoneNumber, 
    fileName, 
    fileSize, 
    uploadDate, 
    moreInfo, 
}: Page3Props) {
    const t = useTranslations('Page3');
    
    return (
        <div className="flex flex-col gap-5 w-full">
            <h1 className="self-start text-[15px] font-bold">{t('application_review')}</h1>
            <div className="bg-[#A4D6FB] rounded-[10px] p-[20px] flex flex-col gap-5 h-[25rem]">
                <div>
                    <h1 className='self-start text-left text-indigo-950 text-sm font-bold'>{firstName} {lastName}</h1>
                    <p className='text-left text-indigo-950 text-sm'>{email}</p>
                    <p className='text-left text-indigo-950 text-sm'>{phoneNumber}</p>
                </div>
                <div className="flex flex-row items-center gap-4 justify-center bg-[#D0ECFF] h-[80px] rounded-[10px]">
                    <Image
                        src='/upload-file-success-icon.svg'
                        alt='Upload'
                        width={34}
                        height={48}
                    />
                    <div className='flex flex-col'>
                        <p className='text-sm'>
                            {fileName}
                        </p>
                        <div className='flex flex-row gap-2 text-[#A9A5B8]'>
                            <p className='text-sm'>
                                {`${fileSize}`}
                            </p>
                            <p className='text-sm'>
                                {`${uploadDate}`}
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <p className='text-left text-indigo-950 text-sm'>{moreInfo}</p>
                </div>
            </div>
            
        </div>
    )
}
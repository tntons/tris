'use client'

import { useState } from 'react';
import TextBox from "@/components/TextBox";
import Image from 'next/image';
import { Page2Props } from "../props";

export default function Page2({ fileName , setFileName , fileSize, setFileSize, uploadDate, setUploadDate, moreInfo, setMoreInfo }: Page2Props) {

    const formatFileSize = (sizeInBytes: number) => {
        const sizeInKb = sizeInBytes / 1024;
        if (sizeInKb < 1000) {
            return sizeInKb.toFixed(2) + ' Kb';
        } else {
            return (sizeInKb / 1024).toFixed(2) + ' Mb';
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setFileName(e.target.files[0].name);
            setFileSize(formatFileSize(e.target.files[0].size));
            setUploadDate(new Date().toLocaleString('en-US', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit', hour12: true }));
        }
    };

    const handleMoreInfoChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMoreInfo(e.target.value);
    };

    return (
        <div className="flex flex-col gap-5">
            <h1 className="self-start text-[15px] font-bold">Profile Upload</h1>
            <div className={`relative mb-6 items-center rounded-lg border-[1px] border-primary-gray p-4 h-[80px] ${fileName ? 'bg-primary-gray' : ''}`}>
                <input
                    type='file'
                    accept='image/*'
                    id='upload-file'
                    name='upload-file'
                    onChange={handleFileChange}
                    className='absolute inset-0 w-full cursor-pointer opacity-0'
                />
                {!fileName ? (
                    <div className='flex flex-row items-center gap-4 justify-center'>
                        <Image
                            src='/upload-file-icon.svg'
                            alt='Upload'
                            width={34}
                            height={48}
                        />
                        <p className='text-sm'>
                            {'CV / RESUME UPLOAD'}
                        </p>
                        
                    </div>
                ) : (
                    <div className="flex flex-row items-center gap-4 justify-center">
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
                )}
            </div>
            <h1 className="self-start text-[15px] font-bold">More Information</h1>
            <textarea 
                className="h-[274px] shadow rounded-[10px] p-5" 
                value={moreInfo} 
                onChange={handleMoreInfoChange} 
            />
        </div>
    );
}
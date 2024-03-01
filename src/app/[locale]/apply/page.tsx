'use client'

import Page1 from "./page1/page1";
import Page2 from "./page2/page2";
import Page3 from "./page3/page3";
import Image from "next/image";
import { useState } from 'react';
import { Page1Props, Page2Props } from './props';
import { useRouter } from 'next/navigation';
import Success from "./success/success";
import { useContext } from "react";
import { SelectedJobContext } from "@/contexts/SelectedJobContext";

export default function Apply() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [fileName, setFileName] = useState<string>('');
    const [fileSize, setFileSize] = useState<string>('');
    const [uploadDate, setUploadDate] = useState<string>('');
    const [moreInfo, setMoreInfo] = useState<string>('');
    const { selectedJob, setSelectedJob } = useContext(SelectedJobContext);

    const router = useRouter();

    const nextPage = () => {
        if(currentPage === 3){
            alert('Application Submitted');
            setCurrentPage(currentPage + 1);
        } else {
            setCurrentPage(currentPage + 1);
        }
    };

    if (!selectedJob) {
        return <div>No job selected</div>;
    }

    const backPage = () => {
        if(currentPage > 1){
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div>
            <div className="flex flex-col text-center justify-center py-[20px] px-[50px] gap-5 items-center">
                <div className="justify-center items-center rounded-full bg-white w-[100px] h-[100px] border-3 border-black">
                    <Image src={selectedJob.logo} alt="company logo" width={100} height={100}></Image>
                </div>
                <h1 className="text-blue-950 font-bold text-base mt-[13px]">APPLY TO {selectedJob.companyName}</h1>
                <p className="text-blue-950 text-sm font-bold">Project Manager</p>

                <div className="border-t border-black border-dashed w-full mt-[15px]"></div>

                {currentPage === 1 && 
                    <Page1 
                    firstName={firstName} 
                    setFirstName={setFirstName}
                    lastName={lastName} 
                    setLastName={setLastName}
                    email={email} 
                    setEmail={setEmail}
                    phoneNumber={phoneNumber} 
                    setPhoneNumber={setPhoneNumber}
                />}
                {currentPage === 2 && 
                    <Page2 
                        fileName={fileName} 
                        setFileName={setFileName} 
                        fileSize={fileSize} 
                        setFileSize={setFileSize} 
                        uploadDate={uploadDate} 
                        setUploadDate={setUploadDate} 
                        moreInfo={moreInfo} 
                        setMoreInfo={setMoreInfo} 
                    />
                }
                {currentPage === 3 && 
                    <Page3 
                        firstName={firstName} 
                        lastName={lastName} 
                        email={email} 
                        phoneNumber={phoneNumber} 
                        fileName={fileName} 
                        fileSize={fileSize} 
                        uploadDate={uploadDate} 
                        moreInfo={moreInfo} 
                    />
                }
                {currentPage === 4 && 
                    <Success/>
                }
                <div className="flex flex-row justify-between items-end w-full">
                    {
                        (() => {
                            if (currentPage < 4) {
                                if (currentPage === 3) {
                                    return (
                                        <div onClick={backPage}>
                                            <Image src="/apply-confirm-back.svg" alt="back button" width={100} height={35}></Image>
                                        </div>
                                    );
                                }
                                return (
                                    <div onClick={backPage}>
                                        <Image src="/back-apply-button.svg" alt="back button" width={44} height={17}></Image>
                                    </div>
                                );
                            }
                            // If currentPage is 4 or more, don't render anything
                        })()
                    }
                    {
                        (() => {
                            if (currentPage < 4) {
                                if (currentPage !== 3) {
                                    return (
                                        <div onClick={nextPage}>
                                            <Image src="/next-apply-button.svg" alt="next button" width={44} height={17}></Image>
                                        </div>
                                    );
                                } else {
                                    return (
                                        <div onClick={nextPage} className="self-start items-right">
                                            <Image src="/apply-button.svg" alt="next button" width={100} height={35}></Image>
                                        </div>
                                    );
                                }
                            }
                            // If currentPage is 4 or more, don't render anything
                        })()
                    }
                </div>
            </div>
        </div>
    );
}
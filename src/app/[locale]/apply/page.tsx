'use client'

import Page1 from "./page1/page1";
import Page2 from "./page2/page2";
import Page3 from "./page3/page3";
import Image from "next/image";
import { useState } from 'react';
import { Page1Props, Page2Props } from './props';
import { useRouter } from 'next/navigation';
import Success from "./success/success";

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

    const router = useRouter();

    const nextPage = () => {
        if(currentPage === 3){
            alert('Application Submitted');
            setCurrentPage(currentPage + 1);
        } else {
            setCurrentPage(currentPage + 1);
        }
    };

    const company = "SAVASDEE"
    const job = "Project Manager"

    return (
        <div>
            <div className="flex flex-col text-center justify-center p-[50px] gap-5">
                <h1 className="text-blue-950 font-bold text-base">APPLY TO {company} COMPANY</h1>
                <p className="text-blue-950 text-sm font-bold">{job}</p>

                <div className="h-[1px] bg-black w-full mt-[15px]"></div>

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
                <div className="flex flex-row justify-between">
                    <div>

                    </div>

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
                                        <div onClick={nextPage}>
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
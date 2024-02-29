'use client'

import SearchBar from '@/components/SearchBar';
import JobCard from './components/JobCard';
import { useState } from 'react';
import { CheckedItemsContext } from "@/contexts/CheckedItemsContext";
import { useContext } from "react";

const mockJobs = [
    {
        logo: '/sample-company-logo.png',
        companyName: 'SAVASDEE COMPANY',
        location: 'BKK',
        jobName: 'Art Director',
        details: `Looking to hire an experienced illustrator to create 
        some character and environment illustrations/
        designs for a short 2D explainer, of the quality akin
         to the samples below`,
    },
    {
        logo: '/sample-company-logo.png',
        companyName: 'Company 2',
        location: 'Location 2',
        jobName: 'Job Name 2',
        details: 'Job Details 2',
    },
    {
        logo: '/sample-company-logo.png',
        companyName: 'Company 3',
        location: 'Location 3',
        jobName: 'Job Name 3',
        details: 'Job Details 3',
    },
];

export default function Jobs(){
    const [isStarred, setIsStarred] = useState(false);
    const { checkedItems, setCheckedItems } = useContext(CheckedItemsContext);

    const handleStarClick = () => {
        setIsStarred(!isStarred);
        console.log('Star clicked');
    }

    return(
        <div className='flex flex-col items-center justify-center p-[10px] gap-5'>
            <SearchBar></SearchBar>
            <div className='w-[90%] flex justify-start'>
                <div className='flex flex-row flex-wrap items-start gap-2'>
                    {Object.entries(checkedItems).map(([expertise, isChecked]) => 
                        isChecked ? 
                        <div key={expertise} className='px-2 py-4 bg-primary-light-green rounded-[7px] text-[13px] h-[21px] text-white flex justify-center items-center'>
                            {expertise}
                        </div> : null
                    )}
                </div>
            </div>
            <div className='flex flex-col gap-5 justify-center items-center'>
                {mockJobs.map((job, index) => (
                    <JobCard key={index} job={job} onStar={handleStarClick} isStarred={isStarred} />
                ))}
            </div>
        </div>
    )
}
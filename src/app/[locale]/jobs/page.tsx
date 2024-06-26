'use client'

import SearchBar from '@/components/SearchBar';
import JobCard from './components/JobCard';
import { useEffect, useState } from 'react';
import { CheckedItemsContext } from "@/contexts/CheckedItemsContext";
import { useContext } from "react";
import { SelectedJobContext } from "@/contexts/SelectedJobContext";
import { useTranslations } from 'next-intl';
import mockJobs from './mockJobs.json';
import { InputRefContext } from '@/contexts/InputRefContext';
import { useRouter } from '@/navigation';

type Job = {
    logo: string;
    companyName: string;
    location: string;
    jobName: string;
    details: string;
};

export default function Jobs(){
    const [isStarred, setIsStarred] = useState<Record<number, boolean>>({});
    const { checkedItems, setCheckedItems } = useContext(CheckedItemsContext);
    const { selectedJob, setSelectedJob } = useContext(SelectedJobContext);
    const t = useTranslations('Jobs');
    const inputRef = useContext(InputRefContext);
    const [shouldFocus, setShouldFocus] = useState(false);
    const router = useRouter();

    let jobIndex;
    let jobCards = [];

    if (mockJobs) {
        for (let i = 0; i < mockJobs.length; i++) {
            jobIndex = i;
            jobCards.push({
                logo: t(`${jobIndex}.logo`),
                companyName: t(`${jobIndex}.companyName`),
                location: t(`${jobIndex}.location`),
                jobName: t(`${jobIndex}.jobName`),
                details: t(`${jobIndex}.details`),
            });
        }
    }

    const handleStarClick = (index: number) => {
        setIsStarred(prevState => ({ ...prevState, [index]: !prevState[index] }));
        console.log('Star clicked');
    }

    const handleJobClick = (job: Job) => {
        setSelectedJob(job);
    }

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const shouldFocus = urlParams.get('focus');
        if (shouldFocus && inputRef && inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    return(
        <div className='flex flex-col items-center justify-center p-[10px] gap-5'>
            <SearchBar shouldFocus={shouldFocus} setShouldFocus={setShouldFocus}></SearchBar>
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
                {jobCards.map((job, index) => (
                    <JobCard key={index} job={job} onStar={() => handleStarClick(index)} onClick={() => handleJobClick(job)} />
                ))}
            </div>
        </div>
    )
}
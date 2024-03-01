'use client'

import { useParams } from "next/navigation"
import Image from 'next/image';
import { useRouter } from "@/navigation";
import { useContext } from "react";
import { SelectedJobContext } from "@/contexts/SelectedJobContext";
import { useEffect } from "react";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";
import mockDataEn from '../../mockJobs.json';
import mockDataJp from '../../mockJobsJp.json';
import { locales } from '../../../../../navigation';

type Job = {
    logo: string;
    companyName: string;
    location: string;
    jobName: string;
    details?: string;
    requirements: string[];
    facilities: { topic: string; detail: string }[];
    description?: string;
  };

export default function JobDetail(){
    const params = useParams<{ companyName: string; jobName: string }>()
    const { selectedJob, setSelectedJob } = useContext(SelectedJobContext);
    const t = useTranslations('Jobs');
    const [job, setJob] = useState<Job | null>(null);

    const locale = useLocale();

    const formattedJobName = params.jobName.replace(/%20/g, " ");
    const formattedCompanyName = params.companyName.replace(/%20/g, " ");
    const router = useRouter();
    // const job = selectedJob;

    useEffect(() => {
        const mockData = locale === 'en' ? mockDataEn : mockDataJp;
        const job = mockData.find(job => job.companyName === formattedCompanyName) || null;
        setJob(job);
    }, [formattedCompanyName, formattedJobName, locale]);

    useEffect(() => {
        const job = localStorage.getItem('selectedJob');
        if (job) {
            setSelectedJob(JSON.parse(job));
        }
    }, []);

    useEffect(() => {
        if (selectedJob) {
            localStorage.setItem('selectedJob', JSON.stringify(selectedJob));
        }
    }, [selectedJob]);

    if (!job) {
        return <div>No job selected</div>;
    }

    return(
        <div className="p-[23px] overflow-y-aut">
            <div className="flex flex-col bg-primary-gray h-full min-w-screen rounded-[20px] p-[18px] gap-5">
                <div className="flex flex-row mt-[30px]">
                    <div className="w-[40%]">
                        <div className="flex justify-center items-center rounded-full bg-white w-[100px] h-[100px]">
                            <Image src={job.logo} alt="company logo" width={100} height={100}></Image>
                        </div>
                    </div>
                    <div className="w-[60%] flex flex-col gap-3">
                        <h1 className="text-[19px] font-bold">{formattedCompanyName}</h1>
                        <div className="flex flex-row">
                            <div onClick={() => {router.push("/apply")}}>
                                <Image src="/easy_apply_button.svg" alt="easy_apply" width={120} height={36}></Image>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-neutral-100 p-[13px] rounded-[14px] flex flex-col gap-3">
                    <h1 className="text-[14px] font-semibold text-indigo-950">Requirements</h1>
                    <ul className="list-disc pl-5 text-[#514A6B] text-[12px]">
                        {job.requirements.map((requirement, index) => (
                            <li key={index} className="text-[14px]">{requirement}</li>
                        ))}
                    </ul>
                </div>
                <div className="flex flex-col gap-3">
                    <h1 className="text-indigo-950 text-[18px] font-bold">Job Description</h1>
                    <p className="text-[#514A6B] text-sm">
                        {job.description}
                    </p>
                </div>
                <div className="flex flex-col gap-3">
                    <h1 className="text-indigo-950 text-[18px] font-bold">Facilities and Others</h1>
                    <ul className="list-disc pl-5">
                        {job.facilities.map((facility, index) => (
                            <li key={index}>
                                <h2 className="text-indigo-950 text-[16px] font-bold">{facility.topic}</h2>
                                <p className="text-[#514A6B] text-sm">{facility.detail}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}
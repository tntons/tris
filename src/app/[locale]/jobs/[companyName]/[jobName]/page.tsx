'use client'

import { useParams } from "next/navigation"
import Image from 'next/image';
import { useRouter } from "@/navigation";

export default function JobDetail(){
    const params = useParams<{ companyName: string; jobName: string }>()

    const formattedJobName = params.jobName.replace(/%20/g, " ");
    const formattedCompanyName = params.companyName.replace(/%20/g, " ");
    const router = useRouter();

    const requirements = [
        "Experience: [X years] of proven experience in project management, preferably in [related industry/niche].",
        "Skills: Strong organizational, communication, and leadership skills. Proficient in project management tools and methodologies.",
        "Innovation: A track record of driving innovation and efficiency in project workflows.",
        "Adaptability: Ability to thrive in a dynamic startup environment, adapting quickly to changing priorities and challenges."
    ];

    const facilities = [
        {
            topic: "Career Growth",
            detail: "Joining [Startup Company Name] means being part of a team invested in your professional development. We believe in promoting from within and providing opportunities for career advancement."
        },
        {
            topic: "Innovation Culture",
            detail: "Be at the forefront of innovation in [industry/niche]. Contribute your ideas and expertise to projects that make a real impact."
        },
        {
            topic: "Collaborative Environment",
            detail: "Work with a diverse and passionate team that values collaboration, creativity, and a shared commitment to excellence."
        }
    ];

    return(
        <div className="p-[23px]">
            <div className="flex flex-col bg-primary-gray h-full min-w-screen rounded-[20px] p-[18px] gap-5">
                <div className="flex flex-row mt-[30px]">
                    <div className="w-[35%]">

                    </div>
                    <div className="w-[65%] flex flex-col gap-3">
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
                        {requirements.map((requirement, index) => (
                            <li key={index} className="text-[14px]">{requirement}</li>
                        ))}
                    </ul>
                </div>
                <div className="flex flex-col gap-3">
                    <h1 className="text-indigo-950 text-[18px] font-bold">Job Description</h1>
                    <p className="text-[#514A6B] text-sm">
                    Welcome to [Startup Company Name], a dynamic and innovative startup poised to 
                    revolutionize the [industry/niche] landscape. Our passionate team is dedicated 
                    to creating a work environment that fosters creativity, collaboration, and excellence.
                    </p>
                </div>
                <div className="flex flex-col gap-3">
                    <h1 className="text-indigo-950 text-[18px] font-bold">Facilities and Others</h1>
                    <ul className="list-disc pl-5">
                        {facilities.map((facility, index) => (
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
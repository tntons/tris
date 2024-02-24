'use client'

import { useParams } from "next/navigation"

export default function JobDetail(){
    const params = useParams<{ companyName: string; jobName: string }>()

    const formattedJobName = params.jobName.replace(/%20/g, " ");
    const formattedCompanyName = params.companyName.replace(/%20/g, " ");

    return(
        <div className="p-[23px]">
            <div className="bg-primary-gray min-h-screen min-w-screen rounded-[20px] p-[18px]">
                <div className="flex flex-row mt-[30px]">
                    <div className="w-[35%]">

                    </div>
                    <div className="w-[65%]">
                        <h1 className="text-[19px] font-bold">{formattedCompanyName} COMPANY</h1>
                        <div className="flex flex-row">

                        </div>
                    </div>
                </div>
                <div className="bg-neutual-100 z-[10] p-[13px]">
                    <h1 className="text-[14px] font-semibold">Requirements</h1>
                </div>
            </div>
        </div>
    )
}
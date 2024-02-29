"use client"

import { useParams } from 'next/navigation';

export default function VisaDetail() {
    const { detail } = useParams<{ detail: string }>();

    const data = {
        "Bangkok": [
            {
                title: "ประเภทของวีซ่า",
                detail: "In our little country we own plentiful species of wildlife and very strong biodiversity on hand, especially, we have Tiger! The largest remaining home for Thailand Tiger is in the western forest complex(WEFCOM) in Thailand. However, this story almost disappears from people attention but they flew for miles and miles to study this story in our little country."
            },
            {
                title: "ประเภทการเตรียมตัวสำหรับการขอวีซ่าของวีซ่า",
                detail: "In our little country we own plentiful species of wildlife and very strong biodiversity on hand, especially, we have Tiger! The largest remaining home for Thailand Tiger is in the western forest complex(WEFCOM) in Thailand. However, this story almost disappears from people attention but they flew for miles and miles to study this story in our little country."
            },
        ],
        "Fukuoka": [
            // Fukuoka data here
        ]
    };

    const details = data[detail as keyof typeof data] || [];

    return (
        <div>
            <div className="bg-[#D9D9D9] h-[10rem] p-[23px] justify-center flex flex-col">
                <p className="text-nav-bar text-[19px] font-bold mb-[-15px]">How to get </p>
                <h1 className="text-nav-bar text-[70px] font-bold">Visa</h1>
            </div>
            <div className="p-[30px]">
                <div className="bg-[#F7F6ED] p-[18px]">
                    <h1 className="text-[#142864] text-[44px] font-bold">{detail}</h1>
                    {details.map((detail, index) => {
                        return (
                            <div key={index} className="flex flex-col mt-[30px] gap-[20px]">
                                <h1 className="text-[17px] font-light">{detail.title}</h1>
                                <p className="text-[15px]">{detail.detail}</p>
                            </div>
                        )})
                    }
                </div>
            </div>
        </div>
    )
}
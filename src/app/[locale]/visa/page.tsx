"use client"

import { useRouter } from '@/navigation';
import Image from 'next/image';

export default function Visa() {
    const router = useRouter();

    const navigateToDetail = (city: string) => {
        router.push(`/visa/${city}`);
    };

    return (
        <div>
            <div className="bg-[#D9D9D9] h-[10rem] p-[23px] justify-center flex flex-col">
                <p className="text-nav-bar text-[19px] font-bold mb-[-15px]">How to get </p>
                <h1 className="text-nav-bar text-[70px] font-bold">Visa</h1>
            </div>
            <div className="flex flex-col items-center p-[30px] gap-[30px]">
                <div className="p-[30px] bg-[#F7F6ED] rounded-[21px] flex flex-row gap-5 w-full shadow" onClick={() => navigateToDetail('Bangkok')}>
                    <Image src="/visa-location-logo.svg" alt="location logo" width={26} height={45} ></Image>
                    <h1 className="font-bold text-[40px] text-[#142864]">Bangkok</h1>
                </div>
                <div className="p-[30px] bg-[#F7F6ED] rounded-[21px] flex flex-row gap-5 w-full shadow" onClick={() => navigateToDetail('Fukuoka')}>
                    <Image src="/visa-location-logo.svg" alt="location logo" width={26} height={45} ></Image>
                    <h1 className="font-bold text-[40px] text-[#142864]">Fukuoka</h1>
                </div>
                {/* <div className="p-[30px] bg-[#F7F6ED] w-[90%]">
                    <h1 className="font-bold text-[24px] text-[#142864]">FAQ</h1>
                </div> */}
            </div>
        </div>
    )
}
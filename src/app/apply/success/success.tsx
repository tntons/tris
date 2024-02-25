'use client'

import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Success() {
    const router = useRouter();

    return (
        <div className='flex flex-col justify-center mt-[4rem] items-center gap-[70px]'>
            <Image src="/success-icon.svg" alt="success-show-icon" width={221} height={142}></Image>
            <div className='flex flex-col gap-[20px] items-center'>
                <h1 className='font-bold text-lg'>APPLY SUCCESSFUL</h1>
                <div className='flex flex-row gap-3'>
                    <Image src="/notify-icon.svg" alt='notify-icon' width={15} height={15}></Image>
                    <p className='font-bold text-sm'>Notify me</p>
                </div>
                <div onClick={() => router.push('/jobs')}>
                    <Image src="/apply-for-more-button.svg" alt="apply for more" width={120} height={30}></Image>
                </div>  
            </div>
        </div>
    )
}
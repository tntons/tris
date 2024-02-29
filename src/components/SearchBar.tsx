'use client'

import Image from 'next/image';
import { useState } from 'react';
import FilterDropdown from './FilterDropdown';

type SearchBarProps = {
    onClick?: () => void;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value?: string;
  };

export default function SearchBar({ onClick, onChange, value }: SearchBarProps){
    const [showDropdown1, setShowDropdown1] = useState(false);
    const [showDropdown2, setShowDropdown2] = useState(false);

    const handleDropdownClick1 = () => {
        setShowDropdown1(!showDropdown1);
    };

    const handleDropdownClick2 = () => {
        setShowDropdown2(!showDropdown2);
    };

    return(
        <div className="w-[90%] h-[37px] bg-primary-gray p-[9px] rounded-[4px] flex flex-row justify-start items-center">
            <div className='flex'>
                <Image src="/search_icon.svg" alt="search_icon" width={22} height={19}/>
                <input type="text" onChange={onChange} value={value} className="ml-2 outline-none border-none bg-transparent" />
            </div>
            <div className='flex flex-row items-center ml-auto'>
                <div className='gap-[5px] flex flex-row relative' onClick={handleDropdownClick1}>
                    <Image src="/landmark_icon.svg" alt="landmark_icon" width={8} height={14}></Image>
                    <p className='text-xs text-primary-blue'>BKK</p>
                    <Image src="/dropdown_icon.svg" alt="dropdown" width={8} height={5}></Image>

                    {showDropdown1 && (
                        <div className="bg-white p-2 rounded-md absolute w-[90px] top-full mt-5 z-10 shadow" onClick={(e) => e.stopPropagation()}>
                            <div className='flex flex-col gap-[10px]'>
                                <p className='text-xs'>Bangkok</p>
                                <p className='text-xs'>Fukuoka</p>
                            </div>
                        </div>
                    )}
                </div>

                <div className="w-[1px] bg-black h-full mx-[10px]"></div>

                <div className='gap-[5px] flex flex-row relative' onClick={handleDropdownClick2}>
                    <p className='text-[12px] text-primary-blue'>All Works Field</p>
                    <Image src="/dropdown_icon.svg" alt="dropdown" width={8} height={5}></Image>

                    {showDropdown2 && (
                        <FilterDropdown />
                    )}
                </div>
            </div>
        </div>
    )
}
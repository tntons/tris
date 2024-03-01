'use client'

import Image from 'next/image';
import { useState } from 'react';
import FilterDropdown from './FilterDropdown';
import { usePathname , useRouter } from '@/navigation'
import { useRef , useEffect } from 'react';
import { InputRefContext } from '@/contexts/InputRefContext';

type SearchBarProps = {
    onClick?: () => void;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value?: string;
    shouldFocus?: boolean;
    setShouldFocus?: (shouldFocus: boolean) => void;
  };

export default function SearchBar({ onClick, onChange, value , shouldFocus , setShouldFocus }: SearchBarProps){
    const pathname = usePathname();
    const inputRef = useRef<HTMLInputElement>(null);
    const router = useRouter();
    const [showDropdown1, setShowDropdown1] = useState(false);
    const [showDropdown2, setShowDropdown2] = useState(false);
    const [selectedProvince, setSelectedProvince] = useState('BKK');
    const [check, setCheck] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const handleProvinceClick = (province: string) => {
        setSelectedProvince(province);
        setShowDropdown1(false);
    };

    const handleDropdownClick1 = () => {
        setShowDropdown1(!showDropdown1);
    };

    const handleDropdownClick2 = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if(check===false){
            setShowDropdown2(true);
            setCheck(true);
        }
        if(check){
            setCheck(false);
        }
    };

    const handleSearchClick = () => {
        if (pathname !== '/jobs') {
            router.push('/jobs?focus=true');
            if (setShouldFocus) {
                setShouldFocus(true);
            }
        }
    };

    useEffect(() => {
        if (setShouldFocus && shouldFocus && inputRef.current) {
            inputRef.current.focus();
            setShouldFocus(false);
        }
    }, [shouldFocus]);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                console.log(event.target);
                setShowDropdown2(false);
            }
        }
    
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return(
        <InputRefContext.Provider value={inputRef}>
        <div className="w-[90%] h-[37px] bg-primary-gray p-[9px] rounded-[4px] flex flex-row justify-start items-center">
            <div className='flex' onClick={handleSearchClick}>
                <Image src="/search_icon.svg" alt="search_icon" width={22} height={19}/>
                <input ref={inputRef} type="text" onChange={onChange} value={value} className="ml-2 outline-none border-none bg-transparent" />
            </div>
            <div className='flex flex-row items-center ml-auto gap-[3px]'>
                <div className='gap-[5px] flex flex-row relative' onClick={handleDropdownClick1}>
                    <Image src="/landmark_icon.svg" alt="landmark_icon" width={8} height={14}></Image>
                    <p className='text-[10px] text-primary-blue'>{selectedProvince}</p>
                    <Image src="/dropdown_icon.svg" alt="dropdown" width={8} height={5}></Image>

                    {showDropdown1 && (
                        <div className="bg-white p-2 rounded-md absolute w-[90px] top-full mt-5 z-10 shadow" onClick={(e) => e.stopPropagation()}>
                            <div className='flex flex-col gap-[10px]'>
                                <p className='text-xs' onClick={() => handleProvinceClick('BKK')}>Bangkok</p>
                                <p className='text-xs' onClick={() => handleProvinceClick('FUK')}>Fukuoka</p>
                            </div>
                        </div>
                    )}
                </div>

                <div className="w-[1px] bg-black h-full mx-[3px]"></div>

                <div className='flex flex-row relative' onClick={handleDropdownClick2}>
                    <p className='text-[10px] text-primary-blue mr-[3px]'>Works Field</p>
                    <Image src="/dropdown_icon.svg" alt="dropdown" width={8} height={5}></Image>

                    {showDropdown2 && (
                        <div ref={dropdownRef}>
                            <FilterDropdown onClick={(e) => e.stopPropagation()}/>
                        </div>
                    )}
                </div>
            </div>
        </div>
        </InputRefContext.Provider>
    )
}
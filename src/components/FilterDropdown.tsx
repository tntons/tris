import { useState } from "react";
import { CheckedItemsContext } from "@/contexts/CheckedItemsContext";
import { useContext } from "react";
import Image from "next/image"

type FilterDropdownProps = {
    onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};


export default function FilterDropdown({ onClick }: FilterDropdownProps){
    const expertise = {
        'A': ['Advertising', 'Animation', 'App Design', 'Architecture'],
        'B': ['Branding', 'Broadcasting'],
        'C': ['Coding', 'Copywriting'],
        // Add more letters and expertise as needed
    };

    const { checkedItems, setCheckedItems } = useContext(CheckedItemsContext);

    const handleCheckChange = (item: string) => {
        setCheckedItems({ ...checkedItems, [item]: !checkedItems[item] });
    };

    return(
        <div className="bg-white py-2 pl-2 rounded-md absolute top-full right-0 mt-5 z-10 w-[15.6rem] shadow" onClick={onClick}>
            <div className="flex flex-row">
                <div className="w-[30%]">
                    <div className="flex flex-row">

                    </div>
                </div>

                <div className="w-[2px] bg-black h-full"></div>

                <div className="w-[70%] text-[10px]">
                    <h1 className="text-[12px]">Expertise</h1>
                    <p className="text-zinc-500">ALPHABETICAL</p>
                    <div className="flex flex-col">
                        {Object.entries(expertise).map(([letter, expertiseList]) => (
                            <div key={letter}>
                                <div className="h-[1rem] bg-[#DFE0E3]">
                                    <h2 className="text-gray-500">{letter}</h2>
                                </div>
                                <div className="flex flex-col gap-1">
                                    {expertiseList.map(expertise => (
                                        <div key={expertise} className="flex items-center flex-row gap-1 ml-[0.5rem]">
                                            <Image 
                                                src={checkedItems[expertise] ? "/filter-box-check.svg" : "/filter-box-blank.svg"} 
                                                alt="checkbox" 
                                                width={10} 
                                                height={10} 
                                                onClick={() => handleCheckChange(expertise)}
                                            />
                                            <p>{expertise}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
import Image from 'next/image';

export default function SearchBar(){
    return(
        <div className="w-[90%] h-[37px] bg-search-bar p-[9px] rounded-[4px] flex flex-row justify-start items-center">
            <div className='flex'>
                <Image src="/search_icon.svg" alt="search_icon" width={22} height={19}/>
            </div>
            <div className='flex flex-row items-center ml-auto'>
                <div className='gap-[5px] flex flex-row'>
                    <Image src="/landmark_icon.svg" alt="landmark_icon" width={8} height={14}></Image>
                    <p className='text-[12px] text-primary-blue'>BKK</p>
                    <Image src="/dropdown_icon.svg" alt="dropdown" width={8} height={5}></Image>
                </div>

                <div className="w-[1px] bg-black h-full mx-[10px]"></div>

                <div className='gap-[5px] flex flex-row'>
                    <p className='text-[12px] text-primary-blue'>All Works Field</p>
                    <Image src="/dropdown_icon.svg" alt="dropdown" width={8} height={5}></Image>
                </div>
            </div>
        </div>
    )
}
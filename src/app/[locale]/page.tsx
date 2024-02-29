'use client'

import Image from "next/image";
import { DM_Sans } from "next/font/google"
import SearchBar from "@/components/SearchBar";
import { useRouter } from "next/navigation";

const dm_sans = DM_Sans({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();

  const handleSearchClick = () => {
    router.push('/jobs');
  };

  return (
    <div>
      <div className="relative h-[260px]">
        <Image src="/landing_page_bg.png" alt="Landing page background" layout="fill" objectFit="cover" />
      </div>
      <div className="flex flex-col justify-center items-center p-[15px]">
        <SearchBar onClick={handleSearchClick} />
        <div className="mt-[50px] text-left self-start px-[40px]">
          <h1 className="font-bold">WHO ARE WE?</h1>
          <p className="text-[13.5px]">
            In our little country we own plentiful species of wildlife and very strong 
            biodiversity on hand, especially, we have Tiger! The largest remaining home 
            for Thailand Tiger is in the western forest complex(WEFCOM) in Thailand. 
            However, this story almost disappears from people attention but they flew 
            for miles and miles to study this story in our little country. 
            A very essential story, that originally researched by Thai team and continuously 
            studied for over 30 years, up until we have a set of knowledge that is widely accepted.
          </p>
        </div>
      </div>

      <div className="h-[1px] bg-gray-300 w-full mt-[15px]"></div>

      <div className="flex flex-row p-[40px]">
        <div className="text-left w-[60%] px-[10px]">
          <h1 className="font-bold">Story from Bangkok</h1>
          <p className="text-[13.5px]">
            In our little country we own plentiful species of wildlife and very strong 
            biodiversity on hand, especially, we have Tiger! The largest remaining home 
            for Thailand Tiger is in the western forest complex(WEFCOM) in Thailand. However, 
            this story almost disappears from people attention but they flew for miles and 
            miles to study this story in our little country.
          </p>
        </div>
        <div className="relative w-[40%]">
          <Image src="/bangkok_landing.png" alt="bangkok_landing" layout="fill" objectFit="cover"></Image>
        </div>
      </div>

      <div className="h-[1px] bg-gray-300 w-full mt-[15px]"></div>

      <div className="flex flex-row p-[40px]">
        <div className="relative w-[50%]">
          <Image src="/fukuoka_landing.png" alt="fukuoka_landing" layout="fill" objectFit="cover"></Image>
        </div>
        <div className="text-left w-[50%] pl-[20px]">
          <h1 className="font-bold">Story from Fukuoka</h1>
          <p className="text-[13.5px]">
          In our little country we own plentiful species of wildlife and very strong biodiversity 
          on hand, especially, we have Tiger! The largest remaining home for Thailand Tiger is in 
          the western forest complex(WEFCOM) in Thailand. However, this story almost disappears from 
          people attention but they flew for miles and miles to study this story in our little country.
          </p>
        </div>
      </div>

    </div>
  );
}

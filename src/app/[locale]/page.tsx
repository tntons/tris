'use client'

import Image from "next/image";
import { DM_Sans } from "next/font/google"
import SearchBar from "@/components/SearchBar";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl"; // Import useTranslations

const dm_sans = DM_Sans({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  const t = useTranslations('Index'); // Use translations from 'Index'

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
          <h1 className="font-bold">{t('who_are_we')}</h1>
          <p className="text-[13.5px]">
            {t('who_are_we_description')}
          </p>
        </div>
      </div>

      <div className="h-[1px] bg-gray-300 w-full mt-[15px]"></div>

      <div className="flex flex-row p-[40px]">
        <div className="text-left w-[60%] px-[10px]">
          <h1 className="font-bold">{t('story_from_bangkok')}</h1>
          <p className="text-[13.5px]">
            {t('story_from_bangkok_description')}
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
          <h1 className="font-bold">{t('story_from_fukuoka')}</h1>
          <p className="text-[13.5px]">
            {t('story_from_fukuoka_description')}
          </p>
        </div>
      </div>

    </div>
  );
}
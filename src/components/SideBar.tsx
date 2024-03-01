import Image from 'next/image';
import { useRouter } from '@/navigation';
import { useLocale } from 'next-intl';
import { usePathname } from '@/navigation';
import { useTranslations } from 'next-intl';

export default function SideBar({ onClose } : { onClose: () => void; }){
    const router = useRouter();
    const locale = useLocale();
    const pathname = usePathname();
    const t = useTranslations('SideBar');

    const changeLocale = ({ key } : { key: string}) => {
        router.replace(pathname, { locale: key });
    };

    return(
        <div className="fixed right-0 top-0 w-[60%] h-full bg-white z-50">
            <div className="mt-[50px] px-[20px] flex flex-col gap-[35px]">
                <p onClick={() => router.push('/')}>{t('home')}</p>
                <p>{t('language')}</p>
                <div className="flex gap-[10px]">
                    <Image 
                        src="/thailand-flag.svg" 
                        alt="thailand" 
                        width={30} 
                        height={30} 
                        onClick={() => changeLocale({key: 'th'})} 
                        className={locale === 'th' ? 'border-orange-500 border-2 rounded' : ''}
                    />
                    <Image 
                        src="/japan-flag.svg" 
                        alt="japan" 
                        width={30} 
                        height={30} 
                        onClick={() => changeLocale({key: 'jp'})} 
                        className={locale === 'jp' ? 'border-orange-500 border-2 rounded' : ''}
                    />
                    <Image 
                        src="/english-flag.svg" 
                        alt="english" 
                        width={30} 
                        height={30} 
                        onClick={() => changeLocale({key: 'en'})} 
                        className={locale === 'en' ? 'border-orange-500 border-2 rounded' : ''}
                    />
                </div>
                {/* <p>Search</p>
                <p>Fukuoka</p>
                <p>Bangkok</p>
                <p>About</p> */}
            </div>
        </div>
    )
}
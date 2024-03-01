import TextBox from "@/components/TextBox"
import Image from 'next/image';
import { Page1Props } from "../props";
import { useTranslations } from 'next-intl'; // Import useTranslations

export default function Page1({ firstName, setFirstName, lastName, setLastName, email, setEmail, phoneNumber, setPhoneNumber }: Page1Props){
    const company = "SAVASDEE"
    const job = "Project Manager"
    const t = useTranslations('Page1'); // Use translations from 'Page1'

    return(
        <div className="w-full">
            <h1 className="self-start text-blue-950 text-sm font-bold text-left my-[10px]">{t('contact_information')}</h1>
            <div className="flex flex-col gap-5">
            <TextBox 
                    label="" 
                    placeholder={t('first_name')} 
                    type="text" 
                    className="shadow text-opacity-50 text-xs font-bold"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
                <TextBox 
                    label="" 
                    placeholder={t('last_name')} 
                    type="text" 
                    className="shadow text-opacity-50 text-xs font-bold"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
                <TextBox 
                    label="" 
                    placeholder={t('email')} 
                    type="text" 
                    className="shadow text-opacity-50 text-xs font-bold"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextBox 
                    label="" 
                    placeholder={t('phone_number')} 
                    type="text" 
                    className="shadow text-opacity-50 text-xs font-bold"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                />
            </div>
            
        </div>
    )
}
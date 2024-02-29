import TextBox from "@/components/TextBox"
import Image from 'next/image';
import { Page1Props } from "../props";

export default function Page1({ firstName, setFirstName, lastName, setLastName, email, setEmail, phoneNumber, setPhoneNumber }: Page1Props){
    const company = "SAVASDEE"
    const job = "Project Manager"

    return(
        <div>
            <h1 className="self-start text-blue-950 text-sm font-bold">Contact Information</h1>
            <div className="flex flex-col gap-5">
            <TextBox 
                    label="" 
                    placeholder="First Name" 
                    type="text" 
                    className="shadow text-opacity-50 text-xs font-bold"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
                <TextBox 
                    label="" 
                    placeholder="Last Name" 
                    type="text" 
                    className="shadow text-opacity-50 text-xs font-bold"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
                <TextBox 
                    label="" 
                    placeholder="Email" 
                    type="text" 
                    className="shadow text-opacity-50 text-xs font-bold"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextBox 
                    label="" 
                    placeholder="Phone Number" 
                    type="text" 
                    className="shadow text-opacity-50 text-xs font-bold"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                />
            </div>
            
        </div>
    )
}
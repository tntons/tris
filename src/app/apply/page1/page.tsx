import TextBox from "@/components/TextBox"

export default function Page1(){
    const company = "SAVASDEE"
    const job = "Project Manager"

    return(
        <div className="flex flex-col text-center justify-center p-[50px] gap-5">
            <h1 className="text-blue-950 font-bold text-base">APPLY TO {company} COMPANY</h1>
            <p className="text-blue-950 text-sm font-bold">{job}</p>

            <div className="h-[1px] bg-black w-full mt-[15px]"></div>

            <h1 className="self-start text-blue-950 text-sm font-bold">Contact Information</h1>

            <TextBox label="First Name" placeholder="First Name" type="text" className="shadow text-opacity-50 text-xs font-bold"></TextBox>
            <TextBox label="Last Name" placeholder="Last Name" type="text" className="shadow text-opacity-50 text-xs font-bold"></TextBox>
            <TextBox label="Email" placeholder="Email" type="text" className="shadow text-opacity-50 text-xs font-bold"></TextBox>
            <TextBox label="Phone Number" placeholder="Phone Number" type="text" className="shadow text-opacity-50 text-xs font-bold"></TextBox>
        </div>
    )
}
export default function TextBox({ 
    label, 
    type, 
    placeholder, 
    value, 
    onChange,
    className,
} : { 
    label: string; 
    type: string; 
    placeholder: string; 
    value?: string; 
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; 
    className?: string;
}){
    return(
        <div className={`flex flex-col gap-3 w-[90%]`}>
            <label htmlFor={label} className="font-bold text-xs self-start">{label}</label>
            <input type={type} placeholder={placeholder} value={value} onChange={onChange} className={`${className} text-opacity-60 text-xs h-[50px] rounded-md px-2 py-1`}/>
        </div>
    )
}
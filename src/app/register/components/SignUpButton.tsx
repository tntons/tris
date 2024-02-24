export default function SignUpButton({ onClick } : { onClick: () => void; }){
    return(
        <div className="flex flex-col gap-3 w-[40%]">
            <button onClick={onClick} className="text-white bg-primary-light-green h-[45px] rounded-[6px] px-2 py-1 fomt-bold shadow">Sign Up</button>
        </div>
    )
}
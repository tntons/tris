

export default function SideBar({ onClose } : { onClose: () => void; }){
    return(
        <div className="fixed right-0 top-0 w-[60%] h-full bg-white z-50">
            <div className="mt-[50px] px-[20px] flex flex-col gap-[35px]">
                <p>Profile</p>
                <p>Language</p>
                <p>Search</p>
                <p>Fukuoka</p>
                <p>Bangkok</p>
                <p>About</p>
            </div>
        </div>
    )
}
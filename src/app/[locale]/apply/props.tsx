export interface Page1Props {
    firstName: string;
    setFirstName: React.Dispatch<React.SetStateAction<string>>;
    lastName: string;
    setLastName: React.Dispatch<React.SetStateAction<string>>;
    email: string;
    setEmail: React.Dispatch<React.SetStateAction<string>>;
    phoneNumber: string;
    setPhoneNumber: React.Dispatch<React.SetStateAction<string>>;
}

export interface Page2Props {
    fileName: string;
    setFileName: React.Dispatch<React.SetStateAction<string>>;
    fileSize: string;
    setFileSize: React.Dispatch<React.SetStateAction<string>>;
    uploadDate: string;
    setUploadDate: React.Dispatch<React.SetStateAction<string>>;
    moreInfo: string;
    setMoreInfo: React.Dispatch<React.SetStateAction<string>>;
}

export interface Page3Props{
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    fileName: string;
    fileSize: string;
    uploadDate: string;
    moreInfo: string;
}
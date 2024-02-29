import Link from "next/link";
import Image from 'next/image';
import { useRouter } from '@/navigation';
import { useState } from 'react';

type Job = {
  logo: string;
  companyName: string;
  location: string;
  jobName: string;
  details: string;
};

interface JobCardProps {
  job: Job;
  onStar: () => void;
  onClick: () => void;
}
export default function JobCard({ job, onStar , onClick }: JobCardProps){
  const router = useRouter();
  const [isStarred, setIsStarred] = useState(false);

  const navigateToJobDetails = () => {
      router.push(`/jobs/${job.companyName}/${job.jobName}`);
  };

  const handleStarClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsStarred(!isStarred);
    onStar();
  };

  return(
      <div onClick={() => { navigateToJobDetails(); onClick(); }} className="p-4 border rounded-md w-[340px] bg-primary-gray relative flex flex-col gap-[3.5px] cursor-pointer">
          <div className="flex flex-row gap-5">
              <div className="flex justify-center items-center rounded-full bg-white w-[40px] h-[40px]">
                  <Image src={job.logo} alt="company logo" width={33} height={33}></Image>
              </div>
              <div className="flex flex-col">
                  <h2 className="text-[15px]">{job.companyName}</h2>
                  <div className="flex flex-row gap-2">
                      <Image src="/landmark_icon.svg" alt="landmark_icon" width={8} height={14}></Image>
                      <p className="text-sm text-[#A8A8A8]">{job.location}</p>
                  </div>
              </div>
          </div>
          <h3 className="text-[15px] font-semibold">{job.jobName}</h3>
          <p className="text-sm font-light">{job.details}</p>
          <button onClick={handleStarClick} className="mt-2 absolute top-1 right-3">
            {isStarred 
                ? <Image src="/star-green-icon.svg" alt="starred" width={16} height={16} /> 
                : <Image src="/star-blank-icon.svg" alt="starred" width={16} height={16} /> 
            }
          </button>
      </div>
  )
}
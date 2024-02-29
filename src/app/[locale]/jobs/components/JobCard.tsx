import Link from "next/link";
import Image from 'next/image';
import { useRouter } from '@/navigation';

type Job = {
  logo: string;
  companyName: string;
  location: string;
  jobName: string;
  details: string;
};

type JobCardProps = {
  job: Job;
  onStar: () => void;
  isStarred: boolean;
};
  
  export default function JobCard({ job, onStar, isStarred }: JobCardProps){
    const router = useRouter();

    const navigateToJobDetails = () => {
        router.push(`/jobs/${job.companyName}/${job.jobName}`);
    };

  return(
      <div onClick={navigateToJobDetails} className="p-4 border rounded-md w-[340px] bg-primary-gray relative flex flex-col gap-[3.5px] cursor-pointer">
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
          <button onClick={(e) => {e.stopPropagation(); onStar();}} className="mt-2 absolute top-1 right-3">
              {isStarred ? '★' : '☆'}
          </button>
      </div>
  )
}
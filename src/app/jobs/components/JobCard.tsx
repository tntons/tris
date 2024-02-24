import Link from "next/link";

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
      return(
        <Link href={`/jobs/${job.companyName}/${job.jobName}`}>
          <div className="p-4 border rounded-md w-80 h-40 bg-primary-gray relative">
              {/* <img src={job.logo} alt={`${job.companyName} logo`} className="w-16 h-16" /> */}
              <h2 className="text-xl">{job.companyName}</h2>
              <p className="text-sm text-gray-500">{job.location}</p>
              <h3 className="text-lg">{job.jobName}</h3>
              <p className="text-sm">{job.details}</p>
              <button onClick={onStar} className="mt-2 absolute top-1 right-3">
                  {isStarred ? '★' : '☆'}
              </button>
          </div>
        </Link>
      )
  }
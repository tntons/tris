'use client'

import { createContext, useState, ReactNode } from 'react';

type Job = {
    logo: string;
    companyName: string;
    location: string;
    jobName: string;
    details: string;
};

interface ISelectedJobContext {
    setSelectedJob: (job: Job | null) => void;
    selectedJob: Job | null;
}

const initialState: ISelectedJobContext = {
    setSelectedJob: (job: Job | null) => {},
    selectedJob: null,
};

export const SelectedJobContext = createContext<ISelectedJobContext>(initialState);

const SelectedJobContextProvider = ({ children }: { children: ReactNode }) => {
    const [selectedJob, setSelectedJob] = useState<Job | null>(null);

    return (
        <SelectedJobContext.Provider value={{ setSelectedJob, selectedJob }}>
            {children}
        </SelectedJobContext.Provider>
    );
};

export default SelectedJobContextProvider;
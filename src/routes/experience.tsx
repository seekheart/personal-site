import {Card} from "@components/Card";
import {Job, jobs} from "@data/Jobs";

interface JobCardProps {
    job: Job
}

const JobCard = ({job}: JobCardProps) => {
    return (
        <Card intent='vertical' className="gap-4 p-4 sm:p-8">
            <section className="flex justify-between gap-4">
                <section>
                    <h1 className="text-base font-semibold sm:text-lg">{job.name}</h1>
                    <p>{job.position}</p>
                    <p>{job.startDate} - {job.endDate}</p>
                </section>
                <section className="max-h-32 max-w-32 sm:max-h-64 sm:max-w-64">
                    <img src={job.companyLogo} alt="company logo"/>
                </section>
            </section>
            <section className="flex gap-8">
                <section className="w-full grow">
                    <h2 className="text-nowrap text-base font-medium sm:text-lg">Tech Stack</h2>
                    <ul className="text-sm sm:text-base">
                        {job.techStack.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </section>
                <section>
                    <h2 className="text-base font-medium sm:text-lg">Highlights</h2>
                    <ul className="list-disc px-4 py-1 text-sm sm:px-5 sm:text-base">
                        {job.description.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </section>
            </section>

        </Card>
    )
}

export const Experience = () => {
    return (
        <section className="flex flex-col gap-4 overflow-auto p-10">
            {jobs && jobs.map(job => <JobCard job={job}/>)}
        </section>
    )
}
import {Card} from "@components/Card";
import {Job, jobs} from "@data/Jobs";

interface JobCardProps {
    job: Job
}

const JobCard = ({job}: JobCardProps) => {
    return (
        <Card intent='vertical' className="gap-4 p-4 sm:p-8 md:p-16">
            <section className="flex justify-between gap-8">
                <section>
                    <h1 className="text-base font-semibold sm:text-lg md:text-2xl">{job.name}</h1>
                    <p className="md:text-xl">{job.position}</p>
                    <p className="md:text-lg">{job.startDate} - {job.endDate}</p>
                </section>
                <section className="max-h-32 max-w-32 sm:max-h-64 sm:max-w-64 md:max-w-72">
                    <img src={job.companyLogo} alt="company logo"/>
                </section>
            </section>
            <section className="flex justify-between gap-8 md:gap-16">
                <section className="grow">
                    <h1 className="text-nowrap text-base font-medium sm:text-lg md:text-2xl">Tech Stack</h1>
                    <ul className="text-sm sm:text-base md:text-lg">
                        {job.techStack.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </section>
                <section>
                    <h1 className="text-base font-medium sm:text-lg md:text-2xl">Highlights</h1>
                    <ul className="list-disc px-4 text-sm sm:px-5 sm:text-base md:px-6 md:text-lg">
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
        <section className="flex flex-col gap-4 p-10 lg:p-24 xl:grid xl:grid-cols-2">
            {jobs && jobs.map(job => <JobCard job={job}/>)}
        </section>
    )
}
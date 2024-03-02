import {Card} from "@components/Card";
import dfciLogo from "@assets/dfci-logo.png";
import metromileLogo from "@assets/metromile.webp";
import panalgoLogo from "@assets/panalgo.png";

interface Job {
    id: number;
    name: string;
    startDate: string;
    endDate: string;
    description: string[];
    companyLogo: string;
    techStack: string[];
    position: string;
}

interface JobCardProps {
    job: Job
}
const JobCard = ({job}: JobCardProps) => {
    const {
        companyLogo,
        name,
        position,
        startDate,
        endDate,
        description,
        techStack} = job;
    return (
        <Card className="grid grid-cols-2 gap-4" size='xlarge'>
            <div className="order-1 self-center justify-self-start">
                <img className="rounded-full object-cover" src={companyLogo} alt="company_logo"/>
            </div>
            <div className="order-3 flex flex-col flex-nowrap">
                <p className="text-lg font-semibold">{name}</p>
                <span className="">{position}</span>
                <span className="">{startDate} - {endDate}</span>
            </div>
            <div className="order-2">
                <h4 className="font-semibold">Job Highlights</h4>
                <ul className="list-disc gap-2 pl-6 text-lg">
                    {description && description.map(d => (
                        <li>{d}</li>
                    ))}
                </ul>
            </div>
            <div className="order-4">
                <h4 className="font-semibold">Tech Stack</h4>
                <ul className="list-disc pl-6 text-lg">
                    {techStack.map(t => <li>{t}</li>)}
                </ul>
            </div>

        </Card>
    )
}

export const Experience = () => {
    const jobs: Job[] = [
        {
            id: 1,
            startDate: "June 2016",
            endDate: 'June 2019',
            position: 'Bioinformatics Engineer',
            description: [
                'Architected ETL data pipelines',
                'Led green field projects',
                'Mentored junior developers in backend and frontend',
                'Ran workshops to introduce new technology into organization',
            ],
            name: "Dana Farber Cancer Institute",
            companyLogo: dfciLogo,
            techStack: ['Python', 'Java', 'Oracle SQL', 'Docker', 'Angular 2+', 'Typescript', 'JavaScript', 'NodeJS', 'Git', 'SVN', 'Bamboo CI']
        },
        {
            id: 2,
            startDate: "June 2019",
            endDate: 'July 2022',
            position: 'Senior Software Engineer',
            description: [
                'Built new features for SASS products',
                'Collaborated with external and internal developers on api design and interfaces',
                'Integrated customer systems into applications',
                'Innovated and optimized DevOps workflow in company',
                'Automated onboarding of customers into SASS products'
            ],
            name: "Metromile Inc",
            companyLogo: metromileLogo,
            techStack: ['Python', 'Kotlin', 'Postgres SQL', 'AWS', 'Kubernetes', 'Docker', 'Groovy', 'ReactJS', 'Git', 'Jenkins', 'Terraform']
        },
        {
            id: 3,
            startDate: "July 2022",
            endDate: 'Present',
            position: 'Software Engineer II',
            description: [
                'Resolved bugs reported by customers in production system',
                'Created framework for backend applications and cloud infrastructure',
                'Mentored and paired with other engineers on complex problems',
                'Documented SDLC processes and initiated version control strategy for release of software'
            ],
            name: "Panalgo",
            companyLogo: panalgoLogo,
            techStack: ['CoffeeScript', 'Ruby', 'ReactJS', 'Git', 'Terraform', 'AWS', 'Devpod', 'Docker']
        }
    ]
    return (
        <section className="gap-8 p-24 md:flex md:flex-col lg:grid lg:grid-cols-2 ">
            {jobs && jobs.map(job => <JobCard job={job}/>)}
        </section>
    )
}
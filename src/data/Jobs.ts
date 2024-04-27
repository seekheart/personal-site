import dfciLogo from "@assets/dfci-logo.png";
import metromileLogo from "@assets/metromile.webp";
import panalgoLogo from "@assets/panalgo.png";

export interface Job {
    id: number;
    name: string;
    startDate: string;
    endDate: string;
    description: string[];
    companyLogo: string;
    techStack: string[];
    position: string;
}

export const jobs: Job[] = [
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
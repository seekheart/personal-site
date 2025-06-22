import dfciLogo from "@assets/dfci-logo.png";
import metromileLogo from "@assets/metromile-logo-lemonade.png";
import panalgoLogo from "@assets/panalgo.png";
import returnalyzeLogo from "@assets/returnalyzeLogo.webp";

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
            'Architected and implemented Extract-Transform-Load (ETL) data pipelines',
            'Led green field projects and modernized tech stack',
            'Mentored junior developers in backend and frontend',
            'Ran workshops to introduce new technology into organization',
        ],
        name: "Dana Farber Cancer Institute",
        companyLogo: dfciLogo,
        techStack: [
            'Python',
            'Java',
            'Oracle SQL',
            'Docker',
            'Angular 2+',
            'Typescript',
            'JavaScript',
            'NodeJS',
            'Git',
            'SVN',
            'Bamboo CI'
        ]
    },
    {
        id: 2,
        startDate: "June 2019",
        endDate: 'July 2022',
        position: 'Senior Software Engineer',
        description: [
            'Collaborated with external and internal developers on api design and interfaces',
            'Integrated customer systems into SASS products',
            'Architected platform system for managing multi-tenant customer environments',
            'Reduced bottleneck time for customer onboarding by automating entire deployment process into self serve model'
        ],
        name: "Metromile Inc",
        companyLogo: metromileLogo,
        techStack: [
            'Python',
            'Kotlin',
            'Postgres SQL',
            'AWS',
            'Kubernetes',
            'Docker',
            'Groovy',
            'ReactJS',
            'Git',
            'Jenkins',
            'Terraform'
        ]
    },
    {
        id: 3,
        startDate: "July 2022",
        endDate: 'November 2024',
        position: 'Software Engineer II',
        description: [
            'Created framework for backend applications and cloud infrastructure',
            'Implemented internal React components in design library following internal design system',
            'Documented SDLC processes and initiated version control strategy for release of software'
        ],
        name: "Panalgo",
        companyLogo: panalgoLogo,
        techStack: [
            'CoffeeScript',
            'MongoDB',
            'Ruby',
            'ReactJS',
            'TailwindCSS',
            'Playwright',
            'Radix UI',
            'Vite',
            'Git',
            'Terraform',
            'AWS',
            'Devpod',
            'Docker'
        ]
    },
    {
        id: 4,
        name: 'Returnalyze',
        companyLogo: returnalyzeLogo,
        startDate: "November 2024",
        endDate: "Present",
        position: "Technical Lead",
        description: [
            'Architected new Core Platform',
            'Implemented and optimized cloud infrastructure to reduce cost and scale application performance',
            'Documented and implemented new SDLC for releasing software to align with business values',
            'Automated software continuous integration and continuous delivery to systematically deliver key features and fixes to customer environment',
            'Organized, compiled, and documented SOC2 compliance audits'
        ],
        techStack: [
            'Kotlin',
            'Python',
            'TypeScript',
            'SQL',
            'Spring Boot',
            'ReactJS',
            'Auth0',
            'Terraform',
            'Git',
            'Docker',
            'AWS'
        ]
    }
]
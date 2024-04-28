export interface Project {
    id: number;
    name: string;
    link: string;
    description: string;
    techStack: string[];
}

export const projects: Project[] = [
    {
        id: 1,
        name: 'Jainy Bot',
        link: 'https://github.com/seekheart/jainy_bot',
        description: 'Discord Bot for managing The Bribby Borb Club Server',
        techStack: ['Python', 'Docker']
    },
    {
        id: 2,
        name: 'Coder Directory Api',
        link: 'https://github.com/seekheart/coder_directory_api',
        description: 'REST api built using Flask for listing coders',
        techStack: ['Python', 'Flask', 'MongoDB']
    },
    {
        id: 3,
        name: 'Mhs2',
        link: 'https://github.com/seekheart/mhs2',
        description: 'Simple Angular website for listing details on Monster Hunter Stories 2 Combat NPC Mechanics',
        techStack: ['TypeScript', 'JavaScript', 'nodeJS', 'Angular', 'SASS', 'CSS', 'Nginx', 'Helm Charts', 'Kubernetes']
    },
    {
        id: 4,
        name: 'Super Pal',
        link: 'https://github.com/seekheart/super-pal',
        description: 'A discord bot written in Kotlin for managing raids in Injustice 2 Mobile',
        techStack: ['Kotlin', 'Docker', 'Gradle']
    },
    {
        id: 5,
        name: 'Super Pal Api',
        link: 'https://github.com/seekheart/super-pal-api',
        description: 'A RESTful api powered by Springboot for managing raid data in Injustice 2 Mobile',
        techStack: ['Java', 'Docker', 'Gradle', 'SQL', 'SpringBoot']
    }
]
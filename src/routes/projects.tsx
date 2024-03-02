import {Card} from "@components/Card";
import {NavLink} from "react-router-dom";
import {FaAngular, FaDocker, FaHtml5, FaJava, FaNodeJs, FaPython, FaReact, FaSass} from "react-icons/fa";
import {SiCss3, SiFlask, SiGradle, SiHelm, SiKotlin, SiKubernetes, SiTypescript} from "react-icons/si";
import {IoLogoJavascript} from "react-icons/io";
import {DiMongodb, DiNginx, DiPostgresql} from "react-icons/di";
import {BiLogoSpringBoot} from "react-icons/bi";
import React from "react";
import {IconContext} from "react-icons";
import {Button} from "@components/Button";

interface Project {
    id: number;
    name: string;
    link: string;
    description: string;
    techStack: string[];
}

interface ProjectCardProps {
    project: Project;
}

const techLogos: { [key: string]: React.JSX.Element } = {
    'python': <FaPython/>,
    'react': <FaReact/>,
    'kotlin': <SiKotlin/>,
    'docker': <FaDocker/>,
    'angular': <FaAngular/>,
    'flask': <SiFlask/>,
    'kubernetes': <SiKubernetes/>,
    'helm charts': <SiHelm/>,
    'css': <SiCss3/>,
    'sass': <FaSass/>,
    'html': <FaHtml5/>,
    'javascript': <IoLogoJavascript/>,
    'typescript': <SiTypescript/>,
    'java': <FaJava/>,
    'nginx': <DiNginx/>,
    'mongodb': <DiMongodb/>,
    'sql': <DiPostgresql/>,
    'gradle': <SiGradle/>,
    'springboot': <BiLogoSpringBoot/>,
    'nodejs': <FaNodeJs/>,
}

const ProjectCard = ({project}: ProjectCardProps) => {
    const {name, description, link, techStack} = project;
    const getLogoForTech = (techName: string): React.JSX.Element => {
        return techLogos[techName.toLowerCase()];
    }

    return (
        <IconContext.Provider value={{className: "w-16 h-16 text-secondary-500"}}>
            <Card className="flex flex-col flex-nowrap gap-2" size='xlarge'>
                <h4 className="font-semibold">{name}</h4>
                <NavLink className="w-fit text-primary-600 hover:text-secondary-200" to={link}>
                    <Button>Github Link</Button>
                </NavLink>
                <p>{description}</p>
                <h4 className='text-2xl font-medium'>Tech Stack</h4>
                <div className='flex flex-wrap gap-2 text-base font-semibold'>
                    {techStack && techStack.map((t) => (
                            getLogoForTech(t)
                        )
                    )}
                </div>
            </Card>
        </IconContext.Provider>
    )
}

export const Projects = () => {
    const projects: Project[] = [
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

    return (
        <section className="gap-4 p-36 md:flex md:flex-col lg:grid lg:grid-cols-3">
            {projects && projects.map(p => <ProjectCard project={p}/>)}
        </section>
    );
}
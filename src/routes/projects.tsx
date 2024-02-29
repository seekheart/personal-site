import {Card} from "@components/Card";
import {NavLink} from "react-router-dom";
import kotlinLogo from "@assets/kotlin-logo.jpeg";
import reactLogo from "@assets/react-icon.png";
import dockerLogo from "@assets/docker-logo.svg";
import angularLogo from "@assets/angular-logo.png";
import pythonLogo from "@assets/python-logo.png";
import flaskLogo from "@assets/flask-logo.webp";
import helmLogo from "@assets/helm-logo.svg";
import kubernetesLogo from "@assets/kubernetes-logo.svg";
import cssLogo from "@assets/css-logo.png";
import htmlLogo from "@assets/html-logo.png";
import javaScriptLogo from "@assets/javascript-logo.png";
import typeScriptLogo from "@assets/typescript-logo.png";
import javaLogo from "@assets/java-logo.png";
import sassLogo from "@assets/sass-logo.png";
import nginxLogo from "@assets/nginx-logo.webp";
import mongoDbLogo from "@assets/mongodb-logo.png"
import sqlLogo from "@assets/sql-logo.png";
import gradleLogo from "@assets/gradle-logo.png"
import springBootLogo from "@assets/springboot-logo.png";
import nodejsLogo from "@assets/nodejs-logo.png";

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

const techLogos: { [key: string]: string} = {
    'python': pythonLogo,
    'react': reactLogo,
    'kotlin': kotlinLogo,
    'docker': dockerLogo,
    'angular': angularLogo,
    'flask': flaskLogo,
    'kubernetes': kubernetesLogo,
    'helm charts': helmLogo,
    'css': cssLogo,
    'sass': sassLogo,
    'html': htmlLogo,
    'javascript': javaScriptLogo,
    'typescript': typeScriptLogo,
    'java': javaLogo,
    'nginx': nginxLogo,
    'mongodb': mongoDbLogo,
    'sql': sqlLogo,
    'gradle': gradleLogo,
    'springboot': springBootLogo,
    'nodejs': nodejsLogo,
}

const ProjectCard = ({project}: ProjectCardProps) => {
    const {name, description, link, techStack} = project;

    const getLogoForTech = (techName: string): string => {
        return techLogos[techName.toLowerCase()];
    }

    return (
        <Card className="flex flex-col flex-nowrap gap-2" size='xlarge'>
            <h2 className="text-4xl font-semibold">{name}</h2>
            <NavLink className="text-blue-400 hover:text-blue-700" to={link}>Link</NavLink>
            <p className="text-base">{description}</p>
            <h4 className='text-2xl font-medium'>Tech Stack</h4>
            <div className='flex flex-wrap gap-2 text-base font-semibold'>
                {techStack && techStack.map((t) => (
                        <img className="inline-block max-h-24 max-w-24  object-scale-down"
                             src={getLogoForTech(t)}
                             alt='tech-logo'/>
                    )
                )}
            </div>
        </Card>
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
        <section className="grid grid-cols-3 gap-4 p-36">
            {projects && projects.map(p => <ProjectCard project={p}/>)}
        </section>
    );
}
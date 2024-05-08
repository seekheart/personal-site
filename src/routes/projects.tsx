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
import {Project, projects} from "@data/Projects";

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

    const defaultStyles = {
        className: "size-16 rounded-md sm:size-24 md:size-28 text-accent"
    };

    return (
        <IconContext.Provider value={defaultStyles}>
            <Card intent='vertical' className="gap-4 p-4 sm:p-8">
                <section className="flex flex-col gap-2">
                    <h1 className="text-5xl font-semibold sm:text-2xl">{name}</h1>
                    <p className="text-lg">{description}</p>
                    <h1 className='text-2xl font-medium sm:text-2xl'>Tech Stack</h1>
                    <ul className='flex flex-wrap gap-2'>
                        {techStack && techStack.map((t, i) => (
                                <li key={i}>{getLogoForTech(t)}</li>
                            )
                        )}
                    </ul>
                </section>
                <section className="flex justify-end">
                    <NavLink to={link}>
                        <Button>Github Repository</Button>
                    </NavLink>
                </section>
            </Card>
        </IconContext.Provider>
    )
}

export const Projects = () => {
    return (
        <section className="flex flex-col gap-4 overflow-auto p-10 lg:grid lg:grid-cols-2 lg:p-24">
            {projects && projects.map(p => <ProjectCard key={p.id} project={p}/>)}
        </section>
    );
}
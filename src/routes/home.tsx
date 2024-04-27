import {differenceInYears, parse} from "date-fns";
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {Link} from "react-router-dom";
import {IconContext} from "react-icons";
import {MdOutlineMail} from "react-icons/md";
import {JSX} from "react";

export interface ContactIconProps {
    link: string;
    icon: JSX.Element;
}

export const Home = () => {
    const startCareerDate = parse('06/01/2016', 'MM/dd/yyyy', new Date());
    const yearsAsEngineer = differenceInYears(new Date(), startCareerDate);
    const contactIcons: ContactIconProps[] = [
        {
            link: 'https://github.com/seekheart',
            icon: <FaGithub/>
        },
        {
            link: 'https://www.linkedin.com/in/mitung/',
            icon: <FaLinkedin/>
        },
        {
            link: 'mailto:miketung2013@gmail.com',
            icon: <MdOutlineMail/>
        }
    ]
    const defaultStyles = {
        className: "size-24 rounded-md text-secondary-400 sm:size-28 md:size-32 lg:size-36"
    };

    return (
        <IconContext.Provider value={defaultStyles}>
            <section className="flex h-screen">
                <div className="flex flex-col justify-center gap-16 px-8 md:px-24 lg:px-28">
                    <h1 className="font-bold text-primary-600">
                        Mike is a software engineer with {yearsAsEngineer} years of experience
                </h1>
                    <ul className="flex gap-4">
                        {contactIcons && contactIcons.map((icon) => (
                            <Link to={icon.link}>{icon.icon}</Link>
                        ))}
                    </ul>
            </div>
        </section>
        </IconContext.Provider>
    )
}
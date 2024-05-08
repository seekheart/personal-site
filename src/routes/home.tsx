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

const defaultStyles = {
    className: "size-24 rounded-md text-secondary-400 sm:size-28 md:size-36 text-accent"
};

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

    return (
        <IconContext.Provider value={defaultStyles}>
            <section className="flex-col justify-center gap-16 px-12 py-24 sm:flex sm:px-16 md:p-16 lg:p-36">
                <section>
                    <h1 className="font-bold">
                        Mike is a software engineer with {yearsAsEngineer} years of experience
                    </h1>
                </section>
                <section className="flex flex-col flex-wrap gap-4 py-4 md:gap-8">
                    <h2 className="">Connect with me on:</h2>
                    <ul className="flex gap-4">
                        {contactIcons && contactIcons.map((icon) => (
                            <li key={icon.link} className="hover:cursor-pointer hover:opacity-90">
                                <Link to={icon.link}>{icon.icon}</Link>
                            </li>
                        ))}
                    </ul>
                </section>

            </section>
        </IconContext.Provider>
    )
}
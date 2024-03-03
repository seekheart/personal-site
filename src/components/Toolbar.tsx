import {Link, NavLink} from "react-router-dom";
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {JSX} from "react";
import {IconContext} from "react-icons";

interface ToolbarProps {
    items: {name: string, link: string}[];
}

interface ContactIconProps {
    link: string;
    icon: JSX.Element;
}

const ContactIcon = ({link, icon}: ContactIconProps) => {
    return (
        <NavLink to={link}>
            {icon}
        </NavLink>
    )
}

export const Toolbar = ({items}: ToolbarProps) => {
    const contactIcons: ContactIconProps[] = [
        {
            link: '/',
            icon: <img className='max-h-16 max-w-16 rounded-full object-cover hover:cursor-pointer'
                       src='https://avatars.githubusercontent.com/u/9321678?v=4' alt='avatar-logo'/>
        },
        {
            link: 'https://github.com/seekheart',
            icon: <FaGithub/>
        },
        {
            link: 'https://www.linkedin.com/in/mitung/',
            icon: <FaLinkedin/>
        }
    ]
    return (
        <IconContext.Provider value={{className: "w-16 h-16 hover:cursor-pointer text-secondary-600"}}>
        <nav className='flex items-center justify-start border border-gray-300 bg-primary-400 px-24 shadow-md'>
            <div className="flex grow gap-8">
                {contactIcons && contactIcons.map(c => (
                    <ContactIcon link={c.link} icon={c.icon}/>
                ))}
            </div>
            <ul className="flex min-h-24 list-none flex-nowrap items-center text-2xl font-bold text-greyscale-700">
                {items && items.map(item => (
                    <li className="p-8 hover:text-white">
                        <Link className="size-full" to={`${item.link}`}>
                            {item.name.toUpperCase()}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
        </IconContext.Provider>
    )
}
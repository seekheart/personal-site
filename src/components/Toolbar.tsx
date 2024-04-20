import {FaGithub, FaLinkedin} from "react-icons/fa";
import {JSX} from "react";
import {IconContext} from "react-icons";
import * as NavigationMenuRadix from "@radix-ui/react-navigation-menu";
import {Link} from "react-router-dom";
import {GiHamburgerMenu} from "react-icons/gi";

interface ToolbarProps {
    items: { name: string, link: string, isMobileOnly: boolean }[];
}

interface ContactIconProps {
    link: string;
    icon: JSX.Element;
}

const iconDefaultStyles = {className: "w-8 h-8 sm:w-16 sm:h-16 hover:cursor-pointer text-secondary-600"} as const;

const ContactIcon = ({link, icon}: ContactIconProps) => {
    return (
        <NavigationMenuRadix.Item key={link} className="hidden sm:flex">
            <NavigationMenuRadix.Link href={link}>
                {icon}
            </NavigationMenuRadix.Link>
        </NavigationMenuRadix.Item>
    )
}

export const Toolbar = ({items}: ToolbarProps) => {
    const contactIcons: ContactIconProps[] = [
        {
            link: '/',
            icon: <img
                className={`max-h-16 max-w-16 rounded-full object-cover hover:cursor-pointer ${iconDefaultStyles.className}`}
                src='https://avatars.githubusercontent.com/u/9321678?v=4' alt='avatar-logo'/>,
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
        <IconContext.Provider value={iconDefaultStyles}>
            <NavigationMenuRadix.Root
                className='h-24 items-center justify-start border border-gray-300 bg-primary-400 p-8 shadow-md sm:flex sm:justify-between sm:px-24'>
                <NavigationMenuRadix.List className="hidden grow gap-8 sm:flex">
                {contactIcons && contactIcons.map(c => (
                    <ContactIcon link={c.link} icon={c.icon} key={c.link}/>
                ))}
                </NavigationMenuRadix.List>
                <NavigationMenuRadix.List className="flex flex-nowrap text-2xl font-bold text-greyscale-700 sm:hidden">
                    <NavigationMenuRadix.Item className="sm:hidden">
                        <NavigationMenuRadix.Trigger>
                            <GiHamburgerMenu className="rounded-md bg-greyscale-100 text-greyscale-600"/>
                        </NavigationMenuRadix.Trigger>
                        <NavigationMenuRadix.Content className="absolute z-10">
                            <NavigationMenuRadix.Sub>
                                <NavigationMenuRadix.List className="flex flex-col gap-4 bg-white p-4">
                                    {items && items.map(item => (
                                        <NavigationMenuRadix.Link className="text-sm" href={`${item.link}`}
                                                                  key={item.name}>
                                            {item.name.toUpperCase()}
                                        </NavigationMenuRadix.Link>
                                    ))}
                                </NavigationMenuRadix.List>
                            </NavigationMenuRadix.Sub>
                        </NavigationMenuRadix.Content>
                    </NavigationMenuRadix.Item>
                </NavigationMenuRadix.List>


                <NavigationMenuRadix.List className="hidden flex-nowrap text-2xl font-bold text-greyscale-700 sm:flex">
                    {items && items.filter(i => !i.isMobileOnly).map(item => (
                        <NavigationMenuRadix.Item className="p-8 hover:text-white" key={item.link}>
                            <Link to={`${item.link}`}>
                            {item.name.toUpperCase()}
                        </Link>
                        </NavigationMenuRadix.Item>
                ))}
                </NavigationMenuRadix.List>
            </NavigationMenuRadix.Root>
        </IconContext.Provider>
    )
}
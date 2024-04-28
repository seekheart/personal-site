import {IconContext} from "react-icons";
import * as NavigationMenuRadix from "@radix-ui/react-navigation-menu";
import {GiHamburgerMenu} from "react-icons/gi";
import {NavLink, useLocation} from "react-router-dom";

interface ToolbarProps {
    items: { name: string, link: string }[];
}

const iconDefaultStyles = {
    className: "size-12 hover:cursor-pointer text-primary-600"
};

export const Toolbar = ({items}: ToolbarProps) => {
    const {pathname} = useLocation();
    return (
        <IconContext.Provider value={iconDefaultStyles}>
            <NavigationMenuRadix.Root className="z-10 h-24 content-center bg-greyscale-900 sm:h-28 md:h-32">
                <NavigationMenuRadix.List className="flex justify-around lg:justify-between lg:px-36">
                    <NavigationMenuRadix.Item className="sm:hidden">
                        <NavigationMenuRadix.Trigger>
                            <GiHamburgerMenu/>
                        </NavigationMenuRadix.Trigger>
                        <NavigationMenuRadix.Content
                            className="absolute left-0 w-full rounded-md bg-greyscale-800 opacity-95">
                            <ul className="flex flex-col justify-between divide-y-2 divide-double divide-greyscale-600 p-2 text-2xl text-primary-600">
                                {items.map(item => (
                                    <li key={item.link} className="px-12 py-2 hover:text-secondary-600">
                                        <NavigationMenuRadix.Link asChild>
                                            <NavLink
                                                className={
                                                    [
                                                        'font-bold',
                                                        pathname === item.link ? 'text-secondary-600' : ''
                                                    ].join(' ')
                                                }
                                                to={item.link}>
                                                {item.name}
                                            </NavLink>
                                        </NavigationMenuRadix.Link>
                                    </li>
                                ))}
                            </ul>
                        </NavigationMenuRadix.Content>
                    </NavigationMenuRadix.Item>
                    <NavigationMenuRadix.Item className="hidden sm:block">
                        <ul className="flex gap-2 text-4xl text-primary-600 lg:text-5xl">
                            {items.map(item => (
                                <li key={item.link} className="p-1">
                                    <NavigationMenuRadix.Link asChild>
                                        <NavLink
                                            className={pathname === item.link ? 'text-secondary-600' : ''}
                                            to={item.link}>
                                            {item.name}
                                        </NavLink>
                                    </NavigationMenuRadix.Link>
                                </li>
                            ))}
                        </ul>
                    </NavigationMenuRadix.Item>
                    <NavigationMenuRadix.Item>
                        <h2 className="text-nowrap p-1 text-primary-500">Mike Tung</h2>
                    </NavigationMenuRadix.Item>
                </NavigationMenuRadix.List>
            </NavigationMenuRadix.Root>
        </IconContext.Provider>
    )
}
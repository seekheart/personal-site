import {IconContext} from "react-icons";
import * as NavigationMenuRadix from "@radix-ui/react-navigation-menu";
import {GiHamburgerMenu} from "react-icons/gi";
import {Link} from "react-router-dom";

interface ToolbarProps {
    items: { name: string, link: string }[];
}

const iconDefaultStyles = {
    className: "size-12 hover:cursor-pointer text-primary-600"
};

export const Toolbar = ({items}: ToolbarProps) => {
    return (
        <IconContext.Provider value={iconDefaultStyles}>
            <NavigationMenuRadix.Root className="z-10 h-24 w-full content-center bg-black sm:h-28 md:h-32">
                <NavigationMenuRadix.List className="flex justify-around">
                    <NavigationMenuRadix.Item className="sm:hidden">
                        <NavigationMenuRadix.Trigger>
                            <GiHamburgerMenu/>
                        </NavigationMenuRadix.Trigger>
                        <NavigationMenuRadix.Content className="absolute rounded-md bg-greyscale-800">
                            <ul className="flex flex-col justify-between p-2 text-2xl text-primary-600">
                                {items.map(item => (
                                    <li key={item.link} className="p-1">
                                        <NavigationMenuRadix.Link asChild>
                                            <Link to={item.link}>{item.name}</Link>
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
                                        <Link to={item.link}>{item.name}</Link>
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
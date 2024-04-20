import {Outlet} from "react-router-dom";
import {Toolbar} from "@components/Toolbar";

export const Root = () => {
    const menuItems = [
        {name: 'Home', link: '/', isMobileOnly: false},
        {name: 'Experience', link: '/experience', isMobileOnly: false},
        {name: 'Projects', link: '/projects', isMobileOnly: false},
        {name: 'Github', link: 'https://github.com/seekheart', isMobileOnly: true},
        {name: 'LinkedIn', link: 'https://www.linkedin.com/in/mitung/', isMobileOnly: true},
    ]

    return (
        <div className="min-h-screen w-fit">
            <div className="flex flex-col justify-center">
                <Toolbar items={menuItems}/>
                <Outlet/>
            </div>
        </div>
    )
}
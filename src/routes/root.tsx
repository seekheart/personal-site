import {Outlet} from "react-router-dom";
import {Toolbar} from "@components/Toolbar";

export const Root = () => {
    const menuItems = [
        {name: 'Home', link: '/'},
        {name: 'Experience', link: '/experience'},
        {name: 'Projects', link: '/projects'}
    ]

    return (
        <div className="flex min-h-screen w-auto flex-col">
                <Toolbar items={menuItems}/>
                <Outlet/>
            </div>
    )
}
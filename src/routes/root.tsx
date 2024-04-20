import {Outlet} from "react-router-dom";
import {Toolbar} from "@components/Toolbar";

export const Root = () => {
    const menuItems = [
        {name: 'Home', link: '/'},
        {name: 'Experience', link: '/experience'},
        {name: 'Projects', link: '/projects'}
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
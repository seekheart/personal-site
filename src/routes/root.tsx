
import {Outlet} from "react-router-dom";
import {Toolbar} from "@components/Toolbar";

export const Root = () => {
    const menuItems = [
        {name: 'Home', link: '/'},
        {name: 'Experience', link: '/experience'},
        {name: 'Projects', link: '/projects'},
        {name: 'Contact', link: '/contact'}
    ]

    return (
        <div className="flex flex-col justify-center">
            <Toolbar items={menuItems}/>
            <Outlet/>
        </div>
    )
}
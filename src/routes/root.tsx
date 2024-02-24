
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
        <div className="flex flex-col justify-center gap-16 align-middle">
            <Toolbar items={menuItems}/>
            <div className="px-96">
                <Outlet/>
            </div>
        </div>
    )
}
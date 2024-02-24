
import {Outlet} from "react-router-dom";
import {Toolbar} from "@components/Toolbar";

export const Root = () => {
    const menuItems = [
        'Home',
        'Content',
        'Contact',
        'Details'
    ]
    return (
        <div className="flex flex-col gap-8">
            <Toolbar items={menuItems}/>
            <div className="p-32">
                <Outlet/>
            </div>
        </div>
    )
}
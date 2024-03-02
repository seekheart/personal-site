import {Link} from "react-router-dom";

interface ToolbarProps {
    items: {name: string, link: string}[];
}

export const Toolbar = ({items}: ToolbarProps) => {
    return (
        <nav className='border-gray-300 border bg-primary-400 py-6'>
            <ul className="text-black flex list-none flex-nowrap items-center justify-between px-64 font-bold">
                {items && items.map(item => (
                    <li className="hover:text-white h-fit min-w-24">
                        <Link to={`${item.link}`}>
                            {item.name.toUpperCase()}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
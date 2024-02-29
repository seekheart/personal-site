import {Link} from "react-router-dom";

interface ToolbarProps {
    items: {name: string, link: string}[];
}

export const Toolbar = ({items}: ToolbarProps) => {
    return (
        <nav className='border border-gray-200 bg-gray-100 py-6'>
            <ul className="flex list-none flex-nowrap items-center justify-between px-64">
                {items && items.map(item => (
                    <li className="hover:text-white">
                        <Link to={`${item.link}`}>
                            {item.name.toUpperCase()}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
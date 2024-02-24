import {Link} from "react-router-dom";

interface ToolbarProps {
    items: {name: string, link: string}[];
}

export const Toolbar = ({items}: ToolbarProps) => {
    return (
        <nav className='border border-gray-100 bg-gray-100'>
            <ul className="list-none p-4 flex justify-evenly">
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
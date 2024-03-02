import {Link, useNavigate} from "react-router-dom";

interface ToolbarProps {
    items: {name: string, link: string}[];
}

export const Toolbar = ({items}: ToolbarProps) => {
    const navigate = useNavigate();
    const handleRedirectHome = () => {
        navigate('/');
    }
    return (
        <nav className='border-gray-300 flex items-center justify-start border bg-primary-400 px-24 shadow-md'>
            <div className="grow" onClick={handleRedirectHome}>
                <img className='max-h-16 max-w-16 rounded-full object-cover hover:cursor-pointer'
                     src='https://avatars.githubusercontent.com/u/9321678?v=4' alt='avatar-logo'/>
            </div>
            <ul className="flex min-h-24 list-none flex-nowrap items-center font-bold text-greyscale-700">
                {items && items.map(item => (
                    <li className="hover:text-white p-8">
                        <Link className="size-full" to={`${item.link}`}>
                            {item.name.toUpperCase()}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
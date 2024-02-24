interface ToolbarProps {
    items: string[];
}

export const Toolbar = ({items}: ToolbarProps) => {
    return (
        <nav className='bg-red-400'>
            <ul className="list-none p-4 flex gap-8 justify-center">
                {items && items.map(item => (
                    <li>{item.toUpperCase()}</li>
                ))}
            </ul>
        </nav>
    )
}
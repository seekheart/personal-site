import {Button} from "@components/Button";
import {useNavigate} from "react-router-dom";

export const NotFound = () => {
    const navigate = useNavigate();
    const handleRedirectHome = () => {
        return navigate('/');
    }
    return (
        <section className='flex flex-col items-center p-96'>
            <h1 className="text-6xl font-semibold">The page you are looking for is not found!</h1>
            <Button className='size-fit self-end' onClick={handleRedirectHome}>Return home</Button>
        </section>
    )
}
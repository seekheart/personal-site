import {Button} from "@components/Button";
import {useNavigate} from "react-router-dom";

export const Home = () => {
    const navigate = useNavigate();
    const handleRedirectToContact = () => {
        navigate('/contacts');
    }
    return (
        <section
            className="flex h-screen justify-end bg-[url('assets/professional_gible.jpeg')] bg-cover bg-center bg-no-repeat opacity-75">
            <div className='flex justify-between gap-8 px-32 py-96'>
                <div className="pl-96 pt-28">
                    <Button size='xlarge' className="h-fit" onClick={handleRedirectToContact}>Contact Me</Button>
                </div>
                <h1 className="basis-1/2 text-8xl font-bold text-gray-900">
                    Mike is a Software Engineer who builds and tinkers
                </h1>
            </div>
        </section>
    )
}
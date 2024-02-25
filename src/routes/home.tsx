import {Button} from "@components/Button";

export const Home = () => {
    return (
        <section
            className="flex h-screen justify-end bg-[url('assets/professional_gible.jpeg')] bg-cover bg-center bg-no-repeat opacity-75">
            <div className='flex justify-center gap-8 py-96'>
                <div className="pt-28">
                    <Button size='xlarge' className="h-fit">Contact Me</Button>
                </div>
                <h1 className="basis-1/2 text-8xl font-bold text-gray-900">
                    Mike is a Software Engineer who builds and tinkers
                </h1>
            </div>
        </section>
    )
}
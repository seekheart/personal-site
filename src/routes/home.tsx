import {differenceInYears, parse} from "date-fns";

export const Home = () => {
    const startCareerDate = parse('06/01/2016', 'dd/MM/yyyy', new Date());
    const yearsAsEngineer = differenceInYears(new Date(), startCareerDate);

    return (
        <section
            className="flex h-screen justify-end bg-[url('assets/main-background.webp')] bg-cover bg-center bg-no-repeat opacity-80">
            <div className='flex justify-center px-8 py-24 sm:2xl:py-96 sm:2xl:px-32 sm:2xl:gap-8'>
                <h1 className="basis-3 font-bold text-secondary-600 opacity-80 sm:2xl:basis-7/12">
                    Mike is a software engineer who builds and tinkers with {yearsAsEngineer} years of experience
                </h1>
            </div>
        </section>
    )
}
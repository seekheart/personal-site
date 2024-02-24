import {Card} from "@components/Card";
import professionalGible from "@assets/professional_gible.jpeg";

export const Home = () => {
    return (
        <>
            <Card className="gap-4 max-w-3xl">
                <div className="border border-black bg-amber-700">
                    <img src={professionalGible} alt="gible-professional"/>
                </div>
                <article>
                    <p>
                        Hi, my name is Mike and I've been a software engineer for N years since 2016.
                        I'm a full stack developer with devops skills. When I'm not working professionally,
                        I like to explore new web library and frameworks by making small pet projects. If
                        you are interested in getting to know me, let's chat!
                    </p>
                </article>
            </Card>
        </>
    )
}
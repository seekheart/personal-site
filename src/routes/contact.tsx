import {FaGithub, FaLinkedin} from "react-icons/fa";
import {NavLink} from "react-router-dom";
import {Card} from "@components/Card";
import {IconContext} from "react-icons";
import selfie from "@assets/self_500x500.jpg";

export const Contact = () => {
    return (
        <IconContext.Provider value={{className: "text-blue-400 h-16 w-16"}}>
            <section className="flex flex-col items-center gap-4 px-96 py-24">
                <Card className="flex flex-col gap-4">
                    <div className="flex justify-between gap-4">
                        <img className="max-h-24 max-w-24 rounded-full" src={selfie} alt="self-pic"/>
                        <h1 className="text-6xl font-semibold">Contact Me</h1>
                    </div>
                    <div className="flex flex-wrap justify-center gap-4">
                        <NavLink to='https://github.com/seekheart'>
                            <FaGithub className="size-24"/>
                        </NavLink>
                        <NavLink to='https://www.linkedin.com/in/mitung/'>
                            <FaLinkedin className="size-24"/>
                        </NavLink>
                    </div>
                </Card>
            </section>
        </IconContext.Provider>
    )
}
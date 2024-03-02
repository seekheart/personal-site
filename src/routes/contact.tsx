import {FaGithub, FaLinkedin} from "react-icons/fa";
import {NavLink} from "react-router-dom";

export const Contact = () => {
    return (
        <section className="flex flex-col items-center gap-4 px-96 py-24">
            <h1 className="text-6xl font-semibold">Contact Me</h1>
            <div className="flex flex-wrap gap-4">
                <NavLink to='https://github.com/seekheart'>
                    <FaGithub className="size-24"/>
                </NavLink>
                <NavLink to='https://www.linkedin.com/in/mitung/'>
                    <FaLinkedin className="size-24"/>
                </NavLink>
            </div>
        </section>
    )
}
import CodingFactoryLogo from "./CodingFactoryLogo.tsx";
import {Link} from "react-router";

const Header = () => {
    return (
        <>
            <header className="bg-[#782024]">
                <div className="container mx-auto flex items-center justify-between">
                    <CodingFactoryLogo/>
                    <nav className="flex gap-4">


                        {/*<a href={"/"} className="text-white mx-autp px-4 py-2 hover:underline hover:underline-offset-4">Home</a>*/}
                        <Link to="/" className="text-white mx-autp px-4 py-2 hover:underline hover:underline-offset-4">Home</Link>
                        <Link to="/examples/name-changer" className="text-white mx-autp px-4 py-2 hover:underline hover:underline-offset-4">Name Changer</Link>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header;
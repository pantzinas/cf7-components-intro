import CodingFactoryLogo from "./CodingFactoryLogo.tsx";
import {Link} from "react-router";
import {useState} from "react";
import {Menu, X} from "lucide-react"

const Header = () => {
    const [menuOpen, SetMenuOpen] = useState(false);

    return (
        <>
            <header className="bg-[#782024]">
                <div className="container mx-auto flex items-center justify-between">
                    <CodingFactoryLogo/>

                    <button
                        className="text-white md:hidden"
                        onClick={() => SetMenuOpen(!menuOpen)}
                    >
                        { menuOpen ? <X size={36}/> : <Menu size={36}/> }
                    </button>

                    <nav
                        //className="flex gap-4"
                        className={`
                            ${menuOpen ? "block" : "hidden"}
                            md:flex gap-4 bg-cf-dark-red text-white absolute top-24 left-0 w-full md:w-auto md:static p-4 md:p-0
                        `}
                    >
                        {/*<a href={"/"} className="text-white mx-autp px-4 py-2 hover:underline hover:underline-offset-4">Home</a>*/}
                        <Link
                            to="/"
                            className="block md-inline hover:underline hover:underline-offset-4"
                            onClick={() => SetMenuOpen(false)}
                        >Home</Link>
                        <Link
                            to="/examples/name-changer"
                            className="block md-inline hover:underline hover:underline-offset-4"
                            onClick={() => SetMenuOpen(false)}
                        >Name Changer</Link>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header;
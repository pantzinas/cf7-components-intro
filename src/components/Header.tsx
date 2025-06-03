import CodingFactoryLogo from "./CodingFactoryLogo.tsx";

const Header = () => {
    return (
        <>
            <header className="bg-[#782024]">
                <div className="container mx-auto flex items-center justify-between">
                    <CodingFactoryLogo/>
                    <a className="text-white mx-autp px-4 py-2 hover:underline hover:underline-offset-4" href="/">Home</a>
                </div>
            </header>
        </>
    )
}

export default Header;
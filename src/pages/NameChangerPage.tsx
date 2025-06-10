import NameChanger from "../components/NameChanger.tsx";
import {useEffect} from "react";

const NameChangerPage = () => {

    useEffect(() => {
        document.title = "CF7 Name Changer";
    }, []) // It will run only the first time of the render by using []

    return (
        <>
            <NameChanger/>
        </>
    )
}

export default NameChangerPage;
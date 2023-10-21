import CreateMatchesContent from "../../components/Contents/createMatchesContent/CreateMatchesContent";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

export default function CreateMacthesPage() {

    const navigate = useNavigate();
    const [isAuth, setIsAuth] = useState(false)

    useEffect(() => {
        onAuthStateChanged(auth, async (usuario) => {
            if(!usuario) navigate("/")
            setIsAuth(true)
        })
    }, [])

    if(!isAuth) return null

    return (
        <div className=" bg-zinc-200 ">
            <Header/>
            <div className="flex flex-col md:flex-row">
                <Sidebar/>
                <CreateMatchesContent/>
            </div>
        </div>
    )
}
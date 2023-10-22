import { useEffect } from "react";
import MatchesContent from "../../components/Contents/MatchesContent/MatchesContent";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { useUsersStore } from "../../stores/userStore";
import { getUserData } from "../../services/AuthService";

export default function MacthesPage() {
    const navigate = useNavigate();

    const handleUserLoginStore = useUsersStore(state => state.loginUser)
    const user = useUsersStore(state => state.user)

    useEffect(() => {
        onAuthStateChanged(auth, async (usuario) => {
            if(!usuario){
                navigate("/")
                return
            } 
            const user = await getUserData(usuario.uid)
            handleUserLoginStore(user)
        })
    }, [])

    if(!user) return null
    
    return (
        <div className=" bg-zinc-200 ">
            <Header/>
            <div className="flex flex-col md:flex-row">
                <Sidebar/>
                <MatchesContent/>
            </div>
        </div>
    )
}

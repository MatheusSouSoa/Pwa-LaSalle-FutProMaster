import { useNavigate } from "react-router-dom";
import CreateTeam from "../../components/Contents/createTeam/CreateTeam";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";
import { getUserData } from "../../services/AuthService";
import { useUsersStore } from "../../stores/userStore";

export default function CreateTeamPage() {

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
        <div className="bg-red-500 ">
            <Header/>
            <div className="flex flex-col md:flex-row">
                <Sidebar/>
                <CreateTeam/>
            </div>
        </div>
    )
}
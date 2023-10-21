import { User } from "@phosphor-icons/react";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebase";
import { useNavigate } from "react-router-dom";
import { useUsersStore } from "../../../stores/userStore";

export default function MenuUser() {

    const navigate = useNavigate()
    
    function handleLogout() {
        signOut(auth)
        navigate('/')
    }

    const user = useUsersStore(state => state.user)

    return (    
        <div className="justify-center items-center gap-3 flex">
            <div className="font-bold text-white text-xs sm:text-xl md:text-2xl flex text-right justify-center flex-col">
                <span>{user?.name}</span>
                <button className="flex justify-end items-center text-xs sm:text-lg md:text-xl hover:underline" onClick={handleLogout}>Sair</button>
            </div>
            <div className=" bg-red-400 rounded-full w-10 md:w-16 flex justify-center items-center overflow-hidden">
                {user?.profilePicture ? <img src={user.profilePicture} alt="" /> : <User className="w-6 h-5 "/>}
            </div>
        </div>
    )
}
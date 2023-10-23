import { useState, useEffect } from "react"
import { registerTeam } from "../../services/RegisterTeam";
import { useUsersStore } from "../../stores/userStore";
import { usePlayersStore } from "../../stores/playersStore";
import { useLocation } from "react-router-dom";

export default function CreateTeamInfo() {

    const [teamName, setTeamName] = useState("")
    const location = useLocation()
    
    const user = useUsersStore(state => state.user)
    const players = usePlayersStore(state => state.players)
    const resetPlayers = usePlayersStore(state => state.resetPlayers)

    function registerTeamOnDB() {
        if(user && players.length > 0)
        registerTeam(user?.uid, {
            nome: teamName,
            players
        })
        resetPlayers()
    }
    
    useEffect(() => {
        resetPlayers()
    }, [location])

    return (
        <div className="flex justify-between px-2 md:px-10 py-1 gap-2 items-center">
            <div>
                <input 
                    className="outline-none border w-full rounded-xl bg-zinc-100 px-2"
                    type="text" 
                    value={teamName}
                    onChange={(event) => {
                        setTeamName(event.target.value);
                    }}
                    placeholder="Informe o nome do time" 
                />
            </div>
            <div className="">
                <button onClick={registerTeamOnDB} className="bg-green-600 text-white px-1 md:px-3 py-1 font-black rounded-md hover:bg-green-500">
                    Cadastrar
                </button>
            </div>
        </div>
    )
}


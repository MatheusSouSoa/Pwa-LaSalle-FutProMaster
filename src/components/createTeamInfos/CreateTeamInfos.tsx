import { useState, useEffect } from "react"
import { registerTeam } from "../../services/RegisterTeam";
import { useUsersStore } from "../../stores/userStore";
import { usePlayersStore } from "../../stores/playersStore";
import { useLocation, useNavigate } from "react-router-dom";
import Modal from "../../utils/modal/Modal";

export default function CreateTeamInfo() {

    const [teamName, setTeamName] = useState("")
    const location = useLocation()
    const navigate = useNavigate()
    
    const user = useUsersStore(state => state.user)
    const players = usePlayersStore(state => state.players)
    const resetPlayers = usePlayersStore(state => state.resetPlayers)
    const [errMsg, setErrMsg] = useState("")
    const [isErr, setIsErr] = useState(false)

    function registerTeamOnDB() {
        if(teamName === "") {
            setErrMsg("Time precisa ter  um nome")
            setIsErr(true)
            return
        }
        let  gol = 0
        let def = 0
        let mc = 0
        let ata = 0

        players.forEach((player) => {
            if(player.posicao.toLocaleLowerCase() == "gol") gol++
            if(player.posicao.toLocaleLowerCase() == "ata") ata++
            if(player.posicao.toLocaleLowerCase() == "mc") mc++
            if(player.posicao.toLocaleLowerCase() == "def") def++
        })

        if(gol == 0 || ata == 0 || mc == 0 || def == 0) {
            console.log(players)
            setErrMsg("Número de jogadores por posição invalido")
            setIsErr(true)
            return
        } 
        console.log(players)
        console.log(gol, ata, def, mc)

        if(user && players.length > 0)
        registerTeam(user?.uid, {
            nome: teamName,
            players
        })
        navigate('/matches')
    }
    
    useEffect(() => {
        resetPlayers()
    }, [location])

    function handleIsModalClose(){
        setIsErr(false)
    }



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
            {isErr &&
                <Modal isOpen={true} onClose={handleIsModalClose}>
                    <div>
                        <div className="flex flex-col justify-between items-center gap-5">
                            <div>
                                <h1 className="text-red-500 font-bold">
                                    {errMsg}
                                </h1>
                            </div>
                            <span>
                                <button onClick={handleIsModalClose} className="bg-red-500 rounded-md text-white font-black hover:bg-red-600 px-6 py-2">ok</button>
                            </span>
                        </div>
                    </div>
                </Modal>
            }
        </div>
    )
}


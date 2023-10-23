import { Trash2, User2, UserPlus} from "lucide-react"
import { useState } from "react"
import { usePlayersStore } from "../../stores/playersStore"
import Modal from "../../utils/modal/Modal"

interface SectorPLayersProps{
    maxPlayers?: number
    sectorName: string
    players?: object[] | undefined
    isEven?: boolean
}

interface PlayerProps {
    nome: string
    posicao: string
    camisa: number
    situacao: string
}

export default function SectorPlayers({ maxPlayers ,sectorName, isEven}: SectorPLayersProps) {
    
    const [playersNumber, setPlayersNumber] = useState(0)
    const [isVisible, setIsVisible] = useState(false);
    const [playerFormData, setPlayerFormData] = useState<PlayerProps>({
        nome: '',
        posicao: sectorName,
        camisa: 0,
        situacao: 'Titular'
    })
    const [playerOfPosition, setPlayersOfPosition] = useState<PlayerProps[] | undefined>()

    const toggleVisibility = () => {
        if(playerOfPosition && maxPlayers && playerOfPosition?.length >= maxPlayers) return 
        setIsVisible(!isVisible);
        setPlayerFormData({
            ...playerFormData,
            ["nome"]: "",
            ["camisa"]: 0
        });
    };

    // const playerOfPosition = players?.filter((player) => {
    //     return  player.posicao.toLowerCase() == sectorName.toLowerCase() && 
    //             player.situcao.toLowerCase() == "titular"
    // })

    const handleRemovePlayersStore = usePlayersStore(state => state.removePlayer)
    
    function removePlayer (index: number ) {
        const player = players[index];
        if(playerOfPosition)
            setPlayersOfPosition(playerOfPosition.slice(0, index)
            .concat(playerOfPosition.slice(index + 1)));
        else return
        if(player)
            handleRemovePlayersStore(player.camisa)
    }
    
    const handleAddPlayersStore = usePlayersStore(state => state.addPlayer)
    const players = usePlayersStore(state => state.players)

    const [errMsg, setErrMsg] = useState("")
    const [isErr, setIsErr] = useState(false)

    function handleAddPlayer() {

        if(playerOfPosition && maxPlayers && playerOfPosition?.length >= maxPlayers) {
            setErrMsg("O numero de jogadores maximo para posição foi atingido.")
            setIsErr(true)
            return 
        }

        if (playerFormData.nome === '') {
            setErrMsg('Nome não pode estar em branco')
            setIsErr(true)
            return
        }

        const alreadyUsed = players.filter(p => p.camisa === playerFormData.camisa)
        if (playerFormData.camisa && playerFormData.camisa <= 0 || alreadyUsed.length > 0) {
            setErrMsg('Número de camisa invalido ou já usado')
            setIsErr(true)
            return
        }
    
        setPlayersOfPosition((prevPlayers) => {
        if (prevPlayers) {
            return [...prevPlayers, playerFormData];
        } else {
            return [playerFormData];
        }
        });
        handleAddPlayersStore(playerFormData)
    
        setPlayerFormData({
        ...playerFormData,
        nome: '',
        camisa: 0,
        });

        setPlayersNumber(playersNumber + 1)
        setIsVisible(!isVisible);
    }
        
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
    
        if(name.toLocaleLowerCase() === "camisa"){
            setPlayerFormData({
                ...playerFormData,
                [name]: parseInt(value, 10)
            })
        }
        else{
            setPlayerFormData({
              ...playerFormData,
              [name]: value
            });
        }
    };

    function handleIsModalClose(){
        setIsErr(false)
    }

    // if(isErr) {
    //     return (
            
    //     )
    // }

    return (
        <div className="flex flex-col w-1/4 h-full text-xs md:text-lg select-none">
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
            <div className="flex justify-around items-center p-3 bg-green-400 font-bold text-white ">
                <span className=" whitespace-nowrap">
                    {sectorName}
                </span>
                <div className={`
                    ${playerOfPosition 
                        && maxPlayers && 
                        playerOfPosition?.length >= maxPlayers ?
                        "cursor-not-allowed" : "cursor-pointer"
                
                }`} title="Adicionar jogador">
                    <UserPlus fill="white" className={`${
                        playerOfPosition && 
                        maxPlayers && 
                        playerOfPosition?.length >= maxPlayers ?
                        "" : "hover:text-gray-200"
                    }`} size={32} onClick={toggleVisibility}/>
                </div>
            </div>
            <div className={`flex flex-1 flex-col justify-center items-center border border-white overflow-hidden
                ${isEven ? "bg-green-500" : "bg-green-600"} relative
            `}>
                {playerOfPosition ? playerOfPosition.map((player, index) => (
                    <div key={index}  className="flex justify-around items-center h-full text-white font-semibold">
                        {player.posicao == sectorName ? 
                            <div className="flex justify-center items-center gap-2 flex-col ">
                                <div className="flex items-center justify-center">
                                    <User2 fill="red" color="black" size={32} className="text-blue-500"/>
                                    <div title="Excluir jogador">
                                        <Trash2 
                                            strokeWidth={3} 
                                            size={20} 
                                            className="cursor-pointer" 
                                            onClick={() => removePlayer(index)}
                                        />
                                    </div>
                                </div>
                                <div className="flex justify-center items-center gap-1 overflow-hidden">
                                    <div className="">
                                        {player.nome.split(" ").length > 1 ? `${player.nome.split(" ")[0][0]}.${player.nome.split(" ")[1]} ` : player.nome}
                                    </div>
                                    <div>
                                        {player.camisa}
                                    </div>
                                </div>
                            </div>
                        : ""}
                    </div>
                )) : ""}
                {isVisible && (
                    <div
                    className={`absolute top-0 left-0 z-10 bg-zinc-200 p-4 border shadow ${isVisible ?  "slide-enter" : "slide-exit"} w-full rounded-b-3xl`}
                    >
                        <div className="">
                            <label htmlFor="nome">
                                <span>Nome:</span>
                                <input 
                                    type="text" 
                                    name="nome" 
                                    id="nome" 
                                    value={playerFormData.nome}
                                    onChange={handleChange}
                                    placeholder="Nome do jogador"
                                    className={`
                                        outline-none rounded-2xl px-2 w-[100%] 
                                    `}
                                />
                            </label>
                            <label htmlFor="nome">
                                <span>Camisa:</span>
                                <input 
                                    type="number" 
                                    name="camisa" 
                                    id="camisa" 
                                    onChange={handleChange}
                                    value={playerFormData.camisa}
                                    placeholder="Camisa do jogador"
                                    className={`
                                        outline-none rounded-2xl px-2 w-[100%] 
                                    `}
                                />
                            </label>
                            <div className="flex w-full justify-center items-center pt-4">
                                <button 
                                    onClick={handleAddPlayer}
                                    className={`
                                        bg-green-400 hover:bg-green-500 text-white font-bold px-4 py-2 rounded-2xl
                                    `}
                                >
                                    Adicionar
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
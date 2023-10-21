import { PlusIcon, Trash2, User2, UserPlus, X } from "lucide-react"
import { useState } from "react"

// interface SubstituesProps {
//     reservas: any[]
// }

interface SubstitutesProps{
    maxPlayers?: number
    sectorName: string
}

interface PlayerProps {
    nome: string
    posicao: string
    camisa: number
    situacao: string
}


export default function Substitutes({maxPlayers} : SubstitutesProps) {

    const POSICOES = ['gol','def', 'mc','ata']

    const [playersNumber, setPlayersNumber] = useState(0)
    const [isVisible, setIsVisible] = useState(false);
    const [reservas, setReservas] = useState<PlayerProps[] | undefined>()
    const [positionSelected, setPositionSelected] = useState<string>(POSICOES[0])
    const [playerFormData, setPlayerFormData] = useState<PlayerProps>({
        nome: '',
        posicao: positionSelected,
        camisa: 0,
        situacao: 'Reserva'
    })

    const toggleVisibility = () => {
        if(reservas && maxPlayers && reservas?.length >= maxPlayers) return 
        setIsVisible(!isVisible);
        setPlayerFormData({
            ...playerFormData,
            ["nome"]: "",
            ["camisa"]: 0
        });
    };

    function removePlayer (index: number ) {

        if(reservas)
            setReservas(reservas.slice(0, index)
            .concat(reservas.slice(index + 1)));
    }
    

    function handleAddPlayer() {

        if(reservas && maxPlayers && reservas?.length >= maxPlayers) 
            return console.log("O numero de jogadores maximo para posição foi atingido.")

        if (playerFormData.nome === '') {
            console.log('Nome não pode estar em branco');
            return;
        }
        if (playerFormData.camisa === 0) {
            console.log('Camisa não pode estar em branco ou 0');
            return;
        }
        
        setReservas((prevPlayers) => {
        if (prevPlayers) {
            return [...prevPlayers, playerFormData];
        } else {
            return [playerFormData];
        }
        });
    
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
    
        setPlayerFormData({
          ...playerFormData,
          [name]: value
        });
    };

    return (
        <div className="p-2 select-none relative bg-green-500 text-white font-semibold border border-white flex gap-6 overflow-x-auto">
            {reservas ? reservas.map((player, index) => (
                <div key={index}  className="flex justify-center items-center gap-2 flex-col text-sm ">
                    <div className="flex items-center justify-center">
                        <User2 fill="red" color="black" size={32} className="text-blue-500"/>
                        <div title="Excluir jogador">
                            <Trash2 onClick={() => removePlayer(index)} strokeWidth={3} size={20} className="cursor-pointer"/>
                        </div>
                    </div>
                    <div className="flex justify-center items-center gap-1">
                        <div>
                            {player.nome.split(" ").length > 1 ? `${player.nome.split(" ")[0][0]}.${player.nome.split(" ")[1]} ` : player.nome}
                        </div>
                        <div>
                            {player.camisa}
                        </div>
                    </div>
                </div>
            )) : ""
            }
            {isVisible && (
                <div
                className={`absolute top-0 left-0 z-10 bg-zinc-200 h-full flex border shadow ${isVisible ?  "slide-rigth" : "slide-left"} rounded-r-xl text-md`}
                >
                    <div className="flex justify-between gap-3 pl-2 items-center text-black font-normal">
                        <label htmlFor="nome">
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
                        <label htmlFor="camisa">
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
                        <select 
                            value={positionSelected} 
                            onChange={(event) => {
                                setPositionSelected(event.target.value);
                                setPlayerFormData({
                                  ...playerFormData,
                                  posicao: event.target.value 
                                });
                            }}
                            name="posicao" 
                            className="outline-none rounded-2xl">
                            {POSICOES.map((posicao, index) => (
                                <option key={index} value={posicao}>{posicao.toUpperCase()}</option>
                            ))}
                        </select>
                        <div className="flex gap-3 justify-end pr-4 items-center ">
                            <button 
                                onClick={handleAddPlayer}
                                className={`
                                    bg-green-400 flex justify-center items-center hover:bg-green-500 text-white font-bold px-1 py-1 rounded-2xl
                                `}
                            >
                                <PlusIcon/>
                            </button>
                            <button 
                                onClick={toggleVisibility}
                                className={`
                                    bg-red-400 flex justify-center items-center hover:bg-red-500 text-white font-bold px-1 py-1 rounded-2xl
                                `}
                            >
                                <X/>
                            </button>
                        </div>
                    </div>
                </div>
            )}
            <div className="flex justify-center items-center gap-2 flex-col text-sm ">
                <div className="flex items-center justify-center">
                    <UserPlus onClick={toggleVisibility}  size={32} className="text-zinc-300 fill-zinc-300 hover:fill-zinc-200 hover:text-zinc-200 cursor-pointer"/>
                </div>
                <div className="flex justify-center items-center gap-1">
                    Add Player
                </div>
            </div>
        </div>
    )
}
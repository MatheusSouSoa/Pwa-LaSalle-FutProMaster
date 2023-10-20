import { Trash2, User2 } from "lucide-react"
import { useState } from "react"

// interface SubstituesProps {
//     reservas: any[]
// }

interface SubstitutesProps{
    maxPlayers?: number
    sectorName: string
    players: any[] | undefined
    isEven?: boolean
}

interface PlayerProps {
    nome: string
    posicao: string
    camisa: number
    situacao: string
}


export default function Substitutes({maxPlayers, sectorName} : SubstitutesProps) {

    const [playersNumber, setPlayersNumber] = useState(0)
    const [isVisible, setIsVisible] = useState(false);
    const [reservas, setReservas] = useState<PlayerProps[] | undefined>()
    const [playerFormData, setPlayerFormData] = useState<PlayerProps>({
        nome: '',
        posicao: sectorName,
        camisa: 0,
        situacao: 'Titular'
    })

    function removePlayer (index: number ) {
        console.log(index)

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
    
        console.log(playerFormData)
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
        console.log(reservas)
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
        <div className="p-2 bg-green-500 text-white font-semibold border border-white flex gap-6 overflow-x-auto">
                    {reservas ? reservas.map((player, index) => (
                        <div key={index}  className="flex justify-center items-center gap-2 flex-col ">
                            <div className="flex items-center justify-center">
                                <User2 fill="red" color="black" size={32} className="text-blue-500"/>
                                <div title="Excluir jogador">
                                    <Trash2 strokeWidth={3} size={20} className="cursor-pointer"/>
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
                    )) : ""}
                </div>
    )
}
import { format } from "date-fns";
import { PlusIcon, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../../../utils/modal/Modal";
import { useMatches } from "../../../hooks/matchesProvider/MatchesProvider";
import { getTeams } from "../../../services/RegisterTeam";
import { useUsersStore } from "../../../stores/userStore";
import { useMatchesStore } from "../../../stores/matchesStore";

interface PartidaProps {
    data: Date,
    minutos: number,
    timeA: {
        nome: string,
        placar: number
    },
    timeB: {
        nome: string,
        placar: number
    }
}

interface PlayerProps {
    nome: string
    posicao: string
    camisa: number
    situacao: string
}

interface TimeProps {
    nome: string,
    players: PlayerProps[]
}



export default function MatchesContent() {

    // const times = [
    //     {
    //       nome: "Flamengo",
    //       jogadores: [
    //         { nome: 'Jogador 1', camisa: 10, situacao: 'titular', posicao: 'ATA' },
    //         { nome: 'Jogador 2', camisa: 5, situacao: 'reserva', posicao: 'DEF' },
    //       ]
    //     },
    //     {
    //       nome: "Corinthians",
    //       jogadores: []
    //     },
    //     {
    //       nome: "São Paulo",
    //       jogadores: []
    //     },
    //     // Você pode adicionar mais times aqui
    // ];

    const partidas:PartidaProps[] = [
        {
            data: new Date(Date.now()),
            minutos: 15,
            timeA: {
                nome: "Flamengo",
                placar: 3
            },
            timeB: {
                nome: "Palmeiras",
                placar: 1
            }
        },
        {
            data: new Date(Date.now()),
            minutos: 15,
            timeA: {
                nome: "Time A",
                placar: 3
            },
            timeB: {
                nome: "Time B",
                placar: 1
            }
        },
        {
            data: new Date(Date.now()),
            minutos: 15,
            timeA: {
                nome: "Time A",
                placar: 3
            },
            timeB: {
                nome: "Time B",
                placar: 1
            }
        },
        {
            data: new Date(Date.now()),
            minutos: 15,
            timeA: {
                nome: "Time A",
                placar: 3
            },
            timeB: {
                nome: "Time B",
                placar: 1
            }
        },
        {
            data: new Date(Date.now()),
            minutos: 15,
            timeA: {
                nome: "Time A",
                placar: 3
            },
            timeB: {
                nome: "Time B",
                placar: 1
            }
        },
        {
            data: new Date(Date.now()),
            minutos: 15,
            timeA: {
                nome: "Time A",
                placar: 3
            },
            timeB: {
                nome: "Time B",
                placar: 1
            }
        },
    ]

    const navigate = useNavigate();
    const {handleMinutes} = useMatches()
    const [timeA, setTimeA] = useState<string>("Selecione um time")
    const [timeB, setTimeB] = useState<string>("Selecione um time")
    const [times, setTimes] = useState<string[]>([])
    const[timeObj, setTimeObj] = useState<TimeProps[]>([])
    const [ minutos, setMinutos] = useState(0)
    const match = useMatchesStore(state => state.adicionarTimes)

    
    const user = useUsersStore(state => state.user)

    useEffect(() =>{
        async function fetchTeams () {
            if(user){
                getTeams(user.uid).then((data: []) => {
                    if (data) {
                        setTimeObj(Object.values(data))
                        setTimes(Object.values(data).map((time: TimeProps) => {
                            return time.nome
                        }))
                    } 
                });   
            }
        }
        fetchTeams()
    }, [])
 

    const redirecionarParaOutraPagina = () => {
        if (!timeA || !timeB) {
            return;
        }

        console.log(timeA, timeB, timeObj)
        const teamA = timeObj.find((time) => time.nome.includes(timeA));
        const teamB = timeObj.find((time) => time.nome.includes(timeB));
        if(teamA && teamB){
            console.log(teamA, teamB)
        }
        
        if (teamA && teamB) {
            // handleTeamA(teamA);
            // handleTeamB(teamB);
            const partida = {
                minutos: minutos,
                timeA: teamA,
                timeB: teamB,
                data: new Date()
            }
            match(partida)
            navigate("/matches/create-match");
        } else {
            console.error("Time não encontrado");
        }
    }

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        handleMinutes(0)
        setIsModalOpen(true);
    };
  
    const handleCloseModal = () => {
      setIsModalOpen(false);
    };


    return (
        <div className="bg-zinc-300 w-full h-screen screenCalc flex p-3 text-sm md:text-xl">
            <div className="flex flex-col w-full rounded-lg overflow-hidden ">
                <div className="bg-white flex justify-between items-center p-5 border border-b-black">
                    <div className="font-semibold ">
                        Historico de jogos
                    </div>
                    <div onClick={handleOpenModal} className="bg-green-400 text-white rounded-full p-2 hover:bg-green-600 cursor-pointer">
                        <PlusIcon />
                    </div>
                    <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                        <div>
                            <div className="flex justify-end pb-3">
                                <X className="text-red-500 cursor-pointer" onClick={handleCloseModal}/>
                            </div>
                            <div className="flex justify-center items-center flex-col gap-6 text-3xl">
                                <div className="flex flex-col gap-5  items-center justify-center ">
                                    <select 
                                        className="outline-none border rounded-md"
                                        name="" 
                                        id=""
                                        value={timeA}
                                        onChange={(event) => setTimeA(event.target.value)}
                                    >
                                        <option value="">Selecione um time</option>
                                        {times && times.map((time, index) => (
                                            <option key={index} value={time}>{time}</option>
                                        ))}
                                    </select>
                                    X
                                    <select 
                                        className="outline-none border rounded-md"
                                        name="" 
                                        id=""
                                        value={timeB}
                                        onChange={(event) => {
                                            return setTimeB(event.target.value)}
                                        }
                                        >
                                        <option value="">Selecione um time</option>
                                        {times && times.map((time, index) => (
                                            <option key={index} value={time}>{time}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="flex">
                                    <span className="pr-2">Minutos:</span>
                                    <input 
                                        type="number" 
                                        placeholder="minutos a serem jogados" 
                                        required
                                        className=" outline-none border-1 bg-zinc-100 px-2 rounded-md w-12 border hover:bg-zinc-200 focus:bg-zinc-200 text-zinc-600"
                                        value={minutos}
                                        onChange={(event) => setMinutos(parseInt(event.target.value))}
                                    />
                                </div>
                                <div>
                                    <button onClick={redirecionarParaOutraPagina} className="bg-green-500 hover:bg-green-400 px-4 py-2 rounded-md font-black text-white">
                                        Confirmar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Modal>
                </div>
                <div className="bg-zinc-200 h-full p-5 flex flex-col gap-5 overflow-y-auto">
                    {partidas.map((partida, index) => (
                        <div key={index} className="bg-white h-56 rounded-lg cursor-pointer hover:bg-green-300 flex flex-col justify-between items-center text-zinc-700 hover:text-white">
                            <div className="border-b w-full flex justify-between items-center">
                                <div className="flex gap-3 px-2">
                                    <span>
                                        Data:
                                    </span>
                                    <span>
                                        {format(partida.data, "dd/MM/yyyy HH:mm:ss")}
                                    </span>
                                </div>
                                <div className="flex gap-3 px-2">
                                    <span>Minutos jogados:</span>
                                    <span>{minutos}</span>
                                </div>
                            </div>
                            <div className="w-full flex justify-between items-center p-2 text-xl sm:text-2xl md:text-4xl lg:text-5xl ">
                                <div className=" flex-1">
                                    {partida.timeA.nome}
                                </div>
                                <div className="">
                                    {partida.timeA.placar}
                                </div>
                                <div className=" font-black ">
                                    X
                                </div>
                                <div className=" ">
                                    {partida.timeB.placar}
                                </div>
                                <div className=" font-semibold flex-1 text-end">
                                    {partida.timeB.nome}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
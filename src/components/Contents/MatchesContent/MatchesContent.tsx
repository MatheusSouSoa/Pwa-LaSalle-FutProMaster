import { format } from "date-fns";
import { PlusIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

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

export default function MatchesContent() {

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

    const redirecionarParaOutraPagina = () => {
        navigate('/matches/create-match');
    }

    return (
        <div className="bg-zinc-300 w-full h-screen screenCalc flex p-3 text-sm md:text-xl">
            <div className="flex flex-col w-full rounded-lg overflow-hidden ">
                <div className="bg-white flex justify-between items-center p-5 border border-b-black">
                    <div className="font-semibold ">
                        Historico de jogos
                    </div>
                    <div className="bg-green-400 text-white rounded-full p-2 hover:bg-green-600 cursor-pointer">
                        <PlusIcon onClick={redirecionarParaOutraPagina}/>
                    </div>
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
                                    <span>{partida.minutos}</span>
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
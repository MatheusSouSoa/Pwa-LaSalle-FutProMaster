import SectorPlayers from "../../sector_players/SectorPlayers";
import Substitutes from "../../substitutes/Substitutes";

export default function HomeContent() {

    // const [players, setPlayers] = useState<any[]>()
    const players = [
        {
            nome: "Henrique",
            camisa: 1,
            posicao: "Goleiro",
            situcao: "Titular"
        },
        {
            nome: "Matheus",
            camisa: 10,
            posicao: "Ataque",
            situcao: "Titular"
        },
        {
            nome: "Bione",
            camisa: 9,
            posicao: "Ataque",
            situcao: "Titular"
        },
        {
            nome: "Welton",
            camisa: 8,
            posicao: "Meio-Campo",
            situcao: "Titular"
        },
        {
            nome: "bebeto",
            camisa: 5,
            posicao: "Meio-Campo",
            situcao: "Titular"
        },
        {
            nome: "bebeto",
            camisa: 2,
            posicao: "Defesa",
            situcao: "Titular"
        },
        {
            nome: "Dudu",
            camisa: 3,
            posicao: "Defesa",
            situcao: "Titular"
        },
        {
            nome: "Nathan",
            camisa: 7,
            posicao: "Meio-Campo",
            situcao: "Titular"
        },
        {
            nome: "Luiz Guilherme",
            camisa: 4,
            posicao: "Defesa",
            situcao: "Titular"
        },
        {
            nome: "Pedro Lucas",
            camisa: 13,
            posicao: "Ataque",
            situcao: "Titular"
        },
        {
            nome: "Pedro",
            camisa: 6,
            posicao: "Defesa",
            situcao: "Titular"
        },
        {
            nome: "Reserva1",
            camisa: 26,
            posicao: "Defesa",
            situcao: "Reserva"
        },
        {
            nome: "Reserva2",
            camisa: 25,
            posicao: "Defesa",
            situcao: "Reserva"
        },
        {
            nome: "Reserva3",
            camisa: 24,
            posicao: "Defesa",
            situcao: "Reserva"
        },
        {
            nome: "Reserva4",
            camisa: 23,
            posicao: "Defesa",
            situcao: "Reserva"
        },
        {
            nome: "Reserva5",
            camisa: 22,
            posicao: "Defesa",
            situcao: "Reserva"
        },
        {
            nome: "Reserva6",
            camisa: 21,
            posicao: "Defesa",
            situcao: "Reserva"
        },
        {
            nome: "Reserva7",
            camisa: 20,
            posicao: "Defesa",
            situcao: "Reserva"
        },
    ]

    const reservas = players.filter((player) => player.situcao.toLocaleLowerCase() !== "titular")

    return (
        <div className="bg-gray-300 w-full h-screen screenCalc flex p-3 text-sm md:text-xl">
            <div className="flex flex-col w-full rounded-2xl overflow-hidden">
                <div className="bg-white p-2">
                    infos
                </div>
                <div className="flex bg-green-500 h-full overflow-hidden">
                    <SectorPlayers sectorName="Goleiro" players={players} maxPlayers={1}/>
                    <SectorPlayers sectorName="Defesa" isEven players={players} maxPlayers={5}/>
                    <SectorPlayers sectorName="Meio-Campo" players={players} maxPlayers={5}/>
                    <SectorPlayers sectorName="Ataque" isEven players={players} maxPlayers={4}/>
                </div>
                <Substitutes reservas={reservas}/>
            </div>
        </div>
    )
}
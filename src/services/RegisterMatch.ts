import { ref, set } from "firebase/database"
import { db } from "../firebase"

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

interface MatchProps {
    data: Date,
    minutos: number,
    time_a: TimeProps,
    time_b: TimeProps
}

export function registerMatch(usuario_uid: string , match: MatchProps){
    set(ref(db, `users/${usuario_uid}/matches/${new Date().getTime()}`), match)
}


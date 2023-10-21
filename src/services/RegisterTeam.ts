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

export function registerTeam(usuario_uid: string , time: TimeProps){
    set(ref(db, `users/${usuario_uid}/times/${new Date().getTime()}`), time)
}


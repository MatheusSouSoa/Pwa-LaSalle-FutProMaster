import { get, ref, set } from "firebase/database"
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

export async function getTeams(usuario_uid: string){
    const teamsRef = ref(db, `users/${usuario_uid}/times`);

  try {
    const snapshot = await get(teamsRef);
    if (snapshot.exists()) {
      const data = snapshot.val();
      return data;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Erro ao obter times:", error);
    throw error;
  }
}


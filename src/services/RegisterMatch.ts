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
    gols: number,
    players: PlayerProps[]
}

interface MatchProps {
    data: Date,
    minutos: number,
    home: TimeProps,
    away: TimeProps
}

// export function registerMatch(usuario_uid: string , match: MatchProps){
//     set(ref(db, `users/${usuario_uid}/matches/${new Date().getTime()}`), match)
// }

export function registerMatch(usuario_uid: string, match: MatchProps) {
    const timestamp = new Date().getTime(); // Obtém o timestamp atual

    const matchData = {
        ...match,
        data: timestamp,
    };

    set(ref(db, `users/${usuario_uid}/matches/${timestamp}`), matchData);
}

// export async function getMatchs(usuario_uid: string){
//     const macthesRef = ref(db, `users/${usuario_uid}/matches`);

//   try {
//     const snapshot = await get(macthesRef);
//     if (snapshot.exists()) {
//       const data = snapshot.val();
//       return data;
//     } else {
//       return null;
//     }
//   } catch (error) {
//     console.error("Erro ao obter times:", error);
//     throw error;
//   }
// }

export async function getMatchs(usuario_uid: string) {
    const matchesRef = ref(db, `users/${usuario_uid}/matches`);

    try {
        const snapshot = await get(matchesRef);
        if (snapshot.exists()) {
            const data = snapshot.val();

            for (const key in data) {
                data[key].data = new Date(data[key].data);
            }

            return data;
        } else {
            return null;
        }
    } catch (error) {
        console.error("Erro ao obter partidas:", error);
        throw error;
    }
}


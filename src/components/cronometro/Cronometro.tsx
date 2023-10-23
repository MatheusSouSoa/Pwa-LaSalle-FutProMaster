import { ClockClockwise, SoccerBall } from '@phosphor-icons/react';
import { Clock, Flag, Pause, Play, XCircle } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { useMatchesStore } from '../../stores/matchesStore';
import { useNavigate } from 'react-router-dom';
import { useUsersStore } from '../../stores/userStore';
import { registerMatch } from '../../services/RegisterMatch';

interface CronometroProps {
    homeGols: number
    awayGols: number
    redirecionar: () => void
    handleHomeGoal: (reset: boolean, value: number) => void
    handleAwayGoal: (reset: boolean, value: number) => void
}

function Cronometro({homeGols, awayGols, handleAwayGoal, handleHomeGoal}: CronometroProps) {
  
  const partida = useMatchesStore(state => state.matche)
  const [tempoTotal, setTempoTotal] = useState(0);
  const [tempoLimite, setTempoLimite] = useState<number>(partida?.minutos || 0);
  const [progresso, setProgresso] = useState(0);
  const [cronometroAtivo, setCronometroAtivo] = useState(false);
  const segundosLimite = tempoLimite! * 60 || 0;
  const [lastGoal, setLastGoal] = useState<string | undefined>()
  const [notification, sendNotification] = useState(true)

  const navigate = useNavigate()


  const alternarCronometro = () => {
    setCronometroAtivo(!cronometroAtivo);
  }

  const user = useUsersStore(state => state.user)

  function salvarPartida() {
    if(minutosRestantes > 0 && segundosRestantes > 0) {
      return console.log("Partida ainda n terminou.")
    }

    if(user && partida?.minutos && partida.timeA && partida.timeB){
      registerMatch(user?.uid, {
        data: new Date(),
        minutos: partida?.minutos,
        home: {...partida?.timeA, gols: homeGols},
        away: {...partida?.timeB, gols: awayGols}
      })
      navigate("/matches")
    }
    else{
      return false
    }

  }

  
  const reiniciarCronometro = () => {
    setCronometroAtivo(false);
    setTempoTotal(0);
    setProgresso(0);
    handleAwayGoal(true, 0)
    handleHomeGoal(true, 0)
    sendNotification(true)
  }

  function golCasa() {
    if(cronometroAtivo){
      handleHomeGoal(false, 1)
      setLastGoal('home')
    }
  }
  
  function golVisitante() {
    if(cronometroAtivo){
      handleAwayGoal(false, 1)
      setLastGoal('away')
    }
  }

  function anularGol() {
    if(lastGoal == 'away') handleAwayGoal(false, -1)
    else handleHomeGoal(false, -1)
  }
  
  const iniciarCronometro = () => {
    if (tempoLimite > 0) {
      setCronometroAtivo(true);
      playAudio()
    }
  }

  const adicionarMinuto = () => {
    if (!cronometroAtivo) {
      setTempoLimite(tempoLimite + 1);
    }
  }
  
  useEffect(() => {
    const interval = setInterval(() => {
      if (cronometroAtivo && tempoTotal < segundosLimite) {
        setTempoTotal(tempoTotal + 1);
        setProgresso((tempoTotal / segundosLimite) * 100);
      }
      
      if (tempoTotal >= segundosLimite) {
        setCronometroAtivo(false);
      }
    }, 1000);
    
    
    return () => clearInterval(interval);
  }, [tempoTotal, segundosLimite, cronometroAtivo]);
  
  const minutosRestantes = Math.floor((segundosLimite - tempoTotal) / 60);
  const segundosRestantes = (segundosLimite - tempoTotal) % 60;

  
  async function callNotification() {
    if (minutosRestantes === 0 && segundosRestantes === 0) {
      if (Notification.permission === 'granted') {
        const notificationOptions = {
          body: `${partida?.timeA.nome} ${homeGols} X ${awayGols} ${partida?.timeB.nome}`,
          icon: "/whistle.svg",
        };

        if ('serviceWorker' in navigator) {
          navigator.serviceWorker.ready.then(function (registration) {
            registration.showNotification(`A partida entre ${partida?.timeA.nome} e ${partida?.timeB.nome} chegou ao fim!`, notificationOptions);
          });
        }
      } else if (Notification.permission !== 'denied') {
        const permission = await Notification.requestPermission();

        if (permission === 'granted') {
          const notificationOptions = {
            body: `A partida entre ${partida?.timeA.nome} e ${partida?.timeB.nome} chegou ao fim!`,
            icon: "/whistle.svg",
          };

          if ('serviceWorker' in navigator) {
            navigator.serviceWorker.ready.then(function (registration) {
              registration.showNotification(`A partida entre ${partida?.timeA.nome} e ${partida?.timeB.nome} chegou ao fim!`, notificationOptions);
            });
          }
        }
      }
    }
    sendNotification(false);

    if ('vibrate' in navigator) {
      navigator.vibrate([200, 100, 200, 100, 200]);
    }
  }
  const audioElement = useRef<HTMLAudioElement | null>(null);
  
  const playAudio = () => {
    if (audioElement.current) {
      audioElement.current.play();
    }
  }

  // const stopAudio = () => {
  //   if (audioElement.current) {
  //     audioElement.current.pause();
  //     audioElement.current.currentTime = 0;
  //   }
  // }

  if (minutosRestantes === 0 && segundosRestantes === 0 && notification == true) {
    callNotification();
    playAudio()
  }


  

  return (
    <div className=" text-2xl w-full">
      <audio ref={audioElement} src='/apito.mp3' preload='auto'/>
      <div className="relative">
        <div className="flex mb-2 items-center justify-between">
          <div>
            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-green-200">
                <span className='pr-2'>
                    Progresso
                </span>
                <span className="text-xs font-semibold inline-block text-green-600">
                {progresso.toFixed(1)}%
                </span>
            </span>
          </div>
          <div className="text-right text-lg font-semibold inline-block text-green-600">
            <p>Resta {minutosRestantes} min {segundosRestantes} seg</p>
          </div>
        </div>
        <div className="flex mb-2 items-center justify-between">
          <div className="w-full">
            <div className="overflow-hidden h-2 text-xs flex rounded bg-green-200">
              <div
                style={{ width: `${progresso}%` }}
                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-600"
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div className="space-x-4 mt-4 flex overflow-x-auto px-5 pb-4">
        {minutosRestantes === tempoLimite ? (
            <button title='Iniciar partida' onClick={iniciarCronometro} className="text-green-500 bg-white hover:text-white hover:bg-green-500 px-4 py-2 rounded-md border">
            <Play/>
            </button> 
            ) : (
                <>
                    <button onClick={alternarCronometro} className="text-green-500 hover:text-white bg-white border hover:text hover:bg-green-500 px-4 py-2 rounded-md">
                    {cronometroAtivo ? <Pause/> : <Play/>}
                    </button>
                    <button onClick={reiniciarCronometro} className="text-green-500 hover:text-white border hover:text hover:bg-green-500 px-4 py-2 rounded-md">
                        <ClockClockwise/>
                    </button>
                    <button onClick={adicionarMinuto} className="text-green-500 border hover:text-white hover:text hover:bg-green-500 px-4 py-2 rounded-md text-sm">
                        +1 <Clock className='w-6 h-6'/>
                    </button>
                    <button onClick={golCasa} className="flex flex-col justify-center items-center text-green-500 hover:text-white hover:text border hover:bg-green-500 px-4 py-2 rounded-md text-sm">
                        Home <SoccerBall className='w-6 h-6'/>
                    </button>
                    <button onClick={golVisitante} className="flex flex-col  justify-center items-center text-green-500 hover:text-white hover:text border hover:bg-green-500 px-4 py-2 rounded-md text-sm">
                        Away <SoccerBall className='w-6 h-6'/>
                    </button>
                    <button onClick={anularGol} className="flex flex-col  justify-center items-center text-red-500 hover:text-white border hover:bg-red-500 px-4 py-2 rounded-md text-sm">
                        Anular <XCircle className='w-6 h-6'/>
                    </button>
                </>
            )
        }
          <div className="flex flex-col justify-center items-center text-red-500 bg border hover:text-white hover:bg-red-500 px-4 py-2 rounded-md text-sm cursor-pointer" onClick={salvarPartida} title='Finalizar partida'>
              <Flag className="fill-white "/>
          </div>
      </div>
    </div>
  );
}

export default Cronometro;
